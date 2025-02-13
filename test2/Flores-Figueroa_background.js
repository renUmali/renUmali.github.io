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


(lib.yellowbuilding = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5).p("Ao0wjIOrAAIAAOsIurAAgAKtwjIOsAAIAAOsIusAAgAfVwjIOsAAIAAOsIusAAgAKtB4IOsAAIAAOsIusAAgAfVB4IOsAAIAAOsIusAAgAo0B4IOrAAIAAOsIurAAgA7awjIOsAAIAAOsIusAAgEguAgQjIOsAAIAAOsIusAAgA7aB4IOsAAIAAOsIusAAgEguAAB4IOsAAIAAOsIusAAg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AfVQkIAAusIOsAAIAAOsgAKtQkIAAusIOsAAIAAOsgAo0QkIAAusIOrAAIAAOsgA7aQkIAAusIOsAAIAAOsgEguAAQkIAAusIOsAAIAAOsgAfVh3IAAusIOsAAIAAOsgAKth3IAAusIOsAAIAAOsgAo0h3IAAusIOrAAIAAOsgA7ah3IAAusIOsAAIAAOsgEguAgB3IAAusIOsAAIAAOsg");
	this.shape_1.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowbuilding, new cjs.Rectangle(-297,-108.5,594,217), null);


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
	this.shape.graphics.f("#999999").s().p("AjQEAIgOgJIgDgEIgFgFIgEgEIAAAAIgDgDIgFgCIgFgDIgEgDIgEgDIgEgEIgEgFIgDgFIgCgFIgCgGIgBgFIgBgFIAAgGIAAgGIAAgFIAAgCIgGgCIgHgCIgGgCIgEgCIgFgDIgEgDIgEgEIgEgEIgDgDIgEgCIgEgFIgDgEIgDgCIgFgCIgGgCIgFgDIgFgDIgEgEIgDgEIgEgEIgDgFIgCgEIgDgEIgDgFIgCgGIgBgMIgBgOIAAgQIAAgPIABgPIACgMIACgMIACgGIADgFIACgFIADgHIACgHIADgHIADgFIADgEIADgEIAEgDIADgFIAEgFIAEgEIAFgFIAFgEIAGgEIAFgFIAFgEIACgDIADgDIAFgEIAGgEIACgDIADgFIADgEIADgEIABAAIACgFIACgFIADgGIAEgEIAEgEIAFgEIAFgDIAFgDIAGgDIAHgFIAFgFIAFgEIACgEIADgDIAEgDIAFgEIAEgEIAEgDIAEgDIAFgCIAFgDIAEgCIAHgDIAGgDIAHgCIAGgCIAFgEIAGgDIAFgCIAGgCIAGgBIAFgCIAFgCIAFgCIAFgCIAGgCIAHgCIAHgCIAFgDIAFgCIAFgCIAGgDIAGgCIAFgCIAGgDQAPgEAPAAIAbAAIAdAAIAoAAIAZACQAKABAJAEIAFACIAFADIAHABIAGAAIAHABIAGABIAGACIAGABIAGADIAFADIAFADIAFAEIAFAEIAFAEIAGADIAGAEIAGAEIAFAEIAFAEIAFAFIAFAEIAFAFIABAAIAFACIAFABIAGADIAFADIAFADIAEADIAEAEIAEAFIADAFIADAFIADAEIAFAGIAFADIAFAEIAFAEIAFAEIAFAEIADAEIADAEIACAFIACAEIAFAEIAEAEIAFAFIAEAFIAGADIAFADIAFAEIAEAEIADAFIADAFIACAGQAEAQAAAQIgBAeIAAAcIAAArQgBANgDAMQgCAIgFAIIgCAEIgCAHIgBAGIgCAHIgDAGIgCAEIgDAEIgDAEIgEAEIgDAEIgDADIgCAFIgCAFIgDAGIgDAEIgDAEIgEADIgEAEIgGAEIgFAFIgGAEIgGADIgFAEIgGAEIgFAEQgLALgNAHIgTALIgeAOQgVAIgVAEQgNADgNAAIgaAAIhBAAIhCAAIg+AAIhAAAIgDABQggAAgagRg");
	this.shape.setTransform(37.7025,27.2527);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,75.4,54.5), null);


