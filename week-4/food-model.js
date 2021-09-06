/*
============================================
; Title: Assignment 4.2
; Author: Lucas Hoffman
; Date: 09/04/2021
; Description: This program demonstrates the
; use of JavaScript modules.
;===========================================
*/

import { CalorieConverter } from "./calorie-converter.js";

// Creating the FoodModel class
export class FoodModel {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
}