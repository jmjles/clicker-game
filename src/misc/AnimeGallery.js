import anime from "animejs/lib/anime";

export const openGameInfo = open => {
  let width = [];
  open ? (width = [0, '100vw']) : (width = ['100vw', 0]);
  anime({
    targets: ".GameInfo",
    width,
    easing: "linear",
    duration: 300
  });
};

export const openCharacterSelection = open => {
  let width = [];
  open ? (width = [0, '100vw']) : (width = ['100vw', 0]);
  anime({
    targets: ".CharacterSelect",
    width,
    easing: "linear",
    duration: 300
  });
};
