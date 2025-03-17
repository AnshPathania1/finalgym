<?php
session_start();  // ✅ Start se


$conn = new mysqli("localhost", "root", "", "gym_register");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user input
$username = $_POST['userkey'];
$password = $_POST['passkey'];

// Fetch user from database
$query = "SELECT ID, username, password_ FROM signup WHERE username = '$username'";
$result = $conn->query($query);

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // Check if password matches
    if (password_verify($password, $user['password_'])) {  // Direct comparison (not secure, but as per your request)
        $_SESSION['user_id'] = $user['ID'];   // Store user ID in session
        $_SESSION['username'] = $user['username']; // Store username in session
        echo "success";  // Login successful
    } else {
        echo "wrong";  // Incorrect password
    }
} else {
    echo "not_found";  // Username not found
}

$conn->close();

?>

