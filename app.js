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


// function signup() {
//   let firstName = document.getElementById("first-name").value;
//   let lasttName = document.getElementById("last-name").value;
//   let signupemail = document.getElementById("email").value;
//   let signuppassword = document.getElementById("password").value;
//   let signuprepeatpassword = document.getElementById("repeat-password").value;
//   if (signuppassword === signuprepeatpassword && firstName !== "" && lasttName !== "" && signupemail !== "" && signuppassword !== "" && signuprepeatpassword !== "") {
//     window.location.assign("login.html")
//   } else if(signuppassword !== signuprepeatpassword){
//     alert("password not match");

//   }else{
//     alert("please fill input");
//   }

// }


//fire base

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAw8VHs9Kt_BEI5xv2oCby0Elh79NjosEo",
  authDomain: "auth-fc41d.firebaseapp.com",
  projectId: "auth-fc41d",
  storageBucket: "auth-fc41d.appspot.com",
  messagingSenderId: "166758835349",
  appId: "1:166758835349:web:9a0f13cfac57400f07a79c"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//sign up function

const signup=()=>{
  let signupemail = document.getElementById("email").value;
  let signuppassword = document.getElementById("password").value;
  console.log(signupemail,signuppassword)
  //firebase code
  firebase.auth().createUserWithEmailAndPassword(signupemail, signuppassword)

  .then((result) => {
    // Signed up 
   window.location.assign("login.html")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    alert("re-type")
    alert("fill the inputs")
    // ..
  });
}

// log in fuction
const logIn =()=>{
  let signupemail = document.getElementById("email").value;
  let signuppassword = document.getElementById("password").value;

  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
     // Signed in 
   document.write("you are signed In")
   console.log(result)
   // ...
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    alert(error.code)
    alert(error.message)
    // ..
  });
}

// indext.js
function sign(){
  window.location.assign("signup.html")

}
function log(){
  window.location.assign("login.html")
  
}


