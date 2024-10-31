let sentences = [
    { text: "I am going to the park.", translation: "我正要去公園。" },
    { text: "She likes to read books.", translation: "她喜歡讀書。" },
    { text: "They are playing soccer.", translation: "他們正在踢足球。" }
];
let correctSentence = [];
let shuffledWords = [];

function loadSentence() {
    const selectedIndex = document.getElementById("sentenceSelect").value;
    if (selectedIndex === "") return;

    const selectedSentence = sentences[selectedIndex];
    correctSentence = selectedSentence.text.split(" ");
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

    document.getElementById("translation").textContent = `翻譯：${selectedSentence.translation}`;
    document.getElementById("feedback").textContent = '';
}

function playSentenceAudio() {
    const selectedIndex = document.getElementById("sentenceSelect").value;
    if (selectedIndex === "") return;

    const utterance = new SpeechSynthesisUtterance(sentences[selectedIndex].text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
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
