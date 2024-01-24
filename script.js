document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform the login validation here
  if (username === "admin" && password === "password") {
    // Redirect to the landing page
    window.location.href = "landing.html";
  } else {
    alert("Invalid username or password");
  }
});

