
const person = {
  name: "Oybek",
  age: 27,
  hobbies: ['Sports', 'Cooking']
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
