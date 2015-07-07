(function(){

  var _ = require('lodash'),
      EE = require('events').EventEmitter,
      inherits = require('util').inherits;

  /**
   * Creates a basic Lumine Scene.
   * @param $canvas - the canvas element
   * @param lumine - the Lumine instance
   * @param options - configurable options for the Scene
   * @constructor
   */
  function Scene($canvas, lumine, options){

    _.extend(this, options);

    EE.call(this);

    // this should be the last declaration
    this.canvas = new lumine.Canvas($canvas, this, lumine, options.canvas);

  }

  inherits(Scene, EE);

  module.exports = Scene;

})();