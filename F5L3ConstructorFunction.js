// Factory function 
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
//console.log(circle1);

// Constructor function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
// new
// 1. Create an empty obj
// 2. Set this to point to this obj
// 3. Return that obj from this function
const circle = new Circle(1);
//console.log(Circle);