<?php
session_start();
header('Content-Type: text/plain');

// Debugging: Check if session variables are available
if (!isset($_SESSION["user_id"])) {
    echo "logged_in=false (Session not found)";
    exit;
}

// ✅ Session is found, proceed with database queries
$login_conn = new mysqli("localhost", "root", "", "gym_register");
$membership_conn = new mysqli("localhost", "root", "", "gym_membership");

if ($login_conn->connect_error || $membership_conn->connect_error) {
    echo "Error: Database connection failed";
    exit;
}

$user_id = $_SESSION["user_id"];
$username = $_SESSION["username"];


// ✅ Output the response
$response = "logged_in=true\n";
$response .= "username=$username\n";

echo $response;

// Close connections
$login_conn->close();
$membership_conn->close();



?>
