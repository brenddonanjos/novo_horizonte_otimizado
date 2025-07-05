const app = (() => {
  const ativarVLibras = () => {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  }

  const toggleAutoContraste = () => {
    const highContrastButton = document.getElementById('highContrast');
    const body = document.body;

    highContrastButton.addEventListener('click', () => body.classList.toggle('high-contrast'));
  }

  const aumentarFonte = () => {
    const increaseFontButton = document.getElementById('increaseFont');
    const rootElement = document.querySelector("html");

    increaseFontButton.addEventListener('click', () => {
      const computedFontSize = window.getComputedStyle(rootElement).fontSize.slice(0, -2);
      const currentFontSize = Number(computedFontSize);
      rootElement.style.fontSize = `${currentFontSize + 1}px`;
    });
  }

  const diminuirFonte = () => {
    const decreaseFontButton = document.getElementById('decreaseFont');
    const rootElement = document.querySelector("html");

    decreaseFontButton.addEventListener('click', () => {
      const computedFontSize = window.getComputedStyle(rootElement).fontSize.slice(0, -2);
      const currentFontSize = Number(computedFontSize);
      rootElement.style.fontSize = `${currentFontSize - 1}px`;
    });
  }

  return {
    init() {
      toggleAutoContraste();
      ativarVLibras();
      aumentarFonte();
      diminuirFonte();
    }
  }
})();

document.addEventListener("DOMContentLoaded", app.init);