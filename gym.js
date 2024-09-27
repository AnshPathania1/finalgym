 // form inquire to demo page
var x = document.getElementById("form_inquiry");
var y = document.getElementById("form_demo");

function demo() {
    x.style.opacity = 0; // Hide inquiry form
    y.style.opacity = 1; // Show demo form
    y.style.zIndex = 0;
}
function inquiry(){
    x.style.opacity = 1; // Hide inquiry form
    y.style.opacity = 0; // Show demo form
    y.style.zIndex = -1;
}

//show the error message in inquiy

// Selecting form and input elements
const inquiryForm = document.getElementById('form_inquiry');
const FirstName = document.getElementById("first_name");
const LastName = document.getElementById("last_name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const inquiry_box = document.getElementById("inquiry_box");
const Submit = document.getElementById("btn_inquiry");

// Adding event listener to form submission
inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    ValidText();
});

// Validation function
const ValidText = () => {
    const FirstNameValue = FirstName.value.trim();
    const LastNameValue = LastName.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const inquiry_boxValue = inquiry_box.value.trim();

    if (FirstNameValue === "") {
        alert("First Name is required");
    } else if (LastNameValue === '') {
        alert("Last Name is required");
    }else if (emailValue === "") {
        alert("Email is required");
    } else if (!isValidEmail(emailValue)) {
        alert("Invalid email address");
    }else if (ageValue === "") {
        alert("Age is required");
    }else if(ageValue<=18 || ageValue >=70){
        alert("invalid age ");
    } 
    else if (inquiry_boxValue === "") {
        alert("Give inquiry content");
    } else {
        alert("Submitted");
        clearFormFields(); // Clear form after successful submission
    }
}

// Email validation function
function isValidEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}

// Clear form fields function
function clearFormFields() {
    FirstName.value = "";
    LastName.value = "";
    email.value = "";
    age.value = "";
    inquiry_box.value = "";
}
