var Character = {
  aspects: {}
};

function saveBasicInfo() {
  Character.playerName = document.getElementById("player-name").value;
  Character.characterName = document.getElementById("character-name").value;
  Character.template = document.getElementById("template").value;
  Character.musts = document.getElementById("musts").value;
  Character.aspects.highConcept = document.getElementById("high-concept").value;
  Character.aspects.trouble = document.getElementById("trouble").value;
  console.log(Character);
}