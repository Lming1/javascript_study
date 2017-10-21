/**
 * Created by iminhyeok on 2017. 10. 21..
 */

"use strict";

function calculate() {
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalInterest = document.getElementById("totalInterest");

    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) / 100 / 12;
    var payments = parseFloat(years.value) * 12;

    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    if (inFinite(monthly)) {
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalInterest.innerHTML = ((monthly*payments)-principal).toFixed(2);

        save(amount.value, apr.value, years.value, zipcode.value)
    }
}

