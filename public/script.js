const myVideo = document.getElementById('myVideo');
const timeOut = document.getElementById('timeOut');
const vidNumOut = document.getElementById('vidNum');
let timer=null;

myVideo.addEventListener('ended',vidEnded);

const vids=['1.mp4','2.mp4'];
let vidplaying=0;

function playVideo(){
    myVideo.play();
}

function vidEnded(){
    nextVideo();
    playVideo();
}

function nextVideo(){
    if(vidplaying<1){
        vidplaying++;
    }else{
        vidplaying=0;
    }
    myVideo.src=''+vids[vidplaying];
}