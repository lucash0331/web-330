<<<<<<< HEAD
/*
	Title: bill.js
	Author: Lucas Hoffman
	Date: 8/27/2021
	Description: JavaScript file for bill
	Link to GitHub repository: https://github.com/lucash0331/web-330
	Link to Landing page: https://lucash0331.github.io/web-330/
*/

//Exporting bill class & defining its properties.
export class Bill {
  //Assigning to empty arrays.
  constructor(_beverages, _appetizers, _mainCourses, _desserts) {
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  //functions that will add specific items.
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }

  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }

  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }

  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  //Get total function that will take the chosen items and add to the total price.
  getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(function (beverage) {
      total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function (appetizer) {
      total += parseFloat(appetizer.price);
    });

    let mainCourse = this._mainCourses.forEach(function (mainCourse) {
      total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function (dessert) {
      total += parseFloat(dessert.price);
    });

    return total.toFixed(2);
  }
=======
/*
	Title: bill.js
	Author: Lucas Hoffman
	Date: 8/27/2021
	Description: JavaScript file for bill
	Link to GitHub repository: https://github.com/lucash0331/web-330
	Link to Landing page: https://lucash0331.github.io/web-330/
*/

//Exporting bill class & defining its properties.
export class Bill {
  //Assigning to empty arrays.
  constructor(_beverages, _appetizers, _mainCourses, _desserts) {
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  //functions that will add specific items.
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }

  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }

  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }

  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  //Get total function that will take the chosen items and add to the total price.
  getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(function (beverage) {
      total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function (appetizer) {
      total += parseFloat(appetizer.price);
    });

    let mainCourse = this._mainCourses.forEach(function (mainCourse) {
      total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function (dessert) {
      total += parseFloat(dessert.price);
    });

    return total.toFixed(2);
  }
>>>>>>> 4fa8f3d93e75a6878f3c6e8b501b24a6ed4f4c03
}