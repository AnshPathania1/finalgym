<?php
session_start();
if (isset($_SESSION['username'])) {
    echo $_SESSION['username']; // Show logged-in username
} else {
    echo "no_user"; // No user logged in
}
?>
