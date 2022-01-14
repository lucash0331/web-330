<<<<<<< HEAD
/*
Title: float-field.js
Author: Lucas Hoffman
Date: 09/18/2021
Description: Float field JS file for week 6
*/

export class FloatField {
    constructor(name, field) {
            this.name = name;
            this.field = field;
        }
    
    validate() {
        let checkNaN = parseFloat(this.field);
        
        return !isNaN(checkNaN)
    }
    
    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`
    }
=======
/*
Title: float-field.js
Author: Lucas Hoffman
Date: 09/18/2021
Description: Float field JS file for week 6
*/

export class FloatField {
    constructor(name, field) {
            this.name = name;
            this.field = field;
        }
    
    validate() {
        let checkNaN = parseFloat(this.field);
        
        return !isNaN(checkNaN)
    }
    
    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`
    }
>>>>>>> 4fa8f3d93e75a6878f3c6e8b501b24a6ed4f4c03
}