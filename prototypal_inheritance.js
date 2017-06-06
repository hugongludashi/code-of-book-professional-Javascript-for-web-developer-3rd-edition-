/*prototypes allow you to create new objects based on existing objects without the
*need for defi ning custom types.
*/

function object(o){
  function F(){}
  F.prototype=o;
  return new F();
}

//Example

var person ={
  name: "Samuel",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name="Robin";
anotherPerson.friends.push("John");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Penny";
yetAnotherPerson.friends.push("Jakie");

console.log(person.friends);
