(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Przybylinski_Final_atlas_1", frames: [[0,618,1056,238],[0,0,1488,616],[1490,534,376,77],[1490,0,410,532]]}
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



(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2222,837);


(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3439,1727);


(lib.CachedBmp_6 = function() {
	this.initialize(ss["Przybylinski_Final_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Przybylinski_Final_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Przybylinski_Final_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Przybylinski_Final_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5858,919);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3953,2209);// helper functions:

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


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:18};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_17 = function() {
		// this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(2).call(this.frame_19).wait(1));

	// eye
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgWACQAAAKAFAEQAEADAJAAQADAAADAAQABgBAAAAQACAAABgBQAFgBAEgDQAIgGAAgKQAAgMgOgCQgEgBgFAAQgKABgGAFQgGAFAAAJg");
	this.shape.setTransform(122.15,-90.7833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag6AhQAIANAJAEQAJAEATAAQAMAAAMgEQAIgDAJgFQAVgNAFgRAgzAGQAEgGAHgFQAAgBABAAQAAAAAAgBQAWgTAZAAQATAAAeAfAgzAGQAAgGAFgIQAAgBABgCQAGgIAJgKQAVgYAPAAQAgAAALANQAHAKAEAhAg7AYQABgJAHgJ");
	this.shape_1.setTransform(123.475,-92.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgEATQgJAAgEgDQgEgEgBgKQAAgJAHgFQAFgFAKgBQAFAAAFABQANACgBAMQAAAKgHAGQgDADgGABIgDABIgBABIgGAAgAAAgDIgEAAIgBACIAAABIAAAAIAAABIABADIACABIAFAAIABgBIACgDIgBgDIgBgBIgEgBg");
	this.shape_2.setTransform(122.15,-90.7833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCCCC").s().p("AABgBQgaAAgVASIgBABIgFgFQAGgJAIgJQAWgXAPAAQAgAAAKANQAIAKAEAhIgDABQgfgegSAAg");
	this.shape_3.setTransform(124.2,-95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAFIgCgBIgBgDIAAgBIAAAAIAAgBIABgCIAEAAIAAgBIAEABIABABIABADIgCADIgBABg");
	this.shape_4.setTransform(122.1813,-90.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnAlQgJgEgIgNIgCgJQACgJAGgIQAFgHAGgGIABAAIABgBQAVgUAZAAQATAAAfAgIgDAIQgFAPgWANQgIAFgJADQgMAFgMAAQgTAAgIgEgAgLgOQgLABgFAFQgGAFAAAJQAAAKAEAEQAEADAJAAIAHAAIACgBIADgBQAEgBADgDQAIgGAAgLQAAgLgMgCIgGgBIgEAAg");
	this.shape_5.setTransform(123.325,-91.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgzADQABgGAFgIQABgBABgCQAGgIAKgJQAXgXAOABQAhACAJAOQAHALACAhAgzADQAFgFAHgGQAAAAABAAQAAgBABAAQAXgSAYABQAUACAcAhAg7AeQAHANAIAFQAJAEATABQAMABAMgDQAJgDAJgEQAWgMAGgQAg8AUQACgIAHgJ");
	this.shape_6.setTransform(123.25,-90.291);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AgWABQAAAJAEAEQAEAEAJAAQADAAADABQAAgBABAAQACAAABAAQAGgCADgDQAIgFABgKQABgMgNgDQgFgBgFAAQgKAAgGAFQgGAFgBAJg");
	this.shape_7.setTransform(121.8761,-88.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCCCC").s().p("AACgDQgZgCgXARIgBABIgEgFQAFgIAKgJQAXgWAPABQAgACAJAOQAIAKABAiIgDABQgcghgTgBg");
	this.shape_8.setTransform(124.1,-92.5271);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCAFIgCgCQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAAAAIAAgBIABgCIAEAAIAAgBIAEABIABACIABACIgCADIgBABg");
	this.shape_9.setTransform(121.9313,-88.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAoQgTgBgJgFQgIgEgHgOIgBgJQACgIAHgJQAFgGAHgFIABgBIAAgBQAXgSAZACQATABAcAiIgDAGQgGARgWALQgJAFgJACQgKADgJAAIgFAAgAgbgKQgGAFgBAJQAAAKAEAEQAEADAJABIAHAAIABAAIADgBQAGgBACgDQAIgGABgKQABgMgMgCQgFgCgFAAQgLAAgGAFg");
	this.shape_10.setTransform(123.075,-88.9447);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgFASQgJAAgEgDQgEgFAAgJQABgJAGgFQAGgFAKAAQAFAAAFABQANADgBANQgBAJgIAGQgDADgGAAIgDABIgBABIgGgBgAAAgDIgDAAIgBACIAAABIgBAAIABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIACACIAFAAIABgBIADgDIgBgCIgCgCIgEgBg");
	this.shape_11.setTransform(121.8761,-88.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("Ag6AhQAIANAJAEQAJAEATAAQAMAAAMgEQAIgDAJgFQAVgNAFgRAgzAGQAAgGAFgIQAAgBABgCQAGgIAJgKQAVgYAPAAQAgAAALANQAHAKAEAhAgzAGQAEgGAHgFQAAgBABAAQAAAAAAgBQAWgTAZAAQATAAAeAfAg7AYQABgJAHgJ");
	this.shape_12.setTransform(123.475,-92.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AgzADQAFgFAHgGQAAAAABAAQAAgBABAAQAXgSAYABQAUACAcAhAgzADQABgGAFgIQABgBABgCQAGgIAKgJQAXgXAOABQAhACAJAOQAHALACAhAg7AeQAHANAIAFQAJAEATABQAMABAMgDQAJgDAJgEQAWgMAGgQAg8AUQACgIAHgJ");
	this.shape_13.setTransform(123.25,-90.291);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgzADQABgGAFgIQAAgBACgCQAGgIAJgJQAXgXAPABQAhACAJAOQAHALACAhAgzADQAFgFAHgGQAAAAABAAQAAgBAAAAQAXgSAZABQATACAdAhAg7AeQAHANAIAFQAJAEATABQAMABAMgDQAJgDAJgEQAWgMAGgQAg8AUQACgIAHgJ");
	this.shape_14.setTransform(125.8,-92.791);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCAFIgCgBQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAAgBIAAgBIABgBIAEAAIAAgBIAEABIABABIABADIgCADIgBABg");
	this.shape_15.setTransform(124.4813,-91.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgFASQgJAAgEgDQgEgEAAgKQABgJAGgFQAGgFAKAAQAFAAAFABQANADgBAMQgBAKgIAGQgDACgGABIgDABIgBABIgGgBgAAAgDIgDAAIgBABIAAABIgBABIABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABIACABIAFAAIABgBIADgDIgBgDIgCgBIgEgBg");
	this.shape_16.setTransform(124.4261,-91.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCCCC").s().p("AACgDQgZgCgXARIgBABIgEgFQAFgIAKgJQAXgWAPABQAgACAKAOQAGAKADAiIgEABQgcghgTgBg");
	this.shape_17.setTransform(126.65,-95.0271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10,p:{x:123.075,y:-88.9447}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:121.8761,y:-88.6}},{t:this.shape_6}]},4).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_12},{t:this.shape}]},4).to({state:[{t:this.shape_11},{t:this.shape_10,p:{x:123.075,y:-88.9447}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:121.8761,y:-88.6}},{t:this.shape_13}]},4).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_10,p:{x:125.625,y:-91.4447}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_7,p:{x:124.4261,y:-91.1}}]},4).to({state:[{t:this.shape_17},{t:this.shape_10,p:{x:125.625,y:-91.4447}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_7,p:{x:124.4261,y:-91.1}}]},2).wait(2));

	// head
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("AgKgxQABABABABAAIgLQAAAAABABQAAAAABAAAALAmQgFABgDAEQgBAAgBABQgDADgDAD");
	this.shape_18.setTransform(123.825,-57.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("ABKHqQgEgcgGgiQgYibATiiQATigjxhDQgBAAgBgBQgGgGgFgGQgEASgCAQQgKA4gBAUQgBAAAAABQgQAZAEAtQADAugqAbQgrAbgKAKQgSATAAAdQAAAYATAyQAUA0ABAYQA3g+AcgjQAYgfA1BmAizhiQgBACgBABQgCAEABgEAilh1QgJAIgFALQABgOACgRQgPAjgEg1QgIiDAGhlQARlACQAAQBeAACHJNQAMAzALA0QAiCeAdClQAOBSAJA4QAfgLggiWQggiVgZhKQgZhKgDgDQgIgKgIgJAhgF4QABAAABAAQARABAMgFQAWgJAFgCAhfFzQgBABAAABQgBAAAAAAQAAABABAAQAAAAABAAAhkFvQABACACADQAAABAAAAAhkFvIACgHQAJgCAhgKQAcgJANAAQACAAAGAEQAFADACADQADAHAAAEQg8AfgqAAQgDARgBAPAhgF2IAAACQgBACAAAEQAAAAABAAQABABABAAAhhF+QgBAEgBAFAhnGqQgBABAAABQgNB9BCggQAZgMAVgIQAugQAhAFAhyFRQAGAOAIAQAjBgTIAHAAQAAgGAHhJABTIeQgEgXgFgdQAHAEAHADAEuHGQALBMAAAZQAAAsgyAyQgyAzgoAAQg1AAgWhMQgEgMgLhGQAEAAAEAAIAAgPAgDH7QAAAogFAUQAngNAHgDQAZgHAUgCAEfHcQADgDACgEQAFgHAFgI");
	this.shape_19.setTransform(134.4313,-96.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF99CC").s().p("AgxARIACAAIACABIABgDIgBgDIAAgBIgBgCIAAAAIAAgBIAAgCIgBACIgCgBIgCgFIACgGQAJgCAggKQAcgJANAAQACAAAGAEIAIAGQADAHAAAEQg8AegqAAIABgJgAgmALQAMAAAJgEIABAAIAagKIgaAKIgBAAQgJAEgMAAIAAAAIgBAAIgCAAIgCAAIgCAAIAAAAIAAAAIACAAIACAAIACAAIABAAIAAAAg");
	this.shape_20.setTransform(129.55,-59.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAAFIgCAAIACgGIABAAIgBAAIAAgBIAAAAIAAAAIABABIAAABIABACIgBAEIgBgBgAgBgDIABAAIAAgCIAAACIAAAAIAAAAIAAABIAAAAIgBgBgAAAgCgAgBgDIgBgBIACABIgBAAIAAAAgAAAgDIAAAAg");
	this.shape_21.setTransform(124.85,-58.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("AAqJwQgEgMgLhGIAIAAIAAgPIAAAPIgIAAIgJg0IAOAHIgOgHIgKg+QgXibASiiQATigjxhDIgCAAIgLgNQgPAjgEg1QgIiDAGhkQARlBCQAAQBeAACHJNIAXBnIgQgSIAQASQAiCeAdClIAXCKQALBLAAAaQAAArgyA0QgyAygoAAQg1AAgWhMgADsHWIgFAHIAFgHIAKgQIgKAQgAASHqIAAAAg");
	this.shape_22.setTransform(140.0337,-96.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCCCC").s().p("ABxEaIgBgFIABgBIACAAIABgBIABAAIACgBQAfgKAZAAIABAAIAAAAIAPABIAJA1QgUABgZAIIgvAPQAFgUAAgogAAMDLIABgCIAAgCIAFggQApAAA9ggQAAgEgCgGIgJgHQgFgEgDAAQgMAAgdAJQggALgJABIgCAHIgPgeIgBgCQg1hngYAfQgbAjg4A+QgBgYgTgzQgUgyAAgYQAAgdATgTQAJgKArgbQArgbgEguQgEgtAQgZIABgCIAHAAIAHhOQAGgLAIgIIADAAQDwBEgTChQgTCgAYCbIAKA+IgPgBIAAAAIgBAAQgZAAgfAKIgCABIgBAAIgBABIgCAAIgBABQgWAHgZAMQgNAHgKAAQgoAAAKhkgAAODKIgCABIACgBQADgDAFgCQgFACgDADg");
	this.shape_23.setTransform(122.7,-73.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("AAMBdQgcikgiifQADAEAZBKQAYBKAgCUQAgCWgfALIgXiKg");
	this.shape_24.setTransform(161.1063,-73.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.1,1,1).p("AAIgKQAAAAABABQAAAAABAAAAIAnQgFABgDADQAAABgBAAQgFADgDADAgHgxQAAABABAB");
	this.shape_25.setTransform(121.475,-55.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AA+HpQgCgcgEgiQgOicAdigQAeifjshTQgBAAgBAAQgFgHgFgHQgFATgEAPQgNA3gDAUIAHAAQABgGALhIQgBACAAABQgCAEAAgEAiJiDQgJAHgHAKQADgOADgRQgSAiAAg1QABiDAMhkQAmk/COAKQBfAGBhJVQAIAzAIAzQAYChASCnQAJBTAFA4QAggJgWiXQgXiYgUhLQgUhMgDgEQgIgJgHgJAhnFjIACgGQAJgBAigJQAcgHANABQACAAAGAEQAFAEACADQACAHAAAEQg+AbgqgDQgEARgCAPAhnFjQABACABAEQAAAAAAABQAAAAABABQAAAAABgBAhjFoQgBAAAAABQgBAAAAABAhkFsQABAAABAAQARADAMgFQAXgHAFgBAhkFrIAAABQgBADgBADQgBAEgBAFAhmFyQABAAAAABQABAAABABAisgkQAAAAgBABQgRAZABAsQAAAugsAYQgsAYgKAKQgUARgCAdQgCAZARAzQAQA0gBAZQA7g6AfgiQAZgdAvBqAhvGdQAAACAAABQgVB8BDgcQAagKAWgGQAvgOAgAHQAHAFAGAEAEUHqQACgEADgDQAGgHAFgIQAGBMgCAaQgDArg1AvQg1AwgogDQg1gDgRhOQgDgMgHhGQAEAAAEAAIABgPAgQH1QgDAogGAUQAogLAHgCQAagFATgBQgCgXgDgeAh0FEQAGAOAHAR");
	this.shape_26.setTransform(132.4919,-92.6825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAAFIgBAAIABgGIABAAIgBAAIAAgBIAAAAIAAAAIABABIAAABIABACIgCAEIAAgBgAAAgDIAAAAIAAgCIAAACIAAAAIAAAAIAAABIAAAAIAAgBgAAAgCgAgBgEIABABIAAAAIgBgBgAAAgDIAAAAg");
	this.shape_27.setTransform(122.45,-56.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF99CC").s().p("AgzAXIACgJIABABIACABIACgEIgBgCIgBgCIAEABIADAAIAFAAIAAAAIAAAAQAKAAAIgDIAbgHIgbAHQgIADgKAAIAAAAIAAAAIgFAAIgDAAIgEgBIAAgBIAAgBIAAgBIAAgBIgCABIgBAAIgCgFIADgGQAJgBAhgJQAcgHAMABQADAAAFAEIAIAHQACAHAAAEQg3AXgoAAIgIAAgAguAIIAAAAg");
	this.shape_28.setTransform(127.225,-57.0617);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("AAEBfQgRimgXihQACAEAVBMQASBLAXCWQAWCYggAIIgOiKg");
	this.shape_29.setTransform(159.8231,-69.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0000").s().p("ABSLBQg1gDgRhOQgDgMgHhGIAIAAIABgPIgBAPIgIAAIgEg1IAMAJIgMgJIgGg+QgOicAcigQAeifjshTIgCAAIgKgOQgSAiAAg1QABiDAMhkQAmk/CPAKQBeAGBhJVIAQBmIgPgSIAPASQAYChASCnIAOCLQgFAIgGAHIgFAHIAFgHQAGgHAFgIQAGBMgCAaQgDArg1AvQgyAtgnAAIgEAAgAACIeIAAAAg");
	this.shape_30.setTransform(138.99,-92.6825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCCCC").s().p("ABlEfIgBgGIACAAIADgBIAAAAIABAAQAbgHAWAAIABAAIAAAAQANAAALACIAFA1QgTABgaAFIgwAMQAGgTADgogAAGDJIAAgCIABgCIAGggQAqADA/gbQAAgEgDgHIgHgHQgGgEgCgBQgNAAgcAHQgiAJgJABIgCAGIgNgfIgBgCQguhrgZAdQgfAjg7A5QABgYgQg0QgRgyACgZQACgdAUgSQAKgJAsgYQAsgZAAgtQgBguARgYIABgBIAHAAIAMhOQAHgKAJgIIACABQDsBSgeCgQgdCgAOCbIAGA/QgLgCgNAAIAAAAIgBAAQgWAAgbAHIgBAAIAAAAIgDABIgCAAQgWAHgaAKQgMAFgJAAQgqAAARhmgAAIDIIgCABIACgBQADgDAFgBQgFABgDADg");
	this.shape_31.setTransform(120.6823,-71.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("ABKHqQgEgcgGgiQgYibATiiQATigjxhDQgBAAgBgBQgGgGgFgGQgEASgCAQQgKA4gBAUQgBAAAAABQgQAZAEAtQADAugqAbQgrAbgKAKQgSATAAAdQAAAYATAyQAUA0ABAYQA3g+AcgjQAYgfA1BmAizhiQgBACgBABQgCAEABgEAilh1QgJAIgFALQABgOACgRQgPAjgEg1QgIiDAGhlQARlACQAAQBeAACHJNQAMAzALA0QAiCeAdClQAOBSAJA4QAfgLggiWQggiVgZhKQgZhKgDgDQgIgKgIgJAhgF4QABAAABAAQARABAMgFQAWgJAFgCAhkFvIACgHQAJgCAhgKQAcgJANAAQACAAAGAEQAFADACADQADAHAAAEQg8AfgqAAQgDARgBAPAhkFvQABACACADQAAABAAAAQAAABABAAIAAACQgBACAAAEQgBAEgBAFAhfFzQgBABAAABQgBAAAAAAAhgF2QAAAAABAAAhhF+QAAAAABAAQABABABAAAhnGqQgBABAAABQgNB9BCggQAZgMAVgIQAugQAhAFAhyFRQAGAOAIAQAjBgTIAHAAQAAgGAHhJABTIeQgEgXgFgdQAHAEAHADAEuHGQALBMAAAZQAAAsgyAyQgyAzgoAAQg1AAgWhMQgEgMgLhGQAEAAAEAAIAAgPAgDH7QAAAogFAUQAngNAHgDQAZgHAUgCAEfHcQADgDACgEQAFgHAFgI");
	this.shape_32.setTransform(134.4313,-96.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAFIgCAAIACgGIABAAIAAABIABACIgBAEIgBgBgAAAgBIAAgBIAAAAIAAAAIgBgBIABAAIAAgCIAAACIAAAAIAAAAIAAABIAAAAIABABIgBAAgAgCgEIACABIgBAAIgBgBgAAAgDIAAAAg");
	this.shape_33.setTransform(124.85,-58.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AA+HpQgCgcgEgiQgOicAdigQAeifjshTQgBAAgBAAQgFgHgFgHQgFATgEAPQgNA3gDAUIAHAAQABgGALhIQgBACAAABQgCAEAAgEAiJiDQgJAHgHAKQADgOADgRQgSAiAAg1QABiDAMhkQAmk/COAKQBfAGBhJVQAIAzAIAzQAYChASCnQAJBTAFA4QAggJgWiXQgXiYgUhLQgUhMgDgEQgIgJgHgJAhnFjIACgGQAJgBAigJQAcgHANABQACAAAGAEQAFAEACADQACAHAAAEQg+AbgqgDQgEARgCAPAhjFoQgBAAAAABQgBAAAAABQAAAAABABQAAAAABgBAhnFjQABACABAEQAAAAAAABAhkFsQABAAABAAQARADAMgFQAXgHAFgBAhkFrIAAABQgBADgBADQABAAAAABQABAAABABAhmFyQgBAEgBAFAisgkQAAAAgBABQgRAZABAsQAAAugsAYQgsAYgKAKQgUARgCAdQgCAZARAzQAQA0gBAZQA7g6AfgiQAZgdAvBqAhvGdQAAACAAABQgVB8BDgcQAagKAWgGQAvgOAgAHQAHAFAGAEAEUHqQACgEADgDQAGgHAFgIQAGBMgCAaQgDArg1AvQg1AwgogDQg1gDgRhOQgDgMgHhGQgCgXgDgeAgQH1QgDAogGAUQAogLAHgCQAagFATgBQAEAAAEAAIABgPAh0FEQAGAOAHAR");
	this.shape_34.setTransform(132.4919,-92.6825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAFIgBAAIABgGIABAAIgBAAIAAgBIAAAAIAAAAIABABIAAABIABACIgCAEIAAgBgAAAgDIAAAAIAAAAIAAAAIAAgCIAAACIAAABIAAAAIAAgBgAAAgCgAgBgEIABABIAAAAIgBgBgAAAgDIAAAAg");
	this.shape_35.setTransform(122.45,-56.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC0000").s().p("ABSLBQg1gDgRhOQgDgMgHhGIAIAAIABgPIgBAPIgIAAIgEg1IAMAJIgMgJIgGg+QgOicAcigQAeifjshTIgCAAIgKgOQgSAiAAg1QABiDAMhkQAmk/CPAKQBeAGBhJVIAQBmIgPgSIAPASQAYChASCnIAOCLQgFAIgGAHIgFAHIAFgHQAGgHAFgIQAGBMgCAaQgDArg1AvQgyAtgnAAIgEAAgAgCHpIAAAAg");
	this.shape_36.setTransform(138.99,-92.6825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(0.1,1,1).p("AgHgxQAAABABABAAIgKQAAAAABABQAAAAABAAAAIAnQgFABgDADQAAABgBAAQgFADgDAD");
	this.shape_37.setTransform(124.025,-58);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AA+HpQgCgcgEgiQgOicAdigQAeifjshTQgBAAgBAAQgFgHgFgHQgFATgEAPQgNA3gDAUIAHAAQABgGALhIQgBACAAABQgCAEAAgEAiJiDQgJAHgHAKQADgOADgRQgSAiAAg1QABiDAMhkQAmk/COAKQBfAGBhJVQAIAzAIAzQAYChASCnQAJBTAFA4QAggJgWiXQgXiYgUhLQgUhMgDgEQgIgJgHgJAhkFsQABAAABAAQARADAMgFQAXgHAFgBAhlFqQAAAAABABIAAABQgBADgBADQgBAEgBAFQgEARgCAPAhjFoQgBAAAAABQgBAAAAABAhnFjQABACABAEQAAAAAAABAhkFrQAAAAABgBAhnFjIACgGQAJgBAigJQAcgHANABQACAAAGAEQAFAEACADQACAHAAAEQg+AbgqgDAhmFyQABAAAAABQABAAABABAhvGdQAAACAAABQgVB8BDgcQAagKAWgGQAvgOAgAHAh0FEQAGAOAHARAisgkQAAAAgBABQgRAZABAsQAAAugsAYQgsAYgKAKQgUARgCAdQgCAZARAzQAQA0gBAZQA7g6AfgiQAZgdAvBqABDIeQAEAAAEAAIABgPAEkHUQAGBMgCAaQgDArg1AvQg1AwgogDQg1gDgRhOQgDgMgHhGAgQH1QgDAogGAUQAogLAHgCQAagFATgBQgCgXgDgeQAHAFAGAEAEUHqQACgEADgDQAGgHAFgI");
	this.shape_38.setTransform(135.0419,-95.1825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgBAFIgBAAIACgGIABAAIABABIABADIgDADIgBgBgAABgBIAAAAgAAAgBIAAgBIgBgBIABAAIAAAAIAAAAIAAgCIAAACIAAAAIAAABIAAgBIAAABIABABIgBAAgAAAgDgAgBgEIABABIgBAAIAAgBg");
	this.shape_39.setTransform(125,-58.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF99CC").s().p("AgzAXIACgJIABABIACABIACgEIgBgCIgBgCIAAgBIAAgBIAAgBIAAgBIgCABIgBAAIgCgFIADgGQAJgBAhgJQAcgHAMABQADAAAFAEIAIAHQACAHAAAEQg3AXgoAAIgIAAgAgiAJQAKAAAIgDIAbgHIgbAHQgIADgKAAIAAAAIgBAAIgEAAIgDAAIgEgBIAEABIADAAIAEAAIABAAIAAAAg");
	this.shape_40.setTransform(129.775,-59.5617);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCCCC").s().p("ABlEfIgBgGIADAAIACgBQAcgHAXAAIAAAAIAAAAQANAAALACIAFA1QgTAAgaAGIgwANQAGgUADgogAAGDJIAAgCIABgCIAGggQAqADA/gbQAAgEgDgHIgHgHQgGgEgCgBQgNAAgcAHQgiAJgJAAIgCAHIgNgfIgBgDQguhqgZAdQgfAig7A7QABgZgQg0QgRgyACgZQACgdAUgRQAKgKAsgYQAsgYAAgvQgBgsARgZIABgCIAHABIAMhOQAHgKAJgHIACAAQDsBSgeChQgdCeAOCdIAGA+QgLgCgNAAIAAAAIAAAAQgXAAgcAHIgCABIgDAAQgWAHgaAKQgMAFgJAAQgqAAARhmgAAIDIIgCABIACgBQADgDAFgBQgFABgDADg");
	this.shape_41.setTransform(123.2323,-73.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:159.8231,y:-69.225}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},4).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_33},{t:this.shape_20},{t:this.shape_32},{t:this.shape_18}]},4).to({state:[{t:this.shape_31},{t:this.shape_36,p:{x:138.99,y:-92.6825}},{t:this.shape_29,p:{x:159.8231,y:-69.225}},{t:this.shape_28},{t:this.shape_35},{t:this.shape_34},{t:this.shape_25}]},4).to({state:[{t:this.shape_41},{t:this.shape_36,p:{x:141.54,y:-95.1825}},{t:this.shape_29,p:{x:162.3731,y:-71.725}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},4).to({state:[{t:this.shape_41},{t:this.shape_36,p:{x:141.54,y:-95.1825}},{t:this.shape_29,p:{x:162.3731,y:-71.725}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},2).wait(2));

	// outer_arm
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AgHDtQAFACADABQAQADBFhrQBGhoAFgjQAEgXgCg4QgDg3AJg5QAFgeAOgSQAOgTAHgpQAEgbgDgIQgDgMgYgEQhCgKgeA1QgLAUgQAtQgWBBgJAVQglBcgQAmQgZA+gNBRQgGAmAWArQADAFADADQAPAbASAHgAgzDSQgDgEgCgEQgjgzgagFQgXgEgOAKQgMAHgDAOQgFAdAxADQgWABgZAPQghASgFAdQgDATAkAiQAiAgAQACQAcAFAsgsQAqgrAGgk");
	this.shape_42.setTransform(122.8865,3.1644);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCCCC").s().p("AgSBpQgQgCghggQgkgiADgTQAEgcAhgSQAagPAWgBQgxgDAFgdQACgOANgHQAOgKAWAEQAZAFAjAzIAFAIIALgHQAQAbARAHQgGAjgqArQgnAngaAAIgGAAg");
	this.shape_43.setTransform(111.9135,28.1784);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC0000").s().p("AhHEqIgKgDQgRgHgQgbIgFgIQgXgrAGgnQANhQAahAIA2iBQAIgUAXhBQAOgtAMgUQAeg2BCALQAXAEAEALQACAIgEAcQgHApgOASQgOASgEAfQgJA4ACA3QADA3gEAXQgGAkhFBpQhDBogQAAIgBAAg");
	this.shape_44.setTransform(130.2099,-2.5833);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AA6DnQAGAAAEgBQAPgEAUh+QAUh7gJgjQgGgWgagyQgYgxgQg4QgIgdAGgXQAEgWgKgoQgHgbgGgGQgIgKgWAHQhBARgFA9QgCAXAEAwQAGBEABAWQADBkABApQADBDAVBPQAKAmAlAeQAFACAEADQAZASATgBgAAGDgQgDgDgDgCQg1gggaAGQgWAGgJAOQgIAMADAOQAIAdAugSQgUAKgRAYQgXAdAIAdQAFATAvAQQArAPAQgFQAbgHAVg6QAVg4gJgj");
	this.shape_45.setTransform(139.5744,6.3555);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCCCC").s().p("AghBXQgvgQgFgTQgIgdAXgcQARgYAUgKQguASgIgdQgDgOAIgMQAJgOAWgGQAagGA0AgIAHAFIAIgKQAZASATgBQAJAjgVA3QgVA6gcAHIgKABQgQAAgggLg");
	this.shape_46.setTransform(136.7719,35.3907);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0000").s().p("AgDElIgJgFQgmgegKgmQgVhPgDhEIgEiMIgHhaQgEgwACgXQAFg9BBgRQAXgHAHAKQAGAGAHAbQAKAogEAWQgGAXAIAdQAQA4AYAxQAaAyAGAVQAJAjgUB8QgUB+gPAEIgKABIgBAAQgTAAgXgRg");
	this.shape_47.setTransform(141.3921,-1.5064);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("ACuCoQAFgCADgDQAMgLgqh4Qgoh2gagaQgPgRgsgfQgBAAgCgCQgsgfgngqQgVgWgGgWQgGgWgcgfQgUgUgHgDQgMgEgRAQQgxAuAZA5QAIAUAbAoQAlA5ALAUQALATAJAQQAjA8APAaQAjA7A3A7QAbAdAvAIQAGABAEAAQAfAEAQgKgAB+C6QgGAAgDAAQg+gDgUARQgRAQgBAQQgBAOAJAMQAUAVAgglQgMASgEAdQgGAlAVAWQAMANAxgHQAugHALgMQAWgTgJg+QgIg7gZgb");
	this.shape_48.setTransform(155.2695,3.5131);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCCCC").s().p("AgkBVQgVgWAGglQAEgbAMgTQggAkgUgUQgJgLABgOQABgRARgPQAUgSA9AEIAJAAIABgMQAfAEAQgKQAZAaAIA8QAJA8gWATQgLANguAHQgRACgLAAQgZAAgHgJg");
	this.shape_49.setTransform(166.5954,29.7695);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC0000").s().p("ACMEJIgKgBQgwgJgbgcQg3g7gjg7IgxhXIgUgjIgxhMQgagogJgVQgYg5AwgtQASgQALADQAIADATAUQAdAfAGAWQAFAXAWAVQAnAqAsAgIACABQAsAfAQARQAZAZApB3QAqB4gMAMIgIAFQgMAHgTAAIgQgBg");
	this.shape_50.setTransform(154.0472,-5.5493);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("AA3DpQAGAAADgBQAQgEAYh8QAYh7gJgjQgFgXgXgwQgBgBAAgCQgYgygNg3QgIgeAGgWQAGgXgJgoQgHgbgFgGQgIgJgXAEQhAAQgIA+QgDAWAEAvQADBFABAXQAAAVAAATQAABEAAAgQABBEATBPQAJAlAkAgQAFADADADQAaATASgBgAAEDgQgEgDgDgBQg0gigaAFQgWAFgJAPQgIALACAOQAHAdAvgRQgUAKgSAXQgYAdAHAeQAFARAuASQAsARAPgFQAbgGAXg5QAWg4gIgj");
	this.shape_51.setTransform(139.9674,5.5318);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCCCC").s().p("AgkBWQgugTgFgRQgHgdAYgcQASgYAUgJQgvAQgHgdQgCgOAIgKQAJgQAWgFQAagEAzAiQAEABAEADIAHgKQAaATASgBQAIAkgWA2QgXA6gcAGIgJABQgPAAgigNg");
	this.shape_52.setTransform(136.7746,34.4502);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0000").s().p("AgOEkIgIgGQglgfgJgmQgThPgBhEIAAhjIAAgoIgEhcQgEgvADgXQAIg9BBgQQAWgFAIAJQAFAHAHAbQAJAogGAXQgGAWAIAdQANA4AYAxQAAABAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAXAwAFAXQAJAjgYB7QgYB9gQAEIgJAAIgCABQgSAAgXgTg");
	this.shape_53.setTransform(142.5785,-2.2475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AgiDqQAFACAEABQAQAFBPhjQBPhhAIgkQAHgVADg2QgBgBABgCQADg3AOg3QAIgeAPgQQAQgSALgnQAGgbAAgIQgDgMgXgHQhBgRgjAzQgOATgTAqQgeA/gKAUQgKATgJARQgfA8gQAcQgfA8gUBPQgKAlASAtQACAFACAEQANAdARAIgAhLDKQgCgFgCgCQgeg3gZgHQgWgHgPAJQgNAGgFAOQgHAcAxAIQgWgCgbANQgjAOgHAdQgFASAgAmQAfAjAPADQAdAIAvgoQAugmAJgj");
	this.shape_54.setTransform(122.8412,2.5885);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCCCC").s().p("AgcBoQgPgEgfgjQgggmAFgRQAHgcAjgPQAbgMAWABQgxgIAHgcQAFgNANgHQAPgIAVAGQAZAIAeA2QACADACAEIALgFQANAdARAJQgJAhguAnQgnAhgaAAIgKgBg");
	this.shape_55.setTransform(109.1162,26.1008);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0000").s().p("AhpEhIgIgDQgRgJgNgdIgFgJQgRgtAJglQAVhPAfg8IAwhYIASgjIAnhTQATgrAOgTQAjgyBBAQQAXAIADALQAAAIgFAbQgMAngPASQgQARgIAeQgOA3gDA3IAAADQgDA0gHAWQgIAlhOBhQhMBegSAAIgCAAg");
	this.shape_56.setTransform(130.7829,-2.5662);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AA3DpQAGAAAEgBQAQgEAXh8QAYh6gJgkQgEgXgXgwQgBgBgBgCQgXgygNg4QgIgdAHgWQAFgXgIgoQgIgagEgIQgIgJgXAFQhBAQgHA9QgDAXADAvQADBFABAXQAAAVgBATQABBEgBAgQABBDATBQQAJAlAlAfQAEAEADADQAZATATgBgAAEDgQgEgEgDgBQgzgigbAGQgWAFgIAOQgJALACAPQAHAcAvgQQgUAJgSAYQgYAdAHAdQAFASAuASQArARAPgFQAbgGAYg5QAWg4gIgj");
	this.shape_57.setTransform(141.4204,5.5078);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCCCC").s().p("AgkBWQgugSgFgSQgHgdAYgcQASgYAUgJQgvAQgHgcQgCgPAJgLQAIgOAWgFQAbgGAyAiQAEABAEAEIAHgJQAZATATgBQAIAjgWA3QgYA5gcAGIgHABQgQAAgigNg");
	this.shape_58.setTransform(138.2156,34.4338);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0000").s().p("AgPElIgHgHQgmgfgJglQgThQgBhEQABgggBhDIABgoIgEhcQgDgvADgXQAHg9BCgQQAWgFAIAJQAEAIAIAaQAIAogFAXQgHAWAIAdQANA4AXAyIACADQAXAvAEAXQAJAkgYB7QgXB8gQAEIgKABIgCAAQgSAAgXgSg");
	this.shape_59.setTransform(144.1097,-2.2618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},4).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},4).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},4).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},4).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},2).wait(2));

	// Body
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("Ah1FnQgjgxgkjBQggiqAAhGQAAhqBHhMQBIhMBgAAQBRAABBCYQAZA5ARBAQAOA7AAAjQAACsggBXQgxCJiEAAQgWAAgrgTQgjgNgZAJg");
	this.shape_60.setTransform(142.65,-3.95);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0000").s().p("Ag5FrQgjgOgaAKQgigygkjAQggiqAAhGQAAhqBHhMQBHhLBigBQBQAABCCYQAZA6APBAQAPA6AAAjQAACsgfBXQgyCIiFABQgVgBgrgSg");
	this.shape_61.setTransform(142.65,-3.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60}]}).to({state:[{t:this.shape_61},{t:this.shape_60}]},18).wait(2));

	// outer_leg
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AiGiIQAHAtgHBfQgIBdAJA2QALBIA7ATQAsAQBRgNQA/gJALgfQAIgWgNhPQAAiBgCgLQgLhGg7hKQg9hMgwAHQgcAEgbAvQgSAngLAXg");
	this.shape_62.setTransform(150.6429,53.3455);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC0000").s().p("Ag/DyQg7gTgLhIQgJg2AIhdQAHhfgHgtIAdg+QAbgvAcgEQAwgHA9BMQA7BKALBGQACALAACBQANBPgIAWQgLAfg/AJQglAGgcAAQgkAAgYgJg");
	this.shape_63.setTransform(150.6429,53.3455);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AiuhqQATAqASBeQAQBbAWAyQAeBDA+ADQAtAEBMghQA7gZACghQACgXghhKQgih8gEgKQgdhBhMg4QhOg6gtAUQgaALgOA0QgIArgEAYg");
	this.shape_64.setTransform(155.5338,54.1649);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC0000").s().p("AgHDxQg+gDgehDQgWgygQhbQgShegTgqIAMhDQAOg0AagLQAtgUBOA6QBMA4AdBBQAEAKAiB8QAhBKgCAXQgCAhg7AZQhEAegsAAIgJgBg");
	this.shape_65.setTransform(155.5338,54.1649);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AiGiIQAHAugHBdQgHBeAIA1QALBIA8AUQArAPBQgMQBBgJAKggQAHgVgMhPQAAiCgCgJQgMhIg6hJQg9hNgxAIQgbAFgbAuQgTAngKAXg");
	this.shape_66.setTransform(154.7398,53.7671);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC0000").s().p("Ag+DyQg8gUgLhIQgIg1AHheQAHhdgHguIAdg+QAbguAbgFQAxgIA9BNQA6BJAMBIQACAJAACCQAMBPgHAVQgKAghBAJQglAGgcAAQgjAAgXgJg");
	this.shape_67.setTransform(154.7398,53.7671);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AgyizQgKAtgrBVQgqBTgMA0QgRBHAvApQAjAeBPAUQA/APAVgYQAPgRAShOQAyh5ACgKQARhGgchZQgbhggxgJQgbgHgqAhQgfAcgTASg");
	this.shape_68.setTransform(133.2141,51.8891);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0000").s().p("AgND4QhPgUgjgeQgvgpARhHQAMg0AqhTQArhVAKgtIAyguQAqghAbAHQAxAJAbBgQAcBZgRBGQgCAKgyB5QgSBOgPARQgNAPgdAAQgSAAgYgGg");
	this.shape_69.setTransform(133.2141,51.8891);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AAIjIQgVAphABGQhBBFgaAtQgkBBAhAzQAZAoBIAnQA4AiAbgTQASgLAphGQBQhnAFgIQAjg+AAheQgBhigqgYQgZgOgyATQgnAUgXAKg");
	this.shape_70.setTransform(127.2234,52.3186);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC0000").s().p("AhKDcQhIgngZgoQghgzAkhBQAagtBBhFQBAhGAVgpQAXgKAngUQAygTAZAOQAqAYABBiQAABegjA+QgFAIhQBnQgpBGgSALQgJAHgOAAQgYAAgkgWg");
	this.shape_71.setTransform(127.2234,52.3186);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("Agni3QgMAtguBTQgvBRgOAyQgVBIAtAqQAhAhBPAWQA+ATAWgYQAPgQAYhNQA2h3ACgKQAUhEgWhbQgYhfgvgOQgbgIgsAeQggAegUAPg");
	this.shape_72.setTransform(130.299,53.749);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC0000").s().p("AgWD1QhPgWghghQgtgqAVhIQAOgyAvhRQAuhTAMgtQAUgPAggeQAsgeAbAIQAvAOAYBfQAWBbgUBEQgCAKg2B3QgYBNgPAQQgNANgZAAQgTAAgbgIg");
	this.shape_73.setTransform(130.299,53.749);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AhGipQgHAughBZQgjBWgHA0QgLBJAzAlQAmAcBQAJQBAAMAUgcQAMgRANhQQAlh9AAgKQALhGgjhXQglhcgxgHQgcgEgmAkQgdAhgRATg");
	this.shape_74.setTransform(136.0565,55.8474);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC0000").s().p("AAGD7QhQgJgmgcQgzglALhJQAHg0AjhWQAhhZAHguIAug0QAmgkAcAEQAxAHAlBcQAjBXgLBGQAAAKglB9QgNBQgMARQgOATgkAAQgPAAgTgDg");
	this.shape_75.setTransform(136.0565,55.8474);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AhgibQgBAvgWBcQgYBagCA0QgBBKA3AeQApAXBQAAQBCAEAQgfQAJgSAEhQQAViAAAgKQAChIguhSQgvhXgygBQgbAAgjAoQgYAlgPAUg");
	this.shape_76.setTransform(144.7772,54.8979);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0000").s().p("AAeD9QhQAAgpgXQg3geABhKQACg0AYhaQAWhcABgvQAPgUAYglQAjgoAbAAQAyABAvBXQAuBSgCBIQAAAKgVCAQgEBQgJASQgOAbg1AAIgPAAg");
	this.shape_77.setTransform(144.7772,54.8979);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AiAiLQAHAugJBeQgKBeAHA0QAJBJA6AVQAsARBQgMQBAgGALggQAIgUgJhQQADiCgCgJQgJhHg5hMQg7hOgwAGQgcAEgcAuQgUAmgMAXg");
	this.shape_78.setTransform(148.3744,53.6147);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0000").s().p("AhCDxQg6gVgJhJQgHg0AKheQAJhegHguIAgg9QAcguAcgEQAwgGA7BOQA5BMAJBHQACAJgDCCQAJBQgIAUQgLAghAAGQgiAFgaAAQgmAAgagKg");
	this.shape_79.setTransform(148.3744,53.6147);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AhhicQgBAwgWBcQgXBagBA1QgBBJA2AeQApAXBRAAQBBADAPgeQALgUAChQQAWiAgBgKQABhGgthUQgwhVgxgBQgbgBgjApQgYAkgPAUg");
	this.shape_80.setTransform(141.8254,49.1633);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0000").s().p("AAfD9QhRAAgpgXQg2geABhJQABg1AXhaQAWhcABgwQAPgUAYgkQAjgpAbABQAxABAwBVQAtBUgBBGQABAKgWCAQgCBQgLAUQgOAbg2AAIgMAAg");
	this.shape_81.setTransform(141.8254,49.1633);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62}]}).to({state:[{t:this.shape_65},{t:this.shape_64}]},2).to({state:[{t:this.shape_67},{t:this.shape_66}]},2).to({state:[{t:this.shape_69},{t:this.shape_68}]},2).to({state:[{t:this.shape_71},{t:this.shape_70}]},2).to({state:[{t:this.shape_73},{t:this.shape_72}]},2).to({state:[{t:this.shape_75},{t:this.shape_74}]},2).to({state:[{t:this.shape_77},{t:this.shape_76}]},2).to({state:[{t:this.shape_79},{t:this.shape_78}]},2).to({state:[{t:this.shape_81},{t:this.shape_80}]},2).wait(2));

	// outer_foot
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("ACIhFQhBAWgRADQgWgCgggBQg+gCg/AKQgdAEgLAdQgIAWADAZQACAQAcAIQAYAIAUgEQAkgGBngVQCDgcgCgJQgEgTgIgTQgOgkgKAAg");
	this.shape_82.setTransform(149.4998,82.8917);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4A1902").s().p("AiMBBQgcgIgCgQQgDgZAIgWQALgdAdgEQA+gKA/ACQAfABAXACQARgDBBgWQAKAAAOAkQAHATAFATQACAJiEAcQhmAVgkAGIgOABQgOAAgQgFg");
	this.shape_83.setTransform(149.4998,82.8917);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("ABvhkQg5AmgQAHQgWAEgeAIQg+AOg6AaQgaAKgEAfQgCAYAKAYQAGAPAdAAQAZACATgKQAhgOBegwQB3g7gEgJQgJgSgNgRQgXgegJACg");
	this.shape_84.setTransform(161.3883,81.9329);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4A1902").s().p("Ah5BlQgdAAgGgPQgKgYACgYQAEgfAagKQA6gaA+gOIA0gMQAQgHA5gmQAJgCAXAeQANARAJASQAEAJh3A7QheAwghAOQgQAIgUAAIgIAAg");
	this.shape_85.setTransform(161.3883,81.9329);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("ACIhFQhBAXgRACQgWgDgfgBQg/gBg/AKQgcAEgMAcQgIAYADAYQADAQAbAIQAYAHAVgEQAjgEBngWQCEgcgDgJQgEgSgHgUQgPgkgKAAg");
	this.shape_86.setTransform(153.5382,83.3192);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4A1902").s().p("AiMBBQgbgIgDgQQgDgYAIgYQAMgcAcgEQA/gKA/ABQAfABAWADQARgCBBgXQAKAAAPAkQAHAUAEASQADAJiEAcQhnAWgjAEIgPACQgOAAgQgFg");
	this.shape_87.setTransform(153.5382,83.3192);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1).p("ACegFQhEgEgQgFQgUgKgcgNQg6gZg+gPQgcgHgVAVQgRAVgHAXQgDAQAWAQQAUARAUAEQAjAJBoATQCEAYAAgJQAEgUABgVQAAgmgKgDg");
	this.shape_88.setTransform(122.5764,77.8602);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4A1902").s().p("AAfA+QhogTgjgJQgUgEgUgRQgWgQADgQQAHgXARgVQAVgVAcAHQA+APA6AZIAwAXQAQAFBEAEQAKADAAAmQgBAVgEAUQAAACgKAAQgaAAhggRg");
	this.shape_89.setTransform(122.5764,77.8602);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("ACaAfQhAgVgPgKQgQgPgZgTQgvgpg4gfQgZgPgaAPQgWAOgMAUQgIAPAQAXQAOAVASAJQAhASBdAvQB3A9AFgIQAJgTAHgTQAKgmgIgHg");
	this.shape_90.setTransform(110.4209,73.6404);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4A1902").s().p("AAMA9QhdgvghgSQgSgJgOgVQgQgXAIgPQAMgUAWgOQAagPAZAPQA4AfAvApQAZATAQAPQAPAKBAAVQAIAHgKAmIgQAmIgDABQgQAAhpg2g");
	this.shape_91.setTransform(110.4209,73.6404);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("ACeAAQhEgFgQgGQgTgMgdgNQg4gcg9gSQgcgIgWAUQgSASgGAWQgFASAWARQARARAUAFQAkALBmAYQCCAfADgJQAEgUADgVQAAgngJgEg");
	this.shape_92.setTransform(118.6537,79.137);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4A1902").s().p("AAbA+QhmgYgkgLQgUgFgRgRQgWgRAFgSQAGgWASgSQAWgUAcAIQA9ASA4AcQAdANATAMQAQAGBEAFQAJAEAAAnQgDAVgEAUQgBACgHAAQgYAAhlgYg");
	this.shape_93.setTransform(118.6537,79.137);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("ACcgSQhFAEgQgEQgVgJgegJQg7gUhAgJQgcgGgSAYQgQAWgEAXQgDAQAYAPQAVAPAVACQAkAGBpAIQCFANABgJQACgVgBgUQgEgmgKgDg");
	this.shape_94.setTransform(127.6182,82.9418);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4A1902").s().p("AAjA8QhpgIgkgGQgVgCgVgPQgYgPADgQQAEgXAQgWQASgYAcAGQBAAJA7AUQAeAJAVAJQAQAEBFgEQAKADAEAmQABAUgCAVQgBADgVAAQggAAhQgHg");
	this.shape_95.setTransform(127.6182,82.9418);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("ACVgoQhDAMgRgCQgWgGgegGQg+gLhAgCQgdgCgPAaQgNAXgBAWQgBASAaAMQAWAMAVAAQAlABBpgFQCFgDAAgJQAAgVgDgTQgJgmgLgCg");
	this.shape_96.setTransform(139.3745,83.5102);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4A1902").s().p("AhnA4QgVAAgWgMQgagMABgSQABgWANgXQAPgaAdACQBAACA+ALQAeAGAWAGQARACBDgMQALACAJAmQADATAAAVQAAAJiFADQhRAEgoAAIgVAAg");
	this.shape_97.setTransform(139.3745,83.5102);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,1,1).p("ACKhCQhBAWgQACQgXgEgggCQg9gChBAJQgcABgLAdQgKAYACAWQADARAbAJQAYAIAUgDQAlgFBngTQCDgYgCgIQgDgUgGgTQgOglgLAAg");
	this.shape_98.setTransform(146.6265,83.2159);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4A1902").s().p("AiNA9QgbgJgDgRQgCgWAKgYQALgdAcgBQBBgJA9ACQAgACAXAEQAQgCBBgWQALAAAOAlQAGATADAUQACAIiDAYQhnATglAFIgLABQgQAAgRgGg");
	this.shape_99.setTransform(146.6265,83.2159);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("ACVgpQhDANgRgCQgWgHgggGQg8gLhBgBQgcgCgPAaQgNAYgCAWQABARAZAMQAWAMAWAAQAlAABogEQCGgFgBgJQgBgUgDgTQgJgngKgBg");
	this.shape_100.setTransform(136.5001,77.8706);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4A1902").s().p("AhmA4QgVAAgWgMQgagMgBgRQACgWANgYQAPgaAcACQBBABA8ALQAgAGAWAHQARACBEgNQAKABAJAnQACATABAUQABAJiFAFQhdAEgoAAIgJAAg");
	this.shape_101.setTransform(136.5001,77.8706);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82}]}).to({state:[{t:this.shape_85},{t:this.shape_84}]},2).to({state:[{t:this.shape_87},{t:this.shape_86}]},2).to({state:[{t:this.shape_89},{t:this.shape_88}]},2).to({state:[{t:this.shape_91},{t:this.shape_90}]},2).to({state:[{t:this.shape_93},{t:this.shape_92}]},2).to({state:[{t:this.shape_95},{t:this.shape_94}]},2).to({state:[{t:this.shape_97},{t:this.shape_96}]},2).to({state:[{t:this.shape_99},{t:this.shape_98}]},2).to({state:[{t:this.shape_101},{t:this.shape_100}]},2).wait(2));

	// inner_foot
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("ACSAzQg8gggOgJQgOgRgVgYQgogwgzgoQgVgRgeAMQgXAJgQATQgJAOAMAZQAMAWAQAMQAeAXBUA8QBtBMAGgGQAMgSAJgSQARgjgIgIg");
	this.shape_102.setTransform(103.1116,70.3393);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4A1902").s().p("AABA8IhyhTQgQgMgMgWQgMgZAJgOQAQgTAXgJQAegMAVARQAzAoAoAwQAVAYAOARQAOAJA8AgQAIAIgRAjQgJASgMASIgBAAQgNAAhlhGg");
	this.shape_103.setTransform(103.1116,70.3393);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("ACdARQhCgQgQgFQgSgNgbgSQgygjg8gaQgZgLgaATQgUAPgKAXQgGAPATAVQARASATAHQAiAOBiAlQB9AuAEgIQAGgVAFgTQAHgngKgEg");
	this.shape_104.setTransform(110.3,77.8729);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4A1902").s().p("AAUA+QhiglgigOQgTgHgRgSQgSgVAFgPQALgXATgPQAagTAZALQA8AaAyAjIAtAfQARAFBCAQQAJAEgHAnQgEATgHAVQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgTAAhqgng");
	this.shape_105.setTransform(110.3,77.8729);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("ACcgRQhDACgRgCQgWgIgfgLQg5gVhAgKQgcgDgUAXQgPAVgDAYQgCAPAXAQQAUAOAVADQAkAEBoALQCFANACgJQABgVAAgVQgEgmgKgCg");
	this.shape_106.setTransform(123.7953,79.026);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4A1902").s().p("AAiA9IiMgPQgVgDgUgOQgXgQACgPQADgYAPgVQAUgXAcADQBAAKA5AVIA1ATQARACBDgCQAKACAEAmIgBAqQgBAEgVAAQghAAhQgIg");
	this.shape_107.setTransform(123.7953,79.026);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("ACLhAQhAATgRADQgYgDgggCQg9gFhAAHQgcAEgNAbQgJAYACAXQADAQAaAKQAXAIAWgCQAjgFBngRQCEgWAAgJQgFgUgFgUQgOglgKABg");
	this.shape_108.setTransform(146.5479,80.1865);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4A1902").s().p("AiOA7QgagKgDgQQgCgXAJgYQANgbAcgEQBAgHA9AFIA4AFQARgDBAgTQAKgBAOAlIAKAoQAAAJiEAWIiKAWIgHAAQgTAAgTgGg");
	this.shape_109.setTransform(146.5479,80.1865);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("AB/hPQg9AagRAGQgXgBgeACQhAADg+AQQgcAGgHAdQgHAYAFAZQAEAQAcAFQAYAEAUgDQAkgKBjgfQCAgmgBgJQgIgTgIgTQgQgjgMADg");
	this.shape_110.setTransform(156.7967,81.6733);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4A1902").s().p("AiHBOQgcgFgEgQQgFgZAHgYQAHgdAcgGQA+gQBAgDQAegCAXABQARgGA9gaQAMgDAQAjIAQAmQABAJiAAmIiHApQgKABgKAAQgLAAgNgCg");
	this.shape_111.setTransform(156.7967,81.6733);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("AByhfQg6AigPAIQgXACgeAHQg+ALg8AYQgbAJgDAfQgEAZAJAXQAFAPAeACQAYABATgGQAigPBfgsQB5g3gDgJQgJgRgLgSQgVgggLAEg");
	this.shape_112.setTransform(164.0385,81.4547);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4A1902").s().p("Ah8BgQgegCgFgPQgJgXAEgZQADgfAbgJQA8gYA+gLQAegHAXgCIBJgqQALgEAVAgIAUAjQADAJh5A3IiBA7QgSAFgWAAIgDAAg");
	this.shape_113.setTransform(164.0385,81.4547);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("AB+hRQg9AcgRAFQgXAAgeACQg/AEg/APQgbAIgIAdQgHAYAGAYQAEAQAcAGQAZADATgEQAlgLBjgeQB/gngCgJQgHgUgIgSQgRgjgMACg");
	this.shape_114.setTransform(155.4055,76.4512);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4A1902").s().p("AiHBQQgcgGgEgQQgGgYAHgYQAIgdAbgIQA/gPA/gEIA1gCQARgFA9gcQAMgCARAjQAIASAHAUQACAJh/AnIiIApQgKADgMAAQgKAAgMgCg");
	this.shape_115.setTransform(155.4055,76.4512);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("ACeAAQhDgGgQgFQgVgLgcgNQg3gdg/gSQgbgHgWAWQgRARgHAYQgFAQAWASQATAQATAGQAlAJBlAXQCCAdADgIQAEgVACgUQACgmgLgEg");
	this.shape_116.setTransform(121.2269,71.8369);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4A1902").s().p("AAcA+IiKggQgTgGgTgQQgWgSAFgQQAHgYARgRQAWgWAbAHQA/ASA3AdIAxAYQAQAFBDAGQALAEgCAmQgCAUgEAVQgBACgHAAQgYAAhlgXg");
	this.shape_117.setTransform(121.2269,71.8369);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("ACbAXQhAgSgQgGQgRgPgagTQgxglg7gdQgZgMgZASQgVANgLAXQgHAPASAWQAQATASAJQAiAOBfAqQB7AzAFgHQAHgUAGgTQAJgmgLgGg");
	this.shape_118.setTransform(111.7724,71.3616);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4A1902").s().p("AAQA+IiBg4QgSgJgQgTQgSgWAHgPQALgXAVgNQAZgSAZAMQA7AdAxAlQAaATARAPQAQAGBAASQALAGgJAmIgNAnIgDABQgRAAhsgtg");
	this.shape_119.setTransform(111.7724,71.3616);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("ACUgpQhDALgQAAQgXgFgfgHQg9gMhAgCQgcABgQAbQgMAVgBAYQAAARAZAMQAXAKAUABQAmgBBngDQCGgGAAgJQgBgVgEgTQgIgmgLgBg");
	this.shape_120.setTransform(131.325,75.525);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4A1902").s().p("AiSAuQgZgMAAgRQABgYAMgVQAQgbAcgBQBAACA9AMIA2AMQAQAABDgLQALABAIAmQAEATABAVQAAAJiGAGIiNAEQgUgBgXgKg");
	this.shape_121.setTransform(131.325,75.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102}]}).to({state:[{t:this.shape_105},{t:this.shape_104}]},2).to({state:[{t:this.shape_107},{t:this.shape_106}]},2).to({state:[{t:this.shape_109},{t:this.shape_108}]},2).to({state:[{t:this.shape_111},{t:this.shape_110}]},2).to({state:[{t:this.shape_113},{t:this.shape_112}]},2).to({state:[{t:this.shape_115},{t:this.shape_114}]},2).to({state:[{t:this.shape_117},{t:this.shape_116}]},2).to({state:[{t:this.shape_119},{t:this.shape_118}]},2).to({state:[{t:this.shape_121},{t:this.shape_120}]},2).wait(2));

	// inner_leg
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AAjjMQgcAlhKA9QhJA5ghArQgtA3AZA6QATArBAAyQAzApAfgOQAVgJAwg+QBehaAHgIQAtg5ANhcQANhigmgeQgXgSgzAMQgrAOgXAHg");
	this.shape_122.setTransform(124.4339,53.2667);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CC0000").s().p("AhuDIQhAgygTgrQgZg6Atg3QAhgrBJg5QBKg9AcglIBCgVQAzgMAXASQAmAegNBiQgNBcgtA5IhlBiQgwA+gVAJQgIAEgJAAQgbAAgmgfg");
	this.shape_123.setTransform(124.4339,53.2667);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AgNjBQgRAqg6BOQg3BJgVAyQgdBCAnAyQAeAkBLAgQA6AaAagVQATgOAfhJQBDhvAFgJQAchCgLhdQgNhigsgTQgbgMguAZQgmAZgTANg");
	this.shape_124.setTransform(126.2822,55.1136);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CC0000").s().p("AgxDqQhLgggegkQgngyAdhCQAVgyA3hJQA6hOARgqIA5gmQAugZAbAMQAsATANBiQALBdgcBCIhIB4QgfBJgTAOQgLAKgTAAQgVAAghgPg");
	this.shape_125.setTransform(126.2822,55.1136);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("AhEirQgGAtgkBbQgjBUgHA2QgLBHAxAmQAnAcBPALQBAALAUgbQAOgRAMhQQAlh9ACgJQALhGgjhYQglhcgwgGQgcgGgmAlQgeAggQASg");
	this.shape_126.setTransform(134.0975,52.3301);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CC0000").s().p("AAED7QhPgLgngcQgxgmALhHQAHg2AjhUQAkhbAGgtIAugyQAmglAcAGQAwAGAlBcQAjBYgLBGIgnCGQgMBQgOARQgOATgmAAQgOAAgSgDg");
	this.shape_127.setTransform(134.0975,52.3301);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1,1,1).p("Ah8iOQAHAugMBgQgMBbAHA2QAIBHA5AYQAtARBPgKQBBgGANggQAJgTgJhRQACiBABgJQgJhIg3hLQg8hQgvAHQgdABgcAuQgVAngLAVg");
	this.shape_128.setTransform(150.1836,50.4287);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CC0000").s().p("AhFDwQg5gYgIhHQgHg2AMhbQAMhggHguIAgg8QAcguAdgBQAvgHA8BQQA3BLAJBIIgDCKQAJBRgJATQgNAghBAGQgdAEgYAAQgqAAgdgLg");
	this.shape_129.setTransform(150.1836,50.4287);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1,1,1).p("AiVh+QALAtABBeQABBdANA1QARBGA7AQQAvALBPgUQA+gPAIggQAGgWgShNQgNiBgCgKQgRhGhChDQhDhIgwAMQgcAGgWAxQgPApgIAYg");
	this.shape_130.setTransform(157.3345,52.0303);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CC0000").s().p("AgvD1Qg7gQgRhGQgNg1gBhdQgBhegLgtIAXhBQAWgxAcgGQAwgMBDBIQBCBDARBGIAPCLQASBNgGAWQgIAgg+APQgzANgkAAQgWAAgRgEg");
	this.shape_131.setTransform(157.3345,52.0303);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("AiphuQARArAOBdQANBcAVAzQAaBCA9AIQAvAGBMgfQA8gXADghQAEgXgdhKQgfh+gDgKQgahChKg6QhNg+guASQgaAKgPAzQgKArgFAZg");
	this.shape_132.setTransform(160.8188,52.5726);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CC0000").s().p("AgRDzQg9gIgahCQgVgzgNhcQgOhdgRgrIAPhEQAPgzAagKQAugSBNA+QBKA6AaBCIAiCIQAdBKgEAXQgDAhg8AXQhBAagrAAIgPgBg");
	this.shape_133.setTransform(160.8188,52.5726);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("AiXh+QAMAuACBfQABBbAOA1QARBGA8AQQAuALBPgVQA/gPAHghQAHgVgUhOQgOiAgCgKQgShGhChEQhFhGgvANQgcAGgWAwQgOAqgIAXg");
	this.shape_134.setTransform(155.7063,46.8903);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CC0000").s().p("AgtD1Qg8gQgRhGQgOg1gBhbQgChfgMguIAWhBQAWgwAcgGQAvgNBFBGQBCBEASBGQACAKAOCAQAUBOgHAVQgHAhg/APQgzANglAAQgUAAgRgDg");
	this.shape_135.setTransform(155.7063,46.8903);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("Agpi3QgMAtguBUQgtBPgPA1QgTBFAsAsQAjAhBOAVQA+ATAWgZQARgPAWhOQA0h3ADgJQAThFgWhcQgahfgvgNQgcgIgrAfQggAdgTAQg");
	this.shape_136.setTransform(134.4283,46.8603);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CC0000").s().p("AgVD1QhOgVgjghQgsgsAThFQAPg1AthPQAuhUAMgtIAzgtQArgfAcAIQAvANAaBfQAWBcgTBFQgDAJg0B3QgWBOgRAPQgNAOgaAAQgTAAgagIg");
	this.shape_137.setTransform(134.4283,46.8603);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("AgDjFQgUArg9BLQg6BGgYAxQgfBAAjAzQAdAnBJAkQA7AcAZgUQATgMAjhJQBIhrAGgJQAfhAgGheQgIhjgtgVQgZgNgwAXQgmAWgUAMg");
	this.shape_138.setTransform(128.7408,49.5622);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CC0000").s().p("Ag8DmQhJgkgdgnQgjgzAfhAQAYgxA6hGQA9hLAUgrIA6giQAwgXAZANQAtAVAIBjQAGBegfBAIhOB0QgjBJgTAMQgLAIgPAAQgXAAgjgQg");
	this.shape_139.setTransform(128.7408,49.5622);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1,1,1).p("AhjicQABAvgXBdQgXBYAAA3QgBBIA1AfQArAXBQAAQBBABAQgdQAMgTAAhRQAUh/ABgKQABhIguhTQgyhWgxAAQgbgBghApQgZAlgPAUg");
	this.shape_140.setTransform(138.2501,46.9004);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CC0000").s().p("AAfD9QhQAAgrgXQg1gfABhIQAAg3AXhYQAXhdAAgvIAng5QAigpAbABQAwAAAyBWQAuBTgBBIQgBAKgUB/QAABRgMATQgPAdg9AAIgFgBg");
	this.shape_141.setTransform(138.2501,46.9004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122}]}).to({state:[{t:this.shape_125},{t:this.shape_124}]},2).to({state:[{t:this.shape_127},{t:this.shape_126}]},2).to({state:[{t:this.shape_129},{t:this.shape_128}]},2).to({state:[{t:this.shape_131},{t:this.shape_130}]},2).to({state:[{t:this.shape_133},{t:this.shape_132}]},2).to({state:[{t:this.shape_135},{t:this.shape_134}]},2).to({state:[{t:this.shape_137},{t:this.shape_136}]},2).to({state:[{t:this.shape_139},{t:this.shape_138}]},2).to({state:[{t:this.shape_141},{t:this.shape_140}]},2).wait(2));

	// inner_arm
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1,1,1).p("ACpCvQAEgCADgDQAMgKglh5Qglh5gYgbQgPgRgsgiQgsghglgrQgUgXgFgXQgEgWgdggQgSgVgIgDQgLgEgSAQQgyArAWA6QAIAVAZApQAiA6ALAVQAuBXAUAjQAgA9A0A+QAbAdAvAJQAFABAFABQAeAFASgJgAB2DAQgEgCgFABQg9gGgUARQgRAPgDARQgCANAKALQATAWAigjQgPASgFAcQgGAmATAWQANAPAxgHQAtgFANgLQAVgTgGg+QgFg7gXgc");
	this.shape_142.setTransform(158.6149,1.3512);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFCCCC").s().p("AgoBTQgTgWAGgnQAFgaAPgTQgiAigTgUQgKgLACgNQADgRARgPQAUgSA8AGQAFAAAEABIADgMQAeAEASgIQAXAbAFA8QAGA8gVAUQgNAKgtAGQgPACgLAAQgaAAgJgKg");
	this.shape_143.setTransform(168.9238,28.2006);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CC0000").s().p("ACDEOIgKgCQgvgKgbgdQg0g9ggg9IhCh7QgLgUgig7QgZgpgIgVQgWg5AygsQASgQALAFQAIACASAWQAdAgAEAWQAFAWAUAXQAlArAsAiQAsAhAPASQAYAaAlB5QAlB5gMALIgHAFQgMAFgRAAIgTgBg");
	this.shape_144.setTransform(157.6307,-7.6715);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1,1,1).p("ABPDgQAEAAAFgCQAPgFAGiAQAIh9gMgiQgJgVgegwQgegvgUg1QgLgcAEgXQADgWgPgoQgKgagGgFQgJgJgXAJQg9AYAAA9QABAXAJAvQAMBDACAXQAOBiAFAoQAKBEAcBMQAPAkAoAaQAEACAFAEQAaAOAUgCgAAbDeQgFgDgEgBQg3gbgYAKQgVAIgJAOQgHANAHAMQAJAbAsgUQgUALgOAZQgUAhALAcQAGARAxAMQAsALAQgGQAZgLAQg7QAQg6gMgi");
	this.shape_145.setTransform(145.4061,0.7195);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFCCCC").s().p("AgUBYQgxgMgGgRQgLgcAUggQAOgZATgLQgsAUgJgbQgGgMAGgNQAJgOAVgIQAZgKA3AbIAIAEIAGgKQAbAOAUgCQAMAigRA5QgPA7gaALQgFACgJAAQgRAAgcgHg");
	this.shape_146.setTransform(144.8651,30.0442);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CC0000").s().p("AAhEmIgJgGQgogagPgkQgchMgKhEIgTiKQgCgXgMhDQgJgvgBgXQAAg9A9gYQAXgJAJAJQAGAFAKAaQAPAogDAWQgEAXALAcQAUA1AeAvQAeAwAJAUQAMAigIB+QgGCAgPAFIgJACIgFAAQgSAAgXgMg");
	this.shape_147.setTransform(145.4061,-7.4629);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1,1,1).p("AgGDuQAEABADABQAQACBGhqQBFhpAFgjQADgXgCg4QgDg4AJg4QAGgfANgRQAOgSAFgrQAGgbgDgHQgFgMgXgEQhAgJgfA0QgLAVgQAtQgXBAgHAWQgmBbgPAnQgaA/gMBPQgGAnAXArQADADACAGQAPAaATAIgAgyDRQgDgEgDgDQgjgzgbgDQgWgFgOAKQgMAGgCAPQgEAcAxADQgXACgZANQgiATgEAeQgCATAjAhQAiAfAQAEQAbAEAsgtQArgqAGgj");
	this.shape_148.setTransform(122.7697,2.2434);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFCCCC").s().p("AgRBpQgRgEghgfQgkgiADgTQAEgcAigTQAYgOAXgBQgxgDAFgdQABgOAMgHQAPgJAWAEQAZADAkA0IAFAHIAKgGQAQAbATAHQgHAigrAqQgoAqgZAAIgEAAg");
	this.shape_149.setTransform(111.9418,27.3688);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CC0000").s().p("AhGEqIgIgCQgTgIgQgaIgEgJQgYgrAGgnQANhPAahAQAPgmAmhbIAfhWQAOgtALgVQAfg0BBAJQAXAEAEAMQADAHgFAbQgGArgNASQgOARgGAfQgIA4ADA4QACA3gDAXQgFAkhGBpQhDBogRAAIAAAAg");
	this.shape_150.setTransform(130.0419,-3.5949);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(1,1,1).p("ABHDiQAEAAAEgCQAQgFAKiAQALh8gNgiQgJgVgbgxQgegwgTg0QgJgeADgWQADgWgPgpQgHgagGgFQgKgIgWAIQg+AWgCA9QABAYAIAuQAKBEADAWQALBiAFAqQAHBEAbBLQAOAlAoAbQAEACAEADQAaAQAUgCgAATDeQgFgDgEAAQg3gcgYAJQgVAHgJAPQgHALAGAOQAJAbAtgUQgUAMgPAXQgUAiAKAbQAHASAuAMQAsAMARgFQAZgKARg8QARg6gLgh");
	this.shape_151.setTransform(144.7824,7.7943);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFCCCC").s().p("AgYBXQgugMgHgSQgKgbAUghQAPgXAUgMQgtAUgJgbQgGgOAHgLQAJgPAVgHQAYgJA3AcQAEAAAFADIAGgKQAaAQAUgCQALAhgRA5QgRA8gZAKIgMABQgSAAgfgIg");
	this.shape_152.setTransform(143.3539,37.0929);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CC0000").s().p("AAZElIgIgFQgogbgOglQgbhLgHhFIgQiLIgNhaQgIgugBgYQACg9A+gWQAWgIAKAIQAGAFAHAaQAPApgDAWQgDAWAJAeQATA0AeAwQAbAxAJAUQANAigLB9QgKCAgQAFIgIACIgEAAQgTAAgXgOg");
	this.shape_153.setTransform(144.7824,-0.3078);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1,1,1).p("ACXDCQADgBAEgEQAOgJgZh9QgYh6gVgeQgPgSgognQgpgmggguQgRgagCgXQgDgVgagjQgPgXgHgDQgMgGgTAOQg1AmAPA7QAGAXAVArQAbA+ALAVQAkBbAQAmQAaBAAtBBQAXAhAvAOQAEABAGACQAdAIATgHgABjDNQgFgCgEAAQg9gMgVAPQgSANgEARQgEANAKAMQAPAXAlggQgQARgHAbQgMAmASAXQAMAPAxAAQAtgBAOgJQAXgRgBg+QACg8gUgd");
	this.shape_154.setTransform(164.7348,-2.2546);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFCCCC").s().p("AgxBLQgRgYAMgmQAGgaAQgRQglAfgQgWQgJgMAEgNQADgRATgMQAVgPA9AMQADgBAGACIADgMQAdAJATgIQAUAdgBA7QAAA+gWARQgPAJgtABQgwAAgMgOg");
	this.shape_155.setTransform(172.3996,26);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CC0000").s().p("ABqEYIgKgDQgvgOgXghQgthBgahAIg0iBQgLgVgbg+QgVgrgGgXQgPg7A1gmQATgOAMAGQAHADAPAXQAaAjADAVQACAXARAaQAgAuApAmQAoAnAPASQAVAdAYB7QAZB9gOAJQgEAEgDABQgJAEgMAAQgMAAgPgFg");
	this.shape_156.setTransform(164.4126,-10.9982);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(1,1,1).p("AAzDrQAEABAFgCQAQgCAeh8QAfh5gHgjQgFgXgUg1QgWgzgJg4QgFgfAHgVQAHgVgJgqQgEgcgFgFQgIgLgYAFQg/AMgLA8QgEAXABAwQgCBEABAXQgGBigCAqQgDBEAOBPQAHAmAjAiQADACAFAFQAXATAUABgAAADfQgEgEgDgBQgzglgZAGQgWADgLANQgJALAEAOQAFAcAvgNQgWAJgSAVQgaAeAGAcQAEATAsAVQApARARgBQAbgGAag5QAcg1gHgk");
	this.shape_157.setTransform(135.2167,1.5503);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFCCCC").s().p("AgqBUQgrgVgFgTQgGgcAbgcQASgWAVgIQgvANgFgcQgEgPAKgKQAKgOAXgDQAZgFAyAlQADABAEAEIAIgJQAXAUAUABQAHAjgbA1QgbA4gbAGIgDAAQgQAAgngQg");
	this.shape_158.setTransform(131.2656,30.2203);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CC0000").s().p("AANE3QgTgBgXgTIgIgHQgkgigHgmQgOhPADhFIAIiLQgBgXAChEQgBgwAEgXQALg8BAgMQAXgFAIALQAFAFAEAcQAJAqgHAVQgHAVAFAfQAJA4AWAzQAUA0AFAXQAHAjgfB6QgeB8gQACIgHABIgCAAg");
	this.shape_159.setTransform(139.0456,-6.0244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142}]}).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},4).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148}]},4).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151}]},4).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154}]},4).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87.3,-167.1,95.39999999999999,260.2);


