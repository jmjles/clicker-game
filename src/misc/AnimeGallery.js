import anime from "animejs/lib/anime";

export const openGameInfo = open => {
  const windowWidth = document.getElementsByClassName("GameInfo")[0]
    .clientWidth;
  let width = [];
  open ? (width = [windowWidth, 1300]) : (width = [windowWidth, 0]);
  anime({
    targets: ".GameInfo",
    width,
    easing: "linear",
    duration: 1000
  });
};

export const openCharacterSelection = open => {
  const windowWidth = document.getElementsByClassName("CharacterSelect")[0]
    .clientWidth;
  let width = [];
  open ? (width = [windowWidth, 1300]) : (width = [windowWidth, 0]);
  anime({
    targets: ".CharacterSelect",
    width,
    easing: "linear",
    duration: 1000
  });
};
