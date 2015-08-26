var SmurfDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
};


SmurfDancer.prototype = Object.create(Dancer.prototype);
SmurfDancer.prototype.constructor = SmurfDancer;

SmurfDancer.prototype.step = function(left){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log(this.left);
    this.$node.html('<img src="smurf.gif" height=90 width=60>');
    this.$node.addClass('smurf');
    this.left *= 0.995;
    // console.log(this.left);
    this.setPosition(this.top, this.left);
  };
