  const button = document.getElementById('musicButton');
  const song = document.getElementById('mySong');

  button.addEventListener('click', function() {
    song.play();
  });