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
function numberOfFish(f, g){//This function will hold the formula for telling the user how many fish they can have in their tank.
    var tankHold = g / f;//divide the gallons in the tank by the fish size to determine the quantity of fish you can have.
    return tankHold;//Return value of the equation for tankHold.
}
function varietyFish(t, s){//This function will calculate the number of fish per thirds of the tank for a variety of sizes.
    var fish = t / s;
    return fish;
}
alert("This calculator will determine the amount of fish you should stock your new fish tank with. Please use inches when writing in the dimensions of your tank.");//Just a little alert that will let the user know the purpose of this calculator
var length = Number(prompt("What is the length of your fish tank?"));//Variable for gathering the length of the fish tank.
var width = Number(prompt("What is the width of your aquarium?"));//Variable prompt to get the width from the user.
var height = Number(prompt("What is the height of your fish tank?"));//Variable prompt to get the height of the tank from the user.
var smallFish = 2;//size of small fish that you could put in your tank.
var mediumFish = 4;//size of medium fish you could put in your tank.
var largeFish = 6;//size of large fish you could put in your tank.
var tankGallons = (parseInt(fishTank(length, width, height)));//created a variable using the results from the first function that can be run through the second function for getting the number of fish you can put in the tank.
var tankThirds = tankGallons * .33;//This variable will divide the tank into thirds for a variety of sizes of fish.
alert("Your fish tank is approximately "+parseInt(fishTank(length, width, height))+" gallons.");//Alert to see if all the functions run properly.
alert("You could populate your tank with approximately "+parseInt(numberOfFish(smallFish, tankGallons))+" small fish around 2 inches long.");//Checked to see if my function worked properly.
alert("You could populate your tank with approximately "+parseInt(numberOfFish(mediumFish, tankGallons))+" medium fish around 4 inches long.");//Checked to see if my function worked properly.
alert("You could populate your tank with approximately "+parseInt(numberOfFish(largeFish, tankGallons))+" large fish around 6 inches long.");//Checked to see if my function worked properly.
alert(parseInt(tankThirds));

