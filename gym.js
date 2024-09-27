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
    ValidInquiry();
});

// Validation function
const ValidInquiry = () => {
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
// Clear form fields function
function clearFormFields() {
    FirstName.value = "";
    LastName.value = "";
    email.value = "";
    age.value = "";
    inquiry_box.value = "";
}

//show error in demo field 

const demoform = document.getElementById('form_demo');
const FirstNameDemo = document.getElementById("first_name_demo");
const LastNameDemo = document.getElementById("last_name_demo");
const emailDemo = document.getElementById("email_demo");
const ageDemo = document.getElementById("age_demo");
const  date = document.getElementById("date");
demoform.addEventListener('submit', (event) => {
    event.preventDefault(); 
    ValidDemo();
});

const ValidDemo = () => {
    const FirstNameValue = FirstNameDemo.value.trim();
    const LastNameValue = LastNameDemo.value.trim();
    const emailValue = emailDemo.value.trim();
    const ageValue = ageDemo.value.trim();
    const datevalue = date.value.trim();

    const today = new Date();
    const enteredDate = new Date(datevalue);


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
    }else if (datevalue === "") {
        alert(" date is required");
    }else if (enteredDate < today) {
        alert("Please enter a future date.");
    }else if (enteredDate > new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) {
        alert("Date cannot be more than 7 days ahead.");
    } 
    else {
        alert("Submitted");
        clearFormDemo(); // Clear form after successful submission
    }
}

// Clear form fields function
function clearFormDemo() {
    FirstNameDemo.value = "";
    LastNameDemo.value = "";
    emailDemo.value = "";
    ageDemo.value = "";
    date.value = "";
}


// Email validation function
function isValidEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}

