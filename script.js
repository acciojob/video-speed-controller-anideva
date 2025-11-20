const video= document.querySelector('.viewer');
const toggle= document.querySelector('.toggle');
const progress= document.querySelector('.progress');
const progressFilled= document.querySelector('.progress__filled');
const volume= document.querySelector('.volume');
const playbackspeed=document.querySelector('.playbackspeed');
const rewind= document.querySelector('.rewind');
const forward= document.querySelector('.forward');

//toggle play/pause
function toggleplay(){
	if(video.paused){
		video.play();
		toggle.textContent='❚ ❚'; //pause icon
		
	} else{
		video.pause();
		toggle.textContent='►'; //play button
		
	}
}

//update progress bar as video plays 
function updateProgress(){
	const percent = (video.currentTime/video.duration) * 100;
	progressFilled.style.width =`${percent}%`;
	
}
//set video time when user clicks on progress bar 
function updateProgress(){
	const percent =(video.currentTime/video.duration)*100;
	progressFilled.style.width=`${percent}`%;
	
}
// set video time when user clicks on progress bar 
function setProgress(e) {
	const newTime= (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime= newTime;
}
//volume control
volume.addEventListener('input', ()=>{
	video.volume=volume.value;

});

//playbackspeed control
playbackspeed.addEventListener(`input`, () =>{
	video.playbackRate= playbackspeed.value;
});

//rewind 10 sec
rewind.addEventListener('click', () =>{
	video.currentTime -= 10;
});

//forward 25s
forward.addEventListener('click', () =>{
video.currentTime +=25;
});

//event listeners for the play and pause 
toggle.addEventListener('click', toggleplay);
video.addEventListener('click',toggleplay);
video.addEventListener('timeUpdate', updateProgress);
progress.addEventListener('click', setProgress);