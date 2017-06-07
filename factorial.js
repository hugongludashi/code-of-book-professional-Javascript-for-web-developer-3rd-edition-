//arguments.callee is a pointer to the function being executed and, as such, can be used
//to call the function recursively

function factorial(num){
  if (num<=1){
    return 1;
  }else{
    return num*arguments.callee(num-1);
  }
}

/*Changing the highlighted line to use arguments.callee instead of the function name ensures that
*this function will work regardless of how it is accessed.
*/
