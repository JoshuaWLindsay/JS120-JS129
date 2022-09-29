{class Super {
  constructor() {}

  method1() {}

  method2() {}
}

class Sub1 extends Super {
  constructor() {
    super();
  }

  method3() {}

  method4() {}
}

class Sub2 extends Super {
  constructor() {
    super();
  }

  method5() {}

  method6() {}
}

class Sub3 extends Super {
  constructor() {
    super();
  }

  method7() {}

  method8() {}
}

let mixIn = {
  method9() {},

  method10() {}
}

Object.assign(Sub1, mixIn);
Object.assign(Sub3, mixIn);
}

{function Super() {}

Super.prototype.method1 = function() {}

Super.prototype.method2 = function() {}

function Sub1() {
  Super.call(this);
}

Sub1.prototype = Object.create(Super.prototype);
Sub1.prototype.constructor = Sub1;

Sub1.prototype.method3 = function() {}

Sub1.prototype.method4 = function() {}

function Sub2() {
  Super.call(this);
}

Sub2.prototype = Object.create(Super.prototype);
Sub2.prototype.constructor = Sub2;

Sub2.prototype.method5 = function() {}

Sub2.prototype.method6 = function() {}

function Sub3() {
  Super.call(this);
}

Sub3.prototype = Object.create(Super.prototype);
Sub3.prototype.constructor = Sub3;

Sub3.prototype.method7 = function() {}

Sub3.prototype.method8 = function() {}

let mixIn = {
  method9() {},

  method10() {}
}

Object.assign(Sub1.prototype, mixIn);
Object.assign(Sub3.prototype, mixIn);
}

{class Super {
  constructor() {}

  method1() {}

  method2() {}
}

class Sub1 extends Super {
  constructor() {
    super();
  }

  method3() {}

  method4() {}
}

class Sub2 extends Super {
  constructor() {
    super();
  }

  method5() {}

  method6() {}
}

class Sub3 extends Super {
  constructor() {
    super();
  }

  method7() {}

  method8() {}
}

let mixIn = {
  method9() {},

  method10() {}
}

Object.assign(Sub1, mixIn);
Object.assign(Sub3, mixIn);
}


//Easy JS120 exercises

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// class Square extends Rectangle {
//   constructor(sideLength) {
//     super(sideLength, sideLength);
//   }
// }

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super (name, age, '4', 'cat', status);
//   }

//   introduce() {
//     return `${super.introduce()} Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, '4', 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {
//   getWheels() {
//     return 4;
//   }
// }

// class Motorcycle extends Vehicle {
//   getWheels() {
//     return 2;
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model);
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }
// }

// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase());
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// const walkMixIn = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }

// Object.assign(Person.prototype, walkMixIn);
// Object.assign(Cat.prototype, walkMixIn);
// Object.assign(Cheetah.prototype, walkMixIn);

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// class Pet {
//   constructor(species, petName) {
//     this.species = species;
//     this.petName = petName;
//   }

//   info() {
//     console.log(`a ${this.species} named ${this.petName}`);
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   adoptPet(pet) {
//     this.pets.push(pet);
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }

//   adoptedPets() {
//     console.log(`${this.name} has adopted the following pets:`);
//     this.pets.forEach(pet => {
//       pet.info();
//     })
//     console.log(``);
//   }
// }

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// class Shelter {
//   constructor() {
//     this.adopters = [];
//   }

//   adopt(owner, petName) {
//     owner.adoptPet(petName);
//     if (!this.adopters.includes(owner)) {
//     this.adopters.push(owner);
//     }
//   }

//   printAdoptions() {
//     this.adopters.forEach(owner => {
//       owner.adoptedPets();
//     })
//   }
// }

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// function createGreeter(name) {
//   return {
//     name: name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet: function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${this.name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${this.name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${this.name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning'); // Good Morning Victor

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     let discount = this.price * percent / 100;
//     return this.price - discount;
//   },
// };

// console.log(item.discount(20))   // should return 40
// console.log(item.discount(50))   // should return 25
// console.log(item.discount(25))   // should return 37.5

// function objectsEqual(object1, object2) {
//   for (let keys1 in object1) {
//     for (let keys2 in object2) {
//       if (keys1 !== keys2 || object1[keys1] !== object2[keys2]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// function createStudent(name, year) {
//   return {
//     name: name,
//     year: year,
//     courses: [],

//     info: function() {
//       console.log(`${this.name} is a ${this.year} year student`);
//     },

