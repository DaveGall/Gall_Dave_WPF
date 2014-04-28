//David Gall, 04/27/2014, Personal Function Worksheet
//How many hours are spent keeping the dentist and your teeth happy?
/*How many times a day do you brush your teeth?
Approximately how many minutes do spend brushing your teeth?
-Do You floss your teeth?-
How many times a day do you floss?
Approximately how many minutes does it take you to floss?
-Do you rinse with mouthwash?-
How many times per day do you rinse?
No need for a prompt for amount of time that takes as we will average it to 1 minute per rinse.
-?How old are you?-
times brushing * length brushing = length brushing a day
times flossing * time flossing = length flossing a day
many rinse would just equal itself since we are averaging 1 minute per rinse.
age * 365 - 365 = This will account for the first year of life when you don't brush your teeth. The result will give the approximate number of days you have been alive.
78 - age = The amount of time they will spend the rest of their life on hygiene. The average life expectancy of women is 81 and men is 76 so I just used the average of those ages.
if age is > 78 then age * 365 - 365 = This will account for those that are older than 78 and will just return how long they have spent throughout their life on hygiene.
 */

function beforeTime(age, quantity, length){//This will return the value for the amount of time before their current age.
    var priorDays = age * 365 - 365;//The formula for finding the information.
    var lengthTime = quantity * length;//This is used for determining the length of time per day spent on hygiene.
    var totalTime = priorDays * lengthTime;//Total of time from the first year of their life.
    return totalTime;//The return value from the function.
}
function afterAge(age, times, duration){//This is the function for determining how long after their current age they will spend on hygiene.
    var futureDays = (78 - age) * 365;//This is the formula for finding the information.
    var timeLength = times * duration;//This is used for determining the length of time per day spent on hygiene.
    var totalAfterAge = futureDays * timeLength;//This will determine the total amount of time spent on hygiene in the future.
    return totalAfterAge;//The return value for this function.
}

alert("This little task will determine how long you spend keeping your teeth and your dentist happy each year and throughout your life.");//This is an alert that will let the user know the purpose of the task they are completing.
var age = Number(prompt("How old are you? Please use numbers."));//User input for their age to use for determining how long they have been spending on hygiene.

var brushTeeth = Number(prompt("How many times do you brush your teeth every day?"));//First prompt asking for how many times the user brushes their teeth each day.

var lengthBrushing = Number(prompt("Approximately how many minutes do you spend brushing your teeth each time?"));//This is a prompt to get the amount of time the user brushes their teeth each time they brush.

var doYouFloss = prompt("Do you floss your teeth? Y or N");//Asking the user if they floss during the day.

if(doYouFloss === "y" || doYouFloss ==="Y"){//If the answer to do you floss is yes this will be the set of commands.
    var timesFloss = Number(prompt("How many times a day do you floss?"));//User input for how many times they floss a day.
    var timeFloss = Number(prompt("Approximately how many minutes do you floss each time?"));//User input for how long they spend flossing each time.
    var rinse = prompt("Do you rinse with mouthwash? Y or N");//User input to find out if they rinse.
    if(rinse === "y" || rinse === "Y") {//Code to run if the response to rinse is yes.
        var manyRinse = Number(prompt("How many times do you rinse each day?"));//User input for the amount of times they rinse a day.
        var rinseTime = 1;
        console.log("This will print out if the response to rinse is yes.");//Print if response to rinse is yes.
    }else{
        console.log("This will be the print out if no rinse.");//Print if response to rinse is no.
    }

}if(doYouFloss === "n" || doYouFloss ==="N"){//Code to run if the answer to flossing is no.
    var rinse = prompt("Do you rinse with mouthwash? Y or N");//User response to find out if they rinse or not.
    if(rinse === "y" || rinse === "Y") {//This is the code that will run if the user selects yes
        var manyRinse = Number(prompt("How many times do you rinse each day?"));//Collect how many times the user flosses a day.
        var rinseTime = 1;

        console.log("Yes rinse print out.");//Print if the response is yes to rinsing.
    }else{
        console.log("No rinse print out.");//Print if response to rinse is no.
    }
}//This next statement will display if all variables and inputs are selected.
if((doYouFloss === "y" || doYouFloss === "Y") && (rinse === "y" || rinse === "Y")) {
    alert("You have spent " + beforeTime(age, brushTeeth, lengthBrushing) + " minutes brushing your teeth, " + beforeTime(age, timesFloss, timeFloss) + " minutes flossing your teeth and " + beforeTime(age, manyRinse, rinseTime) + " minutes rinsing so far. \nAt your current rate of hygiene you will brush approximately another " + afterAge(age, brushTeeth, lengthBrushing) + " minutes, floss another " + afterAge(age, timesFloss, timeFloss) + " minutes and rinse another " + afterAge(age, manyRinse, rinseTime) + " minutes in your life.");//The beginnings of my statement for displaying the results of the information that was input.
    //This next statement will display if just floss is true and rinse is not selected.
}if((doYouFloss === "y" || doYouFloss === "Y") && (rinse === "n" || rinse === "N")){
    alert("You have spent " + beforeTime(age, brushTeeth, lengthBrushing) + " minutes brushing your teeth, " + beforeTime(age, timesFloss, timeFloss) + " minutes flossing your teeth so far. \nAt your current rate of hygiene you will brush approximately another " + afterAge(age, brushTeeth, lengthBrushing) + " minutes and floss another " + afterAge(age, timesFloss, timeFloss) + " minutes in your life.");
}
//This next statement will be displayed if the user chooses rinsing as yes and flossing as no.
if((doYouFloss === "n" || doYouFloss === "N") && (rinse === "y" || rinse === "Y")){
    alert("You have spent " + beforeTime(age, brushTeeth, lengthBrushing) + " minutes brushing your teeth and "+beforeTime(age, manyRinse, rinseTime) + " minutes rinsing so far. \nAt your current rate of hygiene you will brush approximately another " + afterAge(age, brushTeeth, lengthBrushing)+" minutes and rinse another "+afterAge(age, manyRinse, rinseTime) + " minutes in your life.");
}else{//This will be displayed if the user just brushes their teeth.
    alert("You have spent " + beforeTime(age, brushTeeth, lengthBrushing) + " minutes brushing your teeth so far in your life. \nAt your current rate of hygiene you will spend approximately "+afterAge(age, brushTeeth, lengthBrushing)+" minutes more brushing your teeth.");
}


