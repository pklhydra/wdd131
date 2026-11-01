const anoAtual = new Date().getFullYear();
document.getElementById('anoatual').textContent = anoAtual;

const ultimaMod = new Date(document.lastModified).toLocaleDateString('pt-BR')
document.getElementById('ultimaModificacao').textContent = "Ultima modificacao " + ultimaMod