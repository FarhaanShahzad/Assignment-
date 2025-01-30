function setTimeoutGreeting() {
    console.log('Hello, ${this.name}');
} 
const person ={
    name: "Farhaan"
};
const bountGreeting = setTimeoutGreeting.bind(person);
setTimeout(boundGreeting, 1000);