
this.options = {
  map_size: 90
};

var cloud1 = {
  id: "cloud1",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/cloud3.png",
  transparent: true
};

var cloud2 = {
  id: "cloud2",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/Cloud4.png",
  transparent: true
};

var megu = {
  id: "megu",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/megu.jpg",
  transparent: true
};

var megu2 = {
  id: "megu2",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/45rfew/Starblast-mods-n-objs/master/megu2.png",
  transparent: true
};

var hmerc = {
  id: "hmerc",
  obj: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/HMerc.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture_blue2.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0x0000FF,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};

var toscain = {
  id: "toscain",
  obj: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/Toscain.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0xFF0000,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};


game.setObject({
  id: "hmerc",
  type:hmerc,
  position:{x:30*Math.cos((Math.PI*2)/6),y:-30*Math.sin((Math.PI*2)/6),z:-20},
  scale:{x:22/2,y:22/2,z:22/2},
  rotation:{x:-0.4,y:0,z:(Math.PI*2)/8*3}
});
game.setObject({
  id: "toscain",
  type:toscain,
  position:{x:-30*Math.cos((Math.PI*2)/6),y:-30*Math.sin((Math.PI*2)/6),z:-20},
  scale:{x:17/2,y:17/2,z:17/2},
  rotation:{x:-0.4,y:0,z:(Math.PI*2)/8}
});
/*game.setObject({
  id: "megu",
  type: megu,
  position:{x:0,y:0,z:-30},
  scale:{x:-25,y:-25,z:-25},
  rotation:{x:0,y:0,z:0}
});*/
game.setObject({
  id: "megu2",
  type: megu2,
  position:{x:-5,y:0,z:-25},
  scale:{x:30,y:-30,z:-30},
  rotation:{x:0,y:0,z:0}
});
for(i=-50;i<51;i+=5){  
  for(g=-70;g<21;g+=5){
    var c = Math.random()*10+5;
    if(Math.random() < 0.03){  
      game.setObject({
      id:"cloud1"+i+":"+g,
      type:cloud1,
      position:{x:i,y:g,z:-35+Math.random()*15},
      scale:{x:c,y:c,z:c},
      rotation: {x:0,y:0,z:Math.random()*6.2}
      });
    }
    else if (Math.random() < 0.02){ 
      game.setObject({
      id:"cloud2"+i+":"+g,
      type:cloud2,
      position:{x:i,y:g,z:-35+Math.random()*15},
      scale:{x:c,y:c,z:c},  
      rotation: {x:0,y:0,z:Math.random()*6.2}
      });
    }
  }
}

