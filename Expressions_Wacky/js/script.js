//David Gall, 04/07/14, Expressions_Wacky
//Calculate the amount of garden soil bags needed for your garden.

var rectHeight = prompt("Now that you have built your rectangle garden \nlets see how much dirt you will need. What is the height in feet of your garden?"); //User input variable to add the height.
var rectWidth = prompt("What is the width in feet of your new garden?");//Another user input variable asking for the width of their garden.
var rectLength = prompt("Now the last measurement we need for your garden is the length in feet?");//Variable asking for the length of the garden input.
var rectVolume = rectHeight * rectWidth * rectLength * (80/100);//This calculation will give me and the user the amount of dirt needed to fill their garden 80%.
var bagsNeeded = rectVolume / 1.5;//This calculation will divide the volume needed by 1.5 which is the standard garden soil bag.
var yardsOfSoil = rectVolume / 27;//This calculation changes the cubic feet into cubic yards in case the user needs a different measurement.