//     listCourses: function() {
//       console.log(this.courses);
//     },

//     addCourse: function(object) {
//       this.courses.push(object);
//     },

//     addNote: function(code, note) {
//       this.courses.forEach((course, index) => {
//         if (course['code'] === code) {
//           if (course['notes']) {
//             this.courses[index]['notes'] += `; ${note}`;
//           } else {
//             this.courses[index]['notes'] = `${note}`;
//           }
//         }
//       });
//     },

//     updateNote: function(code, note) {
//       this.courses.forEach((course, index) => {
//         if (course['code'] === code) {
//           this.courses[index]['notes'] = `${note}`;
//         }
//       });
//     },

//     viewNotes: function() {
//       this.courses.forEach(course => {
//         if (course[`notes`]) {
//         console.log(`${course['name']}: ${course['notes']}`);
//         }
//       });
//     }
//   }
// }

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, this);
//   },
// };

// console.log(franchise.allMovies());

// function myFilter(array, func, context) {
//   let result = [];

//   array.forEach(function(value) {
//     if (func.bind(context)(value)) {
//       result.push(value);
//     }
//   });

//   console.log(result);
// }

// let filter = {
//   allowedValues: [5, 6, 9],
// }

// myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//   return this.allowedValues.indexOf(val) >= 0;
// }, filter); // returns [5, 6, 9]

// // name property added to make objects easier to identify
// let foo = {name: 'foo'};
// foo.ancestors = function() {
//   let obj = Object.getPrototypeOf(this);
//   let chain = [];
//   while (obj !== null) {
//     if (obj === Object.prototype) {
//       obj.name = 'Object.prototype';
//     }
//     chain.push(obj.name);
//     obj = Object.getPrototypeOf(obj);
//   }

//   console.log(chain);
// }
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// Car.prototype.intro = function() {
//   return `Hello, my name is ${typeof this}, I am a ${this.make} ${this.model}.`;
// };

// let mater = new Car('Honda', 'Pilot');

// console.log(mater);
// console.log(mater.intro());

// class Person {
//   voice() {
//   }
// }

// class Embryo extends Person {
//   voice() {
//     return `I feel what my mother feels and depend on her fully for my growth.`
//   }
// }

// class Baby extends Person {
//   voice() {
//     return `When I cry, my parents hear me and find out what I need.`;
//   }
// }

// class Animal {
//   constructor() {
//     this.latin = 'living being';
//     this.taxonomy = 'Kingdom';
//   }
//   static description() {
//     return `Multicellular, eukaryotic organisms`
//   }

//   movementType() {}
// }

// class Mammal extends Animal {
//   constructor() {
//     super();
//     this.latin = 'breast';
//     this.taxonomy = 'Class';
//   }

//   static description() {
//     return `${super.description()}
//     & Vertebrates, nursing mothers, with a neocortex, fur or hair, and 3 middle ear bones`
//   }
// }

// class Primate extends Mammal {
//   constructor() {
//     super();
//     this.latin = 'first rank';
//     this.taxonomy = 'Order';
//   }

//   static description() {
//     return `${super.description()}
//     & Large brains, visual acuity, color vision, shoulder girdle`
//   }
// }
 
// class Human extends Primate {
//   constructor() {
//     super();
//     this.latin = 'wise man';
//     this.taxonomy = 'Species';
//   }

//   static description() {
//     return `${super.description()}
//     & Bipedalism and large, complex brains`
//   }
// }

// let human = new Human();

// console.log(Animal.description());
// console.log(Mammal.description());
// console.log(Primate.description());
// console.log(Human.description());

// function Animal {
//     this.latin = 'living being';
//     this.taxonomy = 'Kingdom';
// }

// Animal.description() {
//   return `Multicellular, eukaryotic organisms`
// }

//   movementType() {}
// }

// class Mammal extends Animal {
//   constructor() {
//     super();
//     this.latin = 'breast';
//     this.taxonomy = 'Class';
//   }

//   static description() {
//     return `${super.description()}
//     & Vertebrates, nursing mothers, with a neocortex, fur or hair, and 3 middle ear bones`
//   }
// }

// class Primate extends Mammal {
//   constructor() {
//     super();
//     this.latin = 'first rank';
//     this.taxonomy = 'Order';
//   }

//   static description() {
//     return `${super.description()}
//     & Large brains, visual acuity, color vision, shoulder girdle`
//   }
// }
 
