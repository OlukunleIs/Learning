let pwd=prompt('Create your password');
if(pwd.length>=8 || pwd.length<=15){
    if(pwd<0){
        document.getElementById('bold').innerHTML='This field is required';
    }
    else if(pwd.indexOf('&')>=0 && pwd.indexOf('@')){
        document.getElementById('bold').innerHTML='Password is strong';
    }
    else if(pwd.indexOf('#')>=0 && pwd.indexOf('$')>=0){
        document.getElementById('bold').innerHTML='Password is okay';
    }
    else if(pwd.indexOf('$')>=0){
        document.getElementById('bold').innerHTML='Password is intermediate';
    }
    else if(pwd.indexOf('@')>=0){
        document.getElementById('bold').innerHTML='Password is weak';
    }
    else{
        document.getElementById('bold').innerHTML='Enter a valid password';
    }


}
else{
    document.getElementById('bold').innerHTML='Password must be between 8 and 15 characters';
}

// var check=['dele', 'kunle', 'rowland', 'isaac', 'tumininu', 'david', 'dumoye', 'ariyo']
// var guests=prompt('Enter you name')
// var invite=guests.toLowerCase();

// if (check.includes(invite)){
//     document.getElementById('law').innerHTML='Welcome, please enter the party and enjoy yourself'
// }
// else{
//     document.getElementById('law').innerHTML='You were not invited to this party'
// }