//Idea and ships made by Serendibite
//Coding done by Money
//Map change accomplished
var map =
"----99-----------3---7-5----9--6---3-4---2------------99----\n"+
"----99---------2---1----5---6969------83-1------------99----\n"+
"-----996--------1--0-1-80---------9---04---0---------99-----\n"+
"------999---99969696969------------7-96969696999---999------\n"+
"--------99---99848484849--2----6--5-94848484899---99--------\n"+
"---------99---99-------49--32------94-------99---99---------\n"+
"------7---99---99-------49---5-8--94-------99---99---3------\n"+
"-----------99---99-------4917-6-394-------99---99-----------\n"+
"------------99---99------86-0--3-68------99---99------------\n"+
"-------------99---99-----49--1---94-----99---99-------------\n"+
"--------------99---99----86----2-68----99---99-4------------\n"+
"----------8----99---99---491-----94---99---99---------------\n"+
"----------------99---99--86-0----68--99---99----------------\n"+
"----2------------99---99-49---0--94-99---99----------1------\n"+
"-----------------799---9986-3--2-6899---99------------------\n"+
"--------3----------99---999------999---99-------------------\n"+
"-----------4--------99---99------99---99--------5-----------\n"+
"-----------7---------99---9------9---99---------------------\n"+
"----------------------99------------99----------------------\n"+
"-----------------------99----------99-----------------------\n"+
"-----2------------------99--------99-----2---------------8--\n"+
"-------------------------99------99-------------------------\n"+
"-------------------------99------99-------------------------\n"+
"---------------03-------99--1-----99--------------1---------\n"+
"----------------------999--------0-999----------------------\n"+
"---------4----------99-----8---------991----------------1--9\n"+
"-------------------99------------1----99--------------------\n"+
"-------------------99-3-----------4----99-------------------\n"+
"-------------------99----0-------------99-------------------\n"+
"-44----------------99-------------3----99-------------------\n"+
"-------------------99-6----------------99-------------------\n"+
"-------------------99-----0-------6----99-------------------\n"+
"-------------------99-----------5------99-------------------\n"+
"--------------------99----4--6--------99------------4-------\n"+
"------7-------------7999------------999---8----------------9\n"+
"-----------------------99----------99-----------------------\n"+
"------------------------99--------99------------------------\n"+
"--------------6----------99------99-------------------------\n"+
"-------------------------99------99-----------------------3-\n"+
"------------------------99--------99------------4-----------\n"+
"---------------4-------99----------99-----------------------\n"+
"------1---------------99------------99----------------------\n"+
"---------------------99---9------9---99---------------------\n"+
"--------------------99---99------99---99--------------------\n"+
"----------2--------99---999------999---99-------7-----------\n"+
"------------------99---9986-1--026899---99------------------\n"+
"-----------------99---99-493--1--94-99---99-----------------\n"+
"--2-------------99---99--86------68--99---99----------------\n"+
"---------------99---99---49-2--1-94---99---99--------7------\n"+
"----------4---99---99----86------68----99---99--------------\n"+
"-------------99---99-----490---3-94-----99---99-------------\n"+
"------------99---99------86--2---68------99---99------------\n"+
"-----------99---99-------49-1----94-------99---99-----------\n"+
"----------99---99-------49-6--5---94-------99---992---------\n"+
"---------99---99-------49-3-----8--94-------99---99----8----\n"+
"----3---99---99848484849----4----3--94848484899---99--------\n"+
"------999---99969696969---9----------96969696999---999------\n"+
"-----99--------0-4---21------------5-62--------------99-----\n"+
"----99-------------1--4-----9696--7-8---1--0----------99----\n"+
"----99----------3---63--7---6--9----4-1---------------99-----" ;
//------------------------------------------------------------------------------------------------------------------------------------------------
var vocabulary = [
  {text: "You", icon:"\u004e", key:"O" },
  {text: "Me", icon:"\u004f", key:"E" },
  {text: "Yes", icon:"\u004c", key:"Y" },
  {text: "No", icon:"\u004d", key:"N" },
  {text: "Attack", icon:"\50", key:"A" },
  {text: "Healing", icon:"\70", key:"H" },
  {text: "Gems", icon:"\u0044", key:"M" },
  {text: "Defend", icon:"\u0025", key:"D" },
  {text: "Wait", icon:"\u0048", key:"T" },
  {text: "Kill", icon:"\u005b", key:"K" },
  {text: "Base", icon:"\u0034", key:"B" },
  {text: "?????????????????", icon:"\131", key:"E" },
  {text: "Good Game", icon:"GG", key:"G" },
  {text: "No Prob", icon:"\u0047", key:"P" },
  {text: "Thanks", icon:"\u0041", key:"X" },
  {text: "Sorry", icon:"\u00a1", key:"S" }
];

