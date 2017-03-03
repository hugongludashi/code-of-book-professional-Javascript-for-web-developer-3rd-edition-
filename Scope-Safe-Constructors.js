
function Person(name, age, job){
  if (this instanceof Person){
    this.name = name;
    this.age = age;
    this.job = job;
  } else {
    return new Person(name, age, job);
  }
}

var person1 = Person("Nicholas", 29, "Software Engineer");
alert(window.name); // ""
alert(person1.name); //"Nicholas"

var person2 = new Person("Shelby", 34, "Ergonomist");
alert(person2.name); //"Shelby"
