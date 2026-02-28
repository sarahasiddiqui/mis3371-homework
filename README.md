
<html>
<head>
    <title>Patient Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<script src="script.js"></script>

<h1>SS Medical Group</h1>

<p id="currentDate"></p>

<h2>Patient Registration Form</h2>

<form>

<p>First Name: <input type="text"></p>
<p>Middle Initial: <input type="text"></p>
<p>Last Name: <input type="text"></p>

<p>Date of Birth: <input type="date"></p>
<p>SSN: <input type="text"></p>

<p>Address Line 1: <input type="text"></p>
<p>Address Line 2: <input type="text"></p>

<p>City: <input type="text"></p>
<p>State:
<select>
<option>Texas</option>
<option>California</option>
<option>New York</option>
<option>Florida</option>
<option>Illinois</option>
</select>
</p>

<p>Zip: <input type="text"></p>
<p>Email: <input type="email"></p>
<p>Phone: <input type="text"></p>

<p>Describe Symptoms:</p>
<textarea rows="3" cols="50"></textarea>

<p>Past Illnesses:</p>
<input type="checkbox"> Chicken Pox
<input type="checkbox"> Measles
<input type="checkbox"> COVID-19
<input type="checkbox"> Tetanus
<input type="checkbox"> Smallpox

<p>Gender:</p>
<input type="radio" name="gender"> Male
<input type="radio" name="gender"> Female
<input type="radio" name="gender"> Other

<p>Vaccinated:</p>
<input type="radio" name="vax"> Yes
<input type="radio" name="vax"> No

<p>Insurance:</p>
<input type="radio" name="ins"> Yes
<input type="radio" name="ins"> No

<p>Health Rating (1–10):</p>
<input type="range" min="1" max="10">

<p>User ID: <input type="text"></p>
<p>Password: <input type="password"></p>
<p>Re-enter Password: <input type="password"></p>

<br>
<input type="reset" value="Clear and Start Over">
<input type="submit" value="Submit">

</form>

<hr>

<p>
SS Medical Group<br>
P.O. Box 58342<br>
Richmond, TX 77406<br>
United States
</p>

</body>
</html>
