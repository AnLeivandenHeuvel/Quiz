document.addEventListener("DOMContentLoaded", function () {
    updateScores();
});

function updateScores() {
    let quizNames = ["quiz1", "quiz2", "quiz3"];

    quizNames.forEach(quizName => {
        let scores = JSON.parse(localStorage.getItem(quizName)) || [];
        let list = document.getElementById(`highscore-${quizName}`);

        if (!list) return; 

        list.innerHTML = ""; 

        scores.forEach(entry => {
            let li = document.createElement("li");
            li.textContent = `${entry.name}: ${entry.score} punten`;
            list.appendChild(li);
        });
    });
}


