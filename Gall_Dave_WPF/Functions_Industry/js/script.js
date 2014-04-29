//David Gall, 04/29/2014, Industry Function problem

/*This will have to do with the entertainment industry which is in the same category as the industry I am studying for. It will have to do with how much a company will make if they sell a certain amount of tickets at e certain percentage.
Quantity of tickets to sell
Price of tickets to sell
Percentage of sale that the company keeps
*/

function profits(quant, pr, per){//
    var yourPercent = quant * pr * (per / 100);//Equation for finding the percentage the user will keep.
    return yourPercent;//Return value of your percentage.
}

alert("This is a little calculator that will help you determine your profits for the tickets you sell for a concert or any entertainment event. \nPlease input numbers into the box there is no need to write dollar or percentage signs.");
var quantity = Number(prompt("How many tickets do you have to sell?"));//This will grab the quantity of tickets from the user.
var priceYouSell = Number(prompt("How much does it cost you to purchase each ticket?"));//Gets the cost user pays for each ticket.
var priceYouPay = Number(prompt("How much are you going to sell each ticket for?"));







