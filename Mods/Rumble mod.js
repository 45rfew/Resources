var divider = 4;
var modifier = {
  map_size: ~~(60/(Math.round(divider/2))),
  crystal_value: 4,
  max_players: ~~(120/divider),
  kills_to_win: ~~(200/divider),
  yeet_gems: true,
  healer_button: true,
  round_timer: 15,
  round_ship_tier: "random",//choose from 3,4,5,6,7, or "random"
  gems_upon_spawning: 169
};

game.modding.commands.list = function(){
  for (let ship of game.ships) teams.count[ship.team]++;
  echo(`${randcolors[0].team}: ${teams.count[0]}, ${randcolors[0].team2}: ${teams.count[1]}\n`);
  let count = 0;
  for (let ship of game.ships){
    let t = ship.team,u; ship.healing?u="(healer)":u="";
    echo(`${count}: ${ship.name+u}, Team: ${teams.names[t]}`);
    count++;
  }
}; 

game.modding.commands.yeet = function(req){
  let args=req.replace(/^\s+/,"").replace(/\s+/," ").split(" "),id=Number(args[1]||"NaN");
  let ship = game.ships[id];
  ship.set({kill:true});
};

game.modding.commands.swap = function(req){
  let args=req.replace(/^\s+/,"").replace(/\s+/," ").split(" "),id=Number(args[1]||"NaN");
  let ship = game.ships[id];
  let opt = Math.abs(ship.team-1);
  ship.set({team:opt,hue:colors[opt]});
  updatescoreboard(game); 
};

game.modding.commands.split = function(){
  let ts = [{hue:randcolors[0].hue,x:50,y:0}, {hue:randcolors[0].hue2,x:-50,y:0}];
  for(let i=0; i<game.ships.length; i++){
    let ship = game.ships[i];
    let t = i%2;
    ship.set({hue:ts[t].hue,team:t,x:ts[t].x,y:ts[t].y,invulnerable:600});
  } updatescoreboard(game); 
};

