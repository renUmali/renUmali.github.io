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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BkQgagPgPgaQgPgaAAghQAAggAPgbQAPgZAagOQAbgPAhgBQAjABAaAPQAaAOAPAZQAOAbABAgIAAAAIjdAAQAAAeANAYQAOAXAXANQAXANAfABQAiAAAYgPQAZgPAMgbIAMAAQgMAfgcASQgcASgnABQghgBgbgOgABpgJQgDgcgNgVQgOgVgWgMQgXgMgeAAQgdAAgXAMQgWAMgOAVQgOAVgCAcIDRAAIAAAAg");
	this.shape.setTransform(69.925,85.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BkQgagPgPgaQgPgaAAghQAAggAPgbQAPgZAagOQAagPAigBQApAAAdAVQAdAVAMAjIgMAAQgLgfgagRQgZgSglAAQgfAAgYAOQgXANgNAXQgNAYAAAdQAAAeANAYQANAXAXANQAYANAfABQAlAAAZgTQAagRALgeIAMAAQgMAjgdAUQgdAVgpABQgigBgagOg");
	this.shape_1.setTransform(44.15,85.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BkQgagPgPgaQgPgaAAghQAAggAPgbQAPgZAagOQAbgPAhgBQAjABAaAPQAaAOAPAZQAOAaABAhIAABsIgLAAIAAg9QgOAggcASQgbARglABQgigBgagOgAg2hZQgYANgNAXQgNAYAAAdQAAAeANAYQANAXAYANQAXANAfABQAggBAXgNQAYgNANgXQANgYAAgeQAAgdgNgYQgNgXgYgNQgXgOggAAQgfAAgXAOg");
	this.shape_2.setTransform(17.625,85.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXCfIAAjkQAAgeALgTQALgUAUgKQAUgKAZAAQAqAAAXAYQAXAXAAArIgLAAQAAgngUgUQgVgUgkgBQgiABgVATQgUATgBAoIAAAqICMAAIAAAKIiMAAIAACwg");
	this.shape_3.setTransform(-4.275,80.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXBvIAAiFQAAgdALgUQALgUAUgKQAUgKAZAAQAbAAATAKQAUAKALAUQALAUAAAdIAAAFIgLAAIAAgFQAAgogVgTQgVgTgjAAQgiAAgVATQgUATgBAoIAACFg");
	this.shape_4.setTransform(-25.725,85.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BjQgYgMgNgYQgOgZAAgkIAAhxIAMAAIAABxQAAAgAMAWQALAWAWALQAWAMAcAAQAdAAAVgMQAWgLAMgWQAMgWAAggIAAhxIALAAIAABxQAAAkgNAZQgOAYgXAMQgZANggAAQggAAgYgNg");
	this.shape_5.setTransform(-49.6,85.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsBqQgUgJgKgPQgLgNgBgUIAMAAQABAZAUAPQAUAPAiAAQAiAAAUgPQAUgQAAgZQAAgRgKgKQgLgIgQgDQgSgEgSgCQgUgBgSgDQgUgFgMgLQgMgKAAgXQAAgTALgPQAKgOARgJQASgHAYgBQAZABARAHQASAJAKAOQAKAOABASIgMAAQgBgYgSgOQgTgOgfAAQggAAgSAOQgSAOAAAZQAAASAKAJQALAJAQAEQARADASABQAVADATADQASADAMAMQAMAKAAAWQAAAegWATQgYASgoABQgagBgSgIg");
	this.shape_6.setTransform(-72.7,85.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBqQgSgJgLgPQgKgOgBgSIALAAQABAYAUAPQAUAPAhAAQAjAAAUgPQATgQABgZQAAgRgLgKQgKgIgRgEQgQgDgUgCQgTgCgSgCQgUgFgLgLQgMgLgBgVQABgVAJgOQALgOARgJQATgHAXgBQAZABARAHQATAJAJAOQAJAOABASIgLAAQgBgYgSgOQgTgOgfAAQgfAAgSAOQgTAOAAAZQAAASALAJQAKAJARAEQAQADATABQAUACASAEQATADAMAMQANAKAAAWQAAAegYATQgWASgpABQgZgBgUgIg");
	this.shape_7.setTransform(190.05,30.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAyIgEhjIANAAIgEBjg");
	this.shape_8.setTransform(175.375,17.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABgBvIAAhxQAAgfgMgWQgMgWgWgLQgVgMgdAAQgcAAgWAMQgVALgMAWQgMAWAAAfIAABxIgLAAIAAhxQAAgjANgYQANgZAYgMQAZgNAfAAQAgAAAZANQAYAMANAZQANAYAAAjIAABxg");
	this.shape_9.setTransform(157.95,30.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8BjQgagOgPgaQgPgaAAghQAAghAPgaQAPgZAagPQAagPAiAAQAiAAAbAPQAaAPAPAZQAPAaAAAhQAAAhgPAaQgPAagaAOQgbAPgiABQgigBgagPgAg3hZQgXANgNAXQgNAXAAAeQAAAeANAYQANAXAXANQAYAOAfAAQAfAAAYgOQAXgNANgXQAOgYAAgeQAAgegOgXQgNgXgXgNQgYgOgfAAQgfAAgYAOg");
	this.shape_10.setTransform(132.1,30.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8BjQgagOgPgaQgPgaAAghQAAghAPgaQAPgZAagPQAbgPAhAAQAiAAAbAPQAaAPAPAZQAOAaABAhQgBAhgOAaQgPAagaAOQgbAPgiABQghgBgbgPgAg2hZQgYANgNAXQgNAXgBAeQABAeANAYQANAXAYANQAXAOAfAAQAgAAAXgOQAXgNANgXQAOgYAAgeQAAgegOgXQgNgXgXgNQgXgOggAAQgfAAgXAOg");
	this.shape_11.setTransform(106.15,30.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACpCTIAAjCQgBgdgKgTQgLgUgSgKQgSgKgYAAQgYAAgSALQgSAKgKAUQgLATAAAcIAADCIgLAAIAAjCQAAgcgLgTQgKgUgSgKQgSgLgYAAQgYAAgSAKQgSAKgLAUQgKATgBAdIAADCIgMAAIAAjCQAAggANgWQAMgWAVgMQAVgLAaAAQAiAAAWARQAXARAIAgQAJggAXgRQAWgRAiAAQAaAAAVALQAVAMAMAWQANAWAAAgIAADCg");
	this.shape_12.setTransform(72.775,26.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BjQgagOgPgaQgPgaAAghQAAghAPgaQAPgZAagPQAbgPAhAAQAjAAAaAPQAaAPAPAZQAOAaABAhIAAAAIjdAAQAAAeANAYQAOAXAXANQAXAOAfAAQAigBAYgOQAZgPAMgbIAMAAQgMAfgcASQgcASgnABQghgBgbgPgABpgJQgDgcgNgUQgOgWgWgMQgXgMgeAAQgdAAgXAMQgWAMgOAWQgOAUgCAcIDRAAIAAAAg");
	this.shape_13.setTransform(27.775,30.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABgCcIAAhyQAAgfgMgVQgMgWgVgMQgWgLgdAAQgcAAgVALQgWAMgMAWQgMAVAAAfIAAByIgLAAIAAk3IALAAIAACTQANgcAZgPQAZgPAhAAQAgAAAYAMQAYANANAYQANAXAAAkIAAByg");
	this.shape_14.setTransform(1.875,25.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpCNQgTgKgLgSQgKgTAAgbIAAjYIAMAAIAABNICLAAIAAAKIiLAAIAACBQAAAkATASQASATAgAAQAhAAATgTQATgSAAgkIAAgEIALAAIAAAEQAAApgXAVQgWAVglAAQgXAAgSgJg");
	this.shape_15.setTransform(-21.7,27.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag8BjQgagOgPgaQgPgaAAghQAAghAPgaQAPgZAagPQAbgPAhAAQAjAAAaAPQAaAPAPAZQAOAaABAhIAAAAIjdAAQAAAeANAYQAOAXAXANQAXAOAfAAQAigBAYgOQAZgPAMgbIAMAAQgMAfgcASQgcASgnABQghgBgbgPgABpgJQgDgcgNgUQgOgWgWgMQgXgMgeAAQgdAAgXAMQgWAMgOAWQgOAUgCAcIDRAAIAAAAg");
	this.shape_16.setTransform(-56.675,30.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhXBvIAAiFQAAgdALgUQALgUAUgKQAUgKAZAAQAbAAATAKQAUAKALAUQALAUAAAdIAAAFIgLAAIAAgFQAAgngVgUQgVgTgjAAQgiAAgVATQgUAUgBAnIAACFg");
	this.shape_17.setTransform(-79.425,30.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8BjQgagOgPgaQgPgaAAghQAAghAPgaQAPgZAagPQAagPAiAAQAiAAAbAPQAaAPAPAZQAPAaAAAhQAAAhgPAaQgPAagaAOQgbAPgiABQgigBgagPgAg3hZQgXANgNAXQgNAXgBAeQABAeANAYQANAXAXANQAYAOAfAAQAfAAAYgOQAYgNAMgXQAOgYAAgeQAAgegOgXQgMgXgYgNQgYgOgfAAQgfAAgYAOg");
	this.shape_18.setTransform(-103.35,30.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFCcIAAk3IAKAAIAAE3g");
	this.shape_19.setTransform(-119.95,25.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah0CeIAAjIQAAgiAPgaQAPgaAagPQAagOAiAAQAiAAAbAPQAaAPAPAZQAPAaAAAiQAAAggPAZQgPAagaAPQgaAPgjAAQgkAAgcgSQgbgRgNgfIAACZgAg2iFQgYANgNAYQgNAXAAAfQAAAdANAXQANAXAYAOQAXANAfAAQAgAAAXgNQAYgOANgXQANgXAAgdQAAgfgNgXQgNgYgYgNQgXgOggAAQgfAAgXAOg");
	this.shape_20.setTransform(-136.525,35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABeBtIhehnIheBnIgPAAIBmhuIhihrIAPAAIBaBkIBbhkIAPAAIhiBrIBmBug");
	this.shape_21.setTransform(-162.375,30.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag8BjQgagOgPgaQgPgaAAghQAAghAPgaQAPgZAagPQAbgPAhAAQAjAAAaAPQAaAPAPAZQAOAaABAhIAAAAIjdAAQAAAeANAYQAOAXAXANQAXAOAfAAQAigBAYgOQAZgPAMgbIAMAAQgMAfgcASQgcASgnABQghgBgbgPgABpgJQgDgcgNgUQgOgWgWgMQgXgMgeAAQgdAAgXAMQgWAMgOAWQgOAUgCAcIDRAAIAAAAg");
	this.shape_22.setTransform(-187.275,30.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag8BjQgagPgPgZQgPgaAAghQAAghAPgZQAPgaAagPQAbgPAhAAQAjAAAaAPQAaAPAPAaQAPAZAAAhQAAAhgPAaQgPAZgaAPQgaAPgjABQghgBgbgPgAg3haQgXAOgNAXQgNAXAAAeQAAAeANAXQANAYAXANQAYAOAfAAQAfAAAYgOQAYgNANgYQANgXAAgeQAAgegNgXQgNgXgYgOQgYgNgfAAQgfAAgYANg");
	this.shape_23.setTransform(223.75,-24.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqCNQgSgKgLgSQgKgTAAgbIAAjYIALAAIAABNICNAAIAAAKIiNAAIAACBQABAkASASQAUATAfAAQAhAAATgTQATgSAAgkIAAgEIALAAIAAAEQgBApgVAVQgWAVgmAAQgXAAgTgJg");
	this.shape_24.setTransform(200.75,-27.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag8BjQgagPgPgZQgPgaAAghQAAghAPgZQAPgaAagPQAbgPAhAAQAjAAAaAPQAaAPAPAaQAOAZABAhIAAAAIjdAAQAAAeANAXQAOAYAXANQAXAOAfAAQAigBAYgPQAZgPAMgaIAMAAQgMAfgcASQgcASgnABQghgBgbgPgABpgJQgDgcgNgUQgOgWgWgMQgXgMgeAAQgdAAgXAMQgWAMgOAWQgOAUgCAcIDRAAIAAAAg");
	this.shape_25.setTransform(165.775,-24.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgqCNQgSgKgLgSQgKgTAAgbIAAjYIALAAIAABNICMAAIAAAKIiMAAIAACBQABAkASASQAUATAfAAQAhAAATgTQATgSAAgkIAAgEIALAAIAAAEQgBApgVAVQgXAVglAAQgXAAgTgJg");
	this.shape_26.setTransform(142.8,-27.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgECUIAAjYIAKAAIAADYgAgIh+QgDgDAAgGQAAgFADgEQADgDAFAAQAFAAADADQAEAEABAFQgBAGgEADQgDAEgFAAQgFAAgDgEg");
	this.shape_27.setTransform(128.85,-28.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgECcIAAk3IAKAAIAAE3g");
	this.shape_28.setTransform(121.65,-28.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgECcIAAk3IAKAAIAAE3g");
	this.shape_29.setTransform(114.45,-28.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag8BjQgagPgPgZQgPgaAAghQAAghAPgZQAPgaAagPQAbgPAhAAQAjAAAaAPQAaAPAPAaQAOAZABAhIAAAAIjdAAQAAAeANAXQAOAYAXANQAXAOAfAAQAigBAYgPQAZgPAMgaIAMAAQgMAfgcASQgcASgnABQghgBgbgPgABpgJQgDgcgNgUQgOgWgWgMQgXgMgeAAQgdAAgXAMQgWAMgOAWQgOAUgCAcIDRAAIAAAAg");
	this.shape_30.setTransform(97.925,-24.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgpCNQgTgKgLgSQgKgTAAgbIAAjYIALAAIAABNICMAAIAAAKIiMAAIAACBQABAkATASQATATAfAAQAhAAATgTQATgSAAgkIAAgEIALAAIAAAEQAAApgWAVQgXAVglAAQgYAAgRgJg");
	this.shape_31.setTransform(74.95,-27.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag8BjQgagPgPgZQgPgaAAghQAAghAPgZQAPgaAagPQAbgPAhAAQAjAAAaAPQAaAPAPAaQAOAZABAhIAABsIgLAAIAAg9QgOAggcASQgbARglABQgigBgagPgAg2haQgYAOgNAXQgNAXAAAeQAAAeANAXQANAYAYANQAXAOAfAAQAgAAAXgOQAYgNANgYQANgXAAgeQAAgegNgXQgNgXgYgOQgXgNggAAQgfAAgXANg");
	this.shape_32.setTransform(50.775,-24.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgtBqQgSgJgLgPQgKgOgBgSIALAAQABAYAUAOQAUAQAhAAQAjAAAUgQQATgPABgYQAAgTgLgIQgKgJgRgEQgQgDgUgCQgTgCgSgDQgUgEgLgLQgMgLgBgVQABgVAJgOQALgOARgJQATgHAXgBQAZABARAHQATAJAJAOQAJAOABASIgLAAQgBgYgSgOQgTgOgfAAQgfAAgSAOQgTAOAAAZQAAASALAJQAKAJARAEQAQADATABQAUADATADQASADAMAMQANAKAAAWQAAAegYATQgWARgpACQgZgBgUgIg");
	this.shape_33.setTransform(27.6,-24.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag8BjQgagPgPgZQgPgaAAghQAAghAPgZQAPgaAagPQAbgPAhAAQAjAAAaAPQAaAPAPAaQAOAZABAhIAAAAIjdAAQAAAeANAXQAOAYAXANQAXAOAfAAQAigBAYgPQAZgPAMgaIAMAAQgMAfgcASQgcASgnABQghgBgbgPgABpgJQgDgcgNgUQgOgWgWgMQgXgMgeAAQgdAAgXAMQgWAMgOAWQgOAUgCAcIDRAAIAAAAg");
	this.shape_34.setTransform(-7.175,-24.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ABgCcIAAhyQAAgfgMgVQgMgWgVgMQgWgLgdAAQgcAAgVALQgWAMgMAWQgMAVAAAfIAAByIgLAAIAAk3IALAAIAACTQANgcAZgPQAZgPAhAAQAgAAAYAMQAYANANAYQANAXAAAkIAAByg");
	this.shape_35.setTransform(-33.075,-28.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqCNQgSgKgLgSQgKgTAAgbIAAjYIALAAIAABNICNAAIAAAKIiNAAIAACBQABAkASASQAUATAfAAQAhAAATgTQATgSAAgkIAAgEIALAAIAAAEQgBApgVAVQgWAVgmAAQgXAAgTgJg");
	this.shape_36.setTransform(-56.65,-27.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABgBvIAAhwQgBgggLgWQgMgWgWgLQgVgMgdAAQgdAAgVAMQgVALgMAWQgMAWAAAgIAABwIgLAAIAAhwQAAgkANgYQAOgZAXgMQAZgNAfAAQAhAAAXANQAZAMANAZQANAYABAkIAABwg");
	this.shape_37.setTransform(-91.6,-24.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag8BjQgagPgPgZQgPgaAAghQAAghAPgZQAPgaAagPQAagPAiAAQAjAAAaAPQAaAPAPAaQAOAZABAhQgBAhgOAaQgPAZgaAPQgaAPgjABQgigBgagPgAg3haQgXAOgNAXQgNAXAAAeQAAAeANAXQANAYAXANQAYAOAfAAQAfAAAYgOQAYgNANgYQANgXAAgeQAAgegNgXQgNgXgYgOQgYgNgfAAQgfAAgYANg");
	this.shape_38.setTransform(-117.45,-24.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ABGCcIiShsIAABsIgLAAIAAk3IALAAIAADDICNhkIASAAIiSBoICXBwg");
	this.shape_39.setTransform(-151.95,-28.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag5BjQgagPgPgZQgPgaAAghQAAghAPgZQAPgaAagPQAagPAiAAQApABAdAUQAeAUALAkIgMAAQgLgfgZgRQgagSglAAQgfAAgYANQgXAOgNAXQgNAXAAAeQAAAeANAXQANAYAXANQAYAOAfAAQAlgBAagRQAZgSALgeIAMAAQgLAjgeAVQgdAUgpABQgigBgagPg");
	this.shape_40.setTransform(-176.6,-24.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgECUIAAjYIAKAAIAADYgAgIh+QgDgDAAgGQAAgFADgEQADgDAFAAQAFAAADADQAEAEABAFQgBAGgEADQgDAEgFAAQgFAAgDgEg");
	this.shape_41.setTransform(-192.9,-28.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgECcIAAk3IAKAAIAAE3g");
	this.shape_42.setTransform(-200.1,-28.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhKCCQgjgTgTgiQgTgigBgrQABgrATghQATgiAjgTQAigTAsgBQAjAAAdAMQAdAMAUAWQAVAVALAdIgNAAQgQgngigWQgigXgwgBQgoABggARQggASgRAfQgSAgAAAnQAAAoASAfQARAgAgARQAgASAoABQAwgBAigXQAigXAQgmIANAAQgLAdgVAVQgUAWgdAMQgdALgjABQgsgBgigTg");
	this.shape_43.setTransform(-220.375,-27.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-272.9,-55.8,545.9,166.39999999999998), null);


(lib.shining_star = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#66CCFF").s().p("Ar8L8Qk8k8gBnAQABm/E8k9QE9k8G/gBQHAABE8E8QE+E9AAG/QAAHAk+E8Qk8E+nAAAQm/AAk9k+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8E3F7").s().p("ABjcEQgMgEgygVQglgRgZgDQgggFgqAJQgYAFgxANQhkAXhngQQhngPhYgzQgcgRhOg3QhBgvgrgUQgsgVhGgTIh2gfQiMgng3hMQgcgngXhMQgchcgOgcQgbg2g6g7QgighhHhBQhthpg4h5QhAiJARiDIANhLQAIgtgBgeQgCgxgahDIgvhwQgbhJgBhKQgChPAchEQAHgRAjhBQAbgyAIgjQAQhBghiJQggiGAThDQAUhEBYhUQBohkAagsQAOgYATgyQAUgzANgXQAfg4A3gmQA2glBAgKQAjgFBRADQBLACAogJQA5gOA+gtQATgOBVhJQCbiGC7haQBAgfAxgLQBAgQA1AMQAiAIA2AdQA9AhAaAJQA/AXBXgJQAvgEBrgXQBagUA8gHQBSgLBFAGQBPAHBEAdQBKAfAxA3QAbAeAmBAQAoBFAWAbQAyA9BcA2QA1AfBwA3QCSBMBYBnQBpB6gGCGQgBAagNBMQgLA/AEAmQAFA2AlBFQAVAnAsBOQAmBKAPBTQAPBUgKBTQgGAzgbBmQgbBlgGA2QgIBPADClQgGCPg+BLQgWAbgzAmQg3AqgUAWQgtAvgiBYQgUAyglBlQgtBohNBJQhUBPhlAVQgfAGg/AEQg/AEgeAGQhkAThwBVQhBAxh8BsQhZBGhVAeQg6AUg1AAQgqAAgngNg");
	this.shape_1.setTransform(0.8462,5.8148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A8E3F7").s().p("AqIaoQhugig9hUIgog/QgXglgXgTQgVgTgigPQgQgHgvgRQjphShliQQgSgagphJQgjhBgbghIhZhXQg1gzgSguQgMgjgBg2QACg9gCgfQgChIgfhbIg+idQgmhfgNhDQgThcARhJQAMg3A6huQA4hoAJg+QADgWAChJQABg8AKgiQAPguA2hDQA9hKARgkQAMgaAKgrIARhGQAehjBEhLIA+g+QAmgmARgfQAMgWAMgkIATg8QAUg7AkgrQAngwAzgTQAdgLA2gGQA7gHAZgJQAjgKBEgqQBAgnAmgKQA0gOBVAPQBzASAYABQBKABBwgnQCWg0AigHQBPgRBSAIQBTAIBKAhQArATBmA9QBaA2A6AUQA+AUCMALQCHALBCAZQA2AVATAfQAIAPAHAcIALAsQAQAsAxAkQATANBNApQB8BCAyBYQAKASASAqQARAoANAUQAQAbAcAcQAPAQAjAhQBPBHAlAxQA3BJAKBJQAEAhgEBDQgFBDAFAhQAFAiAVA2QAZBAAGAYQARBGgMBVQgJA/geBYQgZBMgGAeQgNA7AJAvQAEAWARAuQARAqADAZQAKBIgzBYQguBVhdBdIhCBEQgkAngUAjQgZAsgVBUQgXBdgQAkQgXAzgmArQgnApgxAbQgXANg3AXQg0AVgaAQQgiAVgqAnIhHBEQhaBThRADQgdACgzgLQg6gMgYgBQgmgBgzAOIhYAaQhVAVhYgDQhYgDhSgeQg5gXgdgKQgzgTglgEQhGgIhmAnQiYA4gRAFQgvALguAAQg7AAg7gTg");
	this.shape_2.setTransform(2.9093,-0.3349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},8).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.9,-175.1,361.6,361.9);


(lib.satellite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lights
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABTAAQAAAjgYAXQgYAZgjAAQgiAAgYgZQgYgXAAgjQAAgiAYgYQAYgYAiAAQAjAAAYAYQAYAYAAAig");
	this.shape.setTransform(-103.7,-3.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABTAAQAAAjgYAXQgYAZgjAAQgiAAgYgZQgYgXAAgjQAAgiAYgYQAYgYAiAAQAjAAAYAYQAYAYAAAig");
	this.shape_1.setTransform(-0.3,109.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABTAAQAAAjgYAXQgYAZgjAAQgiAAgYgZQgYgXAAgjQAAgiAYgYQAYgYAiAAQAjAAAYAYQAYAYAAAig");
	this.shape_2.setTransform(107.2,-3.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABTAAQAAAjgYAXQgYAZgjAAQgiAAgYgZQgYgXAAgjQAAgiAYgYQAYgYAiAAQAjAAAYAYQAYAYAAAig");
	this.shape_3.setTransform(1.75,-104.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("AgJAoQgHgCgBgIQAAgIAGgBIAGgCQACgBACgGQABgFAAgOIgBgFQAAgGgEgGIgBgFQAAgDADgEQADgEAFABQAGACACAFIACAEIADAMIAAAfIgEANIgHAGIgDADIgEACIgHABIgCAAg");
	this.shape_4.setTransform(-96.95,-3.0799);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("AgKAjQgEgDgBgDIAAgEQAAgDACgCIADgDIACgDIADgHIABgJIABgGIgBgJQgHgCABgIIABgDQABgEADgBIAFgBIAGABIAGAGQACADAAAFIACAKIgBAKIgCAPIgDAJIgDAEQgDAIgHABIgCABQgDAAgCgCg");
	this.shape_5.setTransform(-97.5292,-3.295);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660000").s().p("AgVBRQgOgDgQgPQgKgKgDgGQgFgJgEgMIgEgRQgDgQAFgRQAFgQAMgNQAXgZAlgDQAggCASARQAJAJAIASQAKAVAAAMIAAAQQgDAdgJANQgPAVgnAHQgMADgIAAQgIAAgGgCg");
	this.shape_6.setTransform(-103.8696,-3.2087);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660000").s().p("AgUAVQgEgCAAgGQgBgFADgDIALgFQAKgFAGgIIAGgHQAEgCAFACQAEACABAEQADAHgJAIQgLALgNAHQgGADgEAAIgFgBg");
	this.shape_7.setTransform(3.7411,115.9279);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("AARAgIgGgCIgGgEIgLgIQgFgGgGgJQgFgGgEgJIgCgFQgBgGAEgFQAEgFAGADQADABADAEIAGANQACAFAEAFIACADIAMAJIAJAFQAFAFgEAHQgDAFgFAAIgCAAg");
	this.shape_8.setTransform(-5.0984,114.09);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("AgYBNQgJgEgOgLQgVgTgIgTQgFgPABgUQAAgNADgJQADgJAMgMIAHgIQAFgFAIgEQAJgGAJgCQALgDAQABQAZACANAIQAKAGAKANQALAQAEANQAIAVgFAXQgCAJgEAGQgFAIgNAKQgQAKgSALQgMAGgHABIgFAAQgKAAgLgFg");
	this.shape_9.setTransform(-0.1457,109.861);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660000").s().p("AgTAQQgDgDAAgFQABgGAGgEQALgJAKgFQAGgCACAAQAFABACAEQADAEgCAEQgBAEgHADIgLAFQgHAKgGACIgCAAQgEAAgDgDg");
	this.shape_10.setTransform(102.6531,-8.6189);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660000").s().p("AgKBSQgcgCgZgiQgIgLgCgGQgDgHgFgUQgCgOABgFQACgMARgSQANgMAFgEQAUgQAXgCQAagEATAPQAHAEAGAHQAZAcADAlQABAMgDAKQgEAOgNALQgLAIgPAIQgbAOgRAAIgFgBg");
	this.shape_11.setTransform(107.1482,-3.0476);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660000").s().p("AgHBVQgHAAgNgHQgPgJgJgHQgIgIgGgLQgVghAJgeQAGgVAZgXQAGgFAGgDIAPgGIAUgEQAQgCAFABQAIABAJAFQAJAFAGAFQASARAGAiQAIAjgOAWQgFAIgRAPQgJAJgHACIgPADQgQAHgJAAIgBAAg");
	this.shape_12.setTransform(1.7344,-104.7033);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAIIgGgEQgDgEACgFQADgEAFgBIAJABIAHAAQAEACACADQACAEgBACQgBADgCADQgEADgHAAQgFgBgFgCg");
	this.shape_13.setTransform(-105.685,3.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBOIgNgGIgTgEQgJgDgHgLIgKgTIgHgMQgDgHgBgFQgBgEACgIQAIgXALgVIAKgNQAJgIANgFQANgGATgCQALgCAJABQAQACANALQALALAJATQAIARADANQAFAggWAcQgUAZgkADIgFAAQgKAAgHgDg");
	this.shape_14.setTransform(-103.9,-3.1471);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBBRQgHAAgLgFIgWgJQgagPgIgTQgIgRAEgYQAEgPAIgQQAKgVAOgHQAHgEAYgFIAOgDQAIgCAGAAQAYAAASAXQANAPAIAdQACAJAAAGQABAGgCALQgCAPgEAHQgFAKgIAGQgMALgZAJQgOAGgJAAIgCgBg");
	this.shape_15.setTransform(-0.376,109.6521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWBPIgNgHQgOgGgGgEQgGgFgHgKQgMgTgCgPQgCgNAGgVQAFgPAFgIQALgSAVgKQAUgJAWgBQARAAAHADQAIACAKAIQAQALAJARQAKARABASQAAAIgDARQgJAmgXAOQgLAGgWAEIgQACQgOAAgIgEg");
	this.shape_16.setTransform(107.08,-3.1471);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AguBEQgNgKgDgFQgMgNgCgVIgCgMIgDgJQgBgGACgIQAGgdAZgTQAVgRAfgDQAQgBAJADQANAEAQAPQAIAIAFAJQAEAIADAJQANAqgUAeQgNAVglAQQgPAGgIAAIgCAAQgSAAgXgSg");
	this.shape_17.setTransform(1.612,-104.6599);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},6).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},9).wait(5));

	// main
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Az7AAIT7z7IT8T7Iz8T8g");

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(20));

	// Layer_3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AksNnQh8loAAn/QAAn+B8loQB8lpCwAAQCxAAB8FpQB8FoAAH+QAAH/h8FoQh8FpixAAQiwAAh8lpg");
	this.shape_19.setTransform(127.6783,-128.237,1,1,-45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AiiQBMAAAggCIFEAAMAAAAgCg");
	this.shape_20.setTransform(70.5585,-72.5859,1,1,44.9994);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AhrG4II0ozMAmFAmFIo0I0gEgtNgkJII0o0MAmFAmGIo0Izg");
	this.shape_21.setTransform(10.75,12.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(20));

	// Layer_2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("As5lNIZzn8ImBaUg");
	this.shape_22.setTransform(-96.025,95.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.6,-275.4,578.8,575.5999999999999);


(lib.rock = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(9.5,-5.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("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");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rock, new cjs.Rectangle(-396.4,-386.5,792.9,773.1), null);


(lib.nebula = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FF68C8","#3C28CF","#000000"],[0,0.408,0.824],-297.7,640.3,297.2,-640.1).s().p("EiFaBtYMAAAjavMEK1AAAMAAADavg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nebula, new cjs.Rectangle(-853.9,-700,1707.8,1400), null);


(lib.legs = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#999999").s().p("ABZLKQghgFgegUQgcgUgTgeQgkg5AGhMQAHhSA3g/QAQgSADgIQAEgOgIgcIkVuSQgVhEAigUQAOgJATAGQASAFALAPQAKAMAGATIAIAjQAjCoBjEvQBoFAAjCWQAhAGAdAXQAbAVARAgQAeA1ACBRQACA6gPAlQgTAtgtAZQgjAUglAAQgKAAgLgCg");
	this.shape.setTransform(60.5068,0.0316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AjZJ6QgXgEgdgVQgigWgRgbQgIgNgJgaQgJgbgBgSQgCgfANgfIAHgNIABgMQAKg2AoguQAngtA3gVQAUgIATgDQARgZAVgoQB9juA9h4QBljJBHimQANgeALgLQAJgKALgEQAMgEALADQANADAIANQAIALABAPQABAUgNAhQg9CcikEzQhiC1g8CEQAIAIAGAKQAHAMALAaIAOAdQAHAUgBAbQgBAigLAgIgDAGIABADQAEAJABAHQABALgEARQgFAegGANQgKASgVASQgdAZgkASQgvAaglAAQgKAAgJgCg");
	this.shape_1.setTransform(-51.687,7.9614);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legs, new cjs.Rectangle(-86.5,-71.5,173,143.1), null);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD2AzQgVgVAAgeQAAgcAVgWQAVgUAegBQAdABAVAUQAVAWAAAcQAAAegVAVQgVAUgdABQgegBgVgUgAlaAzQgVgVAAgeQAAgcAVgWQAVgUAdgBQAeABAVAUQAVAWAAAcQAAAegVAVQgVAUgeABQgdgBgVgUg");
	this.shape.setTransform(58.975,-26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},9).wait(8).to({_off:false},0).wait(18));

	// eyes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2436BA").s().p("AClEgQgyh3AAipQAAinAyh4QAxh3BGAAQBGAAAyB3QAxB4AACnQAACpgxB3QgyB3hGAAQhGAAgxh3gAmSEgQgyh3AAipQAAinAyh4QAxh3BGAAQBGAAAxB3QAyB4AACnQAACpgyB3QgxB3hGAAQhGAAgxh3g");
	this.shape_1.setTransform(51.95,-38.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2436BA").s().p("AClBXQgwh0gCikIAGABQAXAJAeADQA8AIBWgIQBAgHAugMIAYgGIAAAFQgBCpgxB2QgyB3hFAAQhGAAgyh3gAmTBXQgxh0AAikIAEABQAYAJAeADQA8AIBWgIQA/gHAwgMIAWgGIAAAFQAACpgxB2QgxB3hGAAQhHAAgxh3g");
	this.shape_2.setTransform(52,-18.0875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2436BA").s().p("AD3AxQgegOgFgdQgCgGAAgIQABgOAEgJQAFgMAOgIQAPgHARADQARADALANIACACQACAAAEgDQAKgLAQgCQARgCANAIQAMAIAGAQQAFAPgGANQgDAIgHAIQgKANgMAHQgRALgWADQgKACgJAAQgVAAgRgIgAkrA3QgNgBgLgDQgHgDgOgIQgWgOgHgRQgKgWANgVQANgVAZgBQALAAALAGQAKAGAGAKQAQABAIgEIARgLQAMgGAOABQAOABAKAJQAKAIAEAOQAEAOgFAMQgHASgYAPQggASgjAAIgLgBg");
	this.shape_3.setTransform(51.4218,-3.4969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},6).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_2}]},8).to({state:[{t:this.shape_1}]},3).wait(15));

	// mouth
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah1B2QgygwAAhGQAAhFAygwQAwgyBFAAQBGAAAwAyQAyAwAABFQAABGgyAwQgwAyhGAAQhFAAgwgyg");
	this.shape_4.setTransform(57.2,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(35));

	// base
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A8E3F7").s().p("AkdVdQhugMh0gwQgVgIgSgIIgLgFQh5grh6hkQhshYhAhhQgng9gWg+QgSgzgOg+QgxjjBBiTQAkhTCGiOQCBiGAhhcQAchPgDh2QgJiIgBhDQgBiXAviLQAriABPhjQAUgjAZghQBMhkBpg+QANgOAXgMQAmgUAxgOQA/gcBAgOIACgBQATgGAcgFQAqgJAtgCQAZgEAZgCQB3gICAAoQBxAjBzBHQDnCPByDKQBCB0AjCbQAbB6ALCpQATESgcDlQggEKhfDZQhqDwi2CsQggAfgiAbQhMBGhOArIgOAGIgGAFQg/Aqg1AMIgIACQgmAQgeAGIgFACQgSAGgMACQhdAbhmAIQhEAFhIgCIg2ABQguAAgqgEg");
	this.shape_5.setTransform(0.002,0.0232);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.1,-137.7,218.2,275.5);


(lib.cloudsThree = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape.setTransform(-835.9516,-109.8441);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_1.setTransform(-563.5516,-109.8441);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_2.setTransform(781.2984,-96.1441);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_3.setTransform(484.4484,-33.8941);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_4.setTransform(5.9484,-33.8941);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_5.setTransform(-709.8016,-33.8941);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF88B9").s().p("EgrsAULQhdgchHg9QhLhAgchWQgbhPAMh4QAUiIAEhEQgqAYg1gNQgygMglglQgfghgWgyQgQglgPg7QhWlKA5kLQAgiYBPiAQBUiHB5hSQC0h6EFgHQDPgGEKBCQA4AOCuAwQCQAnBWATQELA8DHgVQECgbFSi8IEZilQCqhkBzg3QExiSFXgrQFXgrFOBBQEFAzDEB0QDjCFBqDKQAcA1AxBvQAvBfA6AvQA9AxBXAQQBDAMBmgHQA7gEB3gKQBpgHBHAMQCzAeB+CfQB5CaAJC9QAIC0hYCxQhSCmiSCAQiCBzi0BYQiVBIjIA9Qo2Cuo5gSQpYgTn8jnQjfhvhwg1QjHhciXgcQjjgrkMA+QjSAwkMB5QkvCSiaBEQkLB1jQAoQhnAThZAAQhhAAhPgXg");
	this.shape_6.setTransform(-519.8317,108.5428);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF88B9").s().p("EgrsAULQhdgchHg9QhLhAgchWQgbhPAMh4QAUiIAEhEQgqAYg1gNQgygMglglQgfghgWgyQgQglgPg7QhWlKA5kLQAgiYBPiAQBUiHB5hSQC0h6EFgHQDPgGEKBCQA4AOCuAwQCQAnBWATQELA8DHgVQECgbFSi8IEZilQCqhkBzg3QExiSFXgrQFXgrFOBBQEFAzDEB0QDjCFBqDKQAcA1AxBvQAvBfA6AvQA9AxBXAQQBDAMBmgHQA7gEB3gKQBpgHBHAMQCzAeB+CfQB5CaAJC9QAIC0hYCxQhSCmiSCAQiCBzi0BYQiVBIjIA9Qo2Cuo5gSQpYgTn8jnQjfhvhwg1QjHhciXgcQjjgrkMA+QjSAwkMB5QkvCSiaBEQkLB1jQAoQhnAThZAAQhhAAhPgXg");
	this.shape_7.setTransform(-289.1817,-37.6572);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_8.setTransform(-1014.0016,-33.8941);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_9.setTransform(-1066.6016,-128.3441);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_10.setTransform(-982.5516,128.4059);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_11.setTransform(1066.6484,67.2559);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_12.setTransform(890.5484,-78.9441);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF88B9").s().p("AybaZQmNhgj7kkQiMihhFjDQhJjNATjKQAVjSB5iwQB+i0C9hMQjTi7gpkzQgoksCMkAQCFj1EGiaQD6iTEmgXQEjgWDSBqQB3A8BTBjQBYBoAaB6QBzhuCGg/QCRhECSAAQCqgBDBBeQCTBHBxBnQB5BuBECHQBICPACCfQACCmhMCEQBqggA6gMQBdgSBLAIQCAAOBtBZQBpBWA0B9QAwB3gCCKQgCCCgtCCQhbEIjnC8QjjC5kaAwQkSAwkbhWQkThTjZi8QARCKgoCOQgnCJhVB1QhQBvh3BYQhvBTiIA3QjWBWjlAAQiYAAifgmg");
	this.shape_13.setTransform(697.3984,45.8059);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF88B9").s().p("EgrsAULQhdgchHg9QhLhAgchWQgbhPAMh4QAUiIAEhEQgqAYg1gNQgygMglglQgfghgWgyQgQglgPg7QhWlKA5kLQAgiYBPiAQBUiHB5hSQC0h6EFgHQDPgGEKBCQA4AOCuAwQCQAnBWATQELA8DHgVQECgbFSi8IEZilQCqhkBzg3QExiSFXgrQFXgrFOBBQEFAzDEB0QDjCFBqDKQAcA1AxBvQAvBfA6AvQA9AxBXAQQBDAMBmgHQA7gEB3gKQBpgHBHAMQCzAeB+CfQB5CaAJC9QAIC0hYCxQhSCmiSCAQiCBzi0BYQiVBIjIA9Qo2Cuo5gSQpYgTn8jnQjfhvhwg1QjHhciXgcQjjgrkMA+QjSAwkMB5QkvCSiaBEQkLB1jQAoQhnAThZAAQhhAAhPgXg");
	this.shape_14.setTransform(-603.1817,25.9428);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF88B9").s().p("EgrsAULQhdgchHg9QhLhAgchWQgbhPAMh4QAUiIAEhEQgqAYg1gNQgygMglglQgfghgWgyQgQglgPg7QhWlKA5kLQAgiYBPiAQBUiHB5hSQC0h6EFgHQDPgGEKBCQA4AOCuAwQCQAnBWATQELA8DHgVQECgbFSi8IEZilQCqhkBzg3QExiSFXgrQFXgrFOBBQEFAzDEB0QDjCFBqDKQAcA1AxBvQAvBfA6AvQA9AxBXAQQBDAMBmgHQA7gEB3gKQBpgHBHAMQCzAeB+CfQB5CaAJC9QAIC0hYCxQhSCmiSCAQiCBzi0BYQiVBIjIA9Qo2Cuo5gSQpYgTn8jnQjfhvhwg1QjHhciXgcQjjgrkMA+QjSAwkMB5QkvCSiaBEQkLB1jQAoQhnAThZAAQhhAAhPgXg");
	this.shape_15.setTransform(-163.0317,87.0928);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF88B9").s().p("EgrsAULQhdgchHg9QhLhAgchWQgbhPAMh4QAUiIAEhEQgqAYg1gNQgygMglglQgfghgWgyQgQglgPg7QhWlKA5kLQAgiYBPiAQBUiHB5hSQC0h6EFgHQDPgGEKBCQA4AOCuAwQCQAnBWATQELA8DHgVQECgbFSi8IEZilQCqhkBzg3QExiSFXgrQFXgrFOBBQEFAzDEB0QDjCFBqDKQAcA1AxBvQAvBfA6AvQA9AxBXAQQBDAMBmgHQA7gEB3gKQBpgHBHAMQCzAeB+CfQB5CaAJC9QAIC0hYCxQhSCmiSCAQiCBzi0BYQiVBIjIA9Qo2Cuo5gSQpYgTn8jnQjfhvhwg1QjHhciXgcQjjgrkMA+QjSAwkMB5QkvCSiaBEQkLB1jQAoQhnAThZAAQhhAAhPgXg");
	this.shape_16.setTransform(44.8683,-8.3072);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF88B9").s().p("EgrsAULQhdgchHg9QhLhAgchWQgbhPAMh4QAUiIAEhEQgqAYg1gNQgygMglglQgfghgWgyQgQglgPg7QhWlKA5kLQAgiYBPiAQBUiHB5hSQC0h6EFgHQDPgGEKBCQA4AOCuAwQCQAnBWATQELA8DHgVQECgbFSi8IEZilQCqhkBzg3QExiSFXgrQFXgrFOBBQEFAzDEB0QDjCFBqDKQAcA1AxBvQAvBfA6AvQA9AxBXAQQBDAMBmgHQA7gEB3gKQBpgHBHAMQCzAeB+CfQB5CaAJC9QAIC0hYCxQhSCmiSCAQiCBzi0BYQiVBIjIA9Qo2Cuo5gSQpYgTn8jnQjfhvhwg1QjHhciXgcQjjgrkMA+QjSAwkMB5QkvCSiaBEQkLB1jQAoQhnAThZAAQhhAAhPgXg");
	this.shape_17.setTransform(307.2183,70.8428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloudsThree, new cjs.Rectangle(-1276.1,-301.1,2552.3,602.3), null);


(lib.cloud_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB4CE").s().p("Ah2QrQgugGhQgYQhYgbgmgHQhGgMhgACIioAJQjZAKi4gnQjRgsidhqQiEhagqhqQgZhBAKhDQAEgcAKgYQhPgFg7hOQgzhDgWhkQgkieAWibQAWijBSiCQBViICNhQQCRhSCbAHQBCAECWAkQCKAiBPgCQBkgDBtgwQBVgmBohJQA7gqB2hWQBphIBUgjQBrgtBrACQB2ADBUA9QAOAKA5AzQAqAmAhAPQBHAiBvgaQA/gOB+gkQBOgPBPAKQBPAKBHAhQA4AbBIA2IB4BcQAvAiBiBAQBUA6AwA1QCQChAOEpQAMD4hcCaQhPCGieBJQiSBFiqgBQhNgDgnABQhDABguAQQgwARg4AtQggAZg+A2QhrBVieA/QhjAmjCA3Qh7AihCAMQg/ALg2AAQgnAAgigGg");
	this.shape.setTransform(-0.0163,0.0018);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud_4, new cjs.Rectangle(-188,-107.2,376.1,214.5), null);


(lib.cloud_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB4CE").s().p("ApKTxQkUhJjFiqQhHhAglgdQhAgyg5gQQgqgMg1ABQgjAAg+AIQizAVhPADQiQAHhwgWQiGgahphHQhzhOgxhyQgphfAMhxQAKhrA3hgQAzhaBVhJQBOhDBlgzQg6jHBLjQQBMjQCshzQBPg0BpgmQBQgdB3gcQB9geBTgGQB0gIBZAfQAdAKBrA1QBTApA4AHQBJAJBYggQAzgSBlg2QGEjNFQhTQGahlDtCTQCdBhB0DrQAsBYAQAZQAmA9AvAdQAwAeBNAHQAsAEBbAAQDLAJC2BqQC2BrBnCuQBpCvADDSQADDVhkCvQhlCxi6BmQi8BnjKgNQghgCiJgVQhpgPhCAFQhRAHhgAoQgwATh3A9QkNCJjjBOQkSBdj6AWQhJAGhIAAQjLAAi9gzg");
	this.shape.setTransform(0.0299,-0.0148);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud_3, new cjs.Rectangle(-242.9,-131.6,485.9,263.2), null);


(lib.cloud_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD9CA").s().p("ApFaAQkyh8jkjgQjwjshhknQgcBKhHAyQhDAwhUAPQhKANhXgMQhGgJhagaQkohWikihQhihggxh6Qg0iCARh/QAXipCSiYQBrhwDEh7QiAhrgviwQguiqAwioQAtifB4iGQByh+CehPQCQhHCRgKQCigKB5BJQAqAYA0AuIBYBPQBsBdBZAPQBiAQB0g+QA0gbCOhoQCfh1C1hTQC1hTC/guQCsgoCLAJQCqALBzBUQBFAyAzBOQAvBHAdBZQAUA5ALAVQAWAqAiAOQAYAKAhgEQAVgDAmgLQDyhDDvAKQD+ALDVBhQDiBmCbDAQCiDHAiDrQAzFmj7G+QhaCehcBqQhyCDiDBFQjMBrkUgWQjdgSkQhnQg6C1iOCxQhuCJi2CfQiYCFh4BJQifBhiYAcQhBAMhGAAQjIAAjphgg");
	this.shape.setTransform(-0.0202,0.0018);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud_2, new cjs.Rectangle(-267,-175.9,534.1,351.9), null);


(lib.cloud_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD9CA").s().p("AoATMQj5hqjbi+Qh+hsgqgcQhlhDhdgDQg+gChWAeQhgAmgwAPQhZAcheACQheAChZgYQh9gggnhNQgbg2AQhhQAWiAgCgfQiIhDhbiDQhaiBgTiXQgUiWA1iWQAziUBthtQBnhnCfhJQB6g4C2gvQCOgkBkgIQCHgLBqAiQAmANBkAvQBWApA3ALQB4AaCWg1QBMgbC2heQFpi7GDhsQCsgxCBgOQCmgRCIAiQCbAnBwBtQB3B1AMCTIAFA2QAEAeAMATQARAcAmAPQAaALAvAHQDaAiAnAHQCSAaBqAlQCEAsBnBFQBzBNBHBmQBgCNANC7QANCvhACrQgoBthABZQhDBfhXBBQhcBEhsAdQhxAehsgTIiOgiQhUgUg6AMQhAANhFA4QhNBGgmAiQhkBXiUBGQhlAvivA8QjNBGiFAgQi9AtifACIgJAAQkFAAkJhwg");
	this.shape.setTransform(0.0131,0.0294);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud_1, new cjs.Rectangle(-249.7,-133.9,499.5,267.9), null);


(lib.blue_moon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#000000","#FFFFFF"],[0,1],-572.4,330.5,572.5,-330.5).s().p("EghxAhyQuAt/ABzzQgBzyOAt/QN/uATyABQTzgBN/OAQOAN/gBTyQABTzuAN/Qt/OAzzgBQzyABt/uAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_moon, new cjs.Rectangle(-305.7,-305.7,611.5,611.5), null);


(lib.astroid = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AgMAAIAAgBIAAgCIAEgGIACgBIAIgCIAEABIACABIADAEIACACIABADQAAAGgDAFIgRADQgEgGgCgHg");
	this.shape.setTransform(-22.35,79.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AgMAAIAAgCIABgCIADgFIACgBIAIgCIAEAAIAIAIIAAACQAAAGgDAGIgRADQgEgHgCgGg");
	this.shape_1.setTransform(-53.4,44.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AgNAAIAAgBIABgDIAEgEIADgBQAFgCACgBIAEABIACACIADADIACACIAAADQABAFgDAGIgRACQgEgGgDgGg");
	this.shape_2.setTransform(-79.45,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("AgGAPIgCgCIgDgGIgDgGQAAgEAEgGQABgEACgBIADAAIAJAAIADACIAEAGQAFAGgFAHIgFAGIgDABIgCABg");
	this.shape_3.setTransform(-47.3,-61.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F1F1F").s().p("AgMAAIAAgCIAAgCIAEgFIADgBQAFgCADAAIADABIACABIAEAEIABACIABADQgBAFgCAGIgQADQgGgIgBgFg");
	this.shape_4.setTransform(-12.35,-102.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1F1F").s().p("AgGAPIgCgCIgEgGIgCgHQABgDADgGQABgEADgBIACAAIAJAAIADADIAEAFQAEAGgEAHIgFAGIgDACg");
	this.shape_5.setTransform(101.9,-46.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F1F1F").s().p("AgNAAIAAgCIABgBIACgEIACgCIADgBIAGgBIAFAAIACABIAEAEIABACIABACQAAAFgDAHIgRADQgFgIgCgFg");
	this.shape_6.setTransform(69.775,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F1F1F").s().p("AgNAAIAAgBIABgDIAEgEIADgBQAFgCACAAIAEAAIACACIADADIACACIAAADQAAAFgCAGIgRACQgEgGgDgGg");
	this.shape_7.setTransform(117.85,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F1F1F").s().p("AgMAAIAAgBIAAgCIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIABADQAAAEgDAHIgRADQgEgIgCgFg");
	this.shape_8.setTransform(119.85,77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("AgMAAIAAgBIAAgCIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIABADQAAAEgDAHIgRADQgEgIgCgFg");
	this.shape_9.setTransform(56.75,109.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F1F1F").s().p("AgMAAIAAgBIAAgDIAEgEIADgBQAFgCADAAIADAAIACACIAEADIABACIABADQgBAFgCAGIgQACQgGgGgBgGg");
	this.shape_10.setTransform(-3.35,106.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F1F1F").s().p("AgNAAIAAgCIABgCIAEgEIADgCQAFgCACAAIAEABIACABIADAEIACACIAAADQAAAEgCAHIgRACQgFgGgCgGg");
	this.shape_11.setTransform(-118.5,54.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F1F1F").s().p("AgNAAIAAgCIABgBIAEgGIADgBQAFgBADAAIADAAIACABIAEAEIABACIAAADQAAAEgCAHIgQADQgGgIgCgFg");
	this.shape_12.setTransform(-81.45,-20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F1F1F").s().p("AgNAAIAAgCIABgBIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIAAADQAAAEgCAHIgRADQgFgIgCgFg");
	this.shape_13.setTransform(-47.4,20.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F1F1F").s().p("AACAPIgKgBIgCgBIgCgDIgDgEQgDgGABgCQABgFAEgCIAJgCIAAgDQAJAAAFADIAFAEIACADIAAAEQAAAFgCAEIgHAFIgDABg");
	this.shape_14.setTransform(-7.8375,-25.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F1F1F").s().p("AgMAAIAAgCIAAgCIAEgFIADgBQAFgCADAAIADABIACABIAEAEIABACIABADQgBAFgCAGIgQADQgGgIgBgFg");
	this.shape_15.setTransform(19.7,-62.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F1F1F").s().p("AgMAAIAAgCIAAgCIAEgFIADgBQAFgCACAAIAEABIACABIADAEIACACIABADQAAAFgDAGIgRADQgEgIgCgFg");
	this.shape_16.setTransform(88.8,-71.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F1F1F").s().p("AgNAAIAAgBIABgCIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIAAADQAAAEgCAHIgRADQgEgIgDgFg");
	this.shape_17.setTransform(-24.35,91.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F1F1F").s().p("AgNAAIAAgCIABgCIAEgEIADgBQAFgDACAAIAEABIACACIADADIACACIAAADQAAAEgCAHIgRACQgFgGgCgGg");
	this.shape_18.setTransform(14.7,117.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F1F1F").s().p("AgMAAIAAgCIAAgBIAEgGIADgBQAFgCACAAIAEABIACABIADAEIACACIABADQAAAFgDAGIgRADQgEgIgCgFg");
	this.shape_19.setTransform(8.7,22.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F1F1F").s().p("AgMAAIAAgBIAAgDIAEgEIADgBQAFgCADAAIADAAIACACIAEADIABACIABADQgBAFgCAGIgQACQgGgGgBgGg");
	this.shape_20.setTransform(58.75,26.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1F1F1F").s().p("AgNAAIAAgBIABgDIAEgEIADgBQAFgCACAAIAEAAIACACIADADIACACIAAADQAAAFgCAGIgRACQgEgGgDgGg");
	this.shape_21.setTransform(-95.45,35.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F1F1F").s().p("AgNAAIAAgBIABgCIAEgGIADAAQAFgCACAAIAEAAIACACIADADIACACIAAADQAAAFgCAGIgRACQgFgGgCgGg");
	this.shape_22.setTransform(-25.35,-84.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1F1F1F").s().p("AgMAAIAAgCIAAgBIAEgGIADgBQAFgCACAAIAEABIACABIADAEIACACIABADQAAAFgDAGIgRADQgEgIgCgFg");
	this.shape_23.setTransform(88.8,30.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1F1F1F").s().p("AgNAAIAAgBIABgCIAEgGIADAAQAFgCADAAIADAAIACACIAEADIABACIAAADQABAFgDAGIgQACQgFgGgDgGg");
	this.shape_24.setTransform(-71.45,89.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1F1F1F").s().p("AgMAAIAAgBIAAgCIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIABADQAAAEgDAHIgRADQgEgIgCgFg");
	this.shape_25.setTransform(7.7,-12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1F1F1F").s().p("AgMAAIAAgBIAAgCIAEgGIADgBQAFgBADAAIADAAIACABIAEAEIABACIABADQgBAEgCAHIgQADQgGgIgBgFg");
	this.shape_26.setTransform(67.75,81.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F1F1F").s().p("AgcDdQgpgFgmgVQgkgUgbggQgigogMg1QgMg0AMgyQANgzAjgpQAjgpAwgVQAwgUA1AEQA2AEAtAbQAtAbAdAuQAcAuAFA0QADAcgFAfQgFAbgLAaQgYA3gzAkQgiAYgqAKQgbAGgaAAQgOAAgOgCg");
	this.shape_27.setTransform(62.5904,-33.4358);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1F1F1F").s().p("AgHDgQg4gCgygeQgygegdgwQgRgdgHgdQgOg2APg4QAOg5AmgpQAngpA3gSQA3gSA2AKQA3AKAtAkQAtAlAWA0QAVA0gGA4QgGA6ggAuQghAugzAaQgwAYg0AAIgHAAg");
	this.shape_28.setTransform(-53.0934,-23.8683);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1F1F1F").s().p("AgTDfQg9gGg0gmQg0gngWg5QgXg6ALg+QALhAApguQApguA+gTQA9gTA7AQQAqALAjAaQAjAaAXAlQAgA1gBBAQAABAghA1QggA0g6AdQgxAXgzAAIgTAAg");
	this.shape_29.setTransform(34.3974,-96.2037);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1F1F1F").s().p("AhQDQQg8gXglgxQglgxgHhAQgGg/Aag4QAbg3A2gjQA2gjA9gBQArgBAqAQQAqAQAgAfQAtAqAQA+QARA9gSA7QgRA7gwArQgwArg9ALQgTAEgTAAQgpAAgpgQg");
	this.shape_30.setTransform(4.3364,61.9975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1F1F1F").s().p("AgQAzQgRgGgKgOQgMgRACgTQACgOAIgMQAKgNARgGQARgFAPAFQAQAFALAPQALAOAAAQQgBARgKAPQgLAOgQAFQgHADgIAAQgIAAgJgDg");
	this.shape_31.setTransform(-80.2458,56.8875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1F1F1F").s().p("AgpAhQgNgPACgVQACgWAOgOQAPgOAVAAQAVAAAPAOQAOANACAUQADATgLAQQgPAXgbABIgCABQgZAAgQgVg");
	this.shape_32.setTransform(106.1603,56.2523);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1F1F1F").ss(1,1,1).p("A0mMeQhHg6glhXQglhYAIhbQAHhbAzhRQAyhQBOgwQAmgWBSgoQBDgnAXgyQAQgjgCg3QgBgggGhAQgEhPAbhHQAchMA5guQAigaBHgfQBNgiAegUQBPg2A+iCQASgkAghKQAehDAZgoQBDhuBzhOQBshKCFggQDtg7EcBMQCxAwChBaQChBbCFB/QCuCngHCZQgCArgdBeQgbBXACAxQADA8AlBHQAFAKBDBuQCLDjAFEGQAGEWiXDFQhcB3ifBhQjJB6ilgPQg0gFhYgaQhigegpgGQhXgPhzAPQgdAEisAgQjtAti3gMQjmgQihhpQgrgdhZhKQhThFgygfQgagQhpgzQhRgogrgkg");
	this.shape_33.setTransform(0.0215,0.0137);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663333").s().p("AmXTxQjmgQihhpQgrgdhZhKQhThFgygfQgagQhpgzQhRgogrgkQhHg6glhXQglhYAIhbQAHhbAzhRQAyhQBOgwQAmgWBSgoQBDgnAXgyQAQgjgCg3QgBgggGhAQgEhPAbhHQAchMA5guQAigaBHgfQBNgiAegUQBPg2A+iCQASgkAghKQAehDAZgoQBDhuBzhOQBshKCFggQDtg7EcBMQCxAwChBaQChBbCFB/QCuCngHCZQgCArgdBeQgbBXACAxQADA8AlBHQAFAKBDBuQCLDjAFEGQAGEWiXDFQhcB3ifBhQjJB6ilgPQg0gFhYgaQhigegpgGQhXgPhzAPQgdAEisAgQi5AkiZAAQgqAAgogDg");
	this.shape_34.setTransform(0.0215,0.0137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.astroid, new cjs.Rectangle(-146.7,-127.7,293.5,255.5), null);


(lib.alienbug = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AhHBIQgfgdAAgrQAAgqAfgeQAdgdAqAAQArAAAeAdQAdAeAAAqQAAArgdAdQgeAegrAAQgqAAgdgeg");
	this.shape.setTransform(20.3112,25.5778,1.5558,1.5558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AhHBIQgfgdAAgrQAAgqAfgeQAdgdAqAAQArAAAeAdQAdAeAAAqQAAArgdAdQgeAegrAAQgqAAgdgeg");
	this.shape_1.setTransform(7.5473,12.3368,0.7366,0.7366);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AhHBIQgfgdAAgrQAAgqAfgeQAdgdAqAAQArAAAeAdQAdAeAAAqQAAArgdAdQgeAegrAAQgqAAgdgeg");
	this.shape_2.setTransform(-0.45,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// antenna
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("AApC0QgGgBgFgDQgHgEgKgMIgng0QgOgSgFgKQgJgQgBgPQAAgbAggkQAKgLABgHQACgKgJgMIgUgXQgMgNgEgLQgFgPAEgQQAEgPAKgNQAMgPANgDQAIgCAHACQAHACAEAHQAFAGgDAJQgCAJgHAEIgMAFQgGAEgBAIQgBAHADAGQADAGANAPQAPAPAHASQAHATgFASQgDALgKANIgRAWQgKAOABAKQAAAGAJANQAaAoAUAVQANAOADAIQADAHgBAGQgBAIgGAEQgEADgFAAIgCAAg");
	this.shape_3.setTransform(20.5487,53.5031);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006600").s().p("AClAzQhGgTgegeQgKgKgGgCQgGgCgMADQgvAOgYAGQgqALgggGIgSgDQgKgBgHADQgFADgJAKQgIAJgHABQgIACgGgHQgHgGAAgIQgBgPAPgMQAMgLARgEQAOgDAVACIAkADQAXgBAmgMQAqgOASgDQAVgCAOAHQAFADAHAHIALALQAaAZAyAKQAWAEAGAKQAEAHgDAJQgDAIgHADQgDACgGAAQgGAAgJgCg");
	this.shape_4.setTransform(48.7722,31.4988);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(10));

	// legs
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("AAOAoIgJgoIgCgEIgGgKIgIgGIgKgKQgFgEABgEQABgDAEgBIAGAFQACADAIAGIAIAHQACADAGAKIAEAIIABAFIAEAVIABADQADADABACIgBAEQgCAEgCABIgBAAQgDAAgDgDg");
	this.shape_5.setTransform(-7.3258,-11.6062);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("AARAYQgKgEgHgIQgDgFAAgDIgCgEQgBgBgDgBQgKgEgHgGQgHgGADgEQACgDAFADIAGAEIALAGQAGADACADIAFAKQAFAKAMgBIAGABQACABAAAEQgBADgCACIgFABIgHgBg");
	this.shape_6.setTransform(-10.1182,-8.9068);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006600").s().p("AAXASQgTgIgEgKQgLAFgLgCQgNgDgEgKIgBgFQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQADgBADAEIADAFQAGAHAOgFQAIgCADABQADABACAEIAEAFQAHAIAMgBIAIABQADACgBAEQgBAEgDABIgFABIgJgCg");
	this.shape_7.setTransform(-12.319,-4.2461);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006600").s().p("AAAArQgBgCgBgDQAAgEACgGQAJgTgIgTQgEACgEgEQgFgDgBgFQgBgIADgIQACgGAFgBQADAAACACQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgDAFQgCACAAADQAAADACACQAIgBAEALQADAGAAAKQABANgCAHIgEAKQgBAIgEABIgCAAIgCgBg");
	this.shape_8.setTransform(-3.9107,-12.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006600").s().p("AAHAJQgGgBgBgEQgfAAgOgDIgHgBQgDgDABgCQABgEAEAAIAGABQAJACASAAIAMAAIAGABIAGAEIAFABIALAAIAIgCQALgDADgCIAEgCQAEAAABAFIgBADIgCACIgEADIgOADIgIACIgJABIgKgBg");
	this.shape_9.setTransform(-15.1625,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006600").s().p("AgSAxQgEgDACgIIACgGIADgEIAQgUQAFgDACgDQABgCABgGIABgQIAAgGIgDgGIgEgEIgEgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAHAEACACIAHAMIABAIIAAAOIgCALQgBAGgDADIgKAIIgHAJIgDAEQgBADgCABQAFABAAAFQAAAEgDADQgDADgEAAQgCAAgDgCg");
	this.shape_10.setTransform(2.2167,-13.3908);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006600").s().p("AgOAvIgFgDQgEgEACgFIADgFIAEgEIADgCIABgCIAEgDQABgDAEgCIABgEQADgEAAgFIgCgGIAAgFIgBgEQgBgEAAgKIABgGIAAgDQAEgFAGgDQAGgEAFADQADACgCAEQgBADgDABIgDAAIgDACIgDAEIgCAEQAAAEADAIQADAJAAAGIgBAIQgBAEgCADIgHAIIgNANIAGADQADACgBADQAAADgFABIgGgCg");
	this.shape_11.setTransform(8.1275,38.1933);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006600").s().p("AAfARQgJgFgFgBIgLAAQgGAAgDgCQgDgCgEgGIgHgHQgHgEgJADQgFABgJAGIgFAEQgGAHgCgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgEAFgDQALgKAOgEIAHgCIAJACQAIAEACACIAFAHQACADACABIAFAAIAHAAIAIABQADABAEADQAPAHALgGQAHgDADABQAEACgDAFIgHAFQgHAEgIAAQgGAAgGgDg");
	this.shape_12.setTransform(34.783,13.6065);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("AgwAhQgCgCABgDQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBIAFAAQAGABAGgBIAGgCIAHgEIAKgDIAQgIIAGgFQADgCACgHIACgFIAJgOQAFgIAFAAQADgBADADQACABAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgEABQgCABgDAEIgGAKIgFAJQgDAHgGAFIgKAGIgWAJIgHAEQgGADgOAAQgGAAgCgCg");
	this.shape_13.setTransform(-2.7417,18.7125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006600").s().p("Ag+AeQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAGgEIAGgDQAKgHAIgHIAIgFQAIgFAIAEIAFACIAEABQAcgCANgJQAHgFAGgJQABgDACgBQACgDADABQACABAAAEQAAADgBACQgKAVgeAHQgIACgQABIgIgBIgEgDQgEgCgEACIgHAGIgUAQQgGAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_14.setTransform(16.87,5.8107);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006600").s().p("Ag+AiQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBABAAQABgBAFAAQAJABAHgDIAHgCQAEgCAJAAQAOAAAMgIQAHgEACgFQADgIACgDQADgFAKgBQAEAAAKADIAFAAQACAAACgEIABgFQgDgFAAgDQABgEAFAAQAEAAACAEQABACAAAFQAAAJgGAIQgEAEgFABIgIgCQgGgDgGABIgEABIgBAEQgCAJgLAHQgGAFgMAFQgJADgFAAIgLAAIgWAGIgEAAQgEAAgCgBg");
	this.shape_15.setTransform(-13.505,7.1393);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006600").s().p("AgwAyQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAIAFgDIAkgKQAEgBACgCIABgFIAAgLQAAgIABgDQACgEAMgIQATgLAMgTIAEgGQADgDADAEQADACgDAFQgMAXgaAPQgFACgCADQgDAEABANQAAAIgCADQgCAGgIADIgOADIgTAGIgFABIgDAAg");
	this.shape_16.setTransform(9.0618,-10.4526);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006600").s().p("AgDArIgHgFIgEgFQgDgEAAgCQAAgDADgFIABgEIAGgFIAEgGIAHgLQAEgIgBgFIgDgIIgEgIQAAgDAAgCQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABIAJAUQACALgHALQgFAIgFAGIgIALIgBACIABACIAGAFIAFADQAEAEgCADQgCACgDAAg");
	this.shape_17.setTransform(9.1687,40.6188);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006600").s().p("AgMAFQgNgHgDgBIgMgCIgJgBIgGgBQgDgCABgEQACgDADAAIAHAAIAKABIAJACQAKADAQALQAQAJAfgEIAIAAQAEABgBAFQgBADgDABIgFAAIgOABIgIABQgVAAgSgNg");
	this.shape_18.setTransform(35.4216,15.335);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006600").s().p("AgdAjIgCgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQABgDAJgBIAFgCIAOgHIAHgFQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAFgIABgGIACgEIAEgHQADgFgCgDIgCgCQgBgDABgDQACgEADABQABAAAAAAQAAAAABABQAAAAABABQABAAAAABQAGAHgDAIIgGANIgCAGIgFALQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgCAFgHADQgSAMgMACIgGgBg");
	this.shape_19.setTransform(-1.0693,18.7889);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006600").s().p("Ag7AYQgBgDABgEIAEgDQAFgEAGgIIAIgJQAHgGAMAAIAjAEQAWAAAJgLQAFgFACAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABIgCAEQgGAJgKAEQgIADgNAAQgNABgMgBIgQgDQgHABgCACQgDAAgEAGIgMAQQgEADgCABIgBAAQgDAAgCgCg");
	this.shape_20.setTransform(17.5875,5.0313);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006600").s().p("AguAgQgEAAgDgCQgEgDABgDQABgCAEgBIAGAAQAGACAIgBIAHgBIALgFIANgHQAQgHAJgHQAHgHAIgLIAGgHQAFgDAEADQACACAAADQgBAEgDABIgDABIgDADQgKAPgOAJIgSAKIgLAGIgNAGIgJACIgIAAIgKAAg");
	this.shape_21.setTransform(-13.385,8.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006600").s().p("AAJALIgagJIgKgCQgFAAgHABIgHABQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQACgCADgBQANgFAUAGIAHADIADABIAIACQAFABAOgBIAHgBIAGgDQAEgCADABQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQADAEgEACIgGADIgFACQgDACgJABIgMABIgEAAg");
	this.shape_22.setTransform(-14.6357,0.5496);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006600").s().p("AASARIgLgKIgBgDIgGgHQgDgCgKAAQgGAAgGgCIgDgCQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgEIACgBIABAAIAAgBQAIADAIAAIAGAAIAFACIAFADIACADIADAFIABABIAFAFIACACIACACQAFgBADAEIgBAEIgDADIgDABQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBgBg");
	this.shape_23.setTransform(-12.3917,-4.56);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006600").s().p("AAOAdQgDAAgCgDQgDgDABgEIABgCIgBgMQgCgFgJgGIgMgIIgHgFIgDgCQgBgDACgDQADgCACABIADACIAKAGIADABIAEAEQAEACAEAEIAHAIIACAEIAAAQIACAAQACgFAFADQACACAAADQAAAEgDACIgGABg");
	this.shape_24.setTransform(-9.6571,-9.43);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006600").s().p("AAPAlIgBgDIgEgLIgDgMIgDgFQgCgEgHgCIgGgEQgGgFgEgIQgEgIADgHIADgEQADgCACACQACABAAADIgBAFIAAAEIADAFQABAEAEACIAKAGQAGAEADAEIABADIACADIABADIAFASIABAGQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_25.setTransform(-7.5942,-12.1021);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006600").s().p("AgBAfQgFgFgBgFIgBgCQgCgFAEgEIACgCIAAgDIABgBIACgDQABgKgBgKIgBgBIgCgEQgBgEABgCQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABABIAAACIABABIABACIABAGQABAHgBAOIgGAMIgBABIADAGQAEABABACIABABQAAADgCACIgEACQgDAAgCgDg");
	this.shape_26.setTransform(-3.6705,-12.9113);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006600").s().p("AgNArIgBgDQgCgHAEgEQABgCADgDQAGgFAFgJIACgEQABgFgGgDQgJgGgCgEQgCgEABgJQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQADgIAKgHIAFgCQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBAAIgLAKQgDAGABAEQABAEAGADQAKAHAAAGQABAGgDAGIgIAJIgJAMIACADQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgBAEgFAAQgDAAgCgCg");
	this.shape_27.setTransform(1.6581,-13.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006600").s().p("AgjAxQAAgDACgDQADgBADABIADgOQABgIADgGQAFgIAOgIQAOgKACgHIAKgaQACgFACgBQADgDADACQACACgCAHIgJAYQgEAKgEAEQgEAEgEABIgJAHQgIAGgDAFQgDAEgBAHIgCANQgBAFgDACQgCADgFAAIgCAAQgFAAgBgEg");
	this.shape_28.setTransform(9.7403,-11.3735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},3).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-18.5,89.5,90);


(lib.clouds2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud_1();
	this.instance.setTransform(-969.85,-26.4);
	this.instance.alpha = 0.8789;

	this.instance_1 = new lib.cloud_1();
	this.instance_1.setTransform(-359.55,230.3);
	this.instance_1.alpha = 0.8789;

	this.instance_2 = new lib.cloud_1();
	this.instance_2.setTransform(-240.45,-98.85);
	this.instance_2.alpha = 0.8789;

	this.instance_3 = new lib.cloud_1();
	this.instance_3.setTransform(610.45,14.85);
	this.instance_3.alpha = 0.8789;

	this.instance_4 = new lib.cloud_1();
	this.instance_4.setTransform(388.1,-26.4);
	this.instance_4.alpha = 0.8789;

	this.instance_5 = new lib.cloud_1();
	this.instance_5.setTransform(139.95,-26.4);
	this.instance_5.alpha = 0.8789;

	this.instance_6 = new lib.cloud_1();
	this.instance_6.setTransform(-184.3,104.05);
	this.instance_6.alpha = 0.8789;

	this.instance_7 = new lib.cloud_2();
	this.instance_7.setTransform(952.6,-109.95);
	this.instance_7.alpha = 0.8789;

	this.instance_8 = new lib.cloud_2();
	this.instance_8.setTransform(-453.05,-27.1);
	this.instance_8.alpha = 0.8789;

	this.instance_9 = new lib.cloud_2();
	this.instance_9.setTransform(-775.45,-188.3);
	this.instance_9.alpha = 0.8789;

	this.instance_10 = new lib.cloud_1();
	this.instance_10.setTransform(509.45,-191.2);
	this.instance_10.alpha = 0.8789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clouds2, new cjs.Rectangle(-1219.6,-364.2,2439.3,728.5), null);


(lib.clouds1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud_4();
	this.instance.setTransform(-1099.6,-62.1,1.8278,1.8278);

	this.instance_1 = new lib.cloud_3();
	this.instance_1.setTransform(1119.8,0.1,1.3317,1.3317,180);

	this.instance_2 = new lib.cloud_4();
	this.instance_2.setTransform(-393.9,120.55,1.3855,1.3855);

	this.instance_3 = new lib.cloud_3();
	this.instance_3.setTransform(962.2,0.05,1.3317,1.3317,-135.0009);

	this.instance_4 = new lib.cloud_4();
	this.instance_4.setTransform(-998.15,27.55,1.8278,1.8278);

	this.instance_5 = new lib.cloud_3();
	this.instance_5.setTransform(690.5,0.05,1.3317,1.3317,-135.0009);

	this.instance_6 = new lib.cloud_4();
	this.instance_6.setTransform(295.6,-23.65,1.8331,1.8021,0,0,0,0.1,-0.1);

	this.instance_7 = new lib.cloud_4();
	this.instance_7.setTransform(-107.6,-61.25);

	this.instance_8 = new lib.cloud_4();
	this.instance_8.setTransform(-82.25,26.7);

	this.instance_9 = new lib.cloud_3();
	this.instance_9.setTransform(877.1,-177.45,1.3318,1.3318);

	this.instance_10 = new lib.cloud_4();
	this.instance_10.setTransform(-675.7,-71.4,1.3855,1.3855);

	this.instance_11 = new lib.cloud_3();
	this.instance_11.setTransform(-883.85,-159.65);

	this.instance_12 = new lib.cloud_4();
	this.instance_12.setTransform(-291.7,-112.75);

	this.instance_13 = new lib.cloud_3();
	this.instance_13.setTransform(-466.95,-47.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clouds1, new cjs.Rectangle(-1443.3,-352.7,2886.7,705.5), null);


(lib.background_start = function(mode,startPosition,loop,reversed) {
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
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// stars_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("EBvvBKWQgJgFgBgGIgBgGIgBgHQAAgDABgDQAEgIAFgEQAHgEAHACIAAgDQAQAFAEAIQAFAIgEANQgBAGgFAFQgFAFgIAAQgGAAgIgDgEg1VAh7IgDgEIAAgGIgCgHQAAgGACgFQAEgGAGgDQAHgEAGACIAAgCQAPAFAFAIQAEAIgDAMQgDAJgGAEIgIADIgEAAQgLAAgJgIgEBZwAMgQgFgDgDgFIgCgIIgBgIIABgHQABgHACgCQAEgIAQAAIAAgDQAOACAGALQAHAKgEANQgCAHgFAEQgDAEgEABQgFACgEAAQgGAAgHgDgAcElfQgHgCgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgHAGgDQAGgEAGACIAAgCQAPAFAFAHQADAGgBAJQgBANgIAGQgFADgGAAIgFAAgEBG0gPgIgDgEIAAgGIgCgHQAAgGACgFQAEgGAGgDQAHgEAGACIAAgCQAPAFAFAIQAEAIgDAMQgDAJgGAEIgIADIgEAAQgLAAgJgIgEBh6gb8QgHgCgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgHAGgDQAGgEAGACIAAgCQAPAFAFAHQADAGgBAJQgBANgIAGQgFADgGAAIgFAAgEglKgjRIgDgFIAAgGIgCgJQAAgEACgEQADgGAHgEQAGgEAGACIAAgCQAQAFAFAIQAFAIgEAMQgDAJgFAEIgIADIgEAAQgMAAgJgHgEhwFgjPQgIgEgBgFIgBgIIgCgHQAAgDACgDQADgHAGgFQAGgEAIACIAAgDQAPAFAEAHQAEAGgBAKQgBAOgKAGQgEACgGAAQgGAAgIgDgEha/gznIgDgEIgBgGIgCgHQAAgFADgFQADgHAGgDQAHgEAGACIAAgCQAPAFAFAIQAFAIgEANQgDAJgDACQgDACgFACIgHABQgLAAgIgJgEApdg4KQAAgBgBAAQAAgBgBgBQAAAAAAAAQAAgBAAAAQgBgCAAgFIgCgHIACgHIABgHQABgGAIgDIANgDIAAgCQAJABAHAHQAHAHABAJQABANgIAJQgEAEgFADQgFABgEAAQgKAAgJgIgEgR6g/dQgIgEgBgFIgBgIIgCgHQAAgDACgDQADgHAGgEQAHgFAHACIAAgCQAPAFAEAGQAFAIgCAMQgCAJgGAFQgFAEgHAAQgHAAgIgDgEhOMhJnQgIgCgIgGIgDgEIAAgGIgCgHQgBgEADgGQAEgGAGgEQAGgDAHABIAAgCQAPAFAEAHQAEAGgBAJQgBANgJAGQgFADgGAAIgFAAg");
	this.shape.setTransform(-97.5234,-38.6722);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(48));

	// stars_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("EhjjBMoQgHgDgEgFQgCgDAAgFQgBgGAAgEQABgJAHgGQAHgFAJABIAAgCQAQAGAEAHQADAEAAAIQgBAKgEAHQgHAHgIABQgFAAgIgDgEgURBK6QgIgCgDgFQgCgEgBgGIgBgIIACgIQADgGAHgEQAGgDAGABIAAgCQAPAFAFAHQAFAIgDAMQgDANgJADQgEACgEAAQgFAAgGgDgEBhlBCoQgGgBgHgEIgMgGQgMgFgCgCQgCgDgBgFQgEgNAFgIQADgFAGgDQAGgDAGABIAAgDQAIgBALAFQAPAHAFAKQAHANgFANQgDAGgGAEQgFADgGAAIgBAAgEBMhAsmQgIgEgCgGIgBgHIgBgGQAAgEABgDQAEgIAFgDQAHgEAHABIAAgCQAQAFAEAIQAFAIgEAMQgDAIgDAEQgGAFgHAAQgGAAgIgEgEh6XAqaQgHgBgIgGQgDgCAAgCIgBgGIgCgIQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAOAFAFAHQAEAGgBAJQgBAOgJAFQgEAEgGAAIgGgBgEArEAkwQgIgDgDgFIgCgHIAAgMQABgEADgEQAIgMAMADIAAgCQAPAFAEAGQAGAIgDAMQgCALgHAFQgFADgFAAQgHAAgHgEgEhrOASUIgDgEIgBgGIgCgHQAAgFADgFQADgHAGgDQAHgEAGACIAAgCQAPAFAFAIQAFAIgEANQgDAJgDACQgDACgFACIgHABQgLAAgIgJgEg7bAPJQgHgBgIgGQgDgCAAgCIgBgGIgCgIQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAOAFAFAHQAEAGgBAJQgBAOgJAFQgEAEgGAAIgGgBgA4ui5QgHgCgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgHAGgDQAGgEAGACIAAgCQAPAFAFAHQADAGgBAJQgBANgIAGQgEADgHAAIgFAAgEBwHgDDQgHgCgIgGQgDgCAAgCIgBgGIgCgHQAAgEADgGQADgHAGgDQAHgEAGACIAAgCQAOAFAFAHQAEAGgBAJQgBANgJAGQgEADgGAAIgGAAgEhW5gJLQgHgBgIgGQgDgCAAgCIgBgGIgCgIQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAOAFAFAHQAEAGgBAJQgBAOgJAFQgEAEgGAAIgGgBgAda15QgIgCgIgGIgDgDIAAgHIgCgHQgBgDADgGQAEgHAGgDQAGgEAHACIAAgDQAPAFAEAHQAEAGgBAJQgBAOgJAFQgFAEgGAAIgFgBgEhcoglFIgDgEIAAgGIgCgHQgBgEADgGQAEgHAGgDQAGgEAGACIAAgCQAPAFAGAIQAEAIgDAMQgDAJgFAEQgDACgGABIgDAAQgMAAgJgIgEBIxglbQgIAAgKgHIgDgFIgBgGIgCgIIACgHQADgHAGgFQAHgEAHACIAAgDQAPAFAFAIQAFAIgEANQgCAGgCADQgGAHgJAAIgDAAgEgLPg2EQgHgCgIgGQgDgCAAgCIgBgGIgCgHQAAgEADgGQADgHAGgDQAHgEAGACIAAgCQAOAFAFAHQAEAGgBAJQgBANgJAGQgEADgGAAIgGAAgEhPpg+RQgIgEgCgFIgBgIIgBgHQAAgDABgDQADgHAGgFQAHgEAHACIAAgDQAQAFAEAHQADAGgBAKQgBAOgJAGQgFACgFAAQgHAAgHgDgEiJlhChQgFgDgCgDQgCgDgBgHIgBgIQAAgFADgEQADgGAGgDQAGgDAGACIAAgDQALgBAJAEQAKAGACAJQACAHgCAIQgCAIgFAEQgFAEgFAAIgJABQgKAAgJgEgEgWzhKTQgJgBgJgHIgEgEIAAgHIgCgHIABgIQADgHAGgEQAHgEAIABIAAgCQAPAFAFAIQAEAIgDAMQgCAHgDADQgFAHgKAAIgCAAgECJPhKZQgHgDgEgFIgCgIIAAgLQABgFADgEQAIgLAMADIAAgDQAPAGAEAGQAGAHgDAMQgCALgHAFQgFADgFAAQgHAAgHgDgEBJYhL4QgIgCgJgGIgDgEQgBgCABgEIgCgIQgBgCACgFQAEgIAFgDQAHgFAHACIAAgDQAPAGAFAHQAFAHgDAMQgCAJgFAEQgGAFgHAAIgEAAg");
	this.shape_1.setTransform(-53.9304,-29.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(48));

	// stars_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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PAFAFAHQADAGgBAJQgBAOgIAFQgEAEgHAAIgFgBgEiBZALXQgJgCgHgGIgDgEIAAgHIgCgHQAAgDACgFQADgHAGgEQAHgDAGABIAAgDQAVADAFANQAEAJgFAMQgBAEgCADQgDADgEABQgFADgGAAIgHgBgEgrOAHsQgIgDgBgHIgBgGIgCgHQAAgDACgDQADgIAGgEQAGgEAIACIAAgDQAPAFAFAIQAFAIgEANQgDAIgEADQgFAGgHAAQgHAAgIgFgEBL4gErQgIgEgBgEIgBgIIgCgHQAAgEADgFQAEgHAFgDQAHgDAGABIAAgCQAOAFAFAHQAEAGgBAKQgCAOgJAFQgEADgGAAQgGAAgIgEgEAgEgE7QgHgCgIgGQgDgCAAgCIgBgGIgCgHQAAgEADgGQADgHAGgDQAHgEAGACIAAgCQAOAFAFAHQAEAGgBAJQgBANgJAGQgEAEgGAAIgGgBgECB1gLaQgHgEgDgFIgCgOQAAgJAHgHQAIgHAJACIAAgDQAQAFAEAHQADAGgBAKQgBAOgJAFQgFADgFAAQgGAAgIgDgEhw5gM8QgJAAgJgHQgDgCAAgCIgBgHIgCgHQAAgEADgGQADgGAGgDQAHgEAGACIAAgDIANAGQAHAFACAHQACAGgDAJQgBAGgEAEQgFAHgJAAIgDgBgEBQIgOPQgJgEgBgEIgDgPQAAgFADgFQADgGAGgDQAHgDAGABIAAgCQAPAFAEAGQAFAIgDAMQgBALgIAFQgFADgFAAQgHAAgHgEgAtrxLQgHgBgIgGQgDgCAAgCIgBgGIgCgIQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAOAFAFAHQAEAGgBAJQgBAOgJAFQgEAEgGAAIgGgBgEg1zgRfQgIAAgIgHQgDgCAAgCQgBgCAAgFIgCgHQAAgEADgGQADgGAGgEQAHgEAGACIAAgCQAPAFAEAGQAFAIgDAMQgCAJgFAFQgFAFgIAAIgEgBgEiOkgTNQgHgCgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgHAGgDQAGgEAGACIAAgCQAPAFAFAHQADAGgBAJQgBANgIAGQgEAEgHAAIgFgBgECIZgXIQgHgCgIgGQgDgCAAgCIgBgGIgCgHQAAgEADgGQADgHAGgDQAHgEAGACIAAgCQAOAFAFAHQAEAGgBAJQgBANgJAGQgEAEgGAAIgGgBgEgaJgiEIgDgFIgBgGIgCgHQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAPAFAFAIQAFAIgEANQgDAJgFADQgCACgGABIgEABQgLAAgJgIgEhJYgidQgJgEgBgFIgDgPQAAgFADgEQADgGAGgDQAGgEAHACIAAgDQAPAFAFAJQAEAIgDAMQgEAKgFADQgEADgGAAQgGAAgIgDgEA1cgpUQgHgCgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgHAGgDQAGgEAGACIAAgCQAPAFAFAHQADAGgBAJQgBANgIAGQgEAEgHAAIgFgBgEBsNgp8QgJAAgJgIIgDgEIgBgHIgCgHQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQARAHAEAJQADAGgDALQgBAGgEAEQgFAIgKAAIgCgBgEgBJgq5QgIgCgGgFIgDgFIgBgGIgCgHQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAQAHAEAHQAFAIgFAPIgDAGQgCACgEACQgFADgFAAIgGgBgEhwxgsnQgHgBgJgHIgDgEIAAgGIgCgHQgBgEADgGQAEgHAGgDQAGgEAGACIAAgCQAPAFAFAHQAFAHgDAMQgDAKgFAEQgFAFgHAAIgFgBgEgq0gwRQgIgEgCgGIgBgHIgBgGQAAgEABgDQAEgIAFgDQAHgEAHABIAAgCQAQAFAEAIQAFAIgEAMQgDAIgDAEQgGAFgHAAQgGAAgIgEgEiIigw9IgDgFIgBgGIgCgHQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAPAFAFAIQAFAIgEANQgDAJgFADQgCACgGABIgEABQgLAAgJgIgEARmgxwIgDgEIAAgGIgCgHQgBgEADgGQAEgHAGgDQAGgEAGACIAAgCQAPAFAGAIQAEAIgDAMQgDAJgFAEQgDACgGABIgDAAQgMAAgJgIgEB+Zg1NIgDgEIgBgGIgCgHQAAgEADgGQADgHAGgDQAHgEAGACIAAgCQAPAFAFAIQAFAIgEAMQgDAJgFAEQgCACgGABIgEAAQgLAAgJgIgEhMjg1PQgHgCgIgGQgDgCAAgCIgBgGIgCgHQAAgEADgGQADgHAGgDQAHgEAGACIAAgCQAOAFAFAHQAEAGgBAJQgBANgJAGQgEAEgGAAIgGgBgEgiCg93QgJAAgHgHQgDgCgBgCQgBgCABgFIgCgHQgBgEADgGQADgGAHgEQAGgEAGACIAAgCQAPAFAEAGQAGAIgDAMQgCAJgFAFQgGAFgHAAIgEgBgEB4ZhCGQgHgCgIgGQgDgCAAgCIgBgGIgCgHQAAgEADgGQADgHAGgDQAHgEAGACIAAgCQAOAFAFAHQAEAGgBAJQgBANgJAGQgEAEgGAAIgGgBgEBRPhGJIgEgEIAAgGIgCgIQAAgFADgGQAKgNAMADIAAgCQAUACAGANQADAJgDAIQgCAJgGAEQgEADgHABIgEABQgNAAgJgJgECOghIsQgHgBgIgGQgDgCAAgCIgBgGIgCgIQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAOAFAFAHQAEAGgBAJQgBAOgJAFQgEAEgGAAIgGgBgEA4ShKTQgIgEgCgFIgBgHIgBgHQAAgEABgDQADgHAGgEQAHgEAHABIAAgCQAQAFAEAHQADAGgBAJQgBAOgJAGQgFADgFAAQgGAAgIgEgEhodhKkQgHgBgIgGQgDgCgBgCIAAgGIgCgIQgBgEADgGQAEgGAGgDQAGgEAGACIAAgDQAPAFAFAHQADAGgBAJQgBAOgIAFQgEAEgHAAIgFgBgEiA5hLPQgIgDgDgGIgCgOQAAgFADgFQADgGAGgDQAGgEAGACIAAgCQAPAFAFAHQAGAJgEALQgDANgKADIgGABQgGAAgIgDgEhDdhL+QgHgCgIgGQgDgCAAgCIgBgGIgCgHQAAgEADgGQADgHAGgDQAHgEAGACIAAgCQAOAFAFAHQAEAGgBAJQgBANgJAGQgEAEgGAAIgGgBgEABShM4IgDgEIAAgGIgCgIQAAgFACgFQAEgGAGgDQAGgEAGACIAAgDQAPAFAGAIQAFAIgEANQgDAJgFAEIgJADIgDAAQgMAAgJgIgEBydhOVQgJgBgHgGQgDgCAAgCIgBgGIgCgIQAAgEADgGQADgGAGgDQAHgEAGACIAAgDQAPAGAEAGQAFAIgDAMQgBAIgGAFQgGAFgHAAIgEgBg");
	this.shape_2.setTransform(-9.1425,-7.049);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(48));

	// nebula
	this.instance = new lib.nebula();
	this.instance.setTransform(-507.4,119.2);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// satelite
	this.satellite_first = new lib.satellite();
	this.satellite_first.name = "satellite_first";
	this.satellite_first.setTransform(-43.95,117.65,0.27,0.27,0,-62.7139,117.2861,-1473.5,1575);

	this.timeline.addTween(cjs.Tween.get(this.satellite_first).wait(1).to({regX:10.8,regY:12.4,scaleX:0.2701,scaleY:0.2701,skewX:-61.353,skewY:118.647,x:-606.4,y:267.05},0).wait(1).to({skewX:-59.9925,skewY:120.0075,x:-609.8,y:253.65},0).wait(1).to({skewX:-58.6319,skewY:121.3681,x:-612.85,y:240.2},0).wait(1).to({skewX:-57.2713,skewY:122.7287,x:-615.65,y:226.6},0).wait(1).to({skewX:-55.9107,skewY:124.0893,x:-618.1,y:213.05},0).wait(1).to({skewX:-54.5502,skewY:125.4498,x:-620.15,y:199.4},0).wait(1).to({skewX:-53.1896,skewY:126.8104,x:-621.9,y:185.65},0).wait(1).to({skewX:-51.829,skewY:128.171,x:-623.35,y:171.9},0).wait(1).to({skewX:-50.4684,skewY:129.5316,x:-624.5,y:158.15},0).wait(1).to({skewX:-49.1079,skewY:130.8921,x:-625.3,y:144.35},0).wait(1).to({skewX:-47.7473,skewY:132.2527,x:-625.75,y:130.5},0).wait(1).to({skewX:-46.3867,skewY:133.6133,x:-625.95,y:116.7},0).wait(1).to({skewX:-45.0261,skewY:134.9739,x:-625.75,y:102.85},0).wait(1).to({skewX:-43.6656,skewY:136.3344,x:-625.25,y:89.05},0).wait(1).to({skewX:-42.305,skewY:137.695,x:-624.4,y:75.3},0).wait(1).to({skewX:-40.9444,skewY:139.0556,x:-623.2,y:61.5},0).wait(1).to({skewX:-39.5838,skewY:140.4162,x:-621.7,y:47.8},0).wait(1).to({skewX:-38.2233,skewY:141.7767,x:-619.95,y:34.1},0).wait(1).to({skewX:-36.8627,skewY:143.1373,x:-617.8,y:20.45},0).wait(1).to({skewX:-35.5021,skewY:144.4979,x:-615.25,y:6.85},0).wait(1).to({skewX:-34.1415,skewY:145.8585,x:-612.45,y:-6.7},0).wait(1).to({skewX:-32.781,skewY:147.219,x:-609.4,y:-20.15},0).wait(1).to({skewX:-31.4204,skewY:148.5796,x:-605.95,y:-33.55},0).wait(1).to({skewX:-30.0598,skewY:149.9402,x:-602.15,y:-46.85},0).wait(1).to({skewX:-28.6992,skewY:151.3008,x:-598.15,y:-60.05},0).wait(1).to({skewX:-27.3387,skewY:152.6613,x:-593.75,y:-73.15},0).wait(1).to({skewX:-25.9781,skewY:154.0219,x:-589.1,y:-86.15},0).wait(1).to({skewX:-24.6175,skewY:155.3825,x:-584.1,y:-99.05},0).wait(1).to({skewX:-23.2569,skewY:156.7431,x:-578.85,y:-111.8},0).wait(1).to({skewX:-21.8964,skewY:158.1036,x:-573.2,y:-124.45},0).wait(1).to({skewX:-20.5358,skewY:159.4642,x:-567.35,y:-136.95},0).wait(1).to({skewX:-19.1752,skewY:160.8248,x:-561.1,y:-149.3},0).wait(1).to({skewX:-17.8146,skewY:162.1854,x:-554.65,y:-161.5},0).wait(1).to({skewX:-16.4541,skewY:163.5459,x:-547.85,y:-173.55},0).wait(1).to({skewX:-15.0935,skewY:164.9065,x:-540.8,y:-185.45},0).wait(1).to({skewX:-13.7329,skewY:166.2671,x:-533.45,y:-197.15},0).wait(1).to({skewX:-12.3723,skewY:167.6277,x:-525.85,y:-208.75},0).wait(1).to({skewX:-11.0118,skewY:168.9882,x:-517.95,y:-220.05},0).wait(1).to({skewX:-9.6512,skewY:170.3488,x:-509.85,y:-231.2},0).wait(1).to({skewX:-8.2906,skewY:171.7094,x:-501.4,y:-242.2},0).wait(1).to({skewX:-6.93,skewY:173.07,x:-492.75,y:-252.95},0).wait(1).to({skewX:-5.5695,skewY:174.4305,x:-483.8,y:-263.45},0).wait(1).to({skewX:-4.2089,skewY:175.7911,x:-474.6,y:-273.8},0).wait(1).to({skewX:-2.8483,skewY:177.1517,x:-465.2,y:-283.95},0).wait(1).to({skewX:-1.4877,skewY:178.5123,x:-455.55,y:-293.8},0).wait(1).to({skewX:-0.1272,skewY:179.8728,x:-445.65,y:-303.5},0).wait(1).to({skewX:1.2334,skewY:181.2334,x:-435.5,y:-312.9},0).wait(1));

	// space
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1361.3,-580.8,2321.3,1400);


(lib.alienbug_walking = function(mode,startPosition,loop,reversed) {
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
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.alienbug();
	this.instance.setTransform(-74.9,0,1,1,0,0,0,24.1,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:5.4418,x:-68.5,y:30},0).wait(1).to({rotation:11.13,x:-65.5,y:56.65},0).wait(1).to({rotation:16.9348,x:-65.25,y:80.75},0).wait(1).to({rotation:22.812,x:-67.25,y:102.8},0).wait(1).to({rotation:28.7014,x:-71.25,y:122.95},0).wait(1).to({rotation:34.535,x:-76.95,y:141.6},0).wait(1).to({rotation:40.245,x:-84.2,y:158.9},0).wait(1).to({rotation:45.7709,x:-92.9,y:174.9},0).wait(1).to({rotation:51.0653,x:-102.9,y:189.85},0).wait(1).to({rotation:56.0955,x:-114.2,y:203.8},0).wait(1).to({rotation:60.8443,x:-126.7,y:216.75},0).wait(1).to({rotation:65.308,x:-140.4,y:228.85},0).wait(1).to({rotation:69.4933,x:-155.15,y:240.1},0).wait(1).to({rotation:73.4152,x:-171.1,y:250.5},0).wait(1).to({rotation:77.0939,x:-188.3,y:260.15},0).wait(1).to({rotation:80.5528,x:-206.65,y:268.95},0).wait(1).to({rotation:83.8173,x:-226.2,y:277.05},0).wait(1).to({rotation:86.914,x:-247.1,y:284.35},0).wait(1).to({rotation:89.8698,x:-269.4,y:290.8},0).wait(1).to({rotation:92.7128,x:-293.2,y:296.45},0).wait(1).to({rotation:95.4725,x:-318.8,y:301.2},0).wait(1).to({rotation:98.1813,x:-346.35,y:305},0).wait(1).to({rotation:100.877,x:-376.2,y:307.6},0).wait(1).to({rotation:103.609,x:-408.9,y:308.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452.9,-45,429.59999999999997,395.5);


(lib.alien_walking = function(mode,startPosition,loop,reversed) {
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
		this.gotoAndPlay("walking");
		//this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		//this.gotoAndPlay("walking");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// body
	this.instance = new lib.head();
	this.instance.setTransform(0,1.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABZLKQghgFgegUQgcgUgTgeQgkg5AGhMQAHhSA3g/QAQgSADgIQAEgOgIgcIkVuSQgVhEAigUQAOgJATAGQASAFALAPQAKAMAGATIAIAjQAjCoBjEvQBoFAAjCWQAhAGAdAXQAbAVARAgQAeA1ACBRQACA6gPAlQgTAtgtAZQgjAUglAAQgKAAgLgCg");
	this.shape.setTransform(38.5568,160.1316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AjZJ6QgXgEgdgVQgigWgRgbQgIgNgJgaQgJgbgBgSQgCgfANgfIAHgNIABgMQAKg2AoguQAngtA3gVQAUgIATgDQASgYAUgpQB9juA9h4QBljJBHimQANgeALgLQAJgKALgEQAMgEALADQANADAIANQAIALABAPQABAUgNAhQg9CcikEzQhiC1g8CEQAIAIAGAKQAHAMALAaIAOAdQAHAUgBAbQgBAigLAgIgDAGIABADQAEAJABAHQABALgEARQgFAegGANQgKASgVASQgdAZgkASQgvAaglAAQgKAAgJgCg");
	this.shape_1.setTransform(-73.637,168.0614);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAmJIQgZAAgOgCQgWgDgQgHQgWgKgRgUQgQgTgJgYQgPgtAJg2QAGgwAWglQAZgpAngPIAOgGQAGgEADgFQAEgHgFgSQhnl1hXliQgJgjAIgSQAHgPASgGQASgFAOAJQAMAHAHAPQAFALAFATIC5LIQANAxAOATQAIALATARQATARAHAKQAXAeACA3QACA7gTA1QgPAqgYASQgSANgbAEQgNACgUAAIgSgBg");
	this.shape_2.setTransform(-36.2327,172.5217);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AiNJVQgKgEgNgKIgWgQIgTgMQgLgIgGgGQgbgbACgzQABgXAIgsQAGgbAFgLQAHgRAUgUQAXgUAKgMIAQgQQAKgJAJgDQAHgCALABIAIAAQAmiNBDjDQBsk/Aih+QALgpAMgPQAKgNAOgGQAPgGAOAEQAPAFAIAPQAIAOAAARQAAAOgGARIgLAeQgQAmgYBHIhnEyQg+C3gbBoIgLAoQAMACAMAFQAaAMANAVQAIANAFAZQAHAcgBAQIgFAhQgJAqgHAQQgLAYgWAZQgSAVgVAPQgHAFgjAVQgXANgLAEQgLADgKAAQgKAAgLgDg");
	this.shape_3.setTransform(15.5695,171.708);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhrImQgbgLgeggQgegggJgeQgIgeAKgzQAOg+AVgfQAPgVAVgOQAWgOAYgBIAPAAQAIgBAFgDQADgCADgEQgDgHgBgKQAAgOAJgVIAbhHQAahkAxiaQBIjjAViAQAFgiATgCQAMAAAIANQAGAMgBAQQAAAZgHAgIgCAFIAHACQAMAGgBARQgBAJgHARQgTAtgRA5QgLAlgRBEIgyDEQgMAwgIAWQgKAagXAyQgLAcgLAuQAJADAIAFQAPALAKAQQAPAZAGAsQAMBogrBBQgZAmgpARQgXAKgXAAQgTAAgTgIg");
	this.shape_4.setTransform(-55.819,174.1006);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAsItQgdAAgggNQgvgSgfgfQgkgigGgrQgGglAUg3QAbhOAygGQAPgBAFgFQAEgFgBgNQgZluhCluQgGgeANgJQAIgFAKADQAJACAGAIQAIAJAEAZQA8FkAaFvQABANAEAGQADAFAIAEIAOAGQAvAUAWA5QARArAAA+QAABSgnAeQgWARghAAIgCAAg");
	this.shape_5.setTransform(19.7895,176.609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.1,-135.8,218.2,368.1);


(lib.alien_in_space = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.head();
	this.instance.setTransform(0,-46.05);

	this.instance_1 = new lib.legs();
	this.instance_1.setTransform(-21.95,112.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.alien_in_space, new cjs.Rectangle(-109.1,-183.7,218.2,367.5), null);


(lib.alien_floating_away = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// main
	this.instance = new lib.alien_in_space();
	this.instance.setTransform(0.05,47.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-2.304,x:-14.8466,y:39.4235},0).wait(1).to({rotation:-4.6079,x:-29.7433,y:30.9971},0).wait(1).to({rotation:-6.9119,x:-44.64,y:22.5707},0).wait(1).to({rotation:-9.2159,x:-59.5368,y:14.1445},0).wait(1).to({rotation:-11.5198,x:-74.4337,y:5.7183},0).wait(1).to({rotation:-13.8238,x:-89.3307,y:-2.7078},0).wait(1).to({rotation:-16.1277,x:-104.2277,y:-11.1337},0).wait(1).to({rotation:-18.4317,x:-119.1247,y:-19.5596},0).wait(1).to({rotation:-20.7357,x:-134.0218,y:-27.9854},0).wait(1).to({rotation:-23.0396,x:-148.919,y:-36.411},0).wait(1).to({rotation:-25.3436,x:-163.8162,y:-44.8366},0).wait(1).to({rotation:-27.6476,x:-178.7135,y:-53.262},0).wait(1).to({rotation:-29.9515,x:-193.6107,y:-61.6874},0).wait(1).to({rotation:-32.2555,x:-208.508,y:-70.1126},0).wait(1).to({rotation:-34.5595,x:-223.4054,y:-78.5377},0).wait(1).to({rotation:-36.8634,x:-238.3027,y:-86.9627},0).wait(1).to({rotation:-39.1674,x:-253.2001,y:-95.3876},0).wait(1).to({rotation:-41.4713,x:-268.0975,y:-103.8124},0).wait(1).to({rotation:-43.7753,x:-282.9948,y:-112.2371},0).wait(1).to({rotation:-46.0793,x:-297.8922,y:-120.6616},0).wait(1).to({rotation:-48.3832,x:-312.7896,y:-129.086},0).wait(1).to({rotation:-50.6872,x:-327.687,y:-137.5104},0).wait(1).to({rotation:-52.9912,x:-342.5844,y:-145.9346},0).wait(1).to({rotation:-55.2951,x:-357.4817,y:-154.3587},0).wait(1).to({rotation:-57.5991,x:-372.3791,y:-162.7826},0).wait(1).to({rotation:-59.9031,x:-387.2764,y:-171.2065},0).wait(1).to({rotation:-62.207,x:-402.1736,y:-179.6303},0).wait(1).to({rotation:-64.511,x:-417.0709,y:-188.0539},0).wait(1).to({rotation:-66.8149,x:-431.9681,y:-196.4775},0).wait(1).to({rotation:-69.1189,x:-446.8653,y:-204.9009},0).wait(1).to({rotation:-71.4229,x:-461.7624,y:-213.3242},0).wait(1).to({rotation:-73.7268,x:-476.6594,y:-221.7475},0).wait(1).to({rotation:-76.0308,x:-491.5564,y:-230.1706},0).wait(1).to({rotation:-78.3348,x:-506.4534,y:-238.5936},0).wait(1).to({rotation:-80.6387,x:-521.3503,y:-247.0166},0).wait(1).to({rotation:-82.9427,x:-536.2471,y:-255.4394},0).wait(1).to({rotation:-85.2467,x:-551.1439,y:-263.8621},0).wait(1).to({rotation:-87.5506,x:-566.0405,y:-272.2848},0).wait(1).to({rotation:-89.8546,x:-580.9371,y:-280.7074},0).wait(1).to({rotation:-92.1585,x:-595.8337,y:-289.1299},0).wait(1).to({rotation:-94.4625,x:-610.7301,y:-297.5523},0).wait(1).to({rotation:-96.7665,x:-625.6264,y:-305.9747},0).wait(1).to({rotation:-99.0704,x:-640.5227,y:-314.3969},0).wait(1).to({rotation:-101.3744,x:-655.4189,y:-322.8192},0).wait(1).to({rotation:-103.6784,x:-670.3149,y:-331.2413},0).wait(1).to({rotation:-105.9823,x:-685.2109,y:-339.6634},0).wait(1).to({rotation:-108.2863,x:-700.1068,y:-348.0854},0).wait(1).to({rotation:-110.5902,x:-715.0026,y:-356.5074},0).wait(1).to({rotation:-112.8942,x:-729.8982,y:-364.9293},0).wait(1).to({rotation:-115.1982,x:-744.7938,y:-373.3512},0).wait(1).to({rotation:-117.5021,x:-759.6893,y:-381.7731},0).wait(1).to({rotation:-119.8061,x:-774.5846,y:-390.1949},0).wait(1).to({rotation:-122.1101,x:-789.4798,y:-398.6167},0).wait(1).to({rotation:-124.414,x:-804.375,y:-407.0384},0).wait(1).to({rotation:-126.718,x:-819.27,y:-415.4602},0).wait(1).to({rotation:-127.3344,x:-827.0906,y:-410.0224},0).wait(1).to({rotation:-127.9509,x:-834.9113,y:-404.5847},0).wait(1).to({rotation:-128.5674,x:-842.7319,y:-399.147},0).wait(1).to({rotation:-129.1838,x:-850.5525,y:-393.7092},0).wait(1).to({rotation:-129.8003,x:-858.3732,y:-388.2715},0).wait(1).to({rotation:-130.4167,x:-866.1938,y:-382.8337},0).wait(1).to({rotation:-131.0332,x:-874.0144,y:-377.396},0).wait(1).to({rotation:-131.6496,x:-881.835,y:-371.9582},0).wait(1).to({rotation:-132.2661,x:-889.6556,y:-366.5205},0).wait(1).to({rotation:-132.8825,x:-897.4761,y:-361.0827},0).wait(1).to({rotation:-133.499,x:-905.2967,y:-355.645},0).wait(1).to({rotation:-134.1154,x:-913.1173,y:-350.2073},0).wait(1).to({rotation:-134.7319,x:-920.9378,y:-344.7695},0).wait(1).to({rotation:-135.3483,x:-928.7584,y:-339.3318},0).wait(1).to({rotation:-135.9648,x:-936.5789,y:-333.894},0).wait(1).to({rotation:-136.5812,x:-944.3994,y:-328.4563},0).wait(1).to({rotation:-137.1977,x:-952.22,y:-323.0185},0).wait(1).to({rotation:-137.8141,x:-960.0405,y:-317.5808},0).wait(1).to({rotation:-138.4306,x:-967.861,y:-312.143},0).wait(1).to({rotation:-139.047,x:-975.6815,y:-306.7053},0).wait(1).to({rotation:-139.6635,x:-983.502,y:-301.2675},0).wait(1).to({rotation:-140.28,x:-991.3225,y:-295.8298},0).wait(1).to({rotation:-140.8964,x:-999.1429,y:-290.392},0).wait(1).to({rotation:-141.5128,x:-1006.9634,y:-284.9543},0).wait(1).to({rotation:-142.1293,x:-1014.7839,y:-279.5166},0).wait(1).to({rotation:-142.7457,x:-1022.6043,y:-274.0788},0).wait(1).to({rotation:-143.3622,x:-1030.4248,y:-268.6411},0).wait(1).to({rotation:-143.9787,x:-1038.2452,y:-263.2033},0).wait(1).to({rotation:-144.5951,x:-1046.0656,y:-257.7656},0).wait(1).to({rotation:-145.2116,x:-1053.886,y:-252.3279},0).wait(1).to({rotation:-145.828,x:-1061.7064,y:-246.8901},0).wait(1).to({rotation:-146.4445,x:-1069.5268,y:-241.4524},0).wait(1).to({rotation:-147.0609,x:-1077.3472,y:-236.0147},0).wait(1).to({rotation:-147.6774,x:-1085.1676,y:-230.5769},0).wait(1).to({rotation:-148.2938,x:-1092.988,y:-225.1392},0).wait(1).to({rotation:-148.9103,x:-1100.8084,y:-219.7015},0).wait(1).to({rotation:-149.5267,x:-1108.6287,y:-214.2638},0).wait(1).to({rotation:-150.1432,x:-1116.4491,y:-208.826},0).wait(1).to({rotation:-150.7596,x:-1124.2694,y:-203.3883},0).wait(1).to({rotation:-151.3761,x:-1132.0898,y:-197.9506},0).wait(1).to({rotation:-151.9925,x:-1139.9101,y:-192.5129},0).wait(1).to({rotation:-152.609,x:-1147.7304,y:-187.0752},0).wait(1).to({rotation:-153.2254,x:-1155.5507,y:-181.6375},0).wait(1).to({rotation:-153.8419,x:-1163.371,y:-176.1998},0).wait(1).to({rotation:-154.4583,x:-1171.1913,y:-170.7621},0).wait(1).to({rotation:-155.0748,x:-1179.0116,y:-165.3244},0).wait(1).to({rotation:-155.6912,x:-1186.8319,y:-159.8867},0).wait(1).to({rotation:-156.3077,x:-1194.6522,y:-154.449},0).wait(1).to({rotation:-156.9241,x:-1202.4724,y:-149.0113},0).wait(1).to({rotation:-157.5406,x:-1210.2927,y:-143.5736},0).wait(1).to({rotation:-158.157,x:-1218.113,y:-138.1359},0).wait(1).to({rotation:-158.7735,x:-1225.9332,y:-132.6982},0).wait(1).to({rotation:-159.39,x:-1233.7534,y:-127.2605},0).wait(1).to({rotation:-160.0064,x:-1241.5737,y:-121.8228},0).wait(1).to({rotation:-160.6229,x:-1249.3939,y:-116.3852},0).wait(1).to({rotation:-161.2393,x:-1257.2141,y:-110.9475},0).wait(1).to({rotation:-161.8558,x:-1265.0343,y:-105.5098},0).wait(1).to({rotation:-162.4722,x:-1272.8545,y:-100.0722},0).wait(1).to({rotation:-163.0887,x:-1280.6747,y:-94.6345},0).wait(1).to({rotation:-163.7051,x:-1288.4949,y:-89.1969},0).wait(1).to({rotation:-164.3216,x:-1296.3151,y:-83.7592},0).wait(1).to({rotation:-164.938,x:-1304.1352,y:-78.3216},0).wait(1).to({rotation:-165.5545,x:-1311.9554,y:-72.8839},0).wait(1).to({rotation:-166.1709,x:-1319.7756,y:-67.4463},0).wait(1).to({rotation:-166.7874,x:-1327.5957,y:-62.0086},0).wait(1).to({rotation:-167.4038,x:-1335.4159,y:-56.571},0).wait(1).to({rotation:-168.0203,x:-1343.236,y:-51.1334},0).wait(1).to({rotation:-168.6367,x:-1351.0561,y:-45.6958},0).wait(1).to({rotation:-169.2532,x:-1358.8763,y:-40.2581},0).wait(1).to({rotation:-169.8696,x:-1366.6964,y:-34.8205},0).wait(1).to({rotation:-170.4861,x:-1374.5165,y:-29.3829},0).wait(1).to({rotation:-171.1025,x:-1382.3366,y:-23.9453},0).wait(1).to({rotation:-171.719,x:-1390.1567,y:-18.5077},0).wait(1).to({x:-1397.3204,y:-7.0698},0).wait(1).to({x:-1404.4842,y:4.3681},0).wait(1).to({x:-1411.6479,y:15.806},0).wait(1).to({x:-1418.8116,y:27.2439},0).wait(1).to({x:-1425.9754,y:38.6818},0).wait(1).to({x:-1433.1391,y:50.1198},0).wait(1).to({x:-1440.3028,y:61.5577},0).wait(1).to({x:-1447.4666,y:72.9956},0).wait(1).to({x:-1454.6303,y:84.4335},0).wait(1).to({x:-1461.794,y:95.8714},0).wait(1).to({x:-1468.9578,y:107.3093},0).wait(1).to({x:-1476.1215,y:118.7472},0).wait(1).to({x:-1483.2853,y:130.1851},0).wait(1).to({x:-1490.449,y:141.6231},0).wait(1).to({x:-1497.6127,y:153.061},0).wait(1).to({x:-1504.7765,y:164.4989},0).wait(1).to({x:-1511.9402,y:175.9368},0).wait(1).to({x:-1519.1039,y:187.3747},0).wait(1).to({x:-1526.2677,y:198.8126},0).wait(1).to({x:-1533.4314,y:210.2505},0).wait(1).to({x:-1540.5951,y:221.6884},0).wait(1).to({x:-1547.7589,y:233.1263},0).wait(1).to({x:-1554.9226,y:244.5643},0).wait(1).to({x:-1562.0864,y:256.0022},0).wait(1).to({x:-1569.2501,y:267.4401},0).wait(1).to({x:-1576.4138,y:278.878},0).wait(1).to({x:-1583.5776,y:290.3159},0).wait(1).to({x:-1590.7413,y:301.7538},0).wait(1).to({x:-1597.905,y:313.1917},0).wait(1).to({x:-1605.0688,y:324.6296},0).wait(1).to({x:-1612.2325,y:336.0676},0).wait(1).to({x:-1619.3962,y:347.5055},0).wait(1).to({x:-1626.56,y:358.9434},0).wait(1).to({x:-1633.7237,y:370.3813},0).wait(1).to({x:-1640.8874,y:381.8192},0).wait(1).to({x:-1648.0512,y:393.2571},0).wait(1).to({x:-1655.2149,y:404.695},0).wait(1).to({x:-1662.3787,y:416.1329},0).wait(1).to({x:-1669.5424,y:427.5709},0).wait(1).to({x:-1676.7061,y:439.0088},0).wait(1).to({x:-1683.8699,y:450.4467},0).wait(1).to({x:-1691.0336,y:461.8846},0).wait(1).to({x:-1698.1973,y:473.3225},0).wait(1).to({x:-1705.3611,y:484.7604},0).wait(1).to({x:-1712.5248,y:496.1983},0).wait(1).to({x:-1719.6885,y:507.6362},0).wait(1).to({x:-1726.8523,y:519.0742},0).wait(1).to({x:-1734.016,y:530.5121},0).wait(1).to({x:-1741.1798,y:541.95},0).wait(1).to({x:-1748.3435,y:553.3879},0).wait(1).to({x:-1755.5072,y:564.8258},0).wait(1).to({x:-1762.671,y:576.2637},0).wait(1).to({x:-1769.8347,y:587.7016},0).wait(1).to({x:-1776.9984,y:599.1395},0).wait(1).to({x:-1784.1622,y:610.5774},0).wait(1).to({x:-1791.3259,y:622.0154},0).wait(1).to({x:-1798.4896,y:633.4533},0).wait(1).to({x:-1805.6534,y:644.8912},0).wait(1).to({x:-1812.8171,y:656.3291},0).wait(1).to({x:-1819.9809,y:667.767},0).wait(1).to({x:-1827.1446,y:679.2049},0).wait(1).to({x:-1834.3083,y:690.6428},0).wait(1).to({x:-1841.4721,y:702.0807},0).wait(1).to({x:-1848.6358,y:713.5187},0).wait(1).to({x:-1855.7995,y:724.9566},0).wait(1).to({x:-1862.9633,y:736.3945},0).wait(1).to({x:-1870.127,y:747.8324},0).wait(1).to({x:-1877.2907,y:759.2703},0).wait(1).to({x:-1884.4545,y:770.7082},0).wait(1).to({x:-1891.6182,y:782.1461},0).wait(1).to({x:-1898.782,y:793.584},0).wait(1).to({x:-1905.9457,y:805.0219},0).wait(1).to({x:-1913.1094,y:816.4599},0).wait(1).to({x:-1920.2732,y:827.8978},0).wait(1).to({x:-1927.4369,y:839.3357},0).wait(1).to({x:-1934.6006,y:850.7736},0).wait(1).to({x:-1941.7644,y:862.2115},0).wait(1).to({x:-1948.9281,y:873.6494},0).wait(1).to({x:-1956.0918,y:885.0873},0).wait(1).to({x:-1963.2556,y:896.5252},0).wait(1).to({x:-1970.4193,y:907.9632},0).wait(1).to({x:-1977.5831,y:919.4011},0).wait(1).to({x:-1984.7468,y:930.839},0).wait(1).to({x:-1991.9105,y:942.2769},0).wait(1).to({x:-1999.0743,y:953.7148},0).wait(1).to({x:-2006.238,y:965.1527},0).wait(1).to({x:-2013.4017,y:976.5906},0).wait(1).to({x:-2020.5655,y:988.0285},0).wait(1).to({x:-2027.7292,y:999.4665},0).wait(1).to({x:-2034.8929,y:1010.9044},0).wait(1).to({x:-2042.0567,y:1022.3423},0).wait(1).to({x:-2030.7406,y:1038.1853},0).wait(1).to({x:-2019.4244,y:1054.0283},0).wait(1).to({x:-2008.1083,y:1069.8713},0).wait(1).to({x:-1996.7922,y:1085.7143},0).wait(1).to({x:-1985.476,y:1101.5573},0).wait(1).to({x:-1974.1599,y:1117.4003},0).wait(1).to({x:-1962.8438,y:1133.2434},0).wait(1).to({x:-1951.5276,y:1149.0864},0).wait(1).to({x:-1940.2115,y:1164.9294},0).wait(1).to({x:-1928.8954,y:1180.7724},0).wait(1).to({x:-1917.5793,y:1196.6154},0).wait(1).to({x:-1906.2631,y:1212.4584},0).wait(1).to({x:-1894.947,y:1228.3014},0).wait(1).to({x:-1883.6309,y:1244.1444},0).wait(1).to({x:-1872.3147,y:1259.9874},0).wait(1).to({x:-1860.9986,y:1275.8304},0).wait(1).to({x:-1849.6825,y:1291.6735},0).wait(1).to({x:-1838.3664,y:1307.5165},0).wait(1).to({x:-1827.0502,y:1323.3595},0).wait(1).to({x:-1815.7341,y:1339.2025},0).wait(1).to({x:-1804.418,y:1355.0455},0).wait(1).to({x:-1793.1018,y:1370.8885},0).wait(1).to({x:-1781.7857,y:1386.7315},0).wait(1).to({x:-1770.4696,y:1402.5745},0).wait(1).to({x:-1759.1535,y:1418.4175},0).wait(1).to({x:-1747.8373,y:1434.2606},0).wait(1).to({x:-1736.5212,y:1450.1036},0).wait(1).to({x:-1725.2051,y:1465.9466},0).wait(1).to({x:-1713.8889,y:1481.7896},0).wait(1).to({x:-1702.5728,y:1497.6326},0).wait(1).to({x:-1691.2567,y:1513.4756},0).wait(1).to({x:-1679.9406,y:1529.3186},0).wait(1).to({x:-1668.6244,y:1545.1616},0).wait(1).to({x:-1657.3083,y:1561.0046},0).wait(1).to({x:-1645.9922,y:1576.8477},0).wait(1).to({x:-1634.676,y:1592.6907},0).wait(1).to({x:-1623.3599,y:1608.5337},0).wait(1).to({x:-1612.0438,y:1624.3767},0).wait(1).to({x:-1600.7276,y:1640.2197},0).wait(1).to({x:-1589.4115,y:1656.0627},0).wait(1).to({x:-1578.0954,y:1671.9057},0).wait(1).to({x:-1566.7793,y:1687.7487},0).wait(1).to({x:-1555.4631,y:1703.5917},0).wait(1).to({x:-1544.147,y:1719.4348},0).wait(1).to({x:-1532.8309,y:1735.2778},0).wait(1).to({x:-1521.5147,y:1751.1208},0).wait(1).to({x:-1510.1986,y:1766.9638},0).wait(1).to({x:-1498.8825,y:1782.8068},0).wait(1).to({x:-1487.5664,y:1798.6498},0).wait(1).to({x:-1476.2502,y:1814.4928},0).wait(1).to({x:-1464.9341,y:1830.3358},0).wait(1).to({x:-1453.618,y:1846.1788},0).wait(1).to({x:-1442.3018,y:1862.0218},0).wait(1).to({x:-1430.9857,y:1877.8649},0).wait(1).to({x:-1419.6696,y:1893.7079},0).wait(1).to({x:-1408.3535,y:1909.5509},0).wait(1).to({x:-1397.0373,y:1925.3939},0).wait(1).to({x:-1385.7212,y:1941.2369},0).wait(1).to({x:-1374.4051,y:1957.0799},0).wait(1).to({x:-1363.0889,y:1972.9229},0).wait(1).to({x:-1351.7728,y:1988.7659},0).wait(1).to({x:-1340.4567,y:2004.6089},0).wait(1).to({x:-1329.1406,y:2020.452},0).wait(1).to({x:-1317.8244,y:2036.295},0).wait(1).to({x:-1306.5083,y:2052.138},0).wait(1).to({x:-1295.1922,y:2067.981},0).wait(1).to({x:-1283.876,y:2083.824},0).wait(1).to({x:-1272.5599,y:2099.667},0).wait(1).to({x:-1261.2438,y:2115.51},0).wait(1).to({x:-1249.9276,y:2131.353},0).wait(1).to({x:-1238.6115,y:2147.196},0).wait(1).to({x:-1227.2954,y:2163.0391},0).wait(1).to({x:-1215.9793,y:2178.8821},0).wait(1).to({x:-1204.6631,y:2194.7251},0).wait(1).to({x:-1193.347,y:2210.5681},0).wait(1).to({x:-1182.0309,y:2226.4111},0).wait(1).to({x:-1170.7147,y:2242.2541},0).wait(1).to({x:-1159.3986,y:2258.0971},0).wait(1).to({x:-1148.0825,y:2273.9401},0).wait(1).to({x:-1136.7664,y:2289.7831},0).wait(1).to({x:-1125.4502,y:2305.6261},0).wait(1).to({x:-1114.1341,y:2321.4692},0).wait(1).to({x:-1102.818,y:2337.3122},0).wait(1).to({x:-1091.5018,y:2353.1552},0).wait(1).to({x:-1080.1857,y:2368.9982},0).wait(1).to({x:-1068.8696,y:2384.8412},0).wait(1).to({x:-1057.5535,y:2400.6842},0).wait(1).to({x:-1046.2373,y:2416.5272},0).wait(1).to({x:-1034.9212,y:2432.3702},0).wait(1).to({x:-1023.6051,y:2448.2132},0).wait(1).to({x:-1012.2889,y:2464.0563},0).wait(1).to({x:-1000.9728,y:2479.8993},0).wait(1).to({x:-989.6567,y:2495.7423},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2161.3,-571,2270.5,3247);


(lib.forerock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// alien
	this.bug_mc = new lib.alienbug_walking();
	this.bug_mc.name = "bug_mc";
	this.bug_mc.setTransform(129.65,-91.4,1,1,0,0,0,-97.2,134);

	this.timeline.addTween(cjs.Tween.get(this.bug_mc).wait(25));

	// main
	this.instance = new lib.rock();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.4,-386.5,792.9,773.1);


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

	// rockz
	this.instance = new lib.rock();
	this.instance.setTransform(-143.3,-195.7,0.5498,0.5498,90,0,0,-0.1,0);

	this.instance_1 = new lib.rock();
	this.instance_1.setTransform(378.45,224.4,0.6102,0.6102,44.999,0,0,0.2,0);

	this.instance_2 = new lib.rock();
	this.instance_2.setTransform(5565.75,-621.9,0.3986,0.3986,90);

	this.instance_3 = new lib.rock();
	this.instance_3.setTransform(5716.95,-548.7,0.4161,0.4161,45,0,0,0.1,-0.1);

	this.instance_4 = new lib.rock();
	this.instance_4.setTransform(5503.95,-476,0.4079,0.4079);

	this.instance_5 = new lib.rock();
	this.instance_5.setTransform(5104.55,52.95,0.6812,0.6812);

	this.instance_6 = new lib.rock();
	this.instance_6.setTransform(5310.5,-250.75,0.4746,0.4746,44.9987);

	this.instance_7 = new lib.rock();
	this.instance_7.setTransform(5658.25,-253.4,0.612,0.612,68.9979,0,0,-0.1,-0.1);

	this.instance_8 = new lib.rock();
	this.instance_8.setTransform(5261.25,113,0.5958,0.5958,45,0,0,0.1,0);

	this.instance_9 = new lib.rock();
	this.instance_9.setTransform(5530.9,53.4,0.7689,0.7689,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(192));

	// Layer_2
	this.forerock_mc = new lib.forerock();
	this.forerock_mc.name = "forerock_mc";
	this.forerock_mc.setTransform(80.45,32.45,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.forerock_mc).wait(192));

	// rocks
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EGifAYnQgLgKAAgPQAAgPALgLQALgKAOAAQAPAAALAKQALALgBAPQABAPgLAKQgLALgPAAQgOAAgLgLgEG9XAWlQgFgFAAgGQAAgHAFgFQAEgEAHAAQAGAAAFAEQAFAFAAAHQAAAGgFAFQgFAFgGAAQgHAAgEgFgEgh3AVoQgRgRAAgZQAAgZARgSQASgRAZAAQAZAAASARQARASAAAZQAAAZgRARQgSASgZAAQgZAAgSgSgEiHCAU1Igxh7IBChzICEgUIBhBaIgKCEIhtBLgEEb+ASNQgNgNAAgSQAAgSANgNQANgNASAAQASAAANANQANANAAASQAAASgNANQgNANgSAAQgSAAgNgNgEmLsARxQgRgSgBgZQABgZARgRQARgSAZAAQAZAAASASQASARgBAZQABAZgSASQgSARgZAAQgZAAgRgRgEB0wAO6IAbkXIDsiZIEKBZIBhEIIiSDvIkXAkgEDerAPyQgMgMAAgSQAAgRAMgNQAMgMASAAQASAAALAMQANANAAARQAAASgNAMQgLAMgSAAQgSAAgMgMgEiQUALdQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOQAAAOgKAKQgKAKgOAAQgOAAgKgKgEFF4AGTQgLgLAAgPQAAgQALgLQAMgLAPAAQAQAAALALQALALABAQQgBAPgLALQgLAMgQAAQgPAAgMgMgEF8RAF/QgJgJABgMQgBgNAJgJQAJgIANAAQAMAAAJAIQAIAJABANQgBAMgIAJQgJAJgMAAQgNAAgJgJgEmBvAEAQgHgHAAgLQAAgLAHgIQAIgHAKAAQAMAAAHAHQAHAIAAALQAAALgHAHQgHAIgMAAQgKAAgIgIgEBOUACNQgPgPAAgWQAAgVAPgQQAPgPAVAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAPgWAAQgVAAgPgPgEByKAA7QgQgQAAgXQAAgWAQgRQAQgQAYAAQAWAAARAQQAQARAAAWQAAAXgQAQQgRARgWAAQgYAAgQgRgEkgvgAwQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYQAAAYgRARQgRARgYAAQgYAAgRgRgEA8XgCpIgPhDIArg3IBFAAIAsA3IgPBDIg/AegECgOgGIQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYQAAAYgRARQgRARgYAAQgYAAgRgRgEGuDgJOQgQgPABgXQgBgWAQgQQAQgQAWAAQAXAAAQAQQAPAQAAAWQAAAXgPAPQgQAQgXAAQgWAAgQgQgElLogKuQgUgUAAgcQAAgcAUgUQAUgUAcAAQAcAAAUAUQAUAUAAAcQAAAcgUAUQgUAUgcAAQgcAAgUgUgEl4IgPxIAUi0ICZhhICrA7IA8CqIhfCaIi0AVgEC/4gTXIgfjCICDiRIDEAMIBxChIg4C8Ii2BKgALT0XIAeiTICGhEICIA/IAlCRIhcB3IiWADgEjnrgT8QgLgKABgPQgBgPALgLQALgKAPAAQAOAAALAKQAKALAAAPQAAAPgKAKQgLALgOAAQgPAAgLgLgEFQagU4QgOgOAAgUQAAgUAOgOQAPgOATAAQAUAAAOAOQAOAOAAAUQAAAUgOAOQgOAOgUAAQgTAAgPgOgEDZ8gXmQgNgNAAgSQAAgSANgNQAOgNASAAQARAAANANQANANAAASQAAASgNANQgNANgRAAQgSAAgOgNgEhENgX8QgIgIAAgLQAAgLAIgHQAHgIALAAQALAAAHAIQAIAHAAALQAAALgIAIQgHAHgLAAQgLAAgHgHgEm9rgX7QgGgHAAgJQAAgJAGgGQAHgHAJAAQAJAAAHAHQAGAGAAAJQAAAJgGAHQgHAGgJAAQgJAAgHgGgEGU1gYEQgHgHAAgLQAAgLAHgIQAIgHALAAQALAAAIAHQAHAIAAALQAAALgHAHQgIAIgLAAQgLAAgIgIg");
	this.shape.setTransform(2866.6,-69.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(192));

	// moon_shapes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("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");
	this.shape_1.setTransform(2878.3375,-58.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(192));

	// moon_Base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("EnB/AdmMAAAg6bIAkgTIAAAGIAcAAQABAEADABIAHABIBAAAIAAgFIAdAAIAAgHIA4ABIAEgBIASAAQAQAAAGgGIAcAAIAAAAIASAAIAHAAQADgCACgEIAZAAQAIAAADgDQADgCABgCIAbAAQABAIAEAEIA0ABQAGAAACgBQADgCACgDIAPAAQAJAAAGgBIBCABIAAAFQAIgBAdACQAWABANgGIAOgHIABACQAaADAPgBQATgBAQgFIBGACQAAgFAGgDIAhABIAAAZIA9gBIAKAAIAAABIA5AAQAPAAAFgGIAAgBQAkADATgEIADgBIAAACIA0ABIANAAIAAAGQAqAAAdgBQALgCAFgDIAkAAQAKAAAFgBQAFgCAHgEQAJgBASACQAOABAJgBIABAMIA2ABQAKAAAFgCQAGgDALgJIAtAAQAJAAAEgCQAFgBADgDQApABAWgBIAFgBIAAAGQAuADAXgCIABAAIAAAGIArABQAaABAQgFIAGgCIAAAMIA7ABQAJAAAFgBIAEgCIAAAIQAuACAUgCQANgCAKgFQALgEAFgIIA5ABQAAAHADADQACACAFAAQAoADAbgHIAAAKQAvACAXgCQAOgCAKgEIAFAFQAFACAHAAIAugBIAYgIIAAAIQBCABAggDIAGgBIAAADQAzABAagDIAAACIA/ABQALgFAKgCQAxABAYgBQAUgCAJgEIACgBIAeABQAUACAOgEIAAAIIAjAAQAVACANgDIAQgFIAtAAIACgBIAhAAIAQAAQAwAEAegFIAAABQA5ADAcgGIAOgCQAbAAAQgBIAOgCIgBAIQArABAYgBIARgBIAAABQAwACAUgCIASgDIAHAGQAHAHACABQAGADAIgBIAIABIABAAQAMAFAaABIAmABIAEgBIAiABIAAgBIAeABQALAAADgEQACgBABgEIAdABQAOAAAFgGQACgDAAgJIgBgRIABAJIBBACQAGAAACgDQADgCABgGIABAAQAAALgBAFIAnAAIAAAGIBGAAQAJAAAEgDIACgDIAkABQAHAAADgBQAEgCADgEIAkAAIAMAAIAWAAIAAAEIAzAAIAAACIA/ABIABgBIAHABIAAAMIA5ABQAJAAAFgBIAQgGIA3AAIAAAGIAwAAIAPAAIA+ABIALgBIAmAAIAAAGQAIgBAUACQASABAKgCIAhgMIADgBIAZAAIAAAGQAtADAtgIIABAAIAmAAIAAAGIBEAAQAOAAAIgEIAGgCQAngBAVgCQAJgBADgCQAoAAATgCQAJgBADgDIABgBIAjAAIAQgCQAAAFACABQACACAFAAIAxABIAAAFIBVAAQAQAAAFgIQABgDAAgHIAAgEIADAAIAAAJIANABIAAATIA4ABQAQABAEgIIAVAAIAAAAIAnAAIABgBIBMABIACgDIATAAIAGAAIgBACIAtAAIAAATIA/ABQANAAAOgCQAMgDASgIIAAgHIAwAAIAAAHIBCgBQASAAAHgHIAEgFIBcABQgBgCAEgDIgBAKIAnABIAAAEIA4AAQAKgBAEgDIAxAAIAAAAIAqAAIABgBIA5ABIALgOIAjABIAAAMIANAAIAAAHIBBgBQAJAAADgEIACgEIAwAAIAIgBIAAADIAUABIAAAGIA7ABIAKgBIAcABIAMgBIABAAIA8AAQAOABAFgCQAGgCADgDIAJAAIAAAGIA/ABIAAgBQAdACAOgCIAEAAIABAEQACACAFAAIAiABQAVABALgFQAIgDABgGIABgBIA2AAIAEAAIBMABQAAgDABgEIAnABIAAAFIBGAAIABAAIAAAHQAaABAhgBIAGAAIAgAAIAAAGIAzABQAGABAFgCIADAAIA8ABIAKgBIAIgEIAHgCIAyAAQANABAHgDIAAACIA/ABQACgEAKgDQAIgDACgEIBDAAIABgHIAuABQAHABAGgBIAHgDIAAACIAhABIAAAGIAnABIAAAFIBGABIABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQACABAEABIAyABIAAAFIA6ABIAAAFIAkABQAXABANgCIAggGQAWgFAnAEIAiACIAAAKIBJABQAXACAMgFQAFgBADgDIAqAAQgDgGAFgGIAkABQAMAAAFgEQAFgCAEgGIACgDIAzAAQgBgDABgEIAwACIAAAFIA0ACIAGAAIAAAFIAUACQgBAGAEAFIBMABQATABAEgJIAGAAIACAAIBBAAQAIAAADgCIADgEIASAAIAAAGIBAACIAJgBIARAAIAgABIAAAFIBBABIAFAAIAWAAQAKAAAEgCQAEgCAFgHIACgCIAaAAIAMgBIAhABIAAAFIBCAAQAPAAAHgDQAFgBADgCIAEAAIAwABQAMAAAFgEIAEgEIAnACQANAAAHgC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AAAEgGIABgBIBHAAIAAARQAhAFATgEIAMgCQABAPgBAHIBFABQAJAAACgEQACgCgBgGQgBgHABgDQACgDADgCIBBABQANAAAGgBQAIgDAEgEIgBAGQAcADAbgDIAAAEQAtABAsgFQBxAKB2AGIAAALIA6ABIAAAFQAmADAmgDQALAAAHgDIADgCIAAAFIAnACIABALQAKgBAfACQAaABAPgCQANgDAZgJQATgHAFgFQAGgFABgKIAXABQAeABAUgHQAHgBADgFIABgBIAQAAIAAAYQA9ALA3gXICJgFIAPAAIAAgBIAKAAIAAADQAAAFACADQACABAFAAIArACQAZAAAKgIIBuABIAAABQAHACARAKQAOAIAJACQAHADAOAAIAgAAQAVAAAGgBQAPgCARgIIAAAKQA7ADAdgGQAHgBADgCIA8AAQAjgBAbgGQgDgCAAgEIAvABQALAAAFgCQAJgEgCgIIABAAIAqAAQAdAAARgCQAMgBADgFIACgFIAyAAIADAAIAAAGIA8ABQAJABAGgBIALgEQAGgCAEAAIAAAAIA3AAQAKABAJgBIASgEQALgDAHABIAAgBIAVAAIAAAGIAuABIAAAMIA5ABQAGAAADgBQADgCACgEIAgABQACgCABgFIAvAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBIAFgCIABgBIA1AAIABgQIAQAAQABARgBAFIA9ABIAJAAIAlAAQAQABAIgFIAFgDIAAALQAJgDANABIAWADQAeADAJgRQADgFABgIIAAgBIADAAIAAAWIAaABIAAAMIAnAAIAAAGIA/ACQABgDADgCIAFgDIBOAAQgBgDABgEIASABQARABAJgBIAGAAIA7ABIAAAFIBAABQAEgEABgNIACgGIAAAJIBnABIAAAMIBEAAQAGAAACgCQACgCAAgEIAAABIBEACQACgPAAgPIAOAAIAAAZIA0ACIgBAOIBLACIgBgCIA7ACQgBgEADgEIA2AAIADgGIAuABQAGAAACgCQACgCABgHIAEgGIgBAJIBEAAIABgGIBNABIAAgRIAKAAIAAAQIBOABQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAIAFABIA0ABQANABAFgGIAAAKIBHACQAGAAABgCIACgBQABABAFAAIBHAAIACgcIAPAAIAAAcIBEACIAAgCIBCACIACAAIAAAFIATAAIAAAFQAiACARAAIARgBIAxABIAAAFIAzACQAIABAGgCQAGgBAHgGIAMgKIAEgDIAQAAIAAAHIBNAAIAAAGIBKACIAAgrIAEAAIAAAjIBAABIAAgDIAHgCIAAAKIA9ACIAEAAIgBAEIAvACQAMABAGgEIAGgFQAgACAagBQANAAANgDIAUgGIABAAIAsAAIAAAIIAyABQAPABAIgEIALgGQAHgFAFgBIARgEIACAAIAKAAQABACADACIAKACIANAAIAAAFQAAAHADADQACACAHAAQAdABAXgBQAbgCAQgIIAGAAIAAgCIAHgDIAAAEIA6AAIAAAGIA4ABQAIACAFgCIAMgEIAMgDQgBgJACgMIABgOIACAAIAAADQAAAFABACIAEADQACADAAAHQADAFAJAAIAVABQAAAHgCAEQAbAHAmgIQAWgFArgNIAUgEIAPAAIAAgDQAYgEAZAAIAAAGIAGAAIAAAMIBOACQACgDABgFIABgJQADgJATAAIAAgEIAgAAIAAATQAAAIADAEQAEAEAJAAIAKAAIAAAGIBRACIAAgCIA3AAIAEgNIABgFIABAAIAAAWQAAAGACABQABACAFAAIA8ACIAAgyIgBgGIAXAAIAAAIIAEABIA+ACIAEgBIABgCIAHgBIAUgHIAHAAIABAAQACACAGAAIBHACIAAgEIADAAIAAAGQAAAHADABQABACAFAAIAkAAIAAAGIA9ABIAEACIAAADIBKACIAAgOIAkABIAAALIBEACIgBgeIAEAAIAAAQIBAABQgBgDACgEIAEgJIABgBIAoAAIAAAQIAtABIAAASIBEABQgBgGADgUIABgKIBBAAIAAATQAAAGACACIAFABIA5ACIAGgBQADgCAAgHIABgUIADAAIAAAFQAAAKADADIAXAAIAAAEIBBABIAAAAIAmAAQADgIABgPIBXAAIAAAWIATADIAAADIA8AAIADABQAjABBZgDIAVgCIBQgDIAAAAQBAAKAqADIA/ABICAAAIAAgNIAXAAIAAAYIA6AAQgBgBADgEIAqABQACgGAGgBIAAgBIATABIAAAFIB7ACIAAgPIAgABIAAADQAAAGACACQACABAEAAIATAAIgBAGIA0AAIAGAEIAAADIA6ACIAFgBIADgEQACgEAAgLIAAgkIAKAAIAAAZQAAAHACABQACABAEABIAyABQASAAADgHQACgDAAgIIAAgSIADAAIAAAfQAAAGACACQACACAGAAIA5AAQgCgFAEgHIAGgMIACgNIAAgEIANAAQABAKAGAEQAEADAJABIAAAEIBEABIAHAAIAJAAIACADQABACAGABIBJABIABgBIEMAPIBtAFQBDABBDgEIAAABIBHADIABgDIA3AAIgBgPIAQgDIAAASIBFAAQAGAAACgBQACgBABgEIBCACIAAgrIADAAIAAAvIA+AAIADgGIAAAGIAjAAIAAAHIBYACQAJAAAEgBQAHgDACgIQABgDgBgFIAHAAIAJAAIAAAmIA/ABQAAgCAKgDQAFgBAEgEIAXABQAYAAAOgHQALgGADgHIABgEIACAAQAXADAOgFIARgGIAAABIBAAAIAAAUIBFABIAHgBIAGgFIAGgEIAGgDQADgDAAgJIAAgBIABAAQAQAAAEgHIABAAIAYAAQAFgCAJgEQAOgIAHgGIALABQATABAMgCIAAANIANABIAAASIBEABIAAgHIAJAAIAAgGIAaAAIAAAMIAoABIgBAFIAnABIAAAOQAAAIADABQACACAFAAIA6AAQgEgTAOgNIAIgGIALAAIAAAMIAaABIAAANIA/AAIAIgMIANAAQgBgDAGgGIABgHIAAAAIAGgEIAHgEIAAAWIBBAAIAAAHIAbABIAAAKIAlAAQAUABANgDIAAAEQBDAEBHgLQAMgCAEgEIABgCIATAAQAWAAAOgDIAAgCIAtACIAKgBIAtABIAAAMIAtABIAAAFIBAAAQAPAAAFgHQADgDABgJIAQAAIAAANIBHABQADgEAAgIQgBgKABgEIABgBIAzABQAIAAAEgBIA3ABIAAAFIAuAAIAAANIA5ABQARgBAFgIIABgFIAkAAIAAANIBzACQABgEAGgDIACgBIASAAIAAAGIA+ACIABgJIAhAAIABAEQACAFgCAFIBvABQASAAAFgIIACgGIAgABIAAAFIA+ACIABgIIA5ABIAAgbIAQACIAAALIA0AAQAAAIAEADQACABAHAAIAgABIAAANIA6ABIAAgdIAHABIAAAbIBHABQAFgDABgOIAAgDIAEABQALAGARAGQA9ASA+gFIAAgHIANABQgBALAGAEQAEACAHABIARABQAbACAOgHIADgCIAeABQALAAAEgBQAJgEAFgIIAAARQAvAFAWgGQAHgBAKgEIA1gSIAAgBIAVAAIABgbIAAAbQAAAGACACQACADAIAAIAfAAQAdAAAOgEQAMgEAEgHIAAgCIAaABQAGAAACgCQACgCABgEIASAAIgBAGIA7AAQATABAFgIIADgHIAaAAQANABAKgBIAAAOIBEACIAAgIIAmABIAEAMIB2ABQASgBAHgGIACAAIBAABQAOAAAFgHIABgBIA9ABIAAABIADAGQAEADAJAAIAsACQAAAEgBADIBGABQABgDAGgBIAJgEIAAAAIA6ACQASgBAIgDIAEgFIAyABQAQAAAHgHIAsABIAAgBIA6ABIAAgBIBOABIAAgBIBnABIAAAFIAHAEIAAADIBvACIAPgCQAGAAAKgFIAAgBIA9ABIADACIAAADIAuABIAAAMIBFACQAJgBACgCQAEgDAAgGIAAAEIAVAAQgBARAAAIQACAUANAEQAFACAJAAIBtAAQAFAAACgCQADgCAAgHIAAgPIATAAQgCgEADgHIABgBIALAAIAAAGIA6ABIAAgDIAHgDIAAgYQADgCADAAIAAgBIAmABIAMgBIAPABIAAACQAAAGACABQACACAGABIA7ABQAAgDADgBIAGgEQADgCAAgIIAAgDIBfABIACADQADADAIgBIA6AAIABgGIARABIAAAMIBRACIAAgPIBigGIBJABIAAgBIA+ABQAJAAAGgBIAAAGIA/ABQAVAAAFgJIABAAIBBACIAAAMIBBACIABAEQA7AFAdgGIAbgGIAcgCIA2AAQAJgBAGgCIA7ABQAGAAACgBQACgCACgEIA3ABIAAgBIAcAAQABAEABACQADAFAMAAIAaABQA0ACAagBQAWgBAtgFIAgAAIBkAAIAjAAIAiAAIAAgCIArgFIADAAQAKAGAWABIARACQAzADAzADIAAgdIAFABIA1ABIALgBQAFgBAJgFIAjABIAAgCIAgABIAAAMIAUABIAAAMIA7ABIALgBIAyABQAUAAAFgHIABgBIAFABIAeAAIAAAGIA3ABQAJAAAEgBQAEgBAHgFIABAAIAXgDIAWgDIArAAIAAASQAJAAAYABQAUABAMgBQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQACACAFAAIA8ACQAAgEAFAAIAHgDIACgBIAAAMIBBACQAOABAIgEQAJgDADgGQACgFAAgIIAAgHIAKAAQAAALgBAGIBCABQAKACAHgDIAIgCIAAACQAPAAAeABQAXABAQgEIAAAIQApAEAUgEIARgEQAOgDAFgHIAAACIA6ABIAAAFIBGAAIAIgBIAAABIBPAAIAAgGIA2ABQASABAFgIQACgEAAgIIAAgRIADAAIAAAdIA7AAIgBAGIAtABIAAACQAAAGADACQACACAFAAIAiAAIACAAIAAAGIBHACIAAAFIBCABQAIAAADgCIAAABIA/ABQAAgDAFAAIAUgEIA+ABIARgDIAMgGQAIgFAFgCIALgCQAEgBACgCIArABIAAASIAvACIgBALQArABBUgEMAAAA6Lg");
	this.shape_2.setTransform(2880.025,-67.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(192));

	// satelite
	this.satellite_mc = new lib.satellite();
	this.satellite_mc.name = "satellite_mc";
	this.satellite_mc.setTransform(2484.8,-650.2,0.6058,0.6058,0,0,0,10.8,11.1);

	this.timeline.addTween(cjs.Tween.get(this.satellite_mc).wait(1).to({regY:12.4,x:2479.4,y:-648.95},0).wait(1).to({x:2474.05,y:-648.55},0).wait(1).to({x:2468.7,y:-648.1},0).wait(1).to({x:2463.35,y:-647.7},0).wait(1).to({x:2458,y:-647.25},0).wait(1).to({x:2452.65,y:-646.85},0).wait(1).to({x:2447.3,y:-646.4},0).wait(1).to({x:2441.95,y:-646},0).wait(1).to({x:2436.6,y:-645.55},0).wait(1).to({x:2431.25,y:-645.15},0).wait(1).to({x:2425.9,y:-644.7},0).wait(1).to({x:2420.55,y:-644.3},0).wait(1).to({x:2415.2,y:-643.85},0).wait(1).to({x:2409.85,y:-643.45},0).wait(1).to({x:2404.5,y:-643},0).wait(1).to({x:2399.15,y:-642.6},0).wait(1).to({x:2393.8,y:-642.15},0).wait(1).to({x:2388.45,y:-641.75},0).wait(1).to({x:2383.1,y:-641.3},0).wait(1).to({x:2377.75,y:-640.9},0).wait(1).to({x:2372.4,y:-640.45},0).wait(1).to({x:2367.05,y:-640.05},0).wait(1).to({x:2361.7,y:-639.6},0).wait(1).to({x:2356.3,y:-639.2},0).wait(1).to({x:2350.95,y:-638.75},0).wait(1).to({x:2345.6,y:-638.35},0).wait(1).to({x:2340.25,y:-637.9},0).wait(1).to({x:2334.9,y:-637.5},0).wait(1).to({x:2329.55,y:-637.05},0).wait(1).to({x:2324.2,y:-636.65},0).wait(1).to({x:2318.85,y:-636.2},0).wait(1).to({x:2313.5,y:-635.8},0).wait(1).to({x:2308.15,y:-635.35},0).wait(1).to({x:2302.8,y:-634.95},0).wait(1).to({x:2297.45,y:-634.5},0).wait(1).to({x:2292.1,y:-634.1},0).wait(1).to({x:2286.75,y:-633.65},0).wait(1).to({x:2281.4,y:-633.25},0).wait(1).to({x:2276.05,y:-632.8},0).wait(1).to({x:2270.7,y:-632.4},0).wait(1).to({x:2265.35,y:-631.95},0).wait(1).to({x:2260,y:-631.55},0).wait(1).to({x:2254.65,y:-631.1},0).wait(1).to({x:2249.3,y:-630.7},0).wait(1).to({x:2243.95,y:-630.25},0).wait(1).to({x:2238.6,y:-629.85},0).wait(1).to({x:2233.2,y:-629.4},0).wait(1).to({x:2227.85,y:-629},0).wait(1).to({x:2222.5,y:-628.55},0).wait(1).to({x:2217.15,y:-628.15},0).wait(1).to({x:2211.8,y:-627.7},0).wait(1).to({x:2206.45,y:-627.3},0).wait(1).to({x:2201.1,y:-626.85},0).wait(1).to({x:2195.75,y:-626.45},0).wait(1).to({x:2190.4,y:-626},0).wait(1).to({x:2185.05,y:-625.6},0).wait(1).to({x:2179.7,y:-625.15},0).wait(1).to({x:2174.35,y:-624.75},0).wait(1).to({x:2169,y:-624.3},0).wait(1).to({x:2163.65,y:-623.9},0).wait(1).to({x:2158.3,y:-623.45},0).wait(1).to({x:2152.95,y:-623.05},0).wait(1).to({x:2147.6,y:-622.6},0).wait(1).to({x:2142.25,y:-622.2},0).wait(1).to({x:2136.9,y:-621.75},0).wait(1).to({x:2131.55,y:-621.35},0).wait(1).to({x:2126.2,y:-620.9},0).wait(1).to({x:2120.85,y:-620.5},0).wait(1).to({x:2115.5,y:-620.05},0).wait(1).to({x:2110.15,y:-619.65},0).wait(1).to({x:2104.75,y:-619.2},0).wait(1).to({x:2099.4,y:-618.8},0).wait(1).to({x:2094.05,y:-618.35},0).wait(1).to({x:2088.7,y:-617.95},0).wait(1).to({x:2083.35,y:-617.5},0).wait(1).to({x:2078,y:-617.1},0).wait(1).to({x:2072.65,y:-616.65},0).wait(1).to({x:2067.3,y:-616.25},0).wait(1).to({x:2061.95,y:-615.8},0).wait(1).to({x:2056.6,y:-615.4},0).wait(1).to({x:2051.25,y:-614.95},0).wait(1).to({x:2045.9,y:-614.55},0).wait(1).to({x:2040.55,y:-614.1},0).wait(1).to({x:2035.2,y:-613.7},0).wait(1).to({x:2029.85,y:-613.25},0).wait(1).to({x:2024.5,y:-612.85},0).wait(1).to({x:2019.15,y:-612.4},0).wait(1).to({x:2013.8,y:-612},0).wait(1).to({x:2008.45,y:-611.55},0).wait(1).to({x:2003.1,y:-611.15},0).wait(1).to({x:1997.75,y:-610.7},0).wait(1).to({x:1992.4,y:-610.3},0).wait(1).to({x:1987.05,y:-609.85},0).wait(1).to({x:1981.65,y:-609.45},0).wait(1).to({x:1986.85,y:-609.85},0).wait(1).to({x:1992.05,y:-610.25},0).wait(1).to({x:1997.25,y:-610.65},0).wait(1).to({x:2002.45,y:-611.05},0).wait(1).to({x:2007.6,y:-611.5},0).wait(1).to({x:2012.8,y:-611.9},0).wait(1).to({x:2018,y:-612.3},0).wait(1).to({x:2023.2,y:-612.7},0).wait(1).to({x:2028.35,y:-613.15},0).wait(1).to({x:2033.55,y:-613.55},0).wait(1).to({x:2038.75,y:-613.95},0).wait(1).to({x:2043.95,y:-614.35},0).wait(1).to({x:2049.1,y:-614.75},0).wait(1).to({x:2054.3,y:-615.2},0).wait(1).to({x:2059.5,y:-615.6},0).wait(1).to({x:2064.7,y:-616},0).wait(1).to({x:2069.85,y:-616.4},0).wait(1).to({x:2075.05,y:-616.85},0).wait(1).to({x:2080.25,y:-617.25},0).wait(1).to({x:2085.45,y:-617.65},0).wait(1).to({x:2090.65,y:-618.05},0).wait(1).to({x:2095.8,y:-618.45},0).wait(1).to({x:2101,y:-618.9},0).wait(1).to({x:2106.2,y:-619.3},0).wait(1).to({x:2111.4,y:-619.7},0).wait(1).to({x:2116.55,y:-620.1},0).wait(1).to({x:2121.75,y:-620.55},0).wait(1).to({x:2126.95,y:-620.95},0).wait(1).to({x:2132.15,y:-621.35},0).wait(1).to({x:2137.3,y:-621.75},0).wait(1).to({x:2142.5,y:-622.2},0).wait(1).to({x:2147.7,y:-622.6},0).wait(1).to({x:2152.9,y:-623},0).wait(1).to({x:2158.05,y:-623.4},0).wait(1).to({x:2163.25,y:-623.8},0).wait(1).to({x:2168.45,y:-624.25},0).wait(1).to({x:2173.65,y:-624.65},0).wait(1).to({x:2178.8,y:-625.05},0).wait(1).to({x:2184,y:-625.45},0).wait(1).to({x:2189.2,y:-625.9},0).wait(1).to({x:2194.4,y:-626.3},0).wait(1).to({x:2199.6,y:-626.7},0).wait(1).to({x:2204.75,y:-627.1},0).wait(1).to({x:2209.95,y:-627.5},0).wait(1).to({x:2215.15,y:-627.95},0).wait(1).to({x:2220.35,y:-628.35},0).wait(1).to({x:2225.5,y:-628.75},0).wait(1).to({x:2230.7,y:-629.15},0).wait(1).to({x:2235.9,y:-629.6},0).wait(1).to({x:2241.1,y:-630},0).wait(1).to({x:2246.25,y:-630.4},0).wait(1).to({x:2251.45,y:-630.8},0).wait(1).to({x:2256.65,y:-631.25},0).wait(1).to({x:2261.85,y:-631.65},0).wait(1).to({x:2267,y:-632.05},0).wait(1).to({x:2272.2,y:-632.45},0).wait(1).to({x:2277.4,y:-632.85},0).wait(1).to({x:2282.6,y:-633.3},0).wait(1).to({x:2287.8,y:-633.7},0).wait(1).to({x:2292.95,y:-634.1},0).wait(1).to({x:2298.15,y:-634.5},0).wait(1).to({x:2303.35,y:-634.95},0).wait(1).to({x:2308.55,y:-635.35},0).wait(1).to({x:2313.7,y:-635.75},0).wait(1).to({x:2318.9,y:-636.15},0).wait(1).to({x:2324.1,y:-636.55},0).wait(1).to({x:2329.3,y:-637},0).wait(1).to({x:2334.45,y:-637.4},0).wait(1).to({x:2339.65,y:-637.8},0).wait(1).to({x:2344.85,y:-638.2},0).wait(1).to({x:2350.05,y:-638.65},0).wait(1).to({x:2355.2,y:-639.05},0).wait(1).to({x:2360.4,y:-639.45},0).wait(1).to({x:2365.6,y:-639.85},0).wait(1).to({x:2370.8,y:-640.3},0).wait(1).to({x:2375.95,y:-640.7},0).wait(1).to({x:2381.15,y:-641.1},0).wait(1).to({x:2386.35,y:-641.5},0).wait(1).to({x:2391.55,y:-641.9},0).wait(1).to({x:2396.75,y:-642.35},0).wait(1).to({x:2401.9,y:-642.75},0).wait(1).to({x:2407.1,y:-643.15},0).wait(1).to({x:2412.3,y:-643.55},0).wait(1).to({x:2417.5,y:-644},0).wait(1).to({x:2422.65,y:-644.4},0).wait(1).to({x:2427.85,y:-644.8},0).wait(1).to({x:2433.05,y:-645.2},0).wait(1).to({x:2438.25,y:-645.6},0).wait(1).to({x:2443.4,y:-646.05},0).wait(1).to({x:2448.6,y:-646.45},0).wait(1).to({x:2453.8,y:-646.85},0).wait(1).to({x:2459,y:-647.25},0).wait(1).to({x:2464.15,y:-647.7},0).wait(1).to({x:2469.35,y:-648.1},0).wait(1).to({x:2474.55,y:-648.5},0).wait(1).to({x:2479.75,y:-648.9},0).wait(1).to({x:2484.9,y:-649.35},0).wait(1));

	// alien_floating
	this.alien_bg = new lib.alien_floating_away();
	this.alien_bg.name = "alien_bg";
	this.alien_bg.setTransform(2154.3,-792.15,0.2785,0.2785,0,0,0,-596.3,47.8);

	this.timeline.addTween(cjs.Tween.get(this.alien_bg).wait(192));

	// astroid_2
	this.instance_10 = new lib.astroid();
	this.instance_10.setTransform(2263.25,-1207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({x:2183.4161,y:-1142.7375},0).wait(1).to({x:2103.5821,y:-1077.975},0).wait(1).to({x:2023.7482,y:-1013.2125},0).wait(1).to({x:1943.9143,y:-948.45},0).wait(1).to({x:1864.0804,y:-883.6875},0).wait(1).to({x:1784.2464,y:-818.925},0).wait(1).to({x:1704.4125,y:-754.1625},0).wait(1).to({x:1624.5786,y:-689.4},0).wait(1).to({x:1544.7446,y:-624.6375},0).wait(1).to({x:1464.9107,y:-559.875},0).wait(1).to({x:1385.0768,y:-495.1125},0).wait(1).to({x:1305.2429,y:-430.35},0).wait(1).to({x:1225.4089,y:-365.5875},0).wait(1).to({x:1145.575,y:-300.825},0).wait(1).to({x:1065.7411,y:-236.0625},0).wait(1).to({x:985.9071,y:-171.3},0).wait(1).to({x:906.0732,y:-106.5375},0).wait(1).to({x:826.2393,y:-41.775},0).wait(1).to({x:746.4054,y:22.9875},0).wait(1).to({x:666.5714,y:87.75},0).wait(1).to({x:586.7375,y:152.5125},0).wait(1).to({x:506.9036,y:217.275},0).wait(1).to({x:427.0696,y:282.0375},0).wait(1).to({x:347.2357,y:346.8},0).wait(1).to({x:267.4018,y:411.5625},0).wait(1).to({x:187.5679,y:476.325},0).wait(1).to({x:107.7339,y:541.0875},0).wait(1).to({x:27.9,y:605.85},0).wait(164));

	// astroid
	this.instance_11 = new lib.astroid();
	this.instance_11.setTransform(5193.5,-1300.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({x:5165.3801,y:-1289.2245},0).wait(1).to({x:5137.2603,y:-1277.4989},0).wait(1).to({x:5109.1404,y:-1265.7734},0).wait(1).to({x:5081.0206,y:-1254.0479},0).wait(1).to({x:5052.9007,y:-1242.3223},0).wait(1).to({x:5024.7809,y:-1230.5968},0).wait(1).to({x:4996.661,y:-1218.8713},0).wait(1).to({x:4968.5411,y:-1207.1457},0).wait(1).to({x:4940.4213,y:-1195.4202},0).wait(1).to({x:4912.3014,y:-1183.6947},0).wait(1).to({x:4884.1816,y:-1171.9691},0).wait(1).to({x:4856.0617,y:-1160.2436},0).wait(1).to({x:4827.9418,y:-1148.5181},0).wait(1).to({x:4799.822,y:-1136.7926},0).wait(1).to({x:4771.7021,y:-1125.067},0).wait(1).to({x:4743.5823,y:-1113.3415},0).wait(1).to({x:4715.4624,y:-1101.616},0).wait(1).to({x:4687.3426,y:-1089.8904},0).wait(1).to({x:4659.2227,y:-1078.1649},0).wait(1).to({x:4631.1028,y:-1066.4394},0).wait(1).to({x:4602.983,y:-1054.7138},0).wait(1).to({x:4574.8631,y:-1042.9883},0).wait(1).to({x:4546.7433,y:-1031.2628},0).wait(1).to({x:4518.6234,y:-1019.5372},0).wait(1).to({x:4490.5035,y:-1007.8117},0).wait(1).to({x:4462.3837,y:-996.0862},0).wait(1).to({x:4434.2638,y:-984.3606},0).wait(1).to({x:4406.144,y:-972.6351},0).wait(1).to({x:4378.0241,y:-960.9096},0).wait(1).to({x:4349.9043,y:-949.184},0).wait(1).to({x:4321.7844,y:-937.4585},0).wait(1).to({x:4293.6645,y:-925.733},0).wait(1).to({x:4265.5447,y:-914.0074},0).wait(1).to({x:4237.4248,y:-902.2819},0).wait(1).to({x:4209.305,y:-890.5564},0).wait(1).to({x:4181.1851,y:-878.8309},0).wait(1).to({x:4153.0652,y:-867.1053},0).wait(1).to({x:4124.9454,y:-855.3798},0).wait(1).to({x:4096.8255,y:-843.6543},0).wait(1).to({x:4068.7057,y:-831.9287},0).wait(1).to({x:4040.5858,y:-820.2032},0).wait(1).to({x:4012.466,y:-808.4777},0).wait(1).to({x:3984.3461,y:-796.7521},0).wait(1).to({x:3956.2262,y:-785.0266},0).wait(1).to({x:3928.1064,y:-773.3011},0).wait(1).to({x:3899.9865,y:-761.5755},0).wait(1).to({x:3871.8667,y:-749.85},0).wait(1).to({x:3843.7468,y:-738.1245},0).wait(1).to({x:3815.627,y:-726.3989},0).wait(1).to({x:3787.5071,y:-714.6734},0).wait(1).to({x:3759.3872,y:-702.9479},0).wait(1).to({x:3731.2674,y:-691.2223},0).wait(1).to({x:3703.1475,y:-679.4968},0).wait(1).to({x:3675.0277,y:-667.7713},0).wait(1).to({x:3646.9078,y:-656.0457},0).wait(1).to({x:3618.7879,y:-644.3202},0).wait(1).to({x:3590.6681,y:-632.5947},0).wait(1).to({x:3562.5482,y:-620.8691},0).wait(1).to({x:3534.4284,y:-609.1436},0).wait(1).to({x:3506.3085,y:-597.4181},0).wait(1).to({x:3478.1887,y:-585.6926},0).wait(1).to({x:3450.0688,y:-573.967},0).wait(1).to({x:3421.9489,y:-562.2415},0).wait(1).to({x:3393.8291,y:-550.516},0).wait(1).to({x:3365.7092,y:-538.7904},0).wait(1).to({x:3337.5894,y:-527.0649},0).wait(1).to({x:3309.4695,y:-515.3394},0).wait(1).to({x:3281.3496,y:-503.6138},0).wait(1).to({x:3253.2298,y:-491.8883},0).wait(1).to({x:3225.1099,y:-480.1628},0).wait(1).to({x:3196.9901,y:-468.4372},0).wait(1).to({x:3168.8702,y:-456.7117},0).wait(1).to({x:3140.7504,y:-444.9862},0).wait(1).to({x:3112.6305,y:-433.2606},0).wait(1).to({x:3084.5106,y:-421.5351},0).wait(1).to({x:3056.3908,y:-409.8096},0).wait(1).to({x:3028.2709,y:-398.084},0).wait(1).to({x:3000.1511,y:-386.3585},0).wait(1).to({x:2972.0312,y:-374.633},0).wait(1).to({x:2943.9113,y:-362.9074},0).wait(1).to({x:2915.7915,y:-351.1819},0).wait(1).to({x:2887.6716,y:-339.4564},0).wait(1).to({x:2859.5518,y:-327.7309},0).wait(1).to({x:2831.4319,y:-316.0053},0).wait(1).to({x:2803.3121,y:-304.2798},0).wait(1).to({x:2775.1922,y:-292.5543},0).wait(1).to({x:2747.0723,y:-280.8287},0).wait(1).to({x:2718.9525,y:-269.1032},0).wait(1).to({x:2690.8326,y:-257.3777},0).wait(1).to({x:2662.7128,y:-245.6521},0).wait(1).to({x:2634.5929,y:-233.9266},0).wait(1).to({x:2606.473,y:-222.2011},0).wait(1).to({x:2578.3532,y:-210.4755},0).wait(1).to({x:2550.2333,y:-198.75},0).wait(1).to({x:2522.1135,y:-187.0245},0).wait(1).to({x:2493.9936,y:-175.2989},0).wait(1).to({x:2465.8738,y:-163.5734},0).wait(1).to({x:2437.7539,y:-151.8479},0).wait(1).to({x:2409.634,y:-140.1223},0).wait(1).to({x:2381.5142,y:-128.3968},0).wait(1).to({x:2353.3943,y:-116.6713},0).wait(1).to({x:2325.2745,y:-104.9457},0).wait(1).to({x:2297.1546,y:-93.2202},0).wait(1).to({x:2269.0348,y:-81.4947},0).wait(1).to({x:2240.9149,y:-69.7691},0).wait(1).to({x:2212.795,y:-58.0436},0).wait(1).to({x:2184.6752,y:-46.3181},0).wait(1).to({x:2156.5553,y:-34.5926},0).wait(1).to({x:2128.4355,y:-22.867},0).wait(1).to({x:2100.3156,y:-11.1415},0).wait(1).to({x:2072.1957,y:0.584},0).wait(1).to({x:2044.0759,y:12.3096},0).wait(1).to({x:2015.956,y:24.0351},0).wait(1).to({x:1987.8362,y:35.7606},0).wait(1).to({x:1959.7163,y:47.4862},0).wait(1).to({x:1931.5965,y:59.2117},0).wait(1).to({x:1903.4766,y:70.9372},0).wait(1).to({x:1875.3567,y:82.6628},0).wait(1).to({x:1847.2369,y:94.3883},0).wait(1).to({x:1819.117,y:106.1138},0).wait(1).to({x:1790.9972,y:117.8394},0).wait(1).to({x:1762.8773,y:129.5649},0).wait(1).to({x:1734.7574,y:141.2904},0).wait(1).to({x:1706.6376,y:153.016},0).wait(1).to({x:1678.5177,y:164.7415},0).wait(1).to({x:1650.3979,y:176.467},0).wait(1).to({x:1622.278,y:188.1926},0).wait(1).to({x:1594.1582,y:199.9181},0).wait(1).to({x:1566.0383,y:211.6436},0).wait(1).to({x:1537.9184,y:223.3691},0).wait(1).to({x:1509.7986,y:235.0947},0).wait(1).to({x:1481.6787,y:246.8202},0).wait(1).to({x:1453.5589,y:258.5457},0).wait(1).to({x:1425.439,y:270.2713},0).wait(1).to({x:1397.3191,y:281.9968},0).wait(1).to({x:1369.1993,y:293.7223},0).wait(1).to({x:1341.0794,y:305.4479},0).wait(1).to({x:1312.9596,y:317.1734},0).wait(1).to({x:1284.8397,y:328.8989},0).wait(1).to({x:1256.7199,y:340.6245},0).wait(1).to({x:1228.6,y:352.35},0).wait(51));

	// star
	this.instance_12 = new lib.shining_star();
	this.instance_12.setTransform(3740.75,-844.55,0.8364,0.8364);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(192));

	// stars2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgSATIgDgEIAAgHIgCgHIABgGIABgHQACgHAHgCIAMgDIAAgCQAIABAGAFQAGAFADAHQAFAPgLAMQgFAFgEABQgFACgDAAQgJAAgJgIg");
	this.shape_3.setTransform(659.739,-1019.4136);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_4.setTransform(599.6325,-949.1714);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgDAYQgJgBgHgGIgDgEIgBgHIgCgGQAAgEACgFQAEgHAFgDQAHgEAHACIAAgDQAUADAFANQADAIgFAMQAAADgDADQgDADgEACQgFACgGAAIgFgBg");
	this.shape_5.setTransform(3508.3971,-658.9386);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgDAYQgJgBgHgGIgDgEIgBgHIgCgGQAAgEACgFQAEgHAFgDQAHgEAHACIAAgDQAUADAFANQADAIgFAMQAAADgDADQgDADgEACQgFACgGAAIgFgBg");
	this.shape_6.setTransform(3385.3971,-825.9386);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_7.setTransform(4039.5825,-763.9214);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgDAYQgJgBgHgGIgDgEIgBgHIgCgGQAAgEACgFQAEgHAFgDQAHgEAHACIAAgDQAUADAFANQADAIgFAMQAAADgDADQgDADgEACQgFACgGAAIgFgBg");
	this.shape_8.setTransform(1863.4971,-760.1886);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_9.setTransform(2229.7325,-537.9714);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_10.setTransform(2330.7325,-701.1714);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_11.setTransform(2010.7325,-974.9214);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AgUAUQgEgCgCgDIgDgLIgBgGQAAgFADgEQADgGAGgDQAGgDAGABIAAgCQANgBAJAEQAMAFADALQAAAFgBAHQgDAJgEADQgFAEgGABIgLABQgKAAgLgFg");
	this.shape_12.setTransform(2864.9813,-863.8933);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_13.setTransform(132.9325,-626.9214);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_14.setTransform(335.8825,-646.9714);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AAHAgQgHAAgHgFQgGgDgCgDIgEgJIgFgFQgCgCgBgFQgCgLAFgIQADgFAGgDQAGgDAGABIAAgCQAMAEAIAHQAKAJABALQABAFgCAIQgBAJgGAFQgFAFgHAAIgBAAg");
	this.shape_15.setTransform(299.4646,-994.1977);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_16.setTransform(927.0325,-1006.9214);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AgBAbQgMAAgIgHQgDgCAAgCIgDgPIAAgHIADgJQAEgIARgBIAAgCIAQAGQAKAFADAHQACAEAAAHQAAAIgCADQgBAEgFADQgJAGgLAAIgBAAg");
	this.shape_17.setTransform(772.55,-758.2232);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_18.setTransform(1000.0325,-430.2214);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_19.setTransform(1560.7825,-341.9714);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AgDAYQgJgBgHgGIgDgEIgBgHIgCgGQAAgEACgFQAEgHAFgDQAHgEAHACIAAgDQAUADAFANQADAIgFAMQAAADgDADQgDADgEACQgFACgGAAIgFgBg");
	this.shape_20.setTransform(1987.4971,-340.9886);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_21.setTransform(3593.6325,-1038.9214);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_22.setTransform(2928.6825,-691.1714);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgKAVQgJgEgBgEIgBgIIgCgFQAAgEACgDQADgIAGgDQAGgEAHABIAAgCQAOAFAFAGQAFAHgCAKQgDAOgJAEQgDABgFAAQgFAAgIgDg");
	this.shape_23.setTransform(3261.6536,-343.2536);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_24.setTransform(3819.6325,-347.2214);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_25.setTransform(5458.5325,-384.2214);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_26.setTransform(5182.8325,-561.9214);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_27.setTransform(4484.5825,-527.9714);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_28.setTransform(2642.7325,-805.9214);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_29.setTransform(2398.7325,-509.2214);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgUAUQgEgCgCgDIgDgLIgBgGQAAgFADgEQADgGAGgDQAGgDAGABIAAgCQANgBAJAEQAMAFADALQAAAFgBAHQgDAJgEADQgFAEgGABIgLABQgKAAgLgFg");
	this.shape_30.setTransform(2802.9813,-364.9433);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_31.setTransform(3312.6825,-583.9214);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgQAWQgIgBgEgFQgCgDgBgFQgCgIABgHQACgHAHgFQAHgEAIABIAAgCQANgBAJACQAOAEAEALQACAGgCAJQgDAJgEAEQgDACgJACIgLABQgJAAgJgDg");
	this.shape_32.setTransform(3920.9219,-985.8946);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_33.setTransform(4263.6325,-935.9214);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_34.setTransform(4249.8825,-348.9714);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgMAZQgHgCgDgEQgEgDgBgJQgBgIACgHQADgIAHgEQAHgEAIABIAAgDQALgBAKAHQAFAEABAEQADAFgBAGQAAAGgCAFQgFAKgTAGIgGABIgIgCg");
	this.shape_35.setTransform(127.4612,-420.7309);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_36.setTransform(627.8825,-444.2214);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgDAYQgJgBgHgGIgDgEIgBgHIgCgGQAAgEACgFQAEgHAFgDQAHgEAHACIAAgDQAUADAFANQADAIgFAMQAAADgDADQgDADgEACQgFACgGAAIgFgBg");
	this.shape_37.setTransform(1361.5471,-441.9886);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_38.setTransform(1997.7325,-573.9714);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_39.setTransform(975.7825,-783.9214);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_40.setTransform(281.9325,-805.1714);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgBAYQgHgBgIgGQgDgCgBgCIAAgGIgCgHQgBgEADgGQAEgGAGgDQAGgEAFACIAAgDQAPAFAFAHQADAGgBAIQgBAOgIAFQgFAEgGAAIgEgBg");
	this.shape_41.setTransform(184.9325,-893.1714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(192));

	// stars
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("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gIAWIg2AIQgRgZgEgOgEk0mAfhIgBgHIADgGIAHgLIAFgGIAIgDIAWgFQALgCAFADIAGAFIALALIAFAGQABADAAAFQAAAUgIASIg2AIQgOgSgHgVgEmH2AaPIgBgIIADgGIAHgKIAEgFIAIgEQAOgEAPgCQAGgBADACQAEABACADIAMAMIAFAGIABAJQAAATgIATIg2AHQgNgRgIgVgEFY3AZRIgBgHIADgGIAHgLIAFgGIAIgDIAWgFQALgCAFADIAGAFIALALIAFAGQABADAAAFQAAAUgIASIg2AIQgOgSgHgVgEDy2AX1IgBgIIADgGIAHgKQABgDADgCIAHgEQAOgEAPgCQAHgBADACQAEABACADIAMAMIAFAGIABAJQAAATgIATIg2AHQgNgRgIgVgEj1kAW3IgBgHIACgGIAHgKIAFgGIAJgEQARgFAKAAQAGgBAEACQAEABACADIAMAMIAFAGQABADAAAFQAAAUgIASIg2AIQgOgSgHgVgEAroAUdIgBgIIAKgQIAEgGIAJgDIAWgFQALgCAFADIAGAFIALALQADACACAEQABACAAAGQAAATgIATIg2AIQgNgRgIgWgEBW/AUkIgcgFIgIgDIgFgGIgGgJIgEgHIABgIQAEgMAIgOQAEgJAFgCQADgBAKAAQAOABAMgJIAPAMQAKAGAEAGQAIALAAANQgBAOgJAIQgCADgKAFIgGADQgFADgDAAIgDAAIgIAAgECjwATFIgLgEQgQgGgFgIQgEgHACgPQAEgeATgXQAHgIAGgCIAKgBIAKAAIAJAAIAIABQADABAFAEIAHAHQAHAHABADQADAFgBAIQgCAQgLAeQgCAGgDADIgHAFIgSAHQgIADgEAAIgJgCgEhQ/AMwIgBgHIAJgRIAFgFIAJgEIAWgEQAKgCAGADIAGAEIALAMQADACABADQACADAAAGQAAASgIATIg2AIQgNgQgIgXgECDsALyIgBgIIADgFIAHgKQABgEADgCQAEgDAEAAIAagGQAJgBAEACIAFAFIAMAMIAFAFQABAEAAAFQAAATgIASIg2AIQgOgSgHgVgEjEAAJZIgBgIIADgGIAHgKQABgDADgCIAHgEQAOgEAPgCQAHgBADACQAEABACADIAMAMIAFAGIABAJQAAATgIATIg2AHQgNgRgIgVgEETFADIIgBgIIADgFIAHgKQACgEADgCQAEgDAEAAIAagGQAJgBADACIAGAFIAMAMIAEAFQACAEAAAFQAAATgJASIg1AIQgOgSgIgVgEC2sABtIgBgIIADgGIAHgLQACgEADgCIAIgDQAPgEAMgBQAGgBAFACIAGAEIALAMQADADACADQABADAAAFQAAATgIATIg2AIQgNgRgIgVgElYsABsIgBgHIADgGIAHgLIAFgGIAJgDIAWgFQAKgCAGADIAGAFIALALIAEAGQACADAAAFQAAAUgJASIg1AIQgOgSgIgVgEmU2AAQIgBgIIADgFIAHgKIAFgGIAIgDIAbgGQAHgBAFACIARARIAEAEQACAEAAAFQAAATgJATIg1AHQgOgSgIgUgEGW8AAZIgIgCQgDgBgEgGIgKgQQgIgOADgMQADgMAOgHQAKgFAQgCIAAgIQAcADAMAFQAOAEAHAIQAIAJAAAOQABAMgFAMIgFAIQgCADgHAEQgNAHgKABgAm5iJIgBgIIADgGIAHgKIAEgFIAIgEQAOgEAPgCQAGgBADACQAEABACADIAMAMIAFAGIABAJQAAATgIATIg2AHQgNgRgIgVgECBSgHcQgCgEABgEIADgGIAHgKIAEgGIAJgDIAWgFQAKgCAGADIAGAFIALALQADACABAEQACACAAAGQAAATgIATIg2AIQgNgRgIgWgEg5agKzIgBgJIADgFIAGgKQACgEADgCIAHgDQAOgFAPgBQAGgBADABIAGAFIANAMIAEAHQACACAAAGQAAASgIATIg2AIQgNgRgIgVgEjixgOFIgagFIgIgCQgDgCgCgEIgGgJIgDgHQgBgDACgFQAEgNAHgNQAEgIAEgCQADgCAOAAQAMAAALgIQASALAHAIQAMANAAAOQAAAHgDAJQgCAEgDADIgHAFIgMAGIgJADIgFABIgIgBgEDFngPIIgBgIIADgGIAHgLQACgEADgCIAIgDQAPgEAMgBQAGgBAFACIAGAEIALAMQADADACADQABADAAAFQAAATgIATIg2AIQgNgRgIgVgEi6YgSgIgBgIIADgGIALgQIAIgDQAPgEAMgCQAHgBAFACIAGAFIALAMIAFAGQABACAAAGQAAATgIATIg2AHQgNgRgIgVgEBLZgSgIgBgJIADgFIAGgKIAFgGIAHgDQAPgFAOgBQAGgBADABIAGAFIANAMIAEAHQACACAAAGQAAASgIATIg2AIQgNgRgIgVgEFRKgS/IgBgIIADgGIAHgKIAFgFIAHgEQAOgEAPgCQAGgBADACIAGAEIAMANIAFAGQABADAAAFQAAATgIATIg2AHQgNgRgIgVgEiAogUcQgBgEAAgEIADgGIAHgKIAFgGIAJgDIAVgFQALgCAFADIAGAFIALALQADACACAEQABACAAAGQAAATgIATIg2AIQgNgRgIgWgEkqfgU7QgCgEABgDIACgGIAHgKIAFgGQADgCAHgCIAXgFQAIgCAFADIAGAEIAMAMIAFAGQABAEAAAEQAAAUgIASIg2AIQgOgSgHgVgECmVgWWIgBgJIADgFIAHgKIAEgGIAIgDQAOgFAPgBQAGgBADABQAEACACADIAMAMIAFAGIABAIQAAATgIATIg2AIQgNgRgIgVgEEBSgW2QgCgEABgDIADgGIAHgKIAEgGIAJgEIAWgEQAKgCAGADIAGAEIALAMQADACABADQACADAAAGQAAASgIATIg2AIQgNgQgIgXgEmyrgW2IgBgHIAKgRIAEgFIAJgEIAWgEQALgCAFADIAGAEIALAMQADACACADQABADAAAGQAAASgIATIg2AIQgNgQgIgXgEESngW1IgBgJIADgFIAGgKIAFgGIAHgDQAPgFAOgBQAGgBADABIAGAFIANAMIAEAHQACACAAAGQAAASgIATIg2AIQgNgRgIgVgEmmpgXzIgBgIIADgGIAHgKQABgDADgCIAHgEQAOgEAPgCQAHgBADACIAGAEIAMANIAFAGQABADAAAFQAAATgIATIg2AHQgNgRgIgVgECDNgbLIgBgHIACgGIAHgKIAFgGIAJgEIAagFQAHgBAFACIAFAEIAMANIAFAFQABAEAAAFQAAATgIASIg2AIQgOgSgHgVgEDi+gbLIgBgIIADgGIAGgKIAFgFIAHgEQAPgEAOgCQAGgBADACIAGAEIANANIAEAGQACADAAAFQAAATgIATIg2AHQgNgRgIgVgEDrJgbpIgBgJIADgFIAHgKIAFgGIAIgDQAPgEAMgCQAGgBAFACIAGAFIALAMIAFAFQABADAAAGQAAASgIATIg2AIQgOgSgHgUgEGHigcnQgBgEAAgEIADgGIAHgKIAFgGIAJgDIAVgFQALgCAFADIAGAFIALALQADACACAEQABACAAAGQAAATgIATIg2AIQgNgRgIgWgEB0SgcoIgBgHIADgFIAHgLIAFgFQADgDAFgBQATgFAJAAQAGgBAEABIAGAFIAMAMIAEAGQACADAAAGQAAATgJASIg1AIQgPgUgHgUgEA5GgcoIgBgHIADgFIAHgLIAFgFQADgDAFgBQATgFAJAAQAGgBAEABIAGAFIAMAMIAEAGQACADAAAGQAAATgJASIg1AIQgPgUgHgUgEgIVgkyIgBgJIADgFIAHgKIAFgGIAHgDQAOgFAPgBQAGgBADABIAGAFIAMAMIAFAHQABACAAAGQAAASgIATIg2AIQgNgRgIgVgEkedgnMIgBgJIADgFIAGgKIAFgGIAHgDQAPgFAOgBQAGgBADABQAEACACADIANAMIAEAGIACAIQAAATgIATIg2AIQgNgRgIgVgEhmpgoKIgBgIIACgFIAHgLIAFgGIAJgDIAagGQAHgBAFACIARARIAFAFQABAEAAAFQAAATgIATIg2AHQgOgSgHgUgEFI/gopQgCgEABgEIADgGIAHgKIAEgGIAJgDIAWgFQAKgCAGADIAGAFIALALQADACABAEQACACAAAGQAAATgIATIg2AIQgNgRgIgWgEl+OgopQgBgEAAgEIADgGIAHgKIAFgGIAJgDIAVgFQALgCAFADIAGAFIALALQADACACAEQABACAAAGQAAATgIATIg2AIQgNgRgIgWgEkOlgqGIgBgIIADgFIAHgKQABgEADgCQAEgDAEAAIAagGQAJgBAEACIAFAFIAMAMIAFAFQABAEAAAFQAAATgIASIg2AIQgOgSgHgVgEGxagrDQgCgEABgEIADgGIAHgKIAEgGIAJgDIAWgFQAKgCAGADIAGAFIALALQADACABAEQACACAAAGQAAATgIATIg2AIQgNgRgIgWgEkAogubQgCgEABgDIADgGIAHgKIAEgGIAJgEIAWgEQAKgCAGADIAGAEIALAMQADACABADQACADAAAGQAAASgIATIg2AIQgNgQgIgXgEEHDgwWIgBgHIADgGIAHgKIAFgGIAIgEIAbgFQAHgBAFACIARAQIAEAGQACAEAAAEQAAAUgJASIg1AIQgOgSgIgVgEiYrgxyIgBgIIADgGIAGgKQACgDADgCIAHgEQAOgEAPgCQAGgBADACIAGAEIANANIAEAGQACADAAAFQAAATgIATIg2AHQgNgRgIgVgEGEqg5eIgBgIIADgGIAGgLIAFgGIAGgCQAPgFAPgBQAHgBACABQAEACADADIAMAMIAEAGQACADAAAGQAAATgJASIg1AIQgOgSgHgUgECptg74IgBgIIADgGIAHgLQACgEACgCIAIgDQAPgEAMgBQAHgBAEACIAGAEIAMAMQADADABADQACADAAAFQAAATgIATIg2AIQgNgRgIgVgEkkPg9VIgBgIIADgGIAHgKQACgEADgCIAIgDQAPgEAMgCQAGgBAFACIAGAFIALAMQADACACAEQABACAAAGQAAATgIATIg2AHQgNgRgIgVgElReg90IgBgIIAKgQIAEgGIAJgDIAWgFQALgCAFADIAGAFIALALQADACACAEQABACAAAGQAAATgIATIg2AIQgNgRgIgWgEDgkg+SIgBgIIADgGIAHgLQACgEACgCIAIgDQAPgEAMgBQAHgBAEACIAGAEIAMAMQADADABADQACADAAAFQAAATgIATIg2AIQgNgRgIgVgEj3hhCgIgHgBQgDgCgCgDQgJgOgFgNQgDgIgBgFQAAgGAEgKQAEgKAGgLQAGgIADgBQAEgBAIABIAMgBQAIgBAFACQADABAHAGQAXAVgDAVQgBAQgWAVIgHAFIgJABgEkSbhDGIgBgIIADgGIAHgLQACgEACgCIAIgDQAPgEAMgBQAHgBAEACIAGAEIAMAMQADADABADQACADAAAFQAAATgIATIg2AIQgNgRgIgVgEgYshEEIgBgJIADgFIAGgKIAFgGIAIgDQAPgEAMgCQAHgBAEACIAGAFIAMAMIAEAFQACADAAAGQAAASgIATIg2AIQgPgSgGgUgEl4chEEIgBgJIADgFIAGgKIAFgGIAIgDQAPgEAMgCQAHgBAEACIAGAFIAQARQACADAAAGQAAASgIATIg2AIQgPgSgGgUgEEOwhEjIgBgIIADgGIAHgKQACgEADgCIAIgDQAPgEAMgCQAGgBAFACIAGAFIALAMQADACACAEQABACAAAGQAAATgIATIg2AHQgNgRgIgVgEhV7hD9IgJgBIgGgFQgVgSgCgPQgDgPAPgbQAFgJAEgBQADgBAJAAIANAAQAHgBAFACQAFABAGAFIALAIIAIAHQAEAFADAIQADANAAAKQAAAIgBADIgGAHIgJAJIgHAGQgDABgIAAgEB9chJXIgBgJQABgDACgCIAGgLIAFgFIAJgEIAVgEQALgCAGADIARAQQADACABADQACADAAAFQAAATgIATIg2AIQgPgSgGgUgEmlrhJYQgCgEABgDIADgGIAHgKIAEgGIAJgEIAWgEQAKgCAGADIAGAEIALAMQADACABADQACADAAAGQAAASgIATIg2AIQgNgQgIgXgEGpqhJPIgGgBQgDgBgDgFIgHgNQgGgJgCgHQgEgRAPgcQAEgIAEgCQADgCAIAAIARAAIALABQAEACAFAFQALAKAEAHQAFAKAAAMQAAALgFAKQgFAJgMAJQgEAFgEABIgIABgEF7ChLxIgBgIIADgGIAGgKQACgDADgCIAHgEQAOgEAPgCQAGgBADACQAEABACADIANAMIAEAGIACAJQAAATgIATIg2AHQgNgRgIgVgEiizhMuIgBgJIADgFIAHgKQABgEADgCIAHgDQAOgFAPgBQAHgBADABQAEACACADIAMAMIAFAGIABAIQAAATgIATIg2AIQgNgRgIgVgEBNLhNmQgDgBgDgFIgIgNQgHgMgBgFQgDgOAMgZQAFgLAFgDQAFgDAIABIANAAIAHAAQAEgBADABQAEADADADQAVATACAQQADAXgaAWQgEAEgEACIgeAAIgGgBgEjfbhOrIgBgHIADgFIAHgLIAFgFQADgDAFgBQAPgEANgBQAFgBAEABQADACADADIANAMIAEAGQACADAAAGQAAATgJASIg2AIQgNgSgIgWgEFCuhQHIgBgHIADgGIAHgKIAFgGQADgCAFgBQAPgEAMgCQAGgBAEACQADABADAEIANAMIAEAGQACACAAAGQAAATgJATIg2AHQgNgSgIgVgEAeohRjIgBgHIADgGIAHgLIAFgGIAJgDIAWgFQAKgCAGADIAGAFIALALIAEAGQACADAAAFQAAAUgJASIg1AIQgOgSgIgVg");
	this.shape_42.setTransform(2937.725,-518.915);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(192));

	// nebula
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FF68C8","#3C28CF","#000000"],[0,0.408,0.824],-334.7,494,334.1,-493.8).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_43.setTransform(959.975,-540.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(192));

	// background
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("EnB/BUYMAAAiovMOD/AAAMAAACovg");
	this.shape_44.setTransform(2880,-540);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(192));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.8,-1428.2,6321.8,2161.8);


// stage content:
(lib.final_project_Gordon_08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [63,64];
	// timeline functions:
	this.frame_63 = function() {
		this.stop();
		//this.diamond_lk.addEventListener("click", link.bind(this))
		
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 10
		
		var root = this;
		var midpoint = this.stage.canvas.width / 2;
		var midpointV = this.stage.canvas.height / 2;
		var cloudsRestX = this.cloudsTwo.x;
		var moonRestY = this.alienMoon.y;
		
		function handleKeyDown(event){
			console.log(root.background_mc.x);
			if (root.alienWalk_mc.currentFrame == 9){
				root.alienWalk_mc.gotoAndPlay("walking")
			}
			
			if (event.keyCode == 39 && root.background_mc.x > -3820){
				root.alienWalk_mc.scaleX = 1;
				root.background_mc.x = root.background_mc.x - speed;
			}
			if (event.keyCode == 37 && root.background_mc.x < 0){
				root.alienWalk_mc.scaleX = -1;
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		this.background_mc.satellite_mc.addEventListener("click", handleClickSatellite);
		
		this.background_mc.forerock_mc.bug_mc.addEventListener("click", handleClickBug);
		
		this.background_first.satellite_first.addEventListener("click", handleClickPlayAlpha);
		
		this.background_mc.alien_bg.addEventListener("click", handleClickAlienSound);
		
		//this.play_butn.addEventListener("click", handleClickPlayButton);
		
		function handleClickSatellite(event){
			var whoosh_snd = createjs.Sound.play("spacey");
			root.background_mc.satellite_mc.play();
		}
		
		function handleClickBug(event){ 
			root.background_mc.forerock_mc.bug_mc.play();
		}
		
		function handleKeyUp(event){
			root.alienWalk_mc.gotoAndPlay("standing");
		}
		
		function handleClickAlienSound(event){
			var music_snd = createjs.Sound.play("cutealien");
			//root.play();
		}
		
		function handleClickPlayAlpha(event){
			var music_spc = createjs.Sound.play("space");
			root.play();
		}
		
		this.stage.on("stagemousemove", function(e) {
		    var newX = 0;
			var newY = 0;
			if (e.stageX < midpoint) {
				newX = (midpoint - e.stageX) / 20;
			} else if (e.stageX > midpoint) {
				newX = (e.stageX - midpoint) / 20;
				newX *= -1;
			}
			if(e.stageY < midpointV) {
				newY = (midpointV - e.stageY) / 20;
			} else if (e.stageY > midpointV) {
				newY = (e.stageY-midpointV) /20;
				newY *= -1;
			}
			createjs.Tween.get(root.cloudsTwo, {override:true}).to({x: cloudsRestX + newX}, 1000, createjs.Ease.quintOut);
			createjs.Tween.get(root.cloudsThree, {override:true}).to({x: cloudsRestX + (newX / 2)}, 1000, createjs.Ease.quintOut);
			createjs.Tween.get(root.alienMoon, {override:true}).to({y: moonRestY + (newY / 2)}, 1000, createjs.Ease.quintOut);
			createjs.Tween.get(root.cloudsOne, {override:true}).to({x: cloudsRestX + (newX / 2)}, 1000, createjs.Ease.quintOut)
		
			
		});
	}
	this.frame_64 = function() {
		this.stop();
		
		//document.addEventListener("keydown", handleKeyDown);
		//document.addEventListener("keyup", handleKeyUp);
		
		//var root = this;
		//var speed = 10
		
		//function handleKeyDown(event){
			//console.log(root.background_mc.x);
			//if (root.alienWalk_mc.currentFrame == 9){
				//root.alienWalk_mc.gotoAndPlay("walking")
			//}
			
			//if (event.keyCode == 39 && root.background_mc.x > -3820){
				//root.alienWalk_mc.scaleX = 1;
				//root.background_mc.x = root.background_mc.x - speed;
			//}
			//if (event.keyCode == 37 && root.background_mc.x < 0){
				//root.alienWalk_mc.scaleX = -1;
				//root.background_mc.x = root.background_mc.x + speed;
			//}
		//}
		
		//this.background_mc.satellite_mc.addEventListener("click", handleClickSatellite);
		
		//this.background_mc.forerock_mc.bug_mc.addEventListener("click", handleClickBug);
		
		//function handleClickSatellite(event){
			//var whoosh_snd = createjs.Sound.play("spacey");
			//root.background_mc.satellite_mc.play();
		//}
		
		//function handleClickBug(event){ 
			//root.background_mc.forerock_mc.bug_mc.play();
		//}
		
		//function handleKeyUp(event){
			//root.alienWalk_mc.gotoAndPlay("standing");
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1).call(this.frame_64).wait(1));

	// text
	this.instance = new lib.text();
	this.instance.setTransform(1458.3,150.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).wait(1).to({regX:0.1,regY:26.2,x:1458.4,y:177.1,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(1));

	// space_clouds_3
	this.cloudsThree = new lib.cloudsThree();
	this.cloudsThree.name = "cloudsThree";
	this.cloudsThree.setTransform(961.55,1216.6);
	var cloudsThreeFilter_1 = new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0);
	this.cloudsThree.filters = [cloudsThreeFilter_1];
	this.cloudsThree.cache(-1278,-303,2556,606);

	this.timeline.addTween(cjs.Tween.get(this.cloudsThree).wait(1).to({y:1213.7282},0).wait(1).to({y:1210.8565},0).wait(1).to({y:1207.9847},0).wait(1).to({y:1205.1129},0).wait(1).to({y:1202.2411},0).wait(1).to({y:1199.3694},0).wait(1).to({y:1196.4976},0).wait(1).to({y:1193.6258},0).wait(1).to({y:1190.754},0).wait(1).to({y:1187.8823},0).wait(1).to({y:1185.0105},0).wait(1).to({y:1182.1387},0).wait(1).to({y:1179.2669},0).wait(1).to({y:1176.3952},0).wait(1).to({y:1173.5234},0).wait(1).to({y:1170.6516},0).wait(1).to({y:1167.7798},0).wait(1).to({y:1164.9081},0).wait(1).to({y:1162.0363},0).wait(1).to({y:1159.1645},0).wait(1).to({y:1156.2927},0).wait(1).to({y:1153.421},0).wait(1).to({y:1150.5492},0).wait(1).to({y:1147.6774},0).wait(1).to({y:1144.8056},0).wait(1).to({y:1141.9339},0).wait(1).to({y:1139.0621},0).wait(1).to({y:1136.1903},0).wait(1).to({y:1133.3185},0).wait(1).to({y:1130.4468},0).wait(1).to({y:1127.575},0).wait(1).to({y:1124.7032},0).wait(1).to({y:1121.8315},0).wait(1).to({y:1118.9597},0).wait(1).to({y:1116.0879},0).wait(1).to({y:1113.2161},0).wait(1).to({y:1110.3444},0).wait(1).to({y:1107.4726},0).wait(1).to({y:1104.6008},0).wait(1).to({y:1101.729},0).wait(1).to({y:1098.8573},0).wait(1).to({y:1095.9855},0).wait(1).to({y:1093.1137},0).wait(1).to({y:1090.2419},0).wait(1).to({y:1087.3702},0).wait(1).to({y:1084.4984},0).wait(1).to({y:1081.6266},0).wait(1).to({y:1078.7548},0).wait(1).to({y:1075.8831},0).wait(1).to({y:1073.0113},0).wait(1).to({y:1070.1395},0).wait(1).to({y:1067.2677},0).wait(1).to({y:1064.396},0).wait(1).to({y:1061.5242},0).wait(1).to({y:1058.6524},0).wait(1).to({y:1055.7806},0).wait(1).to({y:1052.9089},0).wait(1).to({y:1050.0371},0).wait(1).to({y:1047.1653},0).wait(1).to({y:1044.2935},0).wait(1).to({y:1041.4218},0).wait(1).to({y:1038.55},0).wait(1).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(cloudsThreeFilter_1).wait(64));

	// space_clouds_2
	this.cloudsOne = new lib.clouds1();
	this.cloudsOne.name = "cloudsOne";
	this.cloudsOne.setTransform(989.35,1219.6);
	this.cloudsOne.alpha = 0.7813;

	this.timeline.addTween(cjs.Tween.get(this.cloudsOne).wait(1).to({y:1215.0565,alpha:0.78},0).wait(1).to({y:1210.5129},0).wait(1).to({y:1205.9694},0).wait(1).to({y:1201.4258},0).wait(1).to({y:1196.8823},0).wait(1).to({y:1192.3387},0).wait(1).to({y:1187.7952},0).wait(1).to({y:1183.2516},0).wait(1).to({y:1178.7081},0).wait(1).to({y:1174.1645},0).wait(1).to({y:1169.621},0).wait(1).to({y:1165.0774},0).wait(1).to({y:1160.5339},0).wait(1).to({y:1155.9903},0).wait(1).to({y:1151.4468},0).wait(1).to({y:1146.9032},0).wait(1).to({y:1142.3597},0).wait(1).to({y:1137.8161},0).wait(1).to({y:1133.2726},0).wait(1).to({y:1128.729},0).wait(1).to({y:1124.1855},0).wait(1).to({y:1119.6419},0).wait(1).to({y:1115.0984},0).wait(1).to({y:1110.5548},0).wait(1).to({y:1106.0113},0).wait(1).to({y:1101.4677},0).wait(1).to({y:1096.9242},0).wait(1).to({y:1092.3806},0).wait(1).to({y:1087.8371},0).wait(1).to({y:1083.2935},0).wait(1).to({y:1078.75},0).wait(1).to({y:1074.2065},0).wait(1).to({y:1069.6629},0).wait(1).to({y:1065.1194},0).wait(1).to({y:1060.5758},0).wait(1).to({y:1056.0323},0).wait(1).to({y:1051.4887},0).wait(1).to({y:1046.9452},0).wait(1).to({y:1042.4016},0).wait(1).to({y:1037.8581},0).wait(1).to({y:1033.3145},0).wait(1).to({y:1028.771},0).wait(1).to({y:1024.2274},0).wait(1).to({y:1019.6839},0).wait(1).to({y:1015.1403},0).wait(1).to({y:1010.5968},0).wait(1).to({y:1006.0532},0).wait(1).to({y:1001.5097},0).wait(1).to({y:996.9661},0).wait(1).to({y:992.4226},0).wait(1).to({y:987.879},0).wait(1).to({y:983.3355},0).wait(1).to({y:978.7919},0).wait(1).to({y:974.2484},0).wait(1).to({y:969.7048},0).wait(1).to({y:965.1613},0).wait(1).to({y:960.6177},0).wait(1).to({y:956.0742},0).wait(1).to({y:951.5306},0).wait(1).to({y:946.9871},0).wait(1).to({y:942.4435},0).wait(1).to({y:937.9},0).wait(1).to({_off:true},1).wait(1));

	// space_clouds
	this.cloudsTwo = new lib.clouds2();
	this.cloudsTwo.name = "cloudsTwo";
	this.cloudsTwo.setTransform(905.05,1138.6);

	this.timeline.addTween(cjs.Tween.get(this.cloudsTwo).wait(1).to({y:1134.3718},0).wait(1).to({y:1130.1435},0).wait(1).to({y:1125.9153},0).wait(1).to({y:1121.6871},0).wait(1).to({y:1117.4589},0).wait(1).to({y:1113.2306},0).wait(1).to({y:1109.0024},0).wait(1).to({y:1104.7742},0).wait(1).to({y:1100.546},0).wait(1).to({y:1096.3177},0).wait(1).to({y:1092.0895},0).wait(1).to({y:1087.8613},0).wait(1).to({y:1083.6331},0).wait(1).to({y:1079.4048},0).wait(1).to({y:1075.1766},0).wait(1).to({y:1070.9484},0).wait(1).to({y:1066.7202},0).wait(1).to({y:1062.4919},0).wait(1).to({y:1058.2637},0).wait(1).to({y:1054.0355},0).wait(1).to({y:1049.8073},0).wait(1).to({y:1045.579},0).wait(1).to({y:1041.3508},0).wait(1).to({y:1037.1226},0).wait(1).to({y:1032.8944},0).wait(1).to({y:1028.6661},0).wait(1).to({y:1024.4379},0).wait(1).to({y:1020.2097},0).wait(1).to({y:1015.9815},0).wait(1).to({y:1011.7532},0).wait(1).to({y:1007.525},0).wait(1).to({y:1003.2968},0).wait(1).to({y:999.0685},0).wait(1).to({y:994.8403},0).wait(1).to({y:990.6121},0).wait(1).to({y:986.3839},0).wait(1).to({y:982.1556},0).wait(1).to({y:977.9274},0).wait(1).to({y:973.6992},0).wait(1).to({y:969.471},0).wait(1).to({y:965.2427},0).wait(1).to({y:961.0145},0).wait(1).to({y:956.7863},0).wait(1).to({y:952.5581},0).wait(1).to({y:948.3298},0).wait(1).to({y:944.1016},0).wait(1).to({y:939.8734},0).wait(1).to({y:935.6452},0).wait(1).to({y:931.4169},0).wait(1).to({y:927.1887},0).wait(1).to({y:922.9605},0).wait(1).to({y:918.7323},0).wait(1).to({y:914.504},0).wait(1).to({y:910.2758},0).wait(1).to({y:906.0476},0).wait(1).to({y:901.8194},0).wait(1).to({y:897.5911},0).wait(1).to({y:893.3629},0).wait(1).to({y:889.1347},0).wait(1).to({y:884.9065},0).wait(1).to({y:880.6782},0).wait(1).to({y:876.45},0).wait(1).to({_off:true},1).wait(1));

	// moon
	this.alienMoon = new lib.blue_moon();
	this.alienMoon.name = "alienMoon";
	this.alienMoon.setTransform(960,1230.55);
	this.alienMoon._off = true;

	this.timeline.addTween(cjs.Tween.get(this.alienMoon).wait(10).to({_off:false},0).wait(1).to({y:1216.9683},0).wait(1).to({y:1203.3865},0).wait(1).to({y:1189.8048},0).wait(1).to({y:1176.2231},0).wait(1).to({y:1162.6413},0).wait(1).to({y:1149.0596},0).wait(1).to({y:1135.4779},0).wait(1).to({y:1121.8962},0).wait(1).to({y:1108.3144},0).wait(1).to({y:1094.7327},0).wait(1).to({y:1081.151},0).wait(1).to({y:1067.5692},0).wait(1).to({y:1053.9875},0).wait(1).to({y:1040.4058},0).wait(1).to({y:1026.824},0).wait(1).to({y:1013.2423},0).wait(1).to({y:999.6606},0).wait(1).to({y:986.0788},0).wait(1).to({y:972.4971},0).wait(1).to({y:958.9154},0).wait(1).to({y:945.3337},0).wait(1).to({y:931.7519},0).wait(1).to({y:918.1702},0).wait(1).to({y:904.5885},0).wait(1).to({y:891.0067},0).wait(1).to({y:877.425},0).wait(1).to({y:863.8433},0).wait(1).to({y:850.2615},0).wait(1).to({y:836.6798},0).wait(1).to({y:823.0981},0).wait(1).to({y:809.5163},0).wait(1).to({y:795.9346},0).wait(1).to({y:782.3529},0).wait(1).to({y:768.7712},0).wait(1).to({y:755.1894},0).wait(1).to({y:741.6077},0).wait(1).to({y:728.026},0).wait(1).to({y:714.4442},0).wait(1).to({y:700.8625},0).wait(1).to({y:687.2808},0).wait(1).to({y:673.699},0).wait(1).to({y:660.1173},0).wait(1).to({y:646.5356},0).wait(1).to({y:632.9538},0).wait(1).to({y:619.3721},0).wait(1).to({y:605.7904},0).wait(1).to({y:592.2087},0).wait(1).to({y:578.6269},0).wait(1).to({y:565.0452},0).wait(1).to({y:551.4635},0).wait(1).to({y:537.8817},0).wait(1).to({y:524.3},0).wait(1).to({_off:true},1).wait(1));

	// background
	this.background_first = new lib.background_start();
	this.background_first.name = "background_first";
	this.background_first.setTransform(960,542);

	this.timeline.addTween(cjs.Tween.get(this.background_first).wait(1).to({regX:-200.7,regY:119.2,x:759.3,y:661.2},0).wait(62).to({_off:true},1).wait(1));

	// walking
	this.alienWalk_mc = new lib.alien_walking();
	this.alienWalk_mc.name = "alienWalk_mc";
	this.alienWalk_mc.setTransform(442.8,669.3);
	this.alienWalk_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.alienWalk_mc).wait(64).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(0,956.95);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(64).to({_off:false},0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiXjhV7MEvHAAAMAAACr3MkvHAAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiXjBV8MAAAir3MEvHAAAMAAACr3g");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(65));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(506.1,68.8,5459.9,1503.6000000000001);
// library properties:
lib.properties = {
	id: '26E40F5542AE3645A3139572D0BAAC9C',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/cutealien.mp3?1621306219207", id:"cutealien"},
		{src:"sounds/space.mp3?1621306219207", id:"space"},
		{src:"sounds/spacey.mp3?1621306219207", id:"spacey"}
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
an.compositions['26E40F5542AE3645A3139572D0BAAC9C'] = {
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