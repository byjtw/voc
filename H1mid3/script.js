<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>句型重組練習</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>句型重組練習</h1>
        
        <label for="sentenceSelect">選擇要練習的句型：</label>
        <select id="sentenceSelect" onchange="loadSentence()">
            <option value="" disabled selected>請選擇句型</option>
            <option value="0">I am going to the park.</option>
            <option value="1">She likes to read books.</option>
            <option value="2">They are playing soccer.</option>
        </select>

        <button id="playAudio" onclick="playSentenceAudio()">🔊 播放語音</button>
        
        <div id="translation"></div>

        <div id="gameArea">
            <div id="wordContainer"></div>
            <div id="answerContainer"></div>
            <button onclick="checkAnswer()">檢查答案</button>
            <div id="feedback"></div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
