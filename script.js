const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = ()=>{
    navLinks.classList.toggle('active');
}


// Initialize EmailJS
emailjs.init("ur7SrSvUHUfEPgS8h"); // e.g. public_xxxx...

document.getElementById("msgBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const userEmail = document.getElementById("email-input").value;
  const userMessage = document.getElementById("message-input").value;

  // 1️⃣ Send message to YOU
  emailjs.send("service_mibrahimm1338", "template_to_owner", {
    from_email: userEmail,
    message: userMessage
  })
  .then(function () {
    // 2️⃣ Auto-reply to the sender
    return emailjs.send("service_mibrahimm1338", "template_autoreply", {
      to_email: userEmail
    });
  })
  .then(function () {
    alert("Message sent! You’ll get a reply shortly.");
  })
  .catch(function (error) {
    alert("Failed to send message: " + error.text);
  });
});

