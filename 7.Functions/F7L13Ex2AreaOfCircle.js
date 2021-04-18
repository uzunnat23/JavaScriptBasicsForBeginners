//To create a circle obj using the  obj literal syntax. 
//This obj should have a radius property that can be read or write to.
//And also obj should have an area property that can be read only.

let circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
};

console.log(circle.area);