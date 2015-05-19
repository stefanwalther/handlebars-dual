'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var should = chai.should;
var Handlebars = require( 'handlebars' );
var hybrid = require( './../lib/index' );

describe( 'handlebars-hybrid', function () {

  it( 'has a method init', function ( done ) {

    hybrid.should.have.property( 'init' );
    hybrid.init.should.be.a( 'function' );
    done();
  } );

  it( 'can be initiated for html', function ( done ) {

    hybrid.init( 'html' ).register( Handlebars, {} );
    var content = Handlebars.compile( '{{_hybridType}}' )();
    expect( content ).to.equal( 'html' );
    Handlebars.helpers.should.have.a.property( 'hint' );
    done();
  } );

  it( 'cannot be initated for both html and markdown', function ( done ) {

    hybrid.init( 'markdown' ).register( Handlebars, {} );
    var content = Handlebars.compile( '{{_hybridType}}' )();
    expect( content ).to.equal( 'markdown' );
    done();
  } );

} );
