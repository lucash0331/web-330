
/*
	Title: appetizer.js
	Author: Lucas Hoffman
	Date: 8/27/2021
	Description: JavaScript file for appetizer 
	Link to GitHub repository: https://github.com/lucash0331/web-330
	Link to Landing page: https://lucash0331.github.io/web-330/
*/

//Importing product class from product.js fileS
import { Product } from "./product.js";

//Exporting Appetizer class and defining properties.
export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
