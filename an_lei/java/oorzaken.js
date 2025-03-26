const quizQuestions = [
    {
        question: "Wat is de belangrijkste oorzaak van de huidige klimaatverandering?",
        image: "img/vraag1.webp",
        options: ["Natuurlijke klimaatcycli", "Menselijke activiteiten, zoals het verbranden van fossiele brandstoffen", "Vulkaanuitbarstingen"],
        correct: "Menselijke activiteiten, zoals het verbranden van fossiele brandstoffen"
    },
    {
        question: "Is ontbossing een belangrijke factor bij klimaatverandering?",
        image: "img/vraag2.jpg",
        options: ["ja", "nee"],
        correct: "ja"
    },
    {
        question: "Welke sector is wereldwijd de grootste uitstoter van broeikasgassen?",
        image: "img/vraag3.webp",
        options: ["Transport", "Landbouw", "Energieproductie", "Industrie"],
        correct: "Energieproductie"
    },
    {
        question: "Komt methaan vrij bij de veeteelt?",
        image: "img/vraag4.jpg",
        options: ["ja", "nee"],
        correct: "ja"
    },
    {
        question: "Welke menselijke activiteit heeft de grootste impact op de uitstoot van broeikasgassen?",
        image: "img/vraag5.jpg",
        options: ["Autorijden", "Vliegen", "Het verbranden van fossiele brandstoffen voor energie", "Voedselverspilling"],
        correct: "Het verbranden van fossiele brandstoffen voor energie"
    },
    {
        question: "Welke van deze processen draagt niet bij aan klimaatverandering?",
        image: "img/vraag6.avif",
        options: ["Ontbossing", "Zonne-energie", "Voedselverspilling", "Industriële vervuiling"],
        correct: "Zonne-energie"
    },
    {
        question: "Heeft het gebruik van fossiele brandstoffen invloed op de opwarming van de aarde?",
        image: "img/vraag7.jpg",
        options: ["ja", "nee"],
        correct: "ja"
    },
    {
        question: "Speelt de oceanische circulatie een rol bij klimaatverandering?",
        image: "img/vraag8.jpg",
        options: ["ja", "nee"],
        correct: "ja"
    },
    {
        question: "Welke van de volgende gevolgen wordt geassocieerd met klimaatverandering?",
        image: "img/vraag9.jpg",
        options: ["Lagere zeespiegel", "Extreem weer, zoals hittegolven en stormen", "Minder droogte", "Koudere temperaturen wereldwijd"],
        correct: "Extreem weer, zoals hittegolven en stormen"
    },
    {
        question: "Welke energiebron is het meest milieuvriendelijk?",
        image: "img/vraag10.jpg",
        options: ["Steenkool", "Aardgas", "Windenergie", "Kernenergie"],
        correct: "Windenergie"
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function loadQuestion() {
    const { question, image, options } = quizQuestions[currentQuestionIndex];
    document.querySelector("main h1").textContent = question;
    document.querySelector("main img").src = image;
    document.querySelector(".options").innerHTML = options.map(option =>
        `<button onclick="selectOption('${option}')">${option}</button>`
    ).join("");
    document.getElementById("next-button").style.display = "none";
}

function selectOption(selected) {
    userAnswers.push(selected);
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

    resultHTML += `</ul><button onclick="goHome()">Terug naar Home</button>`;
    document.querySelector("main").innerHTML = resultHTML;
    userAnswers = []; // Reset antwoorden
}

function goHome() {
    window.location.href = "../quizzz/home.html";
}

document.addEventListener("DOMContentLoaded", loadQuestion);