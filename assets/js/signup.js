
//Variable for sound file when submitting form
const signup = new Audio("assets/sounds/signup.mp3");
//Send information to EMail.JS
function sendMail(contactForm) {
    emailjs.send("gmail", "dino", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "from_contactnumber": contactForm.contactnumber.value
    })
  
    .then(
// Change button textto green and display message Sign up Complete
        function () {
            let sentButton = document.getElementById('contact-button');
            signup.play();
            sentButton.style.backgroundColor = "Green";
            sentButton.innerHTML = "Sign Up Complete!";

        },
// On error, browser alert
        function (error) {
            alert("Whoops! An error occurred, please try again.", error);
        });
// Clear form after submitting
        document.getElementById('contactForm').reset();
return false;
}