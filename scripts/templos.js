// 1. Alternância do menu hambúrguer no celular
const menuBtn = document.querySelector('#menu-btn')
const menuLinks = document.querySelector('#menu-links')

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('aberto');

    // Alterna o ícone entre ☰ e ✕
    if (menuLinks.classList.contains('aberto')) {
        menuBtn.textContent = 'X'
        menuBtn.setAttribute('arial-label', 'Fechar Menu')
    } else {
        menuBtn.textContent = '☰'
        menuBtn.setAttribute('arial-label', 'Abrir Menu');
    }
});

// 2. Ano dinâmico no rodapé
const anoAtual = document.querySelector('#ano-atual')
if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}

// 3. Data e hora da última modificação
const ultimaModificacao = document.querySelector('#ultima-mod')
if (ultimaModificacao) {
    ultimaModificacao.textContent = 'Última modificacao: ' + document.lastModified;
}