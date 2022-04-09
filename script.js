const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value) == false)
  {
    messages.push("You have entered an invalid email address!")
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 24) {
    messages.push('Password must be less than 24 characters')
  }


  if(password.value !== confirmPassword.value){
    messages.push('Your Passwords do not match!')
  }
  
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  alert("Your Form has been Submitted, Click ' OK ' to continue! ");


})
