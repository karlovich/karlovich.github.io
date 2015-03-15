var audioElement = document.getElementById('audioElement');
var videoElement = document.getElementById('momVideo');
Reveal.addEventListener( 'fragmentshown', function( event ) {
	if(event.fragment.id === 'beep-fragment'
		|| event.fragment.id === 'cross-http'
		|| event.fragment.id === 'cross-comet'
		|| event.fragment.id === 'comet-fragment') {
		audioElement.src="beep.mp3";
		audioElement.volume = 0.2;
		audioElement.play();
	}

	if(event.fragment.id === 'changes-fragment') {
		audioElement.src="changes.mp3";
		audioElement.volume = 0.2;
		audioElement.play();
	}
});


Reveal.addEventListener( 'slidechanged', function( event ) {
	audioElement.pause();
	audioElement.currentTime = 0;
	videoElement.pause();
	videoElement.currentTime = 0;
});

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