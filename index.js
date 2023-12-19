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
    const dobInput = document.getElementById('dob');
    const dobError = document.getElementById('dobError');
    
    const dob = new Date(dobInput.value);
    const minAge = 2;
    
    //Get Current Date
    const today = new Date();
    const minDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  
    if (dob > minDate) {
      dobError.textContent = 'Minimum age should be 2 years.';
      dobInput.value = ''; 
    } else {
      dobError.textContent = '';
    }
  }


function storeFormData() {
    // Retrieve existing data 
    let existingData = localStorage.getItem('userData');
    
    // checks if there is existing data. If data exists, it is parsed from JSON format.
    existingData = existingData ? JSON.parse(existingData) : [];

    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      dob: document.getElementById('dob').value,
      gender: document.getElementById('option').value
    };
  
    // Concatenate existing data with new form data
    existingData = [...existingData, formData]; 
  
    // Store updated data back in localStorage
    localStorage.setItem('userData', JSON.stringify(existingData)); 
  }




