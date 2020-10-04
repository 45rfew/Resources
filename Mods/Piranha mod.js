//TODO: make the mod playable
var ships = [];
var Odyssey = '{"name":"Odyssey","level":7,"model":1,"size":4,"specs":{"shield":{"capacity":[750,750],"reload":[15,15]},"generator":{"capacity":[330,330],"reload":[150,150]},"ship":{"mass":700,"speed":[45,45],"rotation":[20,20],"acceleration":[150,150]}},"tori":{"circle":{"segments":20,"radius":95,"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[63,63,4,10,4,4,10,4,63,63,63,63,3,10,3,3,10,3,63]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-130,-85,-70,-60,-20,-25,40,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,40,45,10,12,30,30,40,30,0],"height":[0,20,25,25,10,12,25,25,20,10,0],"texture":[4,15,63,4,4,4,11,10,4,12]},"laser1":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"laser":{"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"error":0}},"laser2":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"angle":180,"laser":{"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"error":0}},"cannon":{"section_segments":6,"offset":{"x":0,"y":-115,"z":0},"position":{"x":[0,0,0,0],"y":[-25,-30,-20,0],"z":[0,0,0,0]},"width":[0,15,9,7],"height":[0,10,9,7],"texture":[6,6,6,10],"laser":{"damage":[250,250],"rate":1,"type":1,"speed":[100,100],"number":1,"error":0,"recoil":300}},"cockpit":{"section_segments":10,"offset":{"x":0,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"bumpers":{"section_segments":8,"offset":{"x":85,"y":20,"z":0},"position":{"x":[-5,0,5,10,5,0,-5],"y":[-85,-80,-40,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,5,0],"height":[0,20,35,35,25,15,0],"texture":[11,2,63,4,3],"angle":0},"toppropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true},"bottompropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true}},"wings":{"topjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[25],"position":[0,0,0,50],"texture":[1],"bump":{"position":10,"size":30}},"bottomjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[-25],"position":[0,0,0,50],"texture":[1],"bump":{"position":-10,"size":30}}},"typespec":{"name":"Odyssey","level":7,"model":1,"code":701,"specs":{"shield":{"capacity":[750,750],"reload":[15,15]},"generator":{"capacity":[330,330],"reload":[150,150]},"ship":{"mass":700,"speed":[45,45],"rotation":[20,20],"acceleration":[150,150]}},"shape":[11.623,11.646,10.525,8.979,7.873,3.633,3.688,8.551,8.989,8.821,9.353,9.348,9.272,9.272,9.348,9.353,8.977,9.064,9.121,4.686,5.299,6.216,7.781,8.276,8.144,7.775,8.144,8.276,7.781,6.216,5.299,4.686,9.121,9.064,8.977,9.353,9.348,9.272,9.272,9.348,9.353,8.821,8.989,8.551,3.688,3.633,7.873,8.979,10.525,11.646],"lasers":[{"x":8.8,"y":-2.4,"z":0,"angle":0,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-8.8,"y":-2.4,"z":0,"angle":0,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":8.8,"y":2.4,"z":0,"angle":180,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-8.8,"y":2.4,"z":0,"angle":-180,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-11.6,"z":0,"angle":0,"damage":[250,250],"rate":1,"type":1,"speed":[100,100],"number":1,"spread":0,"error":0,"recoil":300}],"radius":11.646}}';

var Odyssey2 = "";
Odyssey2 = JSON.parse(Odyssey);
Odyssey2.model = 2;
Odyssey2.size = 4.5;
Odyssey2.typespec.specs.ship.speed = [60,60];
Odyssey2.typespec.specs.ship.acceleration = [170,170];
Odyssey2.typespec.specs.ship.rotation = [30,30];
Odyssey2.typespec.specs.ship.mass = 850;
Odyssey2.typespec.specs.shield.capacity = [800,800];
Odyssey2.typespec.specs.shield.reload = [17,17];
Odyssey2.typespec.specs.generator.capacity = [330,330];
Odyssey2.typespec.specs.generator.reload = [150,150];
Odyssey2 = JSON.stringify(Odyssey2);

