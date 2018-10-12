var playlist = { artistName: 'songTitle'}

var playlist = new Object({ artistNames: 'songTitles'});

function updatePlaylist(playlist, artistName, songTitles) {
 playlist[artistName] = 'songTitles'
  return playlist
}

Object.assign({playlist}, {});

function removeFromPlaylist(playlist, 'artistName') {
delete playlist.artistNames;
  return Object.assign({}, obj, {[Key]: value})
}


  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      removeFromPlaylist(playlist, 'Slowdive')

      expect(playlist).
        to.contain.all.keys({'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})

      expect(playlist).
        not.to.have.all.keys({'Slowdive': 'Alison'})
    })
  })
})
