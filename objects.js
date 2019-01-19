var playlist = { debussy: "prelude of a fawn"};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist.assign({}, {name: songTitle})
}

function removeFromPlaylist(playlist, name) {
  delete playlist.name;
  return playlist;
}
