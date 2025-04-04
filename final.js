(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"final_atlas_1", frames: [[738,1106,932,661],[738,0,736,1104],[0,0,736,1563]]},
		{name:"final_atlas_2", frames: [[378,1523,1320,190],[0,0,932,661],[566,1025,252,64],[1700,1603,252,64],[1700,1669,252,64],[934,642,736,460],[0,663,564,564],[1672,628,309,624],[1576,0,413,626],[1700,1254,300,347],[566,663,360,360],[0,1229,376,673],[934,0,640,640],[1194,1104,360,360],[566,1104,626,417]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["final_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1050x1690 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1cd7523b9ef04f3a9e6df7480050f944 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._33bb5b87f3f2421687e21fdf829bac36 = function() {
	this.initialize(ss["final_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3879e1ef48484143bd0f7655792b8e46 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._3b7af446de754cfea6291fe0f1b019fd = function() {
	this.initialize(ss["final_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4712326978d840d8a4cf40df99ea9f79 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._68afff7e746746c5b5ccff88db92c1dd = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._6baa4c01fa15412ca8633c540d27bb50 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._8dd37a7fc85944649563ea2a0763c2a8 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.a6ba0568ff03414f8ad1b62065e9f651 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fe76cbc10b5c428cbdb92ec6750258c7 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.FotosdeEscenarioTeatro_Freepik = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Violin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_008900105_prev");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._8dd37a7fc85944649563ea2a0763c2a8();
	this.instance.setTransform(-127,-231.75,0.6755,0.6887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.7819,scaleY:0.7777,x:-147,y:-262},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-262,294,523.4);


(lib.Saxofon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_008878823_prev");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._3b7af446de754cfea6291fe0f1b019fd();
	this.instance.setTransform(-91.35,-166.5,0.2483,0.213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleY:0.2514,x:-91,y:-196},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.3,-196,183.1,393);


(lib.Piano = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_000217914_prev");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._68afff7e746746c5b5ccff88db92c1dd();
	this.instance.setTransform(-124.05,-141.5,0.827,0.8156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.0136,scaleY:0.8848,x:-152,y:-168},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-168,304.1,309.5);


(lib.Interpolación7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-329.95,-47.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329.9,-47.5,660,95);


(lib.Interpolación6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-232.85,-165.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.8,-165.2,466,330.5);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-232.85,-165.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.8,-165.2,466,330.5);


(lib.Guitarra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_007756609_prev");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._4712326978d840d8a4cf40df99ea9f79();
	this.instance.setTransform(-106.5,-181.05,0.5157,0.5784);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleY:0.6613,x:-107,y:-207},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-207,213.5,414);


(lib.Flauta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("celta_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._3879e1ef48484143bd0f7655792b8e46();
	this.instance.setTransform(-56.5,-116.05,0.3657,0.3719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.4297,scaleY:0.4649,x:-69,y:-145},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-145,132.8,290.1);


(lib.btnStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fe76cbc10b5c428cbdb92ec6750258c7();
	this.instance.setTransform(-56,-56.05,0.3111,0.3113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.4198,scaleY:0.3613,x:-62,y:-65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-65,151.1,130.1);


(lib.btnSiguiente1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-94.8,-18.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-94.8,-18.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-94.8,-18.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.8,-18.8,126,32);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._6baa4c01fa15412ca8633c540d27bb50();
	this.instance.setTransform(-54.05,-58.05,0.3003,0.3225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.3725,scaleY:0.491,x:-67,y:-88},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-88,134.1,176.8);


(lib.btnMenos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._1cd7523b9ef04f3a9e6df7480050f944();
	this.instance.setTransform(-48.05,-40.05,0.1705,0.1421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.3048,scaleY:0.1528,x:-86,y:-43},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-43,172,86.2);


(lib.btnMas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.a6ba0568ff03414f8ad1b62065e9f651();
	this.instance.setTransform(-64.1,-48.1,0.2003,0.1503);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleY:0.1973,x:-64,y:-47},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-48.1,128.3,127.4);


(lib.Arpa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("musical100");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._33bb5b87f3f2421687e21fdf829bac36();
	this.instance.setTransform(-134.1,-208.1,0.3644,0.377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.4052,scaleY:0.4187,x:-149,y:-231},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-231,298.2,462.2);


(lib.titulo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación5("synched",0);
	this.instance.setTransform(0,72.95);

	this.instance_1 = new lib.Interpolación6("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-24.45},6).to({_off:true,y:0},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.8,-189.7,466,427.9);


(lib.sbutitulo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación7("synched",0);
	this.instance.setTransform(0,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},9).to({y:-24},1).to({y:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329.9,-73.5,660,121);


(lib.cpEscenario2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var sonido = new createjs.Sound.play("audiomp3", {loop: -1});
		
		function detenerSonido (){
			sonido.stop();
		}
		
		function iniciarSonido (){
			sonido.play();
		}
		
		this.btnStop.addEventListener("click", detenerSonido);
		this.btnPlay.addEventListener("click", iniciarSonido);
		
		this.btnMas.addEventListener("click", function(){
			if (sonido.volume < 1){
				sonido.volume += 0.1;
			}
		});
		
		this.btnMenos.addEventListener ("click", function(){
			if (sonido.volume > 0){
				sonido.volume -= 0.1;
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnMas
	this.btnMas = new lib.btnMas();
	this.btnMas.name = "btnMas";
	this.btnMas.setTransform(860.1,68.05,0.7504,0.667);
	new cjs.ButtonHelper(this.btnMas, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMas).wait(1));

	// btnMenos
	this.btnMenos = new lib.btnMenos();
	this.btnMenos.name = "btnMenos";
	this.btnMenos.setTransform(777.8,71.5,0.5426,1,0,0,0,0.3,0.1);
	new cjs.ButtonHelper(this.btnMenos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMenos).wait(1));

	// btnStop
	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(151.95,72,0.75,0.6432);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnStop).wait(1));

	// btnPlay
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(78.4,69.6,0.7925,0.6094,0,3.5814,0,0.5,0.1);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(1));

	// Piano
	this.Piano = new lib.Piano();
	this.Piano.name = "Piano";
	this.Piano.setTransform(480.05,498.5);
	new cjs.ButtonHelper(this.Piano, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Piano).wait(1));

	// Guitarra
	this.Guitarra = new lib.Guitarra();
	this.Guitarra.name = "Guitarra";
	this.Guitarra.setTransform(677.5,422.05);
	new cjs.ButtonHelper(this.Guitarra, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Guitarra).wait(1));

	// Arpa
	this.Arpa = new lib.Arpa();
	this.Arpa.name = "Arpa";
	this.Arpa.setTransform(825.1,416.1);
	new cjs.ButtonHelper(this.Arpa, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Arpa).wait(1));

	// Flauta
	this.Flauta = new lib.Flauta();
	this.Flauta.name = "Flauta";
	this.Flauta.setTransform(358.5,348.05);
	new cjs.ButtonHelper(this.Flauta, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Flauta).wait(1));

	// Saxofon
	this.Saxofon = new lib.Saxofon();
	this.Saxofon.name = "Saxofon";
	this.Saxofon.setTransform(270.35,431.5);
	new cjs.ButtonHelper(this.Saxofon, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Saxofon).wait(1));

	// Violin
	this.Violin = new lib.Violin();
	this.Violin.name = "Violin";
	this.Violin.setTransform(127,380.75);
	new cjs.ButtonHelper(this.Violin, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Violin).wait(1));

	// Titulo
	this.sbutitulo = new lib.sbutitulo();
	this.sbutitulo.name = "sbutitulo";
	this.sbutitulo.setTransform(473.8,145.35);

	this.timeline.addTween(cjs.Tween.get(this.sbutitulo).wait(1));

	// Capa_1
	this.instance = new lib.FotosdeEscenarioTeatro_Freepik();
	this.instance.setTransform(-24,-13,1.5698,1.5662);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,320.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario2, new cjs.Rectangle(-24,-13,998.3,660.3), null);


