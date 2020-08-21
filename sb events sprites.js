var pumpkin = {
  id: "pumpkin",
  obj: "https://starblast.data.neuronality.com/models/halloween/pumpkin/model.obj",
  diffuse: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/Img/pumpkin%20lambert.jpg",
  emissive: "https://starblast.data.neuronality.com/models/halloween/pumpkin/emissive.jpg",
};

game.setObject({
  id: "pumpkin",
  type: pumpkin,
  position: {x:0,y:0,z:0},
  rotation: {x:Math.PI/2,y:0,z:0},
  scale: {x:3,y:3,z:3}
}); 

var present = {
  id: "present",
  obj: "https://starblast.data.neuronality.com/models/xmas/gift/model.obj",
  diffuse: "https://starblast.data.neuronality.com/models/xmas/gift/lambert.jpg",
  emissive: "https://starblast.data.neuronality.com/models/xmas/gift/emissive.jpg",
  specular: "https://starblast.data.neuronality.com/models/xmas/gift/specular.jpg"
};

game.setObject({
  id: "present",
  type: present,
  position: {x:0,y:0,z:0},
  rotation: {x:0,y:0,z:0},
  scale: {x:3,y:3,z:3}
}); 
