"use strict";
var _ = require( 'lodash' );
var S = require( 'string' );
var Handlebars = require( 'handlebars' );
var utils = require( './../utils' );

// ****************************************************************************************
// Helpers:
// ~~
// comment
// hint
// image
// ****************************************************************************************

var helpers = {

	// Internal helper to return the current type
	_hybridType: function () {
		return 'html';
	},

	/**
	 * Allow unrendered comments in Markdown.
	 * The content between {{#comment}} and {{/comment}} will not be displayed and included in the markdown output.
	 *
	 * @description: Note, you can also use standard Html comments, they will also be ignored by standard markdown syntax, but rendered on the client ...
	 *
	 * @example
	 * {{#comment}}
	 *   Any comment here will be removed.
	 * {{/comment}}
	 * @api public
	 */
	comment: function () {
		return '';
	},
	hint: function () {
		//console.log( 'args', arguments );
		var innerContent = S( utils.getOptionsArg( arguments ).fn( this ) ).chompRight( '\n' );
		var title = (typeof arguments[0] === 'string') ? arguments[0] : 'Hint:';
		return '<div class="hb-hint"><div class="title">' + title + '</div><div class="content">' + innerContent + "</div></div>";
	},
	image: function () {
		var url = arguments[0];
		return '<img src="' + url + '" class="hb - responsive" />';
	}
};

// Export helpers
module.exports.register = function ( Handlebars, options ) {
	options = options || {};
	for ( var helper in helpers ) {
		if ( helpers.hasOwnProperty( helper ) ) {
			Handlebars.registerHelper( helper, helpers[helper] );
		}
	}
};
