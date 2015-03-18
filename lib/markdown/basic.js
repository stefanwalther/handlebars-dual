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
    //console.log( 'args', arguments );
    var innerContent = S( utils.getOptionsArg( arguments ).fn( this ) ).chompRight( '\n' );
    var title = (typeof arguments[0] === 'string') ? arguments[0] : 'Hint:';
    console.log( 'title > ', title );
    var prefix = '> ';
    var suffix = '\n';
    var content = '';
    _.each( innerContent.split( '\n' ), function ( item ) {
      content += prefix + item + suffix;
    } );

    return '> *' + title + '*\n' + content;
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