// class Human extends Primate {
//   constructor() {
//     super();
//     this.latin = 'wise man';
//     this.taxonomy = 'Species';
//   }

//   static description() {
//     return `${super.description()}
//     & Bipedalism and large, complex brains`
//   }
// }

// console.log(Human.prototype.constructor === Human);
// console.log(Human.constructor === Function);
// console.log(typeof Human === 'function');
// console.log(Human instanceof Object);
// console.log(human.constructor === Human);
// console.log(typeof human === 'object');
// console.log(human instanceof Human);
// console.log(human instanceof Primate);
// console.log(human instanceof Mammal);
// console.log(human instanceof Animal);
// console.log(human instanceof Object);
// console.log(Object.getPrototypeOf(human) === Human.prototype);

// const VehicleRange = {
//   range() {
//     return this.fuelCap *  this.fuelEfficiency;
//   }
// }

// class WheeledVehicle {
//   constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
//     this.tires = tirePressure;
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }

//   tirePressure(tireIdx) {
//     return this.tires[tireIdx];
//   }

//   inflateTire(tireIdx, pressure) {
//     this.tires[tireIdx] = pressure;
//   }
// }

// Object.assign(WheeledVehicle.prototype, VehicleRange);

// class Auto extends WheeledVehicle {
//   constructor() {
//     // the array represents tire pressure for four tires
//     super([30,30,32,32], 50, 25.0);
//   }
// }

// class Motorcycle extends WheeledVehicle {
//   constructor() {
//     // array represents tire pressure for two tires
//     super([20,20], 80, 8.0);
//   }
// }

// class Catamaran {
//   constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
//     this.propellerCount = propellerCount;
//     this.hullCount = hullCount;
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }
// }

// Object.assign(Catamaran.prototype, VehicleRange);

// const WestminsterDogShow = {
//   isBreedChampion() {},
// }

// const WestminsterAgility = {
//   isAgilityMaster() {},
// }

// class Dog {}

// class Terrier extends Dog {}

// Object.assign(Terrier.prototype, WestminsterDogShow, WestminsterAgility);

// class Hound extends Dog {}

// Object.assign(Hound.prototype, WestminsterDogShow, WestminsterAgility);

// class MixedBreed extends Dog {}

// Object.assign(MixedBreed.prototype, WestminsterAgility);

// function Dog(name) {
//   this.name = name;

//   // // Main Method to avoid `new` keyword:
//   // if (!(this instanceof Dog)) {
//   //   return new Dog(name);
//   // }

//   // Alternative to Main Method to avoid `new` keyword:
//   if (this.constructor !== Dog) {
//     return new Dog(name);
//   }

//   // // Second Method to avoid `new` keyword:

//   // let newDog = Object.create(Dog.prototype);
//   // newDog.name = name;
  
//   // return newDog;

//   // // Alternative Method to avoid `new` keyword:
//   // function newDog(name) {
//   //   this.name = name;
//   // }

//   // newDog.prototype = Dog.prototype;

//   // return new newDog(name);
// }

// Dog.prototype.bark = function() {
//   return `Woof!`;
// }

// let dog1 = new Dog('Patton');
// console.log(dog1.bark()); // Woof!
// console.log(dog1.name); // Patton
// let dog2 = Dog('Rommel');
// console.log(dog2.bark()); // Woof!
// console.log(dog2.name); // Rommel

// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     readBook: function() {
//       if (this.read) {
//         this.read = false;
//       } else {
//         this.read = true;
//       }
//     },

//     getDescription: function() {
//       console.log(`${this.title} was written by ${this.author}. I ${this.read ? 'have': `haven't`} read it.`);
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// book1.getDescription();  // "Mythos was written by Stephen Fry."
// book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
// book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// book1.getDescription(); // Mythos was written by David Fry. I haven't read it.
// book1.readBook();
// book1.getDescription(); // Mythos was written by David Fry. I have read it.

// function Dog(name) {
//   this.name = name;

//   // return {};
// }

// let dog = new Dog('Patton');

// console.log(Object.getPrototypeOf(dog) === Object.prototype);

// Study session

// const person = {
//   introduce: function() {
//     console.log(`Hi, my name is ${this.name}.`);
//   },
// }

// const karl = Object.create(person);
// karl.name = 'Karl';
// karl.introduce();

// function createChild(name, age) {
//   return {
//     name,
//     age,

//     introduce() {
//       console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     },
//   }
// }

