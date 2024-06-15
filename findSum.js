const findSum = myArray => {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return sum;
}

const subtractNumbers = (firstNumber, secondNumber) => firstNumber - secondNumber;

const multiplyNumbers = (firstNumber, secondNumber) => firstNumber * secondNumber;

const divideNumbers = (firstNumber, secondNumber) => {
    if (secondNumber == 0)
        return 'Cannot divide by zero';
    return firstNumber / secondNumber;
}

const myArray = [1, 2, 3];

const sum = findSum(myArray);
console.log("sum = " + sum);

const subtractValue = subtractNumbers(myArray[0], myArray[1]);
console.log("subtractValue = " + subtractValue);

const multiplyValue = multiplyNumbers(myArray[0], myArray[2]);
console.log("multiplyValue = " + multiplyValue);

const dividedValue = divideNumbers(sum, myArray[2]);
console.log("dividedValue = " + dividedValue);


