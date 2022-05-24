import { BookRepository } from "../../../repositories/implementation/BookRepository";
import { GetBookByTitleService } from "./GetbookByTitleService";

const bookRepository = new BookRepository();
const getBookByTitle = new GetBookByTitleService(bookRepository);

export { getBookByTitle }