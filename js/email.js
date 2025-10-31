// script.js

console.log("Initializing EmailJS...");

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".send-msg-btn");
  const statusMsg = document.getElementById("status");

  if (!submitButton) {
    console.error("Submit button not found!");
    return;
  }

  // Initialize EmailJS
  emailjs.init("lskkRlXkW5XUa3Dee"); // Your EmailJS public key

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,

      // You can add a field for your recipient if your template expects it
      to_email: "worksoftcode@gmail.com",
    };

    console.log("Sending email with params:", params);

    emailjs.send("service_pn69ytj", "template_xfpikil", params)
      .then(() => {
        statusMsg.textContent = "✅ Email sent successfully!";
        console.log("Email successfully sent to worksoftcode@gmail.com");
      })
      .catch((err) => {
        statusMsg.textContent = "❌ Failed to send email.";
        console.error("EmailJS error:", err);
      });
  });
});