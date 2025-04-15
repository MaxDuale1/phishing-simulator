document.getElementById("phish-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
  
    if (!email.includes("@")) {
      document.getElementById("feedback").textContent = "⚠️ Invalid email format.";
      return;
    }
  
    document.getElementById("feedback").textContent =
      "⚠️ Your info has been submitted — if this were real, your credentials could be compromised!";
  });
  
  document.getElementById("reportBtn").addEventListener("click", function () {
    document.getElementById("feedback").textContent =
      "✅ Excellent! You correctly flagged this as a phishing attempt.";
  });
  
  document.getElementById("fake-link").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("feedback").textContent =
      "⚠️ This link leads to an unverified domain. Always hover to check before clicking.";
  });
  