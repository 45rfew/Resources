//TODO: make the mod playable

this.options = {
  root_mode: "survival",
  asteroids_strength: 0.1,
  radar_zoom: 1,
  survival_time: 30,
  starting_ship: 801,
  choose_ship: [701,702,703,704],
  map_size: 30,
  survival_level: 8,
  crystal_value: 10,
  mines_self_destroy: false,
  weapons_store: false,
  max_level: 8,
  crystal_drop: 0
};

this.tick = function(game){
  if (game.step % 15 === 0){ 
    if (game.aliens.length < 295){
      game.addAlien({level:0,code:16,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360,crystal_drop:50});
      game.addAlien({level:1,code:16,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360,crystal_drop:100});
      game.addAlien({level:2,code:16,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360,crystal_drop:300});
    }
    if (game.collectibles.length < 45){
      for (let ship of game.ships)
      game.addCollectible({code:11+~~(Math.random()*2),x:ship.x,y:ship.y});
    }   
  }
  if (game.step % 1200 === 0) game.addAlien({level:3,code:16,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360,crystal_drop:1700});
};

this.event = function(event, game){
  let ship = event.ship;
  switch (event.name){
    case "ship_spawned":
      ship.set({crystals:980});
      break;
    case "alien_destroyed":
      let killer = event.killer;
      if (killer.custom_kills === undefined)
        killer.custom.kills = 0;
      else { 
        killer.custom.kills++;
        killer.setUIComponent({
          id: "count",
          position: [25,10,50,25],
          clickable: false,
          visible: true,
          components: [{type:"text",position:[0,0,100,20],color:"#cde",value:"Aliens killed: "+killer.custom.kills}]
        });
      }
      break;
    case "collectible_picked":
      ship.emptyWeapons();
      setTimeout(function(){ship.emptyWeapons();},100);
    break;    
  }
};
