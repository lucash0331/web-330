/*
============================================
; Title: Assignment 5.2 product.js
; Date: 12 September 2021
; Author: Lucas Hoffman
; Description: Assignment 5.2's product.js file
;===========================================
*/

// Creates Product class and exports it
export class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
 //Generates random number
      this.id = Math.random().toString(16).slice(2);
    }
  }
