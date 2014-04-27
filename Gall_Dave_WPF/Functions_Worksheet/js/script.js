//Dave Gall, 04/25/2014, Functions Worksheet
//Circumference of a circle.

//C = 2*π*r

function circleCircumference(radius){//my function parameters
    var pie = Math.PI;//The value of pie, researched and retrieved from the W3Schools website.
    var circumference = 2 * pie * radius;//Equation that will determine the circumference of the circle.
    return circumference;//The return value that will be displayed when needed.
}

var yourRadius = Number(prompt("What is the radius of your circle?"));//This variable prompt will retrieve the information on the radius of the circle to input into my function.
alert("The circumference of your circle is "+parseFloat(circleCircumference(yourRadius)).toFixed(2)+".");
console.log("The circumference of your circle is "+parseFloat(circleCircumference(yourRadius)).toFixed(2)+".");//This is the display concatenation that will be put out to let the user know the information that they are looking for.

//David Gall, 04/25/2014, Stung!!, This is the bee problem on the functions worksheet.
//It takes 8.666666667 stings from bees per pound to kill an animal. For this problem I am going to round to 8.67. We will need the victims weight in pounds and the return will be the number of stings that will end up killing the unfortunate animal.

function animalDeath(animalWeight){//My function parameter.
    var stingsPerPound = 8.67;//Establish a constant for the equation we are creating.
    var numberOfStings = animalWeight * stingsPerPound;//Equation for determining the amount of stings that will kill an animal according to its weight.
    return numberOfStings;//The return value of my equation.
}

var animalWeight = Number(prompt("How many pounds does the animal way?"));//The variable of the weight of the animal which will change so I have used a prompt command to get the information from the user.
alert("It takes "+parseFloat(animalDeath(animalWeight)).toFixed(2)+" bee stings to kill this animal.");
console.log("It takes "+parseFloat(animalDeath(animalWeight)).toFixed(2)+" bee stings to kill this animal.");//This is the printed statement that will print out to the console for viewing.

