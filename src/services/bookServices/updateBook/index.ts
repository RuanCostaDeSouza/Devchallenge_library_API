import { BookRepository } from "../../../repositories/implementation/BookRepository";
import { UpdateBookService } from "./UpdateBookService";

const bookRepository = new BookRepository();
const updateBookService = new UpdateBookService(bookRepository)


export {updateBookService}