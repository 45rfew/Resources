
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

splitIntoTeams = () => {
  let teams = [
    {hue:180,x:-200,y:0}, {hue:0,x:200,y:0}
  ];
  for(let i = 0; i<game.ships.length; i++){
    let ship = game.ships[i];
    let team = i%2;
    ship.set({hue: teams[team].hue, team:team, x: teams[team].x, y: teams[team].y});
  }
};

onspawn = (ship) => {
  var teams = [
    {hue:180,x:-200,y:0}, {hue:0,x:200,y:0}
  ];
  for(var i = 0; i<game.ships.length; i++) var team = i%2;  
  ship.set({hue:teams[team].hue,team:team,x:teams[team].x,y:teams[team].y});
};

spawnSecondary = () => {
  var range = 10;
  var x = range * (Math.random()*2-1);
  var y = range * (Math.random()*2-1);
  var options = [10, 11, 12, 20, 21, 90, 91]; //secondary codes
  var spawnCode = options[Math.floor(Math.random()*options.length)];
  game.addCollectible({code:spawnCode,x:x,y:y});
};

this.options = {
  map_name: "TDM",
  map_size: 50,
  max_players: 20,
  custom_map: map,
  radar_zoom: 2,
  survival_level: 8,
  reset_tree: false,
  root_mode: "",
  asteroids_strength: 5,
  crystal_value: 0,
  friendly_colors: 2,
  lives: 0,
  starting_ship: 801,
};

this.tick = function(game){
  if (game.step % 30 === 0){
    for (let ship of game.ships){
      if (!ship.custom.init){
        ship.custom.init = true;
        onspawn(ship);
      }
    }
  }
  if (game.step % 60*15 === 0){
    spawnSecondary();
  }
};

this.event = function(event,game) {
  switch (event.name){
    case "ship_spawned":
      var ship = event.ship;
      var ship_level = Math.trunc(ship.type / 100);
      if (ship !== null){
        if (ship.team === 0) ship.set({x:-200,y:0,crystals:((ship_level||0)**2)*20});  
          else 
        if (ship.team === 1) ship.set({x:200,y:0,crystals:((ship_level||0)**2)*20});
      }
    break;
  }
};