game.modding.commands.end = function(){
  game.custom.ended = true;
  game.setUIComponent({
    id: "timer",
    position: [2.5,28,15,10],
    visible: true,
    components: [{type: "text",position:[0,0,100,50],value:`Time's up!`,color:"#cde"}]
  }); let win,text;
  if (teams.points[0] != teams.points[1]){
    win = teams.points.indexOf(Math.max(...teams.points));
    text = `${teams.names[win]} team wins!`;
  } else text = "It's a draw!"; 
  game.setUIComponent({
    id: "end",
    position: [39,18,42,40],
    visible: true,
    components: [{type:"text",position:[2,5,80/1.5,33/1.5],value:text,color:"#cde"}]
  });    
  setTimeout(function(){
    for (let ship of game.ships){
      ship.gameover({text,"Frags:":ship.frags,"Deaths:":ship.deaths});
      echo(text);
    }
  }, 5000);
  echo(text);
};
//Thanks to Destroy & Dimed for the idea
var a = {};
a.H_Mercury = '{"name":"H-Mercury","level":6,"model":9,"size":2,"specs":{"shield":{"capacity":[250,375],"reload":[6,9]},"generator":{"capacity":[100,150],"reload":[45,75]},"ship":{"mass":375,"speed":[75,95],"rotation":[50,65],"acceleration":[60,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[7,12],"rate":8,"type":1,"speed":[100,190],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,375],"reload":[6,9]},"generator":{"capacity":[100,150],"reload":[45,75]},"ship":{"mass":375,"speed":[75,95],"rotation":[50,65],"acceleration":[60,100]}},"shape":[2.806,2.807,2.354,2.037,1.822,4.151,4.081,3.789,3.595,3.471,3.406,4.17,4.202,4.284,4.413,4.508,4.834,4.883,4.011,4.534,4.917,4.734,3.583,3.454,4.418,4.409,4.418,3.454,3.583,4.734,4.917,4.534,4.011,4.883,4.834,4.508,4.413,4.284,4.202,4.17,3.406,3.471,3.595,3.789,4.081,4.151,1.822,2.037,2.354,2.807],"lasers":[{"x":0,"y":-2.8,"z":0.8,"angle":0,"damage":[7,12],"rate":8,"type":1,"speed":[100,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.341,"y":-3.399,"z":-0.4,"angle":1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.341,"y":-3.399,"z":-0.4,"angle":-1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.895,"y":-0.917,"z":0.2,"angle":3,"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-0.917,"z":0.2,"angle":-3,"damage":[4,9],"rate":1.5,"type":1,"speed":[150,220],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.917}}';
a.Toscain = '{"name":"Toscain","level":5,"model":8,"size":1.7,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"bodies":{"front":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-100,-95,-25,0,25],"z":[0,0,0,0,0]},"width":[0,20,40,40,20],"height":[0,10,35,20,5],"texture":[63,11,2,63],"laser":{"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"recoil":50,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-25,0,100],"z":[0,0,0,0,9]},"width":[0,10,15,15,10],"height":[0,15,35,20,0],"texture":[9,9,9,4]},"lasers":{"section_segments":8,"angle":15,"offset":{"x":1,"y":-5,"z":-3},"position":{"x":[0,0,0],"y":[-90,-70,-100],"z":[0,0,0]},"width":[5,5,0],"height":[5,5,0],"texture":[6],"laser":{"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"angle":45,"error":0}},"motor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,20,30,100,95],"z":[0,0,0,0,0]},"width":[0,40,50,50,0],"height":[0,10,15,20,0],"texture":[63,63,10,4]},"propulsors":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[0,0,0],"y":[30,105,100],"z":[0,0,0]},"width":[15,15,0],"height":[10,10,0],"propeller":true,"texture":[12]}},"wings":{"main":{"doubleside":true,"offset":{"x":30,"y":80,"z":0},"length":[70,20],"width":[80,20],"angle":[0,0],"position":[-20,0],"texture":[11],"bump":{"position":20,"size":10}},"winglets":{"doubleside":true,"offset":{"x":98,"y":81,"z":-20},"length":[20,50,20],"width":[20,35,20],"angle":[90,90,90],"position":[0,0,0,0],"texture":[63],"bump":{"position":30,"size":50}}},"typespec":{"name":"Toscain","level":5,"model":8,"code":508,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"shape":[3.4,3.354,3.556,2.748,2.336,2.055,1.858,1.732,1.634,1.548,1.462,1.404,1.371,1.36,1.241,1.161,1.723,4.485,5.01,4.795,4.111,3.842,3.82,3.753,3.634,3.407,3.634,3.753,3.82,3.842,4.111,4.795,5.01,4.485,1.723,1.161,1.241,1.353,1.371,1.404,1.462,1.548,1.634,1.732,1.858,2.055,2.336,2.748,3.556,3.354],"lasers":[{"x":0,"y":-3.4,"z":0,"angle":0,"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.846,"y":-3.454,"z":-0.102,"angle":15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0},{"x":0.846,"y":-3.454,"z":-0.102,"angle":-15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0}],"radius":5.01}}';
var ships = [];
for (let ship in a) ships.push(a[ship]);

var vocabulary = [
  {text: "Yes", icon:"\u004c", key:"Y"},
  {text: "No", icon:"\u004d", key:"N"},
  {text: "Defend", icon:"\u0025", key:"D"},
  {text: "Kill", icon:"\u007f", key:"K"},
  {text: "Sorry", icon:"\u00a1", key:"S"},
  {text: "Thanks", icon:"\u0041", key:"X"},
  {text: "You", icon:"\u004e", key:"O"},
  {text: "Me", icon:"\u004f", key:"E"},
  {text: "No Problem", icon:"\u0047", key:"P"},
  {text: "Attack", icon:"\u0049", key:"A"},
  {text: "Help", icon:"\u004a", key:"H"},
  {text: "Hmmm?", icon:"\u004b", key:"Q"},
  {text: "GoodGame", icon:"\u00a3", key:"G"},
  {text: "Wait", icon:"\u0048", key:"T"},
  {text: "Heal", icon:"\u0037", key:"L"},
  {text: "Follow", icon:"\u0050", key:"F"}
];

