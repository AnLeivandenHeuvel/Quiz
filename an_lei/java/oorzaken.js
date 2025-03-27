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
    let quizName = "quiz2"; 

    let resultHTML = `
        <h1>Quiz voltooid!</h1>
        <p>Je eindscore is: ${score} van de ${quizQuestions.length}</p>
        <label for="username">Vul je naam in:</label>
        <input type="text" id="username" placeholder="Jouw naam">
        <button onclick="saveScore('${quizName}', ${score})">Opslaan</button>
    `;

    document.querySelector("main").innerHTML = resultHTML;
}

function saveScore(quizName, score) {
    let username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Voer een naam in!");
        return;
    }

    let scores = JSON.parse(localStorage.getItem(quizName)) || [];
    scores.push({ name: username, score: score });

    localStorage.setItem(quizName, JSON.stringify(scores));
    window.location.href = "../quizzz/score.html"; 
}

document.addEventListener("DOMContentLoaded", loadQuestion);
