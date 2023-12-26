const allSongs = [
  {
    id: 1,
    name: "Arabic Music",
    artist: "White Records",
    img: String.raw`songs\Cover-Img\arab-music.jpg`,
    genre: "Hip Hop",
    source: String.raw`songs\arabic-music-hip-hop.mp3`,
  },
  {
    id: 2,
    name: "Aspire",
    artist: "Audio Coffee",
    img: String.raw`songs\Cover-Img\aspire.jpg`,
    genre: "Romantic",
    source: String.raw`songs\aspire-111789.mp3`,
  },
  {
    id: 3,
    name: "Tropical House Funny-1",
    artist: "Urban Legend",
    img: String.raw`songs\Cover-Img\tropical-house-funny-1.jpg`,
    genre: "Party",
    source: String.raw`songs\background-music-tropical-house-funny-dance-short-music-for-video-160880.mp3`,
  },
  {
    id: 4,
    name: "Tropical House Funny-2",
    artist: "Urban Legend",
    img: String.raw`songs\Cover-Img\tropical-house-funnny-2.jpg`,
    genre: "Party",
    source: String.raw`songs\background-music-tropical-house-funny-dance-short-music-for-vlog-166616.mp3`,
  },
  {
    id: 5,
    name: "Dead By Daylight",
    artist: "Jerry Green",
    img: String.raw`songs/Cover-Img/dead-by-daylight.jpg`,
    genre: "Hip Hop",
    source: String.raw`songs\dead-by-daylight-10243.mp3`,
  },
  {
    id: 6,
    name: "Emotional Cinematic",
    artist: "Grande Project",
    img: String.raw`songs\Cover-Img\emotional-cinematic.jpg`,
    genre: "Romantic",
    source: String.raw`songs\emotional-cinematic-130481.mp3`,
  },
  {
    id: 7,
    name: "Tango",
    artist: "Yellow Records",
    img: String.raw`songs\Cover-Img\tango.jpg`,
    genre: "Hip Hop",
    source: String.raw`songs\funny-background-tango-hip-hop-music-for-vlog-video-1-minute-151674.mp3`,
  },
  {
    id: 8,
    name: "Inspirational",
    artist: "Audio Coffee",
    img: String.raw`songs\Cover-Img\inspirational.jpg`,
    genre: "Party",
    source: String.raw`songs\inspirational-background-112290.mp3`,
  },
  {
    id: 9,
    name: "Let's Get This Done",
    artist: "Geoff Harvey",
    img: String.raw`songs\Cover-Img\lets-get-this-done.webp`,
    genre: "Party",
    source: String.raw`songs\letx27s-get-this-done-154533.mp3`,
  },
  {
    id: 10,
    name: "Successful Enterprise",
    artist: "Play Sound",
    img: String.raw`songs\Cover-Img\successfull-enterprise.jpg`,
    genre: "Romantic",
    source: String.raw`songs\successful-enterprise-173009.mp3`,
  },
  {
    id: 11,
    name: "The Sacrifice",
    artist: "Geoff Green",
    img: String.raw`songs\Cover-Img\the-sacrifece.webp`,
    genre: "Hip Hop",
    source: String.raw`songs\the-sacrifice-9829.mp3`,
  },
  {
    id: 12,
    name: "Warm Rain",
    artist: "Karan Aujla",
    img: String.raw`songs\Cover-Img\warm-rain.webp`,
    genre: "Hip Hop",
    source: String.raw`songs\warm-rain-145528.mp3`,
  },
];
const songSection = document.getElementById("songs-div");
const genreOption = document.getElementById("filter-selector-dropdown");
const previewImg = document.getElementById("song-play-img");
const audioTag = document.getElementById("audio-tag");
const audioSrc = document.getElementById("audio-src");
const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const darkThemeButton = document.getElementById("dark-theme-checkbox");
const navBar = document.querySelector("nav");
const allSongsDiv = document.getElementById("all-songs");
const songPlaySection = document.getElementById("song-play-section");
const imgDiv = document.getElementById("song-play-img-div");
const playlistSection = document.getElementById("playlist-section");
const newPlaylistName = document.getElementById("playlist-name-input");
const createPlaylistBtn = document.getElementById("create-playlist-btn");
const allPlaylistSection = document.getElementById("playlist-div");
const currentPlaylistContent = document.getElementById("current-playlist-content");
const addToPlaylistBtn = document.getElementById('add-to-playlist-btn');
const fwdSeek = document.getElementById('seek-fwd');
const revSeek = document.getElementById('seek-rev');
const songPlayList = [];
let selectedPlaylist = "";
let playlistId = 0;
let seekList = [];
let currentSong =   {
    id: 3,
    name: "Tropical House Funny-1",
    artist: "Urban Legend",
    img: String.raw`songs\Cover-Img\tropical-house-funny-1.jpg`,
    genre: "Party",
    source: String.raw`songs\background-music-tropical-house-funny-dance-short-music-for-video-160880.mp3`,
  };
// array for all playlists
let allPlaylist = [];
showSongs("All");
genreOption.addEventListener("change", (event) => {
  showSongs(event.target.value);
});
// For song section
function showSongs(option) {
  songSection.innerHTML = "";
    seekList = [];
  if (option === "All") {
    allSongs.forEach((song) => {
      seekList.push(song);
      const newSong = document.createElement("button");
      newSong.textContent = song.name;
      newSong.classList.add("song");
      songSection.append(newSong);
      newSong.addEventListener("click", () => renderCurrentsong(song));
    });
  } else {
    allSongs.forEach((song) => {
      if (song.genre === option) {
        seekList.push(song);
        const newSong = document.createElement("button");
        newSong.textContent = song.name;
        newSong.classList.add("song");
        songSection.append(newSong);
        newSong.addEventListener("click", () => renderCurrentsong(song));
      }
    });
  }
  console.log(seekList);
}

