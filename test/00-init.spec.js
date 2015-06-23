'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var should = chai.should;
var Handlebars = require( 'handlebars' );
var hybrid = require( './../lib/index' );

describe( 'handlebars-hybrid', function () {

	it( 'can be initiated for html', function ( done ) {

		hybrid( 'html' ).register( Handlebars, {} );
		var content = Handlebars.compile( '{{_hybridType}}' )();
		expect( content ).to.equal( 'html' );
		Handlebars.helpers.should.have.a.property( 'hint' );
		done();
	} );

	it( 'cannot be imitated for both html and markdown', function ( done ) {

		hybrid( 'markdown' ).register( Handlebars, {} );
		var content = Handlebars.compile( '{{_hybridType}}' )();
		expect( content ).to.equal( 'markdown' );
		done();
	} );

} );
