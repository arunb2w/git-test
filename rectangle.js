module.exports = function(x, y, callback) {
    if( x<=0 || y<=0 ) {
        setTimeout(function() {
            callback(new Error(`Rectangle dimensions should be greater than 0. Called with l : ${x} and b : ${y}`), null);
        }, 2000);
        //console.log(`Rectangle dimensions should be greater than 0. Called with l : ${x} and b : ${y}`);
    } 
    else {
        setTimeout(function() {
            callback(null, {
                perimeter: function() {
                    return 2 * (x+y);
                },
                area: function() {
                   return x*y;
                }
            });
        }, 2000);
    }
}