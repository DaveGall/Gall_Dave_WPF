//David Gall, 04/11/14, Conditionals worksheet.
//Tire Pressure 1
//Asking for variables that can be input into my Array.
var lfTire = prompt("What is the pressure of your front driver side tire?");
//Asking for the pressure of the passenger side front tire.
var rfTire = prompt("What is the pressure of your front passenger side tire?");
//Asking for the pressure of the rear passenger side tire.
var rrTire = prompt("What is the pressure of your rear passenger tire?");
//Asking for my final variable of the rear driver side tires pressure.
var rlTire = prompt("What is the tire pressure of your rear driver side tire?");
//I am going to add my Array.
var pressure = new Array();//Begins my Array.
//Adding the first variable to my list.
pressure[0] = lfTire;
//Adding the second for rfTire.
pressure[1] = rfTire;
//Adding the results of rrTire.
pressure[2] = rrTire;
//Adding the results of rlTire.
pressure[3] = rlTire;
//I will now write my conditional statement to provide the desired results.
if((pressure[0] === pressure[1]) && (pressure[2] === pressure[3])){
    console.log("The tires pass spec!");//True statement results
}else{
    console.log("Get your tires checked out!");//False statement results.
}




















