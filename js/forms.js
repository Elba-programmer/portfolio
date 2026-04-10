/* ============================================
   FORMS.JS — Contact form handler
============================================ */

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      // Shake empty fields
      [name, email, message].forEach((val, i) => {
        const fields = ["name", "email", "message"];
        if (!val) {
          const field = document.getElementById(fields[i]);
          field.style.borderBottomColor = "#f87171";
          field.addEventListener("input", () => {
            field.style.borderBottomColor = "";
          }, { once: true });
        }
      });
      return;
    }

    // Disable submit button while "sending"
    const btn = contactForm.querySelector("button[type='submit']");
    btn.textContent = "Sending...";
    btn.disabled = true;

    // Simulate send (replace with real API call / Formspree / EmailJS)
    setTimeout(() => {
      contactForm.reset();
      btn.textContent = "Send Message →";
      btn.disabled = false;
      if (formSuccess) formSuccess.classList.add("show");
      setTimeout(() => formSuccess && formSuccess.classList.remove("show"), 4000);
    }, 1000);
  });
}
