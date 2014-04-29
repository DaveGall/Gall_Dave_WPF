//David Gall, 04/29/2014, Industry Function problem

/*This will have to do with the entertainment industry which is in the same category as the industry I am studying for. It will have to do with how much a company will make if they sell a certain amount of tickets at e certain percentage.
Quantity of tickets to sell
Price of tickets to sell
Percentage of sale that the company keeps
*/

function profits(quant, pay, sell){//This will determine how many tickets the user needs to sell to make a profit.
    var ticketSalesNeeded = quant * pay / sell + 1;//Equation for finding the number of tickets the user will need to sell to start making a profit.
    return ticketSalesNeeded;//The return value of ticket sales needed to display.
}

alert("This is a little calculator that will help you figure out how many tickets you will need to sell in order to start making a profit.");
var quantity = Number(prompt("How many tickets have you purchased to sell?"));//Gets the amount of tickets the user has purchased to sell.
var priceYouPay = Number(prompt("How much does it cost you to purchase each ticket?"));//Gets the price the user pays for each ticket.
var priceYouSell = Number(prompt("How much do you plan on selling each ticket for each ticket?"));//Gets the price the user will sell the tickets for.

alert("You will need to sell "+profits(quantity, priceYouPay, priceYouSell)+" tickets to start making a profit.");

console.log("You will need to sell "+profits(quantity, priceYouPay, priceYouSell)+" tickets to start making a profit.");






