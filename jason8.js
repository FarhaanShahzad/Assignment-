function personalInfo(){
    console.log('Name:${this.name}, Age:${this.age}');
}
const person ={
    name: "Farhaan Shahzad",
    age: 21
};

personalInfo.call(person);