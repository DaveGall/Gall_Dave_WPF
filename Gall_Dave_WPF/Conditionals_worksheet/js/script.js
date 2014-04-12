//David Gall, 04/11/14, Conditionals worksheet.
//Grade Letter Calculator.

//Ask for user to input their score for the class.
var classScore = prompt("What score did you receive for this class?");
//Calculation to determine the students final score in the class.
var grade = classScore+"%";
//I am creating the if true statements for each possibility.
if(classScore >= 95 && classScore <= 100) {
    console.log("You have a " + grade + " which means you have an A+ in the class.");
}
if(classScore >= 90 && classScore <= 94){
        console.log("You have a "+grade+" which means you have an A in the class.");
}
if(classScore >=85 && classScore <= 89){
    console.log("You have a "+grade+" which means you have a B+ in the class.");
}
if(classScore >= 80 && classScore <= 84){
    console.log("You have a "+grade+" which means you have a B in the class.");
}
if(classScore >= 76 && classScore <= 79){
    console.log("You have a "+grade+" which means you have a C+ in the class.");
}
if(classScore >= 73 && classScore <= 75){
    console.log("You have a "+grade+" which means you have an C in the class.");
}





















/*A+95-1004.0A90-943.5B+85-893.0B80-842.5C+76-792.0C73-751.5D70-721.0F0-690.0
GRADUATE

A+95-1004.0A90-943.5B+85-893.0B80-842.5C73-792.0D70-721.0F0-690.0*/