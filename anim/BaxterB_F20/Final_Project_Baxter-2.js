(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Final_Project_Baxter_2_atlas_", frames: [[0,0,1280,1024],[0,1026,1600,602]]},
		{name:"Final_Project_Baxter_2_atlas_2", frames: [[932,572,451,632],[1920,64,54,62],[1504,0,190,455],[405,1206,174,177],[1696,0,222,180],[1895,368,138,179],[1696,397,197,161],[1861,182,168,184],[0,872,601,332],[1385,1143,515,166],[0,1206,403,211],[1696,182,163,213],[1976,0,54,62],[1976,64,54,62],[1504,457,54,62],[1920,0,54,62],[932,0,570,570],[0,0,930,870],[1385,866,545,275],[1385,572,515,292]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.djbooth = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Graffiti1 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.graffiti4 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.graffiti5 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.headphones_PNG7640 = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TexturesCom_ConcreteBare0374_1_M = function() {
	this.initialize(ss["Final_Project_Baxter_2_atlas_"]);
	this.gotoAndStop(1);
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


(lib.walking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{walking:0,standing:8});

	// timeline functions:
	this.frame_7 = function() {
		this.gotoAndPlay("walking");
	}
	this.frame_8 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(16));

	// mashk
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(-506.2,-1580.3,4.0595,4.0595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// spaceship
	this.instance_1 = new lib.CachedTexturedBitmap_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-211.9,-823.25,4.0595,4.0595);

	this.instance_2 = new lib.CachedTexturedBitmap_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-213.3,-824.05,4.0595,4.0595);

	this.instance_3 = new lib.CachedTexturedBitmap_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-212.3,-823.05,4.0595,4.0595);

	this.instance_4 = new lib.CachedTexturedBitmap_9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-210.85,-822.65,4.0595,4.0595);

	this.instance_5 = new lib.CachedTexturedBitmap_10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-213.1,-824.45,4.0595,4.0595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).wait(5));

	// body
	this.instance_6 = new lib.CachedTexturedBitmap_11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-588.6,-2107.25,4.0595,4.0595);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24));

	// headphones
	this.instance_7 = new lib.headphones_PNG7640();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-955.65,-2169.55,1,0.7901,-5.9827);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24));

	// legs
	this.instance_8 = new lib.CachedTexturedBitmap_12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-352.75,-359.85,4.0595,4.0595);

	this.instance_9 = new lib.CachedTexturedBitmap_13();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-539.7,-358,4.0595,4.0595);

	this.instance_10 = new lib.CachedTexturedBitmap_14();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-312.55,-358,4.0595,4.0595);

	this.instance_11 = new lib.CachedTexturedBitmap_15();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-440.45,-361.65,4.0595,4.0595);

	this.instance_12 = new lib.CachedTexturedBitmap_16();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-437,-372.65,4.0595,4.0595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-955.6,-2302.9,1357.4,2677.2000000000003);


(lib.djbooth_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.instance = new lib.djbooth();
	this.instance.parent = this;
	this.instance.setTransform(-81.15,-81.15,0.2847,0.2847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.djbooth_1, new cjs.Rectangle(-81.1,-81.1,162.3,162.3), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// door
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(168.6,132.55,0.4232,0.4232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.CachedTexturedBitmap_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(634.85,90.2,0.4232,0.4232);

	this.instance_2 = new lib.CachedTexturedBitmap_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(611.65,70.3,0.4232,0.4232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// djbooth
	this.djbooth_mc = new lib.djbooth_1();
	this.djbooth_mc.name = "djbooth_mc";
	this.djbooth_mc.parent = this;
	this.djbooth_mc.setTransform(1223.15,345.15);

	this.timeline.addTween(cjs.Tween.get(this.djbooth_mc).wait(1));

	// graffiti
	this.instance_3 = new lib.graffiti5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(884,61,0.501,0.501);

	this.instance_4 = new lib.graffiti4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1387,20);

	this.instance_5 = new lib.Graffiti1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(464,145,0.2743,0.293);

	this.instance_6 = new lib.CachedTexturedBitmap_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(370.2,46.7,0.4232,0.4232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// background
	this.instance_7 = new lib.TexturesCom_ConcreteBare0374_1_M();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,1.35,0.6645);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,2160,426.3), null);


// stage content:
(lib.Final_Project_Baxter2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 10;
		
		
		function handleKeyDown(event) {
		
			if (root.raver_mc.currentFrame == 9) {
				root.raver_mc.gotoAndPlay("walking");
			}
		
			if (event.keyCode == 39 && root.background_mc.x > -1800) {
				root.raver_mc.scaleX = .1232;
				root.background_mc.x = root.background_mc.x - speed;
		
			}
			if (event.keyCode == 37 && root.background_mc.x < 100) {
				root.raver_mc.scaleX = -.1232
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		
		function handleKeyUp(event) {
			root.raver_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.djbooth_mc.addEventListener("click", handleClickDjbooth)
		
		function handleClickDjbooth(event) {
			var song_snd = createjs.Sound.play("song");
			root.background_mc.djbooth_mc.play()
			song_snd.volume = .4;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiPbAlCMAAAg+eME4LAAAMAAAA+eg");
	mask.setTransform(1080,237);

	// raver
	this.raver_mc = new lib.walking();
	this.raver_mc.name = "raver_mc";
	this.raver_mc.parent = this;
	this.raver_mc.setTransform(268.45,321.75,0.1232,0.1232,0,0,0,-117.3,-872.8);

	var maskedShapeInstanceList = [this.raver_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.raver_mc).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.parent = this;
	this.background_mc.setTransform(0,1.75,1,1.1814);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1080,238.8,1080,266.5);
// library properties:
lib.properties = {
	id: '7DADBDE0F6EA9149AF6A3149C9E778B2',
	width: 2160,
	height: 474,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Final_Project_Baxter_2_atlas_.png?1608403048363", id:"Final_Project_Baxter_2_atlas_"},
		{src:"images/Final_Project_Baxter_2_atlas_2.png?1608403048363", id:"Final_Project_Baxter_2_atlas_2"},
		{src:"sounds/song.mp3?1608403048397", id:"song"}
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
an.compositions['7DADBDE0F6EA9149AF6A3149C9E778B2'] = {
	getStage: function() { return exportRoot.getStage(); },
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;