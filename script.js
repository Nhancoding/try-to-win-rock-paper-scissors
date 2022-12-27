//1.  Ask user for their selection
    //prompt the user for their choice (r,p,s);
   
    //TODO: EDGE CASE: what happens if the user doesnt pick r,p, or s?
    
    //TODO: EDGE CASE: what happens is casing doesnt match?

    //TODO: EDGE CASE: what happens if submit empty?

//2. generate the computer selection
    //TODO: we need a random selection of r,p,s

    //TODO: look up random number generator in js;

//3. compare selections
    //TODO: if user picks r && comp picks s or user picks s && comp picks p, win;
    //TODO: if user and comp pick are the same, thats a tie;
    //TODO: if comp picks r && user picks s or comp picks s && user picks p, loss;
//4. display result
    //TODO: show result to user in popup;
//5. display stats
    //TODO: create some variable for win, loss and tie,
    //TODO: update the appropriate variable based on result
//6. ask to play again

// var options = ["r", "p", "s"]

// var userChoice = prompt("What is your choice? r, p, or s?")
// console.log(userChoice)


// var computerChoice = options [Math.floor(Math.random() * 3)];
// console.log(computerChoice);

// function compare(player1, player2) {
//     if((player1 == "r" && player2 == "s") || (player1 == "s" && player2 == "p") 
//     (player1 == "p" && player2 == "r" ) ){
//         alert("Computer chose "+ player2 + "You win!")
//     } else if(player1 == player2) {
//         alert("You and computer both chose " + player2 + "Tie")
//     } else {
//         alert(player2 + "You lost")
//     }
// }



var wins = 0;
var ties = 0;
var losses = 0;

var options = ['R','P', 'S'];

var playGame = function() {
    var userChoice = window.prompt('Enter R, P, or S:');

    if (!userChoice) {
        return;
    }

    userChoice = userChoice.toUpperCase();

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert('The computer chose ' + computerChoice);

    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");
    
    } else if (
        (userChoice === "R" && computerChoice ==="S") ||
        (userChoice === "P" && computerChoice ==="R") ||
        (userChoice === "S" && computerChoice ==="P") 

        ) {
            wins++;
            window.alert ("You win!");

        } else {
            losses++;
            window.alert("You lost!");

        }

        window.alert (
            "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies " + ties
        );

        var playAgain = window.confirm("Play again?");

        if (playAgain) {
            playGame ();
        }
        
    
}

playGame();