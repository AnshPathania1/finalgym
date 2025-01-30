
document.getElementById('login_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    console.log('Form submitted loginnnn');

    const LoginForm = document.getElementById("login_form");
    let formData = new FormData();
    formData.append("userkey", LoginForm.userkey.value);
    formData.append("passkey", LoginForm.passkey.value);
    
    // Debugging log to print form data
    console.log("Userkey:", LoginForm.userkey.value);
    console.log("Passkey:", LoginForm.passkey.value);
    
    fetch("php_folder/login.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response:", data); // Debugging log for response
        data = data.trim(); // Trim the response text

        if (data === "success") {
            alert("Login successful!");
            loadUser(); // Navbar pe name update hoga
            document.getElementById("signup").style.display = "none"; // Close modal
        } else if (data === "wrong") {
            alert("Incorrect password. Try again.");
        } else {
            alert("Username not found. Please register.");
        }
    })
    .catch(error => console.error("Error:", error));

    this.reset(); // Clear form
});
