document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission

  let valid = true;
  document.getElementById("successMessage").innerText = "";

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate name
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    valid = false;
  }

  // Validate email
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email address.";
    valid = false;
  }

  // Validate message
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required.";
    valid = false;
  }

  // Show success message
  if (valid) {
    document.getElementById("successMessage").innerText = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
