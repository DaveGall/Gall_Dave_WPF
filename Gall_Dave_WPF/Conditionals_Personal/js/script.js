//David Gall, 04/14/14, Conditionals_Personal
//How long can we vacation for?
//Prompt to ask how much you have saved.
var savings = prompt("How much money do you have saved? \nJust a number please, you don't need any dollar signs.");
//This prompt is to get the cost of the hotel per night.
var hotel = prompt("How much does the hotel cost per night? \nJust a number please, you don't need any dollar signs.", "");
//Find out which mode of transportation they are taking. Driving yes or no.
var driving = prompt("Are you driving? (y) for yes or (n) for no.");
//Find out which mode of transportation they are taking. Flying yes or no.
var flying = prompt("Are you flying? (y) for yes or (n) for no.");
//Find out which mode of transportation they are taking. Train yes or no.
var train = prompt("Are you traveling by train? (y) for yes or (n) for no.");
//If there is no value in savings then this will prompt the user to enter valid data.
if(savings === ""){
    prompt("Oops you forgot to write in a number. Please try again.");
}
//If there is no value for hotel then this prompt will appear to ensure data is input.
if(hotel === ""){
    prompt("Oops you forgot to write in a number. Please try again.");
}
//Tests the driving prompt for a response.
if(driving === ""){
    prompt("Oops you forgot something. Please enter a valid response.");
}
//Tests the flying prompt for valid input
if(flying === ""){
    prompt("Oops you forgot something. Please enter a valid response.")
}