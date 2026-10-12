
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Contact form not found.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const email = document.getElementById("customer-email").value.trim();
    const service = document.getElementById("customer-service").value;
    const message = document.getElementById("customer-message").value.trim();

    if (!name || !phone || !email || !service) {
      alert("Please complete all required fields.");
      return;
    }

    const whatsappNumber = "97335509344";

    const whatsappMessage =
      "New Website Inquiry - Sulehri Brothers Consultancy\n\n" +
      "Full Name: " + name + "\n" +
      "Phone Number: " + phone + "\n" +
      "Email Address: " + email + "\n" +
      "Service Required: " + service + "\n" +
      "Message: " + (message || "No additional message");

    const whatsappURL =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
});