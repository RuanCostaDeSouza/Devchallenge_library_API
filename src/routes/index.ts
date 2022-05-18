import { Router } from "express";
import { BookController } from "../controllers/bookControllers/CreateBookController";


const bookController = new BookController()
const Routes = Router();

Routes
    .post("/api/create/book", bookController.handleCreateBook)
    .delete("/api/delete/book/:id",bookController.handleDeleteBook)

export {Routes}