var ships_list = [
  ["Pulse-Fighter","Side-Fighter","Shadow-X-1","Y-Defender"],   //T3
  ["Vanguard","Mercury","X-Warrior","Side-Interceptor","Pioneer","Crusader"],   //T4
  ["U-Sniper","FuryStar","T-Warrior","Aetos","Shadow X-2","Howler","Bat-Defender","Toscain"],   //T5
  ["Advanced-Fighter","Scorpion","Marauder","Condor","A-Speedster","Rock-Tower","Baracuda","O-Defender","H-Mercury"],   //T6
  ["Odyssey","Shadow X-3","Bastion","Aries"]    //T7
];

function findShipCode(name){
  for (let i=0;i<ships_list.length;i++)
    for (let j=0;j<ships_list[i].length;j++)
      if (ships_list[i][j] == name) return (i+3)*100+j+1;
}

var maps = [1761,1749,77,45,4360,3604,5575,4990],rand_ships,ship_name;
if (modifier.round_ship_tier === "random" && !game.custom.init){
  game.custom.init = true;
  modifier.round_ship_tier = 3+~~(Math.random()*5);
}
let tier = modifier.round_ship_tier;
let yeetus = 4; 
switch (modifier.round_ship_tier){
  case 3: yeetus = 3; break; case 4: yeetus = 3; break; 
  case 5: yeetus = 3; break; case 7: yeetus = false; 
}
ship_name = JSON.parse(JSON.stringify(ships_list[tier-3]));
rand_ships = JSON.parse(JSON.stringify(ships_list[tier-3])).map((n,p) => tier*100+p+1);

