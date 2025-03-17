
// show error in demo field 

// const demoform = document.getElementById('form_demo');
// const FirstNameDemo = document.getElementById("first_name_demo");
// const LastNameDemo = document.getElementById("last_name_demo");
// const emailDemo = document.getElementById("email_demo");
// const ageDemo = document.getElementById("age_demo");
// const  date = document.getElementById("date");

// demoform.addEventListener("submit", (event) => {
//     if (!ValidDemo()) {
//         event.preventDefault(); // Stop the default form submission if validation fails
//         var formData = new FormData(this);
//         console.log(formData);
//     } else {
//         // alert("Form submitted successfully!"); // ✅ Show alert before submission
//         setTimeout(() => {
//             clearFormDemo(); // Clear form after successful submission
//         }, 1000); //  Delay clearing the form to ensure data is sent
//     }
// });

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
//         return false;
//     }else if(FirstNameValue === 0 ||1||2||3|4||5||6||7||8||9){
//         alert("Name cannot contain numbers");
//         return false
//     }
//      else if (LastNameValue === '') {
//         alert("Last Name is required");
//         return false;
//     } else if(LastNameValue === 0 ||1||2||3|4||5||6||7||8||9){
//         alert("Name cannot contain numbers");
//         return false
//     }
//     else if (emailValue === "") {
//         alert("Email is required");
//         return false;
//     } else if (!isValidEmail(emailValue)) {
//         alert("Invalid email address");
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
    
// } else if (datevalue === "") {
//         alert("Date is required");
//         return false;
//     } else if (enteredDate < today) {
//         alert("Please enter a future date.");
//         return false;
//     } else if (enteredDate > new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) {
//         alert("Date cannot be more than 7 days ahead.");
//         return false;
//     } else {
        
//         return true;
//     }


   
// };





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



// // Clear form fields function
// function clearFormDemo() {
//     FirstNameDemo.value = "";
//     LastNameDemo.value = "";
//     emailDemo.value = "";
//     ageDemo.value = "";
//     date.value = "";
// }
// // Email validation function
// function isValidEmail(e) {
//     var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(e);
// }







const demoform = document.getElementById('form_demo');
const FirstNameDemo = document.getElementById("first_name_demo");
const LastNameDemo = document.getElementById("last_name_demo");
const emailDemo = document.getElementById("email_demo");
const ageDemo = document.getElementById("age_demo");
const dateInput = document.getElementById("date");

demoform.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    
    if (!ValidDemo()) {
        return; // Stop if validation fails
    }
    
    let formData = new FormData(this);
    
    fetch('php_folder/demo.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
            alert("Submitted successfully");
            this.reset(); // Reset the form
        } else {
            alert(data.trim()); // Show other error messages if any
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the form. Please try again.');
    });
});

const ValidDemo = () => {
    const FirstNameValue = FirstNameDemo.value.trim();
    const LastNameValue = LastNameDemo.value.trim();
    const emailValue = emailDemo.value.trim();
    const ageValue = ageDemo.value.trim();
    const dateValue = dateInput.value.trim();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const enteredDate = new Date(dateValue);

    if (!FirstNameValue) {
        alert("First Name is required");
        return false;
    } else if (/\d/.test(FirstNameValue)) {
        alert("First Name cannot contain numbers");
        return false;
    }
    
    if (!LastNameValue) {
        alert("Last Name is required");
        return false;
    } else if (/\d/.test(LastNameValue)) {
        alert("Last Name cannot contain numbers");
        return false;
    }

    if (!emailValue) {
        alert("Email is required");
        return false;
    } else if (!isValidEmail(emailValue)) {
        alert("Invalid email address");
        return false;
    }
    
    if (!ageValue) {
        alert("Age is required");
        return false;
    } else if (!/^[0-9]+$/.test(ageValue) || ageValue < 18 || ageValue > 70) {
        alert("Age must be a number between 18 and 70");
        return false;
    }

    if (!dateValue) {
        alert("Date is required");
        return false;
    } else if (enteredDate < today) {
        alert("Please enter a future date.");
        return false;
    } else if (enteredDate > new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) {
        alert("Date cannot be more than 7 days ahead.");
        return false;
    }
    
    return true;
};

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
