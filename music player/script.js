const musicContainter=document.querySelector('.music-container')
const playBtn=document.querySelector('#play')
const prevBtn=document.querySelector('#prev')
const nextBtn=document.querySelector('#next')
const audio=document.querySelector('#audio')
const progess=document.querySelector('.progress')
const progressContainer=document.querySelector('.progress-container')
const cover=document.querySelector('#cover')

//SongTitle
const songs=['break','closer','kgf']

//Keep track of songs
let songIndex=2;

//Initially load song into DOM
loadSong(songs[songIndex]);

//updateSong details
function loadSong(song) {
    title.innerText=song
    audio.src= `music/${song}.mp3`;
    cover.src=`images/${song}.jpg`;
}
//Play song
function playSong() {
    musicContainter.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play()
    
}
//Pause Song
function pauseSong() {
    musicContainter.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}
//Prev song
function prevSong () {
    songIndex--;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
   loadSong(songs[songIndex]);
   playSong() 
}

//Next song
function nextSong () {
    songIndex++;
    if(songIndex>songs.length-.1){
        songIndex=0;
    }
   loadSong(songs[songIndex]);
   playSong() 
}

//Update Progress
function updateProgress(e){
    const {duration,currentTime}=e.srcElement;
    const progressPercent=(currentTime/duration)*100;
    progress.style.width=`${progressPercent}%`;
}
//Set Progress
function setProgress(e) {
    const width=this.clientWidth;
    const clickX=e.offsetX;
    const duration=audio.duration;
    
    audio.currentTime=(clickX/width)*duration;
    
}

//EventListeners
playBtn.addEventListener('click',()=>{
    const isPlaying=musicContainter.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }   
});
//Change Song Events
prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)
audio.addEventListener('timeupdate',updateProgress)
audio.addEventListener('click',setProgress)
progressContainer.addEventListener('click',setProgress)
audio.addEventListener('ended',nextSong)
