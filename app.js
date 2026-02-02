document.addEventListener('DOMContentLoaded', () => {
    const stuff = [
    "Rock" ,
    "Paper" ,
    "Scissors" 
    ];
    let history = [];

    function RoPaSc() {
        let result = "";
        const historyDiv = document.querySelector('.history');
        const resultDiv = document.querySelector('.result');
    
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        

        const btn = document.querySelectorAll(".button");

        btn.forEach((button) => {
            button.addEventListener("click", () => {
                const num = stuff[getRandomInt(3)];
                if (button.id === num) {
                    result = "Tie";
                    history.push("Tie");
                }
                else if (
                    (button.id === "Paper" && num === "Rock") ||
                    (button.id === "Rock" && num === "Scissors") ||
                    (button.id === "Scissors" && num === "Paper")) {
                    result = "Win";
                    history.push("Win");
                }
                else {
                    result = "Lose";
                    history.push("Lose");
                }
                historyDiv.innerHTML = "";
                for (let i = history.length - 1; i >= 0; i--) {
                    historyDiv.innerHTML += `<div>Round ${i + 1}: ${history[i]}</div>`;
                }
                resultDiv.innerHTML = `<h5>You picked ${button.id} vs Computer picked ${num}: ${result}</h5>`;

            });
        })

    }

    RoPaSc();
});