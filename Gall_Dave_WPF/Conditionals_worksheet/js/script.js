//David Gall, 04/11/14, Conditionals worksheet.
//Check Login problem.
//A prompt to retrieve the users username.
var userName = prompt("Please enter your username.");
//A prompt to retrieve the users password.
var password = prompt("Please enter your password.");
//inputting the correct username and password for the computer to check against.
var name = "Dave Gall";
var pass = "Princess1";
//I am starting my if/else statement to determine if the username and password are correct.
if(userName === name && password === pass){
    console.log("Welcome "+name+ "!");//If the complete name and password are true then this will be the result.
}if(!(userName === name)){
    console.log("User not found. Try again.");//If just the username is wrong this will be the result.
}if(!(password === pass)){
    console.log("Password does not match our records.");//If just the password does not match this will be the result.
}
//I have tried all the variables and if/true conditions and they all work with the set password and username.



















