const divider = 1;
const modifier = {
  map_size: ~~(60/(Math.round(divider/2))),
  crystal_value: 4,
  max_players: ~~(120/divider),
  kills_to_win: ~~(200/divider),
  yeet_gems: true,
  healer_button: true,
  round_timer: 15,
  round_ship_tier: "random",//choose from 5,6,7, or "random"
  gems_upon_spawning: 169
};
//Thanks to Destroy & Dimed for the idea
var a = {};
a.H_Mercury_609 = '{"name":"H-Mercury","level":6,"model":9,"size":2,"next":[null,null],"specs":{"shield":{"capacity":[250,375],"reload":[6,9]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":375,"speed":[75,95],"rotation":[50,65],"acceleration":[60,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[7,10],"rate":8,"type":1,"speed":[100,150],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,375],"reload":[6,9]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":375,"speed":[75,95],"rotation":[50,65],"acceleration":[60,100]}},"shape":[2.806,2.807,2.354,2.037,1.822,4.151,4.081,3.789,3.595,3.471,3.406,4.17,4.202,4.284,4.413,4.508,4.834,4.883,4.011,4.534,4.917,4.734,3.583,3.454,4.418,4.409,4.418,3.454,3.583,4.734,4.917,4.534,4.011,4.883,4.834,4.508,4.413,4.284,4.202,4.17,3.406,3.471,3.595,3.789,4.081,4.151,1.822,2.037,2.354,2.807],"lasers":[{"x":0,"y":-2.8,"z":0.8,"angle":0,"damage":[7,10],"rate":8,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.341,"y":-3.399,"z":-0.4,"angle":1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.341,"y":-3.399,"z":-0.4,"angle":-1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.895,"y":-0.917,"z":0.2,"angle":3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-0.917,"z":0.2,"angle":-3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.917,"next":[null,null]}}';
a.Toscain_508 = '{"name":"Toscain","level":5,"model":9,"size":1.7,"next":[null,null],"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"bodies":{"front":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-100,-95,-25,0,25],"z":[0,0,0,0,0]},"width":[0,20,40,40,20],"height":[0,10,35,20,5],"texture":[63,11,2,63],"laser":{"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"recoil":50,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-25,0,100],"z":[0,0,0,0,9]},"width":[0,10,15,15,10],"height":[0,15,35,20,0],"texture":[9,9,9,4]},"lasers":{"section_segments":8,"angle":15,"offset":{"x":1,"y":-5,"z":-3},"position":{"x":[0,0,0],"y":[-90,-70,-100],"z":[0,0,0]},"width":[5,5,0],"height":[5,5,0],"texture":[6],"laser":{"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"angle":45,"error":0}},"motor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,20,30,100,95],"z":[0,0,0,0,0]},"width":[0,40,50,50,0],"height":[0,10,15,20,0],"texture":[63,63,10,4]},"propulsors":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[0,0,0],"y":[30,105,100],"z":[0,0,0]},"width":[15,15,0],"height":[10,10,0],"propeller":true,"texture":[12]}},"wings":{"main":{"doubleside":true,"offset":{"x":30,"y":80,"z":0},"length":[70,20],"width":[80,20],"angle":[0,0],"position":[-20,0],"texture":[11],"bump":{"position":20,"size":10}},"winglets":{"doubleside":true,"offset":{"x":98,"y":81,"z":-20},"length":[20,50,20],"width":[20,35,20],"angle":[90,90,90],"position":[0,0,0,0],"texture":[63],"bump":{"position":30,"size":50}}},"typespec":{"name":"Toscain","level":5,"model":9,"code":509,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"shape":[3.4,3.354,3.556,2.748,2.336,2.055,1.858,1.732,1.634,1.548,1.462,1.404,1.371,1.36,1.241,1.161,1.723,4.485,5.01,4.795,4.111,3.842,3.82,3.753,3.634,3.407,3.634,3.753,3.82,3.842,4.111,4.795,5.01,4.485,1.723,1.161,1.241,1.353,1.371,1.404,1.462,1.548,1.634,1.732,1.858,2.055,2.336,2.748,3.556,3.354],"lasers":[{"x":0,"y":-3.4,"z":0,"angle":0,"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.846,"y":-3.454,"z":-0.102,"angle":15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0},{"x":0.846,"y":-3.454,"z":-0.102,"angle":-15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0}],"radius":5.01,"next":[null,null]}}';
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
  {text: "Leader", icon:"\u002e", key:"L"},
  {text: "Follow", icon:"\u0050", key:"F"},
];

