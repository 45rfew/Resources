this.options = {
  root_mode: "survival",
  map_size: 30,
  custom_map: []
};

const hues = [0xff0000,0xff00ff,0x0000ff,0x00ff00,0xffff00,0xff8000,0x00ffff];

const cow = {
  id: "cow",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Cow.obj",
  emissiveColor: hues[0]
};

const cow1 = {
  id: "cow1",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Cow.obj",
  emissiveColor: hues[1]
};

const cow2 = {
  id: "cow2",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Cow.obj",
  emissiveColor: hues[2]
};

const cow3 = {
  id: "cow3",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Cow.obj",
  emissiveColor: hues[3]
};

const cow4 = {
  id: "cow4",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Cow.obj",
  emissiveColor: hues[4]
};

const cow5 = {
  id: "cow5",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Cow.obj",
  emissiveColor: hues[5]
};

const cow6 = {
  id: "cow6",
  obj: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Cow.obj",
  emissiveColor: hues[6]
};


for (let i=0; i<100; i++){
  let rand = Math.random()*2;
  game.setObject({
    id: "cow"+i,
    type: cow,
    position: {x:Math.cos(Math.random()*Math.PI*2)*360,y:Math.sin(Math.random()*Math.PI*2)*360,z:Math.floor(Math.random()*3)},
    rotation: {x:Math.floor(Math.random()*3),y:Math.floor(Math.random()*3),z:Math.floor(Math.random()*3)},
    scale: {x:rand,y:rand,z:rand}
  });  
  game.setObject({
    id: "cow1"+i,
    type: cow1,
    position: {x:Math.cos(Math.random()*Math.PI*2)*360,y:Math.sin(Math.random()*Math.PI*2)*360,z:Math.floor(Math.random()*3)},
    rotation: {x:Math.floor(Math.random()*3),y:Math.floor(Math.random()*3),z:Math.floor(Math.random()*3)},
    scale: {x:rand,y:rand,z:rand}
  });  
  game.setObject({
    id: "cow2"+i,
    type: cow2,
    position: {x:Math.cos(Math.random()*Math.PI*2)*360,y:Math.sin(Math.random()*Math.PI*2)*360,z:Math.floor(Math.random()*3)},
    rotation: {x:Math.floor(Math.random()*3),y:Math.floor(Math.random()*3),z:Math.floor(Math.random()*3)},
    scale: {x:rand,y:rand,z:rand}
  });  
  game.setObject({
    id: "cow3"+i,
    type: cow3,
    position: {x:Math.cos(Math.random()*Math.PI*2)*360,y:Math.sin(Math.random()*Math.PI*2)*360,z:Math.floor(Math.random()*3)},
    rotation: {x:Math.floor(Math.random()*3),y:Math.floor(Math.random()*3),z:Math.floor(Math.random()*3)},
    scale: {x:rand,y:rand,z:rand}
  });  
  game.setObject({
    id: "cow4"+i,
    type: cow4,
    position: {x:Math.cos(Math.random()*Math.PI*2)*360,y:Math.sin(Math.random()*Math.PI*2)*360,z:Math.floor(Math.random()*3)},
    rotation: {x:Math.floor(Math.random()*3),y:Math.floor(Math.random()*3),z:Math.floor(Math.random()*3)},
    scale: {x:rand,y:rand,z:rand}
  });  
  game.setObject({
    id: "cow5"+i,
    type: cow5,
    position: {x:Math.cos(Math.random()*Math.PI*2)*360,y:Math.sin(Math.random()*Math.PI*2)*360,z:Math.floor(Math.random()*3)},
    rotation: {x:Math.floor(Math.random()*3),y:Math.floor(Math.random()*3),z:Math.floor(Math.random()*3)},
    scale: {x:rand,y:rand,z:rand}
  });  
  game.setObject({
    id: "cow6"+i,
    type: cow6,
    position: {x:Math.cos(Math.random()*Math.PI*2)*360,y:Math.sin(Math.random()*Math.PI*2)*360,z:Math.floor(Math.random()*3)},
    rotation: {x:Math.floor(Math.random()*3),y:Math.floor(Math.random()*3),z:Math.floor(Math.random()*3)},
    scale: {x:rand,y:rand,z:rand}
  });    
}
