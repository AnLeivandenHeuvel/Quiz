function checkAnswer(answer) {
    let feedback = document.getElementById("feedback");
    if (answer === "juist") {
        feedback.innerHTML = "✅ Correct! Klimaatverandering veroorzaakt verzuring van het zeewater.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Fout! Probeer het opnieuw.";
        feedback.style.color = "red";
    }
}