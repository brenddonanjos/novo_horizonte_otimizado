new window.VLibras.Widget('https://vlibras.gov.br/app');

document.addEventListener('DOMContentLoaded', function() {
  const highContrastButton = document.getElementById('highContrast');
  const body = document.body;

  highContrastButton.addEventListener('click', function() {
    body.classList.toggle('high-contrast');
  });
});