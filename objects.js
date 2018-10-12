var playlist = { artistName: 'songTitle'}

var playlist = new Object({ artistNames: 'songTitles'});

function updatePlaylist(playlist, artistName, songTitles) {
 playlist[artistName] = 'songTitles'
  return playlist
}

function removeFromPlaylist(playlist, 'artistName') {
delete playlist.artistNames;
  return playlist
}


 