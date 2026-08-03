document.addEventListener("DOMContentLoaded", function () {

    const h1 = document.getElementById("h1");
    const button = document.getElementById("realButton");

    // Hide button initially
    button.style.display = "none";

    const messages = [
        "SIKE!! 😂",
        "You really thought there would be dog pics?",
        "This is a CAT gallery!",
        "Dogs are awesome...",
        "...but this page belongs to the cats. 😼",
        "Almost there...",
        "Alright, you've earned it.",
        "Here's the REAL button..."
    ];

    let current = 0;

    h1.textContent = messages[current];

    const slideshow = setInterval(() => {

        current++;

        if (current < messages.length) {
            h1.textContent = messages[current];
        } else {
            clearInterval(slideshow);

            // Wait 2 seconds after the LAST message
            setTimeout(() => {
                button.style.display = "inline-block";
            }, 2000);
        }

    }, 2000);

    button.addEventListener("click", function () {
        window.location.href = "jumpscare.html";
    });

});