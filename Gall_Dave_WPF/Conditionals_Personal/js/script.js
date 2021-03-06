//David Gall, 04/14/14, Conditionals_Personal
//How much will your vacation cost your family and can you afford it?
//Prompt to ask how much you have saved.
var savings = prompt("How much money do you have saved? \nJust a number please, you don't need any dollar signs.");
//If there is no value in savings then this will prompt the user to enter valid data.
if(savings === ""){
    prompt("Oops you forgot to write in a number. Please try again.");
}
//Get the length of the vacation from the user.
var duration = prompt("How many days is your trip planned for?");

//Tests the duration prompt to make sure there is a response.
if(duration === ""){
    prompt("Oops you forgot to write in a number. Please try again.");
}
//This prompt is to get the cost of the hotel per night.
var hotel = prompt("How much does the hotel cost per night? \nJust a number please, you don't need any dollar signs.", "");
//If there is no value for hotel then this prompt will appear to ensure data is input.
if(hotel === ""){
    prompt("Oops you forgot to write in a number. Please try again.");
}
//Find out which mode of transportation they are taking. Driving yes or no.
var driving = prompt("Are you driving? (y) for yes or (n) for no.");
//Tests the driving prompt for a response.
if(driving === ""){
    prompt("Oops you forgot something. Please enter a valid response.");
}
//This next series will give the correct response to the answer of the previous question.
if(driving === "y" || driving === "Y"){//if the response is yes then do this.
    var milesToDrive = prompt("How many miles away is your destination?");//Distance that is needed to calculate
    if(milesToDrive === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }
    var priceOfGas = prompt("What is the average price of gas per gallon? \nNo symbols are needed just a number x.xx.");//variable on price of gas per gallon.
    if(priceOfGas === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }
    var milesPerGallon = prompt("What is your cars average miles per gallon?");//Getting information on the cars miles per gallon.
    if(milesPerGallon === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }
}if(driving === "n" || driving === "N") {//If the response is no then do this.
    //Find out which mode of transportation they are taking. Flying yes or no.
    var flying = prompt("Are you flying? (y) for yes or (n) for no.");//A no from the previous question will land you here.
//Tests the flying prompt for valid input
}if(flying === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }if(flying === "y" || flying === "Y"){//A yes to this question will produce the results below.
    var numberOfTickets = prompt("How many plane tickets did you buy?");//How many plane tickets they will need.
    if(numberOfTickets === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }
    var priceOfEach = prompt("How much was each plane ticket? \nNo need for any symbols just numbers is good.");//The cost of each plane ticket.
    if(priceOfEach === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }
    var needARental = prompt("Will you need a rental car? (y) for yes and (n) for no.");//If a rental car is needed.
    if(needARental === "y" || needARental === "Y"){//Yes response for a rental car is the code below.
        var rentalDays = prompt("How many days will you need the rental car?");//Days the rental car is needed.
        if(rentalDays === "")
            prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
        var costOfRental = prompt("How much does the rental car cost per day? \nNo need for signs just a number will work.");//Cost of the rental car per day.
        if(costOfRental === ""){
            prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
        }
    }
}if(flying === "n" || flying === "N"){//A no response to the previous question will land you here.
    //Find out which mode of transportation they are taking. Train yes or no.
    var train = prompt("Are you traveling by train? (y) for yes or (n) for no.");
//Tests the train prompt for input.
    if(train === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }
}if(train === "y" || train === "Y"){//This is the response if you choose to travel by train.
    var numberOfTrainTickets = prompt("How many train tickets do you need to purchase?");//How many train tickets are needed.
    if(numberOfTrainTickets === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }
    var costPerTrainTicket = prompt("How much does each train ticket cost? \nNo need for any symbols just numbers is good.");//Cost of each ticket.
    if(costPerTrainTicket === ""){
        prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
    }
    var rentalCar = prompt("Will you need a rental car? (y) for yes or (n) for no.");//If a rental car is needed.
    if(rentalCar === "y" || rentalCar === "Y"){//Yes response for a rental car will produce the code below.
        var daysOfRental = prompt("How many days will you need the rental car?");//How many days the car is needed.
        if(daysOfRental === ""){
            prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
        }
        var rentalCost = prompt("How much does the rental car cost per day? \nNo need for signs just a number will work.");//Cost per day of the rental.
        if(rentalCost === ""){
            prompt("Oops you forgot something. Please enter a valid response.");//If no input is made.
        }
    }

}if(train === "n" || train === "N"){
    console.log("I am sorry I can not help you at this time. Please check back at a later date.");//A prompt for those who just choose to select no throughout the prompts.
}
//All calculations for the code are placed here.
//equation to determine the cost if traveling by car.
var byCarGas = milesToDrive / milesPerGallon * priceOfGas;//Cost of gas for the trip.
var totalCostDriving = (byCarGas + hotel) * duration;//cost of gas plus hotel multiplied by the number of days of the trip.
var moneyLeftDriving = savings - totalCostDriving;//savings minus the total cost of the trip.
//equation if the user chooses to travel by plane.
var planeTickets = priceOfEach * numberOfTickets;//cost of all the plane tickets.
var rentalCarPlane = costOfRental * rentalDays;//cost of rental car if needed.
var livingCostPlane = (hotel * duration) + (priceOfEach * numberOfTickets) + rentalCarPlane;//total cost of the trip if flying with a rental car.
var moneyLeftFlying = savings - livingCostPlane;//money left (if any) for the trip.
var noRentalFlying = hotel * duration + planeTickets;//travel costs without a rental car.
var moneyLeftNoRental = savings - noRentalFlying;//calculates the difference between the savings and the cost of the trip.
//These equations will be used for users who choose to take the train.
var costTrain = numberOfTrainTickets * costPerTrainTicket;//This will give a total of the cost of the train tickets.
var rentalTrain = daysOfRental * rentalCost;//This will give the cost of the rental car for those who choose to take the train.
var trainWithRental = costTrain + rentalTrain + (hotel * duration);//The total cost of the train trip with a rental car at the destination.
var trainNoRental = hotel * duration + costTrain;//The total cost of the trip with no car rental at the destination.
var moneyLeftTrainRental = savings - trainWithRental;//Calculates the difference between the savings and the actual cost with a rental.
var noRentalTrainTotal = savings - trainNoRental;//This will calculate the money left after subtracting the savings from the total cost of the trip with no rental.


