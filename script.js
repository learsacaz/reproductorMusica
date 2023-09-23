let listaMusica = [
  {
    path: 'musica/At First Sight - FiftySounds.mp3',
    nombre: 'At First Sight'
  },
  {
    path: 'musica/Neon Lights.mp3',
    nombre: 'Neon Lights'
  },
  {
    path: 'musica/Route 66.mp3',
    nombre: 'Route 66'
  }
];
const btnPlay=document.getElementById("playPause");
const reproductor=document.getElementById("reproductor");
const muteBtn=document.getElementById("muteBtn");
let btnVolumen=document.getElementById("btnVolumen");
let cancion=document.getElementById("selector");
let barProgreso=document.getElementById("barraProgreso");
let titulo=document.getElementById("titulo");
function playPause(){
  if(btnPlay.classList[1]==='bi-play-fill'){
    btnPlay.classList.remove("bi-play-fill");
    btnPlay.classList.add("bi-pause");
    reproductor.pause();
  }else if(btnPlay.classList[1]==='bi-pause'){
    btnPlay.classList.remove("bi-pause");
    btnPlay.classList.add("bi-play-fill");
    reproductor.play();
  }
}
function mute(){
  if(muteBtn.classList[1]==='bi-volume-up'){
    muteBtn.classList.remove("bi-volume-up");
    muteBtn.classList.add("bi-volume-mute");
    reproductor.muted=true;
  }else if(muteBtn.classList[1]==='bi-volume-mute'){
    muteBtn.classList.remove("bi-volume-mute");
    muteBtn.classList.add("bi-volume-up");
    reproductor.muted=false;
  }
}
function volumen(){
  var volumenValor="0."+btnVolumen.value;
  if(btnVolumen.value==10){
    volumenValor=1;
  }
  reproductor.volume=volumenValor;
}
function cambiarCancion(){
  reproductor.setAttribute("src", "musica/"+cancion.value);
  reproductor.play();
  var d = cancion.value.split(".");
  titulo.innerHTML = d[0];
  volumen();
}
function barraProg(){
  barProgreso.setAttribute("max", reproductor.duration);
  barProgreso.setAttribute("value", reproductor.currentTime);
}
setInterval(()=>{
  barProgreso.setAttribute("max", reproductor.duration);
  barProgreso.value = reproductor.currentTime;
},500);