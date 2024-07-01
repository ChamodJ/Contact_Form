/*
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault()

    var toast = document.getElementById('toast')
    toast.classList.remove('hidden')

    setTimeout(function() {
        toast.classList.add('hidden')
    }, 3000)
})*/

document.getElementById('contactForm').addEventListener('submit' , function(event) {
    event.preventDefault()

    let isValid = true

    var fName = document.getElementById('fName')
    var fNameError = document.getElementById('fNameError')

    console.log(fName)

    if(!fName.value.trim()){
        fNameError.classList.remove('hidden')
        isValid = false
    } else{
        fNameError.classList.add('hidden')
    }
})