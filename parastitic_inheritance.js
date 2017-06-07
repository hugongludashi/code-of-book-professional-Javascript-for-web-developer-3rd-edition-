function object(o){
  function F(){}
  F.prototype=o;
  return new F();
}

function createAnother(original){

  var clone = object(original);
  clone.sayHi=function(){
    alert("hi");
  };
  return clone;
}

var person ={
  name: "Nicholas",
  friends: ["shelly", "Penny", "Thomas"]

};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();
