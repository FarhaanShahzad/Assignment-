function multiplynumber(n1,n2){
function multiply (num1,num2){
    return num1*num2;
}
return multiply.apply(null,[n1,n2]);
}


console.log(multiplyNumbers(5, 3))
console.log(multiplyNumbers(45, 3))