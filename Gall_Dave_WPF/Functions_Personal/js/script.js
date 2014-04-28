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

        console.log("This will print out if the response to rinse is yes.");//Print if response to rinse is yes.
    }else{
        console.log("This will be the print out if no rinse.");//Print if response to rinse is no.
    }

}if(doYouFloss === "n" || doYouFloss ==="N"){//Code to run if the answer to flossing is no.
    var rinse = prompt("Do you rinse with mouthwash? Y or N");//User response to find out if they rinse or not.
    if(rinse === "y" || rinse === "Y") {//This is the code that will run if the user selects yes
        var manyRinse = Number(prompt("How many times do you rinse each day?"));//Collect how many times the user flosses a day.

        console.log("Yes rinse print out.");//Print if the response is yes to rinsing.
    }else{
        console.log("No rinse print out.");//Print if response to rinse is no.
    }
}

