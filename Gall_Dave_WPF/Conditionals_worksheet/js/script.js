//David Gall, 04/11/14, Conditionals worksheet.
//Movie Ticket Price
//I will set up a variable of the time the movie starts.
var movieTime = prompt("What time does the movie start?");
//I will now set up the variable for the users age.
var customerAge = prompt("How old are you?");
//I am creating the if/else statement to get the desired results.
if(movieTime >= 3 && movieTime <=5 || customerAge >=55 && customerAge <=10){//This if statement accounts for two different variables that will give the same result. 
    console.log("The ticket price is $7.00.");
}else{
    console.log("The ticket price is $12.00.");
}



















