function retroceder() {
    const video2 = document.getElementById("audio1");
    video2.currentTime = 0;
}
function play() {
    const video2 = document.getElementById("audio1");
    const foto = document.getElementById("play").src;
    console.log(foto)
    const teste = window.location.origin + "/img/play.png"
    console.log(teste)
    if (foto === window.location.origin + "/img/play.png") {
        video2.play();
        document.getElementById("play").src = "./img/pause.png";
    } else {
        video2.pause();
        document.getElementById("play").src = "./img/play.png";
    }

}
