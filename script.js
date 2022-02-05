function retroceder(){
    const video2 = document.getElementById("audio1");
    video2.currentTime = 0;
}
function play(){
    const video2 = document.getElementById("audio1");
    const foto = document.getElementById("play").src;
    console.log(foto)
    if(foto === "http://127.0.0.1:5500/img/play.png"){
        video2.play();
        document.getElementById("play").src="./img/pause.png";
        console.log(foto)
    }else{
        video2.pause();
        document.getElementById("play").src="./img/play.png";
    }

}
