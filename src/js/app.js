$(document).ready(function(){

  var Character={
    aspects: {}
  };

  saveBasicInfo = function(){
    Character.playerName = $("#player-name").val();
    Character.characterName = $("#character-name").val();
    Character.template = $("#template").val();
    Character.musts = $("#musts").val();
    Character.aspects.highConcept = $("#highConcept").val();
    Character.aspects.trouble = $("#trouble").val();
    console.log(Character);
  };
  saveAspects = function () {
    Character.aspects.thing = $("#thing").val();
    console.log(Character);
  };

});