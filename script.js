// Navbar toggle functionality
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typewriter effect for the text
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

// Debugging and tracking social media links
const socialLinks = document.querySelectorAll('.social-media a');

socialLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Social link clicked: ${link.href}`);
    });
});

// BoxIcons debug
if (!document.querySelector('.bx')) {
    console.error("BoxIcons library is not loaded. Ensure you have included it in your HTML.");
}

// Initialize EmailJS
(function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
})();

// Form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const numberPattern = /^[0-9]{10}$/;

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!numberPattern.test(number)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    return true;
}

// Email sending function
// Initialize EmailJS with the correct public key (User ID)
(function () {
    emailjs.init({
        publicKey: "ZqwfiOZ2KZFinoQ8d",
});
})();

// Example email sending function
function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_fhnp9u3";  // Replace with your EmailJS service ID
    const templateID = "template_a6ldi4y";  // Replace with your EmailJS template ID

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log("Success:", res);
            alert("Your message has been sent successfully!");
        })
        .catch((err) => {
            console.error("Error:", err);
            alert("There was an issue sending your message. Please try again.");
        });
}
