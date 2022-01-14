/*
Title: finance-calculator.js
Author: Lucas Hoffman
Date: 09/18/2021
Description: Finance calculator JS file for week 6
*/

export class FinanceCalculator {

    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * FinanceCalculator.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));

        return futureValue.toFixed(2);
    }

    static convertToCurrency(field){
        let currencyFormatter = new Intl.NumberFormat('en-US', { 
            style: 'currency',
            currency: 'USD' 
        });
        return currencyFormatter.format(field);
    }
}