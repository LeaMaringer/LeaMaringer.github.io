document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_yhy3ipv', 'template_sc6gj8i', this, 'SWaPHxTtpgQoTONUOAru_')
    .then(() => {
      alert('Your message has been sent successfully !');
      this.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
    });
});