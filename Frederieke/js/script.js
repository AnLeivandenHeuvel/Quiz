const quizQuestions = [
    {
        question: "1.	Leidt klimaatverandering tot een stijging van de zeespiegel?",
        image: "fotos/stijgingzeespiegel.png",
        options: ["Ja", "Nee"],
        correct: "Ja"
    },
    {
        question: "2.	Heeft klimaatverandering invloed op extreme weersomstandigheden, zoals hittegolven en orkanen?",
        image: "fotos/European-flooding.jpg",
        options: ["Nee", "Ja"],
        correct: "Ja"
    },
    {
        question: "3. Welke sector wordt het meest beïnvloed door ",
        image: "fotos/sector.jpg",
        options: ["A) Landbouw", "B) Gezondheidszorg", "C) Toerisme", "D) Alle bovenstaande"],
        correct: "Ja" 
        
    },
    {
        question: "4.	Is klimaatverandering een bedreiging voor de biodiversiteit? (Ja/Nee)",
        image: "fotos/biodiversiteit.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja" 
    },
    {
        question: "5.	Welke van de volgende gevolgen wordt niet veroorzaakt door klimaatverandering?",
        image: "fotos/klimaatverandering.jpg",
        options: ["A) Verzuring van oceanen", "B) Toename van zonneactiviteit", "C) Uitstervem van diersoorten", "D) Smelten van gletsjers"],
        correct: "B) Toename van zonneactiviteit" 
    },
    {
        question: "6. Kan klimaatverandering sociale en economische ongelijkheid vergroten?",
        image: "fotos/ongelijkheid.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja" 
    },
    {
        question: "7. Heeft klimaatverandering invloed op de volksgezondheid, zoals de verspreiding van ziekten?",
        image: "fotos/gemeente.png",
        options: ["Ja", "Nee"],
        correct: "Ja" 
    },
    {
        question: "8. Verhoogt klimaatverandering het risico op bosbranden?",
        image: "fotos/bosbranden.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja"

 
    },
    {
        question: "9. Kan klimaatverandering leiden tot voedseltekorten? (Ja/Nee)",
        image: "fotos/voedseltekort.jpg",
        options: ["Ja", "Nee"],
        correct: "Ja"
 
    },
    {
        question: "10. Welke van de volgende is géén direct gevolg van klimaatverandering?",
        image: "fotos/extreem.jpg",
        options: ["A) Stijgende zeespiegel", "B) Meer aardbevingen", "C) Extreme weersomstandigheden"],
        correct: "B)"
 


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
 