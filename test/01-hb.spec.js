'use strict';
var chai = require( 'chai' );
var assert = chai.assert;
var should = chai.should();
var hbmd = require( './../lib/markdown/basic' );
var Handlebars = require( 'handlebars' );

describe( 'handlebars-dual', function () {

  before( function () {
    hbmd.register( Handlebars, {} );
  } );

  it( 'should have a hint helper', function ( done ) {
    var source = '{{hint "This is a hint"}}';
    var template = Handlebars.compile( source );
    var content = template();
    content.should.not.be.empty;
    content.should.be.eql();
    done();
  } );

  it( 'should have a comment helper', function ( done ) {
    var source = '{{#comment}}\nThis is comment{{/comment}}';
    var template = Handlebars.compile( source );
    var content = template();
    content.should.be.empty;
    done();
  } );

  it( 'should have a image helper', function ( done ) {
    var source = '{{image "images/image1.png"}}';
    var template = Handlebars.compile( source );
    var content = template();
    content.should.eql( '![](images/image1.png)' );
    done();
  } );

} );
