const cards = {
  card1: {
    model: "models/charA.glb",
    stats: "ATK: 70 | DEF: 50 | SPD: 45",
    sound: "audio/charA.mp3",
  },
  card2: {
    model: "models/littleM.glb",
    stats: "ATK: 60 | DEF: 70 | SPD: 90",
    sound: "audio/littleM.mp3",
  },
  card3: {
    model: "models/sus.glb",
    stats: "ATK: 90 | DEF: 10 | SPD: 50",
    audio: "audio/sus.mp3",
  },
};

function setupCard(markerId, modelId, statsId, data) {
  const marker = document.getElementById(markerId);
  const modelEntity = document.getElementById(modelId);
  const statsText = document.getElementById(statsId);
  const sound = new Audio(data.sound);
  sound.volume = 1;

  marker.addEventListener("markerFound", () => {
    modelEntity.setAttribute("gltf-model", data.model);
    modelEntity.setAttribute("rotation", "0 0 0");

    modelEntity.setAttribute("visible", true);
    statsText.setAttribute("value", data.stats);
    statsText.setAttribute("visible", true);
    sound.currentTime = 2;
    sound.play();
  });

  marker.addEventListener("markerLost", () => {
    modelEntity.setAttribute("visible", false);
    statsText.setAttribute("visible", false);
    sound.pause();
    sound.currentTime = 0;
  });
}

setupCard("charA", "model1", "stats1", cards.card1);
setupCard("littleM", "model2", "stats2", cards.card2);
setupCard("sus", "model3", "stats3", cards.card3);
