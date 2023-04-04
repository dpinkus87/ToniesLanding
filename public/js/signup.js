
const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#firstname-signup').value;
  const last_name = document.querySelector('#lastname-signup').value;
  const email = document.querySelector('#email-signup').value;
  const password = document.querySelector('#password-signup').value;
  // const address = document.querySelector('#address-signup').value.trim();
  // const city = document.querySelector('#city-signup').value.trim();
  // const zip = document.querySelector('#zip-signup').value.trim();


  if (first_name && last_name && email && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, email, password}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);


