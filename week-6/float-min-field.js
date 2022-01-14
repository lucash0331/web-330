<<<<<<< HEAD
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
=======
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
>>>>>>> 4fa8f3d93e75a6878f3c6e8b501b24a6ed4f4c03
}