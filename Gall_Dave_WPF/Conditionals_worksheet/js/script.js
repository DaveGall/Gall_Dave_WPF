//David Gall, 04/11/14, Conditionals worksheet.
//Celsius to Fahrenheit conversion
//first I am going to ask for a temperature to convert from the user.
var degrees = parseInt(prompt("Type in the temperature you would like to convert to Celsius or Fahrenheit."));
var f = "f";
var c = "c";
//Create a statement that will display the results of the fahrenheit temperature entered into degrees celsius.
if(Number(degrees) && f){
    console.log("The temperature is "+parseFloat(5/9 * (degrees - 32)).toFixed(2)+"\xB0 celsius.");//If the input is a number and f then the output will be converted into celsius.
}else if(Number(degrees) && c) {
    console.log(degrees * 9 / 5 + 32);//If statement that will convert the celsius to fahrenheit.
}
