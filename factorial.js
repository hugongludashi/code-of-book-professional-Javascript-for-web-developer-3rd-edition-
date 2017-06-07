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

/*The value of arguments.callee is not accessible to a script running in strict mode and will cause
* an error when attempts are made to read it. Instead, you can use named function expressions to
* achieve the same result.
*/
var factorial = (function f(num){
  if (num<=1){
    return 1;
  }else{
    return num*f(num-1);
  }
});

/*In this code, a named function expression f() is created and assigned to the variable factorial.
*The name f remains the same even if the function is assigned to another variable, so the recursive
*call will always execute correctly. This pattern works in both nonstrict mode and strict mode.
*/
