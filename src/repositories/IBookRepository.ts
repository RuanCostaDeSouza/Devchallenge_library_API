import { Books } from "@prisma/client";
import { BookEntity } from "../entities/BookEntity";

export interface IBookRepository{
    findAll():Promise<Books[]>;
    save(data:BookEntity):Promise<any>;
    findById(id:string):Promise<BookEntity>;
    deleteById(id:string):Promise<any>;
    findByTitle(title:string):Promise<BookEntity>;
    searchByTitle(title:string):Promise<Books[]>;
    updateById(data:BookEntity):Promise<void>;
}