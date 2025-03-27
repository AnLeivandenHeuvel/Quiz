function updateScore(playerName, newScore) {
    let scores = JSON.parse(localStorage.getItem('highScores')) || [];
    const existingScoreIndex = scores.findIndex(score => score.name === playerName);

    if (existingScoreIndex > -1) {
        if (newScore > scores[existingScoreIndex].score) {
            scores[existingScoreIndex].score = newScore; // Update score if new score is higher
        }
    } else {
        scores.push({ name: playerName, score: newScore }); // Add new score if player is not found
    }

    localStorage.setItem('highScores', JSON.stringify(scores));
}