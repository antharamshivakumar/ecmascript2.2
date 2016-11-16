/* Create a class ‘Vehicle’ as base class where define vehicle name and type using properties and 
define methods to getName and getType of vehicle. Now create 3 more class, will extend Vehicle class and uses its properties.
Create instance of these classes and display output using console. */


class Vehicle {
 
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}

class Car extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
  getName () {
    return 'It is a car: ' + super.getName();
  }
 
}
let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car