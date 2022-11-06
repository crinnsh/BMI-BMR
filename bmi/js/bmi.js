const showAmount = document.getElementById("result");
showAmount.style.display = "none";

function calculate(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var weightheight = parseFloat(weight) / parseFloat(height);
    var weightheightheight = weightheight / parseFloat(height);
    var total = weightheightheight * 10000;

    console.log(total);
    console.log("calculated");

    showAmount.style.display= "block";

    var showBMI = document.getElementById("result");
    showBMI.innerHTML = (Math.round(total * 100) / 100).toFixed(2);
    /* showBMI.innerHTML = total; */
}