//Reverse a string

let newStr = "";

function reverseAString (string){
  for (let i = string.length - 1 ; i >= 0 ; i--){
    newStr = newStr + string[i];
    console.log(newStr); //hide this console.log if you don't wanna show the full process
  };
  // console.log(newStr);  --> Use this consolo.log if you wanna show just the final result
};

let resultado = reverseAString("Wagner Trezub"); //Change my name to change the string