// For playlist section

function renderPlaylistSong(playlist) {
  currentPlaylistContent.innerHTML = "";
  selectedPlaylist = playlist;
  playlist.songs.forEach((song) => {
    const newSong = document.createElement("button");
    newSong.textContent = song.name;
    newSong.classList.add("song");
    currentPlaylistContent.append(newSong);
    newSong.addEventListener("click", ()=>renderCurrentsong(song));
  });
}
// Render current song
function renderCurrentsong(song){
  currentSong = song;
    songName.textContent = song.name;
    artistName.textContent = song.artist;
    previewImg.src = song.img;
    audioTag.src = song.source;
    audioTag.load();
    audioTag.play();
}

// Dark theme
darkThemeButton.addEventListener("change", (event) => {
  if (event.target.value === "off") {
    event.target.value = "on";
    toggleTheme("on");
  } else {
    event.target.value = "off";
    toggleTheme("off");
  }
});
function toggleTheme(event) {
  if (event == "on") {
    navBar.classList.add("bg-body-tertiary");
    navBar.classList.remove("bg-body-dark");
    document.querySelector("body").classList.remove("dark-color");
    allSongsDiv.style.backgroundColor = "#B6F9C9";
    songPlaySection.style.backgroundColor = "#B6F9C9";
    playlistSection.style.backgroundColor = "#B6F9C9";
    imgDiv.style.backgroundColor = "#11D047";
    document.getElementById("song-name").style.color = "black";
    document.getElementById("artist-name").style.color = "black";
  } else {
    navBar.classList.remove("bg-body-tertiary");
    navBar.classList.add("bg-body-dark");
    document.querySelector("body").classList.add("dark-color");
    allSongsDiv.style.backgroundColor = "#94958B";
    songPlaySection.style.backgroundColor = "#94958B";
    playlistSection.style.backgroundColor = "#94958B";
    document.getElementById("song-name").style.color = "white";
    document.getElementById("artist-name").style.color = "white";
    imgDiv.style.backgroundColor = "#20201D";
  }
}

// Working of create playlist
function createPlaylist(){
    if(newPlaylistName.value == ''){
      alert("value empty");
    }
    else{
      let playlist = {
          playlistName: newPlaylistName.value,
          songs: [],
          playlist_id: ++playlistId,
        };
        console.log(playlist.playlist_id);
        allPlaylist.push(playlist);
        const newPlaylist = document.createElement("button");
        newPlaylist.classList.add("song");
        newPlaylist.textContent = newPlaylistName.value;
        newPlaylistName.value = "";
        allPlaylistSection.append(newPlaylist);
        newPlaylist.addEventListener("click", ()=>renderPlaylistSong(playlist));
    }
  
  }

// Working of add to playlist button
function addtoPlaylist(){
    if(selectedPlaylist == ''){
        alert('please select a playlist');
    }
    else{
        if(selectedPlaylist.songs.includes(currentSong, 0)){
            alert('song already exists in the playlist');
        }
        else{
            selectedPlaylist.songs.push(currentSong);
        }
        renderPlaylistSong(selectedPlaylist);
    }
}
// Seek forward function
function seekFWD(){
  if(selectedPlaylist!=''){
    let playlistSongs = selectedPlaylist.songs;
    let currIndex = playlistSongs.findIndex((song)=>{
      return currentSong.id == song.id;
    });
    let nextIndex = ++currIndex % playlistSongs.length;
    renderCurrentsong(selectedPlaylist.songs[nextIndex]);
  }
  else{
    let playlistSongs = seekList;
    let currIndex = playlistSongs.findIndex((song)=>{
      return currentSong.id == song.id;
    });
    let nextIndex = ++currIndex % playlistSongs.length;
    renderCurrentsong(seekList[nextIndex]);
  }
}
// Seek reverse function
function seekREV(){
  if(selectedPlaylist!=''){
  let playlistSongs = selectedPlaylist.songs;
    let currIndex = playlistSongs.findIndex((song)=>{
      return currentSong.id == song.id;
    });
    let nextIndex = 0;
  
    if(currIndex<=0){
      if(playlistSongs.length>=2){
      nextIndex = playlistSongs.length-1;
      }
      else{
        nextIndex = 0;
      }
    }
    else{
      nextIndex = --currIndex % playlistSongs.length;
    }

    renderCurrentsong(selectedPlaylist.songs[nextIndex]);
  }
  else{
    let playlistSongs = seekList;
    let currIndex = playlistSongs.findIndex((song)=>{
      return currentSong.id == song.id;
    });
    let nextIndex = 0;
  
    if(currIndex<=0){
      if(playlistSongs.length>=2){
      nextIndex = playlistSongs.length-1;
      }
      else{
        nextIndex = 0;
      }
    }
    else{
      nextIndex = --currIndex % playlistSongs.length;
    }

    renderCurrentsong(seekList[nextIndex]);
  }
  
}
// Event handler for add to playlist
addToPlaylistBtn.addEventListener('click', addtoPlaylist);
// Event handler for create playlist
createPlaylistBtn.addEventListener("click", createPlaylist);
// Event handler for forward and reverse seek
fwdSeek.addEventListener('click', seekFWD);
revSeek.addEventListener('click', seekREV);