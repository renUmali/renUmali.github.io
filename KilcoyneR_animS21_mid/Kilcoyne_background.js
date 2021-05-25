(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Kilcoyne_background_atlas_1", frames: [[0,0,800,600],[802,0,800,600],[0,602,800,600],[0,1204,800,600],[802,602,800,600],[802,1204,800,600]]},
		{name:"Kilcoyne_background_atlas_2", frames: [[0,0,800,600],[802,0,800,600],[0,602,800,600],[0,1204,800,600],[802,602,800,600],[802,1204,800,600]]},
		{name:"Kilcoyne_background_atlas_3", frames: [[0,602,1024,400],[0,0,800,600],[802,0,800,600],[1026,602,480,360]]}
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



(lib.cavebackground = function() {
	this.initialize(ss["Kilcoyne_background_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fire0001 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fire0002 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fire0003 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fire0004 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fire0005 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fire0006 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fire0007 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fire0008 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fire0009 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fire0010 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fire0011 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fire0012 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fire0013 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fire0014 = function() {
	this.initialize(ss["Kilcoyne_background_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tattoo = function() {
	this.initialize(ss["Kilcoyne_background_atlas_3"]);
	this.gotoAndStop(3);
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


(lib.text = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("\"The Cave\" \nby Ryan Kilcoyne", "bold 54px 'Gill Sans'", "#FFFFFF");
	this.text.lineHeight = 69;
	this.text.lineWidth = 584;
	this.text.parent = this;
	this.text.setTransform(-292.05,-228.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-294,-230.9,588.1,461.9), null);


(lib.ruby = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AARGzIKQqxIjFi0IuXAAIjlDVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(8,1,1).p("AAWjaIDhh/IBuBSIBMhZAAWjaIEYAAIEXAAAk+jaIFKI7IEio7Ak+jaICmiDICuCDApEjaIEGAAAmeldIBgCDIFUAA");
	this.shape_1.setTransform(0.7,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.408)").s().p("AqgjcIDljWIOXAAIDFC0IqRKxgAATFbIEio7IEXAAIkXAAIkYAAIDhh/IBuBTIBLhaIhLBaIhuhTIjhB/IiuiDIilCDIhhiDIBhCDIkGAAIEGAAgAk2jgIFTAAIEYAAIkiI7gAAdjgIlTAAICliDICuCDgAAdjggAk2jggAk2jggAk2jgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ruby, new cjs.Rectangle(-71.3,-47.5,142.6,95), null);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupils
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD7AvQgTgUAAgbQAAgaATgUQAUgTAbAAQAcAAATATQAUAUAAAaQAAAbgUAUQgTATgcABQgbgBgUgTgAlYAvQgUgUAAgbQAAgaAUgUQATgTAcAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbABQgcgBgTgTg");
	this.shape.setTransform(-5.475,-21.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:true},1).wait(5).to({_off:false},0).wait(11));

	// eyes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACsC4QgzhMAAhsQAAhrAzhNQAyhMBJAAQBIAAAzBMQAzBNAABrQAABsgzBMQgzBNhIAAQhJAAgyhNgAmhC4QgzhMAAhsQAAhrAzhNQAzhMBIAAQBIAAAzBMQAzBNAABrQAABsgzBMQgzBNhIAAQhIAAgzhNg");
	this.shape_1.setTransform(-6.575,-21.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACsBoQgzgrAAg9QAAg8AzgrQAygsBJABQBIgBAzAsQAzArAAA8QAAA9gzArQgzArhIABQhJgBgygrgAmhBoQgzgrAAg9QAAg8AzgrQAzgsBIABQBIgBAzAsQAzArAAA8QAAA9gzArQgzArhIABQhIgBgzgrg");
	this.shape_2.setTransform(-6.575,-21.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACsA1QgzgWAAgfQAAgeAzgXQAygVBJgBQBIABAzAVQAzAXAAAeQAAAfgzAWQgzAXhIgBQhJABgygXgAmhA1QgzgWAAgfQAAgeAzgXQAzgVBIgBQBIABAzAVQAzAXAAAeQAAAfgzAWQgzAXhIgBQhIABgzgXg");
	this.shape_3.setTransform(-6.575,-21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AC5ASQgtgPgTgYIgDgGQgBgEAEgBQADgBAEAFQAXAcA4AOQBVAWBSgQQA+gNAaghQAEgHAEACQADABAAAEIgDAGQgEAHgIAHQgjAdg9AJQgfAGgeAAQg7AAg5gUgAmVAOQgtgOgTgZIgDgHQgBgEAEgBQADAAAEAEQAXAeA4ANQBVAWBSgRQA+gNAaghQAEgGAEACQADABAAAEIgDAGQgEAGgIAHQgjAdg9AKQgfAFgeAAQg7AAg5gTg");
	this.shape_4.setTransform(-6.3814,-17.0468);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACsA1QgzgWAAgfQAAgeAzgXQAygWBJAAQBIAAAzAWQAzAXAAAeQAAAfgzAWQgzAXhIAAQhJAAgygXgAmhA1QgzgWAAgfQAAgeAzgXQAzgWBIAAQBIAAAzAWQAzAXAAAeQAAAfgzAWQgzAXhIAAQhIAAgzgXg");
	this.shape_5.setTransform(-6.575,-21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},6).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(3).to({_off:true},2).wait(11));

	// head
	this.instance = new lib.tattoo();
	this.instance.setTransform(-27.25,-80,0.2594,0.3391);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiDCQgRgDgKgJQgIgHgDgKQgDgLACgKQACgKAHgIQAIgIAJgDQAIgDAMABIAUABQAbACAcgIQACgPgRgaQg1hRg0hHQgNgRgJgIIgPgLQgJgHgEgGQgIgKACgPQACgOAKgJQAJgJAOgDQAOgCAMAEQAYAJAbAlIBaB9QAVAdAJAPQAQAbAGAXQAHAbgGAbQgGAdgUARQgTAPgfAFQgSADgjAAQgVAAgLgCg");
	this.shape_6.setTransform(1.3924,9.7304);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF99").s().p("AqRKSQkQkRAAmBQAAmAEQkRQERkQGAAAQGBAAEQEQQERERAAGAQAAGBkRERQkQEQmBAAQmAAAkRkQgAAIDUQgIAEgIAHQgGAJgDAJQgCAKADALQAEALAHAGQAJAKASADQAKABAVAAQAkAAASgCQAggGASgPQAUgRAGgdQAGgbgHgbQgGgXgQgaQgJgPgVgfIhah8QgbglgYgIQgMgFgOADQgNACgKAJQgKAKgCAOQgBAOAHAKQAEAHAJAGIAPALQAJAIANAQQA0BHA1BTQASAZgDAPQgcAIgcgCIgUgBIgDAAQgKAAgHACg");
	this.shape_7.setTransform(-4.25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.instance}]}).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-93,194.5,186);


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

	// Layer_1
	this.instance = new lib.fire0001();
	this.instance.setTransform(-384,-408);

	this.instance_1 = new lib.fire0002();
	this.instance_1.setTransform(-384,-408);

	this.instance_2 = new lib.fire0003();
	this.instance_2.setTransform(-385,-408);

	this.instance_3 = new lib.fire0004();
	this.instance_3.setTransform(-389,-413);

	this.instance_4 = new lib.fire0005();
	this.instance_4.setTransform(-398,-410);

	this.instance_5 = new lib.fire0006();
	this.instance_5.setTransform(-396,-402);

	this.instance_6 = new lib.fire0007();
	this.instance_6.setTransform(-382,-405);

	this.instance_7 = new lib.fire0008();
	this.instance_7.setTransform(-385,-405);

	this.instance_8 = new lib.fire0009();
	this.instance_8.setTransform(-376,-403);

	this.instance_9 = new lib.fire0010();
	this.instance_9.setTransform(-376,-405);

	this.instance_10 = new lib.fire0011();
	this.instance_10.setTransform(-376,-404);

	this.instance_11 = new lib.fire0012();
	this.instance_11.setTransform(-370,-401);

	this.instance_12 = new lib.fire0013();
	this.instance_12.setTransform(-362,-405);

	this.instance_13 = new lib.fire0014();
	this.instance_13.setTransform(-365,-403);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398,-413,836,612);


(lib.Body = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AgSxGIDYGVIDgj6AnmtpIC4DCIEcmfAjZNCIDIACIgB+KAjZNCIAAD1IGGAGArtQuIIUAJAtBM6IJoAIAC3NGIgKD3II7AKAC3NGIKLAIAgRNEIDIAC");
	this.shape.setTransform(-0.75,-29.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(12,1,1).p("AtBoYQBCj2CDjMQBGhrBNhQQDPjUEGgJQAKAAAKAAQDmAAC9CcQB1BgBlCcQB0C1BBDVQBSEOAAFCQAABUgFBRQgODKgxCzQggB0guBrQgGANgGAOQguBjg7BcQkIGYl1AAQl0AAkImYQhChngxhxQgEgJgEgJQguhsgfh2Qg5jbgFj7QgBgcAAgdQAAkhBCj3g");
	this.shape_1.setTransform(-0.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnFANQDPjTEEgIIkbGegAAOjOIAVgBQDnAAC8CcIjgD5g");
	this.shape_2.setTransform(-4.0375,-118.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999933").s().p("AjHB3IAAj0IDHACIDIACIgKD3g");
	this.shape_3.setTransform(-2.5,66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ACsB9IAKj3IKMAIQggBzguBrIgMAbgArsBtIgIgRQguhrgfh3IJoAIIAAD0g");
	this.shape_4.setTransform(-0.75,66.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("Ap8PaQhBhmgyhyIIUAJIGFAHII7AJQgtBkg7BbQkIGZl1AAQl0AAkImZgAC0IaIjHgCIgB+KIDXGVIDgj5QB1BgBlCcQB0C1BBDVQBSEOAAFCQAABUgGBQQgODKgxC0gAjbIWIppgIQg4jagGj8IgBg4QAAkhBCj3QBCj2CDjMQBGhsBNhPIC5DCIEcmfIABeKgAgU1yg");
	this.shape_5.setTransform(-0.5,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Body, new cjs.Rectangle(-96.5,-145.5,192,291), null);


(lib.bat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(22,1,1).p("AEoA6IAQAEABiATIDGAnAE5A+IDoAtIBgATAKOCAIDGAnAtTimIERA2IDCAmIGbBQ");
	this.shape.setTransform(34.175,-235);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15,1,1).p("ABwiGIA1ChIArBFIA+BnIAnBAIA0giIBIgwIA5gvIA3gsIAAAAIAWgKIBHhbAGmC+IgGAFIAGgFgAGxC1IAAAAIgFAFQgDACgDACAGsC6IAFgFAGgDDIgnAgAE1EHIAAgpIAMgEIgCAHgAonAWIgRg3IgoiFIgdhgAjKiyIigCRQgEADgEAEIhWBNQhQAWgMgoQgBgDgBgC");
	this.shape_1.setTransform(26.625,-211.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(10,1,1).p("EAFug1rICVAAEAFug1rQAqAHBrgHQBGgFBJAAQFcAAEnBwQAmAOAlAQQDwBoDNC3QAwAqA4A6QAEAEAEAFEAUVg0AIKsqQIB4UXEAeWgtNIAAAAIgDgDIgDgDQADADADADQBeBmBFBuQDGE8AAGFQAAJeniGtQjSC7j5BqQlACImAAAQqdAAndmfQgIgHgIgHQnimtAApeQAApeHimtQBIhBBOg3IAAAAIAUg6IFDu6IF5LEEAVrgz7QJfjggzKGQgBADAAAFEAeQgtTIgDgDQADADADADEAZjgklQgZDdhmCSQhlCTh2gOQh2gOhBimQhBilAajdQAajdBmiSQBliSB2ANQB2AOBACmQBCCmgbDcgEAV5gkiQgPCCgeBZQgeBbgbgDQgbgEgIheQgIheAPiCQAPiCAehaQAehZAbADQAbADAIBeQAJBegQCCgEAHGgnlQgZDchlCTQhlCTh1gOQh1gNhCimQhCilAajdQAZjdBjiTQBmiSB1ANQB2ANBCCmQBBCmgZDdgAWeilIg+mpAWeilQgXARgXASEgC4Ax+QHrhtGIplQGOpvEnx6QMpOkG9sHQDMliBmNWQFZpoFKLZQJnr5giJ6Qb0OVpKsPUgbRglfgXrAGTQlmBflaD8EgEigxmIAAAAQAAAAAAAAQBag6BhguIAEgCIACgBIgPAIIAJgFQADgBADgCQACAABigeIgCABIiAAuIijBaQCchPCHg5EgFigw7QAggXAggUEgBwgzJIgPAJEgQIAs2QhkiQg/jIQjSqgDW0dQiGA6h5AsQxmGXACt9QAAmYoEKwQAKrBqKHRQiZvFkfI2Q/QhgODmBUAqXgS2ARWARRQEZEYCzGrIGBrCQA3hMA6hIEADcgniQgPCCgeBaQgdBagbgDQgbgEgJheQgIheAPiCQAOiCAehaQAdhZAbADQAcADAIBeQAJBegPCCgEgC4Ax+QiPAfiXgLEgQIAs2QBgCJCCBVQCPBeC5AgEgC4Ax+IjaLbIEIDXEgQIAs2ImbL6IDXDnEAADgzvQDKhWChgmEgEigxmQC+oeHSEZ");
	this.shape_2.setTransform(-27.375,-84.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AIqGaQgbgDgJhfQgIheAQiBQAPiBAdhbQAehZAbADQAcADAIBeQAIBfgPCAQgQCCgeBaQgdBXgaAAIgBAAgApyDaQgbgEgIheQgJhdAPiCQAPiBAdhaQAehaAbADQAbADAIBeQAJBfgPCBQgOCBgeBaQgdBXgaAAIgCAAg");
	this.shape_3.setTransform(47.1968,-328.3001);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxPUIg9hmIAAgCQgCgSADgQIABgEIABgGIAAAAIgBgBIgDgBQgSgGgRgLIgGgEIg2iiIA2CiQgfgXgPghQgNgbgBgeQgBgNACgOQACgMADgKQAEgMAGgLIAIgPQAJgMAKgLQALgLAOgIIAAAAIANgIIAJgEQASgHARgDQAogFAnARQAmAQAXAgIjFgmIDFAmIAAABIABABIADAFIAIgCIAEgBIABAAQAQgDARAAIAFgDQAegQAkgBQAkgBAfAPQAfAOAWAcIAIAMQAPAYAFAbQAFAYgEAYIgBAHIgCAIIAAACIhIBcIgWAJIgCABIACgBQgwAWAAABIgBAFIgGARIg5AvIhIAvIgGAAIgKAAQgOgBgMgCIACgHIgMAEIAAApQgWg7gRgGgAE0NsIgMACIgEABIgNABIgBAAQgBAFAfgJgAGQKOIjogtgADUPDIgFAEIAGgEIgBAAIA5gvQgDAKgGAKQgNAYgWASQgVARgaAJIgRAEIgCAAIgDABIAoggIAFgFIAAAAIgvAlIgOABgADJPMIAGgFIgGAFgABiPvIgKgDIAMgEIgCAHIAAAAgAAlPPIgCgCIgDgDQgSgQgLgWQgMgZgDgdIA9BmQgKgDgCgCgADJPMIAAAAIgFAFgADJPMgAENOUIAAAAgAgMNugAFENngAFaNeIgGADIgQAGgAFaNeIAAAAgAGiMCQgIAfgUAYQgMAPgQALIgQALgArpMJQgQgHgMgKIgBAAIgPgNIgoiFIAoCFQgKgKgIgMIgJgOQgHgPgEgRQgGgYACgZIACgQIAGgTQAHgVAPgTIAIgKQACgTAGgRQAMggAagYQALgLANgIQAQgJARgGQAggJAiAFQAjAGAbATQATANAOATQAGAJAFAJQAPAdADAfIAAAFQABAjgPAhQgLAVgPAQIAAAFQgCALgDALQgLAigbAaIgIAIQghAcgoAGIgOABIgHAAQgfAAgdgNgAoRHYIjCgmgAGiMCIAAAAgACXJdgAIQDWQh1gNhBimQhBilAajdQAajcBliTQBmiSB1AOQB2AOBBClQBBCmgaDdQgaDdhmCRQhcCFhrAAIgUgBgAIroEQgdBagPCCQgQCBAIBeQAJBeAbADQAbADAdhZQAehaAQiBQAPiCgIhfQgIhdgcgEIgCAAQgaAAgdBXgAqKAXQh2gNhCilQhBimAZjdQAZjcBliTQBliTB2AOQB2ANBBClQBBCmgYDdQgaDdhlCSQhcCGhqAAIgUgBgApyrEQgdBagPCCQgPCCAJBeQAIBeAbADQAcADAdhaQAehaAOiCQAPiBgJhfQgIhegbgDIgCAAQgaAAgdBXg");
	this.shape_4.setTransform(48.6994,-289.707);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996699").s().p("ARUE5IgDgDIgIgJQg4g6gwgqQjNi3jwhnIALgZQJfjggzKFIgBAIIgGgGgAnNjeQihAmjKBWIhlAeIgCABIgEACQhhAuhaA5QC+odHTEZg");
	this.shape_5.setTransform(55.4226,-405.3863);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("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");
	this.shape_6.setTransform(-27.375,-130.074);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(10,1,1).p("EAECg1rICVAAEAECg1rQAqAHBrgHQBHgFBIAAQFcAAEoBwQAlAOAlAQQDxBoDNC3QAvAqA4A6QAEAEAEAFEASqg0AIKsqQIB4UXEAcqgtNIAAAAIgDgDIgCgDQACADADADQBeBmBGBuQDGE8AAGFQAAJeniGtQjTC7j4BqQlBCImAAAQqcAAndmfQgJgHgIgHQnimtAApeQAApeHimtQBJhBBNg3IABAAIATg6IFEu6IF4LEEAT/gz7QJfjggzKGQgBADAAAFEAclgtTIgEgDQADADADADEAX4gklQgaDdhmCSQhlCTh2gOQh1gOhBimQhBilAajdQAajdBliSQBmiSB1ANQB2AOBBCmQBBCmgaDcgEAUOgkiQgQCCgeBZQgdBbgbgDQgbgEgJheQgIheAQiCQAPiCAdhaQAehZAbADQAcADAIBeQAIBegPCCgEAFbgnlQgaDchlCTQhkCTh2gOQh1gNhCimQhBilAZjdQAZjdBliTQBkiSB2ANQB2ANBBCmQBCCmgZDdgEAsDgJaQh6jVrNFtQgnATgmAWQlMC+jfAyQgJADgIABQgYARgXASAVGizQgKAHgJAHIg/mpAUVKYQAFAKAHAKQCCDXFGBEQFWBHBniBQBoiCBTiKQBTiKEuJNQIspDgrJbQD5j5A0giQmMjVp1mRQFfp6hri7IUpVrQAuAsAlBDQAOAZAMAbQBACSiLgRQidgSmhjiEgEjAx+QHrhtGHplQGPpvEnx6QANAQAOAPEgGOgxmIAAAAQAAAAABAAQBag6BgguIAEgCIACgBIgPAIIAJgFQADgBADgCQACAABkgeIgCABIiCAuIijBaQCchPCJg5EgHNgw7QAfgXAggUEgDcgzJIgPAJEgmLgQ7I5jPnQhNAphHBYQjUEHNljPQG1hnLIjgQiwrACZiZQCtiuJVIaQAhAdAfAfQEBEADaEWQAUAaAUAaIGCrCQA2hMA7hIA00IvQgEADgDAEQi1Cck8gRQlcgUhDiYQhDiYgsibQgsibm8HrQmEq+hzJRQivkxgpgvEABwgniQgOCCgeBaQgdBagcgDQgagEgIheQgJheAPiCQAPiCAchaQAehZAbADQAbADAIBeQAJBegPCCgAxkiPQAPAjAPAjA0ZIVQgNANgOANQAQgHARgHQjVUdDRKgQA/DIBlCQQBfCJCCBVQCPBeC5AgEgEjAx+QiPAfiYgLEgEjAx+IjbLbIEIDXEgRzAs2ImbL6IDWDnEgBngzvQDJhWCggmEgGNgxmQC9oeHSEZ");
	this.shape_7.setTransform(-16.6066,-84.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("EBBOAQ4QidgTmhjiQmMjVp1mRQFfp5hri8IUpVsQAuArAlBDQAOAZAMAcQA5CChqAAQgMAAgOgBgEhCCAAvQBHhXBNgpIZjvnQiZCZCwLAQrIDfm1BoQl/BbitAAQjcAAB3iUg");
	this.shape_8.setTransform(-16.6066,-84.316);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("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");
	this.shape_9.setTransform(-15.15,-130.074);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(15,1,1).p("ABwiGIA1ChIArBFIA+BnIAnBAIA0giIBIgwIA5gvIA3gsIAAAAIAWgKIBHhbAGsC6IAFgFIAAAAIgFAFQgDACgDACIgGAFIAGgFIAAAAAGgDDIgnAgAE1EHIAAgpIAMgEIgCAHgAonAWIgRg3IgoiFIgdhgAjKiyIigCRQgEADgEAEIhWBNQhQAWgMgoQgBgDgBgC");
	this.shape_10.setTransform(26.625,-211.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(22,1,1).p("AEoA6IAQAEABiATIDGAnAKOCAIDGAnAE5A+IDoAtIBgATAtTimIERA2IDCAmIGbBQ");
	this.shape_11.setTransform(34.175,-235);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("EAGXg1rQBHgFBIAAQFcAAEoBwQAlAOAlAQQDxBoDNC3QAvAqA4A6QAEAEAEAFEAECg1rQAqAHBrgHEAECg1rICVAAEASqg0AIKsqQIB4UXEAcqgtNIAAAAIgDgDIgCgDQACADADADQBeBmBGBuQDGE8AAGFQAAJeniGtQjTC7j4BqQlBCImAAAQqcAAndmfQgJgHgIgHQnimtAApeQAApeHimtQBJhBBNg3IABAAIATg6IFEu6IF4LEEAT/gz7QJfjggzKGQgBADAAAFEAclgtTIgEgDQADADADADEAX4gklQgaDdhmCSQhlCTh2gOQh1gOhBimQhBilAajdQAajdBliSQBmiSB1ANQB2AOBBCmQBBCmgaDcgEAUOgkiQgQCCgeBZQgdBbgbgDQgbgEgJheQgIheAQiCQAPiCAdhaQAehZAbADQAcADAIBeQAIBegPCCgEAFbgnlQgaDchlCTQhkCTh2gOQh1gNhCimQhBilAZjdQAZjdBliTQBkiSB2ANQB2ANBBCmQBCCmgZDdgAUzilIg/mpAVGizQgKAHgJAHQgYARgXASEAsDgJaQh6jVrNFtQgnATgmAWQlMC+jfAyQgJADgIABEgEjAx+QHrhtGHplQGPpvEnx6QANAQAOAPAUVKYQAFAKAHAKQCCDXFGBEQFWBHBniBQBoiCBTiKQBTiKEuJNQIspDgrJbQD5j5A0giQmMjVp1mRQFfp6hri7IUpVrQAuAsAlBDQAOAZAMAbQBACSiLgRQidgSmhjiEgHNgw7QAfgXAggUQAAAAABAAQBag6BgguIAEgCIACgBIgPAIIgPAJIijBaIAAAAEgBngzvIgCABIiCAuEgDcgzJIAJgFQADgBADgCQACAABkgeQDJhWCggmEgGOgxmQCchPCJg5EgmLgQ7I5jPnQhNAphHBYQjUEHNljPQG1hnLIjgQiwrACZiZQCtiuJVIaQAhAdAfAfQEBEADaEWQAUAaAUAaIGCrCQA2hMA7hIA00IvQgEADgDAEQi1Cck8gRQlcgUhDiYQhDiYgsibQgsibm8HrQmEq+hzJRQivkxgpgvEABwgniQgOCCgeBaQgdBagcgDQgagEgIheQgJheAPiCQAPiCAchaQAehZAbADQAbADAIBeQAJBegPCCgAxkiPQAPAjAPAjA00IvQAQgHARgHQjVUdDRKgQA/DIBlCQQBfCJCCBVQCPBeC5AgA0ZIVQgNANgOANEgEjAx+QiPAfiYgLEgEjAx+IjbLbIEIDXEgRzAs2ImbL6IDWDnEgGNgxmQC9oeHSEZ");
	this.shape_12.setTransform(-16.6066,-84.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAxPUIg9hmIAAgCQgCgSADgQIABgEIABgGIAAAAIgBgBIgDgBQgSgGgRgLIgGgEIg2iiIA2CiQgfgXgPghQgNgbgBgeQgBgNACgOQACgMADgKQAEgMAGgLIAIgPQAJgMAKgLQALgLAOgIIAAAAIANgIIAJgEQASgHARgDQAogFAnARQAmAQAXAgIjFgmIDFAmIAAABIABABIADAFIAIgCIAEgBIABAAQAQgDARAAIAFgDQAegQAkgBQAkgBAfAPQAfAOAWAcIAIAMQAPAYAFAbQAFAYgEAYIgBAHIgCAIIAAACIhIBcIgWAJIgCABIACgBQgwAWAAABIgBAFIgGARIg5AvIhIAvIgGAAIgKAAQgOgBgMgCIACgHIgMAEIAAApQgWg7gRgGgAE0NsIgMACIgEABIgNABIgBAAQgBAFAfgJgAGQKOIjogtgADUPDIgFAEIgGAFIAGgFIAGgEIgBAAIA5gvQgDAKgGAKQgNAYgWASQgVARgaAJIgRAEIgCAAIgDABIAoggIAFgFIAAAAIAAAAIgvAlIgOABgADEPRIAFgFgABiPvIgKgDIAMgEIgCAHIAAAAgAAlPPIgCgCIgDgDQgSgQgLgWQgMgZgDgdIA9BmQgKgDgCgCgADUPDgAENOUIAAAAgAgMNugAFENngAFaNeIgGADIgQAGgAFaNeIAAAAgAGiMCQgIAfgUAYQgMAPgQALIgQALgArpMJQgQgHgMgKIgBAAIgPgNIgoiFIAoCFQgKgKgIgMIgJgOQgHgPgEgRQgGgYACgZIACgQIAGgTQAHgVAPgTIAIgKQACgTAGgRQAMggAagYQALgLANgIQAQgJARgGQAggJAiAFQAjAGAbATQATANAOATQAGAJAFAJQAPAdADAfIAAAFQABAjgPAhQgLAVgPAQIAAAFQgCALgDALQgLAigbAaIgIAIQghAcgoAGIgOABIgHAAQgfAAgdgNgAoRHYIjCgmgAGiMCIAAAAgACXJdgAIQDWQh1gNhBimQhBilAajdQAajcBliTQBmiSB1AOQB2AOBBClQBBCmgaDdQgaDdhmCRQhcCFhrAAIgUgBgAIroEQgdBagPCCQgQCBAIBeQAJBeAbADQAbADAdhZQAehaAQiBQAPiCgIhfQgIhdgcgEIgCAAQgaAAgdBXgAqKAXQh2gNhCilQhBimAZjdQAZjcBliTQBliTB2AOQB2ANBBClQBBCmgYDdQgaDdhlCSQhcCGhqAAIgUgBgApyrEQgdBagPCCQgPCCAJBeQAIBeAbADQAcADAdhaQAehaAOiCQAPiBgJhfQgIhegbgDIgCAAQgaAAgdBXg");
	this.shape_13.setTransform(48.6994,-289.707);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("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");
	this.shape_14.setTransform(-15.15,-130.074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape},{t:this.shape_1}]},4).to({state:[{t:this.shape_14},{t:this.shape_5},{t:this.shape_13},{t:this.shape_3},{t:this.shape_8},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-587,-503.4,1119.3,838.7);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		//this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// Hat
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("AKnBRIAAkxQiahficgzQllh0l1B0QilAzioBfIAAEwAq2GBQCXAUCZALQF0AaGBgaQCbgLCdgTQD9geDCglAKnGCIAAkxAxlEfQDFBEDqAeIAAkxQKvDSKujR");
	this.shape.setTransform(-11.125,-218.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("Al+GmQiZgKiXgUIAAkxIAFABQFWBoFUAAIABAAIAAAAQFVAAFVhnIADgBIgDABQlVBnlVAAIAAAAIgBAAQlUAAlWhoIgFgBIAAkwQCohgClgzQF1hzFkBzQCdAzCaBgIAAExIAAExQidATibAKg");
	this.shape_1.setTransform(-11.925,-219.5875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("Al+GmQiZgKiXgUIAAkxIAFABQFWBoFUAAIABAAIAAAAQFVAAFVhnIADgBIgDABQlVBnlVAAIAAAAIgBAAQlUAAlWhoIgFgBIAAkwQCohgClgzQF1hzFlBzQCcAzCaBgIAAExIAAExQidATibAKg");
	this.shape_2.setTransform(-11.925,-227.5875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(9,1,1).p("AKnBRIAAkxQiahficgzQllh0l1B0QilAzioBfIAAEwQKvDSKujRgAq2GBQCXAUCZALQF0AaGBgaQCbgLCdgTIAAkxAKnGCQD9geDCglAq2GBIAAkxAxlEfQDFBEDqAe");
	this.shape_3.setTransform(-11.125,-230.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{y:-218.925}}]}).to({state:[{t:this.shape_2,p:{y:-227.5875}},{t:this.shape,p:{y:-226.925}}]},2).to({state:[{t:this.shape_2,p:{y:-231.5875}},{t:this.shape_3}]},2).to({state:[{t:this.shape_2,p:{y:-227.5875}},{t:this.shape,p:{y:-226.925}}]},2).wait(4));

	// head
	this.instance = new lib.head();
	this.instance.setTransform(-8,-116);

	this.instance_1 = new lib.Body();
	this.instance_1.setTransform(-10.45,99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-10.45,y:99.5}},{t:this.instance,p:{y:-116}}]}).to({state:[{t:this.instance_1,p:{x:-12,y:95}},{t:this.instance,p:{y:-119.2}}]},2).to({state:[{t:this.instance_1,p:{x:-11,y:86}},{t:this.instance,p:{y:-123.2}}]},2).to({state:[{t:this.instance_1,p:{x:-7,y:94}},{t:this.instance,p:{y:-119.2}}]},2).wait(4));

	// legs
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(12,1,1).p("ABSr/QAvF7BMHRIklHhAjMJeQC+CkCKgD");
	this.shape_4.setTransform(-61.95,300.9519);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(12,1,1).p("AgtK7IFziUAlFq6QDoITBSLq");
	this.shape_5.setTransform(54.025,301.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(12,1,1).p("AkhrwIF3J7IhELFAhiIqIGEDH");
	this.shape_6.setTransform(48.05,301.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(12,1,1).p("AlAEAIBnGzAC4qyICJNcIopC1");
	this.shape_7.setTransform(-73.175,287.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(12,1,1).p("AnXskII1HoIF6FFIktIJABFISID8ET");
	this.shape_8.setTransform(-10.35,294.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(12,1,1).p("AFwrIIi+FxIohQgIFQAA");
	this.shape_9.setTransform(-18.7,297.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(12,1,1).p("Aooq7IJYFVIGhDsIiUJKIgxg0AF+IaIhBhKIgDAJIBEBBICrCj");
	this.shape_10.setTransform(-3.525,280.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#333333").ss(12,1,1).p("AF0r6IikD4IpDNmIDTGX");
	this.shape_11.setTransform(-19.55,295.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(12,1,1).p("AifrEIAAWJIE/AA");
	this.shape_12.setTransform(45.75,290.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#666666").ss(12,1,1).p("AgUqgIiLVBIFAAA");
	this.shape_13.setTransform(-39.65,295.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.2,-278.3,234.2,662);


(lib.fires = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit_area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgYEBkBMAAAjIBMAwJAAAMAAADIBg");
	this.shape.setTransform(-18,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.fire();
	this.instance.setTransform(-29.1,-435.95,1,1,0,180,0);

	this.fire_mc = new lib.fire();
	this.fire_mc.name = "fire_mc";
	this.fire_mc.setTransform(-2.9,435.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fire_mc},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fires, new cjs.Rectangle(-413.1,-652.3,826.2,1280.3), null);


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

	// text
	this.text_mc = new lib.text();
	this.text_mc.name = "text_mc";
	this.text_mc.setTransform(5269.25,-773.05);

	this.timeline.addTween(cjs.Tween.get(this.text_mc).wait(1));

	// ruby
	this.ruby_mc = new lib.ruby();
	this.ruby_mc.name = "ruby_mc";
	this.ruby_mc.setTransform(5276.35,-293.05);

	this.timeline.addTween(cjs.Tween.get(this.ruby_mc).wait(1));

	// stand
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(14,1,1).p("ApmwHIjBAAIAAljIZQAAIAAFjIjBAAIk0AAIk0AAIkzAAgAJoQIIDBAAIAAFjI5QAAIAAljIDBAAIEzAAIEzAAIE0AAgApmQIMAAAggPAJowHMAAAAgP");
	this.shape.setTransform(5277.15,-127.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(8,1,1).p("AkzwHMAAAAgPAE0wHMAAAAgPAAAwHMAAAAgP");
	this.shape_1.setTransform(5277.15,-127.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AsoVrIAAljIDCAAIEzAAIEzAAIE0AAIE0AAIDAAAIAAFjgAJowHIk0AAIk0AAIkzAAIkzAAIjCAAIAAljIZQAAIAAFjg");
	this.shape_2.setTransform(5277.15,-127.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AE0QIMAAAggPMAAAAgPIk0AAMAAAggPMAAAAgPIkzAAMAAAggPMAAAAgPIk0AAMAAAggPIE0AAIEzAAIE0AAIE0AAMAAAAgPg");
	this.shape_3.setTransform(5277.175,-127.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fire
	this.fire_mc = new lib.fires();
	this.fire_mc.name = "fire_mc";
	this.fire_mc.setTransform(4832.1,-524.2);

	this.timeline.addTween(cjs.Tween.get(this.fire_mc).wait(1));

	// plane
	this.plane_mc = new lib.bat();
	this.plane_mc.name = "plane_mc";
	this.plane_mc.setTransform(360,-812.2,0.295,0.295,0,0,0,-27.4,-84);

	this.timeline.addTween(cjs.Tween.get(this.plane_mc).wait(1));

	// Layer_1
	this.instance = new lib.cavebackground();
	this.instance.setTransform(5589,-1076,2.7373,2.7373,0,0,180);

	this.instance_1 = new lib.cavebackground();
	this.instance_1.setTransform(0,-1076,2.7373,2.7373);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,-1176.5,5589,1280.3), null);


// stage content:
(lib.Final_Kilcoyne2 = function(mode,startPosition,loop,reversed) {
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
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event){
			console.log(root.background_mc.x);
			if (root.greenHead_mc.currentFrame == 9){
				root.greenHead_mc.gotoAndPlay("walking");
			}
			
			if (event.keyCode == 39 && root.background_mc.x > -1720) {
				root.greenHead_mc.scaleX = 1.0011;
				root.background_mc.x = root.background_mc.x - speed;
				
			}
			if (event.keyCode == 37 && root.background_mc.x < 3480) {
				root.greenHead_mc.scaleX = -1.0011;
				root.background_mc.x = root.background_mc.x + speed;
				
			}	
		}
		
		function handleKeyUp(event) {
			root.greenHead_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.plane_mc.addEventListener("click",handleClickPlane);
		
		function handleClickPlane(event){
			var bats_snd = createjs.Sound.play("bats");
			root.background_mc.plane_mc.play();
		}
		
		this.background_mc.ruby_mc.addEventListener("click",handleClickRuby);
		
		function handleClickRuby(event){
			var alarm_snd = createjs.Sound.play("alarm");
			root.background_mc.ruby_mc.play();
		}
		
		this.background_mc.fire_mc.addEventListener("click",handleClickFires);
		
		function handleClickFires(event){
			var hot_snd = createjs.Sound.play("hot");
			root.background_mc.fire_mc.play();
		}
		
		this.background_mc.text_mc.addEventListener("click",handleClickText);
		
		function handleClickText(event){
			var neat_snd = createjs.Sound.play("neat");
			root.background_mc.text_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// walking
	this.greenHead_mc = new lib.walking();
	this.greenHead_mc.name = "greenHead_mc";
	this.greenHead_mc.setTransform(812.1,615.2,1.0011,1.0011,0,0,0,-8,-84.9);

	this.timeline.addTween(cjs.Tween.get(this.greenHead_mc).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(2880,540,1,1,0,0,0,2880,-540);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,443.5,4629,740.3);
// library properties:
lib.properties = {
	id: 'AC84731126B34D44B0DE9008F6863423',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Kilcoyne_background_atlas_1.png?1621956174543", id:"Kilcoyne_background_atlas_1"},
		{src:"images/Kilcoyne_background_atlas_2.png?1621956174543", id:"Kilcoyne_background_atlas_2"},
		{src:"images/Kilcoyne_background_atlas_3.png?1621956174543", id:"Kilcoyne_background_atlas_3"},
		{src:"sounds/alarm.mp3?1621956174597", id:"alarm"},
		{src:"sounds/bats.mp3?1621956174597", id:"bats"},
		{src:"sounds/hot.mp3?1621956174597", id:"hot"},
		{src:"sounds/neat.mp3?1621956174597", id:"neat"}
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
an.compositions['AC84731126B34D44B0DE9008F6863423'] = {
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