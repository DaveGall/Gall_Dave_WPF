// Conditional logic - else if

var kidHeight = 40;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent.
//If the child is old enough print to the console you can ride.
//If the kid is over 48 inches in height.
if(kidHeight > minHeight){
    //code performed if condition is true.
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //You can ride with a parent.
    console.log("You can ride but only with a parent present.");
}else{
    //Sorry you got some growin' to do.
    console.log("Sorry kid you got some growing to do!");
}







