
let email = document.getElementById('email');
let password = document.getElementById('password');
let number = document.getElementById('number');
let validate = document.getElementById('validate');


let message = document.getElementById('message');

console.log(email, password, number, validate, message)


document.forms[0].onsubmit = function(event) {
    let emailValid = false;
    let passwordValid = false;
    let numberValid = false;

    if(email.value !== "" && password.value.length >= 8 && number.value.length >= 8) {
        emailValid = true;
        passwordValid = true;
        numberValid = true;
        message.innerHTML = 'valid';

        resetInput();
        validate.value = 'validate';
        event.preventDefault();
    }

    if(emailValid === false || passwordValid === false || numberValid === false) {
        message.innerHTML = 'Not valide';
        validate.value = 'Try again';
        event.preventDefault();
    }
}

function resetInput() {
        email.value = '';
        password.value = '';
        number.value = '';
}

