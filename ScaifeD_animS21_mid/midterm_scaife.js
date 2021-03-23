(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"midterm_scaife_atlas_1", frames: [[0,0,1000,1333]]},
		{name:"midterm_scaife_atlas_2", frames: [[1182,452,446,78],[1182,532,135,212],[1319,532,135,210],[1630,452,135,208],[1502,744,135,209],[1502,955,135,208],[1639,662,135,207],[1767,452,135,203],[1639,871,332,78],[1456,532,135,210],[1502,1165,135,208],[0,0,1180,887],[1182,0,800,450],[0,889,1500,480]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._516ei76wUFL_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._51M6dSiGy1L_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._51kJA3pI7SL_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._51QomWFikAL_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._51D6Alu1iYL_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._51R5gi5FXL_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._51vy5KrDcL_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._61nJz5Tm9WL_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._51QvTzb2vYL_SL500_SX135_ = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ringwarp = function() {
	this.initialize(img.ringwarp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.ringgate = function() {
	this.initialize(img.ringgate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2360,1640);


(lib.stars = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.theexpanse = function() {
	this.initialize(img.theexpanse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2550,3300);


(lib.James_Holden__Expanse_season_4_promotional_3 = function() {
	this.initialize(ss["midterm_scaife_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rocinante = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["midterm_scaife_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.titlecard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.theexpanse();
	this.instance.setTransform(-123.7,-160.1,0.097,0.097);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titlecard, new cjs.Rectangle(-123.7,-160.1,247.5,320.29999999999995), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rocinante();
	this.instance.setTransform(0,0,0.0349,0.0349);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,28,15.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ringgate();
	this.instance.setTransform(0,0,0.2155,0.2155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,508.6,353.5), null);


(lib.streaming = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-111.5,-19.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.streaming, new cjs.Rectangle(-111.5,-19.5,223,39), null);


(lib.space = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars
	this.instance = new lib.stars();
	this.instance.setTransform(-443.3,-368.95,0.7421,0.7421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// space
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-375,-120,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.space, new cjs.Rectangle(-443.3,-368.9,875.6,658.2), null);


(lib.holden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// type
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-90,-90,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// holden
	this.instance_1 = new lib.James_Holden__Expanse_season_4_promotional_3();
	this.instance_1.setTransform(-44.95,-34.95,0.09,0.09);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holden, new cjs.Rectangle(-90,-90,166,175.1), null);


(lib.expanbook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._51QvTzb2vYL_SL500_SX135_();
	this.instance.setTransform(-37.55,-57.8,0.5558,0.5558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.expanbook, new cjs.Rectangle(-37.5,-57.8,75,115.6), null);


(lib.book8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._51vy5KrDcL_SL500_SX135_();
	this.instance.setTransform(-47.75,-71.8,0.7074,0.7074);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book8, new cjs.Rectangle(-47.7,-71.8,95.5,143.6), null);


(lib.book7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._61nJz5Tm9WL_SL500_SX135_();
	this.instance.setTransform(-45,-70,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book7, new cjs.Rectangle(-45,-70,90,140), null);


(lib.book6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._51R5gi5FXL_SL500_SX135_();
	this.instance.setTransform(-47.35,-72.6,0.7014,0.7014);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book6, new cjs.Rectangle(-47.3,-72.6,94.69999999999999,145.2), null);


(lib.book5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._51M6dSiGy1L_SL500_SX135_();
	this.instance.setTransform(-48,-74.7,0.7114,0.7114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book5, new cjs.Rectangle(-48,-74.7,96.1,149.4), null);


(lib.book4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._516ei76wUFL_SL500_SX135_();
	this.instance.setTransform(-45.65,-71.7,0.6764,0.6764);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book4, new cjs.Rectangle(-45.6,-71.7,91.30000000000001,143.4), null);


(lib.book3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._51kJA3pI7SL_SL500_SX135_();
	this.instance.setTransform(-44.6,-68.75,0.6612,0.6612);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book3, new cjs.Rectangle(-44.6,-68.7,89.30000000000001,137.5), null);


(lib.book2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._51QomWFikAL_SL500_SX135_();
	this.instance.setTransform(-43.8,-67.8,0.6488,0.6488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book2, new cjs.Rectangle(-43.8,-67.8,87.6,135.6), null);


(lib.book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._51D6Alu1iYL_SL500_SX135_();
	this.instance.setTransform(-46.8,-72.1,0.6933,0.6933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book, new cjs.Rectangle(-46.8,-72.1,93.6,144.2), null);


(lib.ring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
		
		this.roci_mc.addEventListener("click", link.bind(this));
			function link(e) {
			var url = "https://www.youtube.com/watch?v=6EXUQe7D6Xw&ab_channel=GenerationFilms";
			var win = window.open(url, "_blank");
			win.focus();
		}
		
		stage.enableMouseOver(10);
		this.roci_mc.on("mouseover",function(e){ this.cursor = "pointer"; });
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(11));

	// rocinante
	this.roci_mc = new lib.Symbol2();
	this.roci_mc.name = "roci_mc";
	this.roci_mc.setTransform(-389.95,59.95,1,1,0,0,0,14,7.8);
	this.roci_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.roci_mc).wait(1).to({_off:false},0).wait(1).to({regY:7.9,rotation:0.3846,x:-383.25,y:60.05},0).wait(1).to({rotation:0.7692,x:-376.6},0).wait(1).to({rotation:1.1538,x:-369.9},0).wait(1).to({rotation:1.5383,x:-363.25},0).wait(1).to({rotation:1.9229,x:-356.55,y:60},0).wait(1).to({rotation:2.3075,x:-349.9},0).wait(1).to({rotation:2.6921,x:-343.25,y:60.05},0).wait(1).to({rotation:3.0767,x:-336.55},0).wait(1).to({rotation:3.4613,x:-330},0).wait(1).to({rotation:3.8459,x:-321.2},0).wait(1).to({rotation:4.2305,x:-312.45},0).wait(1).to({rotation:4.615,x:-303.7,y:60},0).wait(1).to({rotation:4.9996,x:-294.95},0).wait(1).to({rotation:5.3842,x:-286.2},0).wait(1).to({rotation:5.7688,x:-277.45},0).wait(1).to({rotation:6.1534,x:-268.7},0).wait(1).to({rotation:6.538,x:-259.95,y:60.05},0).wait(1).to({rotation:6.9226,x:-249.95},0).wait(1).to({rotation:7.3072,x:-239.95},0).wait(1).to({rotation:7.6917,x:-229.95,y:60},0).wait(1).to({rotation:8.0763,x:-219.95},0).wait(1).to({rotation:8.4609,x:-209.95},0).wait(1).to({rotation:8.8455,x:-199.9},0).wait(1).to({rotation:9.2301,x:-193.7,y:60.05},0).wait(1).to({rotation:9.6147,x:-187.45},0).wait(1).to({rotation:9.9993,x:-181.15},0).wait(1).to({rotation:10.3839,x:-174.95,y:60},0).wait(1).to({rotation:10.7684,x:-168.75},0).wait(1).to({rotation:11.153,x:-162.45},0).wait(1).to({rotation:11.5376,x:-156.25,y:60.05},0).wait(1).to({rotation:11.9222,x:-149.95},0).wait(1).to({rotation:12.3068,x:-149.6,y:60},0).wait(1).to({rotation:12.6914,x:-149.25,y:60.05},0).wait(1).to({rotation:13.076,x:-148.9,y:60},0).wait(1).to({rotation:13.4606,x:-148.55,y:60.05},0).wait(1).to({rotation:13.8451,x:-148.15,y:60},0).wait(1).to({rotation:14.2297,x:-147.85},0).wait(1).to({rotation:14.6143,x:-147.45,y:60.05},0).wait(1).to({rotation:14.9989,x:-147.1,y:60},0).wait(1).to({rotation:19.9987,x:-146.75},0).wait(1).to({rotation:24.9984,x:-146.4},0).wait(1).to({rotation:29.9982,x:-146.05},0).wait(1).to({rotation:34.9979,x:-145.7},0).wait(1).to({rotation:39.9977,x:-145.4},0).wait(1).to({rotation:44.9974,x:-145},0).wait(1).to({rotation:53.9972,x:-144},0).wait(1).to({rotation:62.997,x:-143.05},0).wait(1).to({rotation:71.9969,x:-142},0).wait(1).to({rotation:80.9967,x:-141.05,y:60.05},0).wait(1).to({rotation:89.9965,x:-140.1,y:60},0).wait(1).to({rotation:95.6216,x:-140.05,y:60.55},0).wait(1).to({rotation:101.2466,x:-140.1,y:61},0).wait(1).to({rotation:106.8717,x:-140.05,y:61.45},0).wait(1).to({rotation:112.4968,x:-140.1,y:62},0).wait(1).to({rotation:118.1218,x:-140.05,y:62.45},0).wait(1).to({rotation:123.7469,x:-140.1,y:62.9},0).wait(1).to({rotation:129.3719,y:63.35},0).wait(1).to({rotation:134.997,y:63.85},0).wait(1).to({rotation:129.996,x:-139.2,y:64.5},0).wait(1).to({rotation:138.924,x:-138.35,y:65.05},0).wait(1).to({rotation:145.543,x:-137.45,y:65.65},0).wait(1).to({rotation:149.663,x:-136.6,y:66.25},0).wait(1).to({rotation:166.057,x:-135.7,y:66.8},0).wait(1).to({rotation:192.95,x:-134.75,y:67.4},0).wait(1).to({rotation:208.175,x:-133.85,y:68.05},0).wait(1).to({rotation:206.5275,x:-133,y:68.65},0).wait(1).to({rotation:204.88,x:-132.15,y:69.2},0).wait(1).to({rotation:203.2325,x:-131.25,y:69.85},0).wait(1).to({rotation:201.585,x:-130.35,y:70.4},0).wait(1).to({rotation:199.9375,x:-129.5,y:71},0).wait(1).to({rotation:198.29,x:-128.65,y:71.6},0).wait(1).to({rotation:196.6425,x:-127.8,y:72.2},0).wait(1).to({rotation:194.995,x:-126.9,y:72.8},0).wait(1).to({rotation:196.6616,x:-126.95,y:72.4},0).wait(1).to({rotation:198.3281,y:71.9},0).wait(1).to({rotation:199.9947,y:71.5},0).wait(1).to({rotation:201.6612,y:71.05},0).wait(1).to({rotation:203.3278,x:-126.9,y:70.6},0).wait(1).to({rotation:204.9943,x:-126.95,y:70.2},0).wait(1).to({rotation:206.6609,x:-126.9,y:69.75},0).wait(1).to({rotation:208.3274,y:69.3},0).wait(1).to({rotation:209.994,x:-126.95,y:68.9},0).wait(1).to({y:68.45},0).wait(1).to({y:68},0).wait(1).to({y:67.55},0).wait(1).to({y:67.15},0).wait(1).to({y:66.7},0).wait(1).to({y:66.25},0).wait(1).to({y:65.85},0).wait(1).to({y:65.25},0).wait(1).to({y:64.65},0).wait(1).to({y:64.05},0).wait(1).to({y:63.45},0).wait(1).to({y:62.85},0).wait(1).to({regY:7.7,rotation:209.9941,x:-127.05,y:63.05},0).wait(1).to({regY:7.9,rotation:209.994,x:-126.9,y:56.8},0).wait(1).to({x:-126.85,y:50.75},0).wait(1).to({x:-126.8,y:44.75},0).wait(1).to({y:47.75},0).wait(1).to({y:50.75},0).wait(1).to({y:53.75},0).wait(1).to({y:56.75},0).wait(1).to({y:59.75},0).wait(1));

	// warp
	this.instance = new lib.ringwarp();
	this.instance.setTransform(-59.7,-39.95,0.0507,0.0504);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(4).to({scaleX:0.0931,scaleY:0.0925,x:-109.7,y:-74.5},0).wait(3).to({scaleX:0.127,scaleY:0.1263,x:-149.7,y:-102.15},0).wait(3).to({scaleX:0.1778,scaleY:0.1769,x:-209.7,y:-143.65},0).wait(3).to({scaleX:0.2032,scaleY:0.2021,x:-239.65,y:-164.35},0).wait(3).to({scaleX:0.2204,scaleY:0.2192,x:-259.95,y:-178.45},0).to({_off:true},78).wait(10));

	// ring
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(0,0,1,1,0,0,0,254.3,176.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.9,-178.4,664.0999999999999,359.4);


(lib.book9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.books_mc = new lib.book();
	this.books_mc.name = "books_mc";

	this.timeline.addTween(cjs.Tween.get(this.books_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book9, new cjs.Rectangle(-46.8,-72.1,93.6,144.2), null);


(lib.books = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.books_mc.addEventListener("click", link.bind(this));
			function link(e) {
			var url = "https://www.amazon.com/gp/bookseries/B00K7B2CRQ";
			var win = window.open(url, "_blank");
			win.focus();
					}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(82));

	// books
	this.books_mc = new lib.expanbook();
	this.books_mc.name = "books_mc";

	this.books_mc_1 = new lib.book2();
	this.books_mc_1.name = "books_mc_1";
	this.books_mc_1.setTransform(0.3,7);

	this.books_mc_2 = new lib.book3();
	this.books_mc_2.name = "books_mc_2";
	this.books_mc_2.setTransform(0.5,8.95);

	this.books_mc_3 = new lib.book4();
	this.books_mc_3.name = "books_mc_3";
	this.books_mc_3.setTransform(0.9,11.9);

	this.books_mc_4 = new lib.book5();
	this.books_mc_4.name = "books_mc_4";
	this.books_mc_4.setTransform(0.55,4.9);

	this.books_mc_5 = new lib.book6();
	this.books_mc_5.name = "books_mc_5";
	this.books_mc_5.setTransform(0.3,2.8);

	this.books_mc_6 = new lib.book7();
	this.books_mc_6.name = "books_mc_6";
	this.books_mc_6.setTransform(0.55,0.2);

	this.books_mc_7 = new lib.book8();
	this.books_mc_7.name = "books_mc_7";
	this.books_mc_7.setTransform(2.7,2);

	this.books_mc_8 = new lib.book9();
	this.books_mc_8.name = "books_mc_8";
	this.books_mc_8.setTransform(0.6,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.books_mc}]}).to({state:[{t:this.books_mc_1}]},8).to({state:[{t:this.books_mc_2}]},8).to({state:[{t:this.books_mc_3}]},8).to({state:[{t:this.books_mc_4}]},11).to({state:[{t:this.books_mc_5}]},11).to({state:[{t:this.books_mc_6}]},9).to({state:[{t:this.books_mc_7}]},9).to({state:[{t:this.books_mc_8}]},11).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-69.8,97.9,153.39999999999998);


// stage content:
(lib.midterm_scaife = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,71];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}
	this.frame_71 = function() {
		this.stop();
		
		
		
		this.title_mc.addEventListener("click", link.bind(this));
			function link(e) {
			var url = "https://www.youtube.com/watch?v=8X5gXIQmY-E&t=4s&ab_channel=SYFY";
			var win = window.open(url, "_blank");
			win.focus();
			
			
		this.holden_mc.addEventListener("click", link.bind(this));
			function link(e) {
			var url = "https://expanse.fandom.com/wiki/James_Holden_(TV)";
			var win = window.open(url, "_blank");
			win.focus();
		
		
		this.streaming_mc.addEventListener("click", link.bind(this));
			function link(e) {
			var url = "https://www.amazon.com/Leviathan-Wakes/dp/B08B48L4CQ/ref=sr_1_1?dchild=1&keywords=the+expanse&qid=1616121119&s=instant-video&sr=1-1";
			var win = window.open(url, "_blank");
			win.focus();
				
				}
		
			}
		}
		
		stage.enableMouseOver(10);
		this.title_mc.on("mouseover",function(e){ this.cursor = "pointer"; });
		
		stage.enableMouseOver(10);
		this.holden_mc.on("mouseover",function(e){ this.cursor = "pointer"; });
		
		stage.enableMouseOver(10);
		this.streaming_mc.on("mouseover",function(e){ this.cursor = "pointer"; });
		
		stage.enableMouseOver(10);
		this.books_mc.on("mouseover",function(e){ this.cursor = "pointer"; });
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// prime
	this.streaming_mc = new lib.streaming();
	this.streaming_mc.name = "streaming_mc";
	this.streaming_mc.setTransform(119,-44);
	this.streaming_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.streaming_mc).wait(65).to({_off:false},0).wait(1).to({x:119.1667,y:-30},0).wait(1).to({x:119.3333,y:-16},0).wait(1).to({x:119.5,y:-2},0).wait(1).to({x:119.6667,y:12},0).wait(1).to({x:119.8333,y:26},0).wait(1).to({x:120,y:40},0).wait(1));

	// title
	this.title_mc = new lib.titlecard();
	this.title_mc.name = "title_mc";
	this.title_mc.setTransform(383.5,78.75);
	this.title_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(71).to({_off:false},0).wait(1));

	// holden
	this.holden_mc = new lib.holden();
	this.holden_mc.name = "holden_mc";
	this.holden_mc.setTransform(593,98.45);
	this.holden_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.holden_mc).wait(71).to({_off:false},0).wait(1));

	// books
	this.books_mc = new lib.books();
	this.books_mc.name = "books_mc";
	this.books_mc.setTransform(115.9,115,0.8282,0.8282);
	this.books_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.books_mc).wait(71).to({_off:false},0).wait(1));

	// ring
	this.ring_mc = new lib.ring();
	this.ring_mc.name = "ring_mc";
	this.ring_mc.setTransform(377.1,102.7);

	this.timeline.addTween(cjs.Tween.get(this.ring_mc).wait(72));

	// space
	this.instance = new lib.space();
	this.instance.setTransform(354.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(261.2,-169.4,525.5999999999999,558.2);
// library properties:
lib.properties = {
	id: '5949E29E124847DCA4ECB519A045A68A',
	width: 700,
	height: 200,
	fps: 24,
	color: "#006699",
	opacity: 1.00,
	manifest: [
		{src:"images/ringwarp.png?1616123896421", id:"ringwarp"},
		{src:"images/ringgate.png?1616123896421", id:"ringgate"},
		{src:"images/theexpanse.png?1616123896421", id:"theexpanse"},
		{src:"images/midterm_scaife_atlas_1.png?1616123896266", id:"midterm_scaife_atlas_1"},
		{src:"images/midterm_scaife_atlas_2.png?1616123896267", id:"midterm_scaife_atlas_2"}
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
an.compositions['5949E29E124847DCA4ECB519A045A68A'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;