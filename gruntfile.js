/*
 * Copyright 2013 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

docTheme =
  //'bootstrap' || 
  //'uxa' ||
  'polymerase' ||
  'default'
;

var readManifest = require('../tools/loader/readManifest.js');

function prefix(n) {
  return '../' + n;
}
var manifest = readManifest('build.json').map(prefix);

console.log(manifest);

module.exports = function (grunt) {
  folder = grunt.option('doc');
  grunt.initConfig({
    yuidoc: {
      compile: {
        name: 'Docs',
        description: 'Docs',
        options: {
          exclude: 'docs,mocha,chai',
          extension: '.js,.html',
          paths: manifest,
          outdir: 'docs',
          linkNatives: 'true',
          tabtospace: 2,
          themedir: '../../tools/doc/themes/' + docTheme
        }
      }
    }
  });

  // plugins
  grunt.loadNpmTasks('grunt-contrib-yuidoc');

  // tasks
  grunt.registerTask('default', ['yuidoc']);
  grunt.registerTask('docs', ['yuidoc']);
};

