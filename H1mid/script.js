// script.js

// Sample data for sentences, audio, and translations
const sentences = [
    { id: 1, text: "I love learning new languages.", audio: "audio1.mp3", translation: "我喜歡學習新語言。" },
    { id: 2, text: "Practice makes perfect.", audio: "audio2.mp3", translation: "熟能生巧。" }
];

// Function to load sentence
function loadSentence() {
    const select = document.getElementById("sentence-select");
    const selectedSentence = sentences.find(s => s.id === +select.value);

    if (selectedSentence) {
        // Split sentence into words and shuffle
        const words = selectedSentence.text.split(" ");
        const wordContainer = document.getElementById("word-container");
        wordContainer.innerHTML = ""; // Clear previous words

        // Create draggable word elements
        words.forEach(word => {
            const wordDiv = document.createElement("div");
            wordDiv.className = "word";
            wordDiv.textContent = word;
            wordDiv.draggable = true;

            wordDiv.addEventListener("dragstart", dragStart);
            wordDiv.addEventListener("dragover", dragOver);
            wordDiv.addEventListener("drop", drop);

            wordContainer.appendChild(wordDiv);
        });

        // Display translation
        document.getElementById("translation").textContent = `Translation: ${selectedSentence.translation}`;
    }
}

// Function to play audio
function playAudio() {
    const select = document.getElementById("sentence-select");
    const selectedSentence = sentences.find(s => s.id === +select.value);

    if (selectedSentence) {
        const audio = new Audio(selectedSentence.audio);
        audio.play();
    }
}

// Drag-and-drop functionality
let draggedWord;

function dragStart(e) {
    draggedWord = e.target;
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.className === "word") {
        const currentWord = e.target;
        const container = currentWord.parentNode;
        container.insertBefore(draggedWord, currentWord.nextSibling);
    }
}

// Check if sentence order is correct
function checkOrder() {
    const select = document.getElementById("sentence-select");
    const selectedSentence = sentences.find(s => s.id === +select.value);
    const words = Array.from(document.querySelectorAll("#word-container .word")).map(el => el.textContent).join(" ");

    const feedback = document.getElementById("feedback");
    if (words === selectedSentence.text) {
        feedback.textContent = "Great job! 🎉 You got it right!";
        playEncouragementAudio(); // Optional function to play encouragement sound
    } else {
        feedback.textContent = "Keep trying! 👍";
    }
}

// Optional function for e
