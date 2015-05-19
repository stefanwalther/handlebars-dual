'use strict';
var chai = require( 'chai' );
var should = chai.should();
var hybrid = require( './../lib/index' );
var Handlebars = require( 'handlebars' );

describe( 'HTML', function () {

	before( function () {
		hybrid.init( 'html' ).register( Handlebars, {} );
	} );

	it( 'should have a comment helper', function ( done ) {
		var source = '{{#comment}}\nSome text within the comment{{/comment}}';
		var template = Handlebars.compile( source );
		var content = template();
		content.should.be.eql( '' );
		done();
	} );

} );
