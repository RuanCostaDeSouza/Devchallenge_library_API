import { Router } from "express";
import { BookController } from "../controllers/bookControllers/CreateBookController";


const bookController = new BookController()
const Routes = Router();

Routes
    .post("/api/create/book", bookController.handleCreateBook)
    .delete("/api/delete/book/:id",bookController.handleDeleteBook)
    .put("/api/update/book/:id", bookController.handleUpdateBook)
    .get("/api/getall/book",bookController.handleGetAllBook)
    .get("/api/searchtitle/book/:title", bookController.handleSearchByTitle)

export {Routes}