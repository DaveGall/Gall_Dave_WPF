//Dave Gall, 04/07/14, Expressions Worksheet, Average shopping bill

var myArray = new Array(50, 100, 40, 80, 120); //I have added the variable array for 5 weeks worth of shopping bills.
var totalGroceries = myArray[0] + myArray[1] + myArray[2] + myArray[3] + myArray[4];//I have added an equation to add up all the grocery bills.
var weeklyAvg = totalGroceries / 5;//I have added an equation to find the weekly average shopping cost.

console.log("You have spent a total of $" + totalGroceries + " on groceries over 5 weeks. That's an average of $" + parseFloat(weeklyAvg) + " per week."); //The complete equation to retrieve the desired results of your weekly average and total cost.
