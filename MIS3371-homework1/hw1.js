// Show today's date
const dateElement = document.getElementById('currentDate');
const today = new Date();
dateElement.textContent = "Today is: " + today.toDateString();


// Form validation and submission
const form = document.getElementById('registrationForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default submission

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password match check
    if(password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match!";
        return; // Stop here if passwords don't match
    } 

    // Collect all form data
    const formData = new FormData(form);
    let summary = "Patient Registration Summary:\n\n";
    
    for (let [key, value] of formData.entries()) {
        // Handle checkboxes with same name
        console.log(value);
    }

    // Show summary in alert
    alert(summary + "\nForm submitted successfully!");
    window.location.href = "thankyou.html";
    
    //reset the form
    form.reset();
});
