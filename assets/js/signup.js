const signup = new Audio("assets/sounds/signup.mp3");

function sendMail(contactForm) {
    emailjs.send("gmail", "dino", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "from_contactnumber": contactForm.contactnumber.value
    })
  
    .then(
        // Change button text to green and display 'sent' message
        function () {
            let sentButton = document.getElementById('contact-button');
            signup.play();
            sentButton.style.backgroundColor = "Green";
            sentButton.innerHTML = "Sign Up Complete!";

        },
        // On error, using standard browser alert
        function (error) {
            alert("Whoops! An error occurred, please try again.", error);
        });
        // Clear form after submission
        document.getElementById('contactForm').reset();
return false;
}