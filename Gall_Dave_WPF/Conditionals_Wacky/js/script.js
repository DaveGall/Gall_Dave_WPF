//David Gall, 04/15/14, Conditionals_Wacky
//Decide what to do during summer break.
//The first prompt will get the user to input a day of the week.
var dayOfWeek = prompt("What day of the week is it today?");
//This will appear if the user does not make an entry into the day of week prompt.
if(dayOfWeek === ""){
    prompt("Oops I think you forgot something. Please type in a day of the week.");
}
//This variable prompt will ask the user if it is am or pm.
var timeOfDay = prompt("Is it am or pm?");
//This next if true statement will make sure the user enters a value into the prompt.
if(timeOfDay === ""){
    prompt("Oops I think you forgot something. Please type in am or pm.");
}
//This next section will be if the user chooses monday or Monday and am or AM.
if((dayOfWeek === "monday" || dayOfWeek === "Monday") && (timeOfDay === "am" || timeOfDay === "AM")){
    alert("It's Monday AM");
    //This is the section that will display when the user chooses monday or Monday and PM or pm.
}if((dayOfWeek === "monday" || dayOfWeek === "Monday") && (timeOfDay === "pm" || timeOfDay ==="PM")){
    alert("It's Monday PM");
}