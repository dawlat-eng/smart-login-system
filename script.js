
let username = document.getElementById('signName') ;
let email = document.getElementById('signEmail');
let password = document.getElementById('signPassword');
const errorMessage = document.getElementById('signup-error-message');

let users = [];

//function to handle signup
function signup(){
    const username = document.getElementById('signName').value;
    const email = document.getElementById('signEmail').value;
    const password = document.getElementById('signPassword').value;



    //check if fields are empty
    if (username === '' || email === '' || password === ''){
        errorMessage.textContent = 'All fields are required';
        return;
    }
  
  
    //get existing users from loacal storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //check if user already exists
    const userExists = users.some(user => user.username === username || user.email === email);
    if (userExists) {
        errorMessage.textContent = 'Username or Email already taken';
        return;
    }

    //add new user
    users.push({username, email, password});

    //save updated users list to localstorage
    localStorage.setItem('users' , JSON.stringify(users));

    alert('Signup Successful You Can now log in.');
    // window.location.href = 'index.html'; //redirect to login 
}

//function to handle login
function login(){
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const errorMessage = document.getElementById('login-error-message');

  if (username === '' || password === '') {
    errorMessage.textContent = 'Both fields are required';
    return;
  }

  //get existing users from localstorage
  const users = JSON.parse(localStorage.getItem('users')) || [] ;

  //validation
  const user = users.find(user=> user.username === username && user.password === password);

  if (user){
    alert('Login Successful!');
    errorMessage.textContent = '';

    //redirect to dasehboard or perform other actions
  }else{
    errorMessage.textContent = 'Invalid username or password';
  }
}

 //validation function
 function validateAllData(elem){
  let regex={
      signName:/^[a-z0-9_-]{3,15}$/,
      signEmail:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      signPassword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  };

  if(regex[elem.id].test(elem.value)==true){
      // match add is-valid
      elem.classList.add('is-valid');
      elem.classList.remove('is-invalid');
   }
  else{
      // no match add is-invalid
      elem.classList.add('is-invalid');
      elem.classList.remove('is-valid');
  }

   // Check if all fields are valid
  if (username.classList.contains('is-invalid') || email.classList.contains('is-invalid') || password.classList.contains('is-invalid')) {
    errorMessage.textContent = 'Please fix the errors before submitting';
  }
}


//email,pass,username validation
    // const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    // if (!emailPattern.test(email)) {
    //     errorMessage.textContent = 'Please enter a valid email';
    //     return;
    // }

    // const usernamePattern = /^[a-z0-9_-]{3,15}$/; // Alphanumeric, 4-12 characters
    // if (!usernamePattern.test(username)) {
    //     errorMessage.textContent = 'Please enter a valid username';
    //     return;
    // }
    // const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/; // At least one lowercase, one uppercase, one digit, one special character, minimum 8 characters
    // if (!passwordPattern.test(password)) {
    //     errorMessage.textContent = 'Please enter a valid password';
    //     return;
    // }
