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

SubType.prototype = new SuperType(); //first call to SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
  alert(this.age);
};
