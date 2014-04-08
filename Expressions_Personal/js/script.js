//Expressions_Personal, David Gall, 04/07/14
//How many gallons of gas will it take and how much will it cost.

var milesToDrive = prompt("How much gas will you need and how much will it cost you?  \nTo find this out lets start with how many miles you will be driving?");//first variable/prompt to get miles to drive.
var carsMPG = prompt("Next lets get how many miles per gallon your car gets on average?");//another variable to get data from the user for our equation.
var gasTank = prompt("How many gallons of gas does your car hold?");//Another needed variable that the user will input.
var costPerGallon = prompt("What is the cost of gas per gallon? Just a numerical amount \nyou don't need a dollar sign");//another variable to get from the user.
var oneTank = gasTank * carsMPG;//Constant for finding first the length the car can drive on one tank of gas.

