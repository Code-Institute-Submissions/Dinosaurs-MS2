function sendMail(contactForm) {
    emailjs.send("gmail", "dino", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "from_contactnumber": contactForm.contactnumber.value
    })
    .then(
        function(response) {
            alert('Many thanks for signing up to Dinosaur Discoveries!')
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

