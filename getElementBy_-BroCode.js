
// == Different Way To Sellect Element in the Web Page ==

/*
1. getElementById
let element = document.getElementById("myElement");
element.style.backgroundColor = "lightgreen"

2. getElementsByName
let fruits = document.getElementsByName("fruits");
console.log(fruits) // return a NodeList (3) [input, input, input]

fruits.forEach(fruit =>{
  if(fruit.checked){
    console.log(fruit.value)
  }
})

3. getelementByTagname
let sayur = document.getElementsByTagName("li");
sayur[1].style.backgroundColor = "lightblue"

4. getElementsByClassname
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "yellow"


5. querySelector

let element1 = document.querySelector("[for]") // select by Attribute
element1.style.backgroundColor = "lightblue";

let element2 = document.querySelector("#myElement") // select by ID
element2.style.backgroundColor = "lightyellow"

let element3 = document.querySelector(".desserts") // select by className
element3.style.backgroundColor = "lightgreen"

let element4 = document.querySelector("li") // select by tagName
element4.style.backgroundColor = "purple"


6. querySelectorAll

let element5 = document.querySelectorAll("[for]");
// iterate through all element and change it colour
element5.forEach(element => element.style.backgroundColor = "blue") 
*/