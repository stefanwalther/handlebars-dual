'use strict';

var init = function ( target ) {

  if ( target === 'html' ) {
    return require( './html/html' );
  } else {
    return require( './markdown/markdown' );
  }

};

module.exports.init = init;
