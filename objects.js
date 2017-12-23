var playlist = {
  'artistName': 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistNam]
  return playlist
}

// function removeFromPlaylist(playlist, artistName) {
//   newPlaylist = Object.assign({}, playlist)
//   delete newPlaylist.artistName
//   return newPlaylist
// }
