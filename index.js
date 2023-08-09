// Exersise1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)//Tesla 
console.log(otherRandomCar)//Mercedez

// Exersise 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;//name is Deprecated
//Predict the output
console.log(name);//name is Deprecated  and we have given the key another value wich is OtherName we should call
console.log(otherName);//Elon should have been console logged if name was  not Deprecated

// Exersise 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;//WE are trying to destructure a key that is not Passed in the object but is a variable
//Predict the output
console.log(password);//12345
console.log(hashedPassword);//Undefined

// Exersise 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);//False 
console.log(first == third);//True


//Exersise 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);//value
console.log(secondKey);//[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//1
console.log(willThisWork);//5



