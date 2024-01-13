const API = 'https://jsonplaceholder.typicode.com/users';
const request = document.getElementById("#request");

request.addEventListener("click", () => {
    fetch(API)
        .then(res => res.json())
        .then(users => {
            
        })
        .catch(err => console.log(err))
})

var wavesurfer = WaveSurfer.create({
    container: "#audiowave",
    waveColor: "#E7D1D3",
    progressColor: "#1e594f",
    height: 45,
    responsive: true,
    hideScrollbar: true,
    cursorColor: "#E7D1D3",
    cursorWidth: 2,
    barWidth: 5,
    barGap: 1.5,
    skipLength: 5
});

wavesurfer.load("vibe-track.mp3");

$(".btn-toggle-pause").on("click", function() {
    wavesurfer.playPause();
});

$(".btn-backward").on("click", function() {
    wavesurfer.skipBackward();
});

$(".btn-forward").on("click", function() {
    wavesurfer.skipForward();
});

$(".btn-toggle-mute").on("click", function() {
    wavesurfer.toggleMute();
});

$(".btn-stop").on("click", function() {
    wavesurfer.stop();
});