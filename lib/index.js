import path from "path";
import { promises as fs } from "fs";

const jsonDirectory = path.join(process.cwd(), "json");

async function getData() {
  //Find the absolute path of the json directory
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  //Return the content of the data file in json format
  const data = JSON.parse(fileContents);
  return data.data.books.data;
}
async function getAutors() {
  //Find the absolute path of the json directory
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/author.json",
    "utf8"
  );
  //Return the content of the data file in json format
  const data = JSON.parse(fileContents);
  return data.data.authors.data;
}
async function getCategories() {
  //Find the absolute path of the json directory
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/category.json",
    "utf8"
  );
  //Return the content of the data file in json format
  const data = JSON.parse(fileContents);
  return data.data.categories.data;
}

export { getData, getAutors, getCategories };
