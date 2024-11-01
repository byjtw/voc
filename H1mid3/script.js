// 允許拖放功能
function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// 支援觸控事件
function touchStart(event) {
    event.target.style.opacity = "0.5";
    const touch = event.touches[0];
    event.target.dataset.startX = touch.clientX;
    event.target.dataset.startY = touch.clientY;
}

function touchMove(event) {
    const touch = event.touches[0];
    const word = event.target;
    word.style.position = "absolute";
    word.style.left = touch.clientX - word.offsetWidth / 2 + "px";
    word.style.top = touch.clientY - word.offsetHeight / 2 + "px";
}

function touchEnd(event) {
    event.target.style.opacity = "1";
    event.target.style.position = "relative";
    event.target.style.left = "0";
    event.target.style.top = "0";
    const word = event.target;
    const answerContainer = document.getElementById("answer-container");
    
    // 如果手指放開時在 answerContainer 內，就添加到 answerContainer
    const rect = answerContainer.getBoundingClientRect();
    if (
        event.changedTouches[0].clientX > rect.left &&
        event.changedTouches[0].clientX < rect.right &&
        event.changedTouches[0].clientY > rect.top &&
        event.changedTouches[0].clientY < rect.bottom
    ) {
        answerContainer.appendChild(word);
    }
}

// 將 touch 和 mouse 事件連接到單字元素上
document.querySelectorAll(".word").forEach(word => {
    word.addEventListener("dragstart", dragStart);
    word.addEventListener("touchstart", touchStart, { passive: true });
    word.addEventListener("touchmove", touchMove, { passive: true });
    word.addEventListener("touchend", touchEnd);
});
