// DOM Traversal Technique

// let elements = document.body; // parent element

// let firstChild = elements.firstElementChild;      // Apple, Pumpkin, Papaya
// firstChild.style.backgroundColor = "lightblue"; 

// let lastChild = elements.lastElementChild;
// console.log(lastChild)                           // display the script

// let element = document.querySelector("#vege");
// let parent = element.parentElement;              // the whole body is lightblue
// parent.style.backgroundColor = "lightblue";

// let element = document.querySelector("#vege");
// let sibling = element.nextElementSibling;        // Cake, Pie, Gelato
// sibling.style.backgroundColor = "lightblue";

// let element = document.querySelector("#vege");
// let sibling = element.previousElementSibling;   // Apple, Pumpkin, Papaya
// sibling.style.backgroundColor = "lightblue";

// let element = document.querySelector("#fruit");
// let child = element.firstElementChild;          // Apple
// child.style.backgroundColor = "lightblue";

// let element = document.querySelector("#fruit");
// let child = element.lastElementChild;           // Papaya
// child.style.backgroundColor = "lightblue";

// let element = document.querySelector("#fruit");
// let child = element.children[0];                // Apple
// child.style.backgroundColor = "lightblue";

let element = document.querySelector("#fruit");
// let children = element.children;                 // return a collection

console.log(children)
// children.style.backgroundColor = "lightblue";



// .firstElementChild
// .lastelementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Arry.from(.children)