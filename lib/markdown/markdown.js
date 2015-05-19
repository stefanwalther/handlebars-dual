'use strict';
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
		return 'markdown';
	},

	/**
	 * Allow comments within markdown.
	 * The content between {{#comment}} and {{/comment}} will not be displayed and included in the markdown output.
	 *
	 * @description: Note, you can also use standard Html comments, they will also be ignored by standard markdown syntax, but rendered on the client ...
	 *
	 * @example
	 * {{#comment}}
	 *   Any comment here will be removed.
	 * {{/comment}}
	 */
	comment: function () {
		return '';
	},

	/**
	 * Shortcut to comment.
	 * @returns {string}
	 */
	hidden: function () {
		return '';
	},

	/**
	 * {{hint [title]}}
	 *
	 * or
	 * {{#hint [title]}}
	 *  ...
	 * {{/hint}}
	 * @param title - Title of the hint, if blank, nothing will displayed, if not defined at all it defaults to "Hint:"
	 * @todo Work on more params to pass the title
	 * @todo Work on multiline comments using hint
	 * @todo Test this stuff
	 */
	hint: function () {
		//console.log( 'args', arguments );
		var innerContent = S( utils.getOptionsArg( arguments ).fn( this ) ).chompRight( '\n' );
		var title = (typeof arguments[0] === 'string') ? arguments[0] : 'Hint:';
		var prefix = '> ';
		var suffix = '\n';
		var content = '';
		_.each( innerContent.split( '\n' ), function ( item ) {
			content += prefix + item + suffix;
		} );

		return '>**' + title + '**\n' + S( content ).chompLeft( '\n' ) + '  ';
	},

	/**
	 * Support for images for future compatibility when generating responsive images for Html output.
	 *
	 * @param url {string} - Url of the image
	 * @example
	 * {{image "http://www.bla.com/image.png"}}
	 */
	image: function ( url ) {
		return '![](' + url + ')';
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
