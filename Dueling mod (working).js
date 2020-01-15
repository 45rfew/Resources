const This_mod = "Money's dueling mod";
 
let strafe = false;
//Set strafe to true if you want strafe and vice versa
 
//Some nice little functions:
authorize = (id) => {
  game.ships[id].custom.admin_ship = true;
};
//Function allowing to enable admin ship, for yourself or other players
//To use execute authorize(id) where id is the id of the ship wanted to 
//authorize, via console

unauthorize = (id) => {
  game.ships[id].custom.admin_ship = false;
};
//Same as the authorize function, just disables admin ship for a certain player

kick = (id) => {
  game.ships[id].gameover({"":"Cya thot!"});
};
//eg: kick(1) into the console
//Kicks the player an id of 1 - the second player joined
 
say = (saysWhat,instructor = "Zoltar") => {
  for (let ship of game.ships){
    ship.instructorSays(saysWhat, instructor);
  }
};
//eg: say('Yo wazup') into the console
//Zoltar will pop up and say Yo wazup for all players
 
hide = () => {
  for (let ship of game.ships){
    ship.hideInstructor();
  }
};
//eg: hide() into the console  
//Hides the instructor for all players
 
//Don't change anything below this line unless you know what you're doing kay
 
if (strafe === true){
  strafe = 1;
} else {
  strafe = 0;
}
 