// const child1 = createChild('Sophie', 7);
// const child2 = createChild('Miguel', 8);
// const child3 = createChild('Sahana', 7);

// child1.introduce(); // "My name is Sophie and I am 7 years old."
// child2.introduce(); // "My name is Miguel and I am 8 years old."
// child3.introduce(); // "My name is Sahana and I am 7 years old."

// Do the same when instances are invoked using `new` keyword using constructors and prototypes

let set = {
  num1: 1,
  num2: 2,

  addTwoNumbers() {
    return this.num1 + this.num2;
  },
}

const myFunc = set.addTwoNumbers;

console.log(set.addTwoNumbers());
console.log(myFunc());
console.log(myFunc.call(set));

const myFunc2 = set.addTwoNumbers.bind(set);
console.log(myFunc2());

console.log(set.subtract);

// function whatIsThis() {
//   console.log(this);
// }

// whatIsThis(); // Global object

// const myObj = {
//   whatAmI: 'myObj',
//   whatIsThis: function() {
//     console.log(this);
//   }
// }

// myObj.whatIsThis(); // myObj object

// let whatIsThis = myObj.whatIsThis;
// whatIsThis(); // Global object

// function whatIsThis() {
//   console.log(this);
// }

// const myObj = {
//   whatAmI: 'myObj',
// }

// whatIsThis.call(myObj); // myObj object

// const myObj = {
//   whatAmI: 'myObj',
//   whatIsThis: function() {
//     console.log(this);
//   }
// };

// const myOtherObj = {
//   whatAmI: 'myOtherObj',
// }

// myObj.whatIsThis.call(myOtherObj); // myOtherObj object

// function assignProperty(obj, prop, value) {
//   let prototype = Object.getPrototypeOf(obj);
//   while (prototype) {
//     if (prototype.hasOwnProperty(prop)) {
//       prototype[prop] = value;
//     }
//     prototype = Object.getPrototypeOf(prototype);
//   }
// }

// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// let proto = {
//   a: 1,
//   b: 2,
//   c: 3,
// }

// let foo = Object.create(proto);

