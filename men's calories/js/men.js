const showAmount = document.getElementById("result");
showAmount.style.display = "none";

function calculate(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;

    var first = 13.392 * parseFloat(weight);
    var second = 4.799 * parseFloat(height);
    var third = 5.677 * parseFloat(age);
    var total = first + second - third + 88.362;


    console.log(total);
    console.log("calculated");

    showAmount.style.display= "block";

    var showBMR = document.getElementById("result");
    showBMR.innerHTML = (Math.round(total * 100) / 100).toFixed(2) + " kcal/day";
    /* showBMI.innerHTML = total; */
}