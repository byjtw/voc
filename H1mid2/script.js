const sentences = [
    { en: "The cat is on the mat.", zh: "貓在墊子上。" },
    { en: "The sun is shining brightly.", zh: "陽光燦爛。" },
    { en: "She likes to read books.", zh: "她喜歡讀書。" },
];

document.getElementById('sentence-list').addEventListener('change', updateGame);
document.getElementById('listen-btn').addEventListener('click', listenSentence);
document.getElementById('check-answer-btn').addEventListener('click', checkAnswer);

function updateGame() {
    const selectedIndex = document.getElementById('sentence-list').value;
    const selectedSentence = sentences[selectedIndex];
    const scrambled = scrambleSentence(selectedSentence.en);
    
    document.getElementById('chinese-translation').innerText = selectedSentence.zh;
    document.getElementById('scrambled-sentence').innerHTML = scrambled.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');
    document.getElementById('user-input').innerHTML = '';
    document.getElementById('feedback').innerText = '';
}

function scrambleSentence(sentence) {
    const words = sentence.split(' ');
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    return words.join(' ');
}

function listenSentence() {
    const selectedIndex = document.getElementById('sentence-list').value;
    const sentence = sentences[selectedIndex].en;
    const speech = new SpeechSynthesisUtterance(sentence);
    speechSynthesis.speak(speech);
}

function checkAnswer() {
    const selectedIndex = document.getElementById('sentence-list').value;
    const correctSentence = sentences[selectedIndex].en;
    const userAnswer = Array.from(document.getElementById('user-input').children).map(span => span.innerText).join(' ');

    if (userAnswer.trim() === correctSentence) {
        document.getElementById('feedback').innerText = "Correct!";
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').innerText = "Try again!";
        document.getElementById('feedback').style.color = "red";
    }
}

interact('.word').draggable({
    inertia: true,
    autoScroll: true,
    onmove: dragMoveListener
});

interact('#user-input').dropzone({
    accept: '.word',
    overlap: 0.75,
    ondrop: function (event) {
        event.target.appendChild(event.relatedTarget);
    }
});

function dragMoveListener(event) {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.transform = `translate(${x}px, ${y}px)`;
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// Initialize the game with the first sentence
updateGame();