var Face_102 = '{"name":"Face","level":1,"model":2,"size":1,"zoom":0.4,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[200,200],"acceleration":[200,200]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,75,75,0],"height":[0,75,75,0],"vertical":true,"texture":[6]},"mouth":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":30,"z":0},"position":{"x":[15,15,-5,-10,-5,15,15],"y":[-50,-50,-25,0,25,50,50],"z":[0,0,0,0,0,0,0]},"width":[0,10,10,10,10,10,0],"height":[0,10,10,10,10,10,0],"vertical":false,"texture":[5]},"eyes":{"section_segments":30,"angle":0,"offset":{"x":20,"y":4,"z":30},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,0,0,0,1,1],"z":[0,0,0,0,0,0,0]},"width":[0,10,10,10,10,10,0],"height":[0,10,10,10,10,10,0],"vertical":true,"texture":[3]},"nose":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":3,"z":5},"position":{"x":[0,0,0,0],"y":[-5,-5,25,25],"z":[0,0,0,0]},"width":[0,10,0,0],"height":[0,1,1,0],"vertical":false,"texture":[2]}},"typespec":{"name":"Face","level":1,"model":2,"code":102,"specs":{"shield":{"capacity":[690,690],"reload":[1000,1000]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[200,200],"acceleration":[200,200]}},"shape":[1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5],"lasers":[],"radius":1.5}}';
var Trisbaena_191 = '{"name":"Trisbaena","level":1,"model":91,"size":0.5,"specs":{"shield":{"capacity":[500,500],"reload":[500,500]},"generator":{"capacity":[2000,2000],"reload":[500,500]},"ship":{"mass":1000,"speed":[300,300],"rotation":[100,100],"acceleration":[100,100]}},"bodies":{"main":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-330,-330,-350,-350,-310,-310,-300,-300,-270,-266,-230,-230,-200,-200,-180,-180,-150,-150,-130,-130,-100,-100,-80,-80,-50,-50,-30,-30,0,0,40,44,230,230,270,270,370,370,350,350],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,50,50,60,60,58,58,61,61,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,80,80,70,70,50,50,45,45,0],"height":[0,50,50,60,60,58,58,61,61,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,80,80,70,70,50,50,45,45,0],"texture":[4,11,18.1,18.1,4,17,4,18.1,4,4,4,18,17,17,17,18,17,17,17,18,17,17,17,18,17,17,17,18,4,18.1,18.1,4,18.1,18.1,4,18.1,17,18,13],"propeller":true},"front_spike":{"section_segments":[35,55,125,145,215,235,305,325],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-340,-340,-335,-330,-330,-340,-340,-345,-330],"z":[0,0,0,0,0,0,0,0,0]},"width":[20,40,45,45,20,20,0,0,10],"height":[20,40,45,45,20,20,0,0,10],"laser":{"damage":[320,320],"rate":10,"type":1,"speed":[300,300],"number":1,"angle":0,"error":0,"recoil":20},"texture":[17,3,1,2,4,81]},"cockpit":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":0,"z":50},"position":{"x":[0,0,0,0,0],"y":[60,65,100,140,165],"z":[0,0,0,0,20]},"width":[0,35,35,35,0],"height":[0,30,60,64,0],"texture":[7,7,7,4]},"cockpit_detail1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":90,"z":98},"position":{"x":[0,0,0,0],"y":[-40,10,50,50],"z":[-35,-3,0,0]},"width":[3,3,3,0],"height":[3,3,3,0],"texture":[4]},"cockpit_detail2":{"section_segments":[90,180,270,360],"offset":{"x":23,"y":90,"z":97},"position":{"x":[0,0,0,0],"y":[-40,10,50,50],"z":[-35,-3,0,0]},"width":[3,3,3,0],"height":[3,3,3,0],"texture":[4]},"cockpit_detail3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":140,"z":98},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-27,-27,-23,-23,23,23,27,27],"z":[-11,-11,0,0,0,0,-11,-11]},"width":[0,3,3,3,3,3,3,0],"height":[0,13,3,3,3,3,13,0],"texture":[4],"angle":90},"cockpit_detail4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":100,"z":95},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-27,-27,-23,-23,23,23,27,27],"z":[-12,-12,0,0,0,0,-12,-12]},"width":[0,3,3,3,3,3,3,0],"height":[0,15,3,3,3,3,15,0],"texture":[4],"angle":90},"cockpit_back1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-10,"z":60},"position":{"x":[0,0,0,0,0],"y":[120,120,180,190,190],"z":[0,0,0,0,0,0,0]},"width":[0,60,60,60,0],"height":[0,40,40,30,0],"texture":[3,4,5]},"cockpit_back2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-10,"z":40},"position":{"x":[0,0,0,0],"y":[130,130,195,195],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,70,70,0],"height":[0,60,60,0],"texture":[3,17]},"cockpit_back3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-10,"z":35},"position":{"x":[0,0,0,0],"y":[140,140,205,205],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,80,80,0],"height":[0,60,60,0],"texture":[3,18]},"back_joint1":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":15,"y":195,"z":69},"position":{"x":[0,0,0,0,0],"y":[0,0,30,60,60],"z":[0,0,0,-10,-10]},"width":[0,10,10,10,0],"height":[0,10,10,10,0],"texture":[17,17.95,17,4]},"back_joint2":{"section_segments":[90,180,270,360],"offset":{"x":37,"y":195,"z":60},"position":{"x":[0,0,0,-5,-5],"y":[0,0,30,60,60],"z":[0,0,0,-5,-5]},"width":[0,10,10,10,0],"height":[0,10,10,10,0],"texture":[17,17.95,17,4]},"back_joint3":{"section_segments":[90,180,270,360],"offset":{"x":57,"y":195,"z":40},"position":{"x":[0,0,0,-5,-5],"y":[0,0,30,60,60],"z":[0,0,0,-5,-5]},"width":[0,10,10,10,0],"height":[0,10,10,10,0],"texture":[17,17.95,17,4]},"wing_shields1":{"section_segments":[35,45,55,125,135,145,215,225,235,305,315,325],"offset":{"x":0,"y":95,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,30,50,50,60,60,90,105,125,125],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,130,130,120,123,140,140,120,115,0],"height":[0,30,30,30,25,25,25,25,25,25,0],"texture":[18,3,4,4,4,4,18.1,4,3]},"wing_shields2":{"section_segments":[35,45,55,125,135,145,215,225,235,305,315,325],"offset":{"x":0.01,"y":95,"z":7},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[1,0,30,50,50,59,59,90,105,125,126],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,130,130,120,123,140,140,120,115,0],"height":[0,6,6,6,5,5,5,5,5,5,0],"texture":[63]},"wing_shields3":{"section_segments":[35,45,55,125,135,145,215,225,235,305,315,325],"offset":{"x":0.01,"y":95,"z":-7},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[1,0,30,50,50,59,59,90,105,125,126],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,130,130,120,123,140,140,120,115,0],"height":[0,6,6,6,5,5,5,5,5,5,0],"texture":[63]},"joint1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":150,"z":0},"position":{"x":[0,0,0,0],"y":[-5,10,30,50],"z":[0,0,0,0]},"width":[0,210,210,0],"height":[0,15,15,0],"texture":[3]},"joint2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":150,"z":5},"position":{"x":[0,0,0,0],"y":[-5,10,30,50],"z":[0,0,0,0]},"width":[0,211,211,0],"height":[0,3,3,0],"texture":[63]},"joint3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":150,"z":-5},"position":{"x":[0,0,0,0],"y":[-5,10,30,50],"z":[0,0,0,0]},"width":[0,211,211,0],"height":[0,3,3,0],"texture":[63]},"disc1":{"section_segments":12,"offset":{"x":80,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.4,6.4,0,0,0,0,0,6.4,6.4,6.4],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"height":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"texture":[4,4,4,4,4,4,17,4],"angle":-90},"disc2":{"section_segments":12,"offset":{"x":90,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.4,6.4,0,0,0,0,0,6.4,6.4,6.4],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"height":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"texture":[4,4,4,4,4,4,17,4],"angle":-90},"disc3":{"section_segments":12,"offset":{"x":100,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.4,6.4,0,0,0,0,0,6.4,6.4,6.4],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"height":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"texture":[4,4,4,4,4,4,17,4],"angle":-90},"disc4":{"section_segments":12,"offset":{"x":115,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.4,6.4,0,0,0,0,0,6.4,6.4,6.4],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,18,18,18,18,18,15,15],"height":[15,15,15,18,18,18,18,18,15,15],"texture":[16],"angle":90},"disc5":{"section_segments":12,"offset":{"x":125,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.4,6.4,0,0,0,0,0,6.4,6.4,6.4],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,18,18,18,18,18,15,15],"height":[15,15,15,18,18,18,18,18,15,15],"texture":[16],"angle":90},"disc6":{"section_segments":16,"offset":{"x":0,"y":200,"z":75},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,18,18,18,18,18,15,15],"height":[6,6,6,7.199999999999999,7.199999999999999,7.199999999999999,7.199999999999999,7.199999999999999,6,6],"texture":[4,4,4,4,4,17,4]},"disc7":{"section_segments":16,"offset":{"x":0,"y":210,"z":75},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,18,18,18,18,18,15,15],"height":[6,6,6,7.199999999999999,7.199999999999999,7.199999999999999,7.199999999999999,7.199999999999999,6,6],"texture":[4,4,4,4,4,17,4]},"disc8":{"section_segments":16,"offset":{"x":45,"y":200,"z":47},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,18,18,18,18,18,15,15],"height":[17,17,17,20.4,20.4,20.4,20.4,20.4,17,17],"texture":[4,4,4,4,4,17,4]},"disc9":{"section_segments":16,"offset":{"x":45,"y":210,"z":47},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,18,18,18,18,18,15,15],"height":[17,17,17,20.4,20.4,20.4,20.4,20.4,17,17],"texture":[4,4,4,4,4,17,4]},"disc10":{"section_segments":16,"offset":{"x":45,"y":90,"z":47},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,24,24,24,24,24,20,20],"height":[20,20,20,24,24,24,24,24,20,20],"texture":[4,4,4,4,17,4,17,4]},"disc11":{"section_segments":16,"offset":{"x":45,"y":70,"z":47},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,24,24,24,24,24,20,20],"height":[20,20,20,24,24,24,24,24,20,20],"texture":[4,4,4,4,17,4,17,4]},"disc12":{"section_segments":16,"offset":{"x":50,"y":50,"z":-160},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[16,16,16,19.200000000000003,19.200000000000003,19.200000000000003,19.200000000000003,19.200000000000003,16,16],"height":[20,20,20,24,24,24,24,24,20,20],"texture":[4,4,4,4,17,4,17,18],"angle":45,"vertical":true},"disc13":{"section_segments":24,"offset":{"x":0,"y":160,"z":80},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[40,40,40,48,48,48,48,48,40,40],"height":[15,15,15,18,18,18,18,18,15,15],"texture":[4,4,4,4,4,17,4,4],"angle":180},"disc14":{"section_segments":24,"offset":{"x":0,"y":160,"z":80},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[40,40,40,48,48,48,48,48,40,40],"height":[15,15,15,18,18,18,18,18,15,15],"texture":[4,4,4,4,4,17,4,4]},"disc15":{"section_segments":6,"offset":{"x":0,"y":-17.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4]},"disc16":{"section_segments":6,"offset":{"x":0,"y":-12.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4],"angle":180},"disc17":{"section_segments":6,"offset":{"x":0,"y":-67.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4]},"disc18":{"section_segments":6,"offset":{"x":0,"y":-62.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4],"angle":180},"disc19":{"section_segments":6,"offset":{"x":0,"y":-117.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4]},"disc20":{"section_segments":6,"offset":{"x":0,"y":-112.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4],"angle":180},"disc21":{"section_segments":6,"offset":{"x":0,"y":-167.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4]},"disc22":{"section_segments":6,"offset":{"x":0,"y":-162.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4],"angle":180},"disc23":{"section_segments":6,"offset":{"x":0,"y":-217.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4]},"disc24":{"section_segments":6,"offset":{"x":0,"y":-212.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,3,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[18,18,18,21.6,21.6,21.6,21.6,21.6,18,18],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[3,3,3,3,3,17,4,4],"angle":180},"box":{"section_segments":[45,135,225,315],"offset":{"x":50,"y":35,"z":-85},"position":{"x":[0,0,0,0,0],"y":[-10,15,15,19,19],"z":[0,0,0,0,0]},"width":[10,10,20,20,20],"height":[30,30,50,35,0],"texture":[4,4,18,17],"vertical":true,"angle":50},"hubs1":{"section_segments":20,"offset":{"x":80,"y":20,"z":-128},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,6],"z":[0,0,0,0,0,0,0]},"width":[18,15,13,12,10,0],"height":[18,15,13,12,10,0],"texture":[18,17,17,18,18],"vertical":true},"hubs2":{"section_segments":20,"offset":{"x":80,"y":15,"z":-204},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,6],"z":[0,0,0,0,0,0,0]},"width":[12.6,10.5,9.1,8.399999999999999,7,0],"height":[12.6,10.5,9.1,8.399999999999999,7,0],"texture":[18,17,17,18,18],"vertical":true},"hubs3":{"section_segments":20,"offset":{"x":0,"y":45,"z":-310},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,6],"z":[0,0,0,0,0,0,0]},"width":[32.4,27,23.400000000000002,21.6,18,0],"height":[32.4,27,23.400000000000002,21.6,18,0],"texture":[18,17,17,18,18],"vertical":true},"hubs4":{"section_segments":20,"offset":{"x":50,"y":55,"z":-160},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,6],"z":[0,0,0,0,0,0,0]},"width":[18,15,13,12,10,0],"height":[18,15,13,12,10,0],"texture":[18,17,17,18,18],"vertical":true,"angle":70},"hubs5":{"section_segments":20,"offset":{"x":35,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,13,10.4,9.1,6.5,0],"height":[15.600000000000001,13,10.4,9.1,6.5,0],"texture":[18,18,17,17,18],"angle":90},"hubs6":{"section_segments":20,"offset":{"x":35,"y":-65,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,13,10.4,9.1,6.5,0],"height":[15.600000000000001,13,10.4,9.1,6.5,0],"texture":[18,18,17,17,18],"angle":90},"hubs7":{"section_segments":20,"offset":{"x":35,"y":-115,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,13,10.4,9.1,6.5,0],"height":[15.600000000000001,13,10.4,9.1,6.5,0],"texture":[18,18,17,17,18],"angle":90},"hubs8":{"section_segments":20,"offset":{"x":35,"y":-165,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,13,10.4,9.1,6.5,0],"height":[15.600000000000001,13,10.4,9.1,6.5,0],"texture":[18,18,17,17,18],"angle":90},"hubs9":{"section_segments":20,"offset":{"x":35,"y":-215,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,13,10.4,9.1,6.5,0],"height":[15.600000000000001,13,10.4,9.1,6.5,0],"texture":[18,18,17,17,18],"angle":90},"propeller1":{"section_segments":10,"offset":{"x":20,"y":350,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-10,-10,30,30,30,20],"z":[0,0,0,0,0,0]},"width":[0,15,15,14,14,0],"height":[0,15,15,14,14,0],"propeller":true,"texture":[3,3,17,13]},"propeller2":{"section_segments":10,"offset":{"x":20,"y":350,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-10,-10,30,30,30,20],"z":[0,0,0,0,0,0]},"width":[0,15,15,14,14,0],"height":[0,10,15,14,14,0],"propeller":true,"texture":[3,3,17,13]},"propeller_joint1":{"section_segments":4,"offset":{"x":10,"y":261,"z":-5},"position":{"x":[0,0,-30,-50,-50],"y":[0,0,60,70,70],"z":[0,0,0,-20,-20]},"width":[0,10,10,13,0],"height":[0,10,10,10,0],"angle":90,"texture":[17,18,17,17]},"propeller_joint2":{"section_segments":4,"offset":{"x":30,"y":305,"z":-5},"position":{"x":[0,0,-15,-30,-30],"y":[0,0,30,40,40],"z":[0,0,0,-20,-20]},"width":[0,10,10,13,0],"height":[0,10,10,10,0],"angle":90,"texture":[17,18,17,17]},"propeller_joint3":{"section_segments":4,"offset":{"x":10,"y":280,"z":-56},"position":{"x":[0,0,0,-30,-50,-50],"y":[0,0,20,60,70,70],"z":[15,15,0,0,20,20]},"width":[0,10,10,10,13,0],"height":[0,10,10,10,10,0],"angle":90,"texture":[4,4,18]},"propeller_joint4":{"section_segments":4,"offset":{"x":10,"y":310,"z":-56},"position":{"x":[0,0,0,-20,-40,-40],"y":[0,0,20,50,50,50],"z":[15,15,0,0,20,20]},"width":[0,10,10,10,13,0],"height":[0,10,10,10,10,0],"angle":90,"texture":[4,4,18]},"propeller_side":{"section_segments":16,"offset":{"x":80,"y":290,"z":-40},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,14,4,0,-6,0,60,66,48,48,78,72],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,20,20,22.5,25,25,20,20,14,10,0],"height":[0,5,20,20,22.5,25,25,20,20,14,10,0],"propeller":true,"texture":[3,12,4,3,4,18,4,18,13,3,13]},"propeller_side2":{"section_segments":16,"offset":{"x":80,"y":380,"z":-40},"position":{"x":[0],"y":[0],"z":[0]},"width":[25],"height":[25],"propeller":true},"top":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-220,"z":52.9},"position":{"x":[0,0,0,0],"y":[-20,-20,240,180],"z":[0,0,0,0]},"width":[0,35,35,0],"height":[0,10,10,0],"texture":[4]},"bottom":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-235,"z":-52.9},"position":{"x":[0,0,0,0],"y":[0,0,240,180],"z":[0,0,0,0]},"width":[0,35,35,0],"height":[0,10,10,0],"texture":[4]},"side":{"section_segments":[45,135,225,315],"offset":{"x":52.9,"y":-235,"z":0},"position":{"x":[0,0,0,0],"y":[0,0,240,180],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,35,35,0],"texture":[4]},"propeller_support1":{"section_segments":[45,135,225,315],"offset":{"x":15,"y":10,"z":-300},"position":{"x":[0,0,0,0],"y":[0,0,40,40],"z":[0,0,0,0]},"width":[0,25,10,0],"height":[0,100,80,0],"angle":45,"vertical":true,"texture":[17,4,17]},"propeller_support2":{"section_segments":[45,135,225,315],"offset":{"x":15,"y":-10,"z":-300},"position":{"x":[0,0,0,0],"y":[0,0,40,40],"z":[0,0,0,0]},"width":[0,25,10,0],"height":[0,100,80,0],"angle":135,"vertical":true,"texture":[17,4,17]},"gun_holder1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":40,"z":10},"position":{"x":[0,0,0,0],"y":[-10,-10,10,10],"z":[0,0,0,0]},"width":[0,20,20,0],"height":[0,80,90,0],"texture":[1]},"gun_holder2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":40,"z":0},"position":{"x":[0,0,0,0],"y":[-10,-10,10,10],"z":[0,0,0,0]},"width":[0,100,90,0],"height":[0,20,20,0],"angle":180,"texture":[1]},"gun_holder3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":40,"z":-10},"position":{"x":[0,0,0,0],"y":[-10,-10,10,10],"z":[0,0,0,0]},"width":[0,20,20,0],"height":[0,80,90,0],"texture":[1]},"bars_top1":{"section_segments":6,"offset":{"x":31,"y":-110,"z":41},"position":{"x":[0,0,0,0],"y":[-120,-120,120,120],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[13]},"bars_top2":{"section_segments":6,"offset":{"x":40,"y":-110,"z":32},"position":{"x":[0,0,0,0],"y":[-120,-120,120,120],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[13]},"bars_bottom1":{"section_segments":6,"offset":{"x":31,"y":-110,"z":-41},"position":{"x":[0,0,0,0],"y":[-120,-120,120,120],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[13]},"bars_bottom2":{"section_segments":6,"offset":{"x":40,"y":-110,"z":-32},"position":{"x":[0,0,0,0],"y":[-120,-120,120,120],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":[13]}},"wings":{"main":{"length":[40,70,40],"width":[40,90,90,40],"angle":[50,90,130],"position":[0,0,0,0],"doubleside":true,"offset":{"x":120,"y":170,"z":-65},"bump":{"position":0,"size":15},"texture":[4,18,4]}},"typespec":{"name":"Trisbaena","level":1,"model":91,"code":191,"specs":{"shield":{"capacity":[500,500],"reload":[500,500]},"generator":{"capacity":[2000,2000],"reload":[500,500]},"ship":{"mass":1000,"speed":[300,300],"rotation":[100,100],"acceleration":[100,100]}},"shape":[3.507,3.544,3.005,1.943,1.431,1.121,1.004,0.878,0.742,0.699,0.688,0.661,0.645,0.605,0.619,0.645,0.75,0.911,2.064,2.419,2.597,2.279,3.396,3.788,3.815,3.807,3.815,3.788,3.396,2.279,2.597,2.419,2.064,0.911,0.75,0.645,0.619,0.605,0.645,0.661,0.688,0.699,0.742,0.878,1.004,1.121,1.431,1.943,3.005,3.544],"lasers":[{"x":0,"y":-3.45,"z":0,"angle":0,"damage":[320,320],"rate":10,"type":1,"speed":[300,300],"number":1,"spread":0,"error":0,"recoil":20}],"radius":3.815}}';
var Aetos_504 = '{"name":"Aetos","level":5,"model":4,"size":1.5,"next":[604,605],"specs":{"shield":{"capacity":[200,300],"reload":[5,7]},"generator":{"capacity":[80,140],"reload":[35,45]},"ship":{"mass":175,"speed":[90,100],"rotation":[70,90],"acceleration":[110,130]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-100,-99,-98,-50,0,100,80],"z":[0,0,0,0,0,0,0]},"width":[0,5,6,17,28,20,0],"height":[0,2,4,15,25,25,0],"texture":[4,6,10,10,11,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,5,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"lasers":{"section_segments":8,"offset":{"x":81,"y":-15,"z":-30},"position":{"x":[0,0,0,0,0],"y":[25,70,10,80,90],"z":[0,0,0,0,0]},"width":[5,0,0,5,0],"height":[5,5,0,5,0],"texture":[63,63,6],"angle":2,"laser":{"damage":[5,8],"rate":5,"type":1,"speed":[120,180],"number":1,"angle":0,"error":0}}},"wings":{"top":{"doubleside":true,"offset":{"x":15,"y":40,"z":0},"length":[50],"width":[70,30],"angle":[70],"position":[0,30],"texture":[63],"bump":{"position":10,"size":10}},"main":{"doubleside":true,"offset":{"x":0,"y":25,"z":15},"length":[90,40],"width":[70,50,30],"angle":[-30,-40],"position":[30,20,-20],"texture":[8,63],"bump":{"position":10,"size":10}}},"typespec":{"name":"Aetos","level":5,"model":4,"code":504,"specs":{"shield":{"capacity":[200,300],"reload":[5,7]},"generator":{"capacity":[80,140],"reload":[35,45]},"ship":{"mass":175,"speed":[90,100],"rotation":[70,90],"acceleration":[110,130]}},"shape":[3,2.917,2.069,1.61,1.343,1.158,1.037,0.95,0.895,0.853,0.83,0.824,3.271,3.283,3.312,3.232,3.135,3.283,3.38,3.09,2.882,2.75,2.726,3.059,3.054,3.006,3.054,3.059,2.726,2.75,2.882,3.09,3.38,3.283,3.135,3.232,3.312,3.283,3.271,0.824,0.83,0.853,0.895,0.95,1.037,1.158,1.343,1.61,2.069,2.917],"lasers":[{"x":2.44,"y":-0.15,"z":-0.9,"angle":2,"damage":[5,8],"rate":5,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.44,"y":-0.15,"z":-0.9,"angle":-2,"damage":[5,8],"rate":5,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.38,"next":[604,605]}}';
var Shadow_X_2_505 = '{"name":"Shadow X-2","level":5,"model":5,"size":1.1,"next":[605,606],"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":125,"speed":[110,140],"rotation":[35,48],"acceleration":[140,160]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":50,"y":10,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1}}},"wings":{"top":{"doubleside":true,"offset":{"x":10,"y":60,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[63],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":35,"z":0},"length":[80],"width":[100,70],"angle":[0],"position":[-80,50],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Shadow X-2","level":5,"model":5,"code":505,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":125,"speed":[110,140],"rotation":[35,48],"acceleration":[140,160]}},"shape":[2.2,2.141,1.787,1.481,1.272,1.135,1.076,1.035,1.016,1.188,1.343,1.35,1.371,1.416,1.46,1.564,1.887,2.17,2.405,2.753,3.16,2.084,2.79,3.199,2.656,2.315,2.656,3.199,2.79,2.084,3.16,2.753,2.405,2.17,1.887,1.564,1.46,1.416,1.372,1.35,1.343,1.188,1.016,1.035,1.076,1.135,1.272,1.481,1.787,2.141],"lasers":[{"x":1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.199,"next":[605,606]}}';
var Toscain_506 = '{"name":"Toscain","level":5,"model":6,"size":1.7,"next":[606,607],"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"bodies":{"front":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-100,-95,-25,0,25],"z":[0,0,0,0,0]},"width":[0,20,40,40,20],"height":[0,10,35,20,5],"texture":[63,11,2,63],"laser":{"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"recoil":50,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-25,0,100],"z":[0,0,0,0,9]},"width":[0,10,15,15,10],"height":[0,15,35,20,0],"texture":[9,9,9,4]},"lasers":{"section_segments":8,"angle":15,"offset":{"x":1,"y":-5,"z":-3},"position":{"x":[0,0,0],"y":[-90,-70,-100],"z":[0,0,0]},"width":[5,5,0],"height":[5,5,0],"texture":[6],"laser":{"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"angle":45,"error":0}},"motor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,20,30,100,95],"z":[0,0,0,0,0]},"width":[0,40,50,50,0],"height":[0,10,15,20,0],"texture":[63,63,10,4]},"propulsors":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[0,0,0],"y":[30,105,100],"z":[0,0,0]},"width":[15,15,0],"height":[10,10,0],"propeller":true,"texture":[12]}},"wings":{"main":{"doubleside":true,"offset":{"x":30,"y":80,"z":0},"length":[70,20],"width":[80,20],"angle":[0,0],"position":[-20,0],"texture":[11],"bump":{"position":20,"size":10}},"winglets":{"doubleside":true,"offset":{"x":98,"y":81,"z":-20},"length":[20,50,20],"width":[20,35,20],"angle":[90,90,90],"position":[0,0,0,0],"texture":[63],"bump":{"position":30,"size":50}}},"typespec":{"name":"Toscain","level":5,"model":6,"code":506,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"shape":[3.4,3.354,3.556,2.748,2.336,2.055,1.858,1.732,1.634,1.548,1.462,1.404,1.371,1.36,1.241,1.161,1.723,4.485,5.01,4.795,4.111,3.842,3.82,3.753,3.634,3.407,3.634,3.753,3.82,3.842,4.111,4.795,5.01,4.485,1.723,1.161,1.241,1.353,1.371,1.404,1.462,1.548,1.634,1.732,1.858,2.055,2.336,2.748,3.556,3.354],"lasers":[{"x":0,"y":-3.4,"z":0,"angle":0,"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.846,"y":-3.454,"z":-0.102,"angle":15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0},{"x":0.846,"y":-3.454,"z":-0.102,"angle":-15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0}],"radius":5.01,"next":[606,607]}}';
var Bat_Defender_507 = '{"name":"Bat-Defender","level":5,"model":7,"size":1.8,"next":[607,608],"specs":{"shield":{"capacity":[300,400],"reload":[7,10]},"generator":{"capacity":[70,100],"reload":[25,35]},"ship":{"mass":350,"speed":[70,90],"rotation":[40,70],"acceleration":[90,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-99,-100,-97,-45,-40,-25,-23,15,20,55,50],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,30,17,27,25,25,27,15,5],"height":[0,2,2,25,27,27,25,25,27,20,0],"texture":[6,5,1,4,6,4,63,6,2,12]},"propulsors":{"section_segments":8,"offset":{"x":30,"y":-20,"z":0},"position":{"x":[-5,-2,0,0,0,0,0,0,0,0,0],"y":[30,55,60,80,95,100,90,95],"z":[0,0,0,0,0,0,0,0]},"width":[12,14,14,10,12,10,0],"height":[5,14,14,10,12,10,0],"texture":[2,6,4,11,6,12],"propeller":true},"lasers":{"section_segments":8,"offset":{"x":70,"y":-40,"z":10},"position":{"x":[0,0,0,0,0],"y":[25,90,10,50,60],"z":[0,0,0,0,0]},"width":[5,5,0,10,5],"height":[5,1,0,0,5],"texture":[63,6],"angle":3,"laser":{"damage":[10,15],"rate":2.5,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-45,"z":8},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-25,0,5],"z":[-10,-5,0,0,0]},"width":[0,5,10,10,0],"height":[0,10,15,16,0],"texture":[9]}},"wings":{"wings":{"offset":{"x":20,"y":0,"z":0},"length":[35,15,20,15],"width":[100,50,50,40,45],"angle":[-10,20,0,0],"position":[0,0,10,30,0],"texture":[11,4],"bump":{"position":-20,"size":15}},"side":{"doubleside":true,"offset":{"x":105,"y":30,"z":-30},"length":[30,10,30],"width":[40,60,60,40],"angle":[90,110,110,90],"position":[0,-30,-30,0],"texture":[63],"bump":{"position":0,"size":15}}},"typespec":{"name":"Bat-Defender","level":5,"model":7,"code":507,"specs":{"shield":{"capacity":[300,400],"reload":[7,10]},"generator":{"capacity":[70,100],"reload":[25,35]},"ship":{"mass":350,"speed":[70,90],"rotation":[40,70],"acceleration":[90,100]}},"shape":[3.604,3.424,2.813,2.415,2.149,1.968,1.913,1.973,2.073,2.759,3.932,3.974,4.081,4.084,4.04,4.116,4.187,3.661,2.16,2.365,2.719,3.22,3.183,3.028,2.016,1.984,2.016,3.028,3.183,3.22,2.719,2.365,2.16,3.661,4.187,4.116,4.04,4.081,4.084,3.974,3.932,2.759,2.073,1.973,1.913,1.968,2.149,2.415,2.813,3.424],"lasers":[{"x":2.539,"y":-1.08,"z":0.36,"angle":3,"damage":[10,15],"rate":2.5,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.539,"y":-1.08,"z":0.36,"angle":-3,"damage":[10,15],"rate":2.5,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.187,"next":[607,608]}}';
var H_Mercury_609 = '{"name":"H-Mercury","level":6,"model":9,"size":2.2,"next":[702,703],"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":275,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[4,7],"rate":8,"type":1,"speed":[100,150],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":275,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"shape":[3.086,3.088,2.59,2.24,2.004,4.566,4.489,4.168,3.955,3.818,3.747,4.587,4.622,4.713,4.854,4.959,5.317,5.372,4.412,4.987,5.408,5.207,3.941,3.8,4.86,4.849,4.86,3.8,3.941,5.207,5.408,4.987,4.412,5.372,5.317,4.959,4.854,4.713,4.622,4.587,3.747,3.818,3.955,4.168,4.489,4.566,2.004,2.24,2.59,3.088],"lasers":[{"x":0,"y":-3.08,"z":0.88,"angle":0,"damage":[4,7],"rate":8,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.575,"y":-3.739,"z":-0.44,"angle":1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.575,"y":-3.739,"z":-0.44,"angle":-1,"damage":[2,4],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":4.285,"y":-1.009,"z":0.22,"angle":3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-4.285,"y":-1.009,"z":0.22,"angle":-3,"damage":[4,8],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.408,"next":[702,703]}}';
 
