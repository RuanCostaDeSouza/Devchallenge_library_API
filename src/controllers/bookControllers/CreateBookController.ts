import { Request,Response } from "express";
import { createBookService } from "../../services/bookServices/createBook/Index";
import { deleteBookService } from "../../services/bookServices/deleteBook";

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
}