var maps = [1761,1749,77,45,4360,3604,5575],rand_ships,ship_name,yeetus,lmao=false;
if (modifier.round_ship_tier === "random") modifier.round_ship_tier = 5+~~(Math.random()*3);
if (modifier.round_ship_tier === 5){yeetus=4; rand_ships = [501,502,503,504,505,506,507]; ship_name = ["U-Sniper","Furystar","T-Warrior","Aetos","Shadow X-2","Howler","Bat-Defender","Toscain"];} else
if (modifier.round_ship_tier === 6){yeetus=5; rand_ships = [601,602,603,604,605,606,607,608,609]; ship_name = ["Advanced-Fighter","Scorpion","Marauder","Condor","A-Speedster","Rock-Tower","Baracuda","O-Defender","H-Mercury"];} else
if (modifier.round_ship_tier === 7){yeetus=5; lmao=true; rand_ships = [701,702,703,704]; ship_name = ["Odyssey","Shadow X-3","Bastion","Aries"];} 

function shuffle(array,yeetus){
  var tmp, current, top = array.length;
  if (top) while(--top){
    current = Math.floor(Math.random()*(top+1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  if (!lmao) if (yeetus) array.splice(0,yeetus);
  return array;
}

swap = function(id){
  if(game.ships[id].team===0)game.ships[id].set({hue:240,team:1});else game.ships[id].set({hue:0,team:0});
};

this.options = {
  map_id: maps[~~(Math.random()*maps.length)],
  root_mode: "",
  vocabulary: vocabulary,
  soundtrack: "argon.mp3",
  weapons_store: false,
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
  healing_ratio: 0.35
};

this.tick = function(game){
  if (game.step % 30 === 0){
    updatescoreboard(game); 
    for (let ship of game.ships){
      let tm; 
      if (!ship.custom.lol){
        ship.custom.lol = true;
        tm = setteam(ship);
        checkscores(game);
        ship.frags = 0;
        ship.deaths = 0;
        joinmessage(ship);
        echo(`${ship.name} spawned`);  
      } 
      //teamcount[tm||ship.team]++;
      teams.ships[ship.custom.team].push(ship);
      teams.count[ship.custom.team]++;
      ship.set({score:ship.frags});
    }
    for (let i=0; i<2; i++){
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
      var win,text;
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
};

var teams = {
  names: ["Red","Blue"],
  hues: [0,240],
  points: [0,0],
  count: [0,0],
  ships: [[],[]]
};

let teamcount = [0,0], ts = [
  {hue:0,x:-215,y:0}, {hue:240,x:215,y:0}
], colors = [0,240];

function getcolor(color){
  return `hsla(${color},100%,50%,1)`;
}
 
var scoreboard = {
  id:"scoreboard",
  visible: true,
  components: []
};

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
    { type: "text",position: [0,0,50,8],color: "#cde",value: "Red"},
    { type:"box",position:[50,0,50,8],fill:getcolor(colors[1])},
    { type: "text",position: [50,0,50,8],color: "#cde",value: "Blue"}
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

function configship(ship, team){
  ship.set({hue:teams.hues[team],team:team,invulnerable:600,stats:88888888});
}

function setteam(ship){
  let t;
  t = teams.count.indexOf(Math.min(...teams.count));
  ship.custom.team = t;
  configship(ship, t);
}

function checkscores(game){
  game.setUIComponent({
    id: "scores",
    position: [34,10,42,40],
    visible: true,
    components: [
      {type: "text",position:[2,5,80/1.5,33/1.5],value:teams.points[0],color:"#ff0000"},
      {type: "text",position:[0,0,80,33],value:"-",color:"#CDE"},
      {type: "text",position:[25,5,80/1.5,33/1.5],value:teams.points[1],color:"#0000ff"},
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

function optionopenmenu(ship){
  ship.setUIComponent({
    id: "open",
    position: [3,33,16,20],
    visible: true,
    clickable: true,
    shortcut: "J",
    components: [
      {type: "box",position:[0,0,88,40],stroke:"#191919",fill:"#333333",width:5},
      {type: "text",position:[6,4,88/1.2,40/1.2],value:"Select ship [J]",color:"#cde"},
    ]
  });    
  if (modifier.healer_button){
    ship.setUIComponent({
      id: "heal",
      position: [3,42,16,20],
      visible: true,
      clickable: true,
      shortcut: "W",
      components: [
        {type: "box",position:[0,0,88,40],stroke:"#191919",fill:"#333333",width:5},
        {type: "text",position:[6,4,88/1.2,40/1.2],value:"Healer [W]",color:"#cde"},
      ]
    });     
  }
  setTimeout(function(){  
    ship.setUIComponent({id:"open",visible:false});   
    ship.setUIComponent({id:"heal",visible:false});   
  },9000);    
}

function drawmenu(ship){
  let rand;
  rand = shuffle(ship_name);
  let shortcut = ["I","M","B"];
  for (let i=0; i<3; i++){
    ship.setUIComponent({id:"open",visible:false});   
    ship.setUIComponent({
      id: rand[i],
      position: [36,26+i*7,34,18],
      visible: true,
      clickable: true,
      shortcut: shortcut[i],
      components: [
        {type: "box",position:[0,0,88,40],stroke:"#191919",fill:"#333333",width:5},
        {type: "text",position:[0,4,88/1.2,40/1.2],value:`${rand[i]} [${shortcut[i]}]`,color:"#cde"},
      ]
    });
  }
  ship.setUIComponent({
    id: "close",
    position: [43,26+4*7,34/2,18],
    visible: true,
    clickable: true,
    shortcut: "L",
    components: [
      {type: "box",position:[0,0,88,40],stroke:"#191919",fill:"#333333",width:5},
      {type: "text",position:[0,4,88/1.2,40/1.2],value:"Close [L]",color:"#cde"},
    ]
  });   
  setTimeout(function(){  
    for (let i=0;i<3;i++){ ship.setUIComponent({id:rand[i],visible:false});}
    ship.setUIComponent({id:"close",visible:false});
  },7500);  
}

function removemenu(ship){
  for (let i=0; i<ship_name.length; i++){
    ship.setUIComponent({id:ship_name[i],visible:false});    
    ship.setUIComponent({id:"close",visible:false});
  }
}

this.event = function(event, game){
  switch (event.name){
    case "ship_destroyed":
      let ship = event.ship;
      let killer = event.killer;
      ship.set({score:ship.score/2});
      teams.points[killer.team]++;
      killer.frags++;
      ship.deaths++;
      checkscores(game);
      ship.custom.hasbeenkilled = true;
      echo(`${killer.name} killed ${ship.name}`);
      echo(`Red:${teams.points[0]},Blue:${teams.points[1]}`);
      updatescoreboard(game);
    break;
    case "ship_spawned":
      if (event.ship.custom.hasbeenkilled === true) optionopenmenu(event.ship);
      vet ship = Math.trunc(event.ship.type/100)
      event.ship.set({stats:88888888,invulnerable:600,shield:999,crystals:modifier.gems_upon_spawning+(level-5)*100});
      updatescoreboard(game);
    break;
    case "ui_component_clicked":
      let component = event.id;
      switch (component){
        case "open": drawmenu(event.ship); break;
        case "heal": event.ship.set({healing:!event.ship.healing}); break;
        case "close": removemenu(event.ship); break;
        case "U-Sniper": event.ship.set({type:501,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Furystar": event.ship.set({type:502,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "T-Warrior": event.ship.set({type:503,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Aetos": event.ship.set({type:504,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Shadow X-2": event.ship.set({type:505,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Howler": event.ship.set({type:506,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Bat-Defender": event.ship.set({type:507,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Toscain": event.ship.set({type:508,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Advanced-Fighter": event.ship.set({type:601,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Scorpion": event.ship.set({type:602,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Marauder": event.ship.set({type:603,stats:88888888,shield:999}); removemenu(event.ship); break;  
        case "Condor": event.ship.set({type:604,stats:88888888,shield:999}); removemenu(event.ship); break;  
        case "A-Speedster": event.ship.set({type:605,stats:88888888,shield:999}); removemenu(event.ship); break;  
        case "Rock-Tower": event.ship.set({type:606,stats:88888888,shield:999}); removemenu(event.ship); break;     
        case "Baracuda": event.ship.set({type:607,stats:88888888,shield:999}); removemenu(event.ship); break;     
        case "O-Defender": event.ship.set({type:608,stats:88888888,shield:999}); removemenu(event.ship); break;     
        case "H-Mercury": event.ship.set({type:609,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Odyssey": event.ship.set({type:701,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Shadow X-3": event.ship.set({type:702,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Bastion": event.ship.set({type:703,stats:88888888,shield:999}); removemenu(event.ship); break;
        case "Aries": event.ship.set({type:704,stats:88888888,shield:999}); removemenu(event.ship); 
        break;             
      }
    break;  
  }
};
