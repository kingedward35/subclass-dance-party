var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
};


SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.addClass('square');
    this.$node.toggle();

    var distance = function(top, left){
      var h;
      var v;
      var hDiff;
      var vDiff;
      var dist;
      for (var i = 0; i < window.dancers.length; i ++) {
        h = $(window.dancers[i]).css('left');
        v = $(window.dancers[i]).css('top');
        hDiff = Number(h.slice(0,h.length-2)) - left;
        vDiff = Number(v.slice(0,v.length-2)) - top;
        dist = Math.sqrt((hDiff * hDiff) + (vDiff * vDiff));
        if (dist < 200) {
          $(window.dancers[i]).css('left', 0);
        }
      }
    };

    distance(this.top, this.left);

  };
