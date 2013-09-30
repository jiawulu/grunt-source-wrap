/*
 * grunt-source-wrap
 * https://github.com/luu/grunt-source-wrap
 *
 * Copyright (c) 2013 wuzhong
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp','test/src/*__cached.js']
    },

    // Configuration to be run (and then tested).
    source_wrap: {
     build: {
        files: {
          'tmp': ['test/src/*','!test/src/*__cached.js']
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'source_wrap']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
