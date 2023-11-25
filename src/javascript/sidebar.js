function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var overlay = document.getElementById("overlay");

    if (sidenav.style.width === "250px") {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    var sidenav = document.getElementById("mySidenav");
    var overlay = document.getElementById("overlay");

    sidenav.style.width = "250px";
    document.getElementById("mySidenavBtn").style.marginLeft = "250px";
    overlay.style.backgroundColor = "rgba(0,0,0,0.4)";
    overlay.style.display = "block";

    // Torna o overlay clicável
    overlay.onclick = function () {
        closeNav();
    };
}

function closeNav() {
    var sidenav = document.getElementById("mySidenav");
    var overlay = document.getElementById("overlay");

    sidenav.style.width = "0";
    document.getElementById("mySidenavBtn").style.marginLeft = "0";

    // Aguarda o fim da animação de fechamento
    setTimeout(function () {
        overlay.style.backgroundColor = "transparent";
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura o scroll da página
        overlay.onclick = null; // Remove o manipulador de eventos ao fechar
    }, 300);
}
