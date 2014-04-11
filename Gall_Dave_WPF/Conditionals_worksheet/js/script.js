//David Gall, 04/11/14, Conditionals worksheet.
//Stuff Your Face 1
//The competitors weight determines if tey get in or not.
//Ask for the competitors weight.
var compWeight = Number(prompt("What is your weight? Numerical values only please."));

if(compWeight >= 250){
    //If their weight is greater than or equaled to 250 this will be the result.
    console.log("The competitor qualifies for the heavyweight division.");
}else{
    //If their weight is under 250 then they need to gain more weight.
    console.log("The competitor needs to gain some weight.");
}