// # Class Exercises

// 1.

  class Humans { //   * Create a Human class that takes in a name and age.
    constructor(name, age){
      this.name = name;
      this.age = age;
    };
    ageOneYear(){   //   * Add the function `ageOneYear` that ages the human.
      return this.age++;
    };
    eating(){
      console.log( 'mmm, mmm, mmm, I"m love"n it.'); //    * Add the function `eating`, that logs "mmm, mmm, mmm, I'm love'n it".
    };
  }

let erick = new Humans ("Erick", 32); //   * Create an instance of the Human class.

console.log(`I ${erick.name} have ${erick.age} years old.`); //     * console log your humans age

erick.ageOneYear(1); //     * call ageOneYear on your human

console.log(`I ${erick.name} have ${erick.age} years old now, because had past one year.`); //     * console log their age again.

erick.eating(); //     * call eating on your human.

// 2.

class Vector{ // Write a class Vector that represents a vector in two-dimensional space.

  constructor(x,y){ // It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
    this.x = x;
    this.y = y;
  };
  // Give the Vector two methods, `plus` and `minus`, that take another vector as an argument and
  // returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
  plus(newV){
    return new Vector (this.x + newV.x , this.y + newV.y) ;
  };
  minus(x, y){
    return new Vector (this.x - newV.x , this.y - newV.y);
  };
  getLength(){ // Add a method `getLength` to the prototype that computes the length of the vector ;
    return Math.sqrt((this.x * this.x + this.y * this.y));
  }
};

let v1 = new Vector (3, 5);
let v2 = new Vector (6, 9);

// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
console.log(Math.ceil(v1.getLength()))

// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```