this.options = {
  root_mode: "team",
  friendly_colors: 1,
  map_size: 60,
  radar_zoom: 1,
  crystal_value: 0,
  soundtrack: "argon.mp3",
  speed_mod: 1,
  vocabulary: vocabulary,
  custom_map: map,
  asteroids_strength: 10,
  station_size: 1
};
 
function tick(game){  
  if (game.step % 3600 === 0){
    if (game.ships.length === 1||2){
      rip += 1;
      basetimer(game);
    } else {
      rip += ~~(game.ships.length/3); 
      basetimer(game);
    }
  }
  if (game.step % 30 === 0){
    var max = Math.max(14,Math.min(26,~~(game.ships.length*2.2))); 
    if (game.aliens.length < max){
      var spawn_delay = game.step / ~~(1800/2*2.5);
      var alien = aliens[~~(Math.random()*Math.min(aliens.length,spawn_delay/4))];
      var coords = [[300,50],[300,-50],[250,0],[-250,0]];
      oof = coords[~~(Math.random()*coords.length)];
      alien.x = oof[1]+Math.cos(Math.random()*Math.PI*2)*5;
      alien.y = oof[0]+Math.sin(Math.random()*Math.PI*2)*5;
      game.addAlien(alien);
    }
    for (let ship of game.ships){
      if (!ship.custom.init){
        ship.custom.init = true;
        joinmessage(ship);
        basetimer(game);
        game.configImageUI({
          id: "very important",
          visible: true,
          clickable: false,
          url: "https://raw.githubusercontent.com/Bhpsngum/img-src/master/yeet.jpg",
          position: {x:5,y:30},
          scale: {x:1,y:1.5},
          opacity: 1
        },ship.setUIComponent);
        game.configImageUI({
          id: "very important2",
          visible: true,
          clickable: false,
          url: "https://raw.githubusercontent.com/Bhpsngum/img-src/master/yeet2.jpg",
          position: {x:8,y:30},
          scale: {x:1,y:1.5},
          opacity: 1
        },ship.setUIComponent);        
      }
    }
    if (rip > 79){
      game.setUIComponent({
        id: "wtf",
        position: [32,8,42-8,40-8],
        visible: true,
        components: [
          {type: "text",position:[0,0,80,33],value:"Your base is out of health!",color:"#fff"},
        ]
      });         
      setTimeout(function(){
        for (let ship of game.ships) ship.gameover({"Try again next time!":""});
        game.modding.I1I0I.send({name:"stop"});
      },5000);
    }
    for(var i=0; i<game.aliens.length; i++){  
      if (game.aliens[0].code == 19){
        //curry curry curry 
      } else {
        for (let alien of game.aliens) alien.set({kill:true});
        game.setUIComponent({
          id: "lol",
          position: [31,10,42-8,40-8],
          visible: true,
          components: [
            {type: "text",position:[0,-8,100,53],value:"Purple Saucer has been killed",color:"#fff"},
            {type: "text",position:[9,17,80,33],value:"GG, thanks for playing!",color:"#fff"},
          ]
        });            
        setTimeout(function(){ //don't make functions within a loop well FUCK YOU  
          for (let ship of game.ships) ship.gameover({"Nice":""});
          game.modding.I1I0I.send({name:"stop"});
        },5000);
      }
      //if (game.aliens[i].code == 12){
      //} else {
        //for (let i=0; i<2; i++) game.addAlien({code:19,level:1,crystals:2000,points:2000,x:game.aliens[0].x,y:game.aliens[0].y,vy:-1});
      //}
    }
  }
}
 
