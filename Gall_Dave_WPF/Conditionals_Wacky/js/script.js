//David Gall, 04/15/14, Conditionals_Wacky
//Decide what to do on a certain day.
//The first prompt will get the user to input a day of the week.
var dayOfWeek = prompt("What day of the week is it today?");
//This will appear if the user does not make an entry into the day of week prompt.
if(dayOfWeek === ""){
    prompt("Oops I think you forgot something. Please make type in a day of the week.");
}