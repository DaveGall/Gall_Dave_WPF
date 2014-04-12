//David Gall, 04/11/14, Conditionals worksheet.
//Last chance for gas.

//user enter the MPG for their car.
var mpg = prompt("What is your cars miles per gallon?");
//Have the user enter how much gas they have left.
var prcntLeft = prompt("How much gas do you have left in your tank?");
//Have the user input the size of their gas tank.
var tankCapacity = prompt("How many gallons of gas does your tank hold?");
//Calculation for the percentage of gas left in the tank.
var tankPrcnt = prcntLeft/100;
//I will calculate the distance the car could travel on the gas left in the tank.
var distance = tankCapacity * tankPrcnt * mpg;
//I will now calculate the gallons left in the tank.
var gallonsLeft = tankCapacity * tankPrcnt;
//The first part of the if/else statement that will produce the true results.
if(distance > 200){
    console.log("Yes you can make it without stopping for gas!");
}else{
    console.log()
}