var Odyssey3 = "";
Odyssey3 = JSON.parse(Odyssey);
Odyssey3.model = 3;
Odyssey3.size = 5;
Odyssey3.typespec.specs.ship.speed = [65,65];
Odyssey3.typespec.specs.ship.acceleration = [180,180];
Odyssey3.typespec.specs.ship.rotation = [36,36];
Odyssey3.typespec.specs.ship.mass = 1000;
Odyssey3.typespec.specs.shield.capacity = [900,900];
Odyssey3.typespec.specs.shield.reload = [25,25];
Odyssey3.typespec.specs.generator.capacity = [360,360];
Odyssey3.typespec.specs.generator.reload = [200,200];
Odyssey3.typespec.lasers[4] = {
  "x":0,"y":-11.6,"z":0,"angle":0,
  "damage":[250,250],"rate":2,"type":1,
  "speed":[100,100],"number":1,"spread":0,
  "error":0,"recoil":300
};
Odyssey3 = JSON.stringify(Odyssey3);

var Shadow_X_3 = '{"name":"Shadow X-3","level":7,"model":4,"size":2.5,"specs":{"shield":{"capacity":[400,400],"reload":[12,12]},"generator":{"capacity":[225,225],"reload":[50,50]},"ship":{"mass":300,"speed":[130,130],"rotation":[35,35],"acceleration":[90,90]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-128,-115,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,20,30,30,30,20,0],"height":[0,5,10,30,20,10,10,15,15,15,10,10],"texture":[12,3,15,4,63,63,4,4,5],"laser":{"damage":[200,200],"rate":1,"type":1,"speed":[200,200],"number":1,"error":0,"recoil":500}},"air":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,-80,-30,-10,10,30,50],"z":[0,0,0,0,0,0,0]},"width":[0,25,35,30,30,32,20],"height":[0,15,10,10,10,10,10,15,15,15,10,10],"texture":[4,3,2,2,2,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,22,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-25,0,25,60,90,100],"z":[0,0,0,0,-10,-8,-10]},"width":[0,10,15,10,20,15,10],"height":[0,15,20,10,10,10,10],"texture":[9,9,9,10,63,3]},"laser":{"section_segments":10,"offset":{"x":90,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,7],"rate":3,"type":1,"speed":[150,150],"number":1}},"laser2":{"section_segments":10,"offset":{"x":50,"y":-20,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,7],"rate":4,"type":1,"speed":[150,150],"number":1}}},"wings":{"wings":{"offset":{"x":10,"y":0,"z":0},"length":[35,15,30,25],"width":[100,50,60,30,45],"angle":[-10,20,0,0],"position":[0,0,10,30,-10],"texture":[4],"bump":{"position":-20,"size":15}}},"typespec":{"name":"Shadow X-3","level":7,"model":2,"code":702,"specs":{"shield":{"capacity":[400,400],"reload":[12,12]},"generator":{"capacity":[225,225],"reload":[50,50]},"ship":{"mass":300,"speed":[130,130],"rotation":[35,35],"acceleration":[90,90]}},"shape":[6.5,6.068,4.366,3.971,3.26,2.789,3.571,3.73,3.692,3.514,5.906,5.859,5.721,5.71,5.65,5.425,5.886,6.211,6.384,5.843,3.244,2.675,4.759,5.353,5.344,5.26,5.344,5.353,4.759,2.675,3.244,5.843,6.384,6.211,5.886,5.425,5.65,5.71,5.721,5.859,5.906,3.514,3.692,3.73,3.571,2.789,3.26,3.971,4.366,6.068],"lasers":[{"x":0,"y":-6.5,"z":0,"angle":0,"damage":[200,200],"rate":1,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":500},{"x":4.5,"y":-1,"z":-0.95,"angle":0,"damage":[7,7],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-4.5,"y":-1,"z":-0.95,"angle":0,"damage":[7,7],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.5,"y":-2.5,"z":-1,"angle":0,"damage":[7,7],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.5,"y":-2.5,"z":-1,"angle":0,"damage":[7,7],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.5}}';
var Shadow_X_32 = "";
Shadow_X_32 = JSON.parse(Shadow_X_3);
Shadow_X_32.model = 5;
Shadow_X_32.size = 3;
Shadow_X_32.typespec.specs.ship.speed = [150,150];
Shadow_X_32.typespec.specs.ship.acceleration = [90,90];
Shadow_X_32.typespec.specs.ship.rotation = [50,50];
Shadow_X_32.typespec.specs.ship.mass = 450;
Shadow_X_32.typespec.specs.shield.capacity = [450,450];
Shadow_X_32.typespec.specs.shield.reload = [15,15];
Shadow_X_32.typespec.specs.generator.capacity = [225,225];
Shadow_X_32.typespec.specs.generator.reload = [60,60];
Shadow_X_32.typespec.lasers[0] = {
  "x":0,"y":-7.8,"z":0,"angle":0,
  "damage":[200,200],"rate":1,"type":1,
  "speed":[200,200],"number":1,"spread":0,
  "error":0,"recoil":900
};
Shadow_X_32 = JSON.stringify(Shadow_X_32);

