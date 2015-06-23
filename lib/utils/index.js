'use strict';

var utils = {

	getOptionsArg: function ( args ) {
		for ( var i = 0, j = args.length; i < j; i++ ) {

			if ( typeof args[i] === 'object' ) {
				return args[i];
			}
		}
		return null;
	}

};

module.exports = utils;




