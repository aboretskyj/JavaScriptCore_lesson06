// The Task:
// Write the function min() that returns minimal number from those will be passed to as the input parameters. 
// We don't know the number of the input parameters

function min() {
    var m = arguments[0];
    
    for (var i = 0; i < arguments.length; i++) {
        if (m > arguments[i]) 
        m = arguments[i];
    }
    
    return m;
}
