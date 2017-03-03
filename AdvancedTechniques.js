//to detect if some object is Array
function isArray(value){
  return Object.prototype.toString.call(value) == "[object Array]";
};

/*determine if a value is native fucntion or regular expression
*note: isFucntion() will return false in IE for any functions that are implemented as COM objects rather tahn native JavaScript
*functions. The toString() method of Object can't determine constructor names for nonnative constructors, so any objects that are
*instances of developer-defined constructors return "[object Object]". 
*/
function isFunction(value){
  return Object.prototype.toString.call(value) == "[object Function]";
};
function isRegExp(value){
  return Object.prototype.toString.call(value) == "[object RegExp]";
}
//Several JavaSript libraries contan code similar to the following:
var isNativeJSON = window.JSON && Object.prototype.toString.call(JSON) == "[object JSON]";

/*Beging able to discern the difference between native and nonnative JavaScript objects is very important in web
*development to ensure you know the available capabilities of an object.
*This technique can be used on any object to definitively make this determination.

