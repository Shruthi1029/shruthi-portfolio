document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("formStatus").textContent = "Please fill out all fields.";
    return;
  }

  document.getElementById("formStatus").textContent = "Message sent successfully! 🎉";
  this.reset();
});

function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf"; // Change to your resume file
  link.download = "Devella_Resume.pdf";
  link.click();
}
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('onboarding').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 5000); // Match the fadeOut duration
});
