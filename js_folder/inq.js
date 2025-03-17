const inquiryForm = document.getElementById("form_inquiry");
const FirstName = document.getElementById("firstname");
const LastName = document.getElementById("lastname");
const email = document.getElementById("Email");
const phone = document.getElementById("Phone");
const age = document.getElementById("Age");
const inquiry_box = document.getElementById("inquirybox");

inquiryForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    if (!ValidInquiry()) {
        return; // Stop submission if validation fails
    }
console.log("firstname value:", FirstName.value);
    let formData = new FormData(this);

    fetch("php_folder/inqury.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
            alert("Inquiry submitted successfully");
           this.reset(); // Reset the form
        } else {
            alert(data.trim()); // Show error response from PHP
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting the inquiry. Please try again.");
    });
});
// Validation function
const ValidInquiry = () => {
    const FirstNameValue = FirstName.value.trim().replace(/\s/g, ''); // Remove spaces
    const LastNameValue = LastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const ageValue = age.value.trim();
    const inquiry_boxValue = inquiry_box.value.trim();

    console.log("First Name Entered:", FirstNameValue); // Debugging log

    if (FirstNameValue === "") {
        alert("First Name is required");
        return false;
    } else if (/[^a-zA-Z]/.test(FirstNameValue)) { // Allow only letters (fix)
        alert("First Name cannot contain numbers or special characters");
        return false;
    }

    if (LastNameValue === "") {
        alert("Last Name is required");
        return false;
    } else if (/[^a-zA-Z]/.test(LastNameValue)) { // Allow only letters
        alert("Last Name cannot contain numbers or special characters");
        return false;
    }

    if (emailValue === "") {
        alert("Email is required");
        return false;
    } else if (!isValidEmail(emailValue)) {
        alert("Invalid email address");
        return false;
    }

    if (phoneValue === "") {
        alert("Mobile number is required");
        return false;
    } else if (!/^\d{10}$/.test(phoneValue)) { // Validate 10-digit phone number
        alert("Enter a valid 10-digit mobile number");
        return false;
    }

    if (ageValue === "") {
        alert("Age is required");
        return false;
    } else if (!/^\d+$/.test(ageValue) || ageValue < 18 || ageValue > 70) { 
        alert("Age must be a number between 18 and 70");
        return false;
    }

    if (inquiry_boxValue === "") {
        alert("Inquiry content is required");
        return false;
    }

    return true;
};