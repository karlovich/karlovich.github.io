var audioElement = document.getElementById('audioElement');
var videoElement = document.getElementById('momVideo');
Reveal.addEventListener( 'fragmentshown', function( event ) {
	if(event.fragment.id === 'beep-fragment' ||
		event.fragment.id === 'cross') {
		audioElement.src="beep.mp3";
		audioElement.volume = 0.2;
		audioElement.play();
	}
});

// Reveal.addEventListener( 'fragmentshown', function( event ) {
// 	if(event.fragment.id === 'beep-fragment') {
// 		audio.src="beep.mp3"
// 	}
// });

var videoPlayed = false;
Reveal.addEventListener( 'fragmentshown', function( event ) {
	if(event.fragment.id === 'momVideo' && videoPlayed !== true) {
		videoPlayed = true;
		//window.videoTimeout = window.setTimeout(function() {
			console.log('setTimeout handler');
			videoElement.src = "Mom.mp4";
			videoElement.play();
		//}, 300);
	}
});

// Reveal.addEventListener( 'fragmenthidden', function( event ) {
// 	console.log('fragmenthidden' + window.videoTimeout);
// 	if(event.fragment.id === 'momVideo') {
// 		if(window.videoTimeout != null) {
// 			window.clearTimeout(window.videoTimeout);
// 			window.videoTimeout = null;
// 		}
// 	}
// });