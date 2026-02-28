<!DOCTYPE html>
<html>
<head>
    <title>Patient Registration</title>
    <!-- Link to your external CSS file -->
    <link rel="stylesheet" type="text/css" href="style.css">
    <style>
        /* Inline overrides for things that need adjustment */
        input, select, textarea {
            padding: 5px;
            margin-left: 10px;
        }
        input[type="submit"], input[type="reset"] {
            margin-top: 10px;
            padding: 10px 20px;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>

<!-- Banner section -->
<div class="banner">
    <h1>SS Medical Group</h1>
</div>

<p id="currentDate"></p>

<h2 style="text-align:center;">Patient Registration Form</h2>

<form id="registrationForm" class="form-table">
    <p>First Name: <input type="text" name="firstName" required></p>
    <p>Middle Initial: <input type="text" name="middleInitial"></p>
    <p>Last Name: <input type="text" name="lastName" required></p>

    <p>Date of Birth: <input type="date" name="dob" required></p>
    <p>SSN: <input type="text" name="ssn" required></p>

    <p>Address Line 1: <input type="text" name="address1" required></p>
    <p>Address Line 2: <input type="text" name="address2"></p>

    <p>City: <input type="text" name="city" required></p>
    <p>State:
        <select name="state" required>
            <option value="">Select</option>
            <option>Texas</option>
            <option>California</option>
            <option>New York</option>
            <option>Florida</option>
            <option>Illinois</option>
        </select>
    </p>

    <p>Zip: <input type="text" name="zip" required></p>
    <p>Email: <input type="email" name="email" required></p>
    <p>Phone: <input type="text" name="phone" required></p>

    <p>Describe Symptoms:</p>
    <textarea name="symptoms" rows="3" cols="50"></textarea>

    <p>Past Illnesses:</p>
    <input type="checkbox" name="illness" value="Chicken Pox"> Chicken Pox
    <input type="checkbox" name="illness" value="Measles"> Measles
    <input type="checkbox" name="illness" value="COVID-19"> COVID-19
    <input type="checkbox" name="illness" value="Tetanus"> Tetanus
    <input type="checkbox" name="illness" value="Smallpox"> Smallpox

    <p>Gender:</p>
    <input type="radio" name="gender" value="Male"> Male
    <input type="radio" name="gender" value="Female"> Female
    <input type="radio" name="gender" value="Other"> Other

    <p>Vaccinated:</p>
    <input type="radio" name="vax" value="Yes"> Yes
    <input type="radio" name="vax" value="No"> No

    <p>Insurance:</p>
    <input type="radio" name="ins" value="Yes"> Yes
    <input type="radio" name="ins" value="No"> No

    <p>Health Rating (1–10):</p>
    <input type="range" min="1" max="10" name="healthRating">

    <p>User ID: <input type="text" name="userId" required></p>
    <p>Password: <input type="password" name="password" id="password" required></p>
    <p>Re-enter Password: <input type="password" name="confirmPassword" id="confirmPassword" required></p>
    <p class="error" id="errorMsg"></p>

    <br>
    <input type="reset" value="Clear and Start Over">
    <input type="submit" value="Submit">
</form>

<footer>
    <p>
        SS Medical Group<br>
        P.O. Box 58342<br>
        Richmond, TX 77406<br>
        United States
    </p>
</footer>

<script>
    // Show today's date
    const dateElement = document.getElementById('currentDate');
    const today = new Date();
    dateElement.textContent = "Today is: " + today.toDateString();

    // Password validation
    const form = document.getElementById('registrationForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if(password !== confirmPassword) {
            e.preventDefault();
            errorMsg.textContent = "Passwords do not match!";
        } else {
            errorMsg.textContent = "";
            alert("Form submitted successfully!");
        }
    });
</script>

</body>
</html>
