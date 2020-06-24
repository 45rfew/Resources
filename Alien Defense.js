//Idea and ships made by Serendibite
//Coding done by Money

this.options = {
  root_mode: "team",
  friendly_colors: 1,
  map_size: 50,
  asteroid_strength: 0.3,
  radar_zoom: 1,
  crystal_value: 4,
  soundtrack: "argon.mp3",
  speed_mod: 1.2
};
 
function tick(game){  
  if (game.step % 3600 === 0){
    if (game.ships.length === 1||2){
      rip += 1;
      basetimer(game);
    } else {
      rip += ~~(game.ships.length/3); 
      basetimer(game);
    }
  }
  if (game.step % 30 === 0){
    var max = Math.max(12,Math.min(23,~~(game.ships.length*2.2))); 
    if (game.aliens.length < max){
      var aliens = [{code:11},{code:11,level:1},{code:17},{code:17,level:1}];
      var alien = aliens[~~(Math.random()*aliens.length)];
      alien.x = game.aliens[0].x+Math.cos(Math.random()*Math.PI*2)*10;
      alien.y = game.aliens[0].y+Math.sin(Math.random()*Math.PI*2)*10;
      game.addAlien(alien);
    }
    for (let ship of game.ships){
      if (!ship.custom.init){
        ship.custom.init = true;
        joinmessage(ship);
        basetimer(game);
      }
    }
    if (rip <= 79){
      game.setUIComponent({
        id: "wtf",
        position: [32,5,42-8,40-8],
        visible: true,
        components: [
          {type: "text",position:[0,0,80,33],value:"Your base is out of health!",color:"#fff"},
        ]
      });         
      for (let ship of game.ships) ship.gameover({"Try again next time!":""});
      game.modding.I1I0I.send({name:"stop"});     
    }
    for(var i=0; i<game.aliens.length; i++){  
      if (game.aliens[0].code == 19){
        //curry curry curry 
      } else {
        for (let alien of game.aliens) alien.set({kill:true});
        game.setUIComponent({
          id: "lol",
          position: [32,5,42-8,40-8],
          visible: true,
          components: [
            {type: "text",position:[0,0,80,33],value:"Purple Saucer has been killed",color:"#fff"},
            {type: "text",position:[0,14,80,33],value:"GG, thanks for playing!",color:"#fff"},
          ]
        });          
        setTimeout(function(){ //don't make functions within a loop well FUCK YOU  
          for (let ship of game.ships) ship.gameover({"Nice":""});
          game.modding.I1I0I.send({name:"stop"});
        },5000);        
      }
    }
  }
}
 
function game_start(game){
  if (!game.custom.init){
    game.custom.init = true;
    game.addAlien({code:19,level:2,crystals:4000,points:4000,x:250,y:250});
    for (let i=0; i<4; i++) game.addAlien({code:12,crystals:1000,points:1000,x:250,y:250});
  }
  this.tick = tick;
}
this.tick = game_start;

var rip = 1;

function basetimer(game){
  game.setUIComponent({
    id: "pogggggggg",
    position: [22,1,22,20],
    visible: true,
    components: [
      {type: "text",position:[0,0,80,33],value:"Station energy:",color:"#fff"},
      {type:"box",position:[1,34,79-rip,10],fill:"#00cc00"},
      {type:"box",position:[1,34,78,10],stroke:"#000",width:3}
    ]
  });   
}

function joinmessage(ship){
  ship.setUIComponent({
    id: "yeet",
    position: [32,8,42-8,40-8],
    visible: true,
    components: [
      {type: "text",position:[0,0,80,33],value:"Kill the purple Saucer to win",color:"#fff"},
      {type: "text",position:[0,16,80,33],value:"Good luck and have fun!",color:"#fff"},
    ]
  });      
  setTimeout(function(){  
    ship.setUIComponent({id:"yeet",visible:false});
  },5000);
}
