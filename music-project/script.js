function showPlaylist() {
  const mood = document.getElementById('moodSelector').value;
  const playerContainer = document.getElementById('playerContainer');

  const playlists = {
    happy: "https://www.youtube.com/embed/6JCLY0Rlx6Q",
    sad: "https://www.youtube.com/embed/jfKfPfyJRdk",
    energetic: "https://www.youtube.com/embed/Wv2rLZmbPMA",
    relaxed: "https://www.youtube.com/embed/MkNeIUgNPQ8"
  };

  if (playlists[mood]) {
    playerContainer.innerHTML = `
      <iframe 
        src="${playlists[mood]}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else {
    playerContainer.innerHTML = "<p>No playlist found for this mood.</p>";
  }
}
