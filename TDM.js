/*TDM mod! 
Coding - Money & Bhpsngum
Author of idea - L.gaming & Nex
Changelog 0.5.1:
- Added ship selection screens - only 2 ships avalible currently 
- Torp rarity buffed 
- Added leaderboard 
- Added chat
- Added base background 
- Round length increased to 6 minutes 
 Bug fixes:
- Score count resets after each round
- Fixed spawning, hues 
- Fixed round over message
- Ship spawns with full shield
*/
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
"999999             99999  99999       1     999999\n"+
"9          8888    99999  99999        1         9\n"+
"9                  99999  99999                  9\n"+
"9                   999    999                   9\n"+
"9                                                9\n"+
"9           1                                    9\n"+
"9                   999    999                   9\n"+
"9                  99999  99999                  9\n"+
"9                  99999  99999                  9\n"+
"999999       8     99999  99999    9   88   999999\n"+
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

var vocabulary = [
  {text: "Yes", icon:"\u004c", key:"Y"},
  {text: "No", icon:"\u004d", key:"N"},
  {text: "Defend", icon:"\u0025", key:"D"},
  {text: "Kill", icon:"\u007f", key:"K"},
  {text: "Sorry", icon:"\u00a1", key:"S"},
  {text: "Thanks", icon:"\u0041", key:"X"},
  {text: "You", icon:"\u004e", key:"I"},
  {text: "Me", icon:"\u004f", key:"E"},
  {text: "No Problem", icon:"\u0047", key:"P"},
  {text: "Attack", icon:"\u0049", key:"A"},
  {text: "Help", icon:"\u004a", key:"H"},
  {text: "Hmmm?", icon:"\u004b", key:"Q"},
  {text: "GoodGame", icon:"\u00a3", key:"G"},
  {text: "Wait", icon:"\u0048", key:"T"},
  {text: "Base", icon:"\u0034", key:"B"},
  {text: "Follow", icon:"\u0050", key:"F"},

],colors=[0,240];

this.options = {
  custom_map: map,
  vocabulary: vocabulary,
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
  weapons_store: false,
  soundtrack: "argon.mp3",
  hues: colors,
  speed_speed: 1.2
};

function distance(x,y){
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

function getcolor(color){
  return `hsla(${color},100%,50%,1)`;
}

killstats = {
  id: "info",
  position: [2.5,29,60,100],
  clickable: false,
  visible: true,
  components: []
};
  
scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
};

function showkills (game,event){
  let s,defclr="#FFFFFF",pln={text:event.ship.name,color:getcolor(colors[event.ship.team])};
  if (Object.is(event.killer,null))
  s= [
    pln,
    {text:"committed suicide",color:defclr},
    {text:"",color:defclr}
  ];
  else
  s= [
    {text:event.killer.name,color:getcolor(colors[event.killer.team])},
    {text:"🗡️",color:defclr},
    pln
  ];
  let size=0,line=killstats.components.length/3;
  for (let i=0;i<s.length;i++)
  {
    let text = " "+s[i].text+" ";
    killstats.components.push(
      {type:"text",position:[size,(line+1)*5,text.length,20],value:text,color:s[i].color}
    );
    size+=text.length;
  }
  console.log(killstats);
  for (let ship of game.ships) ship.setUIComponent(killstats);
  setTimeout(function(){
    killstats.components.splice(0,3);
    for (let i=0;i<killstats.components.length;i++) killstats.components[i].position[1]-=5;
    for (let ship of game.ships) ship.setUIComponent(killstats);
  },5000);
}

PlayerBox = function(posx,posy) {
  return { type:"box",position:[posx,posy-1.5,50,7],fill:"#384A5C",width:2};
};

Tag = function(indtext,param,posx,posy,hex,al,size) {
  let obj= {type: indtext,position: [posx,posy,50-(size||0),5],color: hex,align:al};
  switch(indtext) {
    case "text":
      obj.value=param;
      break;
    case "player":
      obj.id=param;
      break;
  }
  return obj;
};

sort = function(arr) {
  let array=[...arr],i=0;
  while (i<array.length-1) {
    if (array[i].score<array[i+1].score) {
      array[i+1]=[array[i],array[i]=array[i+1]][0];
      if (i>0) i-=2;
    }
    i++;
  }
  return array;
};

