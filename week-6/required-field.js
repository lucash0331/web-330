/*
Title: required-field.js
Author: Lucas Hoffman
Date: 09/18/2021
Description: Required field JS file for week 6
*/

export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    validate() {
        return Boolean(this.field)
    };
     getMessage() {
         return `${this.name} is a required field.`
     }
}