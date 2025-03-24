const quizQuestions = [
    {
        question: "1.	Leidt klimaatverandering tot een stijging van de zeespiegel?",
        image: "fotos/stijgingzeespiegel.png",
        options: ["Ja", "Nee"],
        correct: "Ja"
    },
    {
        question: "2.	Heeft klimaatverandering invloed op extreme weersomstandigheden, zoals hittegolven en orkanen?",
        image: "fotos/extreem.jpg",
        options: ["Nee", "Ja"],
        correct: "Ja"
    },
    {
        question: "3.	Welke regio’s worden het hardst getroffen door klimaatverandering?",
        image: "fotos/poolgebieden.jpg",
        options: ["A) Poolgebieden", "B) Tropische eilanden", "C) Droge gebiedem (zoals Sahel)", "D) Alle bovenstaande"],
        correct: "D) Alle bovenstaande"
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
    }
   

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