function updatescoreboard(game){
  let t=[[],[]];
  for (let ship of game.ships) t[ship.team].push(ship);
  scoreboard.components = [
    { type:"box",position:[0,0,50,8],fill:getcolor(colors[0])},
    { type: "text",position: [0,0,50,8],color: "#FFF",value: "Red"},
    { type:"box",position:[50,0,50,8],fill:getcolor(colors[1])},
    { type: "text",position: [50,0,50,8],color: "#FFF",value: "Blue"}
  ];
  let sc=[sort(t[0]),sort(t[1])],line=1;
  sc[0].slice(10);sc[1].slice(10);
  for (let i=0;i<10;i++){
    for (let j=0;j<2;j++){
      if (sc[j][i]) scoreboard.components.push(
        new Tag("text",sc[j][i].score,j*50,line*10,"#FFFFFF","right",2),
        new Tag("player",sc[j][i].id,j*50,line*10,"#FFFFFF","left")
      );
      else scoreboard.components.push({},{});
    }
    line++;
  }
  console.log(scoreboard);
  outputscoreboard(game,sc);
}

function outputscoreboard(game,tm){
  let origin =[...scoreboard.components];
  for (let ship of game.ships){
    let j=0,team=tm[ship.team];
    for (j=0;j<team.length;j++){
      if (ship.id === team[j].id){
        console.log((j*2+ship.team)*2+1);
        scoreboard.components.splice((j*2+ship.team)*2+4,0,
          new PlayerBox(ship.team*50,(j+1)*10)  
        );
        break;
      }
    }
    if (j == team.length) scoreboard.components.splice((20+ship.team)*2,2,
      new PlayerBox(ship.team*50,90),
      new Tag("text",ship.score,ship.team*50,90,ship.team,"right",2),
      new Tag("player",ship.id,ship.team*50,90,ship.team,"left")
    );
    ship.setUIComponent(scoreboard);
    console.log(JSON.stringify(scoreboard));
    scoreboard.components = [...origin];
  }
}

var redpoints = 0, bluepoints = 0, gamelength = 6.3;
function updatescore(game){
  for (let ship of game.ships){
    ship.setUIComponent({
      id: "points",
      position: [40,6,26,20],
      visible: true,
      components: [
        {type: "text",position:[-20,0,80,33],value:`Red ${redpoints}`,color:"#ff0000"},
        {type: "text",position:[4,0,80,33],value:`-`,color:"#fff"},
        {type: "text",position:[30,0,80,33],value:`${bluepoints} Blue`,color:"#0000ff"},
      ]
    });
  }  
}

function splitIntoTeams(){
  /*let teams = [
    {hue:0,x:200,y:0}, {hue:240,x:-200,y:0} 
  ];
  for(let i=0; i<game.ships.length; i++){
    let ship = game.ships[i];
    let team = i%2;
    ship.set({hue:teams[team].hue,team:team,x:teams[team].x,y:teams[team].y});*/

  for (let ship of game.ships){ 
    var ship_level = Math.trunc(ship.type / 100);    
    if (ship.team === 0){
      ship.set({x:220,y:0,vx:0,invulnerable:500});
    } else if (ship.team === 1){
      ship.set({x:-220,y:0,vx:0,invulnerable:600,hue:240});
    }
    updatescoreboard(game);
  }
}

function setteam(ship){
  /*var teams = [
    {hue:0,x:200,y:0}, {hue:240,x:-200,y:0} 
  ];
  for(var i = 0; i<game.ships.length; i++) var team = i%2;  
  ship.set({hue:teams[team].hue,team:team,x:teams[team].x,y:teams[team].y});*/
  var ship_level = Math.trunc(ship.type / 100);  
  if (ship.team === 0){
    ship.set({x:220,y:0,stats:88888888,invulnerable:600});
    ship.set({crystals:((Math.round(ship_level||0)**2)*20/3)});
  } else if (ship.team === 1){
    ship.set({x:-220,y:0,stats:88888888,crystals:((Math.round(ship_level||0)**2)*20/3),invulnerable:600,hue:240});
    ship.set({crystals:((Math.round(ship_level||0)**2)*20/3)});
  }  
}

function spawnSecondary(){
  var range = 10;
  var x = range * (Math.random()*2-1);
  var y = range * (Math.random()*2-1);
  var options = [10,10,10,11,11,12,20,21,90,90,90,91,91];
  var spawnCode = options[Math.floor(Math.random()*options.length)];
  game.addCollectible({code:spawnCode,x:x,y:y});
}

function resetgame(game){
  let team, color, text;
  if (redpoints > bluepoints){
    text = "Game finished! Red team wins!"; color = "#ff0000";
    } else if (redpoints < bluepoints){
    text = "Game finished! Blue team wins!"; color = "#0000ff"; 
  } else text = "Game finished! It's a draw!"; color = "#fff";
  for (let ship of game.ships){
    ship.setUIComponent({
      id: "gamestat",
      position: [32,18,42,40],
      visible: true,
      components: [
        {type: "text",position:[0,0,80,33],value:text,color:color},
      ]
    });
    ship.frag = 0; redpoints = 0; bluepoints = 0;
  } 
  setTimeout(function(){
    for (let ship of game.ships){
      ship.setUIComponent({id: "gamestat", visible: false});      
      selectship(ship);
    }   
  }, 5000);  
}

