"use strict";
const car = {
    brand: "Toyota",
    speed: 120,
    accelerate() {
        console.log(`The ${this.brand} is accelerating`);
    },
    brake() {
        console.log(`The ${this.brand} is braking`);
    }
};
car.accelerate();
car.brake();
