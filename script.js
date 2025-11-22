const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');

// Set initial toggle text
toggle.textContent = '►';

// Toggle play/pause
function toggleplay() {
	if (video.paused) {
		video.play();
		toggle.textContent = '❚ ❚'; // pause icon
	} else {
		video.pause();
		toggle.textContent = '►'; // play button
	}
}

// Update progress bar as video plays
function updateProgress() {
	if (video.duration) {
		const percent = (video.currentTime / video.duration) * 100;
		progressFilled.style.width = `${percent}%`;
	}
}

// Set video time when user clicks on progress bar
function setProgress(e) {
	if (video.duration) {
		const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
		video.currentTime = newTime;
	}
}

// Volume control
volume.addEventListener('input', () => {
	video.volume = volume.value;
});

// Playback speed control
playbackSpeed.addEventListener('input', () => {
	video.playbackRate = playbackSpeed.value;
});

// Rewind 10 sec
rewind.addEventListener('click', () => {
	video.currentTime -= 10;
});

// Forward 25s
forward.addEventListener('click', () => {
	video.currentTime += 25;
});

// Event listeners for play and pause
toggle.addEventListener('click', toggleplay);
video.addEventListener('click', toggleplay);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
