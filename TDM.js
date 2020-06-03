var map = 
"99999999999999999999999999999999999999999999999999\n"+
"99999999999999999999999999999999999999999999999999\n"+
"99                                              99\n"+
"99                       9999999                99\n"+
"99  999       999999                       999  99\n"+
"99  919                                    919  99\n"+
"99  999                            1       999  99\n"+
"99       1               1           1          99\n"+
"99                                              99\n"+
"99           7                                  99\n"+
"99           7          111    9    7           99\n"+
"99                             9              1 99\n"+
"99    1      7                 9    7           99\n"+
"99           77     77 7            1           99\n"+
"99     1                                        99\n"+
"99     1                                        99\n"+
"99      1                                       99\n"+
"99                                              99\n"+
"999999            99          99    8888    999999\n"+
"999999         1  99999    99999    8       999999\n"+
"956788             99999  99999       1     887659\n"+
"9          8888    99999  99999        1         9\n"+
"9                  99999  99999                  9\n"+
"9                   999    999                   9\n"+
"9                                                9\n"+
"9           1                                    9\n"+
"9                   999    999                   9\n"+
"9                  99999  99999                  9\n"+
"9                  99999  99999                  9\n"+
"956788       8     99999  99999    9   88   887659\n"+
"999999            99999    99999   9   8    999999\n"+
"999999  2    8    99          99   9        999999\n"+
"99       9      9                        91     99\n"+
"99     2 92     9                  9    191     99\n"+
"99     99       9                         1     99\n"+
"99      2  2     99                     191     99\n"+
"99   1   2            222 11 1          111 9   99\n"+
"99                   1262                   9   99\n"+
"99         9          262        77             99\n"+
"99        99                7777        1   9   99\n"+
"99        99          262                   99  99\n"+
"99        99          262          22           99\n"+
"99         9          222        2     1        99\n"+
"99  999    9   7777             22         999  99\n"+
"99  919        77 77   1        2          919  99\n"+
"99  999                  9 99   2   999    999  99\n"+
"99                                 1            99\n"+
"99                                              99\n"+
"99999999999999999999999999999999999999999999999999\n"+
"99999999999999999999999999999999999999999999999999";

this.options = {
  custom_map: map,
  map_size: 50,
  max_players: 20,
  radar_zoom: 2,
  survival_level: 8,
  reset_tree: false,
  root_mode: "",
  asteroids_strength: 5,
  crystal_value: 0,
  friendly_colors: 2,
  lives: 0,
  starting_ship: 801,
  weapons_store: false,
  soundtrack: "argon.mp3"
};

function distance(x, y){
  return Math.sqrt(x*x+y*y);
}

function checkteambase(){
  for (let ship of game.ships){
    if (ship.team === 0){
      if (ship.x > 185 && ship.x < 240 && Math.abs(ship.y) < 35) echo("team red base");
    } else if (ship.team === 1){
      if (ship.x > -185 && ship.x < -240 && Math.abs(ship.y) < 35) echo("team blue base");
    }  
  }
}

colors=[0,180];

killstats = {
  id: "info",
  position: [2.5,29,60,100],
  clickable: false,
  visible: true,
  components: []
};

var scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
};

function showkills (game,event){
  let s,defclr="#FFFFFF",pln={text:event.ship.name,color:`hsla(${colors[event.ship.team]},100%,50%,1)`};
  if (Object.is(event.killer,null)) 
  s= [
    pln,
    {text:"committed suicide",color:defclr},
    {text:"",color:defclr}
  ]; 
  else
  s= [
    {text:event.killer.name,color:`hsla(${colors[event.killer.team]},100%,50%,1)`},
    {text:"🗡️",color:defclr},
    pln
  ];
  let size=0,line=killstats.components.length/3;
  for (let i=0;i<s.length;i++){
    let text = " "+s[i].text+" ";
    killstats.components.push(
      {type:"text",position:[size,(line+1)*5,text.length,20],value:text,color:s[i].color}
    );
    size+=text.length;
  }
  console.log(killstats);
  for (let ship of game.ships) ship.setUIComponent(killstats);
}

var redpoints = 0, bluepoints = 0, gamelength = 5;
function update(game){
  for (let ship of game.ships){
    ship.setUIComponent({
      id: "points",
      position: [40,6,22,20],
      visible: true,
      components: [
        {type: "text",position:[-20,0,80,33],value:`Red ${redpoints}`,color:"#ff0000"},
        {type: "text",position:[4,0,80,33],value:`-`,color:"#fff"},
        {type: "text",position:[30,0,80,33],value:`${bluepoints} Blue`,color:"#0000ff"},
      ]
    });
  }  
}

