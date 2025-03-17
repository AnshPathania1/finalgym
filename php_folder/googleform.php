<?php
// Database connection details
// $servername = "localhost"; // Change if your database is on a different server
// $username = "root";        // Default MySQL username in XAMPP
// $password = "";            // Default MySQL password in XAMPP (empty)
// $dbname = "gym_membership";    // Your database name

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);

// // Check if connection is successful
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// if(isset($_SERVER['REQUEST_METHOD']) == "POST"){
//     // Collect form data
//     $name = $_POST['name'];
//     $address = $_POST['address'];
//     $age = $_POST['age'];
//     $email = $_POST['email'];
//     $gender = $_POST['gender'];
//     $membership = $_POST['membership'];
//     $startdate = $_POST['startdate'];
//     $enddate = $_POST['enddate'];
//     $transaction_id = $_POST['transaction_id'];

//     // Insert query (Avoid using user input directly in real applications)
//     $sql = "INSERT INTO gym_member (name, address, age,email,gender,membership,startdate,enddate,transcation_id	) VALUES ('$name', '$address', '$age', '$email', '$gender', '$membership','$startdate','$enddate', '$transaction_id')";
//     // Execute query and check for success
//     if ($conn->query($sql) === TRUE) {
//         // Redirect to thank you page
//        echo "success";
//         exit();
//     } else {
//         echo "Error: " . $sql . "<br>" . $conn->error;
//     }
// }
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gym_membership";

// ✅ Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed");
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // ✅ Collect form data
    $name = $_POST['name'];
    $address = $_POST['address'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $membership = $_POST['membership'];
    $startdate = $_POST['startdate'];
    $enddate = $_POST['enddate'];
    $transaction_id = $_POST['transaction_id'];

    // ✅ Insert query
    $sql = "INSERT INTO gym_member (name, address, age, email, gender, membership, startdate, enddate, transcation_id)
            VALUES ('$name', '$address', '$age', '$email', '$gender', '$membership', '$startdate', '$enddate', '$transaction_id')";

    if ($conn->query($sql) === TRUE) {
        echo "success";  // ✅ Plain text response (No JSON, No redirect)
    } else {
        echo "Database error: " . $conn->error;
    }
}

$conn->close();


?>
