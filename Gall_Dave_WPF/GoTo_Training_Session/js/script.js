//GoTo Training session.
//Check how many pears are in a bowl of fruit.

//Create a variable to represent our bowl of fruit.

var bowlOfFruit = ["apple", "banana", "pear", "peach", "pear", "apple", "apple", "pear", "apple", "tomato", "cherry", "orange", "kiwi"];
//Create a variable that holds the number of pears.
var totalNumPears = 0;
var totalNumOtherFruit = 0;
console.log(bowlOfFruit);
console.log(bowlOfFruit[2]);

//For loop
//Basic structure of a for loop
//for(declare a variable used for counting; condition to test; what happens after the loop){ code inside of here}

//Test each item in the array by using this for loop

//Test using a property of the array
//.length - gives us the number of items inside of the array

for(var i=0; i<bowlOfFruit.length; i++){
    console.log("inside for loop");

    console.log(bowlOfFruit[i]);

    //Test each item in the array and see if it is a pear

    //if statement
    //if(thing to test){code to run if true}

    if(bowlOfFruit[i] === "pear"){
//If item is a pear this will run
        console.log("item is a pear");
        //count the number of pears
        totalNumPears++;
//If item is not a pear this will run
    } else {
        totalNumOtherFruit++

    }
}

console.log("After the for loop");
console.log(totalNumPears);
console.log(totalNumOtherFruit);
console.log("There are "+totalNumPears+" pear(s) in the fruit bowl and "+totalNumOtherFruit+" other fruit(s) in the bowl.");
