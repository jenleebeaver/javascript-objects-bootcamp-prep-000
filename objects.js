var playlist = { debussy: "prelude of a fawn"};

function updatePlaylist(playlist, name, song_title) {
  return playlist.assign ({}, {name: song_title})
}

function removeFromPlaylist(playlist, name) {
delete playlist.name;
return playlist;
}
