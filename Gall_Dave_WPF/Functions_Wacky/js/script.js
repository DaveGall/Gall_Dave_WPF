//David Gall, 04/27/2014, Wacky Functions Worksheet

/*How many fish can you put in your new aquarium. Going on the usual rule for freshwater fish we would assume that you could have 1 inch of fish per gallon of your tank. That's final size of the fish.
We need to find the volume of the fish tank
Length of tank * width of tank * height of tank = Volume of the tank. All measurements would need to be in inches
That answer divided by 231 ( this is how many cubic inches are in a gallon.
That will give you the number of inches of fish you can have in your tank.
*/
//Setting up my function for the code I am writing.
function fishTank(l, w, h){//These will be my variables that will be run through my function.
    var volume = l * w * h;//Equation for getting the volume of the users tank.
    var gallons = volume / 231;//Equation for determining the amount of gallons in the fish tank.
    return gallons;
}

alert("This calculator will determine the amount of fish you should stock your new fish tank with. Please use inches when writing in the dimensions of your tank.");//Just a little alert that will let the user know the purpose of this calculator
var length = Number(prompt("What is the length of your fish tank?"));//Variable for gathering the length of the fish tank.
var width = Number(prompt("What is the width of your aquarium?"));//Variable prompt to get the width from the user.
var height = Number(prompt("What is the height of your fish tank?"));//Variable prompt to get the height of the tank from the user.
var smallFish = 2;//size of small fish that you could put in your tank.
var mediumFish = 4;//size of medium fish you could put in your tank.
alert(parseFloat(fishTank(length, width, height).toFixed(2)));
