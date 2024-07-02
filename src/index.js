/*
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault()

    var toast = document.getElementById('toast')
    toast.classList.remove('hidden')

    setTimeout(function() {
        toast.classList.add('hidden')
    }, 3000)
})*/

var toastMessage = () => {
    var toast = document.getElementById('toast')
    toast.classList.remove('hidden')

    setTimeout(function() {
        toast.classList.add('hidden')
    }, 3500)
}

document.getElementById('contactForm').addEventListener('submit' , function(event) {
    event.preventDefault()

    let isValid = true

    const fName = document.getElementById('fName')
    const fNameError = document.getElementById('fNameError')

    if(!fName.value.trim()){
        fNameError.classList.remove('hidden')
        isValid = false
    } else{
        fNameError.classList.add('hidden')
    }

    const lName = document.getElementById('lName')
    const lnameError = document.getElementById('lNameError')

    if(!lName.value.trim()){
        lnameError.classList.remove('hidden')
        isValid = false
    } else {
        lnameError.classList.add('hidden')
    }

    const uEmail = document.getElementById('uEmail')
    const uEmailError = document.getElementById('uEmailError')
    const uEmailError2 = document.getElementById('uEmailError2')

    if(!uEmail.value.trim()){
        uEmailError.classList.remove('hidden')
        isValid = false
    } 
     else {
        uEmailError.classList.add('hidden')

        if (!uEmail.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            uEmailError2.classList.remove('hidden');
            isValid = false;
        } else {
            uEmailError2.classList.add('hidden');
        }
    }

    const quarryType = document.querySelector('input[name = "quarryType"]:checked')
    const quarryError = document.getElementById('quarryError')

    if(!quarryType) {
        quarryError.classList.remove('hidden')
        isValid = false
    } else {
        quarryError.classList.add('hidden')
    }

    const message = document.getElementById('message')
    const messageError = document.getElementById('messageError')

    if(!message.value.trim()){
        messageError.classList.remove('hidden')
        isValid = false
    } else {
        messageError.classList.add('hidden')
    }

    const agree = document.querySelector('input[id = "agree"]:checked')
    const agreeError = document.getElementById('agreeError')

    if (!agree) {
        agreeError.classList.remove('hidden')
        isValid = false
    } else {
        agreeError.classList.add('hidden')
    }

    if (isValid) {
        toastMessage()
    }
})