import { ICreateBookDTO } from "./CreateBookDTO";
import { BookEntity } from "../../../entities/BookEntity";
import { IBookRepository } from "../../../repositories/IBookRepository";

export class CreateBookService{
    constructor(
        private bookRepository:IBookRepository
    ){}

    async execute(data:ICreateBookDTO){
        const bookAlreadyExists = await this.bookRepository.findByTitle(data.title);

        if(bookAlreadyExists){
            throw new Error("Book already exists");
        }

        if(data.author == " " || data.publishing_company ==" " || data.title == " " || data.picture == " "){
            throw new Error("Data incomplete");
        }

        const book = new BookEntity(data);

        await this.bookRepository.save(book)
    }
}