//David Gall, 04/07/14, Industry Expression
//This project will be about my industry but I have no idea what I am going to calculate yet.

var firstName = prompt("Please enter your first name.");//I am asking for an input value from the user.
var lastName = prompt("Please enter your last name.");//I am asking for the users last name.
var hoursPerWeek = Number(prompt("How many hours do you work in a week?"));//prompt to find out the users hours per week.
var hourlyWage = Number(prompt("What is your hourly wage? There is no need to put a dollar sign."));//User prompt to find out their hourly wage.

console.log(firstName +" "+lastName+"\n"+hoursPerWeek+" hours per week"+"\n"+"$"+hourlyWage);//This shows the user input information in a stacked format.
var weeklyEarnings = hoursPerWeek * hourlyWage;//calculation to get the users amount of pay for a week.
var monthlyEarnings = weeklyEarnings * 4;//calculation for finding the users monthly earnings.
var yearlyEarnings = weeklyEarnings * 52;//Users yearly earnings for the numbers that they input.

var userInformation = new Array();
userInformation[0] = ("Name: " +firstName+" "+lastName);//This will put a line for the name.
userInformation[1] = ("Hours per week: "+hoursPerWeek);//This will give a line for the hours per week.
userInformation[2] = ("Hourly wage: "+hourlyWage);//This will give a line for displaying the hourly wage result.
userInformation[3] = ("Weekly earnings "+weeklyEarnings);//This will give the users weekly earnings.
console.log(userInformation[0] +"\n"+userInformation[1]);
//var company = prompt("Please enter the company you work for.");//I am asking for the users company name that they work for.
//var state = prompt("Please enter the state where your businesses home of operations is.");//Asking here for the name of the state the business resides.




