# asciinema-player-audio

Adds synced audio to asciinema console casts.

This script finds any [asciinema-player]()
tag having `audiosrc` attribute and creates a sibbling 
hidden `audio` tag which sinchronizes with the playback
of the asciinema-player.


## Usage

```html
<link rel="stylesheet" type="text/css" href="./asciinema-player.css" />
<script src="./asciinema-player.js"></script>
<script src="./asciinema-audio.js"></script>

...

<asciinema-player
	src="mycast.cast"
	audiosrc="mycast.mp3"
	audiotype="audio/mpeg"
/>

```


