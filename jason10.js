function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.displayInfo = function() {
      console.log("Name:", this.name);
      console.log("Age:", this.age);
    };
  }
  
  const person1 = new Person("Farhaan", 20);