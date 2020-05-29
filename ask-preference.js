var = prompt('do you know what branch of the military you want to join?');
var message;

if (response === 'navy'){
    message = 'I Love Dogs' ;
} else if (response === 'cats'){
    message = 'Cats are Grrrreat!'
} else if (response === 'both'){
    message = 'HURRAY! I like both also!'
} else {
    message = 'Ok, do you like annimals?'
}

document.write('<h2>' + message + '</h2>');