(lib.top = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660044").s().p("EIT1AnnIjAiAQiChWhrg9Qk8izlmhgQnSh9pHAAQmOAAkCBSQhkAfhoA0QgeAOiUBRQjmB9jaA2QlJBRoJAAQuJAAzfjIQhmgRq9h4Qlqg/hhAAQo4AAjtAXQjEASiTA3IiWA8QhpAqhuAiQk0Bhn8BkQAmgRAYgsIACgEQAVgnALgtQgLAtgVAnIgCAEQgYAsgmARIg6ALQrSAA1PhXQqMgr/biWQ8BiGvwg7Q3ohXvUAAQj8AAjWAmQhQANkbBFQjrA5jRAZQktAmmTAAQjjAAkThEQhlgamXh+QlQhnj2gwQljhFlrAAQjkAAj2AlQiPAWkaA9QkWA7iaAYQj8AljwAAQjMAAisgZQhtgPingoQivgphagOQifgZi1AAIAzAoQAAAUAaAUQAZAUAAAUQkNhDjcBNQiVA0jTCjIisCFQhkBKhXAuQjjB6kDAAQgZAAq/iEQrriMiogwQkchQmKgcQjPgPm5gFQlkgGiBgUQi3gfgHhXQARgHAbgBIgtAAIhlAAIgPAAQiCiFj/hNQlvhuqGAAQh7AAiIA8Qg6AZjZB6QjKBxisBGQj+BpktBBQk6BFlPBWQjYA6hrAMQiFAQlBABQjfAAsvgCQlzAAoZgsQlrgdpqhDQrFhMjVgUQnYgskDAAQrjAA1TBkQqqAyoqAyQgEAAkFitQk+jPj1iLQsunRAAEIQksAEjLBsQhKAohmBMQiYBwgdAUQj0Cmk8BSQmyBwq2AAQkwAAj5g+QipgrjVhfQj4huhUgbQjBg/jRAAQhAAAjNAoQjOAohAAAQkgAAjhg4QhSgVhtglIi/hCQj8hUkFgoQlxg4oVAAQlxAAqoDwQitA9kJBoQi/BLgQAAQgFAAjzhXQkzhskahVQuhkYoHAAQldAAkMA5QhqAWlNBlQkXBVkEAnQl8A4odAAQi/AAntg3QkdgfpuhIQoTg7kEgHQlTgIAABIIn7gDQkXADijAgQjKAnh+BkQiJBshKDJQocmlqVj6QlNh/jugqQpvAAqyBSQnyA6qaB4IveCzQnxBRkpAAQmFAAkng4QjYgpjNhTQhwgti7hOQieg5ieAAQiXAAhlAfQg0AQhnA1QhdAwhUAVQh/AfjCAAQhOAAirAEQiUgEhdgmQj+hrAAmzQAAirB5lSQAziMDYoQQC4nCBTkJQBolOAPjsIA2ADQFIAnCbgvQA/gSAzgmQAagSA7g3QByhpCHgtQC4g+FCgJQACBzC1A2QDAA5FbgbQM9hDT5nuIHOAAIAGARIltA/IFtg/UAjJgGDANNgB4QHLhCEggYQDrgUDnAAQFsAAYTBqUAg7ACVATnABVUBOeAFUAiwAAAUAt7AAAAaogDaQTQidIIkGQHlAMLtA7QJ8AxSnB1QWBCJG6AmQPVBXIpASQELAGSVFSQFfBlGuCCIFaBpQDLAARRAUQRQAUC0AAQJkAAXEi6QG4g4KYhbQKMhaCGgRUAGVgAxAkIgA8UApNgBGAGMgAVUAVBgBGAjigB7QXDhMHDgKIACAAQAeALI7ASQKpAXDNAbQS2CjPGBRQVuB0VwAAUAitAAAA7XgB4QO2geYNg0QR5gmEoAAUBA9AAAAeOAJZQPGEtHXHMQHOHGAAJvQAAKAlJF9QkZFFoaCYQmXB0qGAgQi6AKleAIQlaAIiYAIQtRAsmyBvQk4BPiQCHQgSAPhOBYQg0A5gyAdQiNBSlvAAQh2AAjCh9gASDdEIgDAAgEpkggSbIAAigg");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.top, new cjs.Rectangle(-4003.9,-267,8007.8,534), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AI0APQAAABAAAWQgBANALAEIAAAFQACgKAAgHQAAgOgMgOgAH4AjIAAA8QATgpgEgTACuAoQgCgQgIgYIgFAAACVAFIAAAeACuAoQgFABgKAJQAAgFADgMQACgNAAgFQADADACAKQACAJADADADMAUQAAAHADAGQACAEAFAIQAKgFADgEQAEgFgCgLACuAoIAAAAIAAAAgACVAyIAAAPQgCAFAMAAQAEAAAGgKQAFgJAAgDQAAgEAAgEAo/AeQADgHARgJQAPgJACAAQAMAAAeAjQAeAjAVAAQAaAAAdgtQAdgsAVAAQAEAAAnATQApAUAcAAQATgMAkgUQBMgrBlgs");
	this.shape.setTransform(-32.1,21.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AGmC2Qg+AJg1AAQhQAAg5gVQgkAQgxAYQgXALgaANQgIAEgIAEQhPAhiPgDQiegDhwgrQhxgsgBg+QgCg9BFhDQBEhEBGgfQBGggCxAjQBbARA/AmQAmAVAbAcQAQAQANATQAUgbARgcQgUgngigZQgGgFgGgHQgWgeAAhEQAAgpAKgRQAEgIAIgFQAMgHASAAQAxAAAsAyQARAUATAzQAAABAAAAQAAADACADQgOg0gEgKQgNgjBWgOQAUgCAnAjQAmAjg5BGQg1BBAWAJIABAAQAAAAABABQAAAAABAAQABAAAAAAIAAAAIAAAAAD2iPIAAgBAD0iXQAAADACAEAD2iEQAAAAAAgBQgBgIABgCAD2iEQABAAABgFQgBAFAAAFQgEAYgFAWQgEARgDAMQALgBANABIAAAAQABAAAAAAQAXACAbAGQABABABAAQAAAAABAAIABAAQABABAAAAQAAAAABAAAD2iEQAAgGAAgFACoglQAAgBAAAAQAAgCAAgCQgBgDgBgFQgBAAAAgBQgOgIgCgQQgBgBAAAAQAAgDAAgeQAAglAAgBQAEgPAXAAQAQAAAMAUQAEAIADAHQADAIAAAHQAAAFgFAcQgDARgBAMQgBAEAAADQAKgCANAAQAAAEAAACACpgnQAMgHAUgEQAAAEAAACADigtQACAAACAAQAAgEABgDACrg2QgEgBgDgCQgBgBAAAAQgCgJAAgCACXgUQADABACABQACgDACgCACwgTQgIgCgIgCQAFgGAGgDAEygsQgBAAAAAAQACABACAAQABABABAAIgBgBAE3gqIABAAAE6gqQABABACAAQAEABAEABIADABQALADANAEQABAAACABQACgBgdgHAE3gqQAIACAGABAFkAFQgEgEgcgJQgcgLgIAAQgqAAAAAiQAAAWAPADQAAAAAoAAQAdAAAHgCQAQgGADgbgAD/g0QgGgngCgkAFygeQA6ATBIAiQAuAXAdASAImBkIABAFIhBAAQgEgDgNgEQgNgDgKAAQgUAAgoAKAGmC2QgKAIgGAKAJLCMQgjAQhBAOQgiAHgfAFAIyBIQgSgCgpgHQg5gLgKgCAItB7QgQAIg/AVQgkANgUAR");
	this.shape_1.setTransform(26.7234,-3.3912);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACLBOQgMgFgHgKIgBgBQgFgIgBgJIAAgFIAAgDQABgLAHgKIAEgEQAFgGAIgCQADgCAFgBQAPgBAMAHQANAIAEAPQAEAOgGANQgHANgOAGQgJAEgIAAIgLgCgAiwgTQgPgDAAgWQAAgjArAAQAIAAAcAKQAbALAEAEQgCAagRAGQgGADgeAAIgoAAg");
	this.shape_2.setTransform(70.467,2.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],-2.7,35.7,4.1,-34.6).s().p("AizBlQg5gdAAgWIAAhTQAUgbASgdIAFACIAEgFIAPAFIgPgFQAEgFAHgEIgEgEIAAgCIACgBQAMgHAUgDIACgBIAAAIQAKgCANAAIADgBIACgHIAYAAIAAABIABAAQAXACAaAGIACAAIACABIgFgBIABAAIgBAAIAFABIABAAIAAAAIABAAIgBAAIABAAIAAAAIAAAAIAAAAIACAAIAAAAIAAAAIABABIACAAIAxAKIADABQA6ATBIAkQAvAWAdATQgIACgFAFQgTgCgpgHIhDgMIBDAMQApAHATACIgEADQgHALgBALIAAADIAAAFQABAIAFAJIABAAQAHALAMAEIALADQgkAQhBANQghAHgfAFQATgRAlgMQA+gWARgIQgRAIg+AWQglAMgTARQg/AJg0AAQhQAAg4gVgAB2AeQAOADADAEIBBAAIhBAAQgDgEgOgDQgNgDgKAAQgUAAgoAKQAogKAUAAQAKAAANADgAhog0QAAAVAPAEIAoAAQAeAAAGgDQAQgGACgaQgEgEgagLQgcgKgIAAQgrAAAAAjgAgYhsIACABIAXAHIADABQACgBgcgHIgCgBIgJgCIAJACgAh8hrIABgGIgBAGgAgYhsIgOgDIAOADgAgmhvIgBAAIABAAIgCAAIACAAgAiVhwIABgGIgBAGgAgmhvIAAAAg");
	this.shape_3.setTransform(61.775,3.4875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCCC").s().p("AgLA7IgCgJIAAAAIgBgHIAHAEIgHgEIgBgBIgCgKIACAKIABABQgLgGgFgMIAAgBIgBggIAAglQAEgPAYAAQAOAAAMAUIAIAPIAAAIIgEAgQgFAWAAAOQgUADgLAHg");
	this.shape_4.setTransform(44.65,-13.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],-2.9,-14.5,5,15.3).s().p("AAIBqIgBAAIgCgBQgZgGgYgCIgBAAIAAAAQgGgngCgkIABgKIgCAFIAAgLIAAgBQgOgzgEgKQgNgjBVgOQAUgCAnAjQAmAjg5BFQgzBBAUAJgAg4AAIAAgBIAAAAIACAGIgCgFg");
	this.shape_5.setTransform(56.8099,-18.3781);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],-5.4,-20.4,5.5,20.3).s().p("AgDB9QgUgngigZQgGgFgGgHQgWgeAAhDQAAgpAKgRQAEgIAIgFQAMgHASAAQAwAAAsAyQARAUASAzIABABIABAFIAAABIAAAKIABABIABgFIgBAKQgDAYgGAWIgGAdIgCAHIgDAAQgNAAgKACIAAgHIAFgdIAEghQAAgHgCgIIgIgPQgMgTgPAAQgXAAgEAPIAAAlIABAhIAAABQADAQANAIIAAABIACAIIAAAEIAAABIAEAFQgHADgEAGIgEAFIgEgCg");
	this.shape_6.setTransform(42.25,-17.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],3.2,50.3,3.2,-49.9).s().p("AAGDGQidgDhxgsQhxgsgBg9QgBg9BEhEQBEhDBHggQBGgfCvAiQBcASBAAlQAlAWAcAdQAQAQAMASIAABTQAAAWA5AdQgkAQgxAYIgxAZIgQAHQhLAfiAAAIgUAAg");
	this.shape_7.setTransform(5.8734,4.0821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-91.2,-31.6,180.9,63.800000000000004), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AI0APQAAABAAAWQgBANALAEIAAAFQACgKAAgHQAAgOgMgOgAH4AjIAAA8QATgpgEgTACuAoQgCgQgIgYIgFAAACVAFIAAAeACuAoQgFABgKAJQAAgFADgMQACgNAAgFQADADACAKQACAJADADIAAAAgADMAUQAAAHADAGQACAEAFAIQAKgFADgEQAEgFgCgLACVAyIAAAPQgCAFAMAAQAEAAAGgKQAFgJAAgDQAAgEAAgEIAAAAAo/AeQADgHARgJQAPgJACAAQAMAAAeAjQAeAjAVAAQAaAAAdgtQAdgsAVAAQAEAAAnATQApAUAcAAQATgMAkgUQBMgrBlgs");
	this.shape.setTransform(-32.1,21.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AGmC2Qg+AJg1AAQhQAAg5gVQgkAQgxAYQgXALgaANQgIAEgIAEQhPAhiPgDQiegDhwgrQhxgsgBg+QgCg9BFhDQBEhEBGgfQBGggCxAjQBbARA/AmQAmAVAbAcQAQAQANATQAUgbARgcQgUgngigZQgGgFgGgHQgWgeAAhEQAAgpAKgRQAEgIAIgFQAMgHASAAQAxAAAsAyQARAUATAzIAAABQAAADACADQgOg0gEgKQgNgjBWgOQAUgCAnAjQAmAjg5BGQg1BBAWAJIABAAQAAAAABABQAAAAABAAQABAAAAAAIAAAAIAAAAAD2iPIAAgBAD0iXQAAADACAEAD2iEQAAAAAAgBQgBgIABgCAD2iEQAAgGAAgFAD2iEQABAAABgFQgBAFAAAFQgEAYgFAWQgEARgDAMQALgBANABQgGgngCgkACoglQAAgBAAAAQAAgCAAgCQgBgDgBgFQgBAAAAgBQgOgIgCgQQgBgBAAAAQAAgDAAgeQAAglAAgBQAEgPAXAAQAQAAAMAUQAEAIADAHQADAIAAAHQAAAFgFAcQgDARgBAMQgBAEAAADQAKgCANAAQACAAACAAQAAgEABgDACpgnQAMgHAUgEQAAAEAAACADigtQAAAEAAACACrg2QgEgBgDgCQgBgBAAAAQgCgJAAgCACXgUQADABACABQACgDACgCACwgTQgIgCgIgCQAFgGAGgDAEygsQABABABAAQAAAAABAAIABAAQABABAAAAQAAAAABAAIgBAAQAIACAGABAEygsQgBAAAAAAQACABACAAQABABABAAIgBgBAE6gqQABABACAAQAEABAEABIADABQALADANAEQABAAACABQACgBgdgHAD/g0IAAAAQABAAAAAAQAXACAbAGAFkAFQgEgEgcgJQgcgLgIAAQgqAAAAAiQAAAWAPADQAAAAAoAAQAdAAAHgCQAQgGADgbgAFygeQA6ATBIAiQAuAXAdASAImBkIABAFIhBAAQgEgDgNgEQgNgDgKAAQgUAAgoAKAJLCMQgjAQhBAOQgiAHgfAFQgKAIgGAKAItB7QgQAIg/AVQgkANgUARAIyBIQgSgCgpgHQg5gLgKgC");
	this.shape_1.setTransform(26.7234,-3.3912);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACLBOQgMgFgHgKIgBgBQgFgIgBgJIAAgFIAAgDQABgLAHgKIAEgEQAFgGAIgCQADgCAFgBQAPgBAMAHQANAIAEAPQAEAOgGANQgHANgOAGQgJAEgIAAIgLgCgAiwgTQgPgDAAgWQAAgjArAAQAIAAAcAKQAbALAEAEQgCAagRAGQgGADgeAAIgoAAg");
	this.shape_2.setTransform(70.467,2.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],-2.7,35.7,4.1,-34.6).s().p("AizBlQg5gdAAgWIAAhTQAUgbASgdIAFACIAEgFIAPAFIgPgFQAEgFAHgEIgEgEIAAgCIACgBQAMgHAUgDIACgBIAAAIQAKgCANAAIADgBIACgHIAYAAIAAABIABAAQAXACAaAGIACAAIACABIgFgBIABAAIgBAAIAFABIABAAIAAAAIABAAIAAAAIAAAAIACAAIAAAAIAAAAIABABIACAAIAxAKIADABQA6ATBIAkQAvAWAdATQgIACgFAFQgTgCgpgHIhDgMIBDAMQApAHATACIgEADQgHALgBALIAAADIAAAFQABAIAFAJIABAAQAHALAMAEIALADQgkAQhBANQghAHgfAFQATgRAlgMQA+gWARgIQgRAIg+AWQglAMgTARQg/AJg0AAQhQAAg4gVgAB2AeQAOADADAEIBBAAIhBAAQgDgEgOgDQgNgDgKAAQgUAAgoAKQAogKAUAAQAKAAANADgAhog0QAAAVAPAEIAoAAQAeAAAGgDQAQgGACgaQgEgEgagLQgcgKgIAAQgrAAAAAjgAgYhsIACABIAXAHIADABQACgBgcgHIgCgBIgJgCIAJACgAh8hrIABgGIgBAGgAgYhsIgOgDIAOADgAgmhvIgBAAIABAAIgBAAIABAAIgCAAIACAAgAiVhwIABgGIgBAGg");
	this.shape_3.setTransform(61.775,3.4875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCCC").s().p("AgLA7IgCgJIAAAAIgBgHIAHAEIgHgEIgBgBIgCgKIACAKIABABQgLgGgFgMIAAgBIgBggIAAglQAEgPAYAAQAOAAAMAUIAIAPIAAAIIgEAgQgFAWAAAOQgUADgLAHg");
	this.shape_4.setTransform(44.65,-13.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],-2.9,-14.5,5,15.3).s().p("AAIBqIgBAAIgCgBQgZgGgYgCIgBAAIAAAAQgGgngCgkIABgKIgCAFIAAgLIAAgBQgOgzgEgKQgNgjBVgOQAUgCAnAjQAmAjg5BFQgzBBAUAJgAg4AAIAAgBIAAAAIACAGIgCgFg");
	this.shape_5.setTransform(56.8099,-18.3781);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],-5.4,-20.4,5.5,20.3).s().p("AgDB9QgUgngigZQgGgFgGgHQgWgeAAhDQAAgpAKgRQAEgIAIgFQAMgHASAAQAwAAAsAyQARAUASAzIABABIABAFIAAABIAAAKIABABIABgFIgBAKQgDAYgGAWIgGAdIgCAHIgDAAQgNAAgKACIAAgHIAFgdIAEghQAAgHgCgIIgIgPQgMgTgPAAQgXAAgEAPIAAAlIABAhIAAABQADAQANAIIAAABIACAIIAAAEIAAABIAEAFQgHADgEAGIgEAFIgEgCg");
	this.shape_6.setTransform(42.25,-17.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],3.2,50.3,3.2,-49.9).s().p("AAGDGQidgDhxgsQhxgsgBg9QgBg9BEhEQBEhDBHggQBGgfCvAiQBcASBAAlQAlAWAcAdQAQAQAMASIAABTQAAAWA5AdQgkAQgxAYIgxAZIgQAHQhLAfiAAAIgUAAg");
	this.shape_7.setTransform(5.8734,4.0821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-91.2,-31.6,180.9,63.800000000000004), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AI0APQAAAAAAAXQgBANALAEIAAAFQACgKAAgHQAAgOgMgOgAH4AjIAAA8QATgpgEgTACuAoQgCgQgIgYIgFAAAo/AeQADgHARgJQAPgJACAAQAMAAAeAjQAeAjAVAAQAaAAAdgtQAdgsAVAAQADAAAoATQApAUAcAAQASgMAlgVQBMgqBlgsADMAUQAAAGADAHQACADAFAJQAKgFADgEQAEgGgCgKACVAyIAAAPQgCAFAMAAQAEAAAGgKQAFgJAAgDQAAgEAAgEQgFAAgKAKQAAgFADgMQACgNAAgFQADADACAKQACAIADAEACuAoIAAAAIAAAAgACVAFIAAAe");
	this.shape.setTransform(57.6,47.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AIjDQQgBADAAACIg/gQQgCgFgMgHQgMgGgKgCQgTgFgpgBAI2C4QgSgGglgSQg0gZgKgEAGXAjQAzAhA8A1QAnAiAXAZAI8EAQgmAHhCgEQgjgCgfgDQg+gIg0gNQhNgVgxgjQgnAGg2ALQgWAEgYAFQhOAgiMgDQiegDhwgrQhxgsgBg+QgCg9BFhDQBEhEBGgfQBGggCxAjQBbARA/AmQBOAuATAjQALATAHAVQAbgVAYgWQgJgrgaghQgGgHgDgIQgOgiAShCQAKgnAOgOQAHgHAIgDQAOgDARAFQAwAMAdA8QAMAYAEA1QAAgvAAgKQgEglBXAJQATAEAdArQAcAshJA1QhEAxASANIABAAQAAAAABABIgBAAIgBgBQABABABAAQAAAAABAAIgBAAIAAAAQAGAEAGADIACABQAKAGALAHQACABABABQACgBgagOAIkDoQgSADhCAFQgnADgXALQgMAFgIAIAE8hqIAAAAIAAgBQAAgDAAgDIAAgBAE5heQAAgBAAgBQACgIABgCAE5heQABgGACgGAE5heQABAAACgFQgCAFgBAEQgJAWgMAUQgIAPgGAMQALACANAEIAAAAQAAABABAAQAVAHAXAMQABAAAAAAQABABABAAQABAAAAABIABAAADVgXQABgBAAAAQAAgCABgCQAAgDAAgFQgBAAAAgBQgLgMACgQQgBgBABAAQAAgDAIgdQAJgkAAAAQAIgOAXAGQAPAEAGAXQACAIABAIQABAIgCAHQgBAEgMAbQgIAPgEAMQgBACgBAEQAAAAAAAAQAKABANADQACAAACABQAAgEACgCADdgmQgEgDgCgDQgBAAAAgBQAAgJABgCADXgZQAOgEAUACQgCADACAEADYgEQgHgDgHgFQAGgEAHgCADBgLQACABADACQABgCADgCAFjAIQACABABABQAEACAEADAFjAIQABABAAAAAFcAFQADACADABAEQgQQgCAEAAACAGABCQgDgFgYgRQgYgRgIgDQgpgLgJAiQgGAVAOAHQAAAAAnALQAcAHAHAAQARgCAKgZgAEugPQADgoAIgjAAXDLQgEABgDABQgJACgHAB");
	this.shape_1.setTransform(115.7234,26.7279);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],10.7,50.3,10.7,-49.9).s().p("ABRDGQidgDhxgsQhxgsgBg9QgBg9BEhEQBEhDBHggQBGgfCvAiQBcASBAAlIAAC/IgdBrIARgEIAIgBQhKAdh9AAIgUAAg");
	this.shape_2.setTransform(88.0734,30.1825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],-35.8,42.2,-9.9,-54.5).s().p("Ag0ArIAAi/QBMAuATAjQALAUAIAVIgWBQQgGAVAwArIhcARIguAJIgIACIgRADg");
	this.shape_3.setTransform(123.775,32.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCCC").s().p("AgZA4IAAgIIgBgBQgLgMACgQIAAgBIAIgfIAJgkQAIgOAWAGQAPAEAGAXIADAQIgBAIIgNAeQgKAUgEANQgTgCgOAEgAgaAnIABABIAGAGIgGgGIgBgBIABgLIgBALIAAAAg");
	this.shape_4.setTransform(139.8125,18.2077);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],0,-20.5,0,21.6).s().p("AgjB+QgKgrgaghQgFgHgEgIQgOgiAShBQALgnANgOQAHgHAJgDQANgDASAFQAuAMAdA8QAMAYAFA0IAAABIAAAGIAAABIgBAAIgCAKIAAACIADgFIgEAJQgJAWgLAUIgOAbQgCACgBAEIgEgBQgMgDgLgBIABAAIACgGQAEgMAHgPIAOgfQACgHgBgIIgDgQQgHgWgPgEQgWgGgHANIgKAkIgIAgIAAABQgBAQALAMIAAABIAAAIIgBAEIAAABIACAFQgHACgGAEIgFAEIgEgDg");
	this.shape_5.setTransform(138.6688,12.9029);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],0.2,-14.9,0.2,15.9).s().p("AgXBpIAAAAIABAAIgBAAgAgaBoIgBgBIgCgBIgBAAQgXgNgVgHIgBgBIAAAAQADgoAIgjIADgIIgDAEIADgLIAAAAIAAgBIAAgGIAAgBIAAg5QgEglBWAJQATAEAdArQAcAshJA0QhDAxASAOg");
	this.shape_6.setTransform(153.5381,17.0447);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AB8B0QgFgBgFgEQgLgHgEgMIAAgBQgCgJABgJIABgFIAAgDQAEgKAKgIIAEgDQAHgDAIgBQAEgBAEABQAQABAKALQAKALgBAQQABAPgJALQgKAKgPADIgGAAQgGAAgGgCgAh+g1IgngLQgNgHAFgVQAJgiAqALQAHADAYARQAYARADAFQgJAZgSACIgBAAQgHAAgbgHg");
	this.shape_7.setTransform(160.5717,40.7048);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#5D5D5D","#6E6E6E","#939393","#A8A8A8"],[0.102,0.325,0.451,0.596],-10.6,34.8,14.1,-31.4).s().p("AB2CPQgjgCgfgDQAXgLAngDQBCgFASgDQgSADhCAFQgnADgXALQg9gIg0gNQhNgVgxgjQgvgrAFgUIAWhRQAbgVAYgXIAFADIAEgEQAGgEAHgCIgCgFIABgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAOgEAUACIACABIgCAGIgBgEIABgDIgBADIABAEIAAAAQAKABANADIAEABQAAgEACgCIAYAGIAAAAIABABQAVAHAXANIABAAIABABIABABIABAAIABAAIAAABIABAAIABAAIABABIACABIAuAXIADACQAzAhA8A0QAnAiAXAZQgIABgGADQgSgGglgSIg+gdIA+AdQAlASASAGIgFADQgJAIgEAKIgBADIgBAFIg/gQQgCgFgMgHQgMgGgKgCQgTgFgpgBQApABATAFQAKACAMAGQAMAHACAFIA/AQQgBAJACAJIABABQAEAMAKAHQAFAEAFABQgXAEgjAAIgugBgAAnhWIADACQACgBgagOIAVANgAAQhkIACABIgCgBIgIgFIAIAFgAAQhkIgMgHIAMAHgAAEhrIgFgDIAFADgAAEhrIgCgBIACABgAADhrIgBgBgAiFh4IgOgIIAOAIgAhPh+IACgGIgCAGgADYBEIAAAAgAhkiIIAAAAg");
	this.shape_8.setTransform(150.7215,38.3179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1.5,-1,179.6,59.3), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFF47","#FFFF47","#FF2500"],[0.129,0.514,1],-0.4,-27.1,0,-0.4,-27.1,125.3).s().p("ADKMDQjMptj6KQQj6KQhkv2Qhkv2DTkCQDTkCErABQErAACjEWQCiEVgIFYQgJFWhtJoQg3EyhOAAQhPAAhnk3g");
	this.shape.setTransform(63.5502,108.2252);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,127.1,216.5), null);


