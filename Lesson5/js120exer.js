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
//   constructor(side) {
//     super(side, side);
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
// console.log(fakeCat);
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
//     super(name, age, 4, 'cat', status);
//   }

//   introduce() {
//     return `${super.introduce()} Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
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

// class Something {
//   constructor() {
//     this.data = "Hello";
//   }

//   dupData() {
//     return this.data + this.data;
//   }

//   static dupData() {
//     return "ByeBye";
//   }
// }

// let thing = new Something();
// console.log(Something.dupData());
// console.log(thing.dupData());

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

// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`
//   }
// };

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

// Object.assign(Person.prototype, walkMixin);
// Object.assign(Cat.prototype, walkMixin);
// Object.assign(Cheetah.prototype, walkMixin);

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
//   constructor(animal, name) {
//     this.animal = animal;
//     this.name = name;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.number = 0;
//   }

//   numberOfPets() {
//     return this.number;
//   }
// }

// class Shelter {
//   constructor() {
//     this.adoptions = {};
//   }

//   adopt(owner, pet) {
//     if (!this.adoptions[owner.name]) {
//       this.adoptions[owner.name] = [];
//     }
//     this.adoptions[owner.name].push(pet);
//     owner.number++;
//   }

//   printAdoptions() {
//     Object.entries(this.adoptions).forEach(adoption => {
//       console.log(`${adoption[0]} has adopted the following pets:`);
//       adoption[1].forEach(ownerPet => {
//         console.log(`a ${ownerPet.animal} named ${ownerPet.name}`);
//       });
//       console.log('');
//     });
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

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

// class Banner {
//   constructor(message) {
//     this.message = message;
//   }

//   displayBanner() {
//     console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
//   }

//   horizontalRule() {
//     return `+-${'-'.repeat(this.message.length)}-+`;
//   }

//   emptyLine() {
//     return `| ${' '.repeat(this.message.length)} |`;
//   }

//   messageLine() {
//     return `| ${this.message} |`
//   }
// }

// let banner1 = new Banner('To boldly go where no one has gone before.');
// banner1.displayBanner();

// let banner2 = new Banner('');
// banner2.displayBanner();

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
//           msg += `${this.morning} ${name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     return this.price - (this.price * percent / 100);
//   },
// };

// console.log(item.discount(20));   // should return 40
// console.log(item.discount(50));   // should return 25
// console.log(item.discount(25));   // should return 37.5

// function objectsEqual(object1, object2) {
//   let keys1 = Object.keys(object1);
//   let keys2 = Object.keys(object2);

//   for (let i = 0; i < keys1.length; i++) {
//     if (keys1[i] !== keys2[i]) return false;
//   }

//   let values1 = Object.values(object1);
//   let values2 = Object.values(object2);

//   for (let i = 0; i < values1.length; i++) {
//     if (values1[i] !== values2[i]) return false;
//   }

//   return true;
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', b: 1}));  // false

// function createStudent(name, year) {
//   return {
//     name,
//     year,
//     courses: [],
//     notes: {},

//     info() {
//       console.log(`${this.name} is a ${this.year} year student`);
//     },

//     addCourse(object) {
//       this.courses.push(object);
//     },

//     listCourses() {
//       console.log(this.courses);
//     },

//     addNote(courseCode, note) {
//       let courseName;
//       this.courses.forEach(course => {
//         if (course.code === courseCode) {
//           courseName = course.name;
//         }
//       }, this);

//       if (!this.notes[courseName]) {
//         this.notes[courseName] = note;
//       } else {
//       this.notes[courseName] += `; ${note}`;
//       }
//     },

//     updateNote(courseCode, note) {
//       let courseName;
//       this.courses.forEach(course => {
//         if (course.code === courseCode) {
//           courseName = course.name;
//         }
//       }, this);

//       this.notes[courseName] = note;
//     },

//     viewNotes() {
//       Object.entries(this.notes).forEach(note => {
//         console.log(`${note[0]}: ${note[1]}`);
//       })
//     },
//   };
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

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects

// let foo = {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// };

// let bar = {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// };

// let qux = {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// };

// function School() {
//   return {
//     students: [],
//     courses: [],

//     addStudent(student) {
//       this.students.push(student);
//     },

//     enrollStudent() {

//     },

//     addGrade() {

//     },

//     getReportCard(studentName) {
//       studentName.courses.forEach(course => {
//         if (course.grade) {
//           console.log(`${course.name}: ${course.grade}`);
//         } else {
//           console.log(`${course.name}: In progress`);
//         }
//       });
//     },

//     courseReport(course) {

//     },
//   }
// }

// let school = School();

// school.addStudent(foo);
// school.addStudent(bar);
// school.addStudent(qux);

// school.getReportCard(foo);

// school.courseReport('Math');

// school.courseReport('Advanced Math');

// school.courseReport('Physics');

// let person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName() {
//     return this.firstName + this.lastName;
//   }
// };

// console.log(person.firstName);
// console.log(person.fullName());

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, this);
//   },
// };

