const btn = document.getElementById("toggleAudio");
const player = document.getElementById("yt-audio");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    // Reproduce
    player.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
    btn.style.background = "url('full.png') no-repeat center/contain"; // cambia imagen
  } else {
    // Pausa
    player.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
    btn.style.background = "url('empty.png') no-repeat center/contain"; // vuelve a la original
  }
  isPlaying = !isPlaying;
});
