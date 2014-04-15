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


