
// To set an event:
// First, element need to be selected using getElement or by directy set at the HTML


// const element = document.getElementById("myButton");
// const element =  document.body;
// const element = document.getElementById("myText")
const element = document.getElementById("myDiv")


// element.onclick = doSomeThing;
// element.onload = doSomeThing;
// // element.onchange = doSomeThing;
// element.onmouseover = doSomeThing;
// element.onmouseleave = doSomeThingElse;
// element.onmousedown = doSomeThing;
// element.onmouseup = doSomeThingElse;


// or can set on the HTML


function doSomeThing(){
  // alert("You do something !")
  element.style.backgroundColor = "lightblue"
}

function doSomeThingElse(){
  // alert("You do something !")
  element.style.backgroundColor = "green"
}