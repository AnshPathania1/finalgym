// // Sample data to simulate login (this will later be replaced with actual database retrieval)
// let loggedInUser = "Ansh"; // Change this to a username to simulate login (e.g., 'Ansh')
// let membershipStatus = "No plan activated"; // Change this to simulate different plans (e.g., 'Monthly Plan')

// Elements
const accountIcon = document.getElementById('account_icon');
const accountDropdown = document.getElementById('account_dropdown');
// const dropdownRow1 = document.getElementById('dropdown_row_1');
// const dropdownRow2 = document.getElementById('dropdown_row_2');
// const logoutButton = document.getElementById('logout_button');

// Toggle dropdown visibility
accountIcon.addEventListener('click', () => {
    accountDropdown.style.display =
        accountDropdown.style.display === 'none' || accountDropdown.style.display === '' ? 'block' : 'none';
});

// // Display username and membership status
// function updateDropdown() {
//     if (loggedInUser) {
//         dropdownRow1.innerText = `Hi ${loggedInUser}`;
//         dropdownRow2.innerText = membershipStatus;
//         logoutButton.classList.remove('hidden');
//     } else {
//         dropdownRow1.innerText = "Kindly login";
//         dropdownRow2.innerText = "No plan activated";
//         logoutButton.classList.add('hidden');
//     }
// }

// // Simulate login (for testing purposes)
// function login(user) {
//     loggedInUser = user;
//     membershipStatus = "Monthly Plan"; // Example status, can be dynamic
//     updateDropdown();
// }

// // Logout functionality
// logoutButton.addEventListener('click', () => {
//     loggedInUser = null;
//     membershipStatus = "No plan activated";
//     updateDropdown();
//     accountDropdown.style.display = 'none'; // Hide dropdown after logout
// });

// // Initial call to set up the dropdown display
// updateDropdown();

// // Optional: Hide dropdown when clicking outside
// window.addEventListener('click', (e) => {
//     if (!accountIcon.contains(e.target) && !accountDropdown.contains(e.target)) {
//         accountDropdown.style.display = 'none';
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    fetchUserDetails();
});

function fetchUserDetails() {
    fetch("php_folder/get_user.php")
        .then(response => response.text()) // Parse as plain text
        .then(text => {
            const lines = text.split("\n");
            let data = {};
            lines.forEach(line => {
                let [key, value] = line.split("=");
                if (key && value !== undefined) {
                    data[key.trim()] = value.trim();
                }
            });

            if (data.logged_in === "true") {
                document.getElementById("dropdown_row_1").innerText = data.username;
                document.getElementById("dropdown_row_2").innerText = data.membership;
                document.getElementById("dropdown_row_3").innerText = `Start Date: ${data.start_date}`;
                document.getElementById("dropdown_row_4").innerText = `End Date: ${data.end_date}`;

                document.getElementById("dropdown_row_3").classList.remove("hidden");
                document.getElementById("dropdown_row_4").classList.remove("hidden");
                document.getElementById("logout_button").classList.remove("hidden");

                document.getElementById("logout_button").addEventListener("click", logoutUser);
            } else {
                document.getElementById("dropdown_row_1").innerText = "Kindly login";
                document.getElementById("dropdown_row_2").innerText = "No plan activated";
                document.getElementById("dropdown_row_3").classList.add("hidden");
                document.getElementById("dropdown_row_4").classList.add("hidden");
                document.getElementById("logout_button").classList.add("hidden");
            }
        })
        .catch(error => console.error("Error fetching user details:", error));
}

function logoutUser() {
    fetch("php_folder/logout.php")
        .then(() => {
            location.reload();
        })
        .catch(error => console.error("Error logging out:", error));
}
