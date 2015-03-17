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
  hint: function () {
    return 'hint';
  },
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
