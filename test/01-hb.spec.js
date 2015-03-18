'use strict';
var chai = require( 'chai' );
var assert = chai.assert;
var should = chai.should();
var hbmd = require( './../lib/markdown/markdown' );
var Handlebars = require( 'handlebars' );

describe( 'handlebars-dual', function () {

  before( function () {
    hbmd.register( Handlebars, {} );
  } );

  it( 'MD: should have a hint helper', function ( done ) {
    var source = '{{#hint "Hint"}}\nSome text within the hint{{/hint}}';
    var template = Handlebars.compile( source );
    var content = template();
    content.should.be.eql( '> *Hint*\n> Some text within the hint\n' );
    done();
  } );

  it( 'MD: {{#hint}} ... multiple lines{{/hint}}', function ( done ) {
    var source = '{{#hint}}\nFirst line\nSecond line\n{{/hint}}';
    var template = Handlebars.compile( source );
    var content = template();
    content.should.be.eql( '> *Hint:*\n> First line\n> Second line\n' );
    done();
  } );

  it( 'MD: should have a comment helper', function ( done ) {
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
