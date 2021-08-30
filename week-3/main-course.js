/*
	Title: main-course.js
	Author: Lucas Hoffman
	Date: 8/27/2021
	Description: JavaScript file for main course
	Link to GitHub repository: https://github.com/lucash0331/web-330
	Link to Landing page: https://lucash0331.github.io/web-330/
*/

//Importing Product from product.js file.
import { Product } from "./product.js";

//Exporting the Product class and assigning its properties.
export class MainCourse extends Product {
  constructor(name, price) {
    super(name, price);
  }
}