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
    

}