var Shadow_X_33 = "";
Shadow_X_33 = JSON.parse(Shadow_X_3);
Shadow_X_33.model = 6;
Shadow_X_33.size = 4;
Shadow_X_33.typespec.specs.ship.speed = [156,156];
Shadow_X_33.typespec.specs.ship.acceleration = [75,75];
Shadow_X_33.typespec.specs.ship.rotation = [55,55];
Shadow_X_33.typespec.specs.ship.mass = 600;
Shadow_X_33.typespec.specs.shield.capacity = [550,550];
Shadow_X_33.typespec.specs.shield.reload = [17,17];
Shadow_X_33.typespec.specs.generator.capacity = [550,550];
Shadow_X_33.typespec.specs.generator.reload = [120,120];
Shadow_X_33.typespec.lasers[0] = {
  "x":0,"y":-7.8,"z":0,"angle":0,
  "damage":[200,200],"rate":1,"type":1,
  "speed":[200,200],"number":2,"spread":0,
  "error":0,"recoil":500
};
Shadow_X_33 = JSON.stringify(Shadow_X_33);

var Bastion = '{"name":"Bastion","level":7,"model":7,"size":5,"specs":{"shield":{"capacity":[400,400],"reload":[20,20]},"generator":{"capacity":[500,500],"reload":[100,100]},"ship":{"mass":350,"speed":[80,80],"rotation":[15,15],"acceleration":[125,125]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":50,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-50,-20,0,20,40,25],"z":[0,0,0,0,0,0,0]},"width":[0,5,22,18,16,15,0],"height":[0,2,12,16,16,15,0],"texture":[10,1,1,10,8,17],"propeller":true},"thrusters":{"section_segments":8,"offset":{"x":40,"y":43,"z":-24},"position":{"x":[0,0,0,0,0,0],"y":[-25,-20,0,20,40,30],"z":[0,0,0,0,0,0]},"width":[0,8,12,8,8,0],"height":[0,12,12,8,8,0],"texture":[63,2,2,2,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":30,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,-10,0,11,35],"z":[-5,-3,-1,0,0]},"width":[0,5,10,10,0],"height":[0,3,5,7,0],"texture":[9]},"cannon1":{"section_segments":4,"offset":{"x":10,"y":-80,"z":1},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"laser":{"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1}},"cannon2":{"section_segments":4,"offset":{"x":42,"y":-129,"z":8},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"angle":3,"laser":{"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1}},"cannon3":{"section_segments":4,"offset":{"x":75,"y":-105,"z":-8},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"angle":5,"laser":{"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1}}},"wings":{"main1":{"doubleside":true,"offset":{"x":9,"y":15,"z":0},"length":[0,15,0,7],"width":[0,160,70,30,30],"angle":[0,20,0,-10],"position":[30,-20,30,30,30],"texture":[13,63,13,8],"bump":{"position":35,"size":5}},"main2":{"doubleside":true,"offset":{"x":30,"y":15,"z":0},"length":[0,15,0,20],"width":[0,80,90,200,30],"angle":[30,30,30,30],"position":[30,30,10,-45,30],"texture":[13,3,13,4],"bump":{"position":35,"size":7}},"main3":{"doubleside":true,"offset":{"x":0,"y":25,"z":-7},"length":[45,35,0,20],"width":[40,40,40,200,40],"angle":[-20,20,-20,-5],"position":[20,30,0,-30,10],"texture":[0,8,13,63],"bump":{"position":35,"size":20}}},"typespec":{"name":"Bastion","level":7,"model":3,"code":703,"specs":{"shield":{"capacity":[400,400],"reload":[20,20]},"generator":{"capacity":[500,500],"reload":[100,100]},"ship":{"mass":350,"speed":[80,80],"rotation":[15,15],"acceleration":[125,125]}},"shape":[4.056,7.244,11.603,11.152,9.19,10.943,9.896,9.163,8.149,7.735,7.473,7.332,7.401,7.615,7.85,8.175,8.679,8.889,9.155,9.588,9.692,7.67,7.338,6.661,7.299,7.214,7.299,6.661,7.338,7.67,9.692,9.588,9.155,8.889,8.679,8.175,7.85,7.615,7.401,7.332,7.473,7.735,8.149,9.163,9.896,10.943,9.19,11.152,11.603,7.244],"lasers":[{"x":0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.318,"y":-11.119,"z":0.64,"angle":3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.318,"y":-11.119,"z":0.64,"angle":-3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.93,"y":-9.197,"z":-0.64,"angle":5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.93,"y":-9.197,"z":-0.64,"angle":-5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":11.603}}';

