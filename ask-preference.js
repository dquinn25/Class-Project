var response = prompt('do you know what branch of the military you want to join?');
var message ;

if (response === 'navy'){
    message = 'check out these links' ;
} else if (response === 'army'){
    message = 'check out these links' ;
} else if (response === 'navy'){
    message = 'check out these links' ;
} else if (response === 'airforce'){
    message = 'check out these links' ;
} else {
    message = "" ;
}

document.write('<h2>' + message + '</h2>');