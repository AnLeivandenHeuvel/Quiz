function selectOption(selectedOption) {
    const correctAnswer = 'Zonne-energie'; 
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");

    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Incorrect! Het juiste antwoord is: " + correctAnswer;
        feedbackElement.style.color = "red";
    }

    if (feedbackElement.textContent !== "") {
        nextButton.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = 'none'; 
});