(lib.cpEscenario1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btnSiguiente1.on("click",irA2.bind(this));
		
		function irA2(e){
		this.parent.cambiarEscenario (new lib.cpEscenario2());	
			}
		
		var sonido = new createjs.Sound.play("audiomp3", {loop: -1});
		
		sonido.volume = 0.5;
		
		function detenerSonido (){
			sonido.stop();
		}
		
		function iniciarSonido (){
			sonido.play();
		}
		
		this.btnStop.addEventListener("click", detenerSonido);
		this.btnPlay.addEventListener("click", iniciarSonido);
		
		this.btnMas.addEventListener("click", function(){
			if (sonido.volume < 1){
				sonido.volume += 0.1;
			}
		});
		
		this.btnMenos.addEventListener ("click", function(){
			if (sonido.volume > 0){
				sonido.volume -= 0.1;
			}
		});
		
		this.btnSiguiente1.addEventListener("click", detenerSonido);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnMenos
	this.btnMenos = new lib.btnMenos();
	this.btnMenos.name = "btnMenos";
	this.btnMenos.setTransform(426.05,538.05);
	new cjs.ButtonHelper(this.btnMenos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMenos).wait(1));

	// btnMas
	this.btnMas = new lib.btnMas();
	this.btnMas.name = "btnMas";
	this.btnMas.setTransform(308.1,537.1);
	new cjs.ButtonHelper(this.btnMas, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMas).wait(1));

	// btnStop
	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(198,534.05);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnStop).wait(1));

	// btnPlay
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(100.05,532.05);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(1));

	// Siguiente
	this.btnSiguiente1 = new lib.btnSiguiente1();
	this.btnSiguiente1.name = "btnSiguiente1";
	this.btnSiguiente1.setTransform(865.75,515.6);
	new cjs.ButtonHelper(this.btnSiguiente1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnSiguiente1).wait(1));

	// Titulo
	this.titulo = new lib.titulo();
	this.titulo.name = "titulo";
	this.titulo.setTransform(241.2,187.15);

	this.timeline.addTween(cjs.Tween.get(this.titulo).wait(1));

	// Capa_1
	this.instance = new lib._1050x1690();
	this.instance.setTransform(-2,-24,1.3052,1.4436);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,320.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario1, new cjs.Rectangle(-2,-24,961,664.1), null);


// stage content:
(lib._final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var escenario = new lib.cpEscenario1();
		this.addChild(escenario);
		
		this.cambiarEscenario = function (nuevoEscenario){
			this.addChild(nuevoEscenario);
			this.removeChild(escenario);
			escenario=nuevoEscenario;
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '4FFC2E210D1C92499F631AD529AB9D68',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/final_atlas_1.png", id:"final_atlas_1"},
		{src:"images/final_atlas_2.png", id:"final_atlas_2"},
		{src:"sounds/_000217914_prev.mp3", id:"_000217914_prev"},
		{src:"sounds/_007756609_prev.mp3", id:"_007756609_prev"},
		{src:"sounds/_008878823_prev.mp3", id:"_008878823_prev"},
		{src:"sounds/_008900105_prev.mp3", id:"_008900105_prev"},
		{src:"sounds/celta_1.mp3", id:"celta_1"},
		{src:"sounds/audiomp3.mp3", id:"audiomp3"},
		{src:"sounds/musical100.mp3", id:"musical100"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4FFC2E210D1C92499F631AD529AB9D68'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;