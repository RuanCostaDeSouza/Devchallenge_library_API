import { BookRepository } from "../../../repositories/implementation/BookRepository";
import { DeleteBookService } from "./DeleteBookService";

const bookRepository = new BookRepository()
const deleteBookService = new DeleteBookService(bookRepository)


export {deleteBookService}