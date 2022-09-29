let button = document.getElementById("btn-menu");

button.addEventListener("click", function openMenu() {
  let menu = document.getElementById("list-menu");
  menu.classList.toggle("open-menu");
});

let testoFormattato = document.getElementById("formattazione");


function italic() {
  testoFormattato.style.fontStyle = "italic";
}  

function bold() {
  testoFormattato.style.fontWeight = "bolder";
}

function uppercase() {
  testoFormattato.style.textTransform = "uppercase";
}

function lowercase() {
  testoFormattato.style.textTransform = "lowercase";
}

function underline() {
  testoFormattato.style.textDecoration = "underline";
}

function remove() {
  testoFormattato.removeAttribute("style");
}

let btnCorsivo = document.getElementById("corsivo");
btnCorsivo.addEventListener("click", italic);
btnCorsivo.addEventListener("dblclick", remove);

let btnGrassetto = document.getElementById("grassetto");
btnGrassetto.addEventListener("click", bold);
btnGrassetto.addEventListener("dblclick", remove);

let btnMaiusc = document.getElementById("maiuscolo");
btnMaiusc.addEventListener("click", uppercase);
btnMaiusc.addEventListener("dblclick", remove);

let btnMinusc = document.getElementById("minuscolo");
btnMinusc.addEventListener("click", lowercase);
btnMinusc.addEventListener("dblclick", remove);

let btnSottolineato = document.getElementById("sottolineato");
btnSottolineato.addEventListener("click", underline);
btnSottolineato.addEventListener("dblclick", remove);
