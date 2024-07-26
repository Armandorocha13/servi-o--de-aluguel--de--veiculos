function toggleNav() {
    document.body.classList.toggle('show-navbar');
    const navButton = document.querySelector('.toggle-nav');
    if (document.body.classList.contains('show-navbar')) {
        navButton.style.display = 'none';
    } else {
        navButton.style.display = 'block';
    }
}

// Seleciona o elemento do link "Sobre nós" e o elemento da barra lateral
const aboutUsLink = document.getElementById('about-us');
const sidebar = document.getElementById('sidebar');

// Adiciona um evento de clique ao link "Sobre nós"
aboutUsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    sidebar.classList.toggle('show-sidebar'); // Alterna a visibilidade da barra lateral
});
