//Captura todos os clientes que fizeram encomenda
findProducts();
dbClickRemoveItemFunction();

function dbClickRemoveItemFunction() {
  var tbody = document
    .getElementById("itens-collection")
    .getElementsByTagName("tbody")[0];

  tbody.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function () {
      event.target.parentNode.remove();
    }, 200);
  });
}

function findProducts() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((produtos) => {
      produtos.forEach((produto) => {
        addEncomenda(produto);
      });
    });
}