(lib.smokestack = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").p("AJZfjIyxAAMAAAgztISxrUg");
	this.shape.setTransform(0,-0.1673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E0001").s().p("ApYfhMAAAgztISxrUMAAAA/Bg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smokestack, new cjs.Rectangle(-61.1,-202.6,122.2,405.29999999999995), null);


(lib.paperPlane = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ANIliQADAJgcAMQgNAGgVAGQjhBBjTBmQlUCllYByQgaAIgZAIQggAKgfAJQg2gmgyggQgLgHgMgIQhHgthAgfQgxgYgtgnIgehkgAMvlNIAZgVAkIDOIEcCVIMbqwAmGCNIB+BBAotBaIAAD/IEliL");
	this.shape.setTransform(-91.9602,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIDOIh+hBIB+BBIklCLIAAj/QAyAgA2AnIA/gUIg/AUQg2gngyggIgWgPQhIgthAgfQgxgZgtgmIgehkIaPi+IgZAWQgNAFgVAGQjhBBjTBnQlTCklZByIgzAQIAzgQQFZhyFTikQDThnDhhBQAVgGANgFIsbKvg");
	this.shape_1.setTransform(-91.975,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AKGiFIBOgOIAUgDALUiTIBRADAKGiFIywFSIg8AAIhnhpgArNBkIhXAPIAAk/IX4A5");
	this.shape_2.setTransform(-83.45,16.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ao+DNIhmhpIVTjqIyxFTgAr8jMIX5A5IhOANI1TDqIhYAPgAKviGg");
	this.shape_3.setTransform(-87.4875,16.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},7).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.4,-6.4,178,79.9);


(lib.smoke = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,-0.05,1,1,0,0,0,37.7,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:27.3,y:-27.7},0).wait(1).to({y:-55.5},0).wait(1).to({y:-83.3},0).wait(1).to({y:-111.1},0).wait(1).to({y:-138.9},0).wait(1).to({y:-166.7},0).wait(1).to({y:-194.5},0).wait(1).to({y:-222.3},0).wait(1).to({y:-250.1},0).wait(1).to({y:-277.9},0).wait(1).to({y:-305.7},0).wait(1).to({y:-333.5},0).wait(1).to({y:-361.25},0).wait(1).to({y:-389.05},0).wait(1).to({y:-416.85},0).wait(1).to({y:-444.65},0).wait(1).to({y:-472.45},0).wait(1).to({y:-500.25},0).wait(1).to({y:-528.05},0).wait(1).to({y:-555.85},0).wait(1).to({y:-583.65},0).wait(1).to({y:-611.45},0).wait(1).to({y:-639.25},0).wait(1).to({y:-667.05},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-694.3,75.4,721.5999999999999);


(lib.paperPlane_flying = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.paperPlane();
	this.instance.setTransform(-13.05,7.05,1,1,0,0,0,-92,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-89.4,regY:33.5,rotation:3.0882,x:60.05,y:-27.1},0).wait(1).to({rotation:6.2786,x:128.35,y:-53.8},0).wait(1).to({rotation:9.484,x:194.35,y:-75.45},0).wait(1).to({rotation:12.6804,x:258.25,y:-92.4},0).wait(1).to({rotation:15.8386,x:319.85,y:-105.25},0).wait(1).to({rotation:18.9381,x:379.25,y:-114.2},0).wait(1).to({rotation:21.9553,x:436.4,y:-119.75},0).wait(1).to({rotation:24.8696,x:491.25,y:-122.25},0).wait(1).to({rotation:27.6673,x:543.9,y:-122},0).wait(1).to({rotation:30.3333,x:594.35,y:-119.35},0).wait(1).to({rotation:32.8595,x:642.5,y:-114.6},0).wait(1).to({rotation:35.24,x:688.4,y:-108.15},0).wait(1).to({rotation:37.4715,x:732.05,y:-100.1},0).wait(1).to({rotation:39.5533,x:773.45,y:-90.95},0).wait(1).to({rotation:41.4855,x:812.65,y:-80.75},0).wait(1).to({rotation:43.2729,x:849.55,y:-69.95},0).wait(1).to({rotation:44.9171,x:884.2,y:-58.65},0).wait(1).to({rotation:46.4237,x:916.6,y:-47.05},0).wait(1).to({rotation:47.7976,x:946.7,y:-35.5},0).wait(1).to({rotation:49.0439,x:974.5,y:-24.05},0).wait(1).to({rotation:50.1677,x:1000.05,y:-12.95},0).wait(1).to({rotation:51.1738,x:1023.35,y:-2.25},0).wait(1).to({rotation:52.0671,x:1044.4,y:7.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-178,1222.9,232.2);


(lib.middlebuilding = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.yellowbuilding();
	this.instance.setTransform(73.75,-5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5).p("EhHFgaVMCOLAAAMAAAA0rMiOLAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("EhHFAaWMAAAg0rMCOLAAAMAAAA0rg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.middlebuilding, new cjs.Rectangle(-457.5,-171,915.1,342.1), null);


// stage content:
(lib.FloresFigueroa_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paperplane
	this.instance = new lib.paperPlane_flying();
	this.instance.setTransform(-136.8,187.05,1,1,0,0,0,-13,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// front_building
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5).p("A8On7IP3AAIAAP3Iv3AAgAoZn7IP2AAIAAP3Iv2AAgAMYn7IP3AAIAAP3Iv3AAg");
	this.shape.setTransform(201.025,444.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5).p("EAkQgFbIAAKeMhIfAAAIAAqe");
	this.shape_1.setTransform(179.15,836.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("EgkPAkQMAAAhIeMBIfAAAMAAABIegAPyrqIP3AAIAAv2Iv3AAgAk+rqIP2AAIAAv2Iv2AAgA4zrqIP3AAIAAv2Iv3AAg");
	this.shape_2.setTransform(179.15,569.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AMYH7IAAv1IP3AAIAAP1gAoZH7IAAv1IP2AAIAAP1gA8OH7IAAv1IP3AAIAAP1g");
	this.shape_3.setTransform(201.025,444.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// middle_building
	this.instance_1 = new lib.middlebuilding();
	this.instance_1.setTransform(531.55,652.2,1.168,0.8404,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// smoke_stack
	this.instance_2 = new lib.smokestack();
	this.instance_2.setTransform(641.7,308.5,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.smokestack();
	this.instance_3.setTransform(483.45,368.55,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.smokestack();
	this.instance_4.setTransform(321.6,424.05,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// back_building
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EhaUAi7QAAkWBeplQARhsC1w2QB/rzAvmrQAkk+AFjmIX8AAQBWigA1knQAzlfAji2IAWAAQA5EgA1DGQBOEnBSCkIJGAAQAPgPAhgEQAUgDAtAAQAAhlA/kHQBCkSAGh/QAFAAAGgDQALgGAAgOQAkBsBNC4QBLC0AlBxQC0AMF0ALQFzALC0ALQBXleAMg7QBBk5gJjfQAvAXBjAcICwAvQDXA9AZBCQAuB9AQC6QAPChgJC1QAeAAAlAOQAXAIAtAXIIBAAQBElYAaieQAzk0ANjhQBagEBlgpQCfhBAKgDQAoDEATFVQARE7gJERIKNAAQBwgwEeAFIDxAFQCNACBegJQBQgIAehdQAXhJgEiTIgSkMQgKigAMhTQCDAJCNgRQCZgTBGgpQANCYAVEGIAhG5IGVAAQBYgPCKgEQBRgDCjAAQBqkLBOjQQBajwBWj9IAXAAQAaBhgCDNIgDFcQAGDBAtBfQA5B4CBAAQEiAABIgEQDTgMCcg0IE7AAQAPClAQEmQAOEDAAA4QAADVhUXbQgrMBg1OZQi2AJ4IB4Q/lCczDBaUhJtAFZgWAAAAQkiAAAArbg");
	this.shape_4.setTransform(445.925,463.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// smoke
	this.instance_5 = new lib.smoke();
	this.instance_5.setTransform(317.9,302.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// sky
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#00D423","#0057C5"],[0.008,1],0,955.7,0,-955.6).s().p("EiVUBUDMAAAioFMEqpAAAMAAACoFg");
	this.shape_5.setTransform(569.4,364.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(93.8,147.1,1431.3,755.8);
// library properties:
lib.properties = {
	id: '988585E2EFC75F498253F697989BF5DB',
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
an.compositions['988585E2EFC75F498253F697989BF5DB'] = {
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