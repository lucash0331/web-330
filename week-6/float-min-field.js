/*
Title: float-min-field.js
Author: Lucas Hoffman
Date: 09/18/2021
Description: Float min field JS file for week 6
*/

export class FloatMinField {
    constructor(name, field, min) {
            this.name = name;
            this.field = field;
            this.min = min;
        }
    
    validate() {
        let floatField = parseFloat(this.field);
        return (floatField > this.min);
    }

    getMessage() {
        return `${this.name} must be more than ${this.max}. You entered ${this.field}.`;
    }
}