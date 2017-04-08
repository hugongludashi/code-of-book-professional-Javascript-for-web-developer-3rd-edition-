/*The specific list of "falsy" values in JavaScript is as follows:

"" (empty string)
0, -0, NaN (invalid number)
null, undefined
false
Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

"hello"
42
true
[ ], [ 1, "2", 3 ] (arrays)
{ }, { a: 42 } (objects)
function foo() { .. } (functions)

Whether to use == or === in various situations, here are my simple rules:

If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
If either value in a comparison could be of these specific values (0, "", or [] -- empty array), avoid == and use ===.
In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.
*/