var ships = [];
ships.push(Face_102);
ships.push(Trisbaena_191);
ships.push(Aetos_504);
ships.push(Shadow_X_2_505);
ships.push(Toscain_506);
ships.push(Bat_Defender_507);
ships.push(H_Mercury_609);
 
var vocabulary = [
  { text: "You", icon:"\u004e", key:"O" },
  { text: "Me", icon:"\u004f", key:"E" },
  { text: "Yes", icon:"\u004c", key:"Y" },
  { text: "No", icon:"\u004d", key:"N" },  
  { text: "Hmm?", icon:"\u004b", key:"Q" },
  { text: "Sorry", icon:"\u00a1", key:"S" },
  { text: "Thanks", icon:"\u0041", key:"X" },  
  { text: "No Prob", icon:"\u0047", key:"P" },
  { text: "Wait", icon:"\u0048", key:"T" },
  { text: "Follow", icon:"\u0050", key:"F" },
  { text: "Attack", icon:"\u00b4", key:"A" },
  { text: "Heal", icon:"\u0037", key:"H" },  
  { text: "GG", icon:"\u00a3", key:"G" },
  { text: "Upgrade", icon:"\u0078", key:"L" },  
  { text: "Lag", icon:"\u00be", key:"V"}
];
 
var map = "";
 
