//The task:
//Replace the function checkAge, so that it does the same, but without "if" in one line.

// function checkAge(age) { 
//     if (age > 18) { 
//         return true; 
//     } else { 
//         return confirm('Do You have permission?'); 
//     } 
// }

//Create two variants:
//1. By using the operator "?"
//2. By using the operator "||"


//1. By using the operator "?"
function checkAge(age) { 
    return (age > 18) ? true : confirm ('Do You have permission?'); 
} 

//2. By using the operator "||"
function checkAge(age) { 
    return (age > 18) || confirm ('Do You have permission?'); 
} 