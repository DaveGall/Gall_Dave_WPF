//David Gall, 04/11/14, Conditionals worksheet.
//Celsius to Fahrenheit conversion
//first I am going to ask for a temperature to convert from the user.
var degrees = parseInt(prompt("Type in the temperature you would like to convert to Celsius or Fahrenheit."));
// f = degrees * 9/5 + 32;//If the temp is in celsius.
// c = 5/9 * (degrees - 32);//If the temp is in fahrenheit.
//Create a statement that will display the results of the fahrenheit temperature entered into degrees celsius.
if(Number(degrees) && "f"){
    console.log(5/9 * (degrees - 32));
}