// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.


// chiedi il nome all'utente

var nome = prompt("Come ti chiami?");
// console.log(nome);
document.getElementById("nomeUtente").innerHTML = nome;

//chiedi il sesso
var sesso = prompt("Che sesso sei? Uomo o Donna?");

// se l'utente inserisce uomo, il colore sarà azzurro

// se l'utente è donna, il colore sarà rosa
if (isNaN(nome)) {
  //uomo
  if (nome == "uomo") {
    var colore = "blue";
  }
  //donna
  else {
    var colore = "pink";
  }
    nomeUtente.style.color = colore;
} else {
  alert("le informazioni sono errate")
}
