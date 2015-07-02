(function(){

  var _ = require('lodash'),
      EE = require('events').EventEmitter,
      inherits = require('util').inherits;

  var Canvas = require('lumine').Canvas;

  var Layers = require('../../layers');

  function Scene($canvas, options){

    _.extend(this, options);

    EE.call(this);

    // this should be the last declaration
    this.canvas = new Canvas($canvas, this, Layers);

  }

  inherits(Scene, EE);

  module.exports = Scene;

})();