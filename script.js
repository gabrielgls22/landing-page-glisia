// script.js - Funções de interação e animações
// Toggle do menu mobile (abre/fecha ao clicar no ícone)
document.getElementById('navToggle').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('nav-open');
});
// Fechar o menu mobile ao clicar em um link de navegação
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('nav-open');
  });
});
// Inicialização da biblioteca AOS (animações ao scroll)
AOS.init({
  duration: 600, // duração das animações em ms
  once: true     // executa a animação apenas uma vez em cada elemento
});