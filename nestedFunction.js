let userName = "Bro";
let inBox = "0";

login();

// displayUserName();
// displayMassage();

function login (){
  displayUserName();
  displayMassage();

  function displayUserName(){
    console.log(`Hello ${userName}, wellcome back`)
  }

  function displayMassage(){
    console.log(`You have ${inBox} massage`)
  }
}