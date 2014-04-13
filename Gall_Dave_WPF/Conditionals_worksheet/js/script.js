//David Gall, 04/11/14, Conditionals worksheet.
//Fahrenheit to Celsius.
var degree = prompt("What degree number would you like to convert?");
var farCel = prompt("Fahrenheit (f) or Celsius (c)?");
var f = 5/9 * (degree - 32);//calculation for fahrenheit to celsius.
var c = degree * 9/5 + 32;//calculation for celsius to fahrenheit.
//if condition for the number and f.
if(farCel === "f"){
    console.log("The temperature is "+ parseFloat(f).toFixed(2) +"\xB0 Celsius.");
}if(farCel === "c"){
    console.log("The temperature is "+ parseFloat(c).toFixed(2) +"\xB0 Fahrenheit.");
}
//Added parseFloat().toFixed(2) to make sure my answers were correct and not running decimals.


















