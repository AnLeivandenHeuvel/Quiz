const questions = [
    {
        question: "Welke van de volgende energiebronnen is hernieuwbaar?",
        image: "img/energiebronnen.jpg",
        options: ["Steenkool", "Aardgas", "Zonne-energie", "Olie"],
        answer: "Zonne-energie"
    },
    {
        question: "Is het gebruik van fossiele brandstoffen wereldwijd afgenomen de afgelopen jaren?",
        image: "img/fossielebrandstoffen.jpg",
        options: ["Ja", "Nee"],
        answer: "Nee"
    },
    {
        question: "Wat is een belangrijke manier om de uitstoot van broeikasgassen te verminderen?",
        image: "img/broeikasgassen.jpg",
        options: ["Het verhogen van de belasting op fossiele brandstoffen", "Het bevorderen van hernieuwbare energie", "Het bevorderen van fossiele brandstofgebruik", "Het verhogen van de uitstootnormen voor industrieën"],
        answer: "Het bevorderen van hernieuwbare energie"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    const q = questions[currentQuestionIndex];
    let questionHTML = `<div class='question-container'>`;
    questionHTML += `<p>${currentQuestionIndex + 1}. ${q.question}</p>`;
    questionHTML += `<img src="${q.image}" alt="Vraag afbeelding" class="question-image"><br>`;
    q.options.forEach(option => {
        questionHTML += `<button class="option-button" onclick="selectOption('${option}')">${option}</button>`;
    });
    questionHTML += `</div>`;
    quizDiv.innerHTML = questionHTML;
}

function selectOption(selectedOption) {
    const resultElement = document.getElementById("result");
    if (selectedOption === questions[currentQuestionIndex].answer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect! Het juiste antwoord is: " + questions[currentQuestionIndex].answer;
        resultElement.style.color = "red";
    }
    showNextButton();
}

function showNextButton() {
    document.getElementById("nextButton").style.display = "block";
}

function nextQuestion() {
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("result").textContent = ""; // Reset feedback
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = "<p>Je hebt de quiz voltooid!</p>";
    }
}

loadQuestion();