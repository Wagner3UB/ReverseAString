// Reverse a string

let newStr = "";

function reverseAString (string){
  for (let i = string.length - 1 ; i >= 0 ; i--){
    newStr = newStr + string[i];
    console.log(newStr);
  };
};

let resultado = reverseAString("Wagner Trezub"); //Change my name to change the string
