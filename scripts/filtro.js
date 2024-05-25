var campoFilro = document.getElementById("filtra-tabela");

campoFilro.addEventListener("input", function () {
  var clientes = document.querySelectorAll(".clientes");

  if (this.value.length > 0) {
    for (var cliente = 0; cliente < clientes.length; cliente++) {
      var nome = clientes[cliente].querySelector(".nome").textContent;
      console.log(nome);
      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)) {
        // console.log(clientes[cliente]);
        clientes[cliente].classList.add("invisivel");
      } else {
        clientes[cliente].classList.remove("invisivel");
      }
    }
  } else {
    for (var cliente = 0; cliente < clientes.length; cliente++) {
      var nome = clientes[cliente].querySelector(".nome").textContent;
      clientes[cliente].classList.remove("invisivel");
    }
  }
});
