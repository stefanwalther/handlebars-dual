'use strict';

var init = function ( target ) {

  if ( target === 'html' ) {
    return require( './html/helpers' );
  } else {
    return require( './markdown/helpers' );
  }

};

module.exports.init = init;
