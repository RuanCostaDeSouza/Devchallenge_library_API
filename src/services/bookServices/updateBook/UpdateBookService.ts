import { IBookRepository } from "../../../repositories/IBookRepository";
import { IUpdateBookDTO } from "./UpdateBookDTO";

export class UpdateBookService{
    constructor(
        private bookRepository:IBookRepository
    ){}
    async execute(data:IUpdateBookDTO){
        const checkBookExists = await this.bookRepository.findById(data.id);
        if(!checkBookExists){
            throw new Error("Book not found");
        }
        await this.bookRepository.updateById(data)
    }
}