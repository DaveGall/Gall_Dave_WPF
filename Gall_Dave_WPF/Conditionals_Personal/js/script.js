//David Gall, 04/14/14, Conditionals_Personal
//How long can we vacation for?
//Prompt to ask how much you have saved.
var savings = prompt("How much money do you have saved? \nJust a number please, you don't need any dollar signs.");
//This prompt is to get the cost of the hotel per night.
var hotel = prompt("How much does the hotel cost per night? \nJust a number please, you don't need any dollar signs.", "");
//Find out which mode of transportation they are taking. Driving yes or no.
var driving = prompt("Are you driving? (y) for yes or (n) for no.");
//This next series will give the correct response to the answer of the previous question.
if(driving === "y"){
    var milesToDrive = prompt("How many miles away is your destination?");
}if(driving === "n"){
    //Find out which mode of transportation they are taking. Flying yes or no.
    var flying = prompt("Are you flying? (y) for yes or (n) for no.");
}if(flying === "y"){
    var numberOfTickets = prompt("How many plane tickets did you buy?");
    var priceOfEach = prompt("How much was each plane ticket? \nNo need for any symbols just numbers is good.");
}if(flying === "n"){
    //Find out which mode of transportation they are taking. Train yes or no.
    var train = prompt("Are you traveling by train? (y) for yes or (n) for no.");
}if(train === "y"){
    var numberOfTrainTickets = prompt("How many train tickets do you need to purchase?");
    var costPerTrainTicket = prompt("How much does each train ticket cost? \nNo need for any symbols just numbers is good.");
}


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
    prompt("Oops you forgot something. Please enter a valid response.");
}
//Tests the train prompt for input.
if(train === ""){
    prompt("Oops you forgot something. Please enter a valid response.");
}