function game_start(game){
  if (!game.custom.init){
    game.custom.init = true;
    game.addAlien({code:19,level:2,crystals:4000,points:4000,x:0,y:300});
    game.aliens[0].set({shield:10000,regen:5});
    for (let i=0; i<40; i+=10) game.addAlien({code:12,crystals:1200,points:1200,x:Math.cos(Math.random()*Math.PI*2)*i,y:250+Math.sin(Math.random()*Math.PI*2)*i});
  }
  this.tick = tick;
}
this.tick = game_start;

var rip = 1;

yeetalien = function(game){
  for(let i=0; i<game.aliens.length; i++){
    game.aliens[i].set({kill:true});
  }
};

var aliens = [
{code:10,level:0,points:20,crystal_drop:5},
{code:11,level:0,points:30,crystal_drop:10},
{code:10,level:1,points:40,crystal_drop:10},
{code:17,level:0,points:30,crystal_drop:10},
{code:16,level:0,points:30,crystal_drop:10},
{code:17,level:1,points:50,crystal_drop:20},
{code:16,level:1,points:50,crystal_drop:20}, 
{code:11,level:2,points:120,crystal_drop:50}, 
{code:10,level:2,points:70,crystal_drop:20}, 
{code:14,level:1,points:70,crystal_drop:30}, 
{code:16,level:2,points:150,crystal_drop:75},
{code:17,level:3,points:100,crystal_drop:75}, 
{code:19,level:0,points:400,crystal_drop:200},
{code:16,level:3,points:1000,crystal_drop:500}
];

function rand(lol){
  return ~~((Math.random() * lol));
}

function basetimer(game){
  game.setUIComponent({
    id: "pogggggggg",
    position: [22,1,22,20],
    visible: true,
    components: [
      {type: "text",position:[0,0,80,33],value:"Station energy:",color:"#fff"},
      {type:"box",position:[1,34,79-rip,10],fill:"#00cc00"},
      {type:"box",position:[1,34,78,10],stroke:"#000",width:3}
    ]
  });   
}

function joinmessage(ship){
  ship.setUIComponent({
    id: "yeet",
    position: [32,8,42-8,40-8],
    visible: true,
    components: [
      {type: "text",position:[0,0,85+3,38+3],value:"Kill the purple Saucer to win",color:"#fff"},
      {type: "text",position:[5.5,20,80-4,33-4],value:"Good luck and have fun!",color:"#fff"},
    ]
  });      
  setTimeout(function(){  
    ship.setUIComponent({id:"yeet",visible:false});
  },5000);
}

game.configImageUI = function(opt, handler){
  let image = {
    id: opt.id,
    visible: opt.visible,
    clickable: opt.clickable,
    components: []
  };
  if (opt.url){
    let img = $("#"+opt.id)[0];
    if (!img){
      img = document.createElement("img");
      img.setAttribute("id",opt.id);
      img.setAttribute("style","display:none");
      img.crossOrigin = "anonymous";
      $('body').append(img);
    }
    img.onload = function(){
      this.canvas = $('<canvas />')[0];
      this.canvas.width = img.width;
      this.canvas.height = img.height;
      this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
      let mx,my,h=100/this.height,w=100/this.width,d=[],pos=opt.position||{x:0,y:0},scale = opt.scale||{x:1,y:1};
      function round(num){
        return parseFloat(num.toFixed(2));
      }
      if (["scoreboard","radar_background"].indexOf(opt.id) != -1){
        d=[0,0];
        mx=(pos.x||0)/100;
        my=(pos.y||0)/100;
      } else {
        d = [pos.x||0,pos.y||0];
        mx=0;
        my=0;
      }
      image.position = [d,[round(w*(scale.x||1)),round(h*(scale.y||1))]].flat();
      for (let i=0;i<this.height;i++){
        for (let j=0;j<this.width;j++){
          let data = img.canvas.getContext('2d').getImageData(j,i,1,1).data;
          image.components.push({type:"box",position:[round(w*j+mx),round(h*i+my),round(w*1.5),round(h*1.5)],fill:`rgba(${data[0]},${data[1]},${data[2]},${data[3]/255*(opt.opacity||1)})`});
        }
      }
      (typeof handler == "function") && handler(image);
    };
    img.onerror = function(){throw new Error("Failed to fetch the image")};
    img.setAttribute("src",opt.url);
  }
  else throw new Error("No Image Url detected");
};
