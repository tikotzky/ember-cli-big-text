/*jshint node: true */
'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIBigText(project) {
  this.project = project;
  this.name    = 'Ember CLI Big Text';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIBigText.prototype.treeFor = function treeFor(name) {

  var treePath = path.join('node_modules', 'ember-cli-big-text', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIBigText.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/bigtext/dist/bigtext.js');
};

module.exports = EmberCLIBigText;