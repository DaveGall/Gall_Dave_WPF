//Expressions_Personal, David Gall, 04/07/14
//How many gallons of gas will it take and how much will it cost.

var milesToDrive = prompt("How much gas will you need and how much will it cost you?  \nTo find this out lets start with how many miles you will be driving?");//first variable/prompt to get miles to drive.
var carsMPG = prompt("Next lets get how many miles per gallon your car gets on average?");//another variable to get data from the user for our equation.
var costPerGallon = prompt("What is the cost of gas per gallon? Just a numerical amount \nyou don't need a dollar sign");//another variable to get from the user.
var gallonsNeeded = milesToDrive / carsMPG;//Constant for finding how many gallons it will take to reach the destination.
var tripCost = gallonsNeeded * costPerGallon;//Constant for finding out how much the trip will cost.
console.log("You will use " + )


