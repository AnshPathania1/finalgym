<?php

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection details
$servername = "localhost"; // Change if your database is on a different server
$username = "root";        // Default MySQL username in XAMPP
$password = "";            // Default MySQL password in XAMPP (empty)
$dbname = "inquiry_db";    // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if connection is successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $firstname = $_POST['first_name'];
    $lastname = $_POST['last_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $age = $_POST['age'];
    $inquirybox = $_POST['inquiry_box'];

    // Insert query (Avoid using user input directly in real applications)
    $sql = "INSERT INTO inquiry (firstname, lastname, email, phone, age, inquirybox) 
            VALUES ('$firstname', '$lastname', '$email', '$phone', '$age', '$inquirybox')";

    // Execute query and check for success
    if ($conn->query($sql) === TRUE) {
        // Redirect to thank you page
        // header('Location: thankyou.html');
        // exit();
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();



// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     if(isset($_POST['first_name'])){
//         $first_name = $_POST['first_name'];
//         echo "First Name: " . htmlspecialchars($first_name); // Prevents XSS
//     } else {
//         echo "Error: first_name is not set.";
//     }
// } else {
//     echo "Form was not submitted via POST.";
// }
?>
