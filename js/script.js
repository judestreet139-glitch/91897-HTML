const toggleButton = document.querySelector('.toggle-btn');
const statusText = document.querySelector('.status-text');

const moods = [
  'The night is quiet. The silhouette of the city waits.',
  'Combat protocols engaged. The skyline glows with danger.',
  'A pulse of light cuts through the dark. Hope remains.'
];

let index = 0;

toggleButton?.addEventListener('click', () => {
  document.body.classList.toggle('alt-theme');
  toggleButton.textContent =
    document.body.classList.contains('alt-theme')
      ? 'Return to calm'
      : 'Activate combat mode';
  index = (index + 1) % moods.length;
  statusText.textContent = moods[index];
});