(lib.satan_standing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFFC8QBcACAPgBIAlkBIhZgNQgTAGgaAOQgRAJgVAMIgBAAQgCACgEACQgoAZgkAbAFUgzQABAFACAGQAOA4AAAMQABAKgKBBQgHAygDAKQgFAQgIAJADHgQQgDAQgCANQAAABAAABQgSBtgVAZIgHAxQAngNBNABQADAAADAAQAAAAABAAIABAAIAAAAQAIAAAIAAQAUABARABQgHAGgJACAEuggQgJAmgOBGQgMA9gCAMQgCAUACAFQACADADAFIAAAAQABABABACQAAAAAAABQABAAgBAAQADADACAEAluBYQhYgYgOgFIAlkAIBZAMQAYAQAfAiQAJAIAJALQAOAPAMAQQARAUAQAVAi6hHQgDAPgBAPQgBABAAABQgNBsANAeIgHAxQgmgahZgYQAvgrAjiMAkrh7QgWAZgUAuQgVAxgGArQgCARAAADQgBANAFAPAlRBrQAGgEAGgFQgCAAgCgBQgUgFgRgE");
	this.shape.setTransform(34.875,-277.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEnCgIgQAAIAAAAIAAgBIgCgCIAAgBIgFgIQgCgFACgUIAOhJQAOhEAJgnIgFgJIAmgVIAFAKIADALQAOA5AAAMQABAJgKBBQgHAygDALQgFAPgIAJIglgCgAlCBHIglgJQgFgOABgOIACgUQAGgrAVgwQAUgvAWgZIAMgMIASATIAaAfQgjCMgvArIgEgBg");
	this.shape_1.setTransform(34.174,-274.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ACbCVQAVgZAShtIAAgCIAUADQAkgbAogZIAGgEIABAAIAFAIQgJAmgOBGIgOBJQgCAUACAFIAFAIIAAAAIACADIAAABIAAAAIgBAAIgBAAIgGAAQhNgBgnANgAFFC8QAIgJAFgQQADgKAHgyQAKhBgBgKQAAgMgOg4IgDgLIgFgKQAagOATgGIBZANIglEBIgTAAIhYgBgAlFBiQAvgrAjiMQARAUAQAVIAUADIgBACQgNBsANAeIgHAxQgmgahZgYgAnUA7IAlkAIBZAMQAYAQAfAiIgMAMQgWAZgUAuQgVAxgGArIgCAUQgBANAFAPQhYgYgOgFg");
	this.shape_2.setTransform(34.875,-277.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(37));

	// mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AB4hhQAwgiAdgVQAkgbAGgHIAFABQADAYAFCEQADBiARBXIgHAtQgIAAgKgBQgYgBgigCQgrgDgMgCQAAgBABgCQACgNANgdQARgiABgRQACACApAuQAYAdAKAUABDg8QAUgOAcgTQACgCACgBQAAgBABAAQACgFAAgDAB1hXQgCASACAZQABAMADAOQALAtADASQAJgUAhhAQAeg+AAgiABtg9QABgHAGgOQABgDAAgCQACgGABgEABEgZQACgIACgFIAFAAABJByIACgBIABgFQgCADgBADQgDANAFAQQAIAWgCAJACGDAQgdgGgZgEQgugJgegGIBFg1Ag7gkIgKBIQgXgCgMgqQgCgHgDgGQgLghgHgDAjTiwQASAPATATQAhAlAPARQAgAhAiASQAAAAABABQAbANAdAEQADAAAQgIQAQgKAcgSQAEgDADgCAAQgbQAQAbANArIAEAAQAFgNAHgeQAEgOADgLIgBgjAALglQADAFACAFAjmjAQAHAFAGAFAjmjAQAEgEAFgEQAEAFAAANQADADADADAjcg/IABgHIAIgpQgBgXABgqAjzCPQgPAAgNAAQAMgLAIgkQAEgPAGgpQALhOADghIAAAAQABgHAAgFQABgdgDgXQgEgZgKgRQgBgBgBgBQgBgDgCgCAiLhKQgBAIgBAHQgIA0gIAUQgFAAgBAFQgRgKgNgcQgIgRgOghAj0izQAEgGAKgHAjzCPQAOgRAPgMQAbgWAKgLIAFABQgEAZAGAfAg+CaQgtgEgngDQgNgBgLAAQgogDghAAAj9CcQAFgHAFgGAiRCOQAHgGAVgVQAVgTAJgHIADAAQAEgBADgCQAJAKACATQADAYACAPQgDgBgBAAQABAAACABQADACAEADQADADABgGIAAgBQgDAAgDAAQgDgBgCAAAg5CbQgDgBgBAAAgzCcQgEgBgCAAAgDCsIAHgFQgmgIgRgD");
	this.shape_3.setTransform(33.3,-175.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AgGANQAJgHACgGQABgBABgL");
	this.shape_4.setTransform(8.425,-336.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AC8C5Ig3gEIAAgDIAAADIg2gLIhNgPIBGg0QgEANAGAQQAHAWgBAIIA1AQQADgOANgdQAQghACgRIAqAvQAZAdAKAUIABAIIg5gEgAiTCIIgZgCQgngCghgBQAOgRAPgMQAbgWAJgKIAGABQgEAYAGAgIAZADIAcgaIAdgaIAEAAQAEgBADgDQAJALACASIAEAnIgDAAIACABIhTgHgAB3geIgDgZQgDgZADgTIADgKIBNg2IAJAQQAAAjgdA+QgiBAgIAUIgPhAgAArAfQgNgrgPgbQAQgJAcgTIAHgFIABAkIgHAZQgHAdgFAOgAhqgTIgEgNQgMghgGgDIgPgCIACgPIgCAPQgHA0gJAUQgFgBAAAFQgRgIgNgeIgWgxIgEAAIAHgpIABhCQASAPATAUIAwA1QAgAhAhASIACABIgLBJQgWgDgNgpg");
	this.shape_5.setTransform(33.45,-174.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AD3DIIgBgHQgLgUgYgdIgrgwQgCARgQAiQgNAdgCANIg1gPQABgJgHgWQgGgQAEgNIACgBIAAgFIgCAGIhGA1Ig3gLIAAgBIgGAAIgEgBIgFgnQgCgTgIgKQgEACgEABIgDAAIgeAaIgcAbIgYgEQgGgfADgZIgFgBQgJALgbAWQgPAMgPARIgcAAQAMgLAJgkQADgPAHgpQAKhOADghIAAAAIABgMQABgdgDgXQgEgZgKgRIgCgCQAFgGAJgHIANAKIAGAGIAABBIgIApIgBAHIABgHIAFAAIAVAyQAOAcAQAKQABgFAFAAQAIgUAIg0IAOACQAHADALAhIAFANQANAqAWACIALhIQAaANAdAEQADAAAQgIQAQAbANArIAEAAQAFgNAHgeIAHgZIgBgjIAwghIAEgDIACgBIgDAKIgCAFQgGAOAAAHQAAgHAGgOIACgFQgDASADAZIADAaIAPA/QAIgUAhhAQAeg+AAgiIgKgRQAkgbAGgHIAGABQACAYAFCEQADBiARBXIgHAtIgSgBgABEgZIAEgNIAFAAIgFAAIgEANgAB2hXIAAAAgAjZi2IAAAAgAjmjAIAKgIQADAFAAANIgNgKg");
	this.shape_6.setTransform(33.3,-175.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(37));

	// head
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AF+ltQBFg6CJiFQCJiFBVhpQBWhoA+hHQA/hHAshPQAthOAJhxQAKhxgFgVQgFgViCDHQiCDGjlC6QjmC5iLAUQgRADgPgCQgpgGgTgTQgKgLgagdQhHg7kVgqQgFAAgFgBQgBAAgBAAQAMACAAAJIAAgKAEFqlQgCACgCACQgPARgDAVQgFAkAxBoQAyBoAxAaAEVqyQgJAGgHAHAjhtLQgCgBgDgBQgYgLgVgEQhWgTh1AoQgQAFgZgCQgOAAgdgDQgVAAgQAGQgIADgCADQi4iOgqjlQgrjwgGi0QgGi0ACg8QhJA5hACRQhACSAMCCQAMCCAFBWQAFBXAuBoQAuBoATBFQASBGAeA1QABAEABAFQAEAPAOARQAWAaAdAEQBsAQAwhGQAQgWAWgyQAZg8ANgXQgIgGgIgGQgDAGATAGAjjjoQAECiAIBRQAOCPAtBhQgBAAgCAAQgEgDgCgDAmFkPQgbAnhACcQg7CQhBBPAlDEwQgFgEgBgDAk6EsQgFABgEADQgGADgHAHQgMALgBAHQgCAKAVAQQAWAPADADIAdAFIAFgeQgGgRgWgPQgQgKgIgFAoYDFIgigFQgJAAghAhQgiAkgCAQQgDARAhAuQALAQALALQABABABACQATAVAQAEAo4E8QgBAGABAIQABAJAAAFQALABASAGQASAFAGABQANABAVgdQAGgtgtgBQgRgBgPAKQgPAJgCAPgAjmDxQAeAdAPAgQARAjgFAfQgGAugkATQglAUgzgVAg2SeQArgmAXhAQAZhCAPhtQAIg+ANh2QAHgygEhAQgDhLgSgkQBqgeA+hXQAyhHAeh4QAKgpAdivQAWiCAbhBIAPhtQgJgBgOgHQgPgHgKgBQALgLANgKQAEADAFACAo4Q6QAFgRAOgPQAfgiAGgHQgBAFAFAJQAIAMADAGQADgCAGgHQAGgHAIgGQADABACAFQACAIABACQASACASgNQAbgTAYgIQADAHAFASQAEASABAEQAmgJBNgTQAMAcAGARQAMAegCAPQAcgKABgCQAMgGA6gnQANAMACADQADADgCAKQARAAAagTQAGAJAKAWQAGANAGAFQABgCADgCQABgBAAgBQACgCAAgBIAAgFQgBAEgBAEQgKApgMAoQhBDbhbCVQhRCDirCtQgFAAgBAFQgIg2gaiWQgUhxgJhXQgHg8AFiSQgBhGgNgvQgIgegNgUQgEgGgFgGAo6RDQABgEABgFAojRsQB9BNCcAWQCHAUBNhFAuAqlIgBAKQgGgIgKgDQgGgCgVgDQgZgEhEB6QhEB3gIA4QgfDYAgCZQAXBsBGBzQAnA9ATAgQAhA3AUArQA3B4ADCWQACDBCgClQA/BBBKAu");
	this.shape_7.setTransform(68.6781,-253.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFDA","#000000"],[0.804,1],7.7,61,-6.7,-60.5).s().p("AALJxQgcgFgWgZQgOgSgEgOIgCgJQgeg2gShFQgThFguhoQgthogGhXQgFhWgMiCQgMiBBAiSQBAiSBJg4QgCA7AGC0QAGC1AqDuQAqDmC4COQACgEAIgDIAGASIgQgLIAAABQAAAFAQAFQgNAYgZA7QgWAygQAXQgnA4hQAAQgRAAgUgCgADzGfIAAAAgADzGfIAAAAgADzGfIAAAAgADzGfIAAAAgADjGVIAAgBIAQALQgQgFAAgFg");
	this.shape_8.setTransform(-15.0434,-376.4087);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFDA","#000000"],[0.804,1],-39.4,55.5,42.2,-48.1).s().p("AmOGbQgxhoAFgkQADgWAPgQIAEgEQCLgUDmi6QDli4CCjHQCBjHAFAVQAFAVgKByQgJBxgsBOQgtBOg+BHQg/BGhVBpQhWBoiICFQiJCFhFA7Qgxgbgyhng");
	this.shape_9.setTransform(136.8679,-343.9117);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjJJJQgUhygJhWQgHg8AFiSQgBhHgNguQB9BMCbAXIAEAAQAbAEAZAAIABAAIAAAAQBfAAA8g2QhBDchbCUQhRCEiqCtQgFgBgBAFIgijLgABaClQgZAAgbgEIgEAAQibgXh9hMQgIgegNgUQAFgQAOgPQAfgiAGgIQgBAFAFAKIALARQADgBAGgIIAOgMQADAAACAGIADAKQASABASgMQAbgUAYgHQADAHAFARIAFAXIBygdQAMAcAGARQAMAegCAOQAcgKABgBQAMgGA6gmIAPAOQADADgCAKQARgBAagSQAGAKAKAUQAGAOAGAFQABgDADgCIABgCQgKAqgMAnQg8A2hfAAIAAAAIgBAAgAD2BvIAAAAgAj2A+IAAAAgAgEq1QgDgDgWgQQgVgQACgJQABgHAMgMQAHgHAGgDIAXAQQAWAOAGASIgFAdgAjVrJIgYgGQgSgFgLgCIgBgNQgBgIABgGQACgPAPgKQAPgJARAAQAtACgGAsQgUAcgNAAIgBAAg");
	this.shape_10.setTransform(38.555,-146.2012);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AFHOwIgCACQgDACAAACQgGgFgGgNQgKgWgGgJQgbATgQAAQABgKgCgDIgQgPQg5AngMAGQgCACgcAKQACgPgMgeQgFgRgMgcIhzAcIgFgWQgEgSgEgHQgYAIgaATQgSANgSgCIgEgKQgBgFgDgBIgPANQgGAHgCACIgLgSQgGgJABgFQgFAHggAiQgNAPgFARIgJgMIAJAMIgCAJIACgJQAMAUAIAeQhKgug+hBQigilgDjBQgDiWg2h4QgUgrgig3Ig5hdQhGhygYhtQggiZAfjYQAIg4BEh3QBFh6AYAEQAVADAGACQAKADAGAIIACgKIABAJQAEAPAPARQAWAaAcAEQBsAQAxhGQAQgWAVgyQAZg8ANgXIgGgSQAQgGAWAAIAqADQAZACAQgFQB2goBUATQAWAEAXALIAGACIgDAAQAMACABAJIgBgKQEWAqBHA7IAlAoQASATAqAGQAOACASgDIgEAEQgQARgDAVQgFAkAyBoQAyBoAwAaQgNAKgKALQAKABAOAHQAOAHAKABIgQBtQgaBBgWCCQgeCwgKAoQgdB4gyBHQg/BXhqAeQASAkAEBLQAEBAgHAyQgNB2gJA+QgOBtgZBCQgZBAgrAmQAMgoALgpgAFHOwIABgDIABgFIgCAIIAAAAgABoEdQAVAAARgJIABAAQAkgTAHguIABgOQAAgZgNgbQgQgggdgdQAdAdAQAgQANAbAAAZIgBAOQgHAugkATIgBAAQgRAJgVAAIAAAAIgBAAQgVAAgZgJIgBgBIABABQAZAJAVAAIABAAIAAAAgAkDC3QAMAQAKALIADADQASAVAQAEQgQgEgSgVIgDgDQgKgLgMgQQgegrAAgSIAAgCQACgQAjgkQAhghAIAAIAjAFIgjgFQgIAAghAhQgjAkgCAQIAAACQAAASAeArgAAkCTQgHADgGAHQgNALgBAHQgBAKAUAQQAXAPACADIAeAFIAEgeQgFgRgWgPIgYgPQAEgDAEgBQgEABgEADQgFgEgBgDQABADAFAEIAAAAgAi/CHQgQAJgCAPQgBAGACAIIAAAOQALABATAGIAXAGQANABAVgdQAHgtgtgBIgCAAQgQAAgOAJgADIBeIADAAQguhggOiPQgIhSgEiiQAECiAIBSQAOCPAuBgIgDAAIgHgGIAHAGgAh4jpQg7CRhCBPQBChPA7iRQA/icAcgnQgcAng/CcgAjQOdIAAAAg");
	this.shape_11.setTransform(32.7123,-237.5559);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(37));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AHa0+IAHAMQAwgaBegFQBZgDCOAWQCMAXBwC9QBwC9gQB9QgRB8AFCdQAGCcg/CSQgwBuAjBuQhwFciCAYQiDAYh7BHQh7BIi5BTQglAQgyAGQgzAGhoAgQhmAfiuDoQiKC4gvBUQgDADgBAEQgBACgCACIABAAQAHAOAIASQgDgBgCgBQgGgCgJgEAHciFQggh4gujFQg4jpBEj2QBEj3gdijQgBgJgCgJAIDgEQgHABgHgKQgBgBgBgCQgEgvgIgdQgFgTgGgWAH0gQIgBAAQgOgcgJhZAIDgEIABAAQAGgEAGgFAuwHHQAZABAVADQAHgBAGACQAJAAAJACQAOACAMACQBlAWApAFQAcAEAbADQC9AQCHgjQCHglDNi0QDOi0BdgkQBegkBmgQAnMQvQAhhJAyhEIAJgEQgdBJg/BIQgkAogwAqQgTAQgdAZQgFAFgGAFQAAAAAAABQgFADgFAEQgRAPgSAPQg6A1giAxIgKgXQgBAAgCgCQgnggBSiXQAIgOAHgMQAEgHADgGQAbgwAZglIAAgBQAjg1AfgkQAHgHAGgGQAGgIAHgJQAGgHAGgHIAJgEQgIAKgaAZQgGAFgJAHQABABgBAAQgBAAAAABQghAdg1AsQgtAmgfAZQgCABgBACQgKAHgHAGQgIAGgGAFQgDABgCACQgZATgMAFQgYALgfgIQgbgGgqAJQgQAEgRAFQAuhZAlgaQAagRAdgaQAGgFAHgFQAHgIAIgHQAtgrAtgOQAsgOAMgFQAKgFAMgLQAJgIAKgNQABgDAEgEQAkgzALgNIgEgKQgBABg4ADQgqADgOACQgFABgDABQgRAIgoAhQgnAig+gEQgggCgtAJQgBAAgCAAQgHABgHACQgDABgDAAQgdAHghAMQhMAZhIgHQgYgDgXgGQBLgmAggnQAfgoALgEQAQgIAsgLIABAAQAAAAAAABQABABACAAQADADAEAEQAIAFALAJQAhAZACACQACAHgDAKQAAAEgCADQgDAHgIASQgCAEgCAFAnySWIAAABQABgBABABQAEgBAEAAQA2gFAPgGQACAGAMAUQAEAGAEAJQABACABACQAAACABABQAAABgBACQgGAMgFAKQgdBIg2AiIgcAMIgRAIQAPhxAVhLIAAAAQAAgCABgBQADgMADgKQANgoASgmAvhLcIAAAAQABgBABAAQACAAADgBQAHgCAIgCQAxgMBLgSQAWgFATgEQBDgPAkgIQAjgJADgCQAOgGATgPQAZgVAQgNQgcgPgfAAQgfgBghARQgxAWgngNQgHgCgHgEQgFgCgEgDIAAgBQgBAAgBgBQgtghguASQgGgPgMgQQgUgXgRACIgIgSQgBgIhAgTQgGgDgHgBQhMgYB0gBQApAAAiABQAZAPASANQAGAEAGAEQAIAHAGAFQAEAEADADQAaAbAOAnQADAIACAIAs+PKQADABADACQALADAPAFQAbAHAKAYQABACgCAIQgDAQgOAsAvtLUQACABAJAHAq3RWQACAAACAAQAMADAbAFQAhAFAGAOQAEAHAAAKQgCAHgCAJQgDALgDAHQgBALgBAEAq+RUQABAAAGACAtLPDQAEADAJAE");
	this.shape_12.setTransform(42.8254,43.4014);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF99").s().p("AEMGjQAOhaARg+IACAAIABAAIAIgBQA2gFAOgGIANAXIACADIAJAPIABAFIABADIgBACIgQgGIAQAGIgLAWQgeBIg0AiIgvAUIAFgjgAF8EtQgdBIg3AhIgcANIAcgNQA3ghAdhIIALgXIgLAXgAAwGdQgOgJgBgUIACACIALAXQAigxA6g2IAjgdIgjAdQg6A2giAxIgLgXIgCgCQgEgvA7htIAPgaIADAAIAoAHQATAFAMAFIgEAPIgGASIgCAQIAIAJIAJgIIABAAIgEALIgCAQIAIAIIgjAeQg6A2giAwgAAhGAIAAAAgAGTEyIAAAAgAiUC4IABAAIAAAAIACgBIABAAIABAAQAWgFARAAIAAAAIABAAQALAAAKACIABABIABAAIACAAIACABQALACAJAAIABAAIAAAAQAPAAAOgGIACAAQAMgFAYgTQACgCACgBIAPgLIgMAjIAFAGQgZATgKAFQgZALgfgIQgkgIhCAVIAVglgAg4C4QgJAAgLgCIgCgBIgCAAIgBAAIgBgBQgKgCgLAAIgBAAIAAAAQgRAAgWAFIgBAAIgBAAIgCABIAAAAIgBAAQAhg6AdgUQAZgRAfgbQADABACACIAZAIQAPAEAJAKQgDAQgOAsIAFAHQgYATgMAFIgCAAQgOAGgPAAIAAAAIgBAAgAmUgjIAigTIADABIAdABIAAAAIABAAQA0AAA3gRIAEgBIACgBIABAAIABgBQAigLAcgHIAHgBIAOgDIADAAIgIATQgDADgBAFIABAEQgdAIghAKQg7AVg4AAQgoAAgogLgAlSg0IgdgBIgDgBQAygcAWgeQAggnALgFQAQgHAsgMIABAAIABABIACACQAEACADAEIAUAOQANAJAIAIIgCAHIgLAZIgFAJIABAEQgcAHgiALIgBABIgBAAIgCABIgEABQg3ARg0AAIgBAAIAAAAgAgbk2IAAgCQgughgtASQgHgOgMgRQgVgWgQABIgIgSQgBgIhNgXQg8gTA9gEQBAATABAIIAIASIACgBIAAAAIABAAQAOABAQARIAAABIABABIACABIAAABQANAQAGAPQAQgHAQAAIAAAAIAAAAQAbAAAbATIAFADIACABIAAABIAJAFIAFARIgCAEIAAABgAgmlRIAAgBIgCgBIgFgDQgbgTgbAAIAAAAIAAAAQgQAAgQAHQgGgPgNgQIAAgBIgCgBIgBgBIAAgBQgQgRgOgBIgBAAIAAAAIgCABIgIgSQgBgIhAgTIAngCIBLABQAZAPASANIAMAJIAOALIAHAHQAQARAMAVIAFARIgCADIAAACIAAAAgAkDnDIAAAAg");
	this.shape_13.setTransform(-35.85,136.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("ArWT+IACgPIAGgSIAEgQQAAgKgEgHQgGgOgggFIgogIIgEAAIAIgNQAagwAZglIAAgBQAjg1AfgkIANgNIgPAMIAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIhWBJIhMA/IgDADIgRANIgOALQgDABgCACIgFgHQAOgsADgQQACgIgBgCQgKgYgbgHIgagIQgDgCgDgBIANgKIAPgPQAtgrAtgOQAtgOALgFQAKgFANgLQAIgIAKgNIAFgHQAkgzALgNIgEgKQgBABg4ADQgqADgOACIgHACQgSAIgoAhQgnAig+gEQgfgCguAJIgDAAIgNADIgHABIgBgEIAEgJIALgZIACgHQADgKgCgHQgCgCghgZIgTgOIgHgHIgDgBIAAgBIAAAAIACgBIAFgBIAPgEIB8geIApgJIBngXQAjgJADgCQAOgGATgPIApgiQgcgPgfAAQgfgBghARQgxAWgngNIgOgGIgJgFIAAgBIADgEIgGgQQgOgngZgbIgIgHIgOgMIgMgIQgSgNgZgPQAZABAVADQAHgBAGACIASACIAbAEQBkAWApAFIA3AHQC9AQCHgjQCHglDOi0QDNi1BegjQBdgkBmgRIABAAIAMgJIgMAJIgBAAQgHABgGgKIgCgDIAAAAQgFgvgIgcIgLgpQgfh4gvjFQg4jpBEj2QBEj3gdijIAZgDIAIAMQAvgaBegFQBZgDCOAWQCNAXBvC9QBwC9gQB9QgRB8AFCdQAGCcg/CSQgwBuAkBtQhxFdiCAYQiCAYh8BHQh7BIi5BTQglAQgyAGQgzAGhnAgQhnAfiuDoQiKC4gvBUIgEAHIgDAEIgBgDIgCgEIgIgPIgOgaQgPAGg2AFIgIABIgCAAIAAgBIAAAAIABgDIAGgWQANgoASgmQA/hIAdhJIgJAEQgyBEghBJQgkAogvAqIgxApIgLAKIAAABIgKAHgAqWPYQAagZAIgKIgJAEIgMAOIgNARIAAAAg");
	this.shape_14.setTransform(53.3004,35.9264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(37));

	// arms
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AkL1AIgJALQgtgghdgPQhYgOhVAHQixAQiRCSQiTCTgHCFQgHCDAeCcQAfCbgkCLQglCLAtC8QAsC7AkBJQAjBIAAA0QEPEcBgApQBgAoBJAZQBKAYB0AHQBzAHCmDJQCmDKA8BKQACADAEAEQAAABACADIAAAAQgFAOgFATQAHgEALgGALrGuQgZAFgTAGQgHACgHACQgJABgHADQgPAEgLAFQhgAlgpALQgaAIgbAHQi4AthmgxQhngxkmjuQiziRgsBbQAEjjAag3QAthfCCjrQCBjshSj+QhSj8AjihQADgJADgJAFrRZQgshCg8g9IgJgBQAnBDBKA9QAqAjA2AhQAVANAhAVQAGAEAHAEQAEADAGAEQASALAVANQBCArAoArIAGgYQApgkhtiMQgJgOgJgKQgEgHgEgFQgjgsgeghIAAAAQgrgvglgeQgHgHgGgEQAHADAHAGQABABAAAAQACAAAAABQAlAYA7AkQAyAdAkAVQACAAABACQAUALAOAHQADABADACQAbAPAMADQAZAHAfgNQAigNBEALQg8hSgogTQgbgOghgVQgIgFgGgEQgJgFgJgGQgzgkgugHQgugHgNgDQgLgEgNgJQgKgHgMgJQgDgEgDgDQgsgugOgKIADgKQACABA5gHQAogEAPABQAGAAABABQATAEAtAcQAsAaA7gNQAigHAvADQAHgBAIABQADABADgBQAdADAiAGQBqASBYgnQhQgZgkgjQglgigMgDQgRgEgtgFQgBAAABABIgBAAQgBgBgBAAQgCAAgDgBQgHgBgJAAQgygFhNgGQgWgBgUgBQhFgGgkgCQgjgEgFgBQgOgEgWgLQgagRgTgLQAagSAegFQAegGAjALQA1APAkgTQAMgGAKgJIAAAAQAAgBAAAAQAogoAvAKQAFgPAKgSQAQgaARAAIAFgTQAAgIBIgkQBHgihyAQQgoAGgiAGQgXATgPARQgFAFgFAFQgHAHgGAGQgDAEgCAEQgcAlgFAzAGhS6IgBAAQAAAAgBAAQgEABgFAAQg2AEgPgFQgBAHgJAWQgDAHgDAKQgBACAAACQgBABAAACQAKANAGAJQAoBDA6AYIAxAOQghhugghGIgBgBQAAgBgBgBQgFgLgFgKQgTgmgXgjANHK5IgBAAIAAABQAAAAAAAAQgBABgCABQgCAEgEADQgHAHgJAKQgdAdgBAEQgDAIAJAOQAFAIALAPQABAEADAFANQKuQgBACgIAJAGzOrQgIgHgHgHQgIgHgIgGIgJgCQAKAIAeAVgALKO9QgEACgDACQgJAFgPAHQgYAKgHAaQgCAHAeA7ALVO0QgDAEgIAFAJZRcQgCAAgBABQgMAFgaAIQggALgEAOQgEANAJATQAGAKADAIQAEAKABAEAJgRaQgBAAgGAC");
	this.shape_15.setTransform(-32.1079,37.9055);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AGuUqIgGgHIjikTQinjKhygGQh0gHhKgZQhJgYhggpQhggokPkdQAAgzgjhJQgkhIgsi8Qgti8AliLQAkiLgfibQgeicAHiDQAHiFCTiSQCRiTCxgPQBVgHBYANQBdAQAtAfIAJgKIAXAFQgjChBSD8QBSD9iBDsQiCDsgtBeQgaA3gEDkQAshbCzCRQEmDuBnAxQBmAwC4gtIA1gPQApgLBgglQALgFAPgDQAHgDAJgCIAOgDQATgGAZgFQgXATgPAQIgKAKIgNAOIgFAHQgcAlgFA0IADADIABABQgKAIgMAGQgkATg1gPQgjgKgeAFQgeAFgaATQATAKAaARQAWALAOAFIAoAEIBpAIIAqACIB/ALIAQABIAFABIACABIAAABIgDACIgGAHIgQARQgdAdgBADQgDAJAJAOIAQAXQABAEADAEIAAAFIgGAAQgIgBgHAAQgvgDgiAHQg7AOgsgbQgtgbgTgFQgBgBgGABQgPgBgoAEQg5AHgCgBIgDAJQAOALAsAtIAGAHIAWARQANAJALADQANADAuAHQAuAHAzAkIASAMIAOAJIgHAEIgYALQgYALgHAZQgCAIAeA7IgDAIIgGgDIgigTQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIhWgyIhgg8QAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgBgBQgHgGgHgDIANAKQAlAfArAvIAAAAQAeAhAjArIAIAMIgDABQgMAFgaAIQggALgEAPQgEANAJATIAJARIAFAPIgHALIgKgHIgNgJIg2ghQg2gigqgiQgshDg8g8IgJgCQAnBDBKA+QAXAiATAnIAKAUIABADIABAAIgBAAIgBABIgJABQg2ADgPgEIgKAcQgDAHgDALIgBAEIgBACIgCgEgAIkPrIgPgPIgQgMIgJgCQAKAIAeAVgAO3L5IAAAAIABgBIAAABg");
	this.shape_16.setTransform(-43.4329,31.5555);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF99").s().p("AkCHaQg6gXgohDIgRgXIACgCIAAgEQADgLAEgHIAKgcQAPAEA2gDIAJgBIABgBIAAAAQAhBHAhBtgAh0FgIgogXIAHgLIgEgPIgJgRQgJgTADgNQAFgPAggLQAZgIAMgFIAEgBQAJALAJAOQBsCMgoAkIgGAYQgpgshBgrgAAXDIQgLgDgbgPIADgIQgdg7ABgIQAHgZAZgLIAWgLIAHgEQAiAUAbAOQAoAUA8BRQhFgKghANQgVAIgSAAQgJAAgJgCgAC0hMQgigGgdgDIAAgFQgDgEgBgEIgQgXQgJgOADgJQAAgDAegdIAQgRIAGgHIADgCIAAgBIABAAIAAgBQAtAGARAEQAMADAlAhQAkAjBPAaQg8AahFAAQgfAAghgFgAgok4IgDgDQAFg0AbglIAGgHIALgOIALgKQAPgQAXgTQAhgHApgFQBygQhHAiQhJAjABAJIgGATQgQgBgQAbQgKARgFAQQgvgLgnAoIgBABIAAABg");
	this.shape_17.setTransform(37.1,128.069);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(37));

	// body
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AAi6dQgLAqgYBMQghBmgJAfQgzCqADCAQAGA4AEA0QAGBkgJBLQgEAjgIAeQAaBhCNA3QCZA7DJgNQBJgFA3gSQA3gTA2gEIAAgKAhltVQgCAeAHAbQgsCuicALQgKgFgLgFQhrgwhwgxQj4htgwgIAPQYtQgFgQgHgfQA1hCACiNQACiNhVjwQhVjvgDjrQgDjqgjkYQgkkZANAEQANAEBEi1QBEi1AihFQAjhEARhmQARhngghyQghhxhXi4QhYi6inhqQkrjAqKAhQgcACgcACQhxAHibCKQgpAkg4A8QgdA4gqAoQgZAXgZAhQhEBVguCrQgtCrgIB6QgHB7AfB9QAgB+AQB7QAPB7BhDHQBhDGgPC0QgPCzAvDHQAwDGhICoQhICnAYDuQAYDuATASAg/DHQABADAAAEQAKBrAZCAQAPBPANBHQABAMgGApQgIApABAMQACAcAFAiQAAABAAACQANBbAjCKQAbBnArChAg/DHQAEgBADgBQBEgSBSgFQBlgGCNALQApADC+AWAg+hfQABAZgEBZQgEBaADAtQABAWACAXAqnG9QCQgjB0gxQAogRA+gfQAfgQAmgTQBagwA6gUQASgGATgFAE/K9QANgBALgBQgMABgJAKQgCADgBgMIAAAAQgBgFAZACQARACBEAHQCvAQD2gQQgOABgeAGQghAIgVABAqWNWQAeAIBzgHQAxgDCXgeQBbgRCBgbQAxgKAsgJQDlgwBegKACxcRQAUgSAZguQAchSBUiSQBUiTDbihAoJUTQB6A+BSBTQA2A3AkBBQBaCiASAmQARAmACACQA2A7A3AYQBUgIBTg7Ari5kQglAngrAx");
	this.shape_18.setTransform(13.8274,75.0371);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("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");
	this.shape_19.setTransform(13.8274,75.0371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(37));

	// Layer_7
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AC+65QgzgnhDAAQgzAAhIAnAQMjxQgqg5gtj0QgtjzgEh9QgFh9gLgnQgKgmAZhtQAahsgthVQgthUgOirQgCgYAAgSQgDhtA3B5AJ47WQh0AhiwBqQhAAmhBAsQgJAFgIAGQgiAYgiAYQgUAPgSANQgDACgDACQgzAmgdAZIgBAAQAAABgBACQgCABgCACAwGlFQABgpBRkNQBSkNAWiRQAWiSAPgKQAPgKAdAIQAdAJgZhbQgZhbgHg6QgMhxAphpQA0iEB1gXQBNgQCLBBQBVAoBtBGQBmBCBnBPQAmAeAcAYAgM10QAEAGADAGQADAGACAGAAG1VQgZBjAzCFQAAABABAAQAHATAPAeQgXAsAHBKQACARAAASQgBAXgEAZQABAcgDBKQgCBKATBcQATBdAdETQAeESBACRQBACQALDhAgL1ZQgDAlgPAnAA3w7QAUAogUA/QgKAdgEAVQgGAYABAMQAAAFAAAHQgHAxgTA8QgjB1gSEBQgTEChEDMQhEDOgSD7AQMjxQABgGACgDAQTjqQgDgCgEgFAS9TnQAGgggVigQgbjPgNhtQgFgwgLjdQgKjVgDgQQgBgFgFgZQgNg/gpi5QgmipAFgrAFJSoQALAAB3gJQB3gIAaAFQAVAFAMAMQAMANAVAFQAQADBxgQQBQgGBUAIQBDAGBHAPQAgAHAfAPQAfAOAKACIgGgLAEOIoQAGAdgSClQgSClAGBtQAGBtAfgmQAeglgFAhQAAACgPAXQAAAAAQAaQAOAXgLAXQABgBACAAQABgBABgBQAFgCADgIAE5SvQABgCAAgDIAAAAQAAAAAAgBQAAgEABgGAE5SvIgEgBIAFgFAFMSzIgTgEAMPcJQhBADi2gHQjTgIhKgQQgWgFAGibQAChFAFgzQAEgqAFgeQAEgaAchCQAag9ABgBQACgPAAgYQABgQAAgNATCT3QgCBeAtDcQAVBqAWBbQABAEABAFQgBAEgEADQgaAWiugGQitgFiLgXIgBAAIAAAAQgzhxgFgOQgKgfgGgiQgJgzABg5QAEABgDAUIAHABAMUb6IAAAAQgHgBgHgBQABgIAGAFQACACAFADAMVb7IAAgBAMUb6IABABIAWAFQgPAAgIgBQgCAAgDAAQgKgCABgFIAPADAMGb4QgGgBgFgCAwFlFIAAAAIAAABQAAAAAAgBIgBAAQAAgBgBgBQABABAAABAwGlFQAAgBgBgBQgBgBgBgCQABABAAABQABAAAAABIACACIgBAAAwElAQAAgCgBgCAykTIQgDgggPiyQgOiyAkhTQAkhSAtjeQAtjeACgPQAEgTgLjYQgKjZAshVAjaIRQgBAeACAgQACAggFBGQgFBHACCOQACCPgfAKQgfALAPAXQAAABgRAZQgQAYAKAXQgCgBgBAAQgBgBgCAAQgDgDgDgIAk0SXQgLgBh1gLQh2gKgaAFQgWAEgMANQgNANgUAEQgQADhwgSQiMgMifAfQghAHgfANQggAOgJACIAGgLAklSYQAAgBAAgBQgBgEAAgFAsTb1QBAAEC1gEQDRgFBLgPQAWgEABieQABh+gIhDQgCgagYhDQgZg+AAgBQgBgPABgZQAAgPAAgNIAEgBIgEgFAklSeQAAgDAAgDAkzSgIAOgCAypTYQgDBfg3DeQgbBugbBgQADAeDHgDQCsgDCLgVIAAAAIAAAAIABgBQA3hwAGgOQAbhGAEhUQABgKAAgKQgEAAADAUIgIACAr/biIgLACQgBgIgFAEQgBABAAAAIgGAFQAHgBAGgBAsYbnIgBAAQABgBAAAAAsYbmIAAAAIABAAAsYbmIAAABAsZbnIgWAEQAPAAAIAAQADAAACAAQAKgBgBgGIgOAD");
	this.shape_20.setTransform(19.825,358.5359);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#57280E","#000000"],[0.804,1],0,-29.3,0,29.3).s().p("AoWEiQAbhgAbhuQA3jdADhfIALgLIADADQAJgCAggOQAfgNAhgHQCfgfCMAMQBvASAQgDQAUgEANgNQAMgNAWgEQAagFB2AKICAAMIABAJIAOgCIAAAcQgBAZABAPIAZA/QAYBDACAaQAIBCgBB+QgBCegWAEQhLAPjRAFQi1AEg/gEIAAgKQAKgBgBgGIAKgCIgKACQgBgIgFAEIgBABIgGAFIgBAAIAAAAIABgBQA2hwAGgOQAahGAFhUQgFBUgaBGQgGAOg2BwIgBABIAAAAQiMAVirADIgnAAQigAAgDgbgAA/AOIAIgCIAAAAIABgTQgEAAADATg");
	this.shape_21.setTransform(-57.2632,505.8347);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#57280E","#000000"],[0.804,1],0,-29.5,0,29.5).s().p("AFME+QitgFiLgXIgBgBQgyhwgFgPQgKgegGgiQgIgwAAg0IAAgHQACAAAAAHIgBAMIAHACIgHgCIABgMQAAgHgCAAIAAAHQAAA0AIAwQAGAiAKAeQAFAPAyBwIgHgFQgGgEgBAHIgKgCIAKACQgBAGAKABIAAAKQhAADi2gGQjTgJhKgQQgWgEAGicQAChEAFgyQAEgqAFgeQAEgbAchCIAbg+QACgOAAgZIABgcIATAEIgTgEIAQgHICCgKQB3gIAaAFQAVAFAMANQAMANAVAEQAQAEBwgRQBQgGBUAJQBDAGBHAPQAgAHAfAOQAfAOAKACIAEgDIAJALQgCBfAtDbQAVBpAWBbIgDAQQgVAShzAAIhAgBgAAFEfIAAAAg");
	this.shape_22.setTransform(96.7009,508.1838);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663333").s().p("ATgEoIACAJQgBAEgEADgALcEsIgHgFIAHAFIAAAAgAtQEYIAAAAIABAAIgBAAIAAAAIAAAAgArzAAQgCgUAEAAIgBAUgASBjhIADgDIAHAOgAzZkDIADADIgLAMgAlsk2IAPgBIAAACIAAAGIgNACg");
	this.shape_23.setTransform(25.4,507.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("ASKXzQgfgPgggHQhHgPhDgGQhUgIhQAGQhxAQgQgDQgVgFgMgNQgMgMgVgFQgagFh3AIIiCAJIgQAHIABgFIAAAAIAAAAIABgLIACgCQAFgCADgIQgDAIgFACIgCACIgDABQALgXgOgXIgQgaQAPgXAAgCQAFghgeAmQgfAlgGhtQgGhsASimQASilgGgdIgCgKQgLjhhAiQQhAiQgekTQgdkSgThdQgThdAChKQADhJgBgdQAEgZABgXQAEgUAKgeQAUg/gUgoQgXAsAIBLQABAQAAASQgFAVAAANIAAADIAAAKIAAABQgHAxgSA8QgkB1gSEBQgTEBhEDOQhEDNgSD7IgCAJQgBAeACAgQACAggFBGQgFBHACCOQACCPgfALQgfAKAPAXIgRAaQgQAYAKAXIgDgBIABAJIgPABIiAgMQh2gKgaAFQgWAEgMANQgNANgUAEQgQADhwgSQiMgMifAfQghAHgfANQggAOgJACIAGgLIgGALIgDgDIgEgDIgCgCIgRjSQgPiyAkhSQAkhTAtjeIAvjtQAEgTgKjZQgLjZAshTIAAgBIgCgCIACACIgCgBIgCgEIACACIAAABIACACIAAAAQAAgpBSkNQBRkNAWiRQAWiRAPgLQAPgKAdAJQAdAIgZhbQgZhbgHg6QgMhxAphpQA0iEB1gXQBNgPCLBBQBVAnBtBGQBmBCBnBPQAmAeAcAYIAAALIgGAEQgzAmgdAZIAAAAIgCADIACgDIAAAAQAdgZAzgmIAGgEIAmgcIBEgwIARgLQBBgsBAgmQCwhqB0ghIC7AoIACApQAOCrAtBUQAtBVgaBsQgZBtAKAnQALAmAFB9QAEB9AtD0QAtDzAqA4QgFArAmCpIA2D5IAGAeQADAQAKDVQALDdAFAwIAoE8QAVCggGAgIgBACIgDADIgEADIgGgLIAGALQgKgCgfgOgAkrWgIADABIgDgBQgDgDgDgIQADAIADADgAwHgwIAAAAIACAEIgCgEIAAgBIAAABgAAetZIABABQAHATAPAeQgPgegHgTIgBgBQgihYAAhKQAAglAIghQgIAhAAAlQAABKAiBYgAgfv5QAPgnADglQgDAlgPAngAgGxFIAEgDIgFgMIgHgMIAHAMIAFAMIgEADgAwHgwIAAgBIAAABIAAAAgAAipeIAAAAgAAipfIAAgKIAAgDQAAgNAFgVQgBAXgEAZIAAgBgAg12lQBIgnAzAAQBDAAAzAng");
	this.shape_24.setTransform(20.0202,330.9059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(37));

	// neck
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("AjRkrQgeioCChXQB2hQBgAAQCeAABNB9QA6BfgjCzQgjC0BUDWQBUDYAgAIQAgAIigB7QidB5iAAAQkOAAiIgTQhOgKgygTQglgOgXgTQgtgkgHhMQgDgvAFh9QAAhHAtgvQAUgVAtgkQAQgMATgPQB+AAAnhiQAohkgeipg");
	this.shape_25.setTransform(24.0291,-121.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AkjJpQhOgLgygTQglgOgXgSQgtglgHhMQgDgvAFh9QAAhHAtgvQAUgVAtgkIAjgbQB+AAAnhiQAohjgeipQgeiqCChWQB2hQBgAAQCeAABNB+QA6BegjCzQgjC0BUDWQBUDYAgAIQAgAIigB7QidB5iAAAQkOAAiIgSg");
	this.shape_26.setTransform(24.0291,-121.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.6,-440.1,321.9,981.2);


(lib.satan_side = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_9
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(663.15,-693.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(256.5,-825.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape.setTransform(84.8,472.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EACZAqhQg3jggChbQgDhcAGhrQggB1gEAHQgFAHgxCQQgvCQhNBKQhMBKggAyIgBABIgEgBQgVgJgbgdQgcgegbAAQgGAAgKACQgJADgFAAIgIgDIAAAAIABgEQALgyAQhRQAQhQAXg5QAYg5AJgNQAJgNAYgzIAeg/QADgFABgQIgFgtIAAAAIAFAgIAAAAIAAAAIAAAAIgDgwIADAwIAAAAIAAAAIAAAAIgFggIAAAAIgEgeIAGAOIgGgOQgEBXgWAXQhFBMgjAwQgkAwhIBTQhJBTgiAPQgiAOgVAQIgEADIgCABIgCABIAAABIgBAAIAAAAIAAAAIAAAAIAAgBIAAgBIAAgDQABgHgDgJQgHgXgaggQgrgygrAAQgSAAgPAEIgEACIgBAAIgBAAIgCABIgCABIgCABIgBAAIgBABIgBAAIgBAAIAAAAIgBABIAAAAIgBAAIABgBIAAAAIAAAAIABgBIAAAAIAAAAIABgBIABgBIABgBIABgCIACgCQABgCADgjQAEgjBvh7QBvh6A3iJQA3iIAVggQAUggAshXQAshXAhhcIAfBVIgehXQgCglgXiEQgZiOAAhUIAFg1IAFg0QAAgKgRiEQgSiEAAhCIAKjBQAAgvgXiHIgfikIgBgGQgMh7gQh2QggjqAAisQAAhOAJghQAFgQhEjTQhVhphtiPQhtiPgfhxQgehyhVmIQhVmIAAgwQAAkiDki5QDsi+GAAAQEFAACbAsQCcArBVBGQBWBFA4B0QA5B0AeCyQAVCAAYCvQAXCwAlB7QAkB7gbEJQgcEKgnBGQgnBHgcAXQgcAYgNAbQgJATgIANIgEAGIgBAAIAAABIAAAAIAAAAIAAABIgBAAIAAAAIAAAAIAAABIAAAAIgBAAIAAAAIAAAAIAAABIgBAAIAAABIAAAAIgIALIAAAAIAAABIgMAXIgBABIgCAEIgFANIgBABIgHARIAGACIgIATIAOggIABAAIgOAhIAAAAIAAABIABACIAAACIAAABIABADQAAADAIADQAHADAKAsQAKArAPD5QAOD3AAB7QAAANgKBzQAAAMAKBzIgFAwIgFAvQAAANAKBrQAAA/gRAqQgEAJgiA6Qg3BdAAC8IADA1QADApADAUIgEABQAAAUAFAnIAFArQAACCg0BtIgPAeIAAABIAAgBIgDAGIAAABIgKATIg7BZQAxhBALgXIAAgBIACgDIAAgBIAAgBIAHgNIAAgBIADABIAAASIAAABQACBcARAyQgEBfBZAKIBWBMQBFA+ApAyQApAyBiB+IBhB8QAmAvAKCkIAAAAIgRABQgagBg0ARIgaAIIgvAPIgCAAQgggpg0hfQg1hgg7g0IgfgbIAAAAIgbg3QAKAZALAZIgIgHIAIAHQAQA5AaA/QAZA/ANCKQAMCLgZAeIAAAAIgLACQgfAAgXgKQgXgKgXAAQgXAAgOACIAAAAIgDAAIAAAAQg4gpg7hqQg6hpgaiaQgHgtgMAVIAJguIAAgDIgBgCQgDgPgBgCIAAAAIgBAAIAAAAIAAAAQgEABABBDIAAAAIAGA2IACAQIANBNQAMBMAABBQAABBggBaIgEAwIAAAMIgOAAIgNgNQgJgHgPAAQgbAAgYANIgvAbIAAAAIgKABIAAAAIADAmQgLgfgWhYgEgDKAjPQACgJAAgKQAAgOgFgPQAFAPAAAOQAAAKgCAJgAjkcHIgXhCIAXBCgAmbpJIACADQADADAFAAIgRgWQAAAFAHALgEAFZAjmIAAAAgEAFZAjmQgBhDAEgBIAAAAIAAAAIABAAIAAAAQABACADAPIABACIAAADIgJAugEgDPAivIAAAAg");
	this.shape_1.setTransform(88.1875,444.8125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFDA","#000000"],[0.804,1],-2.7,-10,2.7,10.1).s().p("AgZgWQgmhEghg/IgHgNIAAgBIACAAIAvgPIAagHQAzgSAaABIARgBIAGBhQAKDtAWBRIiBjmg");
	this.shape_2.setTransform(186.5875,716.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AqVABIAaAUIhABQQASgyAUgygAKLgkIgFgIIAAAAIgRgkIAAAAIAugUQAAApAZCFQgmhWgLgYg");
	this.shape_3.setTransform(97,764.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFDA","#000000"],[0.804,1],-5.4,-20.2,5.4,20.3).s().p("Ahhi9IgBgLQAPgBAXAAQAWgBAXAKQAWALAggBIAAAGIAAgGIAKgBQAyEAAABuIguAUQg5iDhdkFg");
	this.shape_4.setTransform(154.6375,735.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFDA","#000000"],[0.804,1],0,-23.3,0,23.3).s().p("AhBiRIgKhdIAAABIABACIAAACIAAAAIAAAAIABACIABABIAAAAQADAHABABIABAAIAAAAQAEgBgEgsIAAAAIAAgHIgBgDIABADIAAAHIAAAAQAEAsgEABIAAAAIgBAAQgBgBgDgHIAAAAIgBgBIgBgCIAAAAIAAAAIAAgCIgBgCIAAgBIgDglIAAgBIAKgBIAAAAIAugbQAYgNAbAAQAPAAAJAIIANAMIANABIAAAAIgEBFQgHCAACBqQADBrhWDMQghksgTijgAhLjuIAAAAg");
	this.shape_5.setTransform(114.4,752.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFDA","#000000"],[0.804,1],17.8,-17.8,-17.8,17.8).s().p("AiZAhQAPggAwg6QAwg7AfgiIA2g9IAvg1IAEgEIACgCIAAgBIABAAIAAAAIABAAIAAgBIABAAIABAAIABgBIACgBIADgBIACAAIAAAAIABgBIAEgBQAPgFASAAQArABArAyQAbAfAGAYQADAIAAAIIAAADIAAABIAAAAIgBAAIAAABQgwAlgmAiQg6A0gmAYIiUBYQhvBChdCIg");
	this.shape_6.setTransform(-0.6358,729.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFDA","#000000"],[0.804,1],5.2,-19.2,-5.1,19.3).s().p("AirDQQA7iSBPiRQAzhcANgzIAIADQAFAAAJgCQAKgDAGAAQAbAAAcAeQAbAdAVAJIgUAjQgbAjg9BIQgXAfgPAjQgKAWABADQABADhKBBQhLBBgJAPIgGAIg");
	this.shape_7.setTransform(48.0625,743.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("EALjgohQABgLgJgsQgShcllpLANT/2QALh5gBhzQgKB1AAB3QAAEegGDAQgGC/AFBKQAFBJAcDIQAbDIAYGiQAYGhBCFqQBCFrAxH7QAwH5BbEYQAVBDATA/QA9DMAmCwQAwDkBgFmQkJBAiXgFQiXgGgxgdQhakuhZmdQgThVgQhSQgEgSgDgTQgEgBgDAAEAKxAggQhqpYATlFQATlFgJmtQgKmugcjlQgcjlA2jwQA2jwAbiZQAaiZBOldQAxjZARjHEANdgjiQALjPiFhwQBmBwAUDPgEgWQguhQAAAAABAAQAdgKAxhBQg/AugQAdQAAAAAAAAQg/BxgPBrQgIA7gMBMQgMBNgREFQgQEFBSCzQBTCzBpBqQBpBrABACQCUDvCkGiQCkGhgqGpQgqGpg8F2Qg8F1gHDaQgHDagjEpQgSCXgJB6QgIB1gBBYIgHCXQAFB9gNBNQgUCCgdBsQgSBHAAAuQAABeNIA4QGmAcHBAKQBqAABng5QBjg2AGhDEgP6AiTQAHASAQAOQAiAeBHANQBaATEBALQFjAOA+AAQFfAAD7hfQBjgnA9gtQAngeAOgZQAFgKACgIEALOAi3QgQhMgNhLEAQvAjgQggAAg9gFQh6gJiKgbEAQvAjgQAGABgDAFQgDAJAAgPgEAUVAh3QgEAshRAgQhIAchJAB");
	this.shape_8.setTransform(125.9444,944.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#57280E","#000000"],[0.804,1],-41.8,0,41.9,0).s().p("AADIAQiXgGgwgdQhakuhamcQgShVgRhSIgGglQCKAbB6AJQA9AFAgAAQAAAPADgJQACgFgFgBQBHgBBJgcQBRggADgsIAMgGQA9DLAmCwQAwDjBgFmQj0A7iUAAIgYAAg");
	this.shape_9.setTransform(239.55,1211.3466);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#57280E","#000000"],[0.804,1],-101.3,-0.1,101.3,-0.1).s().p("AisJJQtIg3AAheQAAguAShHQAdhtAUiBQANhNgFh8IAHiXQABhZAIh1QAiAeBHAOQBaATEBALQFjAOA+AAQFfAAD7hgQBjglA9guQAngeAOgZQANBLAQBMIgHgBIAHABIAHAlQAQBSATBUQBZGdBaEuQgGBDhjA2QhnA5hqAAQnBgKmmgdg");
	this.shape_10.setTransform(118.525,1214.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("EgGmAqVQkBgLhagTQhHgOgigeQAJh5ASiXQAjkqAHjZQAHjaA8l2QA8l1AqmpQAqmqikmhQikmhiUjwIhqhsQhphrhTiyQhSizAQkFQARkFAMhNIAUiHQAPhrA/hxIABAAQAdgKAxhBQAFAUAQgDQAQgCADAjQAEAjAZgGQBWgQApgMQBGgTA2gZIAtgXQAbgOATgGQAWgHAhgEIA5gIQAWgEArgLQAngJAbABQAdAAAqAMIBGAUQAkAIA6AFQBNAEATADQBgANCQA5QDMBRAkALQBuAjCeATQBiAMAlAJQBJASA0AlQgIAUACAYQACAaANAVQAFAIAGAGIAEAHQANAVASAFQAOAFAOgFQAJAsgBAKQBmBxAUDPQgKB1AAB2QAAEfgGC/QgGC/AFBLQAFBJAcDIQAbDIAYGhQAYGhBCFrQBCFrAxH6QAwH6BbEYQAVBCATBAIgLAGQgEAthRAgQhIAchJABQggAAg9gFQh6gJiKgbQgQhNgNhKQAFgKACgJQgCAJgFAKQhan9AAk3QAAg3ADgyQANjZAAkIQAAiDgDiPQgKmvgcjkQgJhPgBhPQAAiZAkieQA2jwAbiYQAaiZBOldQAxjaARjHQgRDHgxDaQhOFdgaCZQgbCYg2DwQgkCeAACZQABBPAJBPQAcDkAKGvQADCPAACDQAAEIgNDZQgDAyAAA3QAAE3BaH9QgOAZgnAeQg9AthjAmQj7BglfAAQg+AAljgOg");
	this.shape_11.setTransform(113.8194,903.1952);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer_3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("EALkgqgQACgBACAAQAtAPCgCLQCfCLCdFnQCcFnANFTQANFTgGAFQgFAEgEB+QgDB/g8BeQg7BegBAAQgcAIgeAKIAAAAQgJADgJADQgOACgPAEQAAABAAAAQAAAAgBAAQgPAEgRACQgJABgNABQgTABgcAAQhSAAg4gQQgMgEgNgFQgfgMgigUQhKgrgUgJQhAgfhSgUATRouQgNAFgPAFQAAAAAAAAQAAABgBgBQgbAKgcAMQhsArhThDQgKgIgJgJAUdpGQAAABAAAAQgRATgSAVAUdpFQgvDAARBNQAKAwAcA2QAdA4AKApQASBJAAB7QAABagtFcQgBAKgBAJIAAABQgHA0gFAsQgLBUgHA6QgJBMgDAcQgBALAAAEQAABmARA6QAFAOAGANQAJATAMASQADAFACAFQAAAAABAAQAXAsAIAaQAEALAAAIQAAAAAAABQABABAAABQAAAWgagJQgIgDgIgCQhIAFhKAeQgzAVg3AGATQItQABgBAAAAQAFgEADgDQAHgFAGgGQAMgLA7ANQABABAAgBQABABAAAAATQItQAMgEAKAAQA6gDADBXQABA2gTBYQABA1gNAzQADBkALAoQAKApADAVATQItQg+APhKAMQhIAMgkABIgOAAQgCAAgCAAQhGgBgSgCQhLgJgtAjIg/AAQguAPgcANQgbAMgdgFQgdgFg1gIQg1gHhEgrQhEgqhAhdAU1TQQgygOgLATQiCApg4APQgCAAgDABQhbAXhfAJQhfAKlEgcQlDgbAaiLAU1RiQADAFADAEIAAAAQAeAnAIAWQACADABADQAAABAAAAQADAJACAKQABAAAAABQAAABAAACQAIAlAAA2QAAAggpCWQgmCNgLAWIAAB5QAAAEgBAEQgWCSApETQAqESiDCoQgCABgCACQgJAGgNAKQgQAOgMAAQgCAAgygMQgygNgwAAQgvAMg1ANQhpAYgjABQhbAEkLgDQjZgCAAAGQADAAACAAQgDAAgCABQAAAAAAgBEgODAkJQAGAFAFAEQAbAYAZAgQARAWAjAqQBEBOCDA6QCtBNEaAjQC2AXCiAAEADWAqaQgCABAAADQACAKAAgOgAUYbzIAAAJIAKAAAUgbJQgEAUgEAWEgOIgpNQiQBLhzB4QiICOhJC7QhGC3AADGQAAAmAlDgQBJGuAHAsQBuKvgbC7QgpEUA1EAQAiCqBtEKQB9E2AoCMQBQEWAAElQAAAogNCQQgNCXgOBz");
	this.shape_12.setTransform(76.5582,438.0784);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("EgCCAqHQkagjithNQiDg7hEhNIg0hAQgZgggbgYIAGgGQAOhyANiYQANiQAAgoQAAklhQkVQgoiMh9k2QhtkLgiiqQg1j/ApkVQAbi6huqvIhQnaQgljgAAgnQAAjGBGi2QBJi7CIiPQBzh4CQhKQABAHADAIQAJAVATAIQAWAKAfgJQANgEAngSQBCgeBKgHQAagDBAAAQA6AAAggFQAVgDAtgMQArgKAYgDQAegEAmACIBFAGQDiAVDogKIBWgDQAwAAAlAGIAvALQAeAHARADQAbAEBCAAQArgBAUgIQAQgGALgLQAMgNACgPQABgMgEgLIAEgBQAtAPCgCMQCfCLCdFmQCcFnANFUQANFTgGAEQgFAFgEB+QgDB+g8BeIg8BfIg6ASIAAAAIgSAGQgOACgPAEIAAAAIgBABQgPAEgRACIgWACIgvAAQhSAAg4gQQA4AQBSAAIAvAAIAAAQIA3gVIABAAIAAAAIAcgKIASgGIAAAAIA6gSIAAAAIgjAoIAjgoQgvDBARBNQAKAwAcA1QAdA5AKApQASBIAAB7QAABbgtFcIgCATIAAAAIgBAAIgBAAIgBAAIgBgBIgBAAIgBAAIgBAAIgEgBQgUgEgOgBIgDAAIgDgBIgBAAIAAAAQgPABgGAFIgNALIgIAGIgBABQAMgDAKgBIAEAAIAAAAIAAAAQA2ABADBUQgDhUg2gBIAAAAIAAAAIgEAAIAAgOQAGgFAPgBIAAAAIABAAIADABIADAAQAOABAUAEIAEABIABAAIABAAIABAAIABABIABAAIABAAIABAAIgMBhIgSCNIgMBpIgBAOQAABmARA6QAFAOAGAOQAJATAMASIAFAJIABABQAXArAIAaQAEALAAAIIAAABIAAAAIABACIAAABQAAAPgNAAIAAAAIAAAAIgKgCIAAAAIgCAAIgBAAIgQgFQgygPgLATQiCAqg4AOIgFACQA3gHAzgVQBKgeBIgEIAQAFIABAAIACAAIAAAAIAKACIAAAAIAAAAQANAAAAgPIAAgBIgBgCIAAAAIAAgBQAAgIgEgLIAKgDIAFATIABABIAAADQAIAmAAA1QAAAggpCWQgmCOgLAVIAAB6IgBAIQgWCSApESQAqETiDCoIgEACIgWARQgQAOgMAAIg0gNQgygMgwAAIhkAYQhpAZgjABQhbAEkLgDQjZgDAAAHQiigBi2gWgAM/U1QAmAAAYgCIACAAQBfgKBbgWQhbAWhfAKIgCAAQgYACgmAAIgBAAIgbAAQhWgBiNgLIgagCIgbgCIgYgCIAAAAIgGgBIgFAAIgBAAIgFgBIAAAAIgDAAIgDAAQkrgZAAh6QAAgJACgLQgCALAAAJQAAB6ErAZIADAAIADAAIAAAAIAFABIABAAIAFAAIAGABIAAAAIAYACIAbACIAaACQCNALBWABIAbAAIABAAgAJKKVQATAAARgHIAAAAIADgCQAcgMAugQIA/AAIABgBIABAAQAjgbA2AAIAAAAIAAAAQANAAAPACIABAAQASADBGAAIAEAAIAOAAQAkgBBIgLQBKgMA+gQQg+AQhKAMQhIALgkABIgOAAIgEAAQhGAAgSgDIgBAAQgPgCgNAAIAAAAIAAAAQg2AAgjAbIgBAAIgBABIg/AAQguAQgcAMIgDACIAAAAQgRAHgTAAIAAAAIAAAAIgPgBIgCAAIhSgNQg1gHhEgrQhEgrhAhdQBABdBEArQBEArA1AHIBSANIACAAIAPABIAAAAIAAAAgAQtn5QAkAAAogPIAEgCIgEACQgoAPgkAAIgBAAIAAAAQg5AAgwglIgBAAIgBgBIgDgDIAGgIIgZgIQgfgMgigUQhKgrgUgJQhAgghSgUQBSAUBAAgQAUAJBKArQAiAUAfAMIATAQIADADIABABIABAAQAwAlA5AAIAAAAIABAAg");
	this.shape_13.setTransform(76.5582,437.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape_14.setTransform(102.8182,-55.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFDA","#000000"],[0.804,1],23.8,69.5,-24.9,-69.5).s().p("Ak5NVQgygtgtgmQAkgXBIhUQBqh6CTktQCSksAbkcQAckcgVguQgVgvgegtQgbgsgTg0QByAXBzAzQB0AyARBEQAJAyACA8QgCg8gJgyQAJASABAUQACAdgBArQgDBZgQCWQgIA7gOBBQg/E2g6BqQg6BrhIBrQhLBvhfBpQiICUhyBCIgKgKg");
	this.shape_15.setTransform(185.377,-241.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFFDA","#000000"],[0.804,1],-42.2,108.6,33.9,-108.5).s().p("AoIOqQhMgzhGjsQAEhKATgtQAZg9A0AAQAtAABfBQIAYAUIAWgMIAEgCQByhDCIiUQBghoBKhwQBIhqA6hqQA6hrA/k2QAOhBAJg7QAUiHgChoQABgrgCgdQgBgUgIgSIgDgMQCeByBJBxQBKBwAgDfQAgDeh8C7Ii1ENQg6BVhLBLQiQCQhtBWQhrBWg4AuQguAmg2AUQAYBbgsARQgrAShXAfQghgBhLgygAmDN5IAAAAIACAAIAAAAIgBAAIgBAAgAl4NTQA8AAA2gTQg2ATg8AAgAoiJjQBDAABNgoQhNAohDAAQgeAAgUgUQAUAUAeAAIAAAAg");
	this.shape_16.setTransform(192.6676,-210.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AvtdwQgqgtgYg1QgTgqAAgXQAAg+APhhQAQhsATgeQAfhNAKgmQAJgnAjgaIAEgJQAchFBHhxQBIhygGgaQgFgaATghQAUghgHgUIgJgYQAHgSAFgnQAFgmAAgMQAAh5gnhNQgagygbhvQgbhvgvhcQgvhdh5hDQh5hFhpjVQhqjWggjiQggjiBVjKQBWjLCDi4QCEi5A6gaQA6gZDthlQDthlEmgUQElgUBWAsQBWAtBiBUIB7BoQgIAFgHACQAHgCAIgFQAtAmAyAuIAKAJIgEADIgWAMIgYgVQhfhQgtAAQg0AAgZA+QgTAtgEBJQBGDsBMAzQBLAzAhABQBXgfArgSQAsgSgYhbQA2gTAugmQBEBLASAfQAwBUBNDpIAKAbIAOAuQBkCWBkBPQBlBPAXA2QAWA3AjDfQh4AIg+gDIgBAAIgbgCIgKgBIAAgMQgPAAgdgKQgdgKgMAAQgIAAgZAIIgOAEIgBABQgWAIgPAJIACAMIgGABIgEABIAEAEQBmBhgwC8QgVBSggBXIgMgEQgggNhYgqQhbgrgdgRQgWgOhvhRQhJg2giAAQglAAgkBlQgeBSgCApQgBAdg3BQQg2BQAKA4QALA3BrBGQBrBFBEAaQBFAaATgGQAUgGAdAQIAFAFQA2BFAXA4IgTgSIgLgJQAIgDAAgFQgGAAgCgFIgCgFIgUAAIAUAAIACAFQACAFAGAAQAAAFgIADIgWgSIAWASQgHACgPAAIAAAFIgOgZIAOAAIgOAAIgGgKIAAAKIAGAAIAOAZIABABQAHAMACAOIgJAIIgBAAIAAgjIAAAjIABAAIgMAIIAAAAQgFACgEAAQgMAAgIgKQgHgKgMAAIAJgUQAQAKAJALIAOARIgOgRQgJgLgQgKIgJAUIgBAAIABAAIAAAAIgBAAQgTAAgRAGIAKgKQAHgKAAgQIgBgKQAEADAHADIACABQAJADALAAIAAAAIABAAIAEAAIACAAIgCAAIgEAAIgBAAIAAAAQgLAAgJgDIgCgBQgHgDgEgDIABAKQAAAQgHAKIgKAKQgZAKgSAYQgVAcAAAWIABAQQiShGj1imQANDHAZAmQAZAnALAjQAMAiANAZIAAAtQgGgHAoCHQApCLBIBnQA3BOAZA8QAaA7A6CXQA7CYi+AxQi9Ayh7AEQhHADgYgDIASgEQglAAijgPQikgPgPAAQguAAgrALIhPAaQh0AmitAAQjXAAh6iCgAP3muQgQAggVBzQAVhzAQggQAfg/BNAAQBHAAAaAXQAMAKAuBNQguhNgMgKQgagXhHAAQhNAAgfA/gAIisQQBBClgNBqIAKAKQA7gTCNg/IABAUIAAACIAAABIgBAJIABgJIAAgBIAAgCIgBgUIAlgRQAjgNAfgJIAEAKIADALIgDgLIgEgKQAxgOAmgDIABAEIgBAEIABgEIgBgEQgBg2gThnQgVhtABg4IgBgHIAHgBIgHABQgfAHhEAAIgSAAQg1gDhbgPIgIgMIAIAMIg7gLIjHgpQBICfAkBagAPhv6IABAAIACACIAfAUIAyAhIgyghIgfgUIgCgCIgBAAIg3gjIA3AjgAFS4vIgegeIAeAegAM9LHIgBgBIAAgFQAPAAAHgCIALAJIgWAXIgBACQgCgOgHgMgANdLIIAAAAgAMoKtIAAgKIAGAKg");
	this.shape_17.setTransform(92.1506,12.51);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiQC0IARgQQAegYApgUQAdAWALA3QANBHAGAMIAUAAQABgOASgkQASglANgNIAeAAQAAAUAFAtQAFAtAAAUQiegHhjh7gAjdCCQg3gRgQgXIAGgFIAAgKQAaAFAsgJQApgIAYgNIAIARQAHAPAAADQAAAGgNAjQgHAVgDARQgZgXglgLgADIAnQgFgfgCgcIAAgTIgYg5IgQAbIgBAcQgKBfhPAaQAAg3gQg9IgWhdIgFgIIgJgMIAGgpIgOAVIgGAPQgTAwgEA1IAABdQgEgKgvhoQgRgngUhDQAFAQgCgPIgEgaQAGh5gQAmIgBgVQA0A4BbA/QApAcAxAeIA+AkIABABIADACIABAAQBOAsAQAAQAMAAALgCIACAMIguBbQgcA3gGADIgNhHg");
	this.shape_18.setTransform(161.725,36.9875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AANOAQhik8Anh9IADABIABABIADABIANAGIAAAAIACABQBXAoAwABIADAAIABAAQAeAAAOgQIABgBQAWgdAAgnQAAgjgSgqQASAqAAAjQAAAngWAdIgBABQgOAQgeAAIgBAAIgDAAQgwgBhXgoIgCgBIAAAAIgNgGIgDgBIgBgBIgDgBIAAgQQAAgWAUgcQASgZAYgJQARgGAUAAIAAAAQgNAZgHAMQgLARgSAAIgBAAIAAAAQgHAAgJgDIAAAAIgCgBIgBAAIAAgKIAAAKIABAAIACABIAAAAQAJADAHAAIAAAAIABAAQASAAALgRQAHgMANgZIAAAAQAMAAAIAKQAHAKANAAQADAAAFgCIAAgBIAMgHIAJgIIABAIIgKAAIAKAAIgBgIIACgCIAVgXIATASQAdAdAOBFQAOBEAMAgQALAggBAhIAAA0QAAAyAPBkQAPBjgJA4QgJA3gHBOQgIBNArDDQiqidhkk8gAADFxIANgOgABTDWQgegQgTAGQgUAGhEgaQhEgahrhGQhrhFgKg3QgKg3A2hQQA3hQABgdQABgpAehTQAlhlAlAAQAiAABIA2QBuBSAXAOQAdARBbArQBYAqAgANIALAEIgOAkQgMgNgMAHQgTAKgVAEQgMACgLAAQgRAAhNgtIgEgCIgBgBIg+gkQgxgegogcQhcg/g0g3IAAAUQgPAjgjCvQg4A0gzA9QgaAgARAYQAQAYA3ARQAkAKAaAXIgBAFIgBAJIAAABIAAAGIAAgGIAQAAIgfAfIAfgfQBkB8CeAGQAOABAfgEIgWAZIgBABIAAAAIgcAbgAA3yNQgniSgjg5QBaAQA1ADIgBAKQAABCAYBiQAQBCAhBjQggAJgjANIglARQgEhFghh9g");
	this.shape_19.setTransform(163.7466,51.1375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("Ah3D/QANhrhBijQglhahHifIDHApIA7AKQAiA5AnCSQAhB8AFBFQiNA+g6AUQAAgKgKAAgACRgUQgZhjAAhBIABgKIATAAQBDAAAggHIABAHQgBA4AVBtQATBmABA2QgnADgwANQgghigQhBg");
	this.shape_20.setTransform(164,-64.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.satan_side, new cjs.Rectangle(-68.7,-825.2,2044.7,2103), null);


(lib.play_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-256.55,-59.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-372.1,-154.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.play_btn, new cjs.Rectangle(-372.1,-154,744,308), null);


(lib.midback_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66001B").s().p("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");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.midback_mc, new cjs.Rectangle(-4094.9,-695.3,8189.8,1390.6), null);


(lib.harpy_sitting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADDgsQgcgHhNgsQgDgCgDgCQg+gjgpAAQhRAAhAAoQhGArAABCQAAA0BkAmQBPAeAzAAQBhAAAyguQAhgeAvhZQAGgLAGgNABjAKQABAFAAAEQAAAVgjATQgdAPgNAAQgcAAgYgjQgUgdAAgRQAAgbAEgHQAFgHAigMQAhgLAQAQQAJALADAHQACAFACAEQAAABAAABQADAGAEAGQABACABABQABABAAAAQABAAAAABQAAABAAABQACAEADADQAFAEAAAFABKgTQgBgCgCgBQgGgNgFgFIgFAAQAAACAAABAAwgCQAAAAgBgBQgFgMADgFQAFACAFABQADgGABgDQAAgBABAAQACABADABAAtAAIADgCIAIgFAAtAAQgBABgBABQgDAFAAAMQAAASABACQADAIAQAHAAtAAQABgCABgBQAFgIADgGQAEADAEACQABABABAAIAAgCIAAgCQABABAAAAIAAAAQABABACABQAAgCAAgCQABgCAAgCQACABACAAQALAEAHAFQAFAKACAKQgBAFgFAFQgDADgFADQgCABgCACIgKAKIgBAAIAAAAQAAgBgBgBQgDABgBABIAAgKIAAgTQAAAEACAIQAAABABABQABAHABAFQgBAAAAAAQAAAAAAABQgCgDgCgFQgCgDgDgGQgCgEgDgEQgFgJgCgFAA8g3QANANALARQABACABADQADAFADAFQAIAGAAAIQAAADgBADABPAAQABAAAAAAQAAgBAAgBQACACACACQABACABACQAFAEAEAEIgDADIgLAMQgHAEgEADQAAACAAABQAAgBgBgCQgBgHgBgHQgCgQADgPQABACABAAQAHAGACABQAEADADADQAEAGACAFQABACAAABQACAFAAAEQgOAAgKAKAA8AUIAAgUIgFAAABEgJQAAgBAAgBQAAgBABAAQAFAEAGAGQgCgHgEgKABBgLQABACACAAABGgJQAFAFAEAEABBAKIAAgVAA7gcQAAABABAAABGAnIgFAAIgFAAIAAgT");
	this.shape.setTransform(30.5,-201.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Ag2AjQgUgeAAgRQAAgbAEgGQAFgHAigMQAhgMAPARQAKAKAEAIIADAJIAAABIgFAKIgJgDIgBAEQAAAFADAHIgCADIgCADQgDAEAAANQAAARABADQADAHAQAIQgQgIgDgHQgBgDAAgRQAAgNADgEIACgDIADgBIAJgGIAGgEIACgCIABAAIAAAAIADgCIAFgDIAKgHIACAFIAGAKQAFAMACAIIABAKQAAAVgjASQgcAQgNAAQgdAAgYgjgAAuAiIgBABIABgBQAKgJAOAAIgCgKQAFgEABgGQgBAGgFAEIgBgCIADgDIgJgJIAJAJIgDADIgGgMIAGAMIgLALIALgLIABACIgHAGIgFADIAFgDIAHgGIACAKQgOAAgKAJIAKgKIgLAHIAAADIgBgDIABAAIgBAAIgCgOIACAOIAAABIgEgHIAAgUIACAMIABADIACALIgCgLIgBgDIgBgMIACgSIACACIgCgCIAAgDIgCgCIACACIAAADIgCASIABAMIgCgMIAAgUIAAAUIAAAUIgFgJIAAgUIgFAAIAFAAIAAAUIgFgJIgHgNIAHANIAFAJIAAATIAFAAIAFAAIAAgBIAAgDIALgHIgKAKgAAygEQAFAEAAAFQAAgFgFgEQgDgEgCgDIAJAGIAHAGIgCgDIgFgFIABADIgBgBIgJgJIgBgBIgBgBIAAgBIAAABIABABIABABIAAADQACADADAEgAA2gHQgBgHgEgJQALADAHAFQgHgFgLgDQAEAJABAHQgFgGgGgEQAGAEAFAGgAAogPIADACIgDgCIAAgDIAAADIgCgBIACABIAAAAgAArgRIABgDIgBADIgCgBIACABIAAAAgAAtAjIgFAAIAEgDIABACIAAABgAAoAjgAAoAjIAAgKIAEAHIgEADgAAoAjIgFAAIAAgTIAFAJIAAAKgAAsAgIAAgBIABADIgBgCgAAuAigAAsAgIAAAAgAAsAfIAAAAgAAqARIAAAAgAAjAQIAAAAgABDANIAAAAgAAoAFIAAAAgAA2gFIABABIgBgDIAFAFIACADIgHgGgAAtgLIAAgDIAJAJIgJgGgAATgUIABgEIAJADIgHANQgDgHAAgFgAArgQIAAAAgAArgQIAAAAgAAdgVIAAAAgAAigfIAAAAgAAiggIABAAIgBABIAAgBg");
	this.shape_1.setTransform(33,-200.8968);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiABpQhkgmAAg0QAAhBBGgsQBAgoBRAAQApAAA+AjIAHAEQBMAsAcAHIAcAOQgvBZghAeQgyAuhiAAQgyAAhPgegAAAg7QgiALgEAHQgFAHAAAbQAAARAUAeQAXAiAdABQAOgBAcgPQAjgSAAgWIgBgJIABgFQAAgJgIgGIgFgKIgDgFQgLgRgNgNQANANALARIgKAGIgCgDQgHgNgFgEIgFAAIABACQgEgHgJgLQgJgJgQAAQgLAAgNAFgABpAKQgCgKgFgKQAIAGAAAJIgBAFIAAAAgAA1gDIABABIgDACIACgDgAA1gDIAIgOIAEgJIABgBIAFACIgFgCIgBgBIgDgJIgBgCIAFAAQAFAEAHANIACADIgEgBIgBAEIgDACIAAAAQgEgGgDgGQADAGAEAGIgBAAIAAABIAAgBIABAAIgBABIgCABIgIgFIAIAFIgGAFIgJAFIgBgBgABigKIAAAAgABIgOIAAAAgABIgOIAAAAgABMgUIAEABIgFADIABgEgABQgTIAAAAg");
	this.shape_2.setTransform(29.8875,-201.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AjCgsQAcgHBMgsQAEgCAEgCQA9gjApAAQBSAAA/AoQBGArAABCQAAA0hkAmQhPAegzAAQhhAAgyguQghgegvhZQgFgMgHgMAhcAUQgBAEgBAFQAOAAAJAJIABABIABAAIAAAAQABgBAAgBQADABABABIAFAAIAAgTIAAgUIAFAAAhcASQAAAAAAACQADADAEADQADACACABQAHAEAEADQAAACAAABQABgBAAgCQABgHABgGQAAgBAAAAQABgPgCgQQgBACgCAAQgHAFgBACQgBAAAAAAQAAgBABgBQgDACgBACQgCACgBACQgFAEgEAEgAhiAKQABAFAFAFAhbgKQgIAGAAAIQAAAEABACAhbgKQgGAKgBAKQgBAFAAAEQAAAVAjATQAcAPAOAAQAcAAAYgjQAUgdAAgRQAAgbgFgHQgEgGgigNQghgMgQARQgJAKgEAIQgBAFgBAFQgBAAAAABIAAgBQgDABgDABAhIgTQAAgCABgBQAHgNAFgFIAFAAQgBACAAABAhAgLIAAgCIAAgCQgBABAAAAIgBAAQgBABAAABQgBgCAAgCQAAgBgBgDQgCABgBAAQgMADgHAGAg2gRQgDgFgBgEQgDAGgEAGQgBACgBABQAAgBAAAAQgGADgFAHQABgIAFgJAg2gRQgEACgEADQgBABgBAAQgCABgBABQAAgBAAgBQAAAAgBABQAAAAgBABQAAABgBABQgBAEgDADQgFAEAAAFAgsAAQgBgCgCgBQAFgMgCgFQgFABgFACAgsAAQACABAAABQADAFAAAMQAAASgBACQgDAIgQAHAgvgCQAAAAAAgBQgEgIgDgGAgsAAIgDgCIgJgFAg7g3QgNANgKARQgCADgCACQgCAFgDAFAhFgJQgFAEgEAFAhCAXQAAAAgBABQgBAHgBAFIABAAQAAAAAAABQABgDADgFQACgEADgFQACgDADgFQAFgJACgFAhAAdIAAgTQAAAFgCAHAhPAAQgDADgDADQgEAGgDAGIAMALIAJAJAhAAKIAAgVAg5gbQgBAAAAAAAhFAnIAFAAIAAgK");
	this.shape_3.setTransform(-122.5,-201.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgnA2QgjgSAAgVIABgKQABAFAFAFIgCAKQAOAAAJAJIgJgKIALAHIAAADIAAABIAAgBIABgCIAEADIgFAAIgBgBIgBAAIABAAIABABIAFAAIAFAAIAAgTIAFgJIAHgNIACABIgCgDQAEgIAAgEIgBgEIgKADIAKgDIABAEQAAAEgEAIIgHgNIgEgKIABgBIgBABIAAgBIABAAIACgJQAFgIAJgKQAPgRAhAMQAiAMAEAHQAFAGAAAbQAAARgUAeQgYAjgcAAQgNAAgdgQgAgPAjQgDAHgQAIQAQgIADgHQABgDAAgRQAAgNgDgEIgDgDIADADQADAEAAANQAAARgBADgAgnAjIAAgKIAAAKIgEgDIAEgHIAFgJIAAATgAgnAjgAgsAiIAAAAgAgsAfIABAAIgBADIAAgDgAgrAfIAAABIgBACIABgDgAhFAZIACgKIAIAGIAEADIAJAKQgJgJgOAAgAgrAfIACgNIgCANIgBAAIADgLIAAgCIAAAAIAAgBIACgLIgCALIABgLQAAgJgCgKIADgCIAAAVIAAATIgEAHIAAgBgAg3AYIgMgLQADgGAEgGIAGgFIgGAFIACgDIAFgFIgFAFIgCADIgJAJIACADIAAACQgFgFgBgFQABgJAGgLIAGgKIACgFIAKAHIAFADIACACIABAAIABAAIABACIAHAEIAJAGIgHANIgFAJIAAgUIAFAAIgFAAIAAAUIgFAJIAAgTIAAgVIgDACQACAKAAAJIgBALIAAABIAAAAIAAACIgDALIgLgHgAgsgLQgCADgDAEQgFAEAAAFQAAgFAFgEQADgEACgDIAAgDIgJAJIgBABIABgDQAFgGAGgEQgGAEgFAGQABgHAEgJQgLADgHAFQAHgFALgDQgEAJgBAHIgBADIABgBIAJgGIgJAGIAJgJIAAADgAgsgLIACgCIAAgDIACgCIgCACIAAgBIAAABIgBABIgBABIABgBIABgBIAAADIgCACgAgngPIABgBIgBABIAAgDIAAADIAAAAgAgqgRIABgBIgBABIgBgDIABADgAgnAZgAg7AVIgIgGIAAgCIgCgDIAJgJQgEAGgDAGIAMALIgEgDgAgpARIAAAAgAhDANgAhJAFIAAAAgAg8ABIAAAAgAg1gFIAAAAgAgWgGgAgngPgAgqgQIAAAAgAgqgQIAAAAg");
	this.shape_4.setTransform(-125,-200.8983);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiUBZQghgegvhYIAcgPQAcgHBMgsIAHgEQA+gjApAAQBSAAA/AoQBGAsAABBQAAA0hkAmQhPAegyAAQhhAAgzgugAhoAKIgBAJQAAAWAjASQAdAPAOABQAbgBAYgiQAUgeAAgRQAAgbgFgGQgEgIgigLQghgMgPAQQgJALgFAHIABgCIgFAAQgFAEgHANIgCADIgKgGQALgRANgNQgNANgLARIgCAFIgGAKQgIAGAAAJIABAFIgBgFQAAgJAIgGQgGAKgBAKgAg1gCIAAgBIAAABIgJgFIgHgEIAJgGIAHAOIACADgAhGgNIAAgBIgBABQAEgHADgGIAEAJIgJAGgAhGgNIgBAAIABgBIAAABgAhIgNIgCgDIgBgEIgEABIACgDQAHgNAFgEIAFAAIgBACIgCAJIgBABIgGACIAGgCIAAABQgDAGgEAHgAhPgTIAEgBIABAEgAhPgTgAg9glIAAAAg");
	this.shape_5.setTransform(-121.9,-201.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},48).wait(19));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AI1zMQAnhOA9g/QARgRAGgUQAHgZAAg5QAAhsiVhmQiThkiQAAQlIAAh5AyQiWA+AAC3QAAA9AZBYQAZBYAABOQAAAlgPAcQgPAdAAAaQAoBLAAAPQAAAHjDEJQjQEbgvBpIAABaIAegKQiFDXgzCRQhCC/AAD2QAAAsgZDfQgZDgAABeQAABgBeB0QBcBxCZBkQCfBoCyA8QDBBCCvAAQC+AABzkEQAshjAZh6QAVhpAAhUQAAjAhxkeQgghSiblIQgcg9gogzQgLgPg4hAQhOhZgahtQgUhYhXh8Qgrg+goguQAAgeCglKQAfAQA2AoQA9AxAhAYQB8BbBWAAQAuAAAwhAIAAAAQAkgxAmhUQArhiAlh2QABgEABgDQAGAGAHAGQBeBZBWB6QBTB1AnBhQAAABAAAAQAJAVAGAVIAAAKQBIACA2h9QAshmAAhLQAAhaiviQQhGg6hJgsQhIgsgogKIgKAAQADBRgFAoQgGA+gnAdQgGAEgHAEAFjqcQBEBOBJA1QBSA7B/A8IDIAAQAFgFAEgCQABgCAAgQQAAgQgygrQgUgRgMgSQAAAAAAAAQgSgZAAga");
	this.shape_6.setTransform(-7.5,-53.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#72132A","#210100"],[0,1],0,28.3,0,-28.2).s().p("ABJEtQh/g7hSg8QhIg1hEhOIgGgEQAkgvAmhVQArhhAlh2IAPAEQBeBaBVB5QBTB0AnBiIgFACQAAAaARAaIABAAQAMASAUARQAyAqAAAQQAAARgBABQgEACgFAFgAh+kgIANgIIgNAIg");
	this.shape_7.setTransform(55.7125,-125.9875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#72132A","#210100"],[0,1],6.3,23.5,-6.3,-23.5).s().p("ABKFZIAAgKQgHgUgIgWIAAAAQgnhihSh1QhXh5hehZQAngdAHg+QAEgogChRIAKAAQAoAKBHAsQBJAsBFA6QCwCQAABZQAABLgtBmQg1B7hGAAIgCAAg");
	this.shape_8.setTransform(68.6375,-142.3475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#5700CD","#210100"],[0,1],-85,0,85,0).s().p("AitbFQiyg8ifhoQiZhkhchxQheh0AAhgQAAheAZjgQAZjfAAgsQAAj2BCi/QAziRCFjXIgeAKIAAhaQAvhpDRkbQDCkJAAgHQAAgPgohLQAAgaAPgdQAPgcAAglQAAhOgZhYQgZhYAAg9QAAi3CWg+QB4gyFJAAQCQAACTBkQCVBmAABsQAAA5gHAZQgGAUgRARQg+A/gmBOQADBRgFAoQgGA+gnAdIgNgMIgCAHQglB2grBiQgmBUgkAxIAAAAQgwBAguAAQhWAAh8hbQghgYg+gxQg2gogfgQQifFKAAAeQAoAuArA+QBWB8AUBYQAaBtBOBZQA4BAAMAPQAoAzAcA9QCbFIAgBSQBxEeAADAQAABUgWBpQgYB6gsBjQhzEEi+AAQiwAAjAhCg");
	this.shape_9.setTransform(-23,-53.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("Ao0zMQgnhOg9g/QgRgRgGgUQgHgZAAg5QAAhsCVhmQCThkCQAAQFIAAB5AyQCWA+AAC3QAAA9gZBYQgZBYAABOQAAAlAPAcQAPAdAAAaQgoBLAAAPQAAAHDDEJQDQEbAvBpIAABaIgegKQCFDXAzCRQBCC/AAD2QAAAsAZDfQAZDgAABeQAABgheB0QhcBxiZBkQifBoiyA8QjCBCiuAAQi+AAhzkEQgshjgYh6QgWhpAAhUQAAjABxkeQAghSCblIQAcg9AogzQAMgPA2hAQBPhZAahtQAUhYBXh8QArg+AoguQAAgeiglKQggAQg1AoQg9AxghAYQh7BbhXAAQguAAgwhAIgBAAQgkgxglhUQgrhiglh2QgBgEgBgDQgHAGgGAGQheBZhWB6QhTB1gnBiIgBAAQgIAVgGAVIAAAKQhIACg2h9QgshmAAhLQAAhaCwiQQBGg6BIgsQBIgsAogKIAKAAQgDBRAFAoQAGA+AnAdQAGAEAHAEAliqcQhEBOhJA1QhSA7h/A8IjIAAQgFgFgEgCQgBgCAAgQQAAgQAygrQAVgRALgRIAAgBQASgZAAga");
	this.shape_10.setTransform(-84.5,-53.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#72132A","#210100"],[0,1],0,28.3,0,-28.2).s().p("AkQEtQgFgFgEgCQgBgBAAgRQAAgQAygqQAVgRALgSIABAAQARgaAAgaIgFgCQAnhiBTh0QBVh6BehZIAPgEQAlB2ArBhQAmBVAkAvIgGAEQhEBOhIA1QhSA8h/A7gAB/kgIgNgIIANAIg");
	this.shape_11.setTransform(-147.725,-125.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#72132A","#210100"],[0,1],-6.2,23.5,6.4,-23.5).s().p("AjGDeQgshmgBhLQAAhZCwiQQBFg6BJgsQBIgsAngKIAKAAQgCBRAFAoQAGA+AnAdQheBZhWB5QhTB1gnBiIAAAAIgPAqIAAAKIgCAAQhGAAg1h7g");
	this.shape_12.setTransform(-160.65,-142.3475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5700CD","#210100"],[0,1],85,0,-85,0).s().p("AnzYDQgshjgYh6QgWhpAAhUQAAjABykeQAghSCalIQAcg9AogzQAMgPA4hAQBOhZAahtQAUhYBWh8QArg+AoguQAAgeiflKQgfAQg2AoQg+AxghAYQh8BbhWAAQguAAgwhAIAAAAQglgxglhUQgrhiglh2IgCgHIgNAMQgngdgGg+QgFgoADhRQgnhOg9g/QgRgRgGgUQgHgZAAg5QAAhsCVhmQCThkCQAAQFJAAB4AyQCWA+AAC3QAAA9gZBYQgZBYAABOQAAAlAPAcQAPAdAAAaQgoBLAAAPQAAAHDDEJQDPEbAwBpIAABaIgegKQCFDXAyCRQBDC/AAD2QAAAsAZDfQAZDgAABeQAABgheB0QhcBxiZBkQifBoiyA8QjBBCivAAQi+AAhzkEg");
	this.shape_13.setTransform(-69,-53.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},48).wait(19));

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AFkvmQAMgrAag1QAshZA/hPQCejECcAAQDyAACJBuQB5BiAyDAQAoCXAED9QgEEuAACYQAADWgtDiQgZCBgGAjQgOBaAABVQAAAYBQFYQBXF0ArCCQgqg2hyh+Qhohyg3hLQiyjzgvk+QgnAngzBlQgHgSgcgbQgqgpgDgEQAEAZgcAYQgZAVgVAAQhYAAhyihQhgiJhljoQhYjGg/jJQg8i/AAhDQAAgaAThCQAVhIAfhHQBJipBNgugAG9p0QAfAtAZAtQAyBaAEBGQA1gOArhsQAWg5AWhRIAFgBQAFgDAAgGQARARA3CQQAwCCAKAnIAeAAQAKgkAnhXQAphcAUhBIAFgBQAFgDAAgGQAAAHA4CZQA3CXAJATQBMiRAoixQAUhYAOhQAzcrYQAJBXAJA9QATBvAhBRQAzAABbg3QBeg4AYgxIAKgKQgEAkAcBLQAbBFATAUIAUAAQAAgcAPgzQARg2ASgRIAAgKQAWBAAMAeQAUA4AaAAQAeAACChSQCOhZAIgxIgUAAAljvdQgMgqgag1QgshZg/hPQiejEicAAQjyAAiJBuQh5BigyDAQgoCXgED9QAEEuAACYQAADWAtDiQAZCBAGAjQAOBaAABVQAAAYhQFYQhXF0grCCQAqg2Byh+QBohyA3hLQCyjzAvk+QAnAnAzBlQAHgSAcgbQAqgpADgEQgEAZAcAYQAZAVAVAAQBYAAByihQBbiDBhjYQAFgLAEgLQBYjGA/jJQA8i/AAhDQAAgagThCQgVhIgehHQhKiphNgvQgJgFgKgEAFZu0QADgXAIgbQAJgGAKgEAlYuqQgDgXgIgcAy+ATQAEAUAoAxQAqAzATAAQAPAAAUgTQASgUACgBQAuCMBFAAQANAABUgnQBlgwAlgNQABAiAZBHQAYBFAAAQQArgUBYhIQBchMAbgqAJ7B3QBODIAlAAQAaAAA+hyQA5hpAAgLIAKAAQACAkAoA+QAoA/AcAJQAVgVAUgdQAog6AJg0IAKgUQAAAKAeAtQAeAsAAALQAEgDBGiAQBJiCANgSIgeAA");
	this.shape_14.setTransform(-46.5,23.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#5700CD","#210100"],[0,1],88.4,-2.7,-88.4,2.8).s().p("AIbT6Qhohyg3hLQiyjzgvk+QgnAngzBlQgIgSgbgbIgsgtQAEAZgcAYQgZAVgVAAQhYAAhyihQhgiJhmjoQhXjGg/jJQg8i/AAhDQAAgaAThCQAVhIAfhHQBJipBMguQANgrAag1QArhZBAhPQCejECcAAQDxAACJBuQB4BiAzDAQAoCXADD9QgDEuAACYQAADWgtDiQgZCBgGAjQgOBaAABVQAAAYBQFYQBXF0ArCCQgqg2hyh+gAhPFEQAaAAA9hyQA5hpAAgLIAKAAQACAkAoA+QAoA/AcAJQAVgVATgdQAog6AKg0IAKgUQAAAKAeAtQAeAsAAALQADgDBHiAQBJiCANgSIgeAAIAeAAQgNAShJCCQhHCAgDADQAAgLgegsQgegtAAgKIgKAUQgKA0goA6QgTAdgVAVQgcgJgog/Qgog+gCgkIgKAAQAAALg5BpQg9BygaAAQglAAhOjIQBODIAlAAIAAAAgADSm7QA4CXAJATQBMiRAnixQAVhYAOhQQgOBQgVBYQgnCxhMCRQgJgTg4iXQg3iZAAgHQAAAGgFADIgFABQgUBBgpBcQgoBXgJAkIgeAAQgJgngxiCQg2iQgRgRQAAAGgFADIgFABQgWBRgXA5QgqBsg1AOQgEhGgyhaQgagtgegtQAeAtAaAtQAyBaAEBGQA1gOAqhsQAXg5AWhRIAFgBQAFgDAAgGQARARA2CQQAxCCAJAnIAeAAQAJgkAohXQAphcAUhBIAFgBQAFgDAAgGQAAAHA3CZgAnavhQgHAbgDAXQADgXAHgbQAKgGAKgEQgKAEgKAGg");
	this.shape_15.setTransform(36.5,22.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#5700CD","#210100"],[0,1],-69.5,0,69.5,0).s().p("Ao0O4QBQlYAAgYQAAhVgOhaQgGgjgZiBQgtjiAAjWQAAiYgEkuQAFj9AniXQAyjAB5hiQCKhuDwAAQCcAACeDEQA/BPAsBZQAaA1AMAqQgJgFgKgEQAKAEAJAFQAIAcADAXQgDgXgIgcQBNAvBJCpQAfBHAVBIQATBCAAAaQAABDg8C/Qg/DJhYDGIgJAWQhhDYhbCDQhyChhYAAQgVAAgZgVQgcgYAEgZIgsAtQgcAbgHASQgzhlgngnQgvE+iyDzQg3BLhoByQhxB+grA2QAsiCBWl0gACXDvQAYBFAAAQQAsgUBXhIQBchMAbgqQgbAqhcBMQhXBIgsAUQAAgQgYhFQgZhHgBgiQglANhkAwQhUAngNAAQhFAAguiMIgUAVQgTATgQAAQgTAAgqgzQgngxgFgUQAFAUAnAxQAqAzATAAQAQAAATgTIAUgVQAuCMBFAAQANAABUgnQBkgwAlgNQABAiAZBHgAgynEQAaBFAUAUIATAAQAAgcAPgzQARg2ASgRIAAgKIAiBeQAVA4AZAAQAeAACDhSQCNhZAIgxIgUAAIAUAAQgIAxiNBZQiDBSgeAAQgZAAgVg4IgiheIAAAKQgSARgRA2QgPAzAAAcIgTAAQgUgUgahFQgYhBAAglIAAgJIgKAKQgYAxheA4QhbA3gzAAQghhRgShvQgKg9gJhXQAJBXAKA9QASBvAhBRQAzAABbg3QBeg4AYgxIAKgKIAAAJQAAAlAYBBgAHaviIAAAAg");
	this.shape_16.setTransform(-129.5,23.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},48).wait(19));

	// Layer_2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AERmjQAOAsBLC0QBOC8AAA0IAAABQAAAOgKAIQgBAAAAABQgJAIAAADQAKgBAKAAQBXACAzBEQAQAXAfA4QAhA8AWAgIAABaQgMAAgTAHQgYAIgPAFQgPgwgzg6Qg0g9g0gXIAABQQAjAiACAFQADAHAAAsQAAANgFATQgFATAAAJQhGAAgoAKQAAgVAPgkQAPgjAAgSQAAgRgEgOQAAgBAAAAQAAAAAAgBQgEgNgIgMQgjg2gJgSQgHAhgSBLQgPBGAAA+IgyAAQAAgHgMgBQgIgCgUAAQAAgXAPgaQAPgbAAgYQAAgMgKgtQgKgtAAgNQAAgUAVgQQAFgEAngXQA6giAGgzQABgGAAgGQAAglhWjmQhCixgThDIAAAAQgIgXgBgKAG4BPQgDACgOAGQgKAFgRAHQgbALgJAAAm3AxQhXACgzBEQgQAXgfA4QghA8gWAgIAABaQAMAAATAHQAYAIAPAFQAPgwAzg6QA0g9A0gXIAABQQgjAigCAFQgDAHAAAsQAAANAFATQAFATAAAJQBGAAAoAKQAAgVgPgkQgPgjAAgSQAAgRAEgOQAAgBAAgBQAEgNAIgMQAjg2AJgSQAHAhASBLQAPBGAAA+IAyAAQAAgHAMgBQAIgCAUAAQAAgXgPgaQgPgbAAgYQAAgMAKgtQAKgtAAgNQAAgUgUgQQgFgEgogXQg6gigGgzQgBgGAAgGQAAglBWjmQBCixAUhDQAHgXABgKAEOmtQABADACAHIhdAAAkQnBIBdAAAkXnBIAHAAQgOAshLC0QhOC8AAA0QAAAOAKAJQAKAJAAADQgKgBgKAAQADACAOAGQAKAFARAHQAbALAJAAAkNnLQgBADgCAHAEYmjIgHAA");
	this.shape_17.setTransform(-28,153);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#72132A","#210100"],[0,1],-6,0,6,0).s().p("AgsAYQAPgkAAgRQAAgRgEgOIAAgBIA1gSQAjAiACAFQADAGAAAsQAAANgFATQgFATAAAJQhFAAgoAKQAAgVAPgjg");
	this.shape_18.setTransform(14,193);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#72132A","#210100"],[0,1],-24,0,24,0).s().p("AjHDIQAAgGgMgCQgIgCgUAAQAAgXAPgaQAPgaAAgZQAAgMgKgtQgKgsAAgNQAAgUAUgQQAGgEAngXQA6giAGgyIAVACQAJAAAagLIAcgMIAQgHQBXABAzBFQAQAWAfA5QAhA6AWAgIAABaQgMAAgUAHIgmANQgPgwgzg6Qg1g7gzgYIAABPIg1ASIgBgBQgDgNgIgMQgjg1gJgSIgaBrQgOBGAAA+g");
	this.shape_19.setTransform(16,180.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#72132A","#210100"],[0,1],-6,0,6,0).s().p("AgxBGQAAgKgFgSQgFgTAAgNQAAgrADgHQACgFAjgiIA2ARIgBACQgEAOAAARQAAASAPAiQAPAkAAAVQgogKhFAAg");
	this.shape_20.setTransform(-70,190);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#72132A","#210100"],[0,1],-24,0,24,0).s().p("ACWDIQAAg+gOhGIgahrQgJASgjA1QgIAMgDAOIg3gSIAAhPQgzAYg0A7QgyA6gQAwIgngNQgSgHgNAAIAAhaQAXggAgg6QAfg5AQgWQAzhFBWgBIARAHIAbAMQAbALAJAAIAVgDQAGAzA6AiQAnAXAGAEQAUAQAAAUQAAANgKAsQgKAtAAAMQAAAZAPAaQAPAaAAAXQgUAAgIACQgMACAAAGg");
	this.shape_21.setTransform(-72,177.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#5700CD","#210100"],[0,1],-29.6,0,29.6,0).s().p("AAjEGIABgMQAAglhVjmQhCixgUhDIAMgDIBcAAQAPAsBKC1QBOC7AAA0IAAABQgBAOgJAIIgBABQgJAIAAADIADAHIgcAMQgaALgJAAg");
	this.shape_22.setTransform(2.425,137.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#5700CD","#210100"],[0,1],-23.3,0,23.4,0).s().p("AhaD+IgcgMIADgHQAAgDgKgJQgKgIAAgPQAAg1BOi7QBKi0APgsIBcAAIAMADQgUBDhCCxQhVDnAAAkIABAMIgVADQgJAAgagLg");
	this.shape_23.setTransform(-58.4125,134.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AG4AxQBXACAzBEQAQAXAfA4QAhA8AWAgIAABaQgMAAgTAHQgYAIgPAFQgPgwgzg6Qg0g9g0gXIAABQQAjAiACAFQADAHAAAsQAAANgFATQgFATAAAJQhGAAgoAKQAAgVAPgkQAPgjAAgSQAAgRgEgOQAAgBAAAAQgEgPgIgLQgjg2gJgSQgHAhgSBLQgPBGAAA+IgyAAQAAgHgMgBQgIgCgUAAQAAgXAPgaQAPgbAAgYQAAgMgKgtQgKgtAAgNQAAgUAUgQQAFgEAogXQA6giAGgyQABgHAAgGQAAglhWjmQhBixgVhDQgGgYgCgJAkXmjIAHAAQgOAshLC0QhOC8AAA0IAAABQAAAOAKAIQAAAAABABQAJAIAAADQgKgBgKAAQhXACgzBEQgQAXgfA4QghA8gWAgIAABaQAMAAATAHQAYAIAPAFQAPgwAzg6QA0g9A0gXIAABQQgjAigCAFQgDAHAAAsQAAANAFATQAFATAAAJQBGAAAoAKQAAgVgPgkQgPgjAAgSQAAgRAEgOQAAgBAAAAIAAAAQAEgPAIgLQAjg2AJgSQAHAhASBLQAPBGAAA+IAyAAQAAgHAMgBQAIgCAUAAQAAgXgPgaQgPgbAAgYQAAgMAKgtQAKgtAAgNQAAgUgUgQQgFgEgogXQg6gigHgyQAAgHAAgGQAAglBWjmQBCixAUhDQAGgYACgJAkNmtQgBADgCAHIBdAAAm3BPQACACAPAGQAKAFARAHQAbALAJAAAEYnBIgHAAQAOAsBLC0QBOC8AAA0QAAAOgKAJQgKAJAAADQAKgBAKAAQgCACgPAGQgKAFgRAHQgbALgJAAAEOnLQABADACAHIhdAA");
	this.shape_24.setTransform(-64,153);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#72132A","#210100"],[0,1],6,0,-6,0).s().p("AgsAXQAPgiAAgSQAAgQgEgPIgBgBIA2gSQAjAiACAFQADAHAAArQAAANgFATQgFASAAAKQhFAAgoAKQAAgVAPgkg");
	this.shape_25.setTransform(-22,190);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#5700CD","#210100"],[0,1],23.4,0,-23.3,0).s().p("AAjEGIABgMQAAgkhVjnQhCixgUhCIAMgEIBdAAQAOAsBKC0QBOC7AAA1QAAAPgKAIQgKAJAAADIADAHIgcAMQgaALgJAAg");
	this.shape_26.setTransform(-33.6,134.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#72132A","#210100"],[0,1],6,0,-6,0).s().p("AgxBGQAAgJgFgTQgFgTAAgNQAAgsADgGQACgFAjgiIA1ASIAAABQgEAPAAAQQAAARAPAkQAPAjAAAVQgogKhFAAg");
	this.shape_27.setTransform(-106,193);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#72132A","#210100"],[0,1],24,0,-24,0).s().p("ACWDIQAAg+gOhGIgahrQgJASgjA1QgHAMgEAOIgBAAIg2gSIAAhPQgzAYg0A7QgyA6gQAwIgngNQgSgHgNAAIAAhaQAXggAgg6QAfg5AQgWQAzhFBWgBIAQAHIAcAMQAbALAJAAIAVgCQAGAyA6AiQAnAXAGAEQAUAQAAAUQAAANgKAsQgKAtAAAMQAAAZAPAaQAPAaAAAXQgUAAgIACQgMACAAAGg");
	this.shape_28.setTransform(-108,180.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#5700CD","#210100"],[0,1],29.6,0,-29.6,0).s().p("AhaD+IgcgMIADgHQAAgDgJgIIgBgBQgJgIgBgOIAAgBQAAg0BOi7QBKi1APgsIBcAAIAMADQgUBDhCCxQhVDmAAAlIABAMIgVADQgJAAgagLg");
	this.shape_29.setTransform(-94.425,137.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#72132A","#210100"],[0,1],24,0,-24,0).s().p("AjHDIQAAgGgMgCQgIgCgUAAQAAgXAPgaQAPgaAAgZQAAgMgKgtQgKgsAAgNQAAgUAUgQQAGgEAngXQA6giAGgyIAVACQAJAAAagLIAcgMIAQgHQBXABAzBFQAQAWAfA5QAhA6AWAgIAABaQgMAAgUAHIgmANQgPgwgzg6Qg1g7gzgYIAABPIg2ASQgDgOgIgMQgjg1gJgSIgaBrQgOBGAAA+g");
	this.shape_30.setTransform(-20,177.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},48).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-234.8,307,436.8);


(lib.harpy_flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ATTgaQAVgaATglQAgg+ALhCQAcimhvhJQiqhwiwgNQiagLisBCQiGA1i2B0QjTCPhrBHQiYBkiAB+QhJBIgVATQg2Awg8AoQgQALktB8QlECFh7AoQBFgFCpgGQCbgFBcgJQEpgeECh/QAAAlgjBGQASgEAmAAQA7AAAFAAQgUAKACAYQADAVAPAKQA+ApDCgWQClgTDrg9QDLg0C7hBQCxg9AwgfQASgMAhgoQAkgrAcgvQBEhygVg4gAOOBoQg2AHgyAJQhiATg1AeQgcgfAvhGQAZglApgwIgDgCQgBgEAEgDQgYAAiMApQh+AmgjAOIgWgOQATgWAig6QAkg+AggoIgDgDQgCgDAFgDQgFADiUAuQiRAsgUAFQAwhnBhhlQAxgzAugsAD2FtQjFA5gagSQgSgLAlhTQAihMAIgFIgHgFQgbAQhHALQhJAKgbgIQABgUAHgXQAMgtAegdIAHgOQgHAEg0AHQg1AHgIAFQAAgDAohdQApheAEgOIAVAOAS3ABQAOgLAOgQQgCgHgFgH");
	this.shape.setTransform(-126.626,-86.6944);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5700CD","#210100"],[0,1],-40.8,-20.9,80.2,64.2).s().p("AjGIsQgPgKgDgVQgCgYAUgKIhAAAQgmAAgSAEQAjhGAAglQkCB/kpAeQhcAJibAFQipAGhFAFQB7goFEiFQEth8AQgLQA8goA2gwQAVgTBJhIQCAh+CYhkQBrhHDTiPQC2h0CGg1QCshCCaALQCwANCqBwQBvBJgcCmQgLBCggA+QgTAlgVAaQAVA4hEByQgcAvgkArQghAogSAMQgwAfixA9Qi7BBjLA0QjrA9ilATQhDAIg0AAQhhAAgogbgAA3GYIAFAAIAIgBIACAAIAEgBIACAAIAEgBIAAAAIAJgBIABAAIAEgBIAAAAIABAAIABAAIABgBIABAAIAFgBIACAAIAAAAIACAAIAVgFIACgBIAPgDIADgBIAFgBIABAAIALgDIALgDIAAAAIACAAIAEgBIAFgCIAGgBIAVgGIABAAIABAAIABgBIAGgBIAEgCIABAAIABAAIAHgCIAAAAIAFgCIACAAIABAAIACgBIgCABIgBAAIgCAAIgFACIAAAAIgHACIgBAAIgBAAIgEACIgGABIgBABIgBAAIgBAAIgVAGIgGABIgFACIgEABIgCAAIAAAAIgLADIgLADIgBAAIgFABIgDABIgPADIgCABIgVAFIgCAAIAAAAIgCAAIgFABIgBAAIgBABIgBAAIgBAAIAAAAIgEABIgBAAIgJABIAAAAIgEABIgCAAIgEABIgCAAIgIABIgFAAIgKABIAAAAQgPAAgGgEIgBgBQgGgDAAgMQAAgXAZg4QAihMAIgFIgHgFQgbAQhHALIgFABIAAAAIgIABQgfAEgWAAIAAAAIgBAAQgUAAgLgEIgBAAIgBAAQABgUAHgXQAMgtAegdIAHgOQgHAEg0AHQg1AHgIAFQAAgDAohdQApheAEgOIAVAOIgVgOQgEAOgpBeQgoBdAAADQAIgFA1gHQA0gHAHgEIgHAOQgeAdgMAtQgHAXgBAUIABAAIABAAQALAEAUAAIABAAIAAAAQAWAAAfgEIAIgBIAAAAIAFgBQBHgLAbgQIAHAFQgIAFgiBMQgZA4AAAXQAAAMAGADIABABQAGAEAPAAIAAAAIAKgBgAKPCpQA1geBigTQAygJA2gHQg2AHgyAJQhiATg1AeQgKgLAAgRQAAgdAdgsQAZglApgwIgDgCIAAgCQAAgCADgDQgYAAiMApQh+AmgjAOIgWgOQATgWAig6QAkg+AggoIgDgDIAAgBQAAgDADgCQgFADiUAuQiRAsgUAFQAwhnBhhlQAxgzAugsQguAsgxAzQhhBlgwBnQAUgFCRgsQCUguAFgDQgDACAAADIAAABIADADQggAogkA+QgiA6gTAWIAWAOQAjgOB+gmQCMgpAYAAQgDADAAACIAAACIADACQgpAwgZAlQgdAsAAAdQAAARAKALgAS3ABQAOgLAOgQQgCgHgFgHQAFAHACAHQgOAQgOALg");
	this.shape_1.setTransform(-126.626,-86.6944);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ASxlpQgBgCgFgBASxlpQAWgPAUgTQAigfAOgcQAkhEhoACQifACipApQiUAkipBFQiFA2i1BaQjTBshrA2QiXBLiDBRQhKAtgVAMQg3Agg8AeQgQAJkpB8Qk/CFh5AvQBCgUCkguQCWgqBZgbQEghYEBhyQgCANgmAkQASgHAlgJQA5gPAEgCQgUAJABAIQACAHAOABQA6gCC8g6QCggyDmhTQDHhHC4hIQCuhFAwgYQASgJAigXQAlgaAegZQBHg8gSgPgADjAnQjBBIgZAAQgQABAngoQAlglAIgEIgHAAQgbANhFAWQhGAXgaAEQACgIAHgKQAPgUAegSIAIgHQgIADgyAQQg0AQgIAEQAAgBAsgtQAsgtAEgGIAUAAANxjkQg0AQgxAQQhgAhg0AZQgagEAxgnQAagUAqgdIgDAAQgBAAAFgDQgYAGiJA0Qh8AvgjAOIgUAAQAUgNAjgeQAmggAhgXIgDgBQgBAAAFgDQgFADiRA3QiPA2gUAHQA1gzBig/QAygfAvgcASVlXQAOgJAOgJ");
	this.shape_2.setTransform(-117.8717,-27.9516);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5700CD","#210100"],[0,1],-37.6,-0.3,75,-0.1).s().p("AtbFWQEph8AQgJQA8geA3ggIBfg5QCDhRCXhLIE+iiQC1haCFg2QCphFCUgkQCpgpCfgCQBogCgkBEQgOAcgiAfQgUATgWAPQgBgCgFgBQAFABABACIgcASIAcgSQASAPhHA8QgeAZglAaQgiAXgSAJQgwAYiuBFQi4BIjHBHQjmBTigAyQi8A6g6ACQgOgBgCgHQgBgIAUgJIg9ARQglAJgSAHQAmgkACgNQkBBykgBYQhZAbiWAqQikAuhCAUQB5gvE/iFgAAIBvIABAAIAAAAQAZAADBhIQjBBIgZAAIAAAAIgBAAQgNAAAjgmIACgBQAlglAIgEIgHAAQgbANhFAWQhGAXgaAEQACgIAHgKQAPgUAegSIAIgHQgIADgyAQQg0AQgIAEIAsguQAsgtAEgGIAUAAIgUAAQgEAGgsAtIgsAuQAIgEA0gQQAygQAIgDIgIAHQgeASgPAUQgHAKgCAIQAagEBGgXQBFgWAbgNIAHAAQgIAEglAlIgCABQgjAmANAAIAAAAgADGhhICjg9QCRg3AFgDIgEADIAAAAIADABQghAXgmAgQgjAegUANIAUAAQAjgOB8gvQCJg0AYgGIgEADIAAAAIADAAQgqAdgaAUQggAZAAALQAAAFAJACQA0gZBgghIBlggIhlAgQhgAhg0AZQgJgCAAgFQAAgLAggZQAagUAqgdIgDAAIAAAAIAEgDQgYAGiJA0Qh8AvgjAOIgUAAQAUgNAjgeQAmggAhgXIgDgBIAAAAIAEgDQgFADiRA3IijA9QA1gzBig/IBhg7IhhA7QhiA/g1AzIAAAAg");
	this.shape_3.setTransform(-117.8717,-27.9516);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AOGrTQAEAGABAHANerRQATgDAVABQAhAAApAKQBEAQA5AkQCPBYgSCDQgbDKhqCOQhdB6iiBWQiABDjPA8Qj3BCh8AjQiuAxi0ANQhmAIgcADQhIAJhFATQgTAGkjCRQk5CdhvBCQAxgwBzh8QBphyBEg+QDajNEJhwQgcgYhNgTQAQgLAZgdQAngtADgDQgVAJgQgSQgOgPABgSQALhKCQiEQB6hwDJiJQCrh3CshjQCjheA3gPQAUgGA0ABQA4ACA3AJQCCAYAdA2AgqjrQisBvgEAfQgDAVBXAbQBPAYAJgDIgBAJQgeAKg3AuQg3AwgMAaQAQAMAWALQAqAUApgEIAQAEQgJACgnAjQgoAkgJACQACADBhAeQBhAfAOAHIACgZAJOo0QgoAkgpAfQhOA+g6AUQAFApBUALQAsAGBAAAIAAAEQACADAFgBQgQASh8BPQhvBGghARIgEAaQAdgBBDAOQBGAOAzABIABAEQAAAEAHgBQgHABiDBRQiBBQgQAMQBtAfCMgGQBGgEA/gG");
	this.shape_4.setTransform(-57.7296,6.4429);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5700CD","#210100"],[0,1],-3.9,63.5,11.3,-83.6).s().p("AwnKBQBphyBEg+QDajNEJhwQgcgYhNgTQAQgLAZgdIAqgwQgVAJgQgSQgOgPABgSQALhKCQiEQB6hwDJiJQCrh3CshjQCjheA3gPQAUgGA0ABQA4ACA3AJQCCAYAdA2QAEAGABAHQgBgHgEgGQAhAAApAKQBEAQA5AkQCPBYgSCDQgbDKhqCOQhdB6iiBWQiABDjPA8Qj3BCh8AjQiuAxi0ANQhmAIgcADQhIAJhFATQgTAGkjCRQk5CdhvBCQAxgwBzh8gAifDpQACADBhAeQBhAfAOAHIACgZIgCAZQgOgHhhgfQhhgegCgDQAJgCAogkQAngjAJgCIgQgEIgCAAIgKABIAAAAIgBAAQgggBgigOIgCgBIgCgBQgWgLgQgMQAMgaA3gwQA3guAegKIABgJIgCAAIgBAAQgLAAgxgOIgBAAIgCgBIAAAAIgDgBIgPgEIgCgBIAAAAIgCAAQhUgaAAgVIAAgBQAEgfCshvQisBvgEAfIAAABQAAAVBUAaIACAAIAAAAIACABIAPAEIADABIAAAAIACABIABAAQAxAOALAAIABAAIACAAIgBAJQgeAKg3AuQg3AwgMAaQAQAMAWALIACABIACABQAiAOAgABIABAAIAAAAIAKgBIACAAIAQAEQgJACgnAjQgoAkgJACIAAAAgAGxBeIAngBIAIAAQBGgEA/gGQg/AGhGAEIgIAAIgnABIgBAAIAAAAQhsAAhYgZIgCAAIgDgBQAQgMCBhQQCDhRAHgBIgDAAIAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgBgEQgzgBhGgOIgBgBIgJgBIAAAAIgEgBIgHgCQgpgHgXgBIgJAAIAAAAIgCAAIAEgaQAhgRBvhGQB8hPAQgSIgDAAIAAAAIgEgBIAAgBIAAgEQhAAAgsgGQhUgLgFgpQA6gUBOg+QApgfAogkQgoAkgpAfQhOA+g6AUQAFApBUALQAsAGBAAAIAAAEIAAABIAEABIAAAAIADAAQgQASh8BPQhvBGghARIgEAaIACAAIAAAAIAJAAQAXABApAHIAHACIAEABIAAAAIAJABIABABQBGAOAzABIABAEQAAABAAAAQABABAAAAQABAAAAABQABAAABAAIAAAAIADAAQgHABiDBRQiBBQgQAMIADABIACAAQBYAZBsAAIAAAAIABAAgANerRQATgDAVABIgKgBQgQAAgOADg");
	this.shape_5.setTransform(-57.7296,6.4429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(3));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AgaqEQgbALhZADQgEAAgEAAQhHAFgjAWQhFArggBFQgkBKAkA4QAcAsBpgWQBTgSArgcQBSgzAQhCQAMgrgIhlQgCgNgBgOAhOohQAEADACAEQAMASgUAiQgQAcgLAJQgZAPgngRQghgOgJgQQgPgWABgIQgBgIAXgcQAWgdAXAGQANADAHAFQADADAEADQABAAAAAAQADgBAEAAAhzosQgCgBgCgCQgMgGgHgCIgEADQACABAAABAiSpDQASACASAKQACABADABQAFADAFADQAKABAFAIQACACAAADQACAFgCAHQgBAEgBAFQgCACgBADIgBALIAAAAIgBABQgBABAAABIAAAAIgBAAQgBAAgBgBQgCgCgFgDIgGgKQABABACACQgJgMgHgPQAAgBAAAAQABgBABAAQABABABACQACACAFABQAHACADAEAhkogQAAgBgCgBQADACAEAAQABABACAAIAAABQABAAAAAAQAHABAFACIAAAEIgEAQQgDAHgCAFQAAABABABQgBgBAAgCIAAABAhkogIAAAAQAEAAAEABAhboeQAGADAGAEQAAABABABQAEACAEAEQgMAIgCALAhzojQAAAAAAABAhzohQACAAACABQAIAAADAAAh1okQAAgCAAgCQgBgCgBgBQACAAACgBQALgEAJABQAKAHAHAHAh3okQACgBAAABQAIAAAHACQgFgFgIgFAh2ohIgBgDIgBgBQAAABABAAQABABADAAQAAgBgCAAAiCohQAFAAAFAAQABAAABAAQACAAABAAAiAoQIAFgKAhpoDIgMgSIgDADAhpoDQgEgDgFgCQgIgFgGgDQgBgBAAAAQgKgIgBgFQAFgCAFgBQgBgGAAgEIgBgBAhjoFQABABACAAQAEAEAEAEQgBABAAABQgBADgBABIgEACIgKgPAh2ohIAQAXIAAABAhjoFIAAgBAhbn2IgFgJQgDgCgGgCAhYn8QgGgEgFgFAhWn5IgFADAhxojQAGACAHABAiBoRQgBgJAAgHAiFosQABABABAAQAFAEAGACAiBoOQgBADABABQAAAGAGAKQALAPABACQAHAEARgBAiBoOQgBgBABgCAiBoOIABgCAB3mJQgIhXARhVQAGgZgGgTQgIgZgfgwQg5hbi0gGQixgGh6BOQkVCxhLBrQhdCFBiCaQAhAzBEA+QBEA8ArBBQATAfADAgQADAhAOAVQBJAqAIANIAAABQAOASAFAGAD0C+QBjAeBaAGQBlAGCMgSICohsQACgHACgDQAAgCgJgOQgIgOhCgJQgagDgTgJIgBAAQgcgNgPgVADCi9QB/AZCLA4QCEA3BXA7IgBABQATAMAQAPIAFAIQA/gkgWiFQgShugohAQgwhLjhgbQhbgMhWACQhTACgnAMIgKAGQAvBCASAlQAbA4gRAtgAjoHzQgKhNgLhnQAigDBEAFQBOAIAoADQCYAKBIguQAogZAGhPIABgBQADg9gNhbQgRhpggh3QgBgEgCgDQAKABAIACQgCAHgFAHAnOEdQAFAKAEADQACABAIAEQADABADABAkGIwQAAAAAIgTQADgHAEgJQAKgaAAgOAgMMMQgBgBgDAA");
	this.shape_6.setTransform(78.7997,-154.4464);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#72132A","#210100"],[0,1],20.7,14.3,-15.1,-18.5).s().p("AEPDdQgQgPgTgNIABAAQhXg9iEg2QiKg5h/gYQARgtgbg3QgSglgvhDIAKgFQAngNBTgCQBWgBBbALQDgAbAwBLQAoBAASBtQAWCGg/Akg");
	this.shape_7.setTransform(122.9751,-173.0587);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#72132A","#210100"],[0,1],8.9,21.9,-21.5,-25.7).s().p("AhPDPQhZgGhkgdIgFAAQACg8gMhcQgRhpggh3IAPgEQgDAIgEAGQAEgGADgIQB/AZCKA5QCEA2BWA9IAAAAIgEAEQAOAVAdAMIABAAQATAJAaADQBBAKAJANQAJAOgBACIgDAKIioBsQhoAOhSAAQgdAAgagCg");
	this.shape_8.setTransform(130.0263,-152.5655);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#5700CD","#210100"],[0,1],-23.9,148.7,119.4,57.3).s().p("AEfMKIAEABIgCACgAAxIcIAGgPQALgaAAgOQAAAOgLAaIgGAPIi/i/IACgJQAAgHgFgKIgDgHQAEgDACgEIACgHIABgDIAAgGQgCgIgHgGQgFgEgFgBIAAgBQgIgNhKgpQgNgWgEggQgCghgUgeQgqhChEg8QhFg9ghgzQhhibBciEQBLhrEVixQB6hOCwAGQC1AGA6BaQAfAwAIAZQAFAUgFAYQgSBWAJBWQAuBDASAlQAcA3gRAtIgSgDIADAHQAgB3ARBpQAMBcgCA8IgBABQgGBPgoAZQhIAuiZgKQgpgChOgIQhEgFgiADIAVCzQgEADgCAGQgDAHAAARIAAAIQgDAEgBAFgAiFExIgHgDIAHADgACYp2QhGAEgjAWQhEAsggBEQgkBKAkA5QAcArBngWQBUgSAqgbQBTg0ARhCQAMgrgIhkQgDgNAAgPQAAAPADANIggACQgbAKhZAEIgEgBIgEABg");
	this.shape_9.setTransform(48.4442,-154.3714);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AgWA3QghgOgKgPQgOgXAAgGQAAgJAXgbQAVgdAXAGQAMADAIAEQACAEAFACIABABIABAAIABALIAAAQQgKgIgBgFIALgDIgLADQABAFAKAIQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIABgCIAEgJIAEgIIAAgCIABgBIABgDIACgFIAGgLQABACAEAAIAKAGQAKAHAGAIQAEADACAEQAMASgUAhQgQAcgLAIQgLAHgPAAQgQAAgUgJgAA1AVIAGgBIACAAIgCAAIgGABIAAAAIgBAAQgJAAgFgDIgBgBIgMgQQgHgKAAgFIAAgBIABgEIgBAEIAAABQAAAFAHAKIAMAQIABABQAFADAJAAIABAAIAAAAgAA0AHIAFgDIACgEIACABIAAABIgEACIAEgCIABgBIAAgBIABAAIAAgBIACgLIACgFIADgJIAHAHQgMAHgCALQACgLAMgHIgHgHIAAgFIgBgGIABAGIAAAFIgCgBIACABIgDAJIgCAFIADgPIgDAPIgFAMIgBAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAABAAIgCgBIAAAAIAAAAIgIgIIgCgCIAAAAIAAAAIAKAKIAAAAIAAAAIgIgDIAIADIgCAEIgGgHIAGAHIgFADIgJgPIAIAFIgFgLIADAEIgDgEIAFALIgIgFIgMgSIgEAEIAEgEIAMASIgJgFIgOgIIAOAIIAJAFIAJAPgAAxgKQgJgNgHgPIAEABIgDgCIANADIgKgBQACACAFABQAHACACAEQgCgEgHgCQgFgBgCgCIAKABIgNgDIgBAAIgBgBIABABIAAABIgCAAIgBAAIgCgCIACACIABAAIACAAQAHAPAJANgAAtgOIABAAIgBAAIgPgYgABEgbIABgFIgMgDIgBAAIgBAAIgDgBIgHgCIADABIgBABIABgBIAHACIgHgCIgDgBIAHACIADABIABAAIABAAIALAIgAAegmIgCAAIACAAgAAtgmQgEgGgJgFIAMgCIAGgBIADAAIgDAAIgGABIgMACQAJAFAEAGQgHgDgHAAIgBgDIABADIgCAAIACAAIABABIgDgBIADABIgBgBQAHAAAHADgAA9ACIAAgBIgBgBIAFgMIgCALIAAABIgBAAIAAABIgBABgAA7AAIABAAIABABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAgAA7AAIAAAAgAA7AAIAAAAgAA7AAIAAAAgAAxgKIACACIAIAIIgKgKgAASgVIAAAAgABGgaIAAAAgAA5gjIAMADIgBAFIgLgIgAAhgmIAAgBIABAAIADACIgEgBgAAhgmIAAAAgAAignIAAAAgAAPgxIABABIABAAIgBAAIgBgBgAARgwgAAggxIAAAAg");
	this.shape_10.setTransform(63.9242,-205.1749);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AitCAQgkg4AkhJQAghFBFgrQAjgWBGgFIAIAAQBZgDAbgLIAfgCQAIBlgMArQgRBBhSAzQgrAchSASQgjAHgbAAQg0AAgTgdgAgVg5QgXAcABAIQgBAIAPAVQAJAQAgAOQAnARAZgPQALgJAQgcQAUghgMgSQgCgEgEgDQAAgDgCgCQgFgIgKgBIgKgGQgDgBgCgBQgSgKgSgCQASACASAKIgFALIgEgDQgMgGgHgCIgEADIACACQgHgFgNgDIgIgBQgSAAgSAYgAA2gnIABABIgBACQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAgAA2gnIgBgQIAKAAIgDAHIgFAKIgBgBgABYhFQAKABAFAIQACACAAADQgHgHgKgHgAA0hBQAFAEAGACQgGgCgFgEIgBgBIABAAIAEgBIAAAAIAAAAIACAAIgCAAIAAAAIAAAAIgEABIgBAAIgBAAQgEgDgDgDIgCgCIAEgDQAHACAMAGIAEADIgEABIACADIgCAEIgBgBIABABIgBADIgKAAIgBgKgAA/g7IABABIAAAAgABCg+IAAAAgABAhBIAEgBIgCAEIgCgDgAA0hBIAAAAgABEhCgABEhCIAAAAg");
	this.shape_11.setTransform(60.36,-203.4055);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(8));

	// Layer_5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("ACxk7Qg8A3iSCBQhTBJhAA7ACxE8QgIgZgMgbQgdhGgdg2QADgOA3hLQAJgNALgO");
	this.shape_12.setTransform(35.625,-102.4125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5700CD","#210100"],[0,1],-66.9,44.3,99,81).s().p("AjKDlIA0jlQBAg8BThJQCSiBA8g3IAAFTIgUAbQg3BLgDAOQAdA2AdBGQALAbAJAZIAAAEg");
	this.shape_13.setTransform(33.05,-102.2125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(8));

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("ALfrjIAAAAQATAJASAMQAVANAUARQAsAkAsA3QBQBjAIBKQABACAAACQAAAGAAAFQACAaAIASQAEAKADAMQADANAAAQQAAAHgDAJQgDAHgEAIQgEAHgCAGQgCAEgBAEQgBAHAAAGIgKAAALbroQjig3iSgEQjKgGjqBKQgqAOjcArQjeArhaAcQhbAdhSB+QhQB5gxCwQg0C2gDC8QgFDMA1CnQA5C2EbAfQBsAMB7gNQBrgLBQgaQC3g5DtjDQBFg3EKj3QAygtAlg1QAKgPAthJQA+hlBgg6QA6giBChM");
	this.shape_14.setTransform(-45.9716,-28.381);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C0069").s().p("AgBBuQgIAAgFgGQgKgJAAgaIABg8QAAgMgDgGIgJgNQgDgGAAgKIABgRIgBgPIAAgKQAAgOAHgIQAHgIAMAAQAMABAFAJQAGAHgBARQAAATACAGIALAXQAEALgBAQIgBAEIABABQAIADAEAKQADAJgDAJIAAABIgEAGQABAFgBAFQgCAIgGAEQAAAMgBAHIAAAEIgDAIQgDAIgHAEIgBABIgDABIgHACIgCgBg");
	this.shape_15.setTransform(50.9442,-64.1913);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#5700CD","#210100"],[0,1],45.6,-95.1,96.8,67).s().p("ApcMfQkbgfg5i2Qg1inAFjMQADi8A0i2QAxiwBQh5QBSh+BbgdQBagcDegrQDcgrAqgOQDqhKDKAGQCSAEDiA3IAEAFIAAAAQALAMASAGIAIADQAPADAXACQAAANADAMQAFAPAJANQAQAXAYAKIA/DHIABAPIgBARQAAAKADAGIAJANQADAGAAANIgBA8QAAAaAKAJQAFAGAIAAQAGABAFgCQhCBMg7AiQhgA6g+BlIg3BYQglA1gyAtQkKD3hFA3QjtDDi3A5QhQAahrALQhAAHg8AAQg3AAg0gGgAM9qwQgUgRgVgNQAVANAUARg");
	this.shape_16.setTransform(-47.5841,-28.381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(8));

	// Layer_1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AFNoIIADAHQgtALjAAiQjIAjgsAdQgMAHgBANQgDANgCADQgGgJgFgJQgwhJhVgFQgcgChAAEQhEAFgngCIhMAwQAHALAFATQAFAZAEAPQAygNBLAMQBPALAvAgIhDArQgwgMgFABQgHACglAXQgLAHgNAPQgNANgIAGQAlA7AOAnQARgMAWgfQAWggAPgKQAOgJAPgEQABgBAAABQAPgFAMABQBBAAAUgCQgXAXg2A4Qg0Azg0AgIAbArQAGgDAHAIQAGAFALASQAUgNAOgaQAOgbAUgNQAKgGAsgQQArgQALgHQARgKACgbQABgFgCguQgChEAnggQAFgEAGgDQAegTDwg1QC5goBDgTQAXgHAKgEAFaoFQgDABgHADIAyBOACUC/QAZBUgyBFQgRAWgsAvQgiAjgVAZQgIALgHAJIhWAcQgEgNgMgQQgHgKgHgJQgFgHgFgGQAqgeAnhBQAqhFAGg4IhMAYQgVAsgFADQgFAFgrAOQgMADgUACQgTAAgJADQgVhDgVgjQAUgGAmADQAnAEAQgGQARgFAMgIIABAAIAAAAQAMgIAKgMQAogwAPgPQgiADhMAFQhIAHg7AUIgPgwQAGgCgCgMQgBgIgGgUQAXgHAdAHQAdAGAXgHQAMgEAogWQAogYANgEQASgGAWAPQAFAEAjAeQAxAtAxgJQAGgBAGgCQAjgLDDiXQCVh0A5gnQAVgOAJgEAI+h1IgchZAJHh7QgEACgFAEQgmAaiWB9QicCDgyAQIgBAAQgMAEgMgGQAAgBgBAAQgKgGgCABQACAJAEAJQgBgBgMgMQgHgIgMgPQgSgWgEgIAJAhuIgCgHAiumCQABADACAPQACAMACASQAFAcAFAI");
	this.shape_17.setTransform(-145.35,50.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#72132A","#210100"],[0,1],-2.4,-6.1,4,3.9).s().p("AhOgOQAJgGANgOQANgPAKgGQAlgYAHgCQAFAAAvALIAQA3QgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgQAEgOAJQgPAJgVAfQgVAfgRAMQgOgngmg5g");
	this.shape_18.setTransform(-189.5,31.599);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#72132A","#210100"],[0,1],-10.8,-26.1,14.9,14.3).s().p("AgbDfQgIgJgGADIgagrQA0ggAygzIBOhPQgVAChAAAQgNgBgPAFIgOg2IBDgrQgvgghOgLQhMgMgxANIgJgoQgGgTgGgLIBLgwQAoACBDgFQBAgEAcACQBUAFAxBJIACASIAFAeQAFAcAFAIIANAQQgnAgADBDIABAzQgDAbgRAKQgKAHgsAQQgrAQgKAGQgVANgOAbQgOAagSAOQgMgSgFgFg");
	this.shape_19.setTransform(-181.675,28.2192);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#5700CD","#210100"],[0,1],-13.7,-19.5,11.4,19.9).s().p("AkKBhQgEgHgFgcIgFgfIAIAAQACgCADgNQABgNAMgHQAsgcDJgjQC/giAtgLIAyBOIAEALQhDATi5AnQjwA0geATIgLAHg");
	this.shape_20.setTransform(-134.45,10.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#72132A","#210100"],[0,1],-1.2,-6.6,2.4,4.8).s().p("AhXgoQATgHAnADQAmAEAQgGQAQgEANgIIABgBIAhAuQgWArgEAEQgFAEgrAOQgMADgTABQgTABgJADQgVhCgVgig");
	this.shape_21.setTransform(-162.325,78);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#72132A","#210100"],[0,1],-4.4,-24.8,10,20.9).s().p("AgnDcIgOgTIgLgOQAqgdAmhCQAqhEAHg3IhLAYIgiguIABgBQAMgIAJgLQAogxAOgOQggADhNAFQhIAHg7ATIgPgvQAGgCgCgNQAAgHgGgUQAWgHAdAHQAeAGAXgHQAMgEAogXQAogXAMgEQASgGAVAPQAFADAjAfQAyAtAxgJIAEAVQADAIASAWIAUAXIAMANQAZBTgyBFQgRAWgsAvQgiAjgVAZIgQAUIhVAbQgEgMgLgQg");
	this.shape_22.setTransform(-152.3722,77.4122);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#5700CD","#210100"],[0,1],-9,-27.4,8.8,29).s().p("AiwDEIgBgBQgKgGgDABIgGAFIgTgXQgTgWgDgIIgDgVIAMgDQAjgLDBiXQCWh0A5gnIAHAKIAbBZQglAaiWB9QibCDgyAQIgBAAIgJACQgIAAgHgEg");
	this.shape_23.setTransform(-112.125,48.5262);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AFNoIIADAHQgtALjAAiQjIAjgsAdQgMAHgBANQgDANgCADQgGgJgFgJQgwhJhVgFQgcgChAAEQhEAFgngCIhMAwQAHALAFATQAFAZAEAPQAygNBLAMQBPALAvAgIhDArQgwgMgFABQgHACglAXQgLAHgNAPQgNANgIAGQAlA7AOAnQARgMAWgfQAWggAPgKQAOgJAPgEQABgBAAABQAPgFAMABQBBAAAUgCQgXAXg2A4Qg0Azg0AgIAbArQAGgDAHAIQAGAFALASQAUgNAOgaQAOgbAUgNQAKgGAsgQQArgQALgHQARgKACgbQABgFgCguQgChEAnggQAFgEAGgDQAegTDwg1QC5goBDgTQAXgHAKgEAFaoFQgDABgHADIAyBOACUC/QAZBUgyBFQgRAWgsAvQgiAjgVAZQgIALgHAJIhWAcQgEgNgMgQQgHgKgHgJQgGgHgEgGQAqgeAnhBQAqhFAGg4IhMAYQgVAsgFADQgFAFgrAOQgMADgUACQgTAAgJADQgVhDgVgjQAUgGAmADQAnAEAQgGQARgFAMgIIABAAIAAAAQAMgIAKgMQAogxAPgOQgiADhMAFQhIAHg7AUIgPgwQAGgCgCgMQgBgIgGgUQAXgHAdAHQAdAGAXgHQAMgEAogWQAogYANgEQASgGAWAPQAFAEAjAeQAxAtAxgJQAGgBAGgCQAjgLDDiXQCVh0A5gnQAVgOAJgEAI+h1IgchZAJHh7QgEACgFAEQgmAaiWB9QicCDgyAQIgBAAQgMAEgMgGQAAgBgBAAQgKgGgCABQACAJAEAJQgBgBgMgMQgHgIgMgPQgSgWgEgIAJAhuIgCgHAiumCQABADACAPQACAMACASQAFAcAFAI");
	this.shape_24.setTransform(-145.35,47.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#72132A","#210100"],[0,1],-1.2,-6.6,2.4,4.8).s().p("AhXgpQATgGAnAEQAmADAQgFQAQgGANgIIABAAIAhAuQgWArgEAEQgFAEgrAOQgMADgTABQgTABgJADQgVhBgVgkg");
	this.shape_25.setTransform(-162.325,75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,1,1).p("AFaoFQgDABgHADQgtALjAAiQjIAjgsAdQgMAHgBANQgDANgCADQgGgJgFgJQgwhJhVgFQgcgChAAEQhEAFgngCIhMAwQAHALAFATQAFAZAEAPQAygNBLAMQBPALAvAgIhDArQgwgMgFABQgHACglAXQgLAHgNAPQgNANgIAGQAlA7AOAnQARgMAWgfQAWggAPgKQAOgJAPgEQABgBAAABQAPgFAMABQBBAAAUgCQgXAXg2A4Qg0Azg0AgIAbArQAGgDAHAIQAGAFALASQAUgNAOgaQAOgbAUgNQAKgGAsgQQArgQALgHQARgKACgbQABgFgCguQgChEAnggQAFgEAGgDQAegTDwg1QC5goBDgTQAXgHAKgEAFNoIIADAHIAyBOACUC/QAZBUgyBFQgRAWgsAvQgiAjgVAZQgIALgHAJIhWAcQgEgNgMgQQgHgKgHgJQgGgHgEgGQAqgeAnhBQAqhFAGg4IhMAYQgVAsgFADQgFAFgrAOQgMADgUACQgTAAgJADQgVhDgVgjQAUgGAmADQAnAEAQgGQARgFAMgIIABAAIAAAAQAMgIAKgMQAogxAPgOQgiADhMAFQhIAHg7AUIgPgwQAGgCgCgMQgBgIgGgUQAXgHAdAHQAdAGAXgHQAMgEAogWQAogYANgEQASgGAWAPQAFAEAjAeQAxAtAxgJQAGgBAGgCQAjgLDDiXQCVh0A5gnQAVgOAJgEAJAhuIgCgHQgmAaiWB9QicCDgyAQIgBAAQgNAEgLgGQAAgBgBAAQgKgGgDABQADAJAEAJQgCgBgLgMQgHgIgMgPQgSgWgEgIAJHh7QgEACgFAEIgchZAiumCQABADACAPQACAMACASQAFAcAFAI");
	this.shape_26.setTransform(-139.35,47.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#72132A","#210100"],[0,1],-2.4,-6.1,4,3.9).s().p("AhNgOQAHgGANgOQAOgPALgGQAkgYAHgCQAFAAAwALIAOA3QAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQgPAEgOAJQgOAJgWAfQgVAfgRAMQgOgnglg5g");
	this.shape_27.setTransform(-183.5,28.599);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#5700CD","#210100"],[0,1],-13.7,-19.5,11.4,19.9).s().p("AkJBhQgGgHgEgcIgFgfIAIAAQACgCADgNQACgNALgHQAtgcDIgjQDAgiAsgLIAyBOIAEALQhDATi5AnQjwA0gfATIgKAHg");
	this.shape_28.setTransform(-128.45,7.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("AFaoFQgDABgHADIAyBOAFNoIIADAHQgtALjAAiQjIAjgsAdQgMAHgBANQgDANgCADQgGgJgFgJQgwhJhVgFQgcgChAAEQhEAFgngCIhMAwQAHALAFATQAFAZAEAPQAygNBLAMQBPALAvAgIhDArQgwgMgFABQgHACglAXQgLAHgNAPQgNANgIAGQAlA7AOAnQARgMAWgfQAWggAPgKQAOgJAPgEQABgBAAABQAPgFAMABQBBAAAUgCQgXAXg2A4Qg0Azg0AgIAbArQAGgDAHAIQAGAFALASQAUgNAOgaQAOgbAUgNQAKgGAsgQQArgQALgHQARgKACgbQABgFgCguQgChEAnggQAFgEAGgDQAegTDwg1QC5goBDgTQAXgHAKgEAI+h1IgchZAJAhuIgCgHQgmAaiWB9QicCDgyAQIgBAAQgMAEgMgGQAAgBgBAAQgKgGgCABQACAJAEAJQAZBUgyBFQgRAWgsAvQgiAjgVAZQgIALgHAJIhWAcQgEgNgMgQQgHgKgHgJQgGgHgEgGQAqgeAnhBQAqhFAGg4IhMAYQgVAsgFADQgFAFgrAOQgMADgUACQgTAAgJADQgVhDgVgjQAUgGAmADQAnAEAQgGQARgFAMgIIABAAIAAAAQAMgIAKgMQAogwAPgPQgiADhMAFQhIAHg7AUIgPgwQAGgCgCgMQgBgIgGgUQAXgHAdAHQAdAGAXgHQAMgEAogWQAogYANgEQASgGAWAPQAFAEAjAeQAxAtAxgJQAGgBAGgCQAjgLDDiXQCVh0A5gnQAVgOAJgEAJHh7QgEACgFAEAiumCQABADACAPQACAMACASQAFAcAFAIACUC/QgBgBgMgMQgHgIgMgPQgSgWgEgI");
	this.shape_29.setTransform(-144.85,55.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#72132A","#210100"],[0,1],-2.4,-6.1,4,3.9).s().p("AhNgOQAHgGANgOQAOgPALgGQAkgYAHgCQAFAAAwALIAOA3QAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQgOAEgOAJQgPAJgWAfQgVAfgSAMQgNgnglg5g");
	this.shape_30.setTransform(-189,36.599);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#72132A","#210100"],[0,1],-1.2,-6.6,2.4,4.8).s().p("AhXgpQATgGAnAEQAmADAQgFQAQgGANgIIABAAIAhAuQgWArgEADQgFAFgrANQgMAEgTACQgTAAgJADQgVhBgVgkg");
	this.shape_31.setTransform(-161.825,83);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#5700CD","#210100"],[0,1],-13.7,-19.5,11.4,19.9).s().p("AkJBhQgGgHgFgcIgEgfIAIAAQACgCADgNQABgNAMgHQAtgcDIgjQDAgiAsgLIAyBOIAEALQhDATi5AnQjwA0gfATIgKAHg");
	this.shape_32.setTransform(-133.95,15.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23,p:{y:48.5262,x:-112.125}},{t:this.shape_22,p:{y:77.4122,x:-152.3722}},{t:this.shape_21},{t:this.shape_20,p:{y:10.175}},{t:this.shape_19,p:{y:28.2192,x:-181.675}},{t:this.shape_18,p:{y:31.599}},{t:this.shape_17}]}).to({state:[{t:this.shape_23,p:{y:45.5262,x:-112.125}},{t:this.shape_20,p:{y:7.175}},{t:this.shape_19,p:{y:25.2192,x:-181.675}},{t:this.shape_22,p:{y:74.4122,x:-152.3722}},{t:this.shape_25,p:{x:-162.325}},{t:this.shape_18,p:{y:28.599}},{t:this.shape_24}]},2).to({state:[{t:this.shape_23,p:{y:45.5262,x:-106.125}},{t:this.shape_28},{t:this.shape_19,p:{y:25.2192,x:-175.675}},{t:this.shape_22,p:{y:74.4122,x:-146.3722}},{t:this.shape_25,p:{x:-156.325}},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_32},{t:this.shape_23,p:{y:53.5262,x:-111.625}},{t:this.shape_19,p:{y:33.2192,x:-181.175}},{t:this.shape_22,p:{y:82.4122,x:-151.8722}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},2).wait(2));

	// Layer_2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,1,1).p("ATTgaQAVgaATglQAgg+ALhCQAcimhvhJQiqhwiwgNQiagLisBCQiGA1i2B0QjTCPhrBHQiYBkiAB+QhJBIgVATQg2Awg8AoQgQALktB8QlECFh7AoQBFgFCpgGQCbgFBcgJQEpgeECh/QAAAlgjBGQASgEAmAAQA7AAAFAAQgUAKACAYQADAVAPAKQA+ApDCgWQClgTDrg9QDLg0C7hBQCxg9AwgfQASgMAhgoQAkgrAcgvQBEhygVg4QgCgHgFgHAD2FtQjFA5gagSQgSgLAlhTQAihMAIgFIgHgFQgbAQhHALQhJAKgbgIQABgUAHgXQAMgtAegdIAHgOQgHAEg0AHQg1AHgIAFQAAgDAohdQApheAEgOIAVAOAOOBoQg2AHgyAJQhiATg1AeQgcgfAvhGQAZglApgwIgDgCQgBgEAEgDQgYAAiMApQh+AmgjAOIgWgOQATgWAig6QAkg+AggoIgDgDQgCgDAFgDQgFADiUAuQiRAsgUAFQAwhnBhhlQAxgzAugsAS3ABQAOgLAOgQ");
	this.shape_33.setTransform(-148.526,-97.4944);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#5700CD","#210100"],[0,1],-40.8,-20.9,80.2,64.2).s().p("AjGIsQgPgKgDgVQgCgYAUgKIhAAAQgmAAgSAEQAjhGAAglQkCB/kpAeQhcAJibAFQipAGhFAFQB7goFEiFQEth8AQgLQA8goA2gwQAVgTBJhIQCAh+CYhkQBrhHDTiPQC2h0CGg1QCshCCaALQCwANCqBwQBvBJgcCmQgLBCggA+QgTAlgVAaQgOAQgOALQAOgLAOgQQAVA4hEByQgcAvgkArQghAogSAMQgwAfixA9Qi7BBjLA0QjrA9ilATQhDAIg0AAQhhAAgogbgAA3GYIAFAAIAIgBIACAAIADgBIABAAIAAAAIACAAIAEgBIABAAIAHgBIACAAIADgBIABAAIABAAIABAAIABgBIACAAIADAAIAAgBIABAAIAEAAIAVgFIACgBIAPgDIABAAIAUgFIABAAIACgBIACAAIAAAAIAIgCIAGgCIABAAIAJgDIAAAAIAAAAIAHgBIAAgBIABAAIACAAIAIgDIAFgBIAFgBIAEgCIABAAIACAAIAFgCIAEgBIABAAIAEgBIAAAAIACgBIgCABIAAAAIgEABIgBAAIgEABIgFACIgCAAIgBAAIgEACIgFABIgFABIgIADIgCAAIgBAAIAAABIgHABIAAAAIAAAAIgJADIgBAAIgGACIgIACIAAAAIgCAAIgCABIgBAAIgUAFIgBAAIgPADIgCABIgVAFIgEAAIgBAAIAAABIgDAAIgCAAIgBABIgBAAIgBAAIgBAAIgDABIgCAAIgHABIgBAAIgEABIgCAAIAAAAIgBAAIgDABIgCAAIgIABIgFAAIgKABIAAAAQgPAAgGgEIgBgBQgGgDAAgMQAAgXAZg4QAihMAIgFIgHgFQgbAQhHALIgDAAIAAAAIgCABIAAAAIgIABQgfAEgWAAIAAAAIgBAAQgUAAgMgEIAAAAIgBAAQABgUAHgXQAMgtAegdIAHgOQgHAEg0AHQg1AHgIAFQAAgDAohdQApheAEgOIAVAOIgVgOQgEAOgpBeQgoBdAAADQAIgFA1gHQA0gHAHgEIgHAOQgeAdgMAtQgHAXgBAUIABAAIAAAAQAMAEAUAAIABAAIAAAAQAWAAAfgEIAIgBIAAAAIACgBIAAAAIADAAQBHgLAbgQIAHAFQgIAFgiBMQgZA4AAAXQAAAMAGADIABABQAGAEAPAAIAAAAIAKgBgAKPCpQA1geBigTQAygJA2gHQg2AHgyAJQhiATg1AeQgKgLAAgRQAAgdAdgsQAZglApgwIgDgCIAAgCQAAgCADgDQgYAAiMApQh+AmgjAOIgWgOQATgWAig6QAkg+AggoIgDgDIAAgBQAAgDADgCQgFADiUAuQiRAsgUAFQAwhnBhhlQAxgzAugsQguAsgxAzQhhBlgwBnQAUgFCRgsQCUguAFgDQgDACAAADIAAABIADADQggAogkA+QgiA6gTAWIAWAOQAjgOB+gmQCMgpAYAAQgDADAAACIAAACIADACQgpAwgZAlQgdAsAAAdQAAARAKALgATTgaQgCgHgFgHQAFAHACAHg");
	this.shape_34.setTransform(-148.526,-97.4944);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2,1,1).p("ASxlpQAWgPAUgTQAigfAOgcQAkhEhoACQifACipApQiUAkipBFQiFA2i1BaQjTBshrA2QiXBLiDBRQhKAtgVAMQg3Agg8AeQgQAJkpB8Qk/CFh5AvQBCgUCkguQCWgqBZgbQEghYEBhyQgCANgmAkQASgHAlgJQA5gPAEgCQgUAJABAIQACAHAOABQA6gCC8g6QCggyDmhTQDHhHC4hIQCuhFAwgYQASgJAigXQAlgaAegZQBHg8gSgPQgBgCgFgBANxjkQg0AQgxAQQhgAhg0AZQgagEAxgnQAagUAqgdIgDAAQgBAAAFgDQgYAGiJA0Qh8AvgjAOIgUAAQAUgNAjgeQAmggAhgXIgDgBQgBAAAFgDQgFADiRA3QiPA2gUAHQA1gzBig/QAygfAvgcADjAnQjBBIgZAAQgQABAngoQAlglAIgEIgHAAQgbANhFAWQhGAXgaAEQACgIAHgKQAPgUAegSIAIgHQgIADgyAQQg0AQgIAEQAAgBAsgtQAsgtAEgGIAUAAASVlXQAOgJAOgJ");
	this.shape_35.setTransform(-125.8717,-41.4516);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#5700CD","#210100"],[0,1],-37.6,-0.3,75,-0.1).s().p("AtbFWQEph8AQgJQA8geA3ggIBfg5QCDhRCXhLIE+iiQC1haCFg2QCphFCUgkQCpgpCfgCQBogCgkBEQgOAcgiAfQgUATgWAPIgcASIAcgSQASAPhHA8QgeAZglAaQgiAXgSAJQgwAYiuBFQi4BIjHBHQjmBTigAyQi8A6g6ACQgOgBgCgHQgBgIAUgJIg9ARQglAJgSAHQAmgkACgNQkBBykgBYQhZAbiWAqQikAuhCAUQB5gvE/iFgAAIBvIABAAIAAAAQAZAADBhIQjBBIgZAAIAAAAIgBAAQgNAAAjgmIACgBQAlglAIgEIgHAAQgbANhFAWQhGAXgaAEQACgIAHgKQAPgUAegSIAIgHQgIADgyAQQg0AQgIAEIAsguQAsgtAEgGIAUAAIgUAAQgEAGgsAtIgsAuQAIgEA0gQQAygQAIgDIgIAHQgeASgPAUQgHAKgCAIQAagEBGgXQBFgWAbgNIAHAAQgIAEglAlIgCABQgjAmANAAIAAAAgADGhhICjg9QCRg3AFgDIgEADIAAAAIADABQghAXgmAgQgjAegUANIAUAAQAjgOB8gvQCJg0AYgGIgEADIAAAAIADAAQgqAdgaAUQggAZAAALQAAAFAJACQA0gZBgghIBlggIhlAgQhgAhg0AZQgJgCAAgFQAAgLAggZQAagUAqgdIgDAAIAAAAIAEgDQgYAGiJA0Qh8AvgjAOIgUAAQAUgNAjgeQAmggAhgXIgDgBIAAAAIAEgDQgFADiRA3IijA9QA1gzBig/IBhg7IhhA7QhiA/g1AzIAAAAgASxlpQgBgCgFgBQAFABABACg");
	this.shape_36.setTransform(-125.8717,-41.4516);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("AOGrTQAhAAApAKQBEAQA5AkQCPBYgSCDQgbDKhqCOQhdB6iiBWQiABDjPA8Qj3BCh8AjQiuAxi0ANQhmAIgcADQhIAJhFATQgTAGkjCRQk5CdhvBCQAxgwBzh8QBphyBEg+QDajNEJhwQgcgYhNgTQAQgLAZgdQAngtADgDQgVAJgQgSQgOgPABgSQALhKCQiEQB6hwDJiJQCrh3CshjQCjheA3gPQAUgGA0ABQA4ACA3AJQCCAYAdA2gAgqjrQisBvgEAfQgDAVBXAbQBPAYAJgDIgBAJQgeAKg3AuQg3AwgMAaQAQAMAWALQAqAUApgEIAQAEQgJACgnAjQgoAkgJACQACADBhAeQBhAfAOAHIACgZANerRQATgDAVABQAEAGABAHAJOo0QgoAkgpAfQhOA+g6AUQAFApBUALQAsAGBAAAIAAAEQACADAFgBQgQASh8BPQhvBGghARIgEAaQAdgBBDAOQBGAOAzABIABAEQAAAEAHgBQgHABiDBRQiBBQgQAMQBtAfCMgGQBGgEA/gG");
	this.shape_37.setTransform(-90.7796,-13.0571);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#5700CD","#210100"],[0,1],-3.9,63.5,11.3,-83.6).s().p("AwnKBQBphyBEg+QDajNEJhwQgcgYhNgTQAQgLAZgdIAqgwQgVAJgQgSQgOgPABgSQALhKCQiEQB6hwDJiJQCrh3CshjQCjheA3gPQAUgGA0ABQA4ACA3AJQCCAYAdA2QAhAAApAKQBEAQA5AkQCPBYgSCDQgbDKhqCOQhdB6iiBWQiABDjPA8Qj3BCh8AjQiuAxi0ANQhmAIgcADQhIAJhFATQgTAGkjCRQk5CdhvBCQAxgwBzh8gAifDpQACADBhAeQBhAfAOAHIACgZIgCAZQgOgHhhgfQhhgegCgDQAJgCAogkQAngjAJgCIgQgEIgCAAIgKABIAAAAIgBAAQgegBgfgMIgJgEQgWgLgQgMQAMgaA3gwQA3guAegKIABgJIgCAAIgBAAQgLAAg0gPIgCAAIgBgBIgLgDIgBAAIgFgCIgCAAQhUgaAAgVIAAgBQAEgfCshvQisBvgEAfIAAABQAAAVBUAaIACAAIAFACIABAAIALADIABABIACAAQA0APALAAIABAAIACAAIgBAJQgeAKg3AuQg3AwgMAaQAQAMAWALIAJAEQAfAMAeABIABAAIAAAAIAKgBIACAAIAQAEQgJACgnAjQgoAkgJACIAAAAgAGxBeIAogBIAHAAQBGgEA/gGQg/AGhGAEIgHAAIgoABIAAAAIgBAAQhsAAhYgZIgCAAIgDgBQAQgMCBhQQCDhRAHgBIgDAAIAAAAQgEAAAAgDIgBgEQgzgBhGgOIgDgBIAAAAIgGgBIgFgBQgigHgXgCIAAAAIgSgBIgFAAIAAAAIgBAAIgBAAIAEgaQAhgRBvhGQB8hPAQgSIgDAAQgDAAgBgCIAAgEQhAAAgsgGQhUgLgFgpQA6gUBOg+QApgfAogkQgoAkgpAfQhOA+g6AUQAFApBUALQAsAGBAAAIAAAEQABACADAAIADAAQgQASh8BPQhvBGghARIgEAaIABAAIABAAIAAAAIAFAAIASABIAAAAQAXACAiAHIAFABIAGABIAAAAIADABQBGAOAzABIABAEQAAADAEAAIAAAAIADAAQgHABiDBRQiBBQgQAMIADABIACAAQBYAZBsAAIABAAIAAAAgAOGrTQAEAGABAHQgBgHgEgGQgVgBgTADQAOgDAQAAIAKABg");
	this.shape_38.setTransform(-90.7796,-13.0571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},3).to({state:[{t:this.shape_38},{t:this.shape_37}]},2).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.9,-233.4,446.29999999999995,341.7);


(lib.ground = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ep8lABpMAbcghsMTdvAAAMgaYBAHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66454C").s().p("Ep8kABpMAbbghrMTduAAAMgaYBAFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ground, new cjs.Rectangle(-4075.1,-206.1,8150.299999999999,412.29999999999995), null);


(lib.foreground = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape.setTransform(0,28.6632);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660044").s().p("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");
	this.shape_1.setTransform(8.95,28.6632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foreground, new cjs.Rectangle(-4050.5,-341.9,8101,741.2), null);


(lib.background_symbol = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#570000","#300700"],[0,1],1432.7,0,-1432.6,0).s().p("EiYlBQ8MAAAihPIAAABIAAgpMExLAAAMAAACh3g");
	this.shape.setTransform(-2972.9,-1.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#570000","#300700"],[0,1],-1433.6,0,1431.7,0).s().p("EiYcBQ8MAAAih3MEw4AAAIAAApIABgBMAAAChPg");
	this.shape_1.setTransform(-1020.575,-1.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#570000","#300700"],[0,1],-1457.2,0,1457.2,0).s().p("EicBBQ8IAAgoMAAAihPIAAABME4DgABMAAACh3g");
	this.shape_2.setTransform(2950.925,2.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#570000","#300700"],[0,1],1482.8,0,-1482.8,0).s().p("EicBBQ8MAAAihPIAAABIAAgpME4DAAAIAAAoMAAAChPg");
	this.shape_3.setTransform(953.675,-1.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_symbol, new cjs.Rectangle(-3949.5,-519.9,7899.1,1039.9), null);


(lib.satan = function(mode,startPosition,loop,reversed) {
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
		
		this.satan_mc.addEventListener("click", playMotionPath.bind(this));
		
		function playMotionPath() {
			this.play();
		}
	}
	this.frame_167 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(167).call(this.frame_167).wait(1));

	// Layer_1
	this.satan_mc = new lib.satan_standing();
	this.satan_mc.name = "satan_mc";
	this.satan_mc.setTransform(-230.95,29.75,1,1,0,0,0,21.3,50.5);

	this.satan_side_mc = new lib.satan_side();
	this.satan_side_mc.name = "satan_side_mc";
	this.satan_side_mc.setTransform(337.8,-112.8,0.6078,0.6078,0,0,0,953.6,226);

	this.satan_stand_mc = new lib.satan_standing();
	this.satan_stand_mc.name = "satan_stand_mc";
	this.satan_stand_mc.setTransform(-230.95,17.1,1,1,0,0,0,21.3,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.satan_mc}]}).to({state:[{t:this.satan_side_mc}]},1).to({state:[{t:this.satan_stand_mc}]},166).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.9,-751.7,1351.1,1278.2);


(lib.mouse_1 = function(mode,startPosition,loop,reversed) {
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
		
		this.mouse_mc.addEventListener("click", playMotionPath.bind(this));
		
		function playMotionPath() {
			this.play();
		}
	}
	this.frame_71 = function() {
		// this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// Layer_1
	this.mouse_mc = new lib.Symbol7();
	this.mouse_mc.name = "mouse_mc";
	this.mouse_mc.setTransform(-265.5,91.85,1,1,0,0,0,-0.8,0.5);

	this.mouse_mc_1 = new lib.Symbol6();
	this.mouse_mc_1.name = "mouse_mc_1";
	this.mouse_mc_1.setTransform(-266.1,94.15,1,1,0,0,0,88.3,28.9);
	this.mouse_mc_1._off = true;

	this.mouse_mc_2 = new lib.Symbol8();
	this.mouse_mc_2.name = "mouse_mc_2";
	this.mouse_mc_2.setTransform(-265.5,91.85,1,1,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mouse_mc}]}).to({state:[{t:this.mouse_mc_1}]},2).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_1}]},1).to({state:[{t:this.mouse_mc_2}]},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.mouse_mc_1).wait(2).to({_off:false},0).wait(1).to({scaleX:0.9971,scaleY:1.0042,skewX:-0.1555,skewY:0.1045,x:-199.4,y:94.1},0).wait(1).to({scaleX:0.9942,scaleY:1.0083,skewX:-0.311,skewY:0.2089,x:-132.8},0).wait(1).to({scaleX:0.9913,scaleY:1.0125,skewX:-0.4665,skewY:0.3134,x:-66.1,y:94.15},0).wait(1).to({scaleX:0.9884,scaleY:1.0167,skewX:-0.622,skewY:0.4178,x:0.45},0).wait(1).to({scaleX:0.9855,scaleY:1.0208,skewX:-0.7775,skewY:0.5223,x:67.1},0).wait(1).to({scaleX:0.9826,scaleY:1.025,skewX:-0.9329,skewY:0.6267,x:133.75,y:94.1},0).wait(1).to({scaleX:0.9797,scaleY:1.0292,skewX:-1.0884,skewY:0.7312,x:200.35,y:94.15},0).wait(1).to({scaleX:0.9768,scaleY:1.0334,skewX:-1.2439,skewY:0.8357,x:267,y:94.1},0).wait(1).to({scaleX:0.9739,scaleY:1.0375,skewX:-1.3994,skewY:0.9401,x:333.7},0).wait(1).to({scaleX:0.971,scaleY:1.0417,skewX:-1.5549,skewY:1.0446,x:400.3},0).wait(1).to({scaleX:0.9681,scaleY:1.0458,skewX:-1.7104,skewY:1.149,x:466.9},0).wait(1).to({scaleX:0.9652,scaleY:1.05,skewX:-1.8659,skewY:1.2535,x:533.6,y:94.15},0).wait(1).to({scaleX:1.0027,scaleY:1.0316,skewX:-0.9114,skewY:8.211,x:533.55,y:94.1},0).wait(1).to({scaleX:1.0402,scaleY:1.0132,skewX:0.043,skewY:15.1684,x:533.6,y:94.15},0).wait(1).to({scaleX:1.0776,scaleY:0.9948,skewX:0.9974,skewY:22.1259},0).wait(2).to({scaleX:1.0961,scaleY:0.9634,skewX:9.6392,skewY:26.0072},0).wait(1).to({scaleX:1.1146,scaleY:0.9319,skewX:18.281,skewY:29.8884,y:94.1},0).wait(1).to({scaleX:1.1331,scaleY:0.9004,skewX:26.9228,skewY:33.7697,x:533.5},0).wait(1).to({scaleX:1.1516,scaleY:0.8689,skewX:35.5646,skewY:37.651,x:533.55},0).wait(2).to({scaleX:0.6337,scaleY:0.9441,skewX:17.9374,skewY:24.9236,y:94.15},0).wait(1).to({scaleX:0.1158,scaleY:1.0192,skewX:0.3101,skewY:12.1961,x:533.6,y:94.1},0).wait(1).to({scaleX:0.4021,scaleY:1.0944,skewX:-17.3171,skewY:179.4687,y:94.15},0).wait(1).to({scaleX:0.92,scaleY:1.1695,skewX:-34.9443,skewY:166.7412},0).wait(2).to({scaleX:0.9202,scaleY:1.0867,skewX:1.5576,skewY:180.2457,x:501.1},0).wait(1).to({skewX:1.5576,x:468.6},0).wait(1).to({x:436.15},0).wait(1).to({x:403.65},0).wait(1).to({x:371.2},0).wait(1).to({x:338.7},0).wait(1).to({x:306.25},0).wait(1).to({x:273.75},0).wait(1).to({x:241.3},0).wait(1).to({x:208.8},0).wait(1).to({x:176.3},0).wait(1).to({x:143.85},0).wait(1).to({x:111.35},0).wait(1).to({x:78.9},0).wait(1).to({x:46.4},0).wait(1).to({x:13.95},0).wait(1).to({x:-18.55},0).wait(1).to({x:-51},0).wait(1).to({x:-83.45},0).wait(1).to({x:-115.95},0).wait(1).to({x:-148.4},0).wait(1).to({x:-180.9},0).wait(1).to({x:-213.35},0).wait(1).to({x:-245.85},0).wait(1).to({x:-278.3},0).wait(2).to({scaleX:0.5521},0).wait(1).to({scaleX:0.184},0).wait(1).to({skewY:0.2457,y:94.1},0).wait(1).to({scaleX:0.5521,skewY:0.2457,y:94.15},0).wait(1).to({scaleX:0.9202},0).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-361.7,45.4,990,127);


(lib.harpy = function(mode,startPosition,loop,reversed) {
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
		
		this.harpy_mc.addEventListener("click", playMotionPath.bind(this));
		
		function playMotionPath() {
			this.play();
		}
	}
	this.frame_147 = function() {
		// this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(147).call(this.frame_147).wait(1));

	// Layer_1
	this.harpy_mc = new lib.harpy_sitting();
	this.harpy_mc.name = "harpy_mc";
	this.harpy_mc.setTransform(356,164.1,1,1,0,0,0,-46.5,-16.4);

	this.harpy_fly_mc = new lib.harpy_flying();
	this.harpy_fly_mc.name = "harpy_fly_mc";
	this.harpy_fly_mc.setTransform(494.8,97.1,1,1.1314,0,0,0,-58.8,-64.8);
	this.harpy_fly_mc._off = true;

	this.harpy_sit_mc = new lib.harpy_sitting();
	this.harpy_sit_mc.name = "harpy_sit_mc";
	this.harpy_sit_mc.setTransform(356,164.1,1,1,0,0,0,-46.5,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.harpy_mc}]}).to({state:[{t:this.harpy_fly_mc}]},3).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_fly_mc}]},1).to({state:[{t:this.harpy_sit_mc}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.harpy_fly_mc).wait(3).to({_off:false},0).wait(1).to({regY:-62.6,scaleX:0.9888,scaleY:1.1316,skewX:-0.0186,skewY:0.0484,x:511,y:93.4},0).wait(1).to({scaleX:0.9777,scaleY:1.1317,skewX:-0.0372,skewY:0.0968,x:527.2,y:87.3},0).wait(1).to({scaleX:0.9665,scaleY:1.1319,skewX:-0.0558,skewY:0.1451,x:543.45,y:81.2},0).wait(1).to({scaleX:0.9553,scaleY:1.132,skewX:-0.0744,skewY:0.1935,x:559.7,y:75.1},0).wait(1).to({scaleX:0.9442,scaleY:1.1322,skewX:-0.0931,skewY:0.2419,x:575.95,y:69},0).wait(1).to({scaleX:0.933,scaleY:1.1323,skewX:-0.1117,skewY:0.2903,x:592.15,y:62.8},0).wait(1).to({scaleX:0.9218,scaleY:1.1325,skewX:-0.1303,skewY:0.3386,x:608.4,y:56.75},0).wait(1).to({scaleX:0.9107,scaleY:1.1327,skewX:-0.1489,skewY:0.387,x:624.6,y:50.65},0).wait(1).to({scaleX:0.8995,scaleY:1.1328,skewX:-0.1675,skewY:0.4354,x:640.85,y:44.55},0).wait(1).to({scaleX:0.8883,scaleY:1.133,skewX:-0.1861,skewY:0.4838,x:657.05,y:38.4},0).wait(1).to({scaleX:0.8771,scaleY:1.1331,skewX:-0.2047,skewY:0.5322,x:673.35,y:32.25},0).wait(1).to({scaleX:0.866,scaleY:1.1333,skewX:-0.2233,skewY:0.5805,x:689.55,y:26.2},0).wait(1).to({scaleX:0.8548,scaleY:1.1334,skewX:-0.2419,skewY:0.6289,x:705.75,y:20.05},0).wait(1).to({scaleX:0.8436,scaleY:1.1336,skewX:-0.2605,skewY:0.6773,x:722,y:13.95},0).wait(1).to({scaleX:0.8324,scaleY:1.1337,skewX:-0.2792,skewY:0.7257,x:738.2,y:7.85},0).wait(1).to({scaleX:0.8213,scaleY:1.1339,skewX:-0.2978,skewY:0.7741,x:754.45,y:1.7},0).wait(1).to({scaleX:0.8101,scaleY:1.134,skewX:-0.3164,skewY:0.8224,x:770.65,y:-4.45},0).wait(1).to({scaleX:0.8008,scaleY:1.1341,skewX:-0.2413,skewY:0.6173,x:794.2,y:-7.5},0).wait(1).to({scaleX:0.7914,skewX:-0.1663,skewY:0.4121,x:817.75,y:-10.65},0).wait(1).to({scaleX:0.7821,scaleY:1.1342,skewX:-0.0912,skewY:0.2069,x:841.3,y:-13.7},0).wait(1).to({scaleX:0.7728,scaleY:1.1343,rotation:-0.0161,skewX:0,skewY:0,x:864.85,y:-16.85},0).wait(1).to({scaleX:0.7635,rotation:0,skewX:0.0589,skewY:-0.2035,x:888.35,y:-19.95},0).wait(1).to({scaleX:0.7541,scaleY:1.1344,skewX:0.134,skewY:-0.4087,x:911.9,y:-23.05},0).wait(1).to({scaleX:0.7448,scaleY:1.1345,skewX:0.2091,skewY:-0.6138,x:935.45,y:-26.2},0).wait(1).to({scaleX:0.7355,scaleY:1.1346,skewX:0.2841,skewY:-0.819,x:959,y:-29.3},0).wait(1).to({scaleX:0.7261,scaleY:1.1347,skewX:0.3592,skewY:-1.0242,x:982.55,y:-32.45},0).wait(1).to({scaleX:0.7168,skewX:0.4343,skewY:-1.2294,x:1014.75,y:-34.6},0).wait(1).to({scaleX:0.7075,scaleY:1.1348,skewX:0.5093,skewY:-1.4346,x:1046.95,y:-36.8},0).wait(1).to({scaleX:0.6981,scaleY:1.1349,skewX:0.5844,skewY:-1.6398,x:1079.1,y:-39.05},0).wait(1).to({scaleX:0.6888,skewX:0.6594,skewY:-1.8449,x:1111.25,y:-41.2},0).wait(1).to({scaleX:0.6795,scaleY:1.135,skewX:0.7345,skewY:-2.0501,x:1143.45,y:-43.4},0).wait(1).to({scaleX:0.6702,scaleY:1.1351,skewX:0.8096,skewY:-2.2553,x:1175.7,y:-45.6},0).wait(1).to({scaleX:0.6608,skewX:0.8846,skewY:-2.4605,x:1207.9,y:-47.8},0).wait(1).to({scaleX:0.6515,x:1240.1,y:-50},0).wait(1).to({scaleX:0.6421,x:1272.25,y:-52.2},0).wait(1).to({scaleX:0.6327,x:1304.45,y:-54.4},0).wait(1).to({scaleX:0.6234,x:1332.9},0).wait(1).to({scaleX:0.614,x:1361.35},0).wait(1).to({scaleX:0.6046,x:1389.75,y:-54.35},0).wait(1).to({scaleX:0.5952,x:1418.2,y:-54.4},0).wait(1).to({scaleX:0.5859,x:1446.65,y:-54.35},0).wait(1).to({scaleX:0.5765,x:1475.05,y:-54.4},0).wait(1).to({scaleX:0.5671,x:1503.5},0).wait(1).to({scaleX:0.5578,x:1531.95},0).wait(1).to({scaleX:0.5484,x:1560.35},0).wait(1).to({scaleX:0.4378,x:1567.45,y:-60.85},0).wait(1).to({scaleX:0.3272,x:1574.5,y:-67.3},0).wait(1).to({scaleX:0.2166,x:1581.6,y:-73.7},0).wait(1).to({scaleX:0.106,x:1588.6,y:-80.2},0).wait(1).to({scaleX:0.0046,skewY:177.5395,x:1595.7,y:-86.6},0).wait(1).to({scaleX:0.1152,x:1602.8,y:-93.1},0).wait(1).to({scaleX:0.2258,x:1609.85,y:-99.55},0).wait(1).to({scaleX:0.3364,x:1616.95,y:-106},0).wait(1).to({scaleX:0.447,x:1624,y:-112.5},0).wait(1).to({scaleX:0.5576,x:1631.1,y:-118.9},0).wait(1).to({scaleX:0.6682,x:1638.2,y:-125.4},0).wait(1).to({scaleX:0.7788,x:1645.25,y:-131.8},0).wait(1).to({scaleX:0.8894,x:1652.35,y:-138.3},0).wait(1).to({scaleX:1,x:1626.2,y:-139.95},0).wait(1).to({scaleX:0.9987,x:1600,y:-141.6},0).wait(1).to({scaleX:0.9974,x:1573.85,y:-143.3},0).wait(1).to({scaleX:0.9962,x:1547.7,y:-144.95},0).wait(1).to({scaleX:0.9949,x:1521.55,y:-146.6},0).wait(1).to({scaleX:0.9936,x:1495.35,y:-148.3},0).wait(1).to({scaleX:0.9923,x:1469.25,y:-149.95},0).wait(1).to({scaleX:0.991,x:1443.05,y:-151.65},0).wait(1).to({scaleX:0.9898,x:1416.9,y:-153.3},0).wait(1).to({scaleX:0.9885,x:1390.75,y:-154.95},0).wait(1).to({scaleX:0.9872,x:1364.6,y:-156.65},0).wait(1).to({scaleX:0.9859,x:1338.4,y:-158.3},0).wait(1).to({scaleX:0.9846,x:1322.45},0).wait(1).to({scaleX:0.9834,x:1306.45},0).wait(1).to({scaleX:0.9821,x:1290.45},0).wait(1).to({scaleX:0.9808,x:1274.45},0).wait(1).to({scaleX:0.9795,x:1258.5,y:-158.25},0).wait(1).to({scaleX:0.9782,x:1242.45,y:-158.3},0).wait(1).to({scaleX:0.977,x:1226.5},0).wait(1).to({scaleX:0.9757,x:1210.45},0).wait(1).to({scaleX:0.9744,x:1194.5},0).wait(1).to({scaleX:0.9731,x:1178.5},0).wait(1).to({scaleX:0.9718,x:1162.5},0).wait(1).to({scaleX:0.9706,x:1146.5},0).wait(1).to({scaleX:0.9693,x:1130.55},0).wait(1).to({scaleX:0.968,x:1114.5},0).wait(1).to({scaleX:0.9667,x:1098.55},0).wait(1).to({scaleX:0.9654,x:1082.5},0).wait(1).to({scaleX:0.9642,x:1066.55},0).wait(1).to({scaleX:0.9629,x:1043.05,y:-154.8},0).wait(1).to({scaleX:0.9616,x:1019.55,y:-151.3},0).wait(1).to({scaleX:0.9603,x:996.05,y:-147.75},0).wait(1).to({scaleX:0.959,x:972.6,y:-144.25},0).wait(1).to({scaleX:0.9578,x:949.05,y:-140.8},0).wait(1).to({scaleX:0.9565,x:925.6,y:-137.3},0).wait(1).to({scaleX:0.9552,x:902.1,y:-133.8},0).wait(1).to({scaleX:0.9539,x:878.65,y:-130.3},0).wait(1).to({scaleX:0.9526,x:855.1,y:-126.8},0).wait(1).to({scaleX:0.9514,x:831.65,y:-123.3},0).wait(1).to({scaleX:0.9501,x:808.15,y:-119.8},0).wait(1).to({scaleX:0.9488,x:784.65,y:-116.3},0).wait(1).to({scaleX:0.9475,x:761.15,y:-112.8},0).wait(1).to({scaleX:0.9462,x:737.7,y:-109.3},0).wait(1).to({scaleX:0.945,x:714.15,y:-105.8},0).wait(1).to({scaleX:0.9437,x:690.7,y:-102.3},0).wait(1).to({scaleX:0.9424,x:651.7,y:-93.05},0).wait(1).to({scaleX:0.9411,x:612.75,y:-83.7},0).wait(1).to({scaleX:0.9398,x:573.7,y:-74.45},0).wait(1).to({scaleX:0.9386,x:534.75,y:-65.2},0).wait(1).to({scaleX:0.9373,x:495.75,y:-55.9},0).wait(1).to({scaleX:0.936,x:456.8,y:-46.65},0).wait(1).to({scaleX:0.9347,x:417.8,y:-37.35},0).wait(1).to({scaleX:0.9334,x:378.8,y:-28.1},0).wait(1).to({scaleX:0.9322,x:339.8,y:-18.8},0).wait(1).to({scaleX:0.9309,x:300.85,y:-9.5},0).wait(1).to({scaleX:0.9296,x:261.85,y:-0.25},0).wait(1).to({scaleX:0.9283,x:222.9,y:9.05},0).wait(1).to({scaleX:0.927,x:183.85,y:18.3},0).wait(1).to({scaleX:0.9258,x:144.9,y:27.6},0).wait(1).to({scaleX:0.9245,x:126.05,y:30.6},0).wait(1).to({scaleX:0.9232,x:107.25,y:33.6},0).wait(1).to({scaleX:0.9219,x:88.4,y:36.6},0).wait(1).to({scaleX:0.9206,x:69.6,y:39.65},0).wait(1).to({scaleX:0.9194,x:50.8,y:42.65},0).wait(1).to({scaleX:0.9181,x:32,y:45.6},0).wait(1).to({scaleX:0.9168,x:13.15,y:48.6},0).wait(1).to({scaleX:0.9155,x:-5.7,y:51.6},0).wait(1).to({scaleX:0.9142,x:-24.55,y:54.6},0).wait(1).to({scaleX:0.2762,x:-43.35,y:57.6},0).wait(1).to({scaleX:0.3619,skewY:-2.4605,x:-62.15,y:60.6},0).wait(1).to({scaleX:1,skewY:-2.4605,x:-81,y:63.6},0).wait(1).to({x:-52.05,y:70.6},0).wait(1).to({x:-23.1,y:77.6},0).wait(1).to({x:5.9,y:84.6},0).wait(1).to({x:34.9,y:91.6},0).wait(1).to({x:63.9,y:98.6},0).wait(1).to({x:92.9,y:105.6},0).wait(1).to({x:121.9,y:112.6},0).wait(1).to({x:150.85,y:119.6},0).wait(1).to({x:179.85,y:126.6},0).wait(1).to({x:208.85,y:133.6},0).wait(1).to({x:237.85,y:140.6},0).wait(1).to({x:266.85,y:147.6},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.2,-347.1,2154.5,729.6);


(lib.fire = function(mode,startPosition,loop,reversed) {
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
		// this.stop();
		
		this.explode_mc.addEventListener("click", playMotionPath.bind(this));
		
		function playMotionPath() {
			this.play();
		}
	}
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(52).call(this.frame_52).wait(1));

	// explode
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-112.15,-391.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-125.5,-435.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(53));

	// explode
	this.explode_mc = new lib.Symbol5();
	this.explode_mc.name = "explode_mc";
	this.explode_mc.setTransform(-220,-116.8,1,1,0,0,0,63.6,30.2);
	this.explode_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explode_mc).wait(1).to({_off:false},0).wait(1).to({regY:108.2,y:-67.65},0).wait(1).to({y:-96.5},0).wait(1).to({y:-125.35},0).wait(1).to({y:-154.25},0).wait(1).to({y:-183.1},0).wait(1).to({y:-211.95},0).wait(1).to({y:-240.85},0).wait(1).to({y:-269.7},0).wait(1).to({y:-298.55},0).wait(1).to({y:-327.4},0).wait(1).to({y:-356.3},0).wait(1).to({y:-385.15},0).wait(1).to({y:-414},0).wait(1).to({y:-442.9},0).wait(3).to({rotation:14.9774,x:-240.1,y:-445.5},0).wait(1).to({rotation:29.9548,x:-258.95,y:-453.25},0).wait(1).to({rotation:44.9323,x:-275.1,y:-465.65},0).wait(1).to({rotation:59.9097,x:-287.45,y:-481.7},0).wait(1).to({rotation:74.8871,x:-295.3,y:-500.5},0).wait(1).to({rotation:89.8645,x:-298.05,y:-520.65},0).wait(1).to({rotation:104.8419,x:-295.45,y:-540.75},0).wait(1).to({rotation:119.8193,x:-287.7,y:-559.6},0).wait(1).to({rotation:134.7968,x:-275.4,y:-575.8},0).wait(1).to({rotation:149.7742,x:-259.3,y:-588.25},0).wait(1).to({rotation:164.7516,x:-240.55,y:-596.1},0).wait(1).to({rotation:179.729,x:-220.45,y:-598.9},0).wait(2).to({y:-572.7},0).wait(1).to({y:-546.5},0).wait(1).to({y:-520.3},0).wait(1).to({y:-494.1},0).wait(1).to({y:-467.9},0).wait(1).to({y:-441.75},0).wait(1).to({y:-415.55},0).wait(1).to({y:-389.35},0).wait(1).to({y:-363.15},0).wait(1).to({y:-336.95},0).wait(1).to({y:-310.8},0).wait(1).to({y:-284.6},0).wait(1).to({y:-258.4},0).wait(1).to({y:-232.2},0).wait(1).to({y:-206},0).wait(1).to({y:-179.85},0).wait(1).to({y:-153.65},0).wait(1).to({y:-127.45},0).wait(1).to({y:-101.3},0).wait(1).to({y:-75.1},0).wait(1).to({y:-48.95},0).wait(1).to({regY:30.2,rotation:0,x:-220,y:-116.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410,-710.1,489.5,779.6);


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

	// foreground
	this.instance = new lib.foreground();
	this.instance.setTransform(-3229.7,731.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// top
	this.background_mc = new lib.top();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(-2922.8,-545.15,1.025,1);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

	// satan
	this.satan_mc = new lib.satan();
	this.satan_mc.name = "satan_mc";
	this.satan_mc.setTransform(-5738.55,150.2,0.5858,0.5858,0,0,0,-231,17.2);

	this.timeline.addTween(cjs.Tween.get(this.satan_mc).wait(1));

	// mouse
	this.mouse_mc = new lib.mouse_1();
	this.mouse_mc.name = "mouse_mc";
	this.mouse_mc.setTransform(-4636.5,319.6,1,1,0,0,0,-265.5,91.9);

	this.timeline.addTween(cjs.Tween.get(this.mouse_mc).wait(1));

	// ground
	this.background_mc_1 = new lib.ground();
	this.background_mc_1.name = "background_mc_1";
	this.background_mc_1.setTransform(-3104.7,497.85);

	this.timeline.addTween(cjs.Tween.get(this.background_mc_1).wait(1));

	// harpy
	this.harpy_mc = new lib.harpy();
	this.harpy_mc.name = "harpy_mc";
	this.harpy_mc.setTransform(-3032.7,39.95,0.4598,0.4598,0,0,0,460.3,144.3);

	this.timeline.addTween(cjs.Tween.get(this.harpy_mc).wait(1));

	// bottom_background
	this.background_mc_2 = new lib.midback_mc();
	this.background_mc_2.name = "background_mc_2";
	this.background_mc_2.setTransform(-3118.45,492.6);

	this.timeline.addTween(cjs.Tween.get(this.background_mc_2).wait(1));

	// explode
	this.explode_mc = new lib.fire();
	this.explode_mc.name = "explode_mc";
	this.explode_mc.setTransform(-1641.95,402.05,1,1,0,0,0,-220.1,-38.8);

	this.timeline.addTween(cjs.Tween.get(this.explode_mc).wait(1));

	// Background
	this.background_mc_3 = new lib.background_symbol();
	this.background_mc_3.name = "background_mc_3";
	this.background_mc_3.setTransform(-2979.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.background_mc_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-7280.2,-812.1,8461.2,2000), null);


// stage content:
(lib.Przybylinski_Final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 10;
		
		function handleKeyDown(event) {
			console.log(root.dante_mc.scaleX);
			if (root.dante_mc.currentFrame == 19){
				root.dante_mc.gotoAndPlay("walking");
			}
				
			if (event.keyCode == 39 && root.background_mc.x > -1953) {
				root.dante_mc.scaleX = -1.484;
			    root.background_mc.x = root.background_mc.x - speed;
				
			}
			if (event.keyCode == 37 && root.background_mc.x < 3846) {
				root.dante_mc.scaleX = 1.484;
			    root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event) {
			root.dante_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.harpy_mc.addEventListener("click",handleClickHarpy);
		
		function handleClickHarpy(event){
			var bird_snd = createjs.Sound.play("bird");
			root.background_mc.harpy_mc.play();
		}
		
		this.background_mc.explode_mc.addEventListener("click",handleClickExplode);
		
		function handleClickExplode(event){
			var flame_snd = createjs.Sound.play("flame");
			root.background_mc.explode_mc.play();
		}
		
		this.background_mc.satan_mc.addEventListener("click",handleClickSatan);
		
		function handleClickSatan(event){
			var laugh_snd = createjs.Sound.play("laugh");
			root.background_mc.satan_mc.play();
		}
		
		this.background_mc.mouse_mc.addEventListener("click",handleClickMouse);
		
		function handleClickMouse(event){
			var mouse_snd = createjs.Sound.play("mouse");
			root.background_mc.mouse_mc.play();
		}
		
		this.play_btn.addEventListener("click",handleClickPlayButton);
		
		function handleClickPlayButton(event){
			var ambient_snd = createjs.Sound.play("ambient");
			root.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// button
	this.play_btn = new lib.play_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(948.25,806.25);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1));

	// text
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-488.1,138.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-20,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

	// dante
	this.dante_mc = new lib.walking();
	this.dante_mc.name = "dante_mc";
	this.dante_mc.setTransform(1567.8,761.9,1.484,1.484,0,0,0,133.3,-38.1);
	this.dante_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dante_mc).wait(1).to({_off:false},0).wait(1));

	// Background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(-1753.4,743.7,1,1,0,0,0,-3081.1,187.8);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-4992.5,283.8,7501.2,1460);
// library properties:
lib.properties = {
	id: '5AB126C4A33BE743A8C4A3FE76F33317',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_8.png?1621636141421", id:"CachedBmp_8"},
		{src:"images/CachedBmp_7.png?1621636141421", id:"CachedBmp_7"},
		{src:"images/CachedBmp_2.png?1621636141421", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png?1621636141421", id:"CachedBmp_1"},
		{src:"images/Przybylinski_Final_atlas_1.png?1621636141253", id:"Przybylinski_Final_atlas_1"},
		{src:"sounds/ambient.mp3?1621636141421", id:"ambient"},
		{src:"sounds/bird.mp3?1621636141421", id:"bird"},
		{src:"sounds/flame.mp3?1621636141421", id:"flame"},
		{src:"sounds/laugh.mp3?1621636141421", id:"laugh"},
		{src:"sounds/mouse.mp3?1621636141421", id:"mouse"}
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
an.compositions['5AB126C4A33BE743A8C4A3FE76F33317'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;