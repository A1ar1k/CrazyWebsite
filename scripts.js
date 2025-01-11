const quizData = [
    { audio: "song1.mp3", answer: "Song 1" },
    { audio: "song2.mp3", answer: "Song 2" },
];

let currentQuestion = 0;
let score = 0;

const audioPlayer = document.getElementById("audio-player");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    const question = quizData[currentQuestion];
    audioPlayer.src = question.audio;
    answerInput.value = "";
    feedback.textContent = "";
}

document.getElementById("submit-answer").addEventListener("click", () => {
    const userAnswer = answerInput.value.trim();
    if (userAnswer.toLowerCase() === quizData[currentQuestion].answer.toLowerCase()) {
        score++;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = `Wrong! The correct answer was: ${quizData[currentQuestion].answer}`;
    }
    scoreDisplay.textContent = `Score: ${score}`;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        feedback.textContent = "Quiz completed!";
        document.getElementById("submit-answer").disabled = true;
    }
});

loadQuestion();
