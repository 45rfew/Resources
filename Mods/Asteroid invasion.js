var shortestXY = function(x1, y1, x2, y2){
  let corners = [[1,1],[-1,1],[-1,-1],[1,-1]];
  var size = (game.options.map_size||30)*5,distX = Math.abs(x2-x1), distY = Math.abs(y2-y1);
  let minX = Math.min(distX,size*2-distX);
  let minY = Math.min(distY,size*2-distY);
  for (let i of corners){
    let x = x1+i[0]*minX, y = y1+i[1]*minY;
    let xm = (Math.abs(x) > size)?(-1*Math.sign(x)*(size*2-Math.abs(x))):((Math.abs(x) == size)?x2:x);
    let ym = (Math.abs(y) > size)?(-1*Math.sign(y)*(size*2-Math.abs(y))):((Math.abs(y) == size)?y2:y);
    if (xm == x2 && ym == y2) return {x:x,y:y};
  }
};

var targetPlayer = function (ship, asteroid, speed) {
  speed = Number(speed) || 0.22;
  if (asteroid && ship) {
    let sp = shortestXY(asteroid.x,asteroid.y,ship.x,ship.y);
    let distX = asteroid.x - sp.x;
    let distY = asteroid.y - sp.y;
    angle = (Math.atan2(distY, distX)) - Math.PI;
    asteroid.set({vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed});
  }
};

function findAngle(x,y){
  return Math.atan2(y,x)*180/Math.PI;
}

function spawnAsteroid(ship){
  amount = ~~(Math.random()*50);
  theta = (amount/50)*Math.PI*2;
  radius = 120;
  x = ship.x+Math.cos(theta)*radius;
  y = ship.y+Math.sin(theta)*radius;
  game.addAsteroid({x:x,y:y,size:10});
}

function checkPlayers(game){
  let players = [[],[]];
  if (!game.custom.check){
    game.custom.check = true;
    for (let ship of game.ships) for (let i=0; i<2; i++) players[i].push(`${ship.name}:${ship.id}`);
  } else {
    for (let ship of game.ships) players[0].push(`${ship.name}:${ship.id}`);
    if (players[0] !== players[1]){
      players[1] = players[0];
      for (let asteroid of game.asteroids){
        asteroid.custom.id = ~~(Math.random()*game.ships.length);
      }
    }
  }
}

