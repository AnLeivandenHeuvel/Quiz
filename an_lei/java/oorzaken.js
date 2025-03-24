const quizQuestions = [
    {
        question: "Wat is de belangrijkste oorzaak van de huidige klimaatverandering?",
        image: "img/vraag1.webp",
        options: ["Natuurlijke klimaatcycli", 
            "Menselijke activiteiten, zoals het verbranden van fossiele brandstoffen",
             "Vulkaanuitbarstingen"],
        correct: "Menselijke activiteiten, zoals het verbranden van fossiele brandstoffen"
    },
    {
        question: "Is ontbossing een belangrijke factor bij klimaatverandering? ",
        image: "img/vraag2.jpg",
        options: ["ja", "nee ];"],
        correct: "ja "
        
    },
    {
        question: "Welke sector is wereldwijd de grootste uitstoter van broeikasgassen?",
        image: "img/vraag3.webp",
        options: ["Transport ", "Landbouw", "Energieproductie ", "Industrie "],
        correct: "Energieproductie"
    },
    {
        question: " Komt methaan vrij bij de veeteelt? ",
        image: "img/vraag4.jpg",
        options: ["ja", "nee ];"],
        correct: "ja "
        
    },
    {
        question: "Welke menselijke activiteit heeft de grootste impact op de uitstoot van broeikasgassen?",
        image: "img/.jpg",
        options: [" Autorijden", "Vliegen", "Het verbranden van fossiele brandstoffen voor energie ", "Voedselverspilling "],
        correct: "Het verbranden van fossiele brandstoffen voor energie "
        
    },
    {
        question: "Welke van deze processen draagt niet bij aan klimaatverandering?",
        image: "img/.jpg",
        options: [" Ontbossing", "Zonne-energie", "Voedselverspilling ",  "Industriële vervuiling];"],
        correct: "Het verbranden van fossiele brandstoffen voor energie "
        
    },
    {
        question: "6. Heeft het gebruik van fossiele brandstoffen invloed op de opwarming van de aarde?  ",
        image: "img/.jpg",
        options: ["ja", "nee ];"],
        correct: "ja "
        
    },
    {
        question: "Heeft het gebruik van fossiele brandstoffen invloed op de opwarming van de aarde?  ",
        image: "img/.jpg",
        options: ["ja", "nee ];"],
        correct: "ja "
        
    },
    {
        question: "Speelt de oceanische circulatie een rol bij klimaatverandering? ",
        image: "img/.jpg",
        options: ["ja", "nee ];"],
        correct: "ja "
        
    },
    {
        question: "Welke van de volgende gevolgen wordt geassocieerd met klimaatverandering?",
        image: "img/.jpg",
        options: ["Lagere zeespiegel", " Extreem weer, zoals hittegolven en stormen","Minder droogte", "Koudere temperaturen wereldwijd ];"],
        correct: "ja "
        
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