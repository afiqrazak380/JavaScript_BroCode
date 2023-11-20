// async (keyword) = makes function return a Promise

// producing
async function fileLoader(){

  let fileLoad = false;

  if(fileLoad){
    return "File is loaded"
  }
  else{
    throw "File is missing"
  }
}

// consuming
fileLoader().then(val =>  console.log(val))
            .catch(err => console.log(err))


// Using Promise//

// function fileLoader(){

//   let fileLoad = false;

//   if(fileLoad){
//     return Promise.resolve("File is loaded")
//   }
//   else{
//     return Promise.reject("File is missing")
//   }
// }

// // consuming
// fileLoader().then(val =>  console.log(val))
//             .catch(err => console.log(err))