function selectship(ship){
  ship.custom.shiped = false;
  ship.set({idle:true});
  ship.setUIComponent({ 
    id: "ship text", position: [39,20,22,50], visible: true,
    components: [
      { type: "text",position:[0,0,100,60],value:"Choose your ship for this round",color:"#FFFFFF"},
    ]
  });   
  ship.setUIComponent({
    id: "ship1", position: [22.5,39,22,45], clickable: true, visible: true,
    components: [
      { type:"box",position:[0,0,100,100],fill:"rgb(54,57,64,0.6)",stroke:"#fff",width:10},
      { type: "text",position:[22.5,0,50,30],value:"A-Speedster",color:"#FFFFFF"},
    ]
  });
  ship.setUIComponent({
    id: "ship2", position: [55,39,22,45], clickable: true, visible: true,
    components: [
      { type:"box",position:[0,0,100,100],fill:"rgb(54,57,64,0.6)",stroke:"#fff",width:10},
      { type: "text",position:[22.5,0,50,30],value:"Condor",color:"#FFFFFF"},
    ]
  });  
  setTimeout(function(){
    ship.setUIComponent({id:"ship text",visible:false});
    ship.setUIComponent({id:"ship1",visible:false});
    ship.setUIComponent({id:"ship2",visible:false});
    if (!ship.custom.shiped){
      let rand = Math.floor(Math.random()*2);
      var ship_level = Math.trunc(ship.type / 100);  
      ship.set({type:604+rand,crystals:((Math.round(ship_level||0)**2)*20/3),invulnerable:400,stats:88888888,idle:false});
      ship.custom.shiped = true;
    }
  }, 10000);     
  splitIntoTeams();
}

this.tick = function (game){
  if (game.step % 30 === 0){    
    for (let ship of game.ships){
      if (!ship.custom.init){
        ship.custom.init = true;
        setteam(ship);
        selectship(ship);
        ship.frag=0;
        ship.death=0;
        updatescoreboard(game);
      }
    }
    updatescore(game);
    updatescoreboard(game);
    var gametimer = gamelength * 3600;
    if (game.step % 30 === 0){
      if (game.step <= gametimer){
        let steps = gametimer - game.step;
        let minutes = Math.floor(steps / 3600);
        let seconds = Math.floor((steps % 3600) / 60);
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
        gamelength += 6.3; 
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
  for (let ship of game.ships) ship.set({score:ship.frag});
};

this.event = function (event,game){
  switch (event.name){
    case "ship_spawned":
      var ship = event.ship;
      var ship_level = Math.trunc(ship.type / 100);
      if (ship !== null){
        if (ship.team === 0) ship.set({x:200,y:0,crystals:((Math.round(ship_level||0)**2)*20/3),invulnerable:200});  
          else 
        if (ship.team === 1) ship.set({x:-200,y:0,crystals:((Math.round(ship_level||0)**2)*20/3),invulnerable:200});
      }
    break;    
    case "ship_destroyed":
      //showkills(game,event);
      if (!Object.is(event.killer,null)) event.killer.frag++;
      event.ship.death++;
      updatescoreboard(game);
      if (event.killer.team === 0){
        redpoints++;
      } else if (event.killer.team === 1){
        bluepoints++;
      }
    break;
    case "ui_component_clicked":
      var ship = event.ship;
      var component = event.id;
      var ship_level = Math.trunc(ship.type / 100);  
      if (component == "ship1"){
        ship.set({type:605,invulnerable:400,stats:88888888,idle:false,shield:999});
        ship.set({crystals:((Math.round(6||0)**2)*20/3)});
        ship.setUIComponent({id:"ship1",visible:false});      
        ship.setUIComponent({id:"ship2",visible:false});      
        ship.setUIComponent({id:"ship text",visible:false});    
        ship.custom.shiped = true;
      } else if (component == "ship2"){
        ship.set({type:604,invulnerable:400,stats:88888888,idle:false,shield:999});
        ship.set({crystals:((Math.round(6||0)**2)*20/3)});
        ship.setUIComponent({id:"ship1",visible:false});      
        ship.setUIComponent({id:"ship2",visible:false});      
        ship.setUIComponent({id:"ship text",visible:false});
        ship.custom.shiped = true;
      }   
  }
};

var base = {
  id: "base",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/base.png",
  //emissiveColor: 0xff8c00,
  transparent: false
};

game.setObject({
  id: "base",
  type: base,
  position: {x:-216,y:0,z:-1},
  rotation: {x:0,y:0,z:0},
  scale: {x:58,y:90,z:0}
});

var base2 = {
  id: "base2",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/base2.png",
  transparent: false
};

game.setObject({
  id: "base2",
  type: base2,
  position: {x:216,y:0,z:-1},
  rotation: {x:0,y:0,z:0},
  scale: {x:58,y:90,z:0}
});


