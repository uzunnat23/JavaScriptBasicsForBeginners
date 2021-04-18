// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1,3)
// 12 points -> License suspended


function checkSpeed(speed) {
    const speedLimit = 75;
    const kmPerPoint = 5;
    if (speed < speedLimit) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points:', points);

}


checkSpeed(72);

