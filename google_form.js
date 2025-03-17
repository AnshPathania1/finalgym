// document.addEventListener('DOMContentLoaded', (event) => {

// var membership_form = document.getElementById('membership-form');
//
// var address = document.getElementById('address').value.trim();
// 

// 
// var membership_type = document.getElementById('membership').value.trim();
// var start_date = document.getElementById('startdate').value.trim();
// var end_date = document.getElementById('enddate').value.trim();
// var transcation_id = document.getElementById('transcation-id').value.trim();
// membership_form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     if (name === "" ) {
//         alert("Name is required");
//         return false;
//     }else if(name === 0 ||1||2||3|4||5||6||7||8||9){
//         alert("Name cannot contain numbers");
//         return false
//     } else if (!isValidEmail(email)) {
//         alert("Invalid email address");
//         return false;
//     }else{
//         return true;
//     }

    
//             let formData = new FormData();
//             form.append('name', name);
//             form.append('address', address);
//             form.append('age', age);
//             from.append('email', email);
//             from.append('gender'.gender);
//             form.append('membership', membership_type);
//             from.append('startdate', start_date);
//             from.append('enddate', end_date);
//             from.append('transcation-id', transcation_id);


//             fetch("php_folder/membership.php", {
//                 method: 'POST',
//                 body: formData
//             })
//             .then(response => response.text())
//             .then(data => {
//                 console.log(data);
//                 if (data.status === 'success') {
//                     alert('Membership created successfully');
//                     // Clear the form
//                     membership_form.reset();
//                 } else {
//                     alert('Failed to create membership');
//                 }
//             })
//             .catch(error => {
//             console.error('Error:', error);
            
//         });

// });




// });




// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('membership-form').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form from redirecting
//         console.log('Form submitted');
//         var name = document.getElementById('name').value.trim();
//         var email  = document.getElementById('email').value.trim();
//         var age = document.getElementById('age').value.trim();
//         var startDate = document.getElementById('startdate').value.trim(); // Get start date
//         console.log(email);
//         if(!isValidEmail(email)){
//             alert('Email is invalid');
//             return false;
//         } 
//         if (/\d/.test(name)) { // Check if name contains a number
//             alert("Name cannot contain numbers");
//             return false;
//         }
//         if (age < 18 || age > 70) { // Ensure age is strictly between 18 and 70
//             alert("Age must be between 18 to 70");
//             return false;
//         }
//          // Validate start date (must not be in the past or a future date)
//          let today = new Date();
//          console.log("today",today);
//          today.setHours(0, 0, 0, 0); // Remove time part for accurate comparison
//          let selectedDate = new Date(startDate);
//          console.log("selectedDate",selectedDate);
//          selectedDate.setHours(0, 0, 0, 0); // Remove time part for accurate comparison
 
//          if (selectedDate < today || selectedDate > today) {
//              alert("Start date must be today's date.");
//              return false;
//          }
//                     // Get form data
//         let formData = new FormData(this);

//         // Send AJAX request
//         fetch('php_folder/googleform.php', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.text())
//         .then(data => {
//             if (data.trim() === 'success') {
//                 alert(' Membership created successfully');
//                 this.reset(); // Clear form on success
//             } else {
//                 alert(' Failed to create membership: ' + data);
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert(' Error submitting the form. Please try again.');
//         });
//          // Email validation function
//          function isValidEmail(e) {
//             var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return reg.test(e);
//         }
//     }
        
//     );
    
   

// });




document.addEventListener('DOMContentLoaded', () => {
    const membershipForm = document.getElementById('membership-form');
    const membershipType = document.getElementById('membership');
    const startDateInput = document.getElementById('startdate');
    const endDateInput = document.getElementById('enddate');

    // Function to format date as YYYY-MM-DD (for input field)
    function formatDateForInput(date) {
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
        let day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`; // Correct format for input fields
    }

    // Function to calculate end date based on membership type
    function calculateEndDate() {
        let startDateValue = startDateInput.value;
        if (!startDateValue) return; // If start date is not selected, do nothing

        let startDate = new Date(startDateValue);

        if (membershipType.value === "monthly") {
            startDate.setMonth(startDate.getMonth() + 1);
        } else if (membershipType.value === "quarterly") {
            startDate.setMonth(startDate.getMonth() + 3);
        } else if (membershipType.value === "yearly") {
            startDate.setFullYear(startDate.getFullYear() + 1);
        }

        endDateInput.value = formatDateForInput(startDate); // Store in YYYY-MM-DD format
    }

    // Attach event listeners to update end date
    membershipType.addEventListener('change', calculateEndDate);
    startDateInput.addEventListener('change', calculateEndDate);

    // Form submission
    membershipForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from redirecting
        console.log('Form submitted');

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var age = document.getElementById('age').value.trim();
        var startDate = startDateInput.value;
        var endDate = endDateInput.value;

        console.log("Email entered:", email);
        console.log("Start Date entered:", startDate);
        console.log("End Date calculated:", endDate);
       


        if (!isValidEmail(email)) {
            alert('Email is invalid');
            return false;
        } 
        
        if (/\d/.test(name)) { // Check if name contains a number
            alert("Name cannot contain numbers");
            return false;
        }

        if (age < 18 || age > 70) { // Ensure age is strictly between 18 and 70
            alert("Age must be between 18 to 70");
            return false;
        }

        // Validate start date (must not be in the past or future)
        let today = new Date();
        today.setHours(0, 0, 0, 0); // ✅ Remove time for accurate comparison
        
        let selectedDate = new Date(startDateInput.value);
        selectedDate.setHours(0, 0, 0, 0); // ✅ Remove time for accurate comparison
        
        console.log("Today:", today.toISOString().split("T")[0]); // ✅ Check formatted today date
        console.log("Selected Date:", selectedDate.toISOString().split("T")[0]); // ✅ Check formatted selected date
        
        if (selectedDate.getTime() !== today.getTime()) {
            alert("Start date must be today's date.");
            return false;
        }
        
        
        // Ensure end date is correctly calculated
        if (!endDate) {
            alert("End date could not be calculated. Please select membership type and start date.");
            return false;
        }

        // Get form data
        let formData = new FormData(this);

        // Send AJAX request
        fetch('php_folder/googleform.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.trim() === 'success') {
                alert('Membership created successfully');
                this.reset(); // Clear form on success
            } else {
                alert('Failed to create membership: ' + data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting the form. Please try again.');
        });

        // Email validation function
        function isValidEmail(e) {
            var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return reg.test(e);
        }
    });
});


