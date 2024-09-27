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


// const inquiryForm = document.getElementById('form_inquiry');
// const FirstName = document.getElementById("first_name");
// const LastName = document.getElementById("last_name");
// const email = document.getElementById("email");
// const age = document.getElementById("age");
// const inquiry_box = document.getElementById("inquiry_box");
// const Submit= document.getElementById("btn_inquiry");

// inquiryForm.addEventListener('submit', (event)=> {
//     event.preventDefault(); 
//     ValidText();
// });

// const ValidText = ()=>{
//     const FirstNameValue = FirstName.value.trim();
//     const LastNameValue = LastName.value.trim();
//     const emailValue = email.value.trim();
//     const ageValue = age.value.trim();
//     const inquiry_boxValue = inquiry_box.value.trim();
//     if(FirstNameValue === ""){
//       alert("First Name is required");
//     }else if(LastNameValue ===''){
//         alert("Last Name is required");
//     }else if(ageValue === ""){
//         alert("age is required");
//     } else if (inquiry_boxValue === ""){
//         alert("give inquiry content");
//     }else if (emailValue === "") {
//         alert("email is required");
//     } else if (!isValidEmail(emailValue)) {
//         alert("Invalid email address");
//     }
//     else{
//         alert("submitted");
//         FirstNameValue = "";
//         LastNameValue = "";
//         ageValue = "";
//         inquiry_boxValue = "";
//         emailValue = "";
//         document.getElementById("FirstName").value = "";
//         document.getElementById("LastName").value = "";
//         document.getElementById("age").value = "";
//         document.getElementById("inquiry_box").value= "";
//         document.getElementById("email").value = "";
//     }
    
// }

// function isValidEmail(e) {
//     var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(e);
//   }
// Show error message in inquiry form

const form = document.getElementById("inquiry_form");
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get input values
    const FirstNameValue = document.getElementById("FirstName").value;
    const LastNameValue = document.getElementById("LastName").value;
    const ageValue = document.getElementById("age").value;
    const inquiry_boxValue = document.getElementById("inquiry_box").value;
    const emailValue = document.getElementById("email").value;

    if (FirstNameValue === "") {
        alert("First Name is required");
    } else if (LastNameValue === '') {
        alert("Last Name is required");
    } else if (ageValue === "") {
        alert("age is required");
    } else if (inquiry_boxValue === "") {
        alert("give inquiry content");
    } else if (emailValue === "") {
        alert("email is required");
    } else if (!isValidEmail(emailValue)) {
        alert("Invalid email address");
    } else {
        // Other validation checks or form submission logic here
        alert("submitted");

        // Clear form data
        // FirstNameValue = "";
        // LastNameValue = "";
        // ageValue = "";
        // inquiry_boxValue = "";
        // emailValue = "";

        // Reset input fields
        // document.getElementById("FirstName").value = "";
        // document.getElementById("LastName").value = "";
        // document.getElementById("age").value = "";
        // document.getElementById("inquiry_box").value = "";
        // document.getElementById("email").value = "";

    
    }
});

function isValidEmail(email) {
    // Implement your email validation logic here
    // For example, you can use a regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}