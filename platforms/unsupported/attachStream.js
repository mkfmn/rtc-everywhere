'use strict';

module.exports = function(){
  return function(el, stream) {
    throw new Error('No DOM, what are you doing?');
  };
};
