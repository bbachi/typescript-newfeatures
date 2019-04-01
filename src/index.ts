import { Calculator } from './Calculator';

const cal = new Calculator();

console.log('Adding two number 10 and 8');
let x = cal.add(10,8);
console.log('Ouput::' + x);

console.log('Subtracting two number 10 and 8');
x = cal.subtract(10,8);
console.log('Ouput::' + x);

console.log('Multiplying two number 10 and 8');
x = cal.multiply(10,8);
console.log('Ouput::' + x);

const numArry: ReadonlyArray<number> = [3,5,6,7,8,9];

console.log('Getting the sum of numbers');
x = cal.sumOfArray(numArry);
console.log('Ouput::' + x);

const newArry: readonly number[] = [10,5,6,7,8,9];

console.log('Getting the sum of numbers with new readonly');
x = cal.sumOfArrayNew(newArry);
console.log('Ouput::' + x);

const readonlyTuple: readonly [number, number] = [10,5];

console.log('Getting the sum of numbers with tuple');
x = cal.sumWithTuple(readonlyTuple);
console.log('Ouput::' + x);


type Person = { designation: "employee", name: string } | { designation: "employer", name: string }

function getPersons(): readonly Person[] {

    let persons = [
        { designation: "employee", name: "someName" },
        { designation: "employer", name: "otherName" }
    ] as const

    return persons;
}

console.log(getPersons());

function printName(firstName: string, lastName: string) {
    console.log('My Name is::::' + firstName + ' ' + lastName);
}

printName('myFirstName', 'myLastName');


