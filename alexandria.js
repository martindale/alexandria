var config = require('./config');

var Maki = require('maki');
var alexandria = new Maki(config);

var Page = alexandria.define('Page', {
  versioned: true,
  attributes: {
    title: { type: String },
    content: { type: String }
  }
});

alexandria.start();
