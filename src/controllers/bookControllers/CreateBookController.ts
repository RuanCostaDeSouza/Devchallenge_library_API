import { Request,Response } from "express";
import { createBookService } from "../../services/bookServices/createBook/Index";
import { deleteBookService } from "../../services/bookServices/deleteBook";
import { updateBookService } from "../../services/bookServices/updateBook";
import { getAllBook } from "../../services/bookServices/getAllBook";
import { getBookByTitle } from "../../services/bookServices/getBookByTitle";

export class BookController{

    async handleCreateBook(request:Request,response:Response){
        const {title,publishing_company,picture,author} = request.body;

        try{
            await createBookService.execute({
                title,
                publishing_company,
                picture,
                author
            })

            return response.status(201).json();
        }catch(err){
            console.log(err)
            return response.status(400).json({
                message:err.message || "Unexpected error"
            })
        }
    }

    async handleDeleteBook(request:Request, response:Response){
        const {id} = request.params;

        try{
            await deleteBookService.execute(id)

            return response.status(200).json()
        }catch(err){
            return response.status(400).json({
                message: err.message || "Unexpected error"
            })
        }
    }
    async handleUpdateBook(request:Request,response:Response){
        const {id} = request.params;
        const {title,publishing_company,picture,author} = request.body;

        try{
            await updateBookService.execute({
                id,
                title,
                publishing_company,
                picture,
                author
            })

            return response.status(200).json();
        }catch(err){
            return response.status(400).json({
                message: err.message || "Unexpected error"
            })
        }
    }
    async handleGetAllBook(request:Request, response:Response){
        try{
            
            const bookList = await getAllBook.execute();

            return response.status(200).json(bookList);

        }catch(err){
            return response.status(400).json({
                message: err.message || "Unexpected error"
            })
        }
    }
    async handleSearchByTitle(request:Request, response:Response){
        const {title} = request.params;

        try{
            const bookListByTitle = await  getBookByTitle.execute(title);

            return response.status(200).json(bookListByTitle);
        }catch(err){
            return response.status(400).json({
                message: err.message || "Unexpected error"
            })
        }
    }
}