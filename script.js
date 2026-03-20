const firstpage = document.getElementById("FirstPage");
const secondpage = document.getElementById("SecondPage");

function goToSecondPage() {
  setTimeout(() => {
    firstpage.style.display = "none";
    secondpage.style.display = "block";
  }, 1000);
}
function copiar() {
  const texto = document.getElementById("texto").innerText;

  navigator.clipboard.writeText(texto);
}
function copiar2() {
  const texto2 = document.getElementById("texto2").innerText;

  navigator.clipboard.writeText(texto2);
}
function copiar() {
  const texto = document.getElementById("texto").innerText;

  navigator.clipboard.writeText(texto)
    .then(() => alert("Copiado!"));
}
function copiar2() {
  const texto2 = document.getElementById("texto2").innerText;

  navigator.clipboard.writeText(texto2)
    .then(() => alert("Copiado!"));
}   