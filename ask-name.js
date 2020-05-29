addGreeting();
var username = prompt('what is your name');

document.write('<h3>' + username + '</h3>');


var response = prompt('do you know what branch of the military you want to join?');
var message ;

if (response === 'marines'){
    message = 'scroll down to the 2nd link' ;
} else if (response === 'army'){
    message = 'check out the first option' ;
} else if (response === 'navy'){
    message = 'scroll down to the 3rd option' ;
} else if (response === 'airforce'){
    message = 'scroll down to the last option' ;
} else { 
    message = 'Ok here are some options unless you wanted coast guard';
}
  

document.write('<h2>' + message + '</h2>');