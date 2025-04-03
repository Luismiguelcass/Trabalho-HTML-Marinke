// Código JavaScript para exemplo
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Formulário enviado com sucesso!");
    });
});
