// Script de funcionalidades da página

// Quando o DOM estiver carregado, adiciona comportamento de toggle nas perguntas do FAQ
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todas as perguntas frequentes
  var questions = document.querySelectorAll('.faq-question');
  // Adiciona um evento de clique em cada pergunta
  questions.forEach(function(q) {
    q.addEventListener('click', function() {
      // Alterna a classe 'active' no elemento pai (faq-item) para mostrar/ocultar a resposta
      var faqItem = q.parentNode;
      faqItem.classList.toggle('active');
    });
  });
})

/* JavaScript para ativar animação ao scroll */
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.about-section, .hero-content').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll(' .services-section, .differentials-section, .faq-section, .cta-section').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
