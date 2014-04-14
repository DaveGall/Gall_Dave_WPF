//David Gall, 04/14/14, Conditionals_Personal
//How long can we vacation for?
//Prompt to ask how much you have saved.
var savings = prompt("How much money do you have saved? \nJust a number please, you don't need any dollar signs.");
//This prompt is to get the cost of the hotel per night.
var hotel = prompt("How much does the hotel cost per night? \nJust a number please, you don't need any dollar signs.", "");


//If there is no value in savings then this will prompt the user to enter valid data.
if(savings === ""){
    prompt("Oops you forgot to write in a number. Please try again.");
}
//If there is no value for hotel then this prompt will appear to ensure data is input.
if(hotel === ""){
    prompt("Oops you forgot to write in a number. Please try again.");
}