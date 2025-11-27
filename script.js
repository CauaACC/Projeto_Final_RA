// Dados dos personagens
const cards = {
  card1: {
    model: "assets/models/card1.glb",
    stats: "ATK: 80 | DEF: 65 | SPD: 40",
  },
  card2: {
    model: "assets/models/card2.glb",
    stats: "ATK: 50 | DEF: 90 | SPD: 20",
  },
  card3: {
    model: "assets/models/card3.glb",
    stats: "ATK: 95 | DEF: 40 | SPD: 70",
  },
};

// Função para configurar cada marcador
function setupCard(markerId, modelId, statsId, data) {
  const marker = document.getElementById(markerId);
  const modelEntity = document.getElementById(modelId);
  const statsText = document.getElementById(statsId);

  marker.addEventListener("markerFound", () => {
    console.log(markerId, "detectado!");

    // Carregar modelo glb
    modelEntity.setAttribute("gltf-model", data.model);
    modelEntity.setAttribute("scale", "0.5 0.5 0.5");
    modelEntity.setAttribute("rotation", "0 0 0");

    // Rotação 360° contínua
    modelEntity.setAttribute("animation", {
      property: "rotation",
      to: "0 360 0",
      loop: true,
      dur: 3000,
      easing: "linear",
    });

    // Exibir modelo e stats
    modelEntity.setAttribute("visible", true);
    statsText.setAttribute("value", data.stats);
    statsText.setAttribute("visible", true);
  });

  marker.addEventListener("markerLost", () => {
    console.log(markerId, "perdido.");

    modelEntity.setAttribute("visible", false);
    statsText.setAttribute("visible", false);
  });
}

// Ativar cada card
setupCard("card1", "model1", "stats1", cards.card1);
setupCard("card2", "model2", "stats2", cards.card2);
setupCard("card3", "model3", "stats3", cards.card3);
