//Dave Gall, 04/25/2014, Functions Worksheet
//Circumference of a circle.

//C = 2*π*r

function calcCircumference(){//The beginning of my function.
    var pie = Math.PI;//This is creating a variable that will serve as the value pie. I researched it and found it on the W3Schools website.
    var radius = Number(prompt("What is the radius of your circle?"));//This will get the radius from the user for the equation.
    if(radius === ""){
        prompt("I think you forgot to enter a value!");
    }//Just in case the user does not enter a value for the radius.
    var circumference = 2 * pie * radius;//This is the equation to get a value for the circumference of the circle.
    alert("The circumference of your circle is "+parseFloat(circumference).toFixed(2)+".");
    console.log("The circumference of your circle is "+parseFloat(circumference).toFixed(2)+".");//This will be the return value and statement of the equation for the circumference of the circle and will display it for the user and instructor to see.
}

console.log(calcCircumference());//This will call or invoke the function so that it will run and give the desired results.

//Two different ways to do the same problem and I am not sure which one is better but I would think the first one would be better since it would be less to invoke later on in the code when you need to use it again.
function circleCircumference(radius){
    var pie = Math.PI;
    var circumference = 2 * pie * radius;
    console.log("The circumference of your circle is "+parseFloat(circumference).toFixed(2)+".");

}
circleCircumference(prompt("What is the radius of your circle?"));

//David Gall, 04/25/2014, Stung!!, This is the bee problem on the functions worksheet.
//It takes 8.666666667 stings from bees per pound to kill an animal. For this problem I am going to round to 8.67. We will need the victims weight in pounds and the return will be the number of stings that will end up killing the unfortunate animal.

function animalDeath(){
    var stingsPerPound = 8.67;//Establish a constant for the equation we are creating.
    var animalWeight = Number(prompt("How many pounds does the animal way?"));//The variable of the weight of the animal which will change so I have used a prompt command to get the information from the user.
}