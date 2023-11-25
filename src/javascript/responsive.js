document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de eventos para o botão
    document.getElementById("toggleSidebarButtonSmartphone").addEventListener("click", function () {
        // Obtém o elemento do cabeçalho
        var header = document.querySelector("header");

        // Alterna a visibilidade do cabeçalho
        if (window.getComputedStyle(header).display === "none") {
            header.style.display = "flex";
        } else {
            header.style.display = "none";
        }
    });
});