this.options = {
  ships: ships,
  custom_map: map,
  vocabulary: vocabulary,
  strafe: strafe,
  lives: 0,
  starting_ship: 801,
  map_size: 80,
  survival_level: 8,
  speed_mod: 1.2,
  starting_ship_maxed: true,
  map_name: 'Dueling',
  friendly_colors: 0,
  weapons_store: false,
  max_level: 8,
  soundtrack: "civilisation.mp3",
};
 
var ship_list = [
  [101,201,202,301,302,303,304,401,402,403,404,405,406,501,502,503,504,505,506,507,601,602,603,609,604,605,606,607,608,701,702,703,704]
];
 
function tick(game){
  for (let i=0; i<game.ships.length; i++){  
    var ship = game.ships[i];
    if (game.step % 3600 === 0){
      echo("\nList of players and their IDs:\n"+i+": "+game.ships[i].name+"\n");  
    }
    if (game.step % 60 === 0){
      if (!ship.custom.options_button){ 
        ship.custom.options_button = true;
        game.ships[i].setUIComponent({ 
          id: "Options",
          position: [71.5,0,6.6,4],
          clickable: true,
          visible: true,
          shortcut: "J",
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#FFFFFF",width:5},
            { type: "text",position:[0,30,100,60],value:"Options [J]",color:"#FFFFFF"},
          ]
        });      
        game.ships[i].setUIComponent({ 
          id: "Restore",
          position: [64.5,0,7.2,4],
          clickable: true,
          visible: true,
          shortcut: "W",
          components: [
            { type:"box",position:[0,0,190,100],fill:"rgba(68, 85, 102, 0)",stroke:"#FFFFFF",width:5},
            { type: "text",position:[0,30,100,60],value:"Restore [W]",color:"#FFFFFF"},
          ]
        });       
        ship.custom.tree = 0;
        for (let tree = 0; tree < ship_list.length; tree++){
          if (ship_list[tree].indexOf(ship.type) >= 0){
            ship.custom.tree = tree;
            break;
          }
        }        
      }
    }
    if (game.ships[i].custom.admin_ship === true){
      if (!ship.custom.authorized){ 
        ship.custom.authorized = true;   
        ship.custom.unauthorized = false; 
        game.ships[i].setUIComponent({ 
          id: "Admin ship",
          position: [27,0,8,4],
          clickable: true,
          visible: true,
          shortcut: "M",
          components: [
            { type:"box",position:[0,0,190,100],fill:"rgba(68, 85, 102, 0)",stroke:"#FFFFFF",width:5},
            { type: "text",position:[0,30,100,60],value:"Admin ship [M]",color:"#FFFFFF"},
          ]
        });     
      }
    } else if (game.ships[i].custom.admin_ship === false){
      if (!ship.custom.unauthorized){ 
        ship.custom.unauthorized = true; 
        ship.custom.authorized = false;  
        game.ships[i].setUIComponent({ 
          id: "Admin ship",
          clickable: false,
          visible: false,
        });        
        game.ships[i].set({type:101,stats:11111111});
      }
    }
  }
}

