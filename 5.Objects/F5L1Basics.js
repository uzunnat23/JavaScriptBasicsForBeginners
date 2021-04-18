
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    // If function is part of a n object, it is a method
    draw: function () {
        console.log('draw');
    }
};
circle.draw(); // Method