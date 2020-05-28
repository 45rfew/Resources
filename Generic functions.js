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
  weapondrop= new Map([
    [10,"Rockets"],
    [11,"Missiles"],
    [12,"Torpedo"],
    [20,"Light mines"],
    [21,"Heavy mines"],
    [40,"Mining pod"],
    [41,"Attack pod"],
    [42,"Defense pod"],
    [90,"Energy refill"],
    [91,"Shield refill"]
  ]);
  return "\nSpawned "+ammount+" level "+level+" "+(alienname[code-10]||"unknown alien")+" to coordinates x:"+x+" y:"+y+"\ndropping "+crystals+" crystals, "+points+" points, and a single\n"+(weapondrop.get(weapon_drop)||"unknown collectible")+" upon destruction\n";
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
  game.ships[shipId].set({type:shipType,stats:88888888,crystals:(level**2)*20,idle:false});
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
