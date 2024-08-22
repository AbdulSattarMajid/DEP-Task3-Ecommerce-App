  async function handleFormSubmit(event) {
    event.preventDefault(); 

    const isValid = await validateForm();
    if (!isValid) {
      return;
    }; 

    const formData = {
      email: document.getElementById('email').value.trim(),
      fullName: document.getElementById('fullName').value.trim(),
      password: document.getElementById('password').value.trim(),
      confirmPassword: document.getElementById('confirmPassword').value.trim(),
      addressLine1: document.getElementById('addressLine1').value.trim(),
      addressLine2: document.getElementById('addressLine2').value.trim(),
      city: document.getElementById('city').value.trim(),
      state: document.getElementById('state').value.trim(),
      zip: document.getElementById('zip').value.trim(),
      country: document.getElementById('country').value.trim()
    };

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        alert('Sign-up successful!');
      } else {
        const errorResult = await response.json();
        if (response.status === 400 && errorResult.message === 'Email is already in use.') {
          alert('Failed: The email is already in use.');
        } else {
          alert('There was an error submitting the form.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  }

  async function validateForm() {
    let isValid = true;

    document.querySelectorAll('.error').forEach(function(errorElement) {
      errorElement.classList.add('hidden');
    });

    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('fullName').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const addressLine1 = document.getElementById('addressLine1').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const country = document.getElementById('country').value.trim();

    if (email === '') {
      document.getElementById('emailError').textContent = "Please fill in your email.";
      document.getElementById('emailError').classList.remove('hidden');
      isValid = false;
    }

    if (name === '') {
      document.getElementById('nameError').textContent = "Please fill in your full name.";
      document.getElementById('nameError').classList.remove('hidden');
      isValid = false;
    }

    if (password === '') {
      document.getElementById('passwordError').textContent = "Please fill in your password.";
      document.getElementById('passwordError').classList.remove('hidden');
      isValid = false;
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      document.getElementById('passwordError').textContent = "Password must be at least 8 characters long, with a mix of uppercase, lowercase, numbers, and special characters.";
      document.getElementById('passwordError').classList.remove('hidden');
      isValid = false;
    }

    if (confirmPassword === '') {
      document.getElementById('confirmError').textContent = "Please confirm your password.";
      document.getElementById('confirmError').classList.remove('hidden');
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById('confirmError').textContent = "Passwords do not match.";
      document.getElementById('confirmError').classList.remove('hidden');
      isValid = false;
    }

    if (addressLine1 === '') {
      document.getElementById('addressLine1Error').textContent = "Please fill in your address line 1.";
      document.getElementById('addressLine1Error').classList.remove('hidden');
      isValid = false;
    }

    if (city === '') {
      document.getElementById('cityError').textContent = "Please fill in your city.";
      document.getElementById('cityError').classList.remove('hidden');
      isValid = false;
    }

    if (state === '') {
      document.getElementById('stateError').textContent = "Please fill in your state or province.";
      document.getElementById('stateError').classList.remove('hidden');
      isValid = false;
    }

    if (zip === '') {
      document.getElementById('zipError').textContent = "Please fill in your ZIP or postal code.";
      document.getElementById('zipError').classList.remove('hidden');
      isValid = false;
    }

    if (country === '') {
      document.getElementById('countryError').textContent = "Please fill in your country.";
      document.getElementById('countryError').classList.remove('hidden');
      isValid = false;
    }

    return isValid;
  }
