// script.js

console.log("init js");
let submitbutton = document.querySelector(".send-msg-btn");
console.log("btn", submitbutton);

(function () {
  emailjs.init("lskkRlXkW5XUa3Dee"); // Replace with your EmailJS public key
  submitbutton.addEventListener("click", function (event) {
    event.preventDefault();
    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    console.log("before email send");
    emailjs.send("service_kwc5sl3", "template_xfpikil", params).then(
      () => {
        document.getElementById("status").textContent =
          "Email sent successfully";
        console.log("email sent");
      },
      (err) => {
        document.getElementById("status").textContent = "Failed to send email.";
        console.error(err);
        console.log("failed to send");
      }
    );
  });
})();
