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
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.textContent = "❌ Failed to send. Please try again.";
    }
  } catch (error) {
    status.textContent = "❌ Error occurred. Try again.";
    console.error(error);
  }
});

