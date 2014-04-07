//Dave Gall, 04/07/14, Expressions Worksheet, Discounts

var originalPrice = 300;//Original price of the item.
var discountPcnt = 10;//discount of the item 10%.
var newTablet = "New Tablet";//Description of item that is on sale.
var salesTax = 5;//Sales tax of the new tablet.

var withoutTax = originalPrice - (discountPcnt/100 * originalPrice);//cost of the item without tax.
var withTax = withoutTax + (salesTax/100 * withoutTax);//cost of the item with the 5% tax.
console.log("Your " + newTablet + "was originally $" + originalPrice + "but after a " + discountPcnt + "% discount, it is now $" + withoutTax + "without tax, and $" + withTax + "with tax.");

