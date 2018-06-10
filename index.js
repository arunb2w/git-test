var rect = require('./rectangle');

function solveRect(l, b) {
    console.log(`Solving for rectangle with length : ${l} and breadth : ${b}`);

    rect(l, b, function(err, result) {
        if(err) {
            console.log(`ERROR: ${err}`);
        }
        else {
            console.log(`Perimeter of triangle with dimensions length = ${l} and breadth = ${b} is ${result.perimeter()} `);
            console.log(`Area of triangle with dimensions length = ${l} and breadth = ${b} is ${result.area()} `);
            
        }
    });
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 4);
solveRect(-3, -5);