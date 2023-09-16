// Function to fetch advice from the API and update the advice text and ID
const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        // Update the advice text
        const adviceText = document.querySelector(".advice-text");
        adviceText.textContent = data.slip.advice;

        // Update the Advice ID
        const adviceID = document.querySelector("#adviceID");
        adviceID.textContent = data.slip.id;
    } catch (error) {
        console.error("Error fetching advice:", error);
    }
};

// Event listener for the generate button
const generateButton = document.querySelector(".Group3");
generateButton.addEventListener("click", getAdvice);
getAdvice()