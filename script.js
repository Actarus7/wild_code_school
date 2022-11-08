const message =
  "Merci pour votre message. Nous mettons tout en oeuvre pour vous répondre aussi vite que possible.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
