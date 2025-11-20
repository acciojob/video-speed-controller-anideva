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
	const newTime= (e)
}