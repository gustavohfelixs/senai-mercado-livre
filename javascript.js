//Captura todos os clientes que fizeram encomenda
var clientes = document.querySelectorAll(".clientes");

var tbody = document
  .getElementById("itens-collection")
  .getElementsByTagName("tbody")[0];

tbody.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function () {
    event.target.parentNode.remove();
  }, 200);
});

for (var i = 0; i < clientes.length; i++) {
  //Captura a quantidade encomendada
  var qtde = clientes[i].querySelector(".qtde").textContent;

  //Captura o valor unitário do produto
  var unitario = clientes[i].querySelector(".unitario").textContent;

  //Verifica se a quantidade é um número e válido
  if (!validaQtde(qtde)) {
    clientes[i].querySelector(".qtde").textContent = "QTDE INVALIDA!";
    clientes[i].querySelector(".qtde").style.color = "red";
  } else if (!validaUnit(unitario)) {
    clientes[i].querySelector(".unitario").textContent = "VALOR INVALIDO!";
    clientes[i].style.backgroundColor = "red";
  } else {
    //Quantidade OK, prossegue
    //Calcula o valor total da encomenda
    clientes[i].querySelector(".unitario").textContent = formataValor(unitario);
    clientes[i].querySelector(".total").textContent = calcularTotal(
      qtde,
      unitario
    );
  }
}

function formataValor(valor) {
  return parseFloat(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Função para calcular o valor total da encomenda
function CalculaTotalEncomenda(valor) {
  if (valor < 1 || isNaN(valor)) {
    return false;
  } else {
    return true;
  }
}

function adicionarEncomenda() {
  // Pegar os valores do formulário
  var nome = document.querySelector("input[name='nome']").value;
  var quantidade = document.querySelector("input[name='quantidade']").value;
  var produto = document.querySelector("select[name='produto']").value;
  var valorUnitario = document.querySelector(
    "input[name='valorUnitario']"
  ).value;

  // Validar se todos os campos foram preenchidos
  if (!nome || !quantidade || !produto || !valorUnitario) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validar a quantidade e o valor unitário
  if (!validaQtde(quantidade)) {
    alert("Quantidade inválida!");
    return;
  }
  if (!validaUnit(valorUnitario)) {
    alert("Valor unitário inválido!");
    return;
  }
  var tbodyRef = document
    .getElementById("itens-collection")
    .getElementsByTagName("tbody")[0];

  // Insert a row at the end of table
  var newRow = tbodyRef.insertRow();

  var nomeCell = newRow.insertCell();
  var nomeText = document.createTextNode(nome);
  nomeCell.appendChild(nomeText);

  var produtoCell = newRow.insertCell();
  var produtoText = document.createTextNode(produto);
  produtoCell.appendChild(produtoText);

  var quantidadeCell = newRow.insertCell();
  var quantidadeText = document.createTextNode(quantidade);
  quantidadeCell.appendChild(quantidadeText);

  var valorCell = newRow.insertCell();
  var valorText = document.createTextNode(valorUnitario);
  valorCell.appendChild(valorText);

  var total = calcularTotal(quantidade, valorUnitario);
  var valorTotCell = newRow.insertCell();
  var valorTotValue = document.createTextNode(total);
  valorTotCell.appendChild(valorTotValue);
}

function excluiEncomenda() {
  const row = document.querySelectorAll("clientes");

  console.log();
}

// function adicionarEncomenda() {
//   // Pegar os valores do formulário
//   var nome = document.querySelector("input[name='nome']").value;
//   var quantidade = document.querySelector("input[name='quantidade']").value;
//   var produto = document.querySelector("select[name='produto']").value;
//   var valorUnitario = document.querySelector("input[name='valorUnitario']").value;

//   // Validar se todos os campos foram preenchidos
//   if (!nome || !quantidade || !produto || !valorUnitario) {
//     alert("Por favor, preencha todos os campos.");
//     return;
//   }

//   // Validar a quantidade e o valor unitário
//   if (!validaQtde(quantidade)) {
//     alert("Quantidade inválida!");
//     return;
//   }
//   if (!validaUnit(valorUnitario)) {
//     alert("Valor unitário inválido!");
//     return;
//   }

//   // Criar uma nova div para a encomenda
//   var novaEncomenda = document.createElement("div");
//   novaEncomenda.classList.add("clientes");

//   // Criar os elementos para exibir os detalhes da encomenda
//   var nomeElement = document.createElement("p");
//   nomeElement.textContent = "Nome: " + nome;
//   novaEncomenda.appendChild(nomeElement);

//   var produtoElement = document.createElement("p");
//   produtoElement.textContent = "Produto: " + produto;
//   novaEncomenda.appendChild(produtoElement);

//   var quantidadeElement = document.createElement("p");
//   quantidadeElement.textContent = "Quantidade: " + quantidade;
//   novaEncomenda.appendChild(quantidadeElement);

//   var valorUnitarioElement = document.createElement("p");
//   valorUnitarioElement.textContent = "Valor Unitário: " + formataValor(valorUnitario);
//   novaEncomenda.appendChild(valorUnitarioElement);

//   var totalElement = document.createElement("p");
//   var total = calcularTotal(quantidade, valorUnitario);
//   totalElement.textContent = "Total: " + total;
//   novaEncomenda.appendChild(totalElement);

//   // Adicionar a nova encomenda à lista de encomendas
//   var listaEncomendas = document.querySelector(".container");
//   listaEncomendas.appendChild(novaEncomenda);

//   // Limpar os campos do formulário
//   document.querySelector("input[name='nome']").value = "";
//   document.querySelector("input[name='quantidade']").value = "";
//   document.querySelector("select[name='produto']").selectedIndex = 0;
//   document.querySelector("input[name='valorUnitario']").value = "";
// }

// Função para calcular o valor total da encomenda
function calcularTotal(qtde, unitario) {
  var total = qtde * unitario;
  return formataValor(total);
}

// Função de validação de quantidade recebida
function validaQtde(valor) {
  return valor > 0 && !isNaN(valor);
}

// Função de validação do valor unitário
function validaUnit(valor) {
  return valor > 0 && !isNaN(valor);
}
