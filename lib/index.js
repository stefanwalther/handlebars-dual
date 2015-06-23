'use strict';

var init = function ( target ) {

	if ( target === 'html' ) {
		return require( './helpers/html' );
	} else if ( 'markdown' ) {
		return require( './helpers/markdown' );
	} else {
		return {};
	}

};

module.exports = init;
