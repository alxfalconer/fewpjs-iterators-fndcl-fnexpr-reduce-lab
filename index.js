const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (acc, elem) {
    return elem + acc;
});

// Code your solution here
