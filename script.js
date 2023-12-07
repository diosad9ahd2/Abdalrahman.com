document.addEventListener("DOMContentLoaded", function () {
    // Array of words to be typed
    const wordsToType = [
        "Welcome To Abd-Alrahman's Website",
        "Explore",
        "Learn",
        "Connect"
        // Add more words as needed
    ];

    // Speed of typing (in milliseconds)
    const typingSpeed = 50; // Adjust the speed as needed

    // Get the text container element
    const textContainer = document.getElementById("text-container");

    // Function to simulate typing effect
    function typeText() {
        let wordIndex = 0;
        let charIndex = 0;

        function typingInterval() {
            // Append one character at a time
            textContainer.innerHTML += wordsToType[wordIndex][charIndex];
            charIndex++;

            // Check if the entire word is typed
            if (charIndex === wordsToType[wordIndex].length) {
                setTimeout(function () {
                    // Reset the text and start typing the next word
                    textContainer.innerHTML = "";
                    charIndex = 0;
                    wordIndex = (wordIndex + 1) % wordsToType.length;
                    typingInterval();
                }, 1000); // Adjust the delay before typing the next word
            } else {
                setTimeout(typingInterval, typingSpeed);
            }
        }

        // Start typing
        typingInterval();
    }

    // Call the function to start the typing effect
    typeText();
});
