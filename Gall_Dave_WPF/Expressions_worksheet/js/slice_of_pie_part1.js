//Dave Gall, 04/07/14, Expressions Worksheet, Slice of Pie part 1

var slicesPerPie = 8; //I have assigned a variable for the number of slices per pie.
var partyPeople = 72; //I have now assigned a variable for the number of party goers.
var piesOrdered = 17; //I have assigned a value for the amount of pies ordered for the party.
var slicesPerPerson = slicesPerPie * piesOrdered / partyPeople; //I have applied an equation for finding out the amount of slices per person.
console.log("Each person ate " + parseFloat(slicesPerPerson) + " slices of pizza at the party."); //I added the print function to display the result onto the console.
