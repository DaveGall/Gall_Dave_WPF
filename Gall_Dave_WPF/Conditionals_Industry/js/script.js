//David Gall, 04/15/14, Conditionals_Industry
//Do you have enough employees if your employees can only work 8 hours on the project?
//How many more will you need?
var projectHours = Number(prompt("Projected time the project will take to finish in hours."));//This will grab the project hours from the user.
if(projectHours === ""){
    prompt("Oops you forgot to input a number.");//If the user doesn't put a value in the box then this message will appear.
}
//This next line will ask the user how many employees the company has.
var employees = Number(prompt("How many employees do you have to work on the project?"));
if(employees === ""){
    prompt("Oops you forgot to input a number.");//If the user doesn't put a value then this message will appear.
}
//This calculation will determine the number of employees needed by dividing the total project hours by 8 (the maximum an employee can work on the project.
var employeesNeeded = projectHours / 8;
//This calculation will give a result of how many more employees are needed to complete your project with the constraints given.
var moreEmployees = employeesNeeded - employees;
//This calculation will give the number of hours each employee will work. Only for the true statement of having enough employees.
var hoursWorked = projectHours / employees;
//Start of the if true statement which will be displayed if the you have enough employees to cover the project.
if(employees > employeesNeeded){
    console.log("You will have enough employees for your project. Your employees will work approximately "+parseFloat(hoursWorked).toFixed(2)+" hours each on this project.");
    //This next statement is is for if the first one is not true then this is the next calculation the computer needs to look at and display.
}else if(employees < employeesNeeded){
    console.log("I am sorry but you do not have enough employees to complete this project under the current guidelines. You will need approximately "+parseInt(moreEmployees)+" more employee(s) to complete this project.");
}else{
    console.log("You have the exact amount of employees you will need to complete your project.");
}

