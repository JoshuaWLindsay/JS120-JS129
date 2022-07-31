// function createCar(make, fuelLevel, engineOn) {
//   return {
//     make: make,
//     fuelLevel: fuelLevel,
//     engineOn: engineOn,
  
//     startEngine() {
//       this.engineOn = true;
//     },
  
//     drive() {
//       this.fuelLevel -= 0.1;
//     },
  
//     stopEngine() {
//       this.engineOn = false;
//     },
  
//     refuel(percent) {
//       if ((this.fuelLevel + (percent / 100)) <= 1) {
//         this.fuelLevel += (percent / 100);
//       } else {
//         this.fuelLevel = 1;
//       }
//     },
//   }  
// }

// let raceCar1 = createCar('BMW', 0.5, false);
// raceCar1.drive();
// console.log(raceCar1);
// let raceCar2 = createCar('Ferrari', 0.7, true);
// raceCar2.drive();
// console.log(raceCar2);
// let raceCar3 = createCar('Jaguar', 0.4, false);
// console.log(raceCar3);

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
        console.log(`${this.title} was written by ${this.author}. ` +
        `I ${this.read ? 'have' : 'have not'} read it.`);
    },
    readBook() {
      this.read = true;
    },
  }
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

book1.getDescription();  // "Mythos was written by Stephen Fry."
book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

book1.getDescription(); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
book1.getDescription(); // Mythos was written by David Fry. I have read it.








