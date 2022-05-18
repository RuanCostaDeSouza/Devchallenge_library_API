import { BookRepository } from "../../../repositories/implementation/BookRepository";
import { CreateBookService } from "./CreateBookService";

const bookRepository = new BookRepository()
const createBookService = new CreateBookService(bookRepository)


export {createBookService}