var Aries = '{"name":"Aries","level":7,"model":8,"size":4.5,"specs":{"shield":{"capacity":[800,800],"reload":[17,17]},"generator":{"capacity":[350,350],"reload":[175,175]},"ship":{"mass":800,"speed":[40,40],"rotation":[20,20],"acceleration":[150,150]}},"bodies":{"arm":{"section_segments":6,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90,85],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,15,20,20,15,0],"height":[0,10,12,8,12,12,8,12,10,5,0],"texture":[4,63,4,4,4,4,4,63,3],"propeller":true},"arm45":{"section_segments":6,"angle":45,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"arm90":{"section_segments":6,"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"arm135":{"section_segments":6,"angle":-45,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-10,10,60,70,85,90],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,12,12,10,25,20,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cockpit":{"section_segments":20,"offset":{"x":0,"y":-10,"z":8},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-35,-25,-15,0,15,25,35,70],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,20,25,20,10,15,15,0],"height":[0,10,13,15,15,15,12,10,0],"texture":[6,15,15,1,4,3,3,15]},"topcockpit":{"section_segments":16,"offset":{"x":0,"y":-23,"z":7},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-63,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-25,-30,-20,0,10,12],"z":[0,0,0,0,0,0]},"width":[0,10,8,7,6,0],"height":[0,5,5,7,6,0],"texture":[6,6,6,10,12],"laser":{"damage":[150,150],"rate":0.7,"type":1,"speed":[110,110],"number":1,"error":0}},"sidecannons":{"section_segments":6,"offset":{"x":45,"y":-45,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[0,-30,-20,0,10,12],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":-45,"laser":{"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"error":0}},"backsidecannons":{"section_segments":6,"offset":{"x":45,"y":45,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[0,-30,-20,0,10,12],"z":[0,0,0,0,-5,-10]},"width":[0,3,5,7,6,0],"height":[0,3,5,7,6,0],"texture":[6,6,15,4,4],"angle":225,"laser":{"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"error":0}}},"wings":{"side_joins":{"offset":{"x":0,"y":0,"z":5},"length":[40,30],"width":[50,30,0],"angle":[30,-10],"position":[0,0,50],"texture":[1,11],"bump":{"position":10,"size":20}}},"typespec":{"name":"Aries","level":7,"model":4,"code":704,"specs":{"shield":{"capacity":[800,800],"reload":[17,17]},"generator":{"capacity":[350,350],"reload":[175,175]},"ship":{"mass":800,"speed":[40,40],"rotation":[20,20],"acceleration":[150,150]}},"shape":[8.386,8.406,7.816,4.278,7.535,7.919,8.431,8.279,7.842,6.772,7.119,7.875,8.096,8.1,7.875,7.119,6.772,7.842,8.279,8.431,7.919,7.535,3.408,7.88,8.184,8.116,8.184,7.88,3.408,7.535,7.919,8.431,8.279,7.842,6.772,7.119,7.875,8.096,8.1,7.875,7.119,6.772,7.842,8.279,8.431,7.919,7.535,4.278,7.816,8.406],"lasers":[{"x":0,"y":-8.37,"z":0,"angle":0,"damage":[150,150],"rate":0.7,"type":1,"speed":[110,110],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.959,"y":-5.959,"z":0.63,"angle":-45,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.959,"y":-5.959,"z":0.63,"angle":45,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.959,"y":5.959,"z":0.63,"angle":225,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.959,"y":5.959,"z":0.63,"angle":-225,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":8.431}}';

