const userName = 'Oybek';

const add = (a: number, b: number) => a + b;

console.log(add(2, 2));

const hobbies = ['driving', 'swimming', 'gym'];

const [hobby1, hobby2, hobby3, hobby4] = hobbies;
console.log(hobby1);
console.log(hobby4);

const person = {
  firstName: 'Oybek',
  age: 27
}

const { firstName, age } = person;
