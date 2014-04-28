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
 */

alert("This little task will determine how long you spend keeping your teeth and your dentist happy each year and throughout your life.");//This is an alert that will let the user know the purpose of the task they are completing.

var brushTeeth = Number(prompt("How many times do you brush your teeth every day?"));//First prompt asking for how many times the user brushes their teeth each day.
var lengthBrushing = Number(prompt("Approximately how many minutes do you spend brushing your teeth each time?"));//This is a prompt to get the amount of time the user brushes their teeth each time they brush.
var doYouFloss = prompt("Do you floss your teeth? Y or N");//Asking the user if they floss during the day.

if(doYouFloss === "y" || doYouFloss ==="Y"){//If the answer to do you floss is yes this will be the set of commands.
    var timesFloss = Number(prompt("How many times a day do you floss?"));
    var timeFloss = Number(prompt("Approximately how many minutes do you floss each time?"));
    var rinse = prompt("Do you rinse with mouthwash? Y or N");
    if(rinse === "y" || rinse === "Y") {
        var manyRinse = Number(prompt("How many times do you rinse each day?"));
        var lengthRinse = Number(prompt("Approximately how long do you spend rinsing your mouth with mouthwash?"));
        console.log("This will print out if the response to rinse is yes.");//Print if response to rinse is yes.
    }else{
        console.log("This will be the print out if no rinse.");//Print if response to rinse is no.
    }

}if(doYouFloss === "n" || doYouFloss ==="N"){
    var rinse = prompt("Do you rinse with mouthwash? Y or N");
    if(rinse === "y" || rinse === "Y") {
        var manyRinse = Number(prompt("How many times do you rinse each day?"));
        var lengthRinse = Number(prompt("Approximately how long do you spend rinsing your mouth with mouthwash?"));
        console.log("Yes rinse print out.");//Print if the response is yes to rinsing.
    }else{
        console.log("No rinse print out.");//Print if response to rinse is no.
    }
}

