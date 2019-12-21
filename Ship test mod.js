let ships = [];

ships.push();
 
this.options = {
  ships: ships,
  root_mode: "survival",
  map_size: 30,
  asteroids_strength: 0,
  crystal_value: 10
};

let reset_button = {
  id: "reset",
  position: [2,30,8,14],
  clickable: true,
  visible: true,
  components: [
    {type: "text",position:[10,15,80,30],value:"Reset",color:"#ffffff"}
  ]
};

this.tick = function(game){
  if (game.step % 60 === 0){
    for (let ship of game.ships){
      if (!ship.custom.reset_button_installed){
        ship.custom.reset_button_installed = true;
        ship.setUIComponent(reset_button);
      }
    }
  }
};

this.event = function(event,game){
  switch (event.name){
    case "ui_component_clicked":
      let ship = event.ship;
      let component = event.id;
      if (component == "reset"){
        ship.set({type:101});
      }
    break;
  }
};
