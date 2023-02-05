import { book as impBookData } from "./book";
import { auhtor as impAuthorData } from "./author";
import { category as impCategoryData } from "./category";

const bookData = impBookData.data.books.data;
const authorData = impAuthorData.data.authors.data;
const categoryData = impCategoryData.data.categories.data;

export { bookData, authorData, categoryData };
