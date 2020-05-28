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
  let alienname=["Chicken","Crab","Fortress","Caterpillar","Candlestick","Hirsute","Piranha","Pointu","Fork","Saucer","FinalBoss"]
  weapondrop={
    10: "Rockets",
    
  };
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
}
 
killaliensNasteroids = (alienKill,asteroidKill) => {
  for(let alien of game.aliens){
    alien.set({kill:alienKill});
  }
  for(let asteroid of game.asteroids){
    game.asteroid.set({kill:asteroidKill});
  }  
}

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