//details the results for the user.
if((driving === "y" || driving === "Y") && (totalCostDriving < savings)) {
    console.log("The total cost of your trip will be $"+parseFloat(totalCostDriving).toFixed(2)+" dollars.\nYou will have $"+parseFloat(moneyLeftDriving).toFixed(2)+" dollars left to spend.");
//}if((driving === "y" || driving === "Y") && (totalCostDriving > savings)){
}if((driving === "y" || driving === "Y") &&  (totalCostDriving > savings)) {
    console.log("I am sorry you do not have enough money saved up for this vacation. You will be $"+parseFloat(moneyLeftDriving).toFixed(2)+" dollars short.");
}
//This if true statement is if the user chooses to travel by plane with a rental car at their destination and enough money for the trip.
if((driving === "n" || driving === "N") && (flying === "y" || flying === "Y") && (needARental === "y" || needARental === "Y") && (livingCostPlane < savings)){
    console.log("The total cost of your trip with a rental car will be $"+parseFloat(livingCostPlane).toFixed(2)+" dollars.");
    //This if true statement will be if the user requires a rental car at their destination but they don't have enough money.
}if((driving === "n" || driving === "N") && (flying === "y" || flying === "Y") && (needARental === "y" || needARental === "Y") && (livingCostPlane > savings)) {
    console.log("I am sorry you do not have enough money saved up for this vacation.\nYou are $" + parseFloat(moneyLeftFlying).toFixed(2) + " dollars short.");
    //this statement is if the user does not need a rental car and has enough money saved up for a vacation.
}if((driving === "n" || driving === "N") && (flying === "y" || flying === "Y") && (needARental === "n" || needARental === "N") && (noRentalFlying < savings)) {
    console.log("The total cost of your trip will be $" + parseFloat(noRentalFlying).toFixed(2) + " dollars. \nYou will have $" + parseFloat(moneyLeftNoRental).toFixed(2) + " dollars left to spend on your trip.");
//this statement is for a user who does not need a rental and does not have enough money.
}if((driving === "n" || driving === "N") && (flying === "y" || flying === "Y") && (needARental === "n"|| needARental === "N") && (noRentalFlying > savings)){
    console.log("I am sorry you do not have enough money saved up for this vacation.\nYou are $"+parseFloat(moneyLeftNoRental).toFixed(2)+" dollars short.");
    //This statement will give the results for those who choose not to drive or fly but go by train with a rental car at the end. Also with enough money to take the trip.
}if((driving === "n" || driving === "N") && (flying === "n" || flying === "N") && (train === "y" || train === "Y") && (rentalCar === "y" || rentalCar === "Y") && (trainWithRental < savings)){
    console.log("The total cost of your trip will be $"+parseFloat(trainWithRental).toFixed(2)+" dollars. You will have $"+parseFloat(moneyLeftTrainRental).toFixed(2)+" dollars left to spend.");
    //This statement will give the result for those who want to take the train with a rental car but do not have enough money for the trip.
}if((driving === "n" || driving === "N") && (flying === "n" || flying === "N") && (train === "y" || train === "Y") && (rentalCar === "y" || rentalCar === "Y") && (trainWithRental > savings)){
    console.log("I am sorry but you do not have enough money for your trip. You are $"+parseFloat(moneyLeftTrainRental).toFixed(2)+" dollars short.");
    //This next statement will give the results of taking the train with no rental and having enough money to pay for the trip.
}if((driving === "n" || driving === "N") && (flying === "n" || flying === "N") && (train === "y" || train === "Y") && (rentalCar === "n" || rentalCar === "N") && (trainNoRental < savings)){
    console.log("The total cost of your trip will be $"+parseFloat(trainNoRental).toFixed(2)+" dollars. You will have $"+parseFloat(noRentalTrainTotal).toFixed(2)+" dollars left to spend on your trip.");
    //This statement will give the results of taking the train with no rental but not having enough money to pay for the trip.
}if((driving === "n" || driving === "N") && (flying === "n" || flying === "N") && (train === "y" || train === "Y") && (rentalCar === "n" || rentalCar === "N") && (trainNoRental > savings)){
    console.log("I am sorry you do not have enough money saved for this trip. You are $"+parseFloat(noRentalTrainTotal).toFixed(2)+" dollars short.");
}