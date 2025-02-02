const listaOrdenavel = document.getElementById("lista-ordenavel");
console.log(listaOrdenavel);
const botaoChecar = document.getElementById("checar");
console.log(botaoChecar);

const paisesMaisPopulosos = [
  "India",
  "China",
  "Estados Unidos",
  "Indonesia",
  "Paquistão",
  "Nigéria",
  "Brasil",
  "Bangladesh",
  "Rússia",
  "México",
];
//Armazena itens da lista
const itensDaLista = [];

let indiceInicioArraste;

//Insere itens da lista no DOM
function criarLista() {
  [...paisesMaisPopulosos]
    .map((item) => ({
      valor: item,
      ordem: Math.random(),
    }))
    .sort((a, b) => a.ordem - b.ordem)
    .map((a) => a.valor)
    .forEach((pais, indice) => {
      const item = document.createElement("li");
      item.setAttribute("data-indice", indice);
      item.innerHTML = `
        <span class="numero">${indice + 1}</span>
        <div class="arrastavel" draggable="true">
            <p class="nome-pais">${pais}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `;

      itensDaLista.push(item);
      listaOrdenavel.appendChild(item);
    });
}

criarLista();
