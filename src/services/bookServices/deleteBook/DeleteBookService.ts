import { IBookRepository } from "../../../repositories/IBookRepository";

export class DeleteBookService{
    constructor(
        private bookRpository:IBookRepository
    ){}

    async execute(data:string){
        const checkBookExists = await this.bookRpository.findById(data);
        if(!checkBookExists){
            throw new Error("Id not exists");
        }

        await this.bookRpository.deleteById(data);
    }
}