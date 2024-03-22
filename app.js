// const signupForm = document.getElementById('signup-form');
// const errorMessage = document.getElementById('error-message');

// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const firstName = signupForm['first-name'].value.trim();
//   const lastName = signupForm['last-name'].value.trim();
//   const email = signupForm['email'].value.trim();
//   const password = signupForm['password'].value.trim();
//   const repeatPassword = signupForm['repeat-password'].value.trim();

//   if (password !== repeatPassword) {
//     errorMessage.textContent = "Passwords don't match";
//     return;
//   }

//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed up successfully
//       const user = userCredential.user;
//       console.log('User signed up:', user);
//       // Redirect or perform other actions
//     })
//     .catch((error) => {
//       // Handle signup errors
//       errorMessage.textContent = error.message;
//     });
// });
function signup() {
  let firstName = document.getElementById("first-name").value;
  let lasttName = document.getElementById("last-name").value;
  let signupemail = document.getElementById("email").value;
  let signuppassword = document.getElementById("password").value;
  let signuprepeatpassword = document.getElementById("repeat-password").value;
  if (signuppassword === signuprepeatpassword && firstName !== "" && lasttName !== "" && signupemail !== "" && signuppassword !== "" && signuprepeatpassword !== "") {
    window.location.assign("login.html")
  } else if(signuppassword !== signuprepeatpassword){
    alert("password not match");

  }else{
    alert("please fill input");
  }

}
