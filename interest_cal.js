function update_rate() {
    var r = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = r
}
function compute() {
    var principle = document.getElementById("principle").value;
    var rate = document.getElemenetById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principle * years * rate / 100;
    var yr = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principle) + parseFloat(interest);
    var result = document.getElementById("result");

    
    if (principle <= 0) {
        alert("Please Enter a positive number");
        document.getElementById("principle").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principle+ "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + yr + "</mark>" + "\<br\>";

    }
}
