const cards = {
  card1: {
    model: "models/charA.glb",
    stats: "ATK: 70 | DEF: 50 | SPD: 45",
  },
  card2: {
    model: "models/cybertruck.glb",
    stats: "ATK: 60 | DEF: 70 | SPD: 90",
  },
  card3: {
    model: "models/sus.glb",
    stats: "ATK: 90 | DEF: 10 | SPD: 50",
  },
};

function setupCard(markerId, modelId, statsId, data) {
  const marker = document.getElementById(markerId);
  const modelEntity = document.getElementById(modelId);
  const statsText = document.getElementById(statsId);

  marker.addEventListener("markerFound", () => {
    modelEntity.setAttribute("gltf-model", data.model);
    modelEntity.setAttribute("scale", "1 1 1");
    modelEntity.setAttribute("rotation", "0 0 0");
    modelEntity.setAttribute(
      "animation",
      "property: rotation; to: 0 360 0; loop: true; dur: 3000; easing: linear"
    );

    modelEntity.setAttribute("visible", true);
    statsText.setAttribute("value", data.stats);
    statsText.setAttribute("visible", true);
  });

  marker.addEventListener("markerLost", () => {
    modelEntity.setAttribute("visible", false);
    statsText.setAttribute("visible", false);
  });
}

setupCard("charA", "model1", "stats1", cards.card1);
setupCard("cybertruck", "model2", "stats2", cards.card2);
setupCard("sus", "model3", "stats3", cards.card3);
