var SmurfDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

};


SmurfDancer.prototype = Object.create(Dancer.prototype);
SmurfDancer.prototype.constructor = SmurfDancer;

SmurfDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.addClass('smurf');
    this.$node.toggle();
    console.log('blinked');
  };
