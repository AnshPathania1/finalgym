<?php
$conn = new mysqli("localhost", "root", "", "gym_register");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['userkey'];
    $password = $_POST['passkey'];
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    //  Check if username already exists
$checkUserQuery = "SELECT * FROM signup WHERE username = '$username'";
$result = $conn->query($checkUserQuery);

if ($result->num_rows > 0) {
    echo "exists"; // Username already taken
}else{
    $sql = "INSERT INTO signup (username, password_) VALUES ('$username', '$hashed_password')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}}


$conn->close();
?>
