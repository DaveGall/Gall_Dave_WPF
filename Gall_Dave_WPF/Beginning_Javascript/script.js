//ch3_example3
var secretNumber = prompt("Pick a number between 1 and 5;", "");
secretNumber = parseInt(secretNumber);

switch (secretNumber)
{
    case 1:
        document.write("Too Low!");
        break;
    case 2:
        document.write("Too Low!");
        break;
    case 3:
        document.write("You guessed the secret number!");
        break;
    case 4:
        document.write("Too High!");
        break;
    case 5:
        document.write("Too High!");
        break;
    default:
        document.write("You did not enter a number between 1 and 5.");
        break;
}

document.write("\nExecution continues here.");




