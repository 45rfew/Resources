this.options = {
  root_mode: "survival",
  asteroids_strength: 0.1,
  radar_zoom: 1,
  survival_time: 69,
  starting_ship: 704,
  map_size: 30,
  survival_level: 8,
  crystal_value: 10,
  mines_self_destroy: false,
  weapons_store: true,
  max_level: 8,
};

function tick(game){
  if (game.step % 15 === 0){ 
    if (game.aliens.length < 295){
      game.addAlien({level:0,code:16,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360,crystal_drop:50});
      game.addAlien({level:1,code:16,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360,crystal_drop:100});
      game.addAlien({level:2,code:16,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360,crystal_drop:300});
    }
    if (game.collectibles.length < 45){
      game.addCollectible({code:12,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360});
    }   
  }
  for (let i=0; i<game.aliens.length; i++){
    //game.aliens[i].set({kill:true});
  }
  const fatboi = [{code:16,level:3}];
  let fatboilive = false;
  if (game.step % 30 === 0){
    for (let alien of game.aliens){
      for (let i = 0; i<fatboi.length; i++){
        if (alien.code == fatboi[i].code && alien.level == fatboi[i].level){
          fatboilive = true;
        }
      }
    }
    if (fatboilive){
    } else {
      game.addAlien({level:3,code:16,x:Math.cos(Math.random() * Math.PI * 2) * 360,y:Math.sin(Math.random() * Math.PI * 2) * 360,crystal_drop:1700});
    }
  }
}

function game_start(game){
  if (!game.custom.init){
    game.custom.init = true;
    echo("No u");
  }
  this.tick = tick;
}
this.tick = game_start;
 
this.event = function(event, game){
  switch (event.name){
    case "alien_destroyed":
      let killer = event.killer;
      if (killer.custom_kills === undefined){
        killer.custom_kills = 0;
      }
      else{ 
        killer.custom_kills++;
        killer.setUIComponent({
          id:"whatnou",
          position:[25,10,50,25],
          clickable: false,
          visible: true,
          components: [
            { type: "text",position: [0,0,100,20],color: "#FFFFFF",value: "Aliens killed:" + killer.custom_kills}
          ]
        });
      }
    break;
  }
};
