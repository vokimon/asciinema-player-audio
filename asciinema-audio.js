/**
 Copyright (C) 2020 David García Garzón
*/

window.onload = function() {
	function bindAudio(cast) {
		var audioSrc = cast.getAttribute("audiosrc");
		var audioType = cast.getAttribute("audiotype");
		if (audioSrc==="") return;

		var audio = document.createElement('audio');
		var source = document.createElement('source');
		source.setAttribute('src', audioSrc);
		source.setAttribute('type', audioType);
		audio.appendChild(source);
		cast.parentNode.appendChild(audio);

		cast.addEventListener('play', function(e) {
			audio.play();
			audio.currentTime = cast.currentTime;
		});
		cast.addEventListener('pause', function(){
			audio.pause();
		});
		cast.addEventListener('seek', function(){
			audio.currentTime = cast.currentTime;
		});
	}

	var players = document.getElementsByTagName('asciinema-player');
	for (let i = 0; i < players.length; i++) {
		bindAudio(players.item(i));
	}
};

