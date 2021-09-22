//compute Interest 
function compute() {

    const amount = document.getElementById("amount").value;

    const rate = document.getElementById("rate").value;

    const years = document.getElementById("years").value;

    var year = new Date().getFullYear() + parseInt(years);

    const result = document.getElementById("result");

    const interest = amount * years * rate / 100;

    result.innerHTML = "If you deposit <mark>" + amount + "</mark>,\<br\>at an interest rate of <mark>" + rate + "%</mark>\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>";

    if (parseInt(amount) <= 0) {
        confirm("Enter a positive number");
        document.getElementById("maindiv").reset();
    }

}

//update range value 
function updateRate() {

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + " %";

}

