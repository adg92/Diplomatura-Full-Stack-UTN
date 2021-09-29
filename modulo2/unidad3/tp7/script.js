let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let content = document.querySelector("tbody");
let interval;
let stop = 0;
function mostrarMeses() {
  let row = document.createElement("tr");
  let mesCell = document.createElement("td");
  let textMesCell = document.createTextNode(meses[stop]);
  let diasCell = document.createElement("td");
  let textDiasCell = document.createTextNode(dias[stop]);
  diasCell.appendChild(textDiasCell);
  mesCell.appendChild(textMesCell);
  row.appendChild(mesCell);
  row.appendChild(diasCell);
  content.appendChild(row);
  stop++;
  if (stop === 12) {
    clearInterval(interval);
  }
}
function intervalo() {
  interval = setInterval(mostrarMeses, 3000);
}
