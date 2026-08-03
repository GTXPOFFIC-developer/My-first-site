document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("Bruhh");
    const h2 = document.getElementById("h2");

    const messages = [
        "Am I mad or what? I will add dogs and cats together? Huh?? They will freaking fight.",
        "Cats are tiny lions with an attitude.",
        "Dogs think you're their best friend. Cats think you're their employee.",
        "Imagine a cat trying to bark... yeah, exactly.",
        "Every cat secretly judges your life choices.",
        "Don't worry, your cat is doing just fine.",
        "BTW! Here are the dog pics..."
    ];

    let current = 0;

    button.addEventListener("click", function () {

        // If we've shown every message, go to sike.html
        if (current >= messages.length) {
            window.location.href = "SIKE.html";
            return;
        }

        h2.textContent = messages[current];
        current++;
    });
});