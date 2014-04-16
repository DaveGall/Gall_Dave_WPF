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
    console.log("Since it is Monday morning just go back to sleep.");
    //This is the section that will display when the user chooses monday or Monday and PM or pm.
}if((dayOfWeek === "monday" || dayOfWeek === "Monday") && (timeOfDay === "pm" || timeOfDay ==="PM")){
    console.log("Let's get this Monday afternoon off to a good start with a walk.");
}//This next section will display if the user chooses tuesday or Tuesday and am or AM.
if((dayOfWeek === "tuesday" || dayOfWeek === "Tuesday") && (timeOfDay === "am" || timeOfDay === "AM")){
    console.log("Head out for another walk on this fine Tuesday morning.");
}//This next section will display if the user chooses tuesday Tuesday and pm or PM.
if((dayOfWeek === "tuesday" || dayOfWeek === "Tuesday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    console.log("It's Tuesday afternoon, time for a BBQ!!");
}//This next section is the true if statement for if the user chooses wednesday or Wednesday and am or AM.
if((dayOfWeek === "wednesday" || dayOfWeek === "Wednesday") && (timeOfDay === "am" || timeOfDay === "AM")){
    console.log("Get over those hump day blues and buy yourself something nice this fine Wednesday morning.");
}//This next section is the true if statement for if the user chooses wednesday or Wednesday and pm or PM.
if((dayOfWeek === "wednesday" || dayOfWeek === "Wednesday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    console.log("Hump day is the perfect day for pizza night!!");
}//This next section is for the user who chooses thursday or Thursday and am or AM.
if((dayOfWeek === "thursday" || dayOfWeek === "Thursday") && (timeOfDay === "am" || timeOfDay === "AM")){
    console.log("Thursday morning is the perfect time for some Family Guy on DVD.");
}//This next line of code will display if the user chooses thursday or Thursday and pm or PM.
if((dayOfWeek === "thursday" || dayOfWeek === "Thursday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    console.log("Thursday afternoon is wing day. Wings will make you feel like it's Friday.");
}//This next line of code will be for if the user decides on friday or Friday and am or AM.
if((dayOfWeek === "friday" || dayOfWeek === "Friday") && (timeOfDay === "am" || timeOfDay === "AM")){
    console.log("Friday morning is a great time to head to the river for a little R & R.");
}//This next line of code is for if the user chooses friday or Friday and pm or PM.
if((dayOfWeek === "friday" || dayOfWeek === "Friday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    console.log("Well it's Friday night, which is movie night.");
}//This next set of code will be displayed if the user chooses saturday or Saturday and am or AM.
if((dayOfWeek === "saturday" || dayOfWeek === "Saturday") && (timeOfDay === "am" || timeOfDay === "AM")){
    console.log("It's Saturday morning, time to head up to take a hike in the hills today.");
}//This next line of code will be for those users who choose saturday or Saturday and pm or PM.
if((dayOfWeek === "saturday" || dayOfWeek === "Saturday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    console.log("It's still Saturday and hopefully you are still out hiking from this morning.");
}//This next line of code will determine the results for the users who choose sunday or Sunday and am or AM.
if((dayOfWeek === "sunday" || dayOfWeek === "Sunday") && (timeOfDay === "am" || timeOfDay === "AM")){
    console.log("Sunday morning and time to stop by the local donut shop for coffee and donuts.");
}//This next line of code will display the results if the user chooses sunday or Sunday and pm or PM.
if((dayOfWeek === "sunday" || dayOfWeek === "Sunday") && (timeOfDay === "pm" || timeOfDay === "PM")){
    console.log("Sunday evening, time for cake!! You made it through the week good job!!");
}