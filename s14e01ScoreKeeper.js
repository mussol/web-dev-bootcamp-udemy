var p1Button = document.getElementById("p1");
var p1Display = document.getElementById("p1Display");
var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winningDisplay");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winningDisplay");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function() {
	reset();
});

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.valueAsNumber;
	winningScore = this.valueAsNumber;
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winningDisplay");
	p2Display.classList.remove("winningDisplay");
	gameOver = false;
};
