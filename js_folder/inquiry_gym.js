
 // form inquire to demo page
const x = document.getElementById("form_inquiry");
const y = document.getElementById("form_demo");

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

// const inquiryForm = document.getElementById("form_inquiry");
// const FirstName = document.getElementById("first_name");
// const LastName = document.getElementById("last_name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const age = document.getElementById("age");
// const inquiry_box = document.getElementById("inquiry_box");
// const Submit = document.getElementById("btn_inquiry");

// // });
// inquiryForm.addEventListener("submit", (event) => {
//     if (!ValidInquiry()) {
//         event.preventDefault(); // Stop the default form submission if validation fails
//     } else {
//         // alert("Form submitted successfully!"); // ✅ Show alert before submission
//         setTimeout(() => {
//             clearFormFields(); // Clear form after successful submission
//         }, 1000); //  Delay clearing the form to ensure data is sent
//     }
// });

// // Validation functions
// const ValidInquiry = () => {
//     const FirstNameValue = FirstName.value.trim();
//     const LastNameValue = LastName.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//     const ageValue = age.value.trim();
//     const inquiry_boxValue = inquiry_box.value.trim();

//     if (FirstNameValue === "") {
//         alert("First Name is required");
//         return false;
//     }
//     else if (LastNameValue === '') {
//         alert("Last Name is required");
//         return false;
//     } else if (emailValue === "") {
//         alert("Email is required");
//         return false;
//     } else if (!isValidEmail(emailValue)) {
//         alert("Invalid email address");
//         return false;
//     } else if (phoneValue === "") {
//         alert("Mobile number is required");
//         return false;
//     } else if (ageValue === "") {
//         alert("Age is required");
//         return false;
//     } else if (ageValue <= 18 || ageValue >= 70) {
//         alert("Invalid age");
//         return false;
//     }else if (ageValue === "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z" || "A"|| "B"|| "C"|| "D"|| "E"|| "F"|| "G"|| "H"|| "I"|| "J"|| "K"|| "L"|| "M"|| "N"|| "O"|| "P"|| "Q"|| "R"|| "S"|| "T"|| "U"|| "V"|| "W"|| "X"|| "Y"|| "Z"){ 
//         alert("Age cannot be in letters");
//         return false;
    
// } else if (inquiry_boxValue === "") {
//         alert("Give inquiry content");
//         return false;
//     } else {
//         return true;
//     }
// }

// // Clear form fields function
// function clearFormFields() {
//     FirstName.value = "";
//     LastName.value = "";
//     email.value = "";
//     phone.value = "";
//     age.value = "";
//     inquiry_box.value = "";
// }


// // Email validation function
// function isValidEmail(e) {
//     var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(e);
// }

  



// const inquiryForm = document.getElementById("form_inquiry");
// const FirstName = document.getElementById("first_name");
// const LastName = document.getElementById("last_name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const age = document.getElementById("age");
// const inquiry_box = document.getElementById("inquiry_box");

// inquiryForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     if (!ValidInquiry()) {
//         return; // Stop if validation fails
//     }

//     let formData = new FormData(this);

//     fetch("php_folder/inqury.php", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         if (data.trim() === "success") {
//             alert("Inquiry submitted successfully");
//             this.reset(); // Reset the form
//         } else {
//             alert(data.trim()); // Show other responses
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("Error submitting the inquiry. Please try again.");
//     });
// });

// // Validation function
// const ValidInquiry = () => {
//     const FirstNameValue = FirstName.value.trim();
//     const LastNameValue = LastName.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//     const ageValue = age.value.trim();
//     const inquiry_boxValue = inquiry_box.value.trim();

//     if (FirstNameValue === "") {
//         alert("First Name is required");
//         return false;
//     } else if (/\d/.test(FirstNameValue)) { // Checks if name contains numbers
//         alert("First Name cannot contain numbers");
//         return false;
//     }

//     if (LastNameValue === "") {
//         alert("Last Name is required");
//         return false;
//     } else if (/\d/.test(LastNameValue)) {
//         alert("Last Name cannot contain numbers");
//         return false;
//     }

//     if (emailValue === "") {
//         alert("Email is required");
//         return false;
//     } else if (!isValidEmail(emailValue)) {
//         alert("Invalid email address");
//         return false;
//     }

//     if (phoneValue === "") {
//         alert("Mobile number is required");
//         return false;
//     } else if (!/^\d{10}$/.test(phoneValue)) { // Validates 10-digit phone number
//         alert("Enter a valid 10-digit mobile number");
//         return false;
//     }

//     if (ageValue === "") {
//         alert("Age is required");
//         return false;
//     } else if (!/^\d+$/.test(ageValue) || ageValue < 18 || ageValue > 70) { // Ensures age is numeric and in range
//         alert("Age must be a number between 18 and 70");
//         return false;
//     }

//     if (inquiry_boxValue === "") {
//         alert("Inquiry content is required");
//         return false;
//     }

//     return true;
// };

// // Email validation function
// function isValidEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }
