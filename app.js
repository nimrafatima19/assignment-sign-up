const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = signupForm['first-name'].value.trim();
  const lastName = signupForm['last-name'].value.trim();
  const email = signupForm['email'].value.trim();
  const password = signupForm['password'].value.trim();
  const repeatPassword = signupForm['repeat-password'].value.trim();

  if (password !== repeatPassword) {
    errorMessage.textContent = "Passwords don't match";
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      // Redirect or perform other actions
    })
    .catch((error) => {
      // Handle signup errors
      errorMessage.textContent = error.message;
    });
});
