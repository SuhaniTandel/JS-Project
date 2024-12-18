document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const enrollment = document.getElementById('enrollment').value;
  const division = document.getElementById('division').value;
  const email = document.getElementById('email').value;

  // Display data in console
  console.log('Form Data:');
  console.log('Name:', name);
  console.log('Enrollment Number:', enrollment);
  console.log('Division:', division);
  console.log('Email:', email);

  // Display thank you message and name
  document.getElementById('userName').textContent = name;
  document.getElementById('thankYouMessage').style.display = 'block';
  document.getElementById('registrationForm').reset(); // Reset form fields
});