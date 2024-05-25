function addEncomenda(produto) {
  var tabela = document.querySelector("#itens-collection");

  if (produto === undefined) {
    addEncomedaFromUser(tabela);
  } else {
    tabela.appendChild(montaTR(produto));
  }
}

function addEncomedaFromUser(tabela) {
  var { nome, produto, valorUnitario, imagem } = getInputProductValues();

  if (nome !== null) {
    const encomenda = {
      title: nome,
      description: produto,
      price: valorUnitario,
      image: imagem,
    };
    tabela.appendChild(montaTR(encomenda));
  }
}

function montaTD(dado, style) {
  var td = document.createElement("td");
  td.className = style;
  td.textContent = dado;

  return td;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function montaTR(novaEncomenda) {
  var tr = document.createElement("tr");
  tr.className = "clientes";

  const tdIMage = montaImg(novaEncomenda);

  tr.appendChild(tdIMage);
  tr.appendChild(montaTD(novaEncomenda.title, "nome"));

  const qtde = getRandomInt(5);

  tr.appendChild(montaTD(qtde, "qtde"));
  tr.appendChild(montaTD(formataValor(novaEncomenda.price)));
  tr.appendChild(montaTD(calcularTotal(qtde, novaEncomenda.price)));

  return tr;
}

function getInputProductValues() {
  var nome = document.querySelector("input[name='nome']").value;
  var imagem = document.querySelector("input[name='imagem']").value;
  var produto = document.querySelector("select[name='produto']").value;
  var valorUnitario = document.querySelector(
    "input[name='valorUnitario']"
  ).value;
  return { nome, produto, valorUnitario, imagem };
}

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

function montaImg(novaEncomenda) {
  const tdIMage = document.createElement("td");
  const image = document.createElement("img");
  image.setAttribute("src", novaEncomenda.image);
  tdIMage.appendChild(image);
  return tdIMage;
}

function validaQtde(valor) {
  return valor > 0 && !isNaN(valor);
}

// Função de validação do valor unitário
function validaUnit(valor) {
  return valor > 0 && !isNaN(valor);
}
