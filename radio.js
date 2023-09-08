let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
    {
        name: "Hayatuna Radio - Tasikmalaya",
        image: "data:image/png;base64,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",
        path: "https://i.klikhost.com/8166/;?1693457048077"
    },
	 {
        name: "Nughazi Radio - Tasikmalaya",
        image: "https://yt3.googleusercontent.com/ytc/AOPolaR1CnPxAY1ypor41rgRS0Zdl-kpAXPA7UzZLgx4rA=s176-c-k-c0x00ffffff-no-rj",
        path: "	http://s32.myradiostream.com:19852/"
    },
	{
        name: "Quran Live Radio - Makkah al-Mukarramah",
        image: "https://static.mytuner.mobi/media/tvos_radios/gqd576zvdagj.jpg",
        path: "https://qurango.net/radio/tarateel"
    },
	{
        name: "KSA Sunnah Channel - Arab Saudi",
        image: "https://cdn.onlineradiobox.com/img/l/9/29939.v3.png",
        path: "http://mediaserver2.islamicity.com:8000/SaudiTVEnglish"
    },
	{
        name: "Bellasalam FM - Kota Tasikmalaya",
        image: "https://cdn.onlineradiobox.com/img/l/3/78073.v10.png",
        path: "http://listen.bellasalamfm.com:8760/;"
    },	
	{
        name: "Radio RRI Pro 3 - Jakarta",
        image: "https://cdn.onlineradiobox.com/img/l/5/18875.v8.png",
        path: "https://stream-node0.rri.co.id/streaming/14/9014/kbrn.mp3"
    },	
	{
        name: "El-Shinta - Jakarta",
        image: "https://cdn.onlineradiobox.com/img/l/2/18812.v14.png",
        path: "https://stream-ssl.arenastreaming.com:8000/jakarta"
    },
];
function loadTrack(track_index) {

    clearInterval(updateTimer);
    resetValues();

    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_art.style.backgroundImage =
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
        "" + (track_index + 1) + " dari " + track_list.length + " Channel ";

    updateTimer = setInterval(seekUpdate, 1000);
    "ended", (nextTrack);
}

function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function playpauseTrack() {

    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {

    curr_track.play();
    isPlaying = true;

    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;

    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length;

    loadTrack(track_index);
    playTrack();
}
function seekTo() {

    seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {

    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
loadTrack(track_index);