function shuffle(array,yeetus){
  var tmp, current, top = array.length;
  if (top) while(--top){
    current = Math.floor(Math.random()*(top+1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  if (yeetus) return array.slice(0,yeetus);
  return array;
}

var randcolors = [
  {team:"Red",hue:0,team2:"Blue",hue2:240},
  {team:"Yellow",hue:60,team2:"Green",hue2:120},
  {team:"Orange",hue:30,team2:"Purple",hue2:270}
];

if (!game.custom.init2){game.custom.init2 = true;
for (let i=0; i<~~(Math.random()*3); i++) randcolors.shift();}

var teams = {
  names: [randcolors[0].team,randcolors[0].team2],
  points: [0,0],
  count: [0,0],
  ships: [[],[]]
},colors = [randcolors[0].hue,randcolors[0].hue2];

this.options = {
  //map_id: maps[~~(Math.random()*maps.length)],
  vocabulary: vocabulary,
  soundtrack: "argon.mp3",
  weapons_store: false,
  reset_tree: false,
  friendly_colors: 2,
  radar_zoom: 1,
  map_size: modifier.map_size,
  starting_ship: 801,
  crystal_value: modifier.crystal_value,
  speed_mod: 1.2,
  max_players: modifier.max_players,
  max_level: modifier.round_ship_tier,
  ships: ships,
  choose_ship: shuffle(rand_ships,yeetus),
  release_crystal: modifier.yeet_gems,
  healing_enabled: true,
  healing_ratio: 0.5,
  hues: [randcolors[0].hue,randcolors[0].hue2]
};

this.tick = function(game){
  if (game.step % 30 === 0){
    updatescoreboard(game); 
    for (let ship of game.ships){
      if (!ship.custom.lol){
        ship.custom.lol = true;
        ship.frags = 0;
        ship.deaths = 0; 
        setup(ship);
        setteam(ship);
        checkscores(game);
        joinmessage(ship);
        updatescoreboard(game); 
        echo(`${ship.name} spawned`);  
      } 
      ship.set({score:ship.frags});
    }
    for (let i=0; i<2; i++){
      if (game.custom.end) break;   
      game.custom.end = true;
      if (teams.points[i] >= modifier.kills_to_win){
        game.setUIComponent({
          id: "end",
          position: [39,18,42,40],
          visible: true,
          components: [{type: "text",position:[2,5,80/1.5,33/1.5],value:`${teams.names[i]} team wins!`,color:"#cde"}]
        });  
        setTimeout(function(){
          for (let ship of game.ships){
            ship.gameover({"Winner":`${teams.names[i]} team`,"Frags":ship.frags,"Deaths":ship.deaths});
            echo(`${teams.names[i]} team wins!`);
          }
        }, 5000);
        echo(`${teams.names[i]} team wins!`);
      }
    }
    let time = modifier.round_timer*3600;
    if (game.step < time){
      let steps = time - game.step;
      let minutes = Math.floor(steps / 3600);
      let seconds = Math.floor((steps % 3600) / 60);
      if (seconds < 10) seconds = "0" + seconds;
      if (minutes < 10) minutes = "0" + minutes;
      game.setUIComponent({
        id: "timer",
        position: [2.5,28,15,10],
        visible: true,
        components: [
          {type: "text",position:[0,0,100,50],value:`Time left: ${minutes}:${seconds}`,color:"#cde"},
        ]
      });
    } else {
      game.setUIComponent({
        id: "timer",
        position: [2.5,28,15,10],
        visible: true,
        components: [
          {type: "text",position:[0,0,100,50],value:`Time's up!`,color:"#cde"},
        ]
      });
      let win,text;
      if (teams.points[0] != teams.points[1]){
        win = teams.points.indexOf(Math.max(...teams.points));
        text = `${teams.names[win]} team wins!`;
      } else text = "It's a draw!"; 
      game.setUIComponent({
        id: "end",
        position: [39,18,42,40],
        visible: true,
        components: [{type:"text",position:[2,5,80/1.5,33/1.5],value:text,color:"#cde"}]
      });    
      setTimeout(function(){
        for (let ship of game.ships){
          ship.gameover({text,"Frags:":ship.frags,"Deaths:":ship.deaths});
          echo(text);
        }
      }, 5000);
    }       
  }
  if (game.step === 0) echo(modifier.round_ship_tier);
};

function getcolor(color){
  return `hsla(${color},100%,50%,1)`;
}
 
var scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
}; 

function configship(ship,t){
  ship.set({hue:colors[t],team:t,invulnerable:600,stats:88888888});
}

function setteam(ship){
  let count = [0,0], t;  
  for (let ship of game.ships) count[ship.team]++;
  //if (count[0] === count[1]) t = teams.points.indexOf(Math.min(...teams.points));
  t = count.indexOf(Math.min(...count));
  ship.custom.team = t;
  configship(ship,t);
  echo(count);
}

function PlayerBox(posx,posy) {
  return {type:"box",position:[posx,posy-1.8,50,7],fill:"rgb(56,74,92,0.5)",width:2};
}
 
function Tag(indtext,param,posx,posy,hex,al,size) {
  let obj= {type: indtext,position: [posx,posy-0.5,50-(size||0),5],color: hex,align:al};
  switch(indtext) {
    case "text":
      obj.value=param;
      break;
    case "player":
      obj.id=param;
    break;
  }
  return obj;
}
 
function sort(arr){
  let array=[...arr],i=0;
  while (i<array.length-1) {
    if (array[i].frags<array[i+1].frags) {
      array[i+1]=[array[i],array[i]=array[i+1]][0];
      if (i>0) i-=2;
    }
    i++;
  }
  return array;
}
 
function updatescoreboard(game){
  let t=[[],[]];
  for (let ship of game.ships) t[ship.team].push(ship);
  scoreboard.components = [
    { type:"box",position:[0,0,50,8],fill:getcolor(colors[0])},
    { type: "text",position: [0,0,50,8],color:"#e5e5e5",value: teams.names[0]},
    { type:"box",position:[50,0,50,8],fill:getcolor(colors[1])},
    { type: "text",position: [50,0,50,8],color:"#e5e5e5",value: teams.names[1]}
  ];
  let sc=[sort(t[0]),sort(t[1])],line=1;
  sc[0].slice(10);sc[1].slice(10);
  for (let i=0;i<10;i++){
    for (let j=0;j<2;j++){
      if (sc[j][i]) scoreboard.components.push(
        new Tag("text",sc[j][i].frags,j*50,line*10,"#cde","right",2),
        new Tag("player",sc[j][i].id,j*50,line*10,"#cde","left")
      );
      else scoreboard.components.push({},{});
    }
    line++;
  }
  outputscoreboard(game,sc);
}
 
function outputscoreboard(game,tm){
  let origin =[...scoreboard.components];
  for (let ship of game.ships){
    let j=0,team=tm[ship.team];
    for (j=0;j<team.length;j++){
      if (ship.id === team[j].id){
        scoreboard.components.splice((j*2+ship.team)*2+4,0,
          new PlayerBox(ship.team*50,(j+1)*10)  
        );
        break;
      }
    }
    if (j == team.length) scoreboard.components.splice((20+ship.team)*2,2,
      new PlayerBox(ship.team*50,90),
      new Tag("text",ship.frags,ship.team*50,90,ship.team,"right",2),
      new Tag("player",ship.id,ship.team*50,90,ship.team,"left")
    );
    ship.setUIComponent(scoreboard);
    scoreboard.components = [...origin];
  }
}

function checkscores(game){
  game.setUIComponent({
    id: "scores",
    position: [34,10,42,40],
    visible: true,
    components: [
      {type: "text",position:[2,5,80/1.5,33/1.5],value:teams.points[0],color:getcolor(colors[0])},
      {type: "text",position:[0,0,80,33],value:"-",color:"#CDE"},
      {type: "text",position:[25,5,80/1.5,33/1.5],value:teams.points[1],color:getcolor(colors[1])},
    ]
  });
}

function joinmessage(ship){
  ship.setUIComponent({
    id: "yeet",
    position: [36,16,34,32],
    visible: true,
    components: [
      {type: "text",position:[0,0,85+3,38+3],value:`First team to ${modifier.kills_to_win} kills wins`,color:"#cde"},
      {type: "text",position:[5.5,20,80-4,33-4],value:"Good luck and have fun!",color:"#cde"},
    ]
  });      
  setTimeout(function(){  
    ship.setUIComponent({id:"yeet",visible:false});
  },8000);
}

function checkButtons(ship){
  if (!ship.custom.buttons){
    ship.setUIComponent({id:"open",visible:false});   
    ship.setUIComponent({id:"heal",visible:false});  
    for (let i=0;i<3;i++){ ship.setUIComponent({id:ship.custom.rand[i],visible:false});}
    ship.setUIComponent({id:"close",visible:false});
  }
}

function optionopenmenu(ship){
  addShipSelection(ship);
  ship.custom.rand = shuffle(ship_name);
  (modifier.healer_button) && confighealing(ship);
  echo("Opened");
  setTimeout(function(){  
    ship.custom.buttons = false;
    checkButtons(ship);
  },9000);    
}

function confighealing(ship) {
  ship.setUIComponent({
    id: "heal",
    position: [3,42,16,20/2],
    visible: true,
    clickable: true,
    shortcut: "J",
    components: [
      {type: "box",position:[0,0,88,40*2],stroke:"#191919",fill:"#333333",width:5},
      {type: "text",position:[6,4,88/1.2,40/1.2*2],value:`${(ship.healing)?"Attacker":"Healer"} [J]`,color:"#cde"},
    ]
  });
}

function addMenu(ship){
  let shortcut = ["I","M","B"];
  for (let i=0; i<3; i++){
    ship.setUIComponent({id:"open",visible:false});   
    ship.setUIComponent({
      id: ship.custom.rand[i],
      position: [36,26+i*7,34,18/2],
      visible: true,
      clickable: true,
      shortcut: shortcut[i],
      components: [
        {type: "box",position:[0,0,88,40*2],stroke:"#191919",fill:"#333333",width:5},
        {type: "text",position:[0,4,88/1.2,40/1.2*2],value:`${ship.custom.rand[i]} [${shortcut[i]}]`,color:"#cde"},
      ]
    });
  }
}

function drawmenu(ship){
  addMenu(ship);
  ship.setUIComponent({
    id: "close",
    position: [43,26+4*7,34/2,18/2],
    visible: true,
    clickable: true,
    shortcut: "L",
    components: [
      {type: "box",position:[0,0,88,40*2],stroke:"#191919",fill:"#333333",width:5},
      {type: "text",position:[0,4,88/1.2,40/1.2*2],value:"Close [L]",color:"#cde"},
    ]
  });   
}

function addShipSelection(ship){
  ship.setUIComponent({
    id: "open",
    position: [3,33,16,20/2],
    visible: true,
    clickable: true,
    shortcut: "W",
    components: [
      {type: "box",position:[0,0,88,40*2],stroke:"#191919",fill:"#333333",width:5},
      {type: "text",position:[6,4,88/1.2,40/1.2*2],value:"Select ship [W]",color:"#cde"},
    ]
  });   
}

function removemenu(ship){
  for (let i=0; i<ship_name.length; i++){
    ship.setUIComponent({id:ship_name[i],visible:false});    
  }
  ship.setUIComponent({id:"close",visible:false});
}

function setup(ship){
  let level = Math.trunc(ship.type/100);level = (level<3)?3:level;
  ship.set({stats:88888888,invulnerable:600,shield:999/*,crystals:modifier.gems_upon_spawning+(level-3)*100*/});
}

lOlO0.prototype.shipDisconnected = function(t){
  var e=this.modding.game.findShip(t.id);
  if (e != null) {
    this.context.event != null && this.context.event({name:"ship_disconnected",ship:e},this.modding.game);
    return e.lI101 = !0
  }
}

this.event = function(event, game){
  let ship = event.ship;
  switch (event.name){
    case "ship_destroyed":
      let killer = event.killer;
      if (killer != null) {
        teams.points[killer.team]++;
        killer.frags++;
        echo(`${killer.name} killed ${ship.name}`);
      } else {
        echo(ship.name + " killed themselves");
        teams.points[Math.abs(ship.team-1)]++;
      }
      ship.deaths++;
      checkscores(game);
      ship.custom.hasbeenkilled = true;
      echo(`${teams.names[0]}:${teams.points[0]},${teams.names[1]}:${teams.points[1]}`);
    break;
    case "ship_spawned":
      if (ship.custom.hasbeenkilled === true){
        ship.custom.buttons = true;
        optionopenmenu(ship);
        ship.custom.hasbeenkilled = false;
      }
      let gems;
      gems = modifier.gems_upon_spawning+(modifier.round_ship_tier-5)*100;
      if (gems < 0){echo("Gem value is negative, lmao"); gems = 69;}
      (ship != null) && ship.set({stats:88888888,invulnerable:600,shield:999,crystals:gems});
    break;
    case "ui_component_clicked":
      let component = event.id;
      switch (component){
        case "open": drawmenu(ship); break;
        case "heal": confighealing(ship);ship.set({healing:!ship.healing}); 
          ship.setUIComponent({id:"heal",visible:false}); break;
        case "close": removemenu(ship);addShipSelection(ship); break;
        default:
          ship.set({type:findShipCode(component),stats:88888888,shield:999});
          removemenu(ship);
        break;
      }
      checkButtons(ship);
    break;  
  }
};