// console.log(franchise.allMovies());

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(number => {
//       return this.name + ' ' + number;
//     });
//   },
// };

// console.log(franchise.allMovies());

// function myFilter(array, func, thisArg) {
//   let result = [];

//   array.forEach(function(value) {
//     if (func.call(thisArg, value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// let filter = {
//   allowedValues: [5, 6, 9],
// }

// console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//   return this.allowedValues.indexOf(val) >= 0;
// }, filter)); // returns [5, 6, 9]

// console.log("Hello".constructor.name);
// console.log([1,2,3].constructor.name);
// console.log({name: 'Srdjan'}.constructor.name);

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');
// kitty.greet();

// console.log(kitty instanceof Cat);

// class Person {
//   constructor(name = 'John Doe') {
//     this.name = name;
//   }
// }

// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   rename(newName) {
//     this.name = newName;
//   }
// }

// let kitty = new Cat('Sophie');
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(kitty.name); // Chloe

// class Cat {
  // static genericGreeting() {
  //   console.log(`Hello! I'm a cat!`);
  // }
// }

// Cat.genericGreeting();

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }

//   personalGreeting() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat("Sophie");
// Cat.genericGreeting();
// kitty.personalGreeting();

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {}

// class Car extends Vehicle {}

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// let car = new Car(2015);
// console.log(car.year); // 2015

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     this.startEngine();
//   }

//   startEngine() {
//     console.log('Ready to go!')
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//   }
// }

// class Car extends Vehicle {}

// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);

// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//     return super.startEngine() + ` Drive ${speed}, please!`;
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

// const walkMixin = {
//   walk() {
//     return `Let's go for a walk!`;
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// Object.assign(Cat.prototype, walkMixin);
// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(Fish.prototype, swimMixin);

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {}

// Object.assign(Maltese.prototype, swimMixin);

// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");

// console.log(dog1.swim());
// console.log(fish1.swim());

// const towMixin = {
//   tow() {
//     return `I can tow a trailer!`;
//   }
// }

// class Truck {}

// Object.assign(Truck.prototype, towMixin);

// class Car {}

// let truck = new Truck();
// console.log(truck.tow());

// const towMixin = {
//   tow() {
//     return "I can tow a trailer!";
//   }
// }

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     Object.assign(this, towMixin);
//   }
// }

// class Car extends Vehicle {}

// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());

// let car = new Car(2015);
// console.log(car.year);

// // name property added to make objects easier to identify
// let foo = {name: 'foo'};
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// Object.prototype.ancestors = function ancestors() {
//   let ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// }

// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }
// Person.prototype.eat = function() {console.log(`Eating`)};
// Person.prototype.communicate = function() {console.log(`Communicating`)};
// Person.prototype.sleep = function() {console.log(`Sleeping`)};
// Person.prototype.fullName = function() {return `${this.firstName} ${this.lastName}`};

// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;
// Doctor.prototype.diagnose = function() {console.log(`Diagnosing`)};

// function Professor(firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.constructor = Professor;
// Professor.prototype.teach = function() {console.log(`Teaching`)};

// function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function() {console.log(`Studying`)};

// function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
//   Student.call(this, firstName, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.constructor = GraduateStudent;
// GraduateStudent.prototype.research = function() {console.log(`Researching`)};

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// class CircularQueue {
//   constructor(bufferSize) {
//     this.bufferSize = bufferSize;
//     this.buffer = [];
//     this.lastRemoved = null;
//   }

//   enqueue(item) {
//     if (this.buffer.length < this.bufferSize) {
//       this.buffer.push(item);
//     } else if (this.buffer.length === this.bufferSize) {
//       this.lastRemoved = this.buffer.shift();
//       this.buffer.push(item);
//     }
//   }

//   dequeue() {
//     if (this.buffer.length === 0) {
//       this.lastRemoved = null;
//     } else {
//     this.lastRemoved = this.buffer.shift();
//     }

//     return this.lastRemoved;
//   }
// }

// let queue = new CircularQueue(3);
// console.log(queue.dequeue() === null);

// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.dequeue() === 1);

// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue() === 2);

// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue() === 5);
// console.log(queue.dequeue() === 6);
// console.log(queue.dequeue() === 7);
// console.log(queue.dequeue() === null);

// let anotherQueue = new CircularQueue(4);
// console.log(anotherQueue.dequeue() === null);

// anotherQueue.enqueue(1)
// anotherQueue.enqueue(2)
// console.log(anotherQueue.dequeue() === 1);

// anotherQueue.enqueue(3)
// anotherQueue.enqueue(4)
// console.log(anotherQueue.dequeue() === 2);

// anotherQueue.enqueue(5)
// anotherQueue.enqueue(6)
// anotherQueue.enqueue(7)
// console.log(anotherQueue.dequeue() === 4);
// console.log(anotherQueue.dequeue() === 5);
// console.log(anotherQueue.dequeue() === 6);
// console.log(anotherQueue.dequeue() === 7);
// console.log(anotherQueue.dequeue() === null);
