// Espera até que o conteúdo da página carregue
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    console.log("Botão clicado!");
    alert("Você clicou no botão!");
  });
});