ships.push(Odyssey,Odyssey2,Odyssey3);
ships.push(Shadow_X_3,Shadow_X_32,Shadow_X_33);
ships.push(Bastion);
ships.push(Aries);

var vocabulary = [
  {icon: "I", text: "Attack",key:"A"},
  {icon: "4", text: "Base",key:"B"},
  {icon: "%", text: "Defend",key:"D"},
  {icon: "O", text: "Me",key:"E"},
  {icon: "P", text: "Follow",key:"F"},
  {icon: "GG", text: "Good Game",key:"G"},
  {icon: "[", text: "Kill",key:"K"},
  {icon: "D", text: "Mine",key:"M"},
  {icon: "M", text: "No",key:"N"},
  {icon: "N", text: "You",key:"O"},
  {icon: "G", text: "No Prob",key:"P"},
  {icon: "K", text: "Hmm",key:"Q"},
  {icon: "¡", text: "Sorry",key:"S"},
  {icon: "H", text: "Wait",key:"T"},
  {icon: "A", text: "Thanks",key:"X"},
  {icon: "L", text: "Yes",key:"Y"},
  {icon: "0", text: "Piranha",key:"H"},
  {icon: "KK", text: "Why?", key:"I"}, 
  {icon: "$", text: "Love", key:"L"},
  {icon:"˙ ͜ʟ˙",text: "Bruh",  key:"M"},
  {icon:"ಠ_ಠ", text: "WTF", key:"W"} 
];

this.options = {
  vocabulary: vocabulary,
  ships: ships,
  soundtrack: "crystals.mp3",
  root_mode: "",
  asteroids_strength: 0.1,
  radar_zoom: 1,
  starting_ship: 801,
  choose_ship: [701,702,703,704],
  map_size: 30,
  survival_level: 8,
  crystal_value: 10,
  mines_self_destroy: false,
  weapons_store: false,
  max_level: 8,
  crystal_drop: 0
};

this.tick = function(game){
  if (game.step % 15 === 0){ 
    //if (game.aliens.length < 295) game.addAlien({level:0+~~(Math.random()*3),code:16,x:(Math.random()-0.5)*game.options.map_size*10,y:(Math.random()-0.5)*game.options.map_size*10,crystal_drop:50});
    if (game.collectibles.length < 50-game.ships.length){
      for (let ship of game.ships)
      if (ship.alive) 
      game.addCollectible({code:11+~~(Math.random()*2),x:ship.x,y:ship.y});
    }   
  }
  //if (game.step % 3600 === 0) game.addAlien({level:3,code:16,x:(Math.random()-0.5)*game.options.map_size*10,y:(Math.random()-0.5)*game.options.map_size*10,crystal_drop:1700});
};

this.event = function(event, game){
  let ship = event.ship;
  switch (event.name){
    case "ship_spawned":
      ship.set({crystals:980});
      break;
    case "alien_destroyed":
      let killer = event.killer;
      if (killer.custom.kills === undefined){
        killer.custom.kills = 0;
      } else { 
        killer.custom.kills++;
        killer.setUIComponent({
          id: "count",
          position: [25,10,50,25],
          clickable: false,
          visible: true,
          components: [{type:"text",position:[0,0,100,20],color:"#cde",value:"Aliens killed: "+killer.custom.kills}]
        });
      }
      break;
    case "collectible_picked":
      ship.emptyWeapons();
      setTimeout(function(){ship.emptyWeapons();},100);
    break;    
  }
};
