
/*
	Title: beverage.js
	Author: Lucas Hoffman
	Date: 8/27/2021
	Description: JavaScript file for beverage
	Link to GitHub repository: https://github.com/lucash0331/web-330
	Link to Landing page: https://lucash0331.github.io/web-330/
*/

//Importing product class from product.js file.
import { Product } from "./product.js";

//Exporting Beverage class and defining properties.
export class Beverage extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
