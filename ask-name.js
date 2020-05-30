addGreeting();
var username = prompt('what is your name');

document.write('<h3>' + username + '</h3>');
// var response = prompt('do you know what branch of the military you want to join?');
// var message ;

function pickBranch() {
    var response = prompt('Do you know what branch you want to join?');
    while (response !== 'army' && response !== 'navy' && response !== 'airforce' && response !== 'marines')
        response = prompt('please pick a branch if you are not sure just type army');
    if (response === 'army')
        document.write('<h3>' + 'Army Strong!' + '</h3>');
    if (response === 'marines')
        document.write('<h3>' + 'Hurah!' + '</h3>');
    if (response === 'airforce')
        document.write('<h3>' + 'Aim High!' + '</h3>');
    if (response === 'navy')
        document.write('<h3>' + 'Forged By the Sea!' + '</h3>');
}
pickBranch();

function howMany(){
    var count = prompt('How many years will you serve?');
    while (isNaN(count) || count === ''){
        count = prompt ('Decide now! this is a decision that will affect the rest of your life....How many years?');
    }
    return count;
}
var years = howMany();

var star = '<img id="star" src ="star.jpg" alt=""></img>';
var result = '';
for (var i = 0; i < years; i++){
    result = result + star;
}
document.write(result);


// var message
// While(message !== 'army'); {
//     response = prompt('please pick a branch');

    // var answer = ''; 
    // while (answer !== 'S3kreT P455w0rD') {
    //   answer = prompt('Enter the passphrase to proceed...');
    // }
    

    // function howMany(){
    //     var count = prompt('how many years will you serve?');

    // function showOrder(){
    //     var itemType = get getItemType
    //     var orderTotal = howMany();
    
    //     for(var i = 0; i < orderTotal; i++){
    //         result = result + '<p>' + itemType + '</p>';
    //     }
    //     return document.write results;
    // }
    
// if (response === 'marines'){
//     message = 'scroll down to the 2nd link' ;
// } else if (response === 'army'){
//     message = 'check out the first option' ;
// } else if (response === 'navy'){
//     message = 'scroll down to the 3rd option' ;
// } else if (response === 'airforce'){
//     message = 'scroll down to the last option' ;
// } else { 
//     message = 'Ok here are some options unless you wanted coast guard';
// }
  

// document.write('<h2>' + message + '</h2>');