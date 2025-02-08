function answerYes() {
    alert("Yay! You're my Valentine! ❤️");
    document.querySelector(".container").innerHTML = "<h1 class='question'>I knew it! 😘</h1>";
}

function answerNo() {
    alert("nooooo 😭");
    document.querySelector(".container").innerHTML = "<h1 class='question'>I'll keep asking. 💔</h1>";
}
