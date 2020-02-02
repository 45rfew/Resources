const alien_array = [
  {code:19,level:0}
];
//add alien codes and their specified level the this arrary, if wanting 
//to spawn those aliens
const max_aliens = 3;
//change this variable depending on how may aliens wished to be able to 
//spawn at any given time
const alien_portal = true;
//switch to false for the aliens to stop spawning 
const collectible_array = [
  {code:12,x:50,y:30},
  {code:11,x:20,y:-60}  
];
//add collectibles codes and their specified level the this arrary, as
//well as the x and y factors, if wanting to spawn those collectibles
const max_collectibles = 10;
//change this variable depending on how may collectibles wished to be able to 
//spawn at any given time
const collectibles_portal = true;
//switch to false for the collectibles to stop spawning 

this.options = {
  root_mode: "survival",
  map_size: 50
};

this.tick = (game) => {
  if (game.step % 60 === 0){
    for (let ship of game.ships){
      if (!ship.custom.buttons){
        ship.custom.buttons = true;
        ship.setUIComponent(reset_button); 
        ship.setUIComponent(healer_button); 
      }
    }
    if (game.aliens.length < max_aliens && alien_portal === true){
      game.addAlien(alien_array[Math.floor(Math.random()*alien_array.length)]);
    }
    if (game.collectibles.length < max_collectibles && collectibles_portal === true){
      game.addCollectible(collectible_array[Math.floor(Math.random()*collectible_array.length)]);
    }    
  }
};

this.event = (event,game) => {
  const ship = event.ship;      
  switch (event.name){
    case "ui_component_clicked":
      const component = event.id;
      if (component == "reset"){
        resetShip(ship);
      }
      else if (component == "healer"){
        healShip(ship);
      }
    break;
  }
};

var reset_button = {
  id: "reset",
  position: [5,35,8,7],
  clickable: true,
  shortcut: "J",
  visible: true,
  components: [
    {type: "text",position:[10,35,80,30],value:"Reset [J]",color:"#fff"},
  ]
};

var healer_button = {
  id: "healer",
  position: [5,40,8,7],
  clickable: true,
  shortcut: "V",
  visible: true,
  components: [
    {type: "text",position:[10,35,80,30],value:"Healer [V]",color:"#fff"},
  ]
};

var resetShip = ship => {
  if (ship !== null && ship.type != 101){
    ship.set({type:101,crystals:0,stats:11111111,shield:999});
  }  
};
 
var healShip = ship => {
  if (ship !== null){
    ship.set({healing:!ship.healing});
  }
};

kick = id => {
  game.ships[id].gameover({"":""});
  return game.ships[id].name + " was kicked\n";
};

say = (saysWhat,instructor = "Zoltar") => {
  for (let ship of game.ships){
    ship.instructorSays(saysWhat, instructor);
  }
};

hide => {
  for (let ship of game.ships){
    ship.hideInstructor();
  }
};

addAliens = (ammount,x,y,code,level,points,crystals,weapon_drop) => {
  for (let i = 0; i<ammount; i++){
    game.addAlien({
      x:x,y:y,
      code:code,
      level:level,
      points:points,
      crystals:crystals,
      weapon_drop:weapon_drop
    });
  }
  switch (code){
    case 10:
      alien_type = "Chicken";
    break;  
    case 11:
      alien_type = "Crab";
    break;  
    case 12:
      alien_type = "Fortress";
    break;  
    case 13:
      alien_type = "Caterpillar";
    break;        
    case 14:
      alien_type = "Candlestick";
    break;        
    case 15:
      alien_type = "Hirsute";
    break;        
    case 16:
      alien_type = "Piranha";
    break;        
    case 17:
      alien_type = "Pointu";
    break;        
    case 18:
      alien_type = "Fork";
    break;        
    case 19:
      alien_type = "Saucer";
    break;        
    case 20:
      alien_type = "FinalBoss";
  }
  switch(weapon_drop){
    case 10:
      collectible = "Rockets";
    break;
    case 11:
      collectible = "Missiles";
    break;
    case 12:
      collectible = "Torpedo";
    break;
    case 20:
      collectible = "Light mines";
    break;
    case 21:
      collectible = "Heavy mines";
    break;
    case 40:
      collectible = "Mining pod";
    break;
    case 41:
      collectible = "Attack pod";
    break;
    case 42:
      collectible = "Defense pod";
    break;
    case 90:
      collectible = "Energy refill";
    break; 
    case 91:
      collectible = "Shield refill";
  }  
  return "\nSpawned "+ammount+" level "+level+" "+alien_type+" to coordinates x:"+x+" y:"+y+"\ndropping "+crystals+" crystals, "+points+" points, and a single\n"+collectible+" upon destruction\n";
};

firework = (x, y, alienAmount, alienCode, alienLevel, alienCrystaldrop, asteroidAmount) => {
  let dir = Math.random()*2*Math.PI;
  for(let i = 0; i<alienAmount; i++){
    game.addAlien({code:alienCode,level:alienLevel,x:x,y:y,vx:Math.sin(dir),vy:Math.cos(dir),crystal_drop:alienCrystaldrop});
  }
  for(let i = 0; i<asteroidAmount; i++){
    game.addAsteroid({size:10,x:x+Math.sin(dir)*20,y:y+Math.cos(dir)*20,vx:Math.sin(dir),vy:Math.cos(dir)});
  }  
};
 
killaliensNasteroids = (alienKill,asteroidKill) => {
  for(let alien of game.aliens){
    alien.set({kill:alienKill});
  }
  for(let asteroid of game.asteroids){
    game.asteroid.set({kill:asteroidKill});
  }  
};

e = (shipId,shipType) => {
  let gems = 0;
  const level = Math.trunc(shipType / 100);  
  switch (level){
    case 1: 
      gems = 20;     
    break;
    case 2: 
      gems = 80;     
    break;
    case 3: 
      gems = 180;     
    break;
    case 4: 
      gems = 320;    
    break;
    case 5: 
      gems = 500;   
    break;
    case 6: 
      gems = 720;   
    break;
    case 7: 
      gems = 980;     
    game.ships[shipId].set({type:shipType,stats:88888888,crystals:gems,idle:false}); 
  }
};

setAliens = (damage,laserRate,laserSpeed,shield) => {
  for (let alien of game.aliens){
    alien.set({
      damage:damage,
      rate:laserRate,
      laser_speed:laserSpeed,
      shield:shield
    });
  }
};

killPlayer = shipId => {
  game.ships[shipId].set({kill:true});
};


// https://www.w3schools.com/js/js_functions.asp  
// tutorial for functions