function game_start(game){
  if (!game.custom.init){
    game.custom.init = true;  
    echo("\nPlease read the comments\n");  
  }  
  this.tick = tick;
}
this.tick = game_start;
 
 
this.event = function(event, game){
  var ship = event.ship;  
  var ship_level = Math.trunc(ship.type / 100);
  var max_crystals = 980;    
  var new_type;  
  var tree = ship.custom.tree;
  var index = -1;
  switch (event.name){
    case "ui_component_clicked":
      var component = event.id;
      if (component == "Options"){
        ship.setUIComponent({
          id: "Next ship",
          position: [28,35,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Next ship",color:"#CDE"},
          ]
        });
        ship.setUIComponent({
          id: "Previous ship",
          position: [60,35,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Previous ship",color:"#CDE"},
          ]
        });    
        ship.setUIComponent({
          id: "Reset",
          position: [28,45,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Reset",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({      
          id: "Stats",
          position: [28,55,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Stats",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({
          id: "Spectate",
          position: [60,45,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Spectate",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({      
          id: "Gems",
          position: [60,55,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Gems",color:"#CDE"},
          ]
        });          
        ship.setUIComponent({
          id: "Options screen circle",
          position: [42,36.5,80*1.35,100*1.35],
          clickable: false,
          visible: true,
          components: [
            {type:"round",position:[0,0,15,20],fill:"rgba(68, 85, 102, 0)",stroke:"#43454a",width:5},
          ]
        });    
        ship.setUIComponent({
          id: "Options screen next page",
          position: [25,65,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Next page",color:"#CDE"},
          ]
        });        
        ship.setUIComponent({
          id: "Options screen exit",
          position: [63,65,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Close",color:"#CDE"},
          ]
        });        
        ship.setUIComponent({
          id: "Options screen",
          position: [0,25,100,200],
          clickable: false,
          visible: true,
          components: [
            {type:"box",position:[25,0,50,25],fill:"rgba(68, 85, 102, 0)",stroke:"#ffffff",width:3},
            {type: "text",position: [45,0,10,5],color: "#ffffff",value: "Options"},
          ]
        });        
      }
      else if (component == "Next ship"){
        index = ship_list[tree].indexOf(ship.type);
        if (index >= 0) {
          index = (index + 1) % ship_list[tree].length;
          new_type = ship_list[tree][index];
          shipLevel = Math.trunc(new_type / 100);
          if (shipLevel === 1){
            max_crystals = 20;
          } else
          if (shipLevel === 2){
            max_crystals = 80;
          } else
          if (shipLevel === 3){
            max_crystals = 180;
          } else
          if (shipLevel === 4){
            max_crystals = 320;
          } else
          if (shipLevel === 5){
            max_crystals = 500;
          } else
          if (shipLevel === 6){
            max_crystals = 720;
          } else {
            max_crystals = 980;
          }
          ship.set({crystals:max_crystals});    
          if (ship_level < 7){      
            ship.set({shield:999, stats:88888888});      
          }        
          ship.set({type:new_type, shield:999});
        }
      }
      else if (component == "Previous ship"){
        index = ship_list[tree].indexOf(ship.type);
        if (index >= 0) {
          index = (index - 1) % ship_list[tree].length;
          new_type = ship_list[tree][index];
          shipLevel = Math.trunc(new_type / 100);
          if (shipLevel === 1){
            max_crystals = 20;
          } else
          if (shipLevel === 2){
            max_crystals = 80;
          } else
          if (shipLevel === 3){
            max_crystals = 180;
          } else
          if (shipLevel === 4){
            max_crystals = 320;
          } else
          if (shipLevel === 5){
            max_crystals = 500;
          } else
          if (shipLevel === 6){
            max_crystals = 720;
          } else {
            max_crystals = 980;
          }
          ship.set({crystals:max_crystals});            
          if (ship_level < 7){      
             ship.set({shield:999, stats:88888888});      
          }  
          ship.set({type:new_type, shield:999});
        }
      }
      else if (component == "Spectate"){
        ship.set({type:102, crystals:20, stats:11111111});
      }
      else if (component == "Gems"){
        if (ship_level === 1){
          max_crystals = 20;
        } else
        if (ship_level === 2){
          max_crystals = 80;
        } else
        if (ship_level === 3){
          max_crystals = 180;
        } else
        if (ship_level === 4){
          max_crystals = 320;
        } else
        if (ship_level === 5){
          max_crystals = 500;
        } else
        if (ship_level === 6){
          max_crystals = 720;
        } else {
          max_crystals = 980;
        }
        ship.set({crystals:max_crystals});
      }
      else if (component == "Reset"){
        ship.set({type:101, crystals:20, shield:100, stats:11111111});
      }
      else if (component == "Stats"){
        var stats = ship.stats;
        var max = 11111111 * ship_level;
        if (ship_level < 7){
          if (stats == max){
            ship.custom.keep_maxed = false;
            ship.set({stats:0});
          } else {
            ship.custom.keep_maxed = true;
            ship.set({stats:max, shield:999});
          }
        }
      }
      else if (component == "Advanced-Fighter"){
        ship.set({type:601, stats:88888888, shield:999, crystals: 720});
      }
      else if (component == "Scorpion"){
        ship.set({type:602, stats:88888888, shield:999, crystals: 720});
      }
      else if (component == "Marauder"){
        ship.set({type:603, stats:88888888, shield:999, crystals: 720});
      }
      else if (component == "H-Mercury"){
        ship.set({type:609, stats:88888888, shield:999, crystals: 720});
      }
      else if (component == "Condor"){
        ship.set({type:604, stats:88888888, shield:999, crystals: 720});
      }  
      else if (component == "A-Speedster"){
        ship.set({type:605, stats:88888888, shield:999, crystals: 720});
      }
      else if (component == "Rock-Tower"){
        ship.set({type:606, stats:88888888, shield:999, crystals: 720});
      }
      else if (component == "Barracuda"){
        ship.set({type:607, stats:88888888, shield:999, crystals: 720});
      }
      else if (component == "O-Defender"){
        ship.set({type:608, stats:88888888, shield:999, crystals: 720});
      }
      else if (component == "Odyssey"){
        ship.set({type:701, shield:999, crystals: 980});
      }
      else if (component == "Shadow X-3"){
        ship.set({type:702, shield:999, crystals: 980});        
      }
      else if (component == "Bastion"){
        ship.set({type:703, shield:999, crystals: 980});        
      }
      else if (component == "Aries"){
        ship.set({type:704, shield:999, crystals: 980});        
      }
      else if (component == "Options screen next page"){
        ship.setUIComponent({
          id: "Next ship",
          visible: false
        });
        ship.setUIComponent({
          id: "Previous ship",
          visible: false
        });          
        ship.setUIComponent({
          id: "Reset",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Stats",
          visible: false
        });              
        ship.setUIComponent({
          id: "Spectate",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Gems",
          visible: false
        });  
        ship.setUIComponent({
          id: "Options screen next page",
          visible: false
        });    
        ship.setUIComponent({
          id: "Options screen go back",
          position: [25,65,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Previous page",color:"#CDE"},
          ]
        });
        ship.setUIComponent({
          id: "Advanced-Fighter",
          position: [28,35,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Advanced-Fighter",color:"#CDE"},
          ]
        });    
        ship.setUIComponent({
          id: "Marauder",
          position: [28,40,6,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Marauder",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({
          id: "H-Mercury",
          position: [34,40,6,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"H-Mercury",color:"#CDE"},
          ]
        });        
        ship.setUIComponent({      
          id: "A-Speedster",
          position: [28,45,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"A-Speedster",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({
          id: "Barracuda",
          position: [28,50,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Barracuda",color:"#CDE"},
          ]
        });    
        ship.setUIComponent({
          id: "Odyssey",
          position: [28,55,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Odyssey",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({      
          id: "Bastion",
          position: [28,60,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Bastion",color:"#CDE"},
          ]
        });          
        ship.setUIComponent({
          id: "Scorpion",
          position: [60,35,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Scorpion",color:"#CDE"},
          ]
        });    
        ship.setUIComponent({
          id: "Condor",
          position: [60,40,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Condor",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({      
          id: "Rock-Tower",
          position: [60,45,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Rock-Tower",color:"#CDE"},
          ]
        });
        ship.setUIComponent({
          id: "O-Defender",
          position: [60,50,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"O-Defender",color:"#CDE"},
          ]
        });    
        ship.setUIComponent({
          id: "Shadow X-3",
          position: [60,55,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Shadow X-3",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({      
          id: "Aries",
          position: [60,60,12,5],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Aries",color:"#CDE"},
          ]
        });        
      }
      else if (component == "Options screen go back"){
        ship.setUIComponent({
          id: "Advanced-Fighter",
          visible: false
        });    
        ship.setUIComponent({
          id: "Marauder",
          visible: false
        });  
        ship.setUIComponent({
          id: "H-Mercury",
          visible: false
        });              
        ship.setUIComponent({      
          id: "A-Speedster",
          visible: false
        });  
        ship.setUIComponent({
          id: "Barracuda",
          visible: false
        });    
        ship.setUIComponent({
          id: "Odyssey",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Bastion",
          visible: false
        });          
        ship.setUIComponent({
          id: "Scorpion",
          visible: false
        });    
        ship.setUIComponent({
          id: "Condor",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Rock-Tower",
          visible: false
        });
        ship.setUIComponent({
          id: "O-Defender",
          visible: false
        });    
        ship.setUIComponent({
          id: "Shadow X-3",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Aries",
          visible: false
        });          
        ship.setUIComponent({
          id: "Next ship",
          position: [28,35,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Next ship",color:"#CDE"},
          ]
        });
        ship.setUIComponent({
          id: "Previous ship",
          position: [60,35,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Previous ship",color:"#CDE"},
          ]
        });          
        ship.setUIComponent({
          id: "Reset",
          position: [28,45,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Reset",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({      
          id: "Stats",
          position: [28,55,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Stats",color:"#CDE"},
          ]
        });      
        ship.setUIComponent({
          id: "Spectate",
          position: [60,45,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Spectate",color:"#CDE"},
          ]
        });  
        ship.setUIComponent({      
          id: "Gems",
          position: [60,55,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Gems",color:"#CDE"},
          ]
        });          
        ship.setUIComponent({
          id: "Options screen next page",
          position: [25,65,12,10],
          clickable: true,
          visible: true,
          components: [
            { type:"box",position:[0,0,100,100],fill:"rgba(68, 85, 102, 0)",stroke:"#CDE",width:4},
            { type: "text",position:[5,35,90,40],value:"Next page",color:"#CDE"},
          ]
        });    
        ship.setUIComponent({
          id: "Options screen go back",
          visible: false,
        });            
      }
      else if (component == "Restore"){
        if (ship_level === 1){
          max_crystals = 20;
        } else
        if (ship_level === 2){
          max_crystals = 80;
        } else
        if (ship_level === 3){
          max_crystals = 180;
        } else
        if (ship_level === 4){
          max_crystals = 320;
        } else
        if (ship_level === 5){
          max_crystals = 500;
        } else
        if (ship_level === 6){
          max_crystals = 720;
        } else {
          max_crystals = 980;
        }
        ship.set({shield:999, crystals:max_crystals});
      }        
      else if (component == "Options screen exit"){
        ship.setUIComponent({
          id: "Next ship",
          visible: false
        });
        ship.setUIComponent({
          id: "Previous ship",
          visible: false
        });        
        ship.setUIComponent({
          id: "Reset",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Stats",
          visible: false
        });              
        ship.setUIComponent({
          id: "Spectate",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Gems",
          visible: false
        });  
        ship.setUIComponent({
          id: "Options screen",
          visible: false
        });  
        ship.setUIComponent({
          id: "Options screen circle",
          visible: false
        });    
        ship.setUIComponent({
          id: "Options screen next page",
          visible: false
        });        
        ship.setUIComponent({
          id: "Options screen go back",
          visible: false,
        });
        ship.setUIComponent({
          id: "Options screen exit",
          visible: false
        });
        ship.setUIComponent({
          id: "Advanced-Fighter",
          visible: false
        });    
        ship.setUIComponent({
          id: "Marauder",
          visible: false
        });  
        ship.setUIComponent({
          id: "H-Mercury",
          visible: false
        });          
        ship.setUIComponent({      
          id: "A-Speedster",
          visible: false
        });  
        ship.setUIComponent({
          id: "Barracuda",
          visible: false
        });    
        ship.setUIComponent({
          id: "Odyssey",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Bastion",
          visible: false
        });          
        ship.setUIComponent({
          id: "Scorpion",
          visible: false
        });    
        ship.setUIComponent({
          id: "Condor",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Rock-Tower",
          visible: false
        });
        ship.setUIComponent({
          id: "O-Defender",
          visible: false
        });    
        ship.setUIComponent({
          id: "Shadow X-3",
          visible: false
        });  
        ship.setUIComponent({      
          id: "Aries",
          visible: false
        });        
      }
      else if (component == "Admin ship"){
        ship.set({type:191,stats:11111111,crystals:20});
      }
      break;
    case "ship_spawned":
      ship.set({x:0,y:250,invulnerable:300});
    break;
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
