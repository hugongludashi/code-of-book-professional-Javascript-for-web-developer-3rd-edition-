function SuperType(nam){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
  alert(this.name);
 };

function SubType(name,age){
  SuperType.call(this,name);   //second call to SuperType()
  this.age = age;
} 

function object(o){
  function F(){}
  F.prototype = o;
  return new F();
};

function inheritPrototype(SubType, SuperType){
  var prototype = object(SupertType.prototype);  //Or can use this code:
  prototype.constructor =SubType;                // SubType.prototype = Object.create(Supertype.prototype);
  SubType.prototype = prototype;                 // SubType.prototype.constructor = SubType;
};


SubType.prototype.sayAge = function(){
  alert(this.age);
};
