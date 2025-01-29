
// show error in demo field 

const demoform = document.getElementById('form_demo');
const FirstNameDemo = document.getElementById("first_name_demo");
const LastNameDemo = document.getElementById("last_name_demo");
const emailDemo = document.getElementById("email_demo");
const ageDemo = document.getElementById("age_demo");
const  date = document.getElementById("date");

demoform.addEventListener("submit", (event) => {
    if (!ValidDemo()) {
        event.preventDefault(); // Stop the default form submission if validation fails
    } else {
        alert("Form submitted successfully!"); // ✅ Show alert before submission
        setTimeout(() => {
            clearFormDemo(); // Clear form after successful submission
        }, 1000); //  Delay clearing the form to ensure data is sent
    }
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
        return false;
    } else if (LastNameValue === '') {
        alert("Last Name is required");
        return false;
    } else if (emailValue === "") {
        alert("Email is required");
        return false;
    } else if (!isValidEmail(emailValue)) {
        alert("Invalid email address");
        return false;
    } else if (ageValue === "") {
        alert("Age is required");
        return false;
    } else if (ageValue <= 18 || ageValue >= 70) {
        alert("Invalid age");
        return false;
    } else if (datevalue === "") {
        alert("Date is required");
        return false;
    } else if (enteredDate < today) {
        alert("Please enter a future date.");
        return false;
    } else if (enteredDate > new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) {
        alert("Date cannot be more than 7 days ahead.");
        return false;
    } else {
        
        return true;
    }
};
// const ValidDemo = () => {
//     const FirstNameValue = FirstNameDemo.value.trim();
//     const LastNameValue = LastNameDemo.value.trim();
//     const emailValue = emailDemo.value.trim();
//     const ageValue = ageDemo.value.trim();
//     const datevalue = date.value.trim();

//     const today = new Date();
//     const enteredDate = new Date(datevalue);


//     if (FirstNameValue === "") {
//         alert("First Name is required");
//     } else if (LastNameValue === '') {
//         alert("Last Name is required");
//     }else if (emailValue === "") {
//         alert("Email is required");
//     } else if (!isValidEmail(emailValue)) {
//         alert("Invalid email address");
//     }else if (ageValue === "") {
//         alert("Age is required");
//     }else if(ageValue<=18 || ageValue >=70){
//         alert("invalid age ");
//     }else if (datevalue === "") {
//         alert(" date is required");
//     }else if (enteredDate < today) {
//         alert("Please enter a future date.");
//     }else if (enteredDate > new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) {
//         alert("Date cannot be more than 7 days ahead.");
//     } 
//     else {
//         alert("Submitted");
//         clearFormDemo(); // Clear form after successful submission
//     }
// }



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
