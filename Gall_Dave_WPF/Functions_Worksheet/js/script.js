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
    alert("The circumference of your circle is "+parseFloat(calcCircumference).toFixed(2)+".");
    console.log("The circumference of your circle is "+parseFloat(calcCircumference).toFixed(2)+".");//This will be the return value and statement of the equation for the circumference of the circle and will display it for the user and instructor to see.
}

