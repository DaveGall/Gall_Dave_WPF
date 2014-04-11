
var degFahren = Number(prompt("Enter the degrees Fahrenheit", " "));
var degCent;

degCent = 5/9 * (degFahren - 32);

alert(parseFloat(degFahren).toFixed(2)+"\xB0 Fahrenheit is "+parseFloat(degCent).toFixed(2)+"\xB0 centigrade\n");
console.log(degFahren+"\xB0 Fahrenheit is "+parseFloat(degCent).toFixed(2)+"\xB0 centigrade\n");

if (degCent < 0){
    console.log("That's below the freezing point of water!");
}
if(degCent === 100)
    console.log("That's the boiling point of water!");



