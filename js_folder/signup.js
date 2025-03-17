 // form singup to login page
 const a = document.getElementById("signup_form");
 const b = document.getElementById("login_form");

function signup(){
    a.style.opacity = 1; 
    b.style.opacity = 0; 
    a.style.zIndex = 1;
    b.style.zIndex = -1;
    console.log("sigunp ");
}
function loginn(){
    b.style.opacity = 1; 
    a.style.opacity = 0; 
    b.style.zIndex = 1;
    a.style.zIndex = -1;
    console.log("login");
}
 

// opening  sinup window 
const c = document.getElementById("signup");
const nav_signup_btn = document.getElementById("nav_signup_btn");
nav_signup_btn.addEventListener("click",()=>{
    c.style.display = "block";
    c.style.zIndex = 1;
    c.style.opacity = 1;
})

// closing sinup window 

const reg_close = document.getElementById("register_close_btn");
const signup_window = document.getElementById("signup");
reg_close.addEventListener("click",()=>{
    signup_window.style.display = "none";
    
});
 

document.addEventListener('DOMContentLoaded', (event) => {
    const signupForm = document.getElementById('signup_form');
    const signup_password_input = document.getElementById("signup_password_input");
    const signup_conformpassword_input = document.getElementById("signup_conformpassword_input");

    signupForm.addEventListener('submit', (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // console.log('Form submitted');
        
        // Validate passwords
        if (!validPassword()) {
            alert('Check the password.');
            return false;
        }

        // Create FormData object
        let formData = new FormData();
        formData.append('userkey', signupForm.userkey.value);
        formData.append('passkey', signupForm.passkey.value);

        // // Debugging log to ensure formData is created correctly
        // console.log('FormData created:', formData);

        // Send the FormData using fetch
        fetch("php_folder/signup.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log('Response received:', data); // Debugging log for response
            if (data === "success") {
                alert("Signup successful! Now login.");
                loginn(); // Switch to login form
            } else if (data === "exists") {
                alert("Username already taken. Choose another.");
            } else {
                alert("Signup failed! Try again.");
            }
        })
        .catch(error => console.error("Error:", error));

        // Clear form
        signupForm.reset(); 
    });

    function validPassword() {
        return signup_password_input.value === signup_conformpassword_input.value;
    }
});

   


// const loginForm = document.getElementById('login_form');

// loginForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Clear the content of all input fields
//     document.getElementById('login_username_input').value = '';
//     document.getElementById('login_password_input').value = '';

//     // Optionally display a success message or perform other actions
//     alert('submitted successfully!'); // Example feedback
// });
