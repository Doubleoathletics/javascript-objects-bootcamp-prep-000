var playlist = { artistName: 'songTitle'}

var playlist = new Object({ artistNames: 'songTitles'});

function updatePlaylist(playlist, artistName, songTitles) {
 playlist[artistName] = 'songTitles'
  return playlist
}

Object.assign({playlist}, {})
function removeFromPlaylist( the playlist, 'artist name', song title) {
  return Object.assign({}, obj, {[Key]: value})
}

  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    before(() => {
      playlist['Slowdive'] = 'Alison'
      playlist['My Bloody Valentine'] = 'Sometimes'
    })

    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

      expect(playlist).
        to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
    })
  })

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
