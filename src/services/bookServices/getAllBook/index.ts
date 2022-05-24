import { BookRepository } from "../../../repositories/implementation/BookRepository";
import { GetAllBookService } from "./GetAllBookService";

const bookRepository = new BookRepository();

const getAllBook = new GetAllBookService(bookRepository)

export {getAllBook}