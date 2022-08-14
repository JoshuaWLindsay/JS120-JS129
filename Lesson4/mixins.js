// const Moveable = {
//   range() {
//     return this.fuelCap *  this.fuelEfficiency;
//   }
// };

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

// Object.assign(WheeledVehicle.prototype, Moveable);

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
//     // catamaran specific logic

//     this.propellerCount = propellerCount;
//     this.hullCount = hullCount;
//     this.kmTravelledPerLiter = kmTravelledPerLiter;
//     this.fuelCapInLiter = fuelCapInLiter;
//   }
// }

// Object.assign(Catamaran.prototype, Moveable);

class Chef {
  prepare(wedding) {
    this.prepareFood(wedding.guests);
  }

  prepareFood(guests) {
    console.log(guests);
  }
}

class Decorator {
  prepare(wedding) {
    this.decoratePlace(wedding.flowers);
  }

  decoratePlace(flowers) {
    console.log(flowers);
  }
}

class Musician {
  prepare(wedding) {
    this.preparePerformance(wedding.songs);
  }

  preparePerformance(songs) {
    console.log(songs);
  }
}

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare(this);
    });
  }
}

let lindsayWedding = new Wedding(['mom', 'dad'], ['roses'], ['My Girl']);

let supportStaff = [new Chef(), new Decorator(), new Musician()];

lindsayWedding.prepare(supportStaff);