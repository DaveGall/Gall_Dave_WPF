//David Gall, 04/11/14, Conditionals worksheet.
//Tire Pressure 1
//Asking for variables that can be input into my Array.
var pressure = new Array();
pressure[0] = prompt("What is the pressure of your front driver side tire?");
//Asking for the pressure of the passenger side front tire.
pressure[1] = prompt("What is the pressure of your front passenger side tire?");
//Asking for the pressure of the rear passenger side tire.
pressure[2] = prompt("What is the pressure of your rear passenger tire?");
//Asking for my final variable of the rear driver side tires pressure.
pressure[3] = prompt("What is the tire pressure of your rear driver side tire?");
//I will now write my conditional statement to provide the desired results.
if((pressure[0] === pressure[1]) && (pressure[2] === pressure[3])){
    console.log("The tires pass spec!");//True statement results
}else{
    console.log("Get your tires checked out!");//False statement results.
}




















