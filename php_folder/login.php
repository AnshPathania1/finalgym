<?php
session_start();
$conn = new mysqli("localhost", "root", "", "gym_register");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user input
$username = $_POST['userkey'];
$password = $_POST['passkey'];

// Fetch user from DB
$query = "SELECT * FROM signup WHERE username = '$username'";
$result = $conn->query($query);

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password_'])) {
        $_SESSION['username'] = $username;
        echo "success"; // Login successful
    } else {
        echo "wrong"; // Incorrect password
    }
} else {
    echo "not_found"; // Username not found
}

// $conn->close();


// session_start();
// $conn = new mysqli("localhost", "root", "", "gym_register");

// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// // Debugging: Print contents of $_POST array
// echo "<pre>";
// print_r($_POST);
// echo "</pre>";

// // Check if keys are set
// if (!isset($_POST['userkey'])) {
//     die("Username key is not set");
// }

// if (!isset($_POST['passkey'])) {
//     die("Password key is not set");
// }

// // Get user input
// $username = $_POST['userkey'];
// $password = $_POST['passkey'];

// // Fetch user from DB
// $query = "SELECT * FROM signup WHERE username = '$username'";
// $result = $conn->query($query);

// if ($result === false) {
//     // If query failed, output error message
//     die("Query failed: " . $conn->error);
// }

// if ($result->num_rows === 1) {
//     $user = $result->fetch_assoc();
    
//     // Debugging: Print the fetched user's password hash
//     echo "<pre>";
//     print_r($user);
//     echo "</pre>";

//     if (password_verify($password, $user['password_'])) {
//         $_SESSION['username'] = $username;
//         echo "success"; // Login successful
//     } else {
//         echo "wrong"; // Incorrect password
//     }
// } else {
//     echo "not_found"; // Username not found
// }

$conn->close();



?>