// foo.d = 4;

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`);
// });

// let objectNoProto = Object.create(null);

// Object.getPrototypeOf(objectNoProto);

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add: function() {
//      return this.a + this.b;
//    },
// };
// console.log(bar.add.call(foo));

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// let turk2 = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// let getTurkDescription = function() {
//   return this.firstName + ' ' + this.lastName + ' is a '
//   + this.occupation + '.';
// }.bind(turk2);

// console.log(getTurkDescription());

// let foo = {
//   a: 0,
//   incrementA: function() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// function createInvoice(services = {}) {
//   return {
//     phone: services.phone || 3000,
//     internet: services.internet || 5500,
//     paid: 0,

//     total: function() {
//       return this.phone + this.internet;
//     },

//     addPayment: function(payment) {
//       this.paid += payment.total();
//     },

//     addPayments: function(payments) {
//       payments.forEach(payment => {
//         this.paid += payment.total();
//       }, this);
//     },

//     amountDue: function() {
//       return this.total() - this.paid;
//     },
//   }
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

// function createPayment(services = {}) {
//   return {
//     phone: services.phone || 0,
//     internet: services.internet || 0,

//     total: function() {
//       return services.amount || this.phone + this.internet;
//     }
//   }
// }

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment)  => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

// let invoice = createInvoice({
//   phone: 1200,
//   internet: 4000,
// });

// let payment1 = createPayment({ amount: 2000 });
// let payment2 = createPayment({
//   phone: 1000,
//   internet: 1200
// });

// let payment3 = createPayment({ phone: 1000 });

// invoice.addPayment(payment1);
// invoice.addPayments([payment2, payment3]);
// console.log(invoice.amountDue());       // this should return 0

// function Dog(name) {
//   this.name = name;
//   return {};
// }
// let puppy = new Dog('Monty');
// console.log(puppy);
// console.log(puppy instanceof Dog);
// console.log(Object.getPrototypeOf(puppy) === Dog.prototype);

// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.area = RECTANGLE.area;
// Rectangle.prototype.perimeter = RECTANGLE.perimeter;

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area());
// console.log(rect1.perimeter());

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return (this.radius ** 2 * Math.PI);
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.hasOwnProperty('area')); // => false

// function Ninja() {
//   this.swung = true;
// }
// let ninja = new Ninja();
// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };
// Ninja.prototype = {
//   swingSword: function() {
//     return !this.swung;
//   },
// };
// Ninja.prototype.rest = function() {};
// let ninja2 = new Ninja();
// console.log(Object.getPrototypeOf(ninja));
// console.log(ninja.swingSword());
// console.log(Object.getPrototypeOf(ninja2));
// console.log(ninja2.swingSword());

// function Ninja() {
//   this.swung = false;
// }

// Ninja.prototype.swing = function() {
//   if (this.swung) {
//     this.swung = false;
//   } else {
//     this.swung = true;
//   }

//   return this;
// }

// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// let ninjaB = new ninjaA.constructor();

// // create a `ninjaB` object here; don't change anything else

// console.log(ninjaA.constructor === ninjaB.constructor) // => true

// function User(first, last) {
//   this.name = `${first} ${last}`;
  
//   // if (!(this instanceof User)) {
//   //   return new User(first, last);
//   // }

//   function newUser(first, last) {
//     this.name = `${first} ${last}`;
//   }

//   newUser.prototype = User.prototype;

//   return new newUser(first, last);
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// function createPet(animal, name) {
//   return {
//     animal,
//     name,

//     sleep() {
//       console.log(`I am sleeping`);
//     },

//     wake() {
//       console.log(`I am awake`);
//     },
//   }
// }

// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake

// let sleep = pudding.sleep;
// sleep();

// let PetPrototype = {
//   sleep() {
//     console.log(`I am sleeping`);
//   },

//   wake() {
//     console.log(`I am awake`);
//   },

//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   },
// }


// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake

// function Animal() {}
// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// let puppy = new Dog();
// console.log(puppy.constructor === Dog); // true

// function Pet(name) {
// this.name = name;
// }
// function Dog(name, breed) {
// Pet.call(this, name);
// this.breed = breed;
// }
// Dog.prototype = Object.create(Pet.prototype);
// Dog.prototype.constructor = Dog
// let puppy = new Dog('Monty', 'Lab');
// console.log(puppy); // Dog { name: 'Monty', breed: 'Lab' }

// class Pet {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Dog extends Pet {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
// }
// let puppy = new Dog('Monty', 'Lab');
// console.log(puppy); // Dog { name: 'Monty', breed: 'Lab' }

// class Greeting {
//   greet(message) {
//     console.log(message);
//   }
// }
// class Hello extends Greeting {
//   hi() {
//     super.greet(`Hello`);
//   }
// }
// class Goodbye extends Greeting {
//   bye() {
//     super.greet(`Goodbye`);
//   }
// }
// let hello = new Hello();
// hello.hi(); // logs 'Hello'
// let goodbye = new Goodbye();
// goodbye.bye(); // logs 'Goodbye'

// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   }
// };
// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }
// Object.assign(Car.prototype, Speed);
// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }
// Object.assign(Truck.prototype, Speed);
// let car = new Car();
// car.goFast();
// let truck = new Truck();
// truck.goFast();
// 'goFast' in car;  // => true
// 'goFast' in truck; // => true

// let VehicleRange = function() {
//   return this.fuelCap * this.fuelEfficiency;
// }

// class Vehicle {
//   constructor(kmTravelledPerLiter, fuelCapInLiter) {
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }
// }

// class WheeledVehicle extends Vehicle {
//   constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
//     super(kmTravelledPerLiter, fuelCapInLiter)
//     this.tires = tirePressure;
//   }

//   tirePressure(tireIdx) {
//     return this.tires[tireIdx];
//   }

//   inflateTire(tireIdx, pressure) {
//     this.tires[tireIdx] = pressure;
//   }
// }

// class Auto extends WheeledVehicle {
//   constructor() {
//     // the array represents tire pressure for four tires
//     super([30,30,32,32], 50, 25.0);
//   }
// }
// Object.assign(Auto.prototype, VehicleRange);
// class Motorcycle extends WheeledVehicle {
//   constructor() {
//     // array represents tire pressure for two tires
//     super([20,20], 80, 8.0);
//   }
// }
// Object.assign(Motorcycle.prototype, VehicleRange);
// class Catamaran extends Vehicle {
//   constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
//     super(kmTravelledPerLiter, fuelCapInLiter);
//     this.propellerCount = propellerCount;
//     this.hullCount = hullCount;
//   }
// }
// Object.assign(Catamaran.prototype, VehicleRange);

// let Animal = {};
// let Cat = Object.create(Animal);
// let fluffy = Object.create(Cat);
// console.log(fluffy instanceof Animal);