var s = {};
s.s = '{"name":"Yeetus-Speedster","level":6,"model":6,"size":1,"scale":2.8,"Designer":"Duc Minh","specs":{"shield":{"capacity":[100,100],"reload":[0.01,0.01]},"generator":{"capacity":[50,50],"reload":[200,200]},"ship":{"mass":500,"speed":[0.01,0.01],"rotation":[120,120],"acceleration":[120,120]}},"bodies":{"a":{"section_segments":[40,90,135,225,270,320],"offset":{"x":0,"y":-40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[5,0,5,40,42,35,45,47,70,74,70],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,5,15,11,11,7,10,10,7,0],"height":[0,0.5,3,10,8,5,8,8,8,6,0],"texture":[17,3,8,13,17,17,63,4,17,17],"propeller":1,"laser":{"damage":[50,50],"rate":1.3,"type":1,"speed":[200,200],"recoil":0,"number":1,"error":0}},"b":{"section_segments":6,"offset":{"x":0,"y":-32,"z":2},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,5,25,29,35],"z":[0,0,0,0.5,0,0,0,0,0,0,0,0]},"width":[0,3,7.5,7.5,0],"height":[0,4,9,8,0],"texture":[7,9,4],"propeller":false},"c":{"section_segments":[45,135,225,315],"offset":{"x":1,"y":12,"z":-2.7},"position":{"x":[0,0,-11,-15,0,0,0,0,0,0,0,0],"y":[0,0,12,20],"z":[0,0,3,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,4],"height":[0,1,1,1],"texture":[17,17,16],"propeller":false,"angle":90},"d":{"section_segments":8,"offset":{"x":20.01,"y":0,"z":-1},"position":{"x":[-0.2,0,-0.3,-0.3,0,0,0,0,0,0,0,0,0,0],"y":[5,15,10,9.5,15,16,34,35,40,35],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2,4.5,5,7,7,7,7,5,0],"height":[0,2,4.5,5,7,7,7,7,5,0],"texture":[16,13,17,4,17,18,17,13,17],"propeller":1,"angle":0},"d2":{"section_segments":8,"offset":{"x":20,"y":0,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[5,15,10,15,16,34,35,40,35],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2,5,7,7,7,7,5,0],"height":[0,2,5,7,7,7,7,5,0],"texture":[17,13,4,17,11,17,13,17],"propeller":0,"angle":0},"e":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":11,"z":5.5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-4,-4,5,24,27,27],"z":[-1.2,-1.2,0,0,-1.5,-1.5,0,0,0,0,0,0]},"width":[0,0.3,2,2,1,0],"height":[0,0.3,2,2,1.5,0],"texture":[1,2,3,2],"propeller":0,"angle":0},"e2":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":11,"z":-7.5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-4,-4,5,24,27,27],"z":[1.5,1.5,0,0,1.5,1.5,0,0,0,0,0,0]},"width":[0,0.1,2,2,1,0],"height":[0,0.1,2,2,1.5,0],"texture":[1,2,3,2],"propeller":0,"angle":0},"f":{"section_segments":6,"offset":{"x":26,"y":11,"z":-1},"position":{"x":[-1.8,-1.8,0,0,-1.2,-1.2,0,0,0,0,0,0],"y":[-4,-4,5,24,27,27],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,0.1,2,2,1.5,0],"height":[0,0.1,2,2,1,0],"texture":[2,2,3,2],"propeller":0,"angle":0},"f2":{"section_segments":6,"offset":{"x":14,"y":11,"z":-1},"position":{"x":[1.8,1.8,0,0,1.2,1.2,0,0,0,0,0,0],"y":[-4,-4,5,24,27,27],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,0.1,2,2,1.5,0],"height":[0,0.1,2,2,1,0],"texture":[2,2,3,2],"propeller":0,"angle":0},"g":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":6,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,4.4,5,19,19.4,23,23],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,8,8,8,8,6,0],"height":[0,10,10,10,10,10,10,0],"texture":[3,3,17,18,17,3],"propeller":0,"angle":0},"h":{"section_segments":[45,135,225,315],"offset":{"x":1,"y":5,"z":-25},"position":{"x":[0,0,6,6,0,0,0,0,0,0,0,0],"y":[0,0,8,8],"z":[0,0,10,10,0,0,0,0,0,0,0,0]},"width":[0,0.5,0.5,0],"height":[0,5,3,0],"texture":[17],"propeller":0,"vertical":true},"i":{"section_segments":[45,135,225,315],"offset":{"x":1,"y":5,"z":-25},"position":{"x":[0,0,6,6,0,0,0,0,0,0,0,0],"y":[0,0,8,8],"z":[0,0,10,10,0,0,0,0,0,0,0,0]},"width":[0,0.9,0.9,0],"height":[0,4,2,0],"texture":[18],"propeller":0,"vertical":true},"j":{"section_segments":6,"offset":{"x":7,"y":14,"z":12},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,-10,0,8,10,10],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,2,2,1,0],"height":[0,1,2,2,1,0],"texture":[17,3,10,63],"propeller":0,"angle":-10},"k":{"section_segments":[40,90,135,225,270,320],"offset":{"x":0,"y":12,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1,15,16,16],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,11,11,11,11,0],"height":[0,7,7,7,7,0],"texture":[4,17,10.92,17,4],"propeller":0,"angle":0},"l":{"section_segments":[40,90,135,225,270,320],"offset":{"x":0,"y":-32,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,30,31.7,31.7],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6.5,15.5,15.5,0],"height":[0,3,9,9,0],"texture":[4,4,63],"propeller":0,"angle":0},"l2":{"section_segments":8,"offset":{"x":6,"y":0,"z":1},"position":{"x":[-5.1,-5.1,0.7,0],"y":[2,2,31.8,31.8],"z":[4,4,0,0]},"width":[0,0.5,0.5,0],"height":[0,0.5,0.2,0],"texture":[17],"propeller":0,"angle":180},"l3":{"section_segments":8,"offset":{"x":6,"y":0,"z":1},"position":{"x":[-5.3,-8.3,0.7,0],"y":[2,2,31.8,31.8],"z":[0,0,0,0]},"width":[0,0.5,0.5,0],"height":[0,0.5,0.2,0],"texture":[17],"propeller":0,"angle":180},"a1":{"section_segments":8,"offset":{"x":20,"y":16.5,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,7.5,7.5,0],"height":[0,7.5,7.5,0],"texture":[63],"propeller":0,"angle":0},"a2":{"section_segments":8,"offset":{"x":20,"y":20.5,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,7.5,7.5,0],"height":[0,7.5,7.5,0],"texture":[17],"propeller":0,"angle":0},"a3":{"section_segments":8,"offset":{"x":20,"y":24.5,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,7.5,7.5,0],"height":[0,7.5,7.5,0],"texture":[3],"propeller":0,"angle":0},"a4":{"section_segments":8,"offset":{"x":20,"y":28.5,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,7.5,7.5,0],"height":[0,7.5,7.5,0],"texture":[17],"propeller":0,"angle":0},"a5":{"section_segments":8,"offset":{"x":20,"y":32.5,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,7.5,7.5,0],"height":[0,7.5,7.5,0],"texture":[63],"propeller":0,"angle":0},"b1":{"section_segments":[45,135,225,315],"offset":{"x":1,"y":8,"z":-2.7},"position":{"x":[0,3,-11,-15,0,0,0,0,0,0,0,0],"y":[0,0,12,20],"z":[0,0,3,0,0,0,0,0,0,0,0,0]},"width":[0,1,2,0.8],"height":[0,1.5,1.5,1.5],"texture":[8],"propeller":false,"angle":90},"c1":{"section_segments":6,"offset":{"x":7,"y":14,"z":12},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1,1],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2.3333333333333335,2.25,0],"height":[0,2.3333333333333335,2.3333333333333335,0],"texture":[16.9],"propeller":0,"angle":-10},"b2":{"section_segments":[45,135,225,315],"offset":{"x":1,"y":12,"z":-2.7},"position":{"x":[0,3,-11,-15,0,0,0,0,0,0,0,0],"y":[0,0,12,20],"z":[0,0,3,0,0,0,0,0,0,0,0,0]},"width":[0,1,2,0.8],"height":[0,1.5,1.5,1.5],"texture":[3],"propeller":false,"angle":90},"c2":{"section_segments":6,"offset":{"x":6.5,"y":17,"z":12},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1,1],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2.6666666666666665,2.5,0],"height":[0,2.6666666666666665,2.6666666666666665,0],"texture":[16.9],"propeller":0,"angle":-10},"b3":{"section_segments":[45,135,225,315],"offset":{"x":1,"y":16,"z":-2.7},"position":{"x":[0,3,-11,-15,0,0,0,0,0,0,0,0],"y":[0,0,12,20],"z":[0,0,3,0,0,0,0,0,0,0,0,0]},"width":[0,1,2,0.8],"height":[0,1.5,1.5,1.5],"texture":[8],"propeller":false,"angle":90},"c3":{"section_segments":6,"offset":{"x":6,"y":20,"z":12},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,1,1],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,2.75,0],"height":[0,3,3,0],"texture":[16.9],"propeller":0,"angle":-10}},"typespec":{"name":"Yeetus-Speedster","level":6,"model":6,"code":606,"specs":{"shield":{"capacity":[100,100],"reload":[0.01,0.01]},"generator":{"capacity":[50,50],"reload":[200,200]},"ship":{"mass":500,"speed":[0.01,0.01],"rotation":[120,120],"acceleration":[120,120]}},"shape":[2.241,2.144,1.829,1.514,1.28,1.134,1.029,0.96,0.913,0.881,0.866,0.875,0.875,0.84,1.157,1.533,1.747,1.914,2.124,2.435,2.628,2.642,2.475,1.944,1.938,1.908,1.938,1.944,2.475,2.642,2.628,2.435,2.124,1.914,1.747,1.533,1.157,0.838,0.875,0.875,0.866,0.881,0.913,0.96,1.029,1.134,1.28,1.514,1.829,2.144],"lasers":[{"x":0,"y":-0.8,"z":0,"angle":0,"damage":[50,50],"rate":1.3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.642}}';
var ships = [];
for (let ship in s) ships.push(s[ship]);

this.options = {
  custom_map: "",
  starting_ship: 606,
  root_mode: "",
  ships: ships
};

this.tick = function (game){
  if (game.step % 90 === 0) if (game.asteroids.length < 200) game.ships.forEach(ship => spawnAsteroid(ship));
  if (game.step % 15 === 0){
    game.asteroids.forEach(asteroid => targetPlayer(game.ships[0], asteroid, 0.22));
    for (let ship of game.ships) if (ship.shield <= 90) ship.set({kill:true});
  }
};

game.modding.commands.kill = function(){
  game.asteroids.forEach(asteroid => asteroid.set({kill:true}));
};

game.modding.commands.kick = function(req){
  let args=req.replace(/^\s+/,"").replace(/\s+/," ").split(" "),id=Number(args[1]||"NaN");
  game.ships[id].gameover({"":""});
  echo(game.ships[id].name+" Was kicked");
};







