<?php

// Enable error reporting for debugging
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// // Database connection details
// $servername = "localhost"; // Change if your database is on a different server
// $username = "root";        // Default MySQL username in XAMPP
// $password = "";            // Default MySQL password in XAMPP (empty)
// $dbname = "inquiry_db";    // Your database name

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);

// // Check if connection is successful
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// // Check if form is submitted
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // Collect form data
//     $firstname = $_POST['first_name'];
//     $lastname = $_POST['last_name'];
//     $email = $_POST['email'];
//     $age = $_POST['age'];
//     $date = $_POST['date'];

//     // Insert query (Avoid using user input directly in real applications)
//     $sql = "INSERT INTO demo (firstname, lastname, email, age, startdate) 
//             VALUES ('$firstname', '$lastname', '$email', '$age', '$date')";

//     // Execute query and check for success
//     if ($conn->query($sql) === TRUE) {
//         echo "demo submitted successfully!";
//     } else {
//         echo "Error: " . $sql . "<br>" . $conn->error;
//     }
// }

// // Close connection
// $conn->close();
// working code ........




// testing the codde



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
    $age = $_POST['age'];
    $date = $_POST['date'];

    // Insert query (Avoid using user input directly in real applications)
    $sql = "INSERT INTO demo (firstname, lastname, email, age, startdate) 
            VALUES ('$firstname', '$lastname', '$email', '$age', '$date')";

    // Execute query and check for success
    if ($conn->query($sql) === TRUE) {
        // Redirect to thank you page
        // header('Location: thankyou.html');
        // exit()
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();



?>
