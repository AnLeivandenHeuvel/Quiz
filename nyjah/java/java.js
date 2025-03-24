const quizQuestions = [
    {
        question: "Is het verminderen van fossiele brandstoffen een effectieve manier om klimaatverandering tegen te gaan? ",
        image: "img/energiebronnen.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja"
    },
    {
        question: "Draagt hernieuwbare energie bij aan het verminderen van CO₂-uitstoot?",
        image: "img/klimaatverandering.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja"
    },
    {
        question: "Welke vorm van hernieuwbare energie is het meest gebruikt wereldwijd?",
        image: "img/energiebronnen.jpg",
        options: ["Zonne-energie", "Windenergie","Waterkracht","Geothermische energie"],
        correct: "Waterkracht"
    },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const { question, image, options } = quizQuestions[currentQuestionIndex];
    document.querySelector("main h1").textContent = question;
    document.querySelector("main img").src = image;
    document.querySelector(".options").innerHTML = options.map(option => 
        `<button onclick="selectOption('${option}')">${option}</button>`
    ).join("");
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-button").style.display = "none";
}

function selectOption(selected) {
    const correct = quizQuestions[currentQuestionIndex].correct;
    document.getElementById("feedback").textContent = selected === correct ? "Correct!" : `Incorrect! Het juiste antwoord is: ${correct}`;
    document.getElementById("feedback").style.color = selected === correct ? "green" : "red";
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++ < quizQuestions.length - 1 ? loadQuestion() : 
        document.querySelector("main").innerHTML = "<h1>Quiz voltooid!</h1><p>Bedankt voor het spelen.</p>";
}

document.addEventListener("DOMContentLoaded", loadQuestion);