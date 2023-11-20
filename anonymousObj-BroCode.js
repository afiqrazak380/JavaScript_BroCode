// Anonymous object = obj with out name,
//                    not directly refered
//                    less syntax. No nbeed for uniques names


class Card{
  constructor(value, suits){
    this.value = value;
    this.suits = suits;
  }
}

let cards = [new Card("A", "Heart"),
             new Card("2", "Diamond"),
             new Card("3", "Spade"),
             new Card("A", "Clubs")];

// print all card using .foreEach method
cards.forEach(card => console.log(`Your card is ${card.value} with ${card.suits}`))


console.log(cards[0]) // this will print the first item in the array