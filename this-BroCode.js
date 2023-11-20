// this = refenecr to a particular object
//        the object depened on immediate context

const car1 ={
  name: "Proton",
  colour: "Red",
  year: 1999,

  drive : function(){
    console.log(`You drive the ${this.name}`) // <- to callback properties within object
  },
  brakes : function(){
    console.log("You press the brakes")
  },
}

const car2 ={
  name: "Merc",
  colour: "Black",
  year: 1998,

  drive : function(){
    console.log(`You drive the ${name}`) // <- wrong callback of properties
  },
  brakes : function(){
    console.log("You press the brakes")
  },
}


car1.drive(); // You drive the Proton
car2.drive(); // You drive the
