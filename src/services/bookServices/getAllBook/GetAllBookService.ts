import { IBookRepository } from "../../../repositories/IBookRepository";

export class GetAllBookService{
    constructor(
        private bookRepository:IBookRepository
    ){}

    async execute(){
        const bookList = await this.bookRepository.findAll();

        if(!bookList || bookList.length == 0){
            throw new Error("No book registered!")
        }
        return bookList
    }
}