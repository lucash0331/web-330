<<<<<<< HEAD
/*
============================================
; Title: Assignment 4.2
; Author: Lucas Hoffman
; Date: 09/04/2021
; Description: This program demonstrates the
; use of JavaScript modules.
    Link to GitHub repository: https://github.com/lucash0331/web-330
    Link to Github Landing page: https://lucash0331.github.io/web-330/
;===========================================
*/

// Import FoodModel class.
import { FoodModel } from "./food-model.js";

// Create CalorieConverter class.
export class CalorieConverter {
  // Create static variable array.
  static data = [
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150),
  ];

  static find(searchString) {
    return this.data.filter((foodModel) =>
      foodModel.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }
=======
/*
============================================
; Title: Assignment 4.2
; Author: Lucas Hoffman
; Date: 09/04/2021
; Description: This program demonstrates the
; use of JavaScript modules.
    Link to GitHub repository: https://github.com/lucash0331/web-330
    Link to Github Landing page: https://lucash0331.github.io/web-330/
;===========================================
*/

// Import FoodModel class.
import { FoodModel } from "./food-model.js";

// Create CalorieConverter class.
export class CalorieConverter {
  // Create static variable array.
  static data = [
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150),
  ];

  static find(searchString) {
    return this.data.filter((foodModel) =>
      foodModel.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }
>>>>>>> 4fa8f3d93e75a6878f3c6e8b501b24a6ed4f4c03
}