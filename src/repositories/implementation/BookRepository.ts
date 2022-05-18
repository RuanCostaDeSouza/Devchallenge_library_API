import { IBookRepository } from "../IBookRepository";
import { BookEntity } from "../../entities/BookEntity";
import { ClientPrisma } from "../../database/PrismaClient";
import { Books } from "@prisma/client";

export class BookRepository implements IBookRepository{
    async findAll(): Promise<Books[]> {
        const bookList = await ClientPrisma.books.findMany()
        
        return bookList
    }
    async findById(id:string): Promise<BookEntity> {
        const data = await ClientPrisma.books.findFirst({where:{id}})

        return data
    }
    async save(data:BookEntity): Promise<any> {
        await ClientPrisma.books.create({data:data})
    }
    async deleteById(id: string): Promise<any> {
        await ClientPrisma.books.delete({where:{id}})
    }
    async findByTitle(title: string): Promise<BookEntity> {
        const data = await ClientPrisma.books.findFirst({where:{title}})

        return data
    }
}