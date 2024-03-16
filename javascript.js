//Captura todos os clientes que fizeram encomenda
var clientes = document.querySelectorAll(".clientes");

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

//Função para calcular o valor total
function calcularTotal(qtde, unitario) {
  var total = 0;
  total = qtde * unitario;
  return formataValor(total);
}

function formataValor(valor) {
  return parseFloat(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

//função de validação de quantidade recebida
function validaQtde(valor) {
  if (valor < 1 || isNaN(valor)) {
    return false;
  } else {
    return true;
  }
}

//função de validação do valor unitario
function validaUnit(valor) {
  if (valor < 1 || isNaN(valor)) {
    return false;
  } else {
    return true;
  }
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

  // Criar uma nova linha na tabela
  var tabela = document
    .getElementById("tabelaEncomendas")
    .getElementsByTagName("tbody")[0];
  var novaLinha = tabela.insertRow();
  novaLinha.insertCell(0).innerHTML = nome;
  novaLinha.insertCell(1).innerHTML = quantidade;
  novaLinha.insertCell(2).innerHTML = produto;
  novaLinha.insertCell(3).innerHTML = valorUnitario;
  novaLinha.insertCell(4).innerHTML =
    '<button type="button" onclick="removerEncomenda(this)">Remover</button>';

  // Limpar os campos do formulário
  document.querySelector("input[name='nome']").value = "";
  document.querySelector("input[name='quantidade']").value = "";
  document.querySelector("select[name='produto']").selectedIndex = 0;
  document.querySelector("input[name='valorUnitario']").value = "";
}
