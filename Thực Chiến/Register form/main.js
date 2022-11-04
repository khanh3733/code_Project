const username = document.querySelector('#username')
const id = document.querySelector('#id')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#password2')

const form = document.querySelector('form')

function showError(input, message){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    parent.classList.add('success')
    small.innerText = ''
}

function checkEmptyError(ListInput){
    let isEmptyError = false;
    ListInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            isEmptyError = true;
            showError(input, 'KHONG DUOC DE TRONG')
        } else {
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkEmailError(input){
    const regexEmail = /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(email)
    }else{
        showError(input, 'Email Invalid')
    }

    return isEmailError
}

function checkLengthError(input,min,max){
    input.value = input.value.trim()

    if(input.value.length < min){
        showError(input,`Phai co it nhat ${min} ky tu`)
        return true
    }
    if(input.value.length > max){
        showError(input,`khong duoc qua ${max} ky tu`)
        return true
    }

    return false
}

function checkPasswordMatch(passwordInput, confirmPassword){
    if(passwordInput.value !== confirmPassword.value){
        showError(confirmPassword, 'khong trung pass')
    }else {
        showSuccess(confirmPassword)

    }

}

form.addEventListener('click',function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email)
    let isUsernameLength = checkLengthError(username,3,10)
    let isPasswordLength = checkLengthError(password,3,10)
    let isPasswordConfirmLength = checkLengthError(confirmPassword,3,10)
    let isheckPasswordmatch = checkPasswordMatch(password,confirmPassword)
})