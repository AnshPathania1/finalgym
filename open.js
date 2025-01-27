// Sample data to simulate login (this will later be replaced with actual database retrieval)
let loggedInUser = "Ansh"; // Change this to a username to simulate login (e.g., 'Ansh')
let membershipStatus = "No plan activated"; // Change this to simulate different plans (e.g., 'Monthly Plan')

// Elements
const accountIcon = document.getElementById('account_icon');
const accountDropdown = document.getElementById('account_dropdown');
const dropdownRow1 = document.getElementById('dropdown_row_1');
const dropdownRow2 = document.getElementById('dropdown_row_2');
const logoutButton = document.getElementById('logout_button');

// Toggle dropdown visibility
accountIcon.addEventListener('click', () => {
    accountDropdown.style.display =
        accountDropdown.style.display === 'none' || accountDropdown.style.display === '' ? 'block' : 'none';
});

// Display username and membership status
function updateDropdown() {
    if (loggedInUser) {
        dropdownRow1.innerText = `Hi ${loggedInUser}`;
        dropdownRow2.innerText = membershipStatus;
        logoutButton.classList.remove('hidden');
    } else {
        dropdownRow1.innerText = "Kindly login";
        dropdownRow2.innerText = "No plan activated";
        logoutButton.classList.add('hidden');
    }
}

// Simulate login (for testing purposes)
function login(user) {
    loggedInUser = user;
    membershipStatus = "Monthly Plan"; // Example status, can be dynamic
    updateDropdown();
}

// Logout functionality
logoutButton.addEventListener('click', () => {
    loggedInUser = null;
    membershipStatus = "No plan activated";
    updateDropdown();
    accountDropdown.style.display = 'none'; // Hide dropdown after logout
});

// Initial call to set up the dropdown display
updateDropdown();

// Optional: Hide dropdown when clicking outside
window.addEventListener('click', (e) => {
    if (!accountIcon.contains(e.target) && !accountDropdown.contains(e.target)) {
        accountDropdown.style.display = 'none';
    }
});
