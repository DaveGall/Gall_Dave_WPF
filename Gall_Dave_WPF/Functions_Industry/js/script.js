//David Gall, 04/29/2014, Industry Function problem

/*This will have to do with the entertainment industry which is in the same category as the industry I am studying for. It will have to do with how many tickets a company needs to sell to start making a profit.
Quantity of tickets to sell
Price of tickets to sell
Price user paid for tickets.
*/

function profits(quant, pay, sell){//This will determine how many tickets the user needs to sell to make a profit.
    var ticketSalesNeeded = quant * pay / sell + 1;//Equation for finding the number of tickets the user will need to sell to start making a profit.
    return ticketSalesNeeded;//The return value of ticket sales needed to display.
}
function percentProfit(p, s){
    var yourPercentage = s / p * 100;//This equation will determine the percentage of profit you will make off each ticket.
    return yourPercentage;
}

alert("This is a little calculator that will help you figure out how many tickets you will need to sell in order to start making a profit.");
var quantity = Number(prompt("How many tickets have you purchased to sell?"));//Gets the amount of tickets the user has purchased to sell.
var priceYouPay = Number(prompt("How much does it cost you to purchase each ticket?"));//Gets the price the user pays for each ticket.
var priceYouSell = Number(prompt("How much do you plan on selling each ticket for each ticket?"));//Gets the price the user will sell the tickets for.
var salesNeeded = profits(quantity, priceYouPay, priceYouSell);//variable for the result of the function.
alert("You will need to sell "+profits(quantity, priceYouPay, priceYouSell)+" tickets to start making a profit.");
alert("Your profit margin on each ticket will be "+parseInt(percentProfit(priceYouPay, priceYouSell))+"%.");
console.log("You will need to sell "+profits(quantity, priceYouPay, priceYouSell)+" tickets to start making a profit.");