function resetgame(game){
  let team, color, text;
  if (redpoints > bluepoints){
    text = "Game finished! Red time wins!"; color = "#ff0000";
    } else if (redpoints < bluepoints){
    text = "Game finished! Blue team wins!"; color = "#0000ff"; 
  } else text = "Game finished! It's a draw!"; color = "#fff";
  for (let ship of game.ships){
    ship.setUIComponent({
      id: "gamestat",
      position: [32,26,42,40],
      visible: true,
      components: [
        {type: "text",position:[0,0,80,33],value:text,color:color},
      ]
    });
  }   
  gamelength += 5; 
  splitIntoTeams();
}

function chooseship(ship){
  for (let ship of game.ships){
    ship.setUIComponent({ 
      id: "ship choice text", position: [39,22,22,50], visible: true,
      components: [
        { type: "text",position:[0,0,100,60],value:"Choose your ship for this round",color:"#FFFFFF"},
      ]
    });    
    ship.setUIComponent({
      id: "ship choice1", position: [22.5,39,22,45], clickable: true, visible: true,
      components: [
        { type:"box",position:[0,0,100,100],fill:"#00000000",stroke:"#fff",width:10},
        { type: "text",position:[0,0,100,60],value:"ship",color:"#FFFFFF"},
      ]
    });    
    ship.setUIComponent({ 
      id: "ship choice2", position: [55,39,22,45], clickable: true, visible: true,
      components: [
        { type:"box",position:[0,0,100,100],fill:"#00000000",stroke:"#fff",width:10},
        { type: "text",position:[0,0,100,60],value:"ship",color:"#FFFFFF"},
      ]
    });        
  }
}

function splitIntoTeams(){
  let teams = [
    {hue:0,x:200,y:0}, {hue:180,x:-200,y:0} 
  ];
  for(let i=0; i<game.ships.length; i++){
    let ship = game.ships[i];
    let team = i%2;
    ship.set({hue:teams[team].hue,team:team,x:teams[team].x,y:teams[team].y});
  }
}

function setteam(ship){
  var teams = [
    {hue:0,x:200,y:0}, {hue:180,x:-200,y:0} 
  ];
  for(var i = 0; i<game.ships.length; i++) var team = i%2;  
  ship.set({hue:teams[team].hue,team:team,x:teams[team].x,y:teams[team].y});
}

function spawnSecondary(){
  var range = 10;
  var x = range * (Math.random()*2-1);
  var y = range * (Math.random()*2-1);
  var options = [10,10,11,90,90,91];
  var spawnCode = options[Math.floor(Math.random()*options.length)];
  game.addCollectible({code:spawnCode,x:x,y:y});
}

this.tick = function (game){
  if (game.step % 30 === 0){
    for (let ship of game.ships){
      if (!ship.custom.init){
        ship.custom.init = true;
        setteam(ship);
      }
    }
    update(game);
    var gametimer = gamelength * 3600;
    if (game.step % 30 === 0){
      if (game.step <= gametimer){
        var steps = gametimer - game.step;
        var minutes = Math.floor(steps / 3600);
        var seconds = Math.floor((steps % 3600) / 60);
        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        for (let ship of game.ships){
          ship.setUIComponent({
            id: "timer",
            position: [3,28,17,15],
            visible: true,
            components: [
              {type: "text",position:[0,0,80,33],value:`Time left: ${minutes}:${seconds}`,color:"#fff"},
            ]
          });
        }
      } else {
        resetgame(game);
      }
    }        
  }
  if (game.step % 300 === 0){
    killstats.components.splice(0,3);
    for (let i=0;i<killstats.components.length;i++) killstats.components[i].position[1]-=5;
    for (let ship of game.ships) ship.setUIComponent(killstats);
  }
  if (game.step % 700 === 0) spawnSecondary();
};

this.event = function (event,game){
  switch (event.name){
    case "ship_spawned":
      var ship = event.ship;
      var ship_level = Math.trunc(ship.type / 100);
      if (ship !== null){
        if (ship.team === 0) ship.set({x:200,y:0,crystals:((Math.round(ship_level||0)**2)*20/3),invulnerable:20});  
          else 
        if (ship.team === 1) ship.set({x:-200,y:0,crystals:((Math.round(ship_level||0)**2)*20/3),invulnerable:200});
      }
    break;    
    case "ship_destroyed":
      showkills(game,event);
      echo(event);
      if (event.killer.team === 0){
        redpoints++;
      } else if (event.killer.team === 1){
        bluepoints++;
      }
    break;
  }
};
