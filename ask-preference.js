var = prompt('do you prefer dogs, cats, or both?');
var message;

if (response === 'dogs'){
    message = 'I Love Dogs' ;
} else if (response === 'cats'){
    message = 'Cats are Grrrreat!'
} else if (response === 'both'){
    message = 'HURRAY! I like both also!'
} else {
    message = 'Ok, do you like annimals?'
}

document.write('<h2>' + message + '</h2>');