const quotes = [ "Practice makes men perfect.",
    "A warm smile is the universal language of kindness",
    "We rise by lifting others",
    "Characters doing the right thing when nobody's looking."
];

let startTime , endTime;
const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");

function loadQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = quote;
    inputEl.value = "";
    resultEl.textContent = "";
    startTime = null; 
}

inputEl.addEventListener("input", () => {
    if (!startTime) {
        startTime = new Date();
    }

     const enteredText = inputEl.value.trim();
  const originalText = quoteEl.textContent.trim();

    // const enteredText = inputEl.value;
    // const originalText = quoteEl.textContent;

    if (enteredText === originalText) {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; 
        const words = originalText.split(" ").length;
        const speed = Math.round((words / timeTaken) * 60);

        let correctChars = 0;
        for (let i=0; i<enteredText.length; i++){
            if (enteredText[i] === originalText[i]) correctChars++;
        }
        const accuracy = Math.round((correctChars / originalText.length) * 100);

        resultEl.innerHTML = `
        <p><strong>Time:</strong> ${timeTaken.toFixed(2)} sec</p>
        <p><strong>Speed:</strong> ${speed} WPM</p>
        <p><strong>Accuracy:</strong> ${accuracy}%</p>
        `;

        setTimeout(loadQuote, 2000);
    } else if (originalText.startsWith(enteredText) === false) {
        resultEl.innerHTML = `
      <h2>😞 Oops! Try Again 😢</h2>
      <button onclick="loadQuote()">🔁 Try Again</button>
    `;
    } else {
        resultEl.innerHTML = "";
    }
});

window.onload = loadQuote;


