(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"grider_allHallowsEve_midterm_atlas_1", frames: [[1538,0,436,262],[0,504,1684,335],[0,1505,579,214],[1538,264,98,98],[0,1168,1568,335],[0,841,1675,325],[0,0,1536,502]]}
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



(lib.CachedBmp_26 = function() {
	this.initialize(ss["grider_allHallowsEve_midterm_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(img.CachedBmp_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2302,1193);


(lib.CachedBmp_24 = function() {
	this.initialize(ss["grider_allHallowsEve_midterm_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["grider_allHallowsEve_midterm_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["grider_allHallowsEve_midterm_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["grider_allHallowsEve_midterm_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["grider_allHallowsEve_midterm_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(img.CachedBmp_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2197,914);


(lib.CachedBmp_18 = function() {
	this.initialize(ss["grider_allHallowsEve_midterm_atlas_1"]);
	this.gotoAndStop(6);
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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(-109.05,-65.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-65.6,218,131);


(lib.trees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// trees
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-334.7,-179.7,0.2959,0.2959);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.7,-179.7,681.3,353.1);


(lib.Title = function(mode,startPosition,loop,reversed) {
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
	this.title = new cjs.Text("All Hallows' Eve", "41px 'Apple Chancery'", "#CC6600");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 67;
	this.title.parent = this;
	this.title.setTransform(-3.9,-36.1);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Title, new cjs.Rectangle(-146.1,-38.1,284.5,79), null);


(lib.hill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hill
	this.instance = new lib.CachedBmp_24();
	this.instance.setTransform(-421,-75.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-421,-75.5,842,167.5);


(lib.gravestone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gravestone
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-144.55,-48.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.5,-48.6,289.5,107);


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eye
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-26.5,-26.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-26.5,-26.4,49,49), null);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("AGBAAQAACghxBwQhwBxigAAQifAAhxhxQhwhwAAigQAAifBwhxQBxhwCfAAQCgAABwBwQBxBxAACfg");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkQEQQhwhxAAifQAAifBwhwQByhxCeAAQCgAABwBxQBxBwAACfQAACfhxBxQhwBxigAAQieAAhyhxg");
	this.shape_1.setTransform(0,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("An2DPQAAgDAAgDQAAgHAAgGQAAgCAAgCQgBgGAAgHQAAjcCTidAFkjOQCUCdAADcQAAABAAACQgBACABACQgBABABACQgBACABABQgBACABACQgBABABACQgBACABABQgBACAAABQAAACAAACQAAABAAAC");
	this.shape_2.setTransform(0,-16.5125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AljF5IgRgTIiBlCIgBgGIAAgNIAAgDIAAgOQAAjcCTicIExiaQAZgDAZAAQAaAAAZADIEwCaQCUCcAADcIAAAEIAAADIAAAEIAAADIAAADIAAADIAAADIAAAEIAAADIAAADIiDFFIgRATQiTCdjQAAQjPAAiUidg");
	this.shape_3.setTransform(0,0.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("AFkjOQCUCdAADcQAAABAAACQgBACABACQgBABABACQgBACABABQgBACABACQgBABABACQgBACABABQgBACAAABQAAACAAACQAAABAAACAn2DPQAAgDAAgDQAAgHAAgGQAAgCAAgCQgBgGAAgHQAAjcCTid");
	this.shape_4.setTransform(0,-16.5125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Aj6EPIgNgNIhbjoIAAgEIAAgKIAAgCIAAgKQgBieBphxIDXhtQASgCARAAQASAAATACIDWBtQBpBxgBCeIAAACIAAADIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIhcDqIgMANQhoBwiTABQiSgBhohwg");
	this.shape_5.setTransform(0,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiCCBIgHgGIgvhvIAAgCIAAgFIAAgBIAAgEQgBhLA3g2IBwg1IASgBIATABIBwA1QA3A2gBBLIAAABIAAACIAAAAIAAABIAAABIAAACIAAABIAAABIAAABIAAACIgwBvIgGAGQg2A2hNAAQhMAAg2g2g");
	this.shape_6.setTransform(0,0.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-52.8,102.69999999999999,106.69999999999999);


(lib.bushes2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bushes2
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(503.95,-488,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(504,-488,784,167.5);


(lib.bushes1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bushes1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-418.65,-82.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-418.6,-82.4,837.4000000000001,162.5);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-570,-259.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_18();
	this.instance_1.setTransform(-461.95,-115.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-570,-259.7,1098.5,457);


(lib.owl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// owl_head
	this.righteye = new lib.eye();
	this.righteye.name = "righteye";
	this.righteye.setTransform(14.05,-12.05,0.5833,0.5833,0,0,0,-1.9,-1.9);

	this.lefteye = new lib.eye();
	this.lefteye.name = "lefteye";
	this.lefteye.setTransform(-19.6,-9.6,0.6667,0.6854,0,0,0,-2,-1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("AC5AAQAABNg2A2Qg2A2hNAAQhMAAg2g2Qg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMg");
	this.shape.setTransform(-4.5263,-4.45,1.8947,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiCCDQg2g3AAhMQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMQAABMg2A3Qg2A2hNAAQhMAAg2g2g");
	this.shape_1.setTransform(-4.5263,-4.45,1.8947,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.lefteye},{t:this.righteye}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.owl, new cjs.Rectangle(-40.6,-42.4,72.2,76), null);


(lib.ghost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ghost
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-495.4,-39.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.9992,x:422.65},21).to({regX:0.1,regY:-0.1,rotation:21.7905,x:898.8,y:-39.6},24).to({regX:0,regY:0,rotation:0,x:2160.8,y:-57.4},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-604.4,-140.9,2874.2000000000003,202.5);


// stage content:
(lib.grider_allHallowsEve_midterm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,74];
	// timeline functions:
	this.frame_0 = function() {
		this.button.addEventListener("click", link.bind(this));
		
		function link(e) {
			
		var url = "https://www.youtube.com/watch?v=FEkOYs6aWIg";
			
		var win = window.open(url, "_blank");
			
		win.focus();
			
		}
	}
	this.frame_74 = function() {
		this.stop();
		
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		
		var root = this;
		var midpoint = this.stage.canvas.width / 2;
		var bushRestX = this.bushes1.x;
		
		var owlRestX = this.owl.x;
		var owlRestY = this.owl.y;
		
		this.stage.on("stagemousemove", function(e) {
		    var newX = 0;
			if (e.stageX < midpoint) {
				newX = (midpoint - e.stageX) / 20;
			} else if (e.stageX > midpoint) {
				newX = (e.stageX - midpoint) / 20;
				newX *= -1;
			}
			createjs.Tween.get(root.bushes1, {override:true}).to({x: bushRestX + newX}, 1000, createjs.Ease.quintOut);
			createjs.Tween.get(root.bushes2, {override:true}).to({x: bushRestX + (newX / 2)}, 1000, createjs.Ease.quintOut);
		
		
		var l2gL = root.owl.lefteye.localToGlobal(0, 0);
		var calcL = Math.atan2(e.stageY - l2gL.y, e.stageX - l2gL.x);
		var angleL = calcL * (180 / Math.PI);
		root.owl.lefteye.rotation = angleL;
		
		var l2gR = root.owl.righteye.localToGlobal(0, 0);
		var calcR = Math.atan2(e.stageY - l2gR.y, e.stageX - l2gR.x);
		var angleR = calcR * (180 / Math.PI);
		root.owl.righteye.rotation = angleR;
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74).call(this.frame_74).wait(10));

	// Text
	this.instance = new lib.Title();
	this.instance.setTransform(152.2,236.1,0.7961,0.7329,0,0,0,-3.6,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.7,regY:-3.7,x:152.1,y:230.8},0).wait(1).to({y:229.3},0).wait(1).to({y:227.8},0).wait(1).to({y:226.25},0).wait(1).to({y:224.75},0).wait(1).to({y:223.25},0).wait(1).to({y:221.75},0).wait(1).to({y:220.2},0).wait(1).to({y:218.7},0).wait(1).to({y:217.2},0).wait(1).to({y:215.7},0).wait(1).to({y:214.15},0).wait(1).to({y:212.65},0).wait(1).to({y:211.15},0).wait(1).to({y:209.65},0).wait(1).to({y:208.1},0).wait(1).to({y:206.6},0).wait(1).to({y:205.1},0).wait(1).to({y:203.6},0).wait(1).to({y:202.05},0).wait(1).to({y:200.55},0).wait(1).to({y:199.05},0).wait(1).to({y:197.55},0).wait(1).to({y:196},0).wait(1).to({y:194.5},0).wait(1).to({y:193},0).wait(1).to({y:191.5},0).wait(1).to({y:189.95},0).wait(1).to({y:188.45},0).wait(1).to({y:186.95},0).wait(1).to({y:185.45},0).wait(1).to({y:183.9},0).wait(1).to({y:182.4},0).wait(1).to({y:180.9},0).wait(1).to({y:179.4},0).wait(1).to({y:177.85},0).wait(1).to({y:176.35},0).wait(1).to({y:174.85},0).wait(1).to({y:173.3},0).wait(45));

	// Eyes
	this.owl = new lib.owl();
	this.owl.name = "owl";
	this.owl.setTransform(626.9,73.65,0.5629,0.5938,-14.9987,0,0,-4.5,-4.4);
	this.owl._off = true;

	this.timeline.addTween(cjs.Tween.get(this.owl).wait(24).to({_off:false},0).wait(50).to({_off:true},2).wait(8));

	// Button
	this.button = new lib.button();
	this.button.name = "button";
	this.button.setTransform(324.15,118.15,0.4818,0.2909);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).to({_off:true},76).wait(8));

	// Gravestone
	this.gravestone = new lib.gravestone();
	this.gravestone.name = "gravestone";
	this.gravestone.setTransform(337.1,128.8,1,1,0,0,0,2.4,7.6);

	this.timeline.addTween(cjs.Tween.get(this.gravestone).to({_off:true},75).wait(9));

	// Bushes1
	this.instance_1 = new lib.bushes1();
	this.instance_1.setTransform(354.05,243.05,1,1,-2.4513,0,0,0.1,0.5);

	this.bushes1 = new lib.bushes1();
	this.bushes1.name = "bushes1";
	this.bushes1.setTransform(354.05,202.05,1,1,-2.4513,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.bushes1}]},24).to({state:[]},51).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:202.05},24).wait(60));

	// Trees
	this.instance_2 = new lib.trees();
	this.instance_2.setTransform(369.6,56.1,1.5085,1.6896,0,0,0,8,0.5);

	this.trees = new lib.trees();
	this.trees.name = "trees";
	this.trees.setTransform(369.6,48.65,1,1,0,0,0,8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.trees}]},24).to({state:[]},51).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:1,scaleY:1,y:48.65},24).wait(60));

	// Ghost
	this.instance_3 = new lib.ghost();
	this.instance_3.setTransform(49.05,48.9,0.3126,0.3602,0,0,0,6.1,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({y:28.9},0).wait(2).to({y:48.9},0).to({_off:true},1).wait(9));

	// Bushes2
	this.instance_4 = new lib.bushes2();
	this.instance_4.setTransform(341,192.25,1,1,0,0,0,895.9,-418.5);

	this.bushes2 = new lib.bushes2();
	this.bushes2.name = "bushes2";
	this.bushes2.setTransform(341,151.65,1,1,0,0,0,895.9,-418.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.bushes2}]},24).to({state:[]},51).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,y:151.65},24).wait(60));

	// Hill
	this.instance_5 = new lib.hill();
	this.instance_5.setTransform(329,160.75,1,1,0,0,0,0,0.5);

	this.hill = new lib.hill();
	this.hill.name = "hill";
	this.hill.setTransform(329,185.75,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.hill}]},24).to({state:[]},51).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:185.75},24).wait(60));

	// Background
	this.instance_6 = new lib.background();
	this.instance_6.setTransform(347,71.05,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},75).wait(9));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(127,-148.3,753.3,496.5);
// library properties:
lib.properties = {
	id: 'BBE413BB26974A01A11E0B36A7972562',
	width: 700,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_25.png?1731680248808", id:"CachedBmp_25"},
		{src:"images/CachedBmp_19.png?1731680248808", id:"CachedBmp_19"},
		{src:"images/grider_allHallowsEve_midterm_atlas_1.png?1731680248793", id:"grider_allHallowsEve_midterm_atlas_1"}
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
an.compositions['BBE413BB26974A01A11E0B36A7972562'] = {
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