//ch3_example4

var degFahren = new Array(212, "string data", -459.15);
var degCent = new Array();
var loopCounter;

for (loopCounter = 0; loopCounter <= 2; loopCounter++) {

    if (isNaN(degFahren[loopCounter])) {
        alert("Data '" + degFahren[loopCounter] + "' at array index " + loopCounter + " is invalid.");
        continue;
    }
}
    degCent[loopCounter] = 5/9 * (degFahren[loopCounter] - 32);
for (loopCounter = 2; loopCounter >= 0; loopCounter--){
    document.write("Value "+loopCounter+" was "+degFahren[loopCounter]+" degrees Fahrenheit");
    document.write(" which is "+degCent[loopCounter]+" degrees centigrade<br/>");
}




