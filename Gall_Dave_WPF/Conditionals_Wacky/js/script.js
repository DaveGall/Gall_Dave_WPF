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
}//This next section will display if the user chooses tuesday or Tuesday and am or AM.
if((dayOfWeek === "tuesday" || dayOfWeek === "Tuesday") && (timeOfDay === "am" || timeOfDay === "AM")){
    alert("It's Tuesday AM");
}//This next section will display if the user chooses tuesday Tuesday and pm or PM.
if((dayOfWeek === "tuesday" || dayOfWeek === "Tuesday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    alert("It's Tuesday PM");
}//This next section is the true if statement for if the user chooses wednesday or Wednesday and am or AM.
if((dayOfWeek === "wednesday" || dayOfWeek === "Wednesday") && (timeOfDay === "am" || timeOfDay === "AM")){
    alert("It's Wednesday AM");
}//This next section is the true if statement for if the user chooses wednesday or Wednesday and pm or PM.
if((dayOfWeek === "wednesday" || dayOfWeek === "Wednesday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    alert("It's Wednesday PM");
}//This next section is for the user who chooses thursday or Thursday and am or AM.
if((dayOfWeek === "thursday" || dayOfWeek === "Thursday") && (timeOfDay === "am" || timeOfDay === "AM")){
    alert("It's Thursday AM");
}//This next line of code will display if the user chooses thursday or Thursday and pm or PM.
if((dayOfWeek === "thursday" || dayOfWeek === "Thursday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    alert("It's Thursday PM");
}//This next line of code will be for if the user decides on friday or Friday and am or AM.
if((dayOfWeek === "friday" || dayOfWeek === "Friday") && (timeOfDay === "am" || timeOfDay === "AM")){
    alert("It's Friday AM");
}//This next line of code is for if the user chooses friday or Friday and pm or PM.
if((dayOfWeek === "friday" || dayOfWeek === "Friday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    alert("It's Friday PM");
}//This next set of code will be displayed if the user chooses saturday or Saturday and am or AM.
if((dayOfWeek === "saturday" || dayOfWeek === "Saturday") && (timeOfDay === "am" || timeOfDay === "AM")){
    alert("It's Saturday AM");
}//This next line of code will be for those users who choose saturday or Saturday and pm or PM.
if((dayOfWeek === "saturday" || dayOfWeek === "Saturday") && (timeOfDay === "pm" || timeOfDay === "PM"){
    alert("It's Saturday PM");
}//This next line of code will determine the results for the users who choose sunday or Sunday and am or AM.
if((dayOfWeek === "sunday" || dayOfWeek === "Sunday") && (timeOfDay === "am" || timeOfDay === "AM")){
    alert("It's Sunday AM");
}//This next line of code will display the results if the user chooses sunday or Sunday and pm or PM.
if((dayOfWeek === "sunday" || dayOfWeek === "Sunday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    alert("It's Sunday PM");
}