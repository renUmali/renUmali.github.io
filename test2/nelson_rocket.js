(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#484848").s().p("AjchaIBOg5IETAAIBXBAIi7Dng");
	this.shape.setTransform(84.45,278.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676767").s().p("Anyj3IGdAAIhKA2IgBABIpeG4gAEli5IAAgBIgBAAIhTg9IEKAAIEkGXg");
	this.shape_1.setTransform(77.85,288.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("An/QCMAAAggDIP/AAMAAAAgDg");
	this.shape_2.setTransform(79.225,160.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("An9EdIH8o5IH/IzIAAAGg");
	this.shape_3.setTransform(79.4,29.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AsKYmIgCgBIABgCIESn8MAAAggIIABgCIICpCIABgBIABAAIACABIICI4IABACMAAAAgUIgBAAIAAABIgwAAIEsGjIAAACIgBACIgBABIgCgBInnlkIi9DsIgBABIgCAAIgCgBIj/jyIpmG/IgDABIgBgBgAsAYaIJem5IABAAIBKg3ImdAAgAEiRnIABABIAAAAIHaFaIkkmYIkKAAgAicRjID9DvIC7joIhXhAIkTAAgAnzQkIP/AAMAAAggDIv/AAgAnvvkIP7AAIAAgGIoAo1g");
	this.shape_4.setTransform(78.05,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,156.1,315), null);


(lib.rockettween = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(78,157.55,1,1,0,0,0,78,157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:157.5,rotation:-16.8076,x:68.3,y:115.7},0).wait(1).to({rotation:-20.6145,x:54.8,y:75.45},0).wait(1).to({rotation:-24.2594,x:39,y:36.85},0).wait(1).to({rotation:-38.1652,x:19.65,y:2.15},0).wait(1).to({rotation:-46.4215,x:-7.7,y:-27.5},0).wait(1).to({rotation:-51.3664,x:-37,y:-53.25},0).wait(1).to({rotation:-55.5547,x:-67.45,y:-75.85},0).wait(1).to({rotation:-59.5824,x:-98.6,y:-95.8},0).wait(1).to({rotation:-63.7038,x:-130.3,y:-113.15},0).wait(1).to({rotation:-68.0361,x:-162.3,y:-127.65},0).wait(1).to({rotation:-72.8463,x:-194.05,y:-139.1},0).wait(1).to({rotation:-76.0523,x:-226.3,y:-148.05},0).wait(1).to({rotation:-77.5258,x:-257.9,y:-155.55},0).wait(1).to({rotation:-78.4151,x:-288.65,y:-162.15},0).wait(1).to({rotation:-79.0332,x:-318.7,y:-168.35},0).wait(1).to({rotation:-79.493,x:-347.75,y:-173.95},0).wait(1).to({rotation:-79.8565,x:-375.9,y:-179.15},0).wait(1).to({rotation:-80.1544,x:-403.2,y:-184.05},0).wait(1).to({rotation:-80.4054,x:-429.65,y:-188.65},0).wait(1).to({rotation:-80.6223,x:-455.2,y:-193.05},0).wait(1).to({rotation:-80.8132,x:-479.75,y:-197.15},0).wait(1).to({rotation:-80.9847,x:-503.6,y:-201.05},0).wait(1).to({rotation:-81.1406,x:-526.4,y:-204.7},0).wait(1).to({rotation:-81.2845,x:-548.3,y:-208.2},0).wait(1).to({rotation:-81.419,x:-569.35,y:-211.5},0).wait(1).to({rotation:-81.5463,x:-589.45,y:-214.55},0).wait(1).to({rotation:-81.6683,x:-608.65,y:-217.5},0).wait(1).to({rotation:-81.7864,x:-626.9,y:-220.15},0).wait(1).to({rotation:-81.9026,x:-644.25,y:-222.7},0).wait(1).to({rotation:-82.0184,x:-660.85,y:-225.15},0).wait(1).to({rotation:-82.1345,x:-676.45,y:-227.35},0).wait(1).to({rotation:-82.2514,x:-690.95,y:-229.4},0).wait(1).to({rotation:-82.375,x:-704.85,y:-231.3},0).wait(1).to({rotation:-82.5022,x:-717.6,y:-233.1},0).wait(1).to({rotation:-82.6377,x:-729.6,y:-234.65},0).wait(1).to({rotation:-82.7842,x:-740.65,y:-236.15},0).wait(1).to({rotation:-82.9434,x:-750.75,y:-237.4},0).wait(1).to({rotation:-83.1182,x:-759.9,y:-238.6},0).wait(1).to({rotation:-83.3254,x:-768.5,y:-239.6},0).wait(1).to({rotation:-83.5431,x:-775.55,y:-240.5},0).wait(1).to({rotation:-83.8176,x:-782.3,y:-241.25},0).wait(1).to({rotation:-84.1785,x:-788.6,y:-241.95},0).wait(1).to({rotation:-84.5643,x:-793.2,y:-242.45},0).wait(1).to({rotation:-84.9565,x:-796.55,y:-242.75},0).wait(1).to({rotation:-85.3192,x:-798.85,y:-242.95},0).wait(1).to({rotation:-85.6054,x:-800.15,y:-243.05},0).wait(1).to({x:-800.8,y:-243.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-957.8,-309.6,1144,625);


// stage content:
(lib.nelson_rocket = function(mode,startPosition,loop,reversed) {
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
		this.rocket_mc.addEventListener("click",blastOff);
		
		var root = this;
		
		function blastOff(){
			console.log("rocket will take off");
			root.rocket_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// rocket
	this.rocket_mc = new lib.rockettween();
	this.rocket_mc.name = "rocket_mc";
	this.rocket_mc.setTransform(531.7,400.1,1,1,0,0,0,33.3,124);

	this.timeline.addTween(cjs.Tween.get(this.rocket_mc).wait(1));

	// ground
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAurAOTIhJgeQgrgTgegHQgigIgqgDQgcgCgxAAQlrACi2gBQk7AAjmgLQi/gJkkgXInjgnQsNg3xRAHQzsAVp2ADQpJADlugXQoIgimihiQgqgKgXgKQgjgPgTgYQgfgqALhMQAUhZACgrQAFhThCh4QglhAgRggQgfg5gNgtQgVhFAIhLQAJhKAjg/QAIgEAIABIALgeIgngPQA3AGBHATIB7AlQH2CZIMAAQFDABF1g8QEiguGNhhQDkg4HHh1QGThkEdgxQEhgyFkgfQD4gXGPgWQJaghJZgVQQagkLVAYQPFAgMcCOQCOAZBTAdQB4ArBJBJQBABBAjBfQAgBWAFBlQAEBVgOBoQgIBBgZB6Ih8J3QgHAlgIATQgLAdgVAQQgRANgbAFQgSADgeAAQh8ACivgLQjHgPhkgFQlrgWjmAoQgdAFj+A6QiqAmhyACIgOABQiLAAh4gvgEhNDAJTIhagVQAgAMA6AJg");
	this.shape.setTransform(474.572,594.355);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// sky
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,1).p("EhNQgzwMCahAAAMAAABnhMiahAAAg");
	this.shape_1.setTransform(478,321.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B7B7B7","#8E0EB7","#FF4EE4"],[0,0,1],10.2,-367.4,10.2,368.3).s().p("EhNQAzxMAAAhngMCahAAAMAAABngg");
	this.shape_2.setTransform(478,321.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(422.1,309.3,585,381.2);
// library properties:
lib.properties = {
	id: '044ACF7153954E489310D78CCB3F4AE2',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['044ACF7153954E489310D78CCB3F4AE2'] = {
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