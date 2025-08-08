document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const intermediate = document.getElementById('intermediate-content');
  const main = document.getElementById('main-content');

  function revealGame() {
    if (!overlay || !intermediate || !main) return;

    if (main.classList.contains('visible')) return;

    overlay.classList.remove('visible');
    overlay.classList.add('hidden');

    setTimeout(() => {
      intermediate.classList.remove('hidden');
      intermediate.classList.add('visible');
    }, 500);

    setTimeout(() => {
      intermediate.classList.remove('visible');
      intermediate.classList.add('hidden');

      main.classList.remove('hidden');
      main.classList.add('visible');

      const partitions = document.querySelectorAll('.partition');
      partitions.forEach(partition => {
        partition.style.display = 'none';
      });

      main.style.display = 'block';
      main.style.position = 'absolute';
      main.style.top = '0';
      main.style.left = '0';
      main.style.width = '100vw';
      main.style.height = '100vh';
      main.style.margin = '0';
      main.style.padding = '0';

      if (typeof startHubGame === 'function') {
        startHubGame();
      } else {
        console.error('startHubGame function not found');
      }
    }, 2500);
  }

  // Your existing events
  document.addEventListener('click', revealGame);
  document.addEventListener('touchstart', revealGame, { passive: true }); // <- Only change: add passive
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault(); // <- Only change: prevent default
      revealGame();
    }
  });
});