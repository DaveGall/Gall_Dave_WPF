//David Gall, 04/14/14, Conditionals_Personal
//How long can we vacation for?
//Prompt to ask how much you have saved.
var savings = prompt("How much money do you have saved? \nJust a number please, you don't need any dollar signs.");
//This prompt is to get the cost of the hotel per night.
var hotel = prompt("How much does the hotel cost per night? \nJust a number please, you don't need any dollar signs.", "");
//Find out which mode of transportation they are taking. Driving yes or no.
var driving = prompt("Are you driving? (y) for yes or (n) for no.");
//This next series will give the correct response to the answer of the previous question.
if(driving === "y" || driving === "Y"){//if the response is yes then do this.
    var milesToDrive = prompt("How many miles away is your destination?");//Distance that is needed to calculate
    var priceOfGas = prompt("What is the average price of gas per gallon? \nNo symbols are needed just a umber.");//variable on price of gas per gallon.
    var milesPerGallon = prompt("What is your cars average miles per gallon?");//Getting information on the cars miles per gallon.
}if(driving === "n" || driving === "N"){//If the response is no then do this.
    //Find out which mode of transportation they are taking. Flying yes or no.
    var flying = prompt("Are you flying? (y) for yes or (n) for no.");//A no from the previous question will land you here.
}if(flying === "y" || flying === "Y"){//A yes to this question will produce the results below.
    var numberOfTickets = prompt("How many plane tickets did you buy?");//How many plane tickets they will need.
    var priceOfEach = prompt("How much was each plane ticket? \nNo need for any symbols just numbers is good.");//The cost of each plane ticket.
    var needARental = prompt("Will you need a rental car? (y) for yes and (n) for no.");//If a rental car is needed.
    if(needARental === "y" || needARental === "Y"){//Yes response for a rental car is the code below.
        var rentalDays = prompt("How many days will you need the rental car?");//Days the rental car is needed.
        var costOfRental = prompt("How much does the rental car cost per day? \nNo need for signs just a number will work.");//Cost of the rental car per day.
    }
}if(flying === "n" || flying === "N"){//A no response to the previous question will land you here.
    //Find out which mode of transportation they are taking. Train yes or no.
    var train = prompt("Are you traveling by train? (y) for yes or (n) for no.");
}if(train === "y" || train === "Y"){//This is the response if you choose to travel by train.
    var numberOfTrainTickets = prompt("How many train tickets do you need to purchase?");//How many train tickets are needed.
    var costPerTrainTicket = prompt("How much does each train ticket cost? \nNo need for any symbols just numbers is good.");//Cost of each ticket.
    var rentalCar = prompt("Will you need a rental car? (y) for yes or (n) for no.");//If a rental car is needed.
    if(rentalCar === "y" || rentalCar === "Y"){//Yes response for a rental car will produce the code below.
        var daysOfRental = prompt("How many days will you need the rental car?");//How many days the car is needed.
        var rentalCost = prompt("How much does the rental car cost per day? \nNo need for signs just a number will work.");//Cost per day of the rental.
    }
    //The next statement is in case they aren't traveling by train. At this point I have no other options for you sorry.
}else{
    alert("Sorry I have no other options for you at this time. Please check back in the future if your plans change.")
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