document.getElementById("rollButton").addEventListener("click", function () {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const dice3 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice1").innerText = dice1;
  document.getElementById("dice2").innerText = dice2;
  document.getElementById("dice3").innerText = dice3;
  const total = dice1 + dice2 + dice3;
  let resultText = `Tổng: ${total} - `;
  if (total >= 11 && total <= 17) {
    resultText += "Tài";
  } else {
    resultText += "Xỉu";
  }
  document.getElementById("result").innerText = resultText;
});
