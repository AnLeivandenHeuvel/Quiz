const quizQuestions = [
    {
        question: "Is het verminderen van fossiele brandstoffen een effectieve manier om klimaatverandering tegen te gaan?",
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
        options: ["Zonne-energie", "Windenergie", "Waterkracht", "Geothermische energie"],
        correct: "Waterkracht"
    },
    {
        question: "Kan het planten van bomen helpen bij het bestrijden van klimaatverandering?",
        image: "img/bomen.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja"
    },
    {
        question: "Leidt energie-efficiëntie in huishoudens tot een lagere CO₂-uitstoot?",
        image: "img/energiezuinig.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja"
    },
    {
        question: "Is elektrisch rijden beter voor het milieu dan benzine- en dieselauto’s?",
        image: "img/elektrischeauto.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja"
    },
    {
        question: "Wat is een effectieve manier om minder CO₂ uit te stoten in de landbouw?",
        image: "img/landbouw.jpg",
        options: [
            "Minder vleesconsumptie",
            "Meer kunstmest gebruiken",
            "Meer regenwoud kappen voor landbouwgrond",
            "Overstappen op monocultuur"
        ],
        correct: "Minder vleesconsumptie"
    },
    {
        question: "Helpen subsidies voor duurzame energie bij de energietransitie?",
        image: "img/subsidies.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja"
    },
    {
        question: "Welke actie heeft de grootste impact op het verminderen van de CO₂-uitstoot?",
        image: "img/co2verminderen.jpg",
        options: [
            "Overschakelen op hernieuwbare energie",
            "Minder vliegen",
            "Afval recyclen",
            "Water besparen"
        ],
        correct: "Overschakelen op hernieuwbare energie"
    },
    {
        question: "Kan klimaatverandering volledig worden teruggedraaid als we nu stoppen met CO₂-uitstoot?",
        image: "img/klimaat.jpg",
        options: ["Ja", "Nee"],
        correct: "Nee"
    }
];

let currentQuestionIndex = 0;
let userAnswers = []; 

function loadQuestion() {
    const { question, image, options } = quizQuestions[currentQuestionIndex];
    document.querySelector("main h1").textContent = question;
    document.querySelector("main img").src = image;
    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = "";

    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectOption(button, option);
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-button").style.display = "none";
}

function selectOption(button, selected) {
    userAnswers[currentQuestionIndex] = selected; 

    
    document.querySelectorAll(".options button").forEach(btn => {
        btn.classList.remove("selected");
    });

    
    button.classList.add("selected");

    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let score = userAnswers.filter((answer, index) => answer === quizQuestions[index].correct).length;
    
    let resultHTML = `<h1>Quiz voltooid!</h1>
                      <p>Je eindscore is: ${score} van de ${quizQuestions.length}</p>
                      <h2>Juiste antwoorden:</h2>
                      <ul>`;

    quizQuestions.forEach((q, index) => {
        resultHTML += `<li><strong>Vraag ${index + 1}:</strong> ${q.question}<br>
                       <strong>Jouw antwoord:</strong> ${userAnswers[index]}<br>
                       <strong>Correct antwoord:</strong> ${q.correct}</li><br>`;
    });

    resultHTML += "</ul>";
    document.querySelector("main").innerHTML = resultHTML;
}

document.addEventListener("DOMContentLoaded", loadQuestion);
