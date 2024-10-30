let correctSentence = [];
let shuffledWords = [];

function startGame() {
    const input = document.getElementById('sentenceInput').value.trim();
    if (!input) {
        alert("請先輸入句子！");
        return;
    }

    correctSentence = input.split(" ");
    shuffledWords = shuffleArray([...correctSentence]);

    const wordContainer = document.getElementById("wordContainer");
    wordContainer.innerHTML = '';

    shuffledWords.forEach((word, index) => {
        const wordElement = document.createElement("div");
        wordElement.className = "word";
        wordElement.draggable = true;
        wordElement.textContent = word;
        wordElement.addEventListener("dragstart", dragStart);
        wordElement.addEventListener("drop", drop);
        wordElement.addEventListener("dragover", dragOver);
        wordContainer.appendChild(wordElement);
    });

    document.getElementById("feedback").textContent = '';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let draggedElement;

function dragStart(event) {
    draggedElement = event.target;
}

function drop(event) {
    if (event.target.className === "word") {
        const tempText = event.target.textContent;
        event.target.textContent = draggedElement.textContent;
        draggedElement.textContent = tempText;
    }
}

function dragOver(event) {
    event.preventDefault();
}

function checkAnswer() {
    const wordElements = document.querySelectorAll("#wordContainer .word");
    const userAnswer = Array.from(wordElements).map(word => word.textContent).join(" ");

    const feedback = document.getElementById("feedback");
    if (userAnswer === correctSentence.join(" ")) {
        feedback.textContent = "正確！";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "錯誤，請再試一次。";
        feedback.style.color = "red";
    }
}
