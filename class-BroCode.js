// Class = a blueprint for creating objects
//         define what properties and methode they have
//         use a constructor for unique properties (instance of / new)

class Player{

  score = 0;

  start(){
    console.log("You start this game")
  };
  pause(){
    console.log("You pause this game")
  }

}

const player1 = new Player(); // create instance of player1
const player2 = new Player(); // create instance of player2
const player3 = new Player(); // create instance of player3

player1.score += 1; // acessing player1 and add score suing dot notation

console.log(player1.score); // print score player1
console.log(player2.score); // print score player1

player1.start(); // invoking start methode for player1 
player2.pause(); // invoking start methode for player2
