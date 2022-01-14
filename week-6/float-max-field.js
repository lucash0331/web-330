<<<<<<< HEAD
/*
Title: float-max-field.js
Author: Lucas Hoffman
Date: 09/18/2021
Description: Float max field JS file for week 6
*/

export class FloatMaxField{
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }
    
    validate(){
        let floatField = parseFloat(this.field);
        return (floatField < this.max);
    } 

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
=======
/*
Title: float-max-field.js
Author: Lucas Hoffman
Date: 09/18/2021
Description: Float max field JS file for week 6
*/

export class FloatMaxField{
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }
    
    validate(){
        let floatField = parseFloat(this.field);
        return (floatField < this.max);
    } 

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
>>>>>>> 4fa8f3d93e75a6878f3c6e8b501b24a6ed4f4c03
}