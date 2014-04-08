//David Gall, 04/07/14, Expressions_Wacky
//Calculate the amount of garden soil bags needed for your garden.

var rectHeight = prompt("Now that you have built your rectangle garden \nlets see how much dirt you will need. What is the height in feet of your garden?"); //User input variable to add the height.
var rectWidth = prompt("What is the width in feet of your new garden?");//Another user input variable asking for the width of their garden.
var rectLength = prompt("Now the last measurement we need for your garden is the length in feet?");//Variable asking for the length of the garden input.
var rectVolume = rectHeight * rectWidth * rectLength * (80/100);//This calculation will give me and the user the amount of dirt needed to fill their garden 80%.
var bagsNeeded = rectVolume / 1.5;//This calculation will divide the volume needed by 1.5 which is the standard garden soil bag.
var yardsOfSoil = rectVolume / 27;//This calculation changes the cubic feet into cubic yards in case the user needs a different measurement.
var soilWeight = rectVolume * 35;//This calculation is meant to tell the user how much the total amount of soil needed will weigh. Soil varies depending on several factors but this was a rounded weight.
var carTrips2 = bagsNeeded;//Just a little calculation on how many trips it will take carrying two bags at a time. I left it as the initial value because you need to load and unload the car.
var carTrips1 = bagsNeeded * 2;//This calculation is to see how many trips you will take only carrying one bag at a time from the store to your car and the car to your garden.
