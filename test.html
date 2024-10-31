let sentences = [
    { text: "My name is Teddy.", translation: "我的名字是泰迪。" },
    { text: "I'm ten years old.", translation: "我十歲。" },
    { text: "How are you?", translation: "你好嗎？" },
    { text: "How old are you?", translation: "你幾歲？" }
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
        wordElement.className = `word color${index % 8}`;
        wordElement.draggable = true;
        wordElement.textContent = word;
        wordElement.addEventListener("dragstart", dragStart);
        wordElement.addEventListener("drop", drop);
        wordElement.addEventListener("dragover", dragOver);

        // Add touch event listeners for mobile devices
        wordElement.addEventListener("touchstart", touchStart);
        wordElement.addEventListener("touchmove", touchMove);
        wordElement.addEventListener("touchend", touchEnd);

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
    if (event.target.class
