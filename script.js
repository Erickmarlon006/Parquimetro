var inPaid = document.getElementById("paidPrice");
var calcBtn = document.getElementById("calcBtn");
var time = document.getElementById("time");
var changeMessage = document.getElementById("change");

function calcular() {
  var paidPrice = parseFloat(inPaid.value);
  if (inPaid.value == "" || isNaN(inPaid.value)) {
    alert("Insira um valor real");
    inPaid.value = "";
    inPaid.focus();
    time.textContent = "";
    changeMessage.textContent = "";
  } else {
    if (paidPrice < 1) {
      time.textContent = "Valor Insuficiente";
    }
    if (paidPrice >= 1) {
      var change = paidPrice - 1;
      time.textContent = "Tempo: 30 min";
      changeMessage.textContent = "Troco R$: " + change.toFixed(2);
    }
    if (paidPrice >= 1.75) {
      var change = paidPrice - 1.75;
      time.textContent = "Tempo: 60 min";
      changeMessage.textContent = "Troco R$: " + change.toFixed(2);
    }
    if (paidPrice >= 3) {
      var change = paidPrice - 3;
      time.textContent = "Tempo: 120 min";
      changeMessage.textContent = "Troco R$: " + change.toFixed(2);
    }
    if (change == 0) {
      changeMessage.textContent = "";
    }
  }
}
calcBtn.onclick = calcular;
