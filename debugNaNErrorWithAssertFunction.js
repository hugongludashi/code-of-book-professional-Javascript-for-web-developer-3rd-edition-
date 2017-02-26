//throw errof if the condition is false
function assert(condition, message){
  if (!condition){
    throw new Error(message);
  }
}


//error logging using assert function
function divide(num1, num2){
  assert(typeof num1 == "number" && typeof num2 == "number",
          "divide(): Both arguments must be numbers.");
}
