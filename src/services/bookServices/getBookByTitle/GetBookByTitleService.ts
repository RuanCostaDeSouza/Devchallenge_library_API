import { IBookRepository } from "../../../repositories/IBookRepository";

export class GetBookByTitleService{
    constructor(
        private bookRepository:IBookRepository
    ){}

    async execute(title:string){
        const bookListByTitle = await this.bookRepository.searchByTitle(title);

        if(!bookListByTitle){
            throw new Error("No books found!")
        }

        return bookListByTitle
    }
}