// VARIABLES

let stepBackward = document.querySelector(".fa-step-backward");
let play = document.querySelector(".fa-play");
let stepForward = document.querySelector(".fa-step-forward");

carolIndex = 0;

// ADDING THE SONG

carols = [
  new Audio(
    "audio/Culita Sterp și frații Iancu, Geta, Ileana 🌲 Veste buna-n tot pamantul ❄️ COLAJ COLINDE ARDEAL.mp3"
  ),
  new Audio(
    "audio/Culiță Sterp și Carmen de la Sălciua - Departe de răsărit _ Pe strada din Viflaim COLAJ COLINDE 2018.mp3"
  ),
  new Audio(
    "audio/Culita Sterp si Iancu 🌲 Om bogat si om sarac ❄️ COLAJ COLINDE ARDEAL 2020-2021 (oficial video).mp3"
  ),
];

// EVENT LISTENERS

// stepBackward.addEventListener("click", (e) => {
//   console.log(e.target);
// });

play.addEventListener("click", (e) => {
  checkClass(e, "fa-pause");

  toggleClass(e, "fa-play", "fa-pause");
});

carols.forEach((element) => {
  element.addEventListener("ended", (e) => {
    if (carolIndex === carols.length - 1) {
      carolIndex = 0;
    } else {
      carolIndex++;
    }

    playSong(carols[carolIndex], 1000);
  });
});

// stepForward.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// ARROW FUNCTIONS

const playSong = (song, timeOut) => {
  setTimeout(() => {
    song.play();
  }, timeOut);
};

const stopSong = (song) => {
  song.pause();
};

const toggleClass = (element, firstClass, secondClass) => {
  element.target.classList.toggle(firstClass);
  element.target.classList.toggle(secondClass);
};

const checkClass = (e, Class) => {
  if (e.target.classList.contains(Class)) {
    stopSong(carols[carolIndex], 1000);
    return;
  }

  playSong(carols[carolIndex]);
};
