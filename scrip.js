
function showFinalScore() {
    document.getElementById('question-container').classList.add('hide');
    document.getElementById('final-score').classList.remove('hide');

    // Calcula el puntaje final y porcentaje
    let percentage = (correctAnswers / totalQuestions) * 100;

    // Redirige a la página de resultados con los parámetros necesarios
    window.location.href = `resultados.html?score=${correctAnswers}&total=${totalQuestions}&percentage=${percentage.toFixed(2)}`;
}
