<<<<<<< HEAD
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
=======
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
>>>>>>> 4fa8f3d93e75a6878f3c6e8b501b24a6ed4f4c03
}