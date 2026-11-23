const pictures = [
    { src: "pics/game/picture1.png", answer: "tart" },
    { src: "pics/game/picture2.png", answer: "croissant" },
    { src: "pics/game/picture3.png", answer: "baguette" },
    { src: "pics/game/picture4.png", answer: "macaron" },
    { src: "pics/game/picture5.png", answer: "grain" },
    { src: "pics/game/picture6.png", answer: "cookie" },
    { src: "pics/game/picture7.png", answer: "danish" },
    { src: "pics/game/picture8.png", answer: "scone" }
];

let currentPicture = 0;
let score = 0;

const pictureElement = document.getElementById("picture");
const progressElement = document.getElementById("progress");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const submitButton = document.getElementById("submitButton");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const finalResult = document.getElementById("finalResult");
const restartButton = document.getElementById("restartButton");

function showPicture() {
    const picture = pictures[currentPicture];
    pictureElement.src = picture.src;
    pictureElement.alt = `Picture ${currentPicture + 1} to guess`;
    progressElement.textContent = `Picture ${currentPicture + 1} of ${pictures.length}`;
    guessInput.value = "";
    guessInput.disabled = false;
    submitButton.disabled = false;
    nextButton.hidden = true;
    feedbackElement.textContent = "";
    guessInput.focus();
}

guessForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const guess = guessInput.value.trim().toLowerCase();
    const answer = pictures[currentPicture].answer.trim().toLowerCase();

    if (guess === answer) {
        score++;
        feedbackElement.textContent = "nice, tama sha!";
        guessInput.disabled = true;
        submitButton.disabled = true;
        nextButton.hidden = false;
    } else {
        feedbackElement.textContent = "malii!";
        guessInput.select();
    }
});

nextButton.addEventListener("click", function () {
    currentPicture++;

    if (currentPicture < pictures.length) {
        showPicture();
    } else {
        pictureElement.hidden = true;
        progressElement.hidden = true;
        guessForm.hidden = true;
        nextButton.hidden = true;
        feedbackElement.textContent = "taposs!";
        finalResult.textContent = `You got ${score} out of ${pictures.length} correct. <br>`;
        
        finalResult.hidden = false;
        restartButton.hidden = false;
    }
});

restartButton.addEventListener("click", function () {
    currentPicture = 0;
    score = 0;
    pictureElement.hidden = false;
    progressElement.hidden = false;
    guessForm.hidden = false;
    finalResult.hidden = true;
    restartButton.hidden = true;
    showPicture();
});

showPicture();
