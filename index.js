function validatePassword() {
  var passwordInput = document.getElementById('password');
  var password = passwordInput.value;

  var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); //check the Special Character
  var isValidLength = password.length >= 8; // check length of password

  if (!isValidLength || !hasSpecialChar) {
    alert('Password must be at least 8 characters long and contain at least one special character.');
    passwordInput.value = '';
  }
}

function validateDOB() {
  var dobInput = document.getElementById("dob");
  var dobError = document.getElementById("dobError");

  // Check if a date is selected
  if (dobInput.value) {
    var selectedDate = new Date(dobInput.value);
    var currentDate = new Date();

    // Check if the selected date is greater than or equal to the current date
    if (selectedDate >= currentDate) {
      dobError.textContent = "Please select a date of birth before today.";
      dobInput.value = "";
      return; 
    }

    // Calculate the maximum allowed date (170 years ago from the current date)
    var maxAllowedDate = new Date();
    maxAllowedDate.setFullYear(currentDate.getFullYear() - 170);

    // Validate if the selected date is within the allowed range
    if (selectedDate > maxAllowedDate) {
      dobError.textContent = ""; // Clear any previous error message
    } else {
      dobError.textContent = "Please select a valid date of birth (maximum age: 170 years).";
      dobInput.value = "";
    }
  } else {
    dobError.textContent = "Please enter your date of birth.";
  }
}


function storeFormData() {
  // Retrieve existing data
  let existingData = localStorage.getItem('userData');

  // Checks if there is existing data. If data exists, it is parsed from JSON format.
  existingData = existingData ? JSON.parse(existingData) : [];

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Check if both first name and last name are filled
  if (firstName && lastName) {

    // Check if the values contain only letters
    var nameRegex = /^[A-Za-z]+$/;
    if (nameRegex.test(firstName) && nameRegex.test(lastName)) {

      const email = document.getElementById('email').value;

      // Validate email using regex
      const emailRegex = /^[a-zA-Z]+[0-9]*@[a-zA-Z]+\.(com|org|in)$/;

      if (emailRegex.test(email)) {
        // Valid names and email
        const formData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: document.getElementById('password').value,
          DateOfBirth: document.getElementById('dob').value,
          gender: document.getElementById('option').value
        };

        // Concatenate existing data with new form data
        existingData = [...existingData, formData];

        // Store updated data back in localStorage
        localStorage.setItem('userData', JSON.stringify(existingData));

      } else {
        alert("Please enter a valid email address with the format string[number]@string.(com|org|in).");
      }
    } else {
      if (!nameRegex.test(firstName)) {
        alert("Please enter a valid first name (only letters allowed).");
      }
      if (!nameRegex.test(lastName)) {
        alert("Please enter a valid last name (only letters allowed).");
      }
    }
  } else {
    if (!firstName) {
      alert("Please fill out the first name field.");
    }
    if (!lastName) {
      alert("Please fill out the last name field.");
    }
  }
}


