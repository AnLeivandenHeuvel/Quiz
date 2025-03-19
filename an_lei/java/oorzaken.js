function selectOption(selectedOption) {
    const correctAnswer = 'Menselijke activiteiten, zoals het verbranden van fossiele brandstoffen'; // Het juiste antwoord
    const feedbackElement = document.getElementById("feedback");
 
    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Incorrect! Het juiste antwoord is: " + correctAnswer;
        feedbackElement.style.color = "red";
    }
}
