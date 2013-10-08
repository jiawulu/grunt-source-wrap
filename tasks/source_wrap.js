/*
 * grunt-source-wrap
 * https://github.com/luu/grunt-source-wrap
 *
 * Copyright (c) 2013 wuzhong
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('source_wrap', 'Your task description goes here.', function () {

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {

            f.src.forEach(function (filepath) {

                var source = grunt.file.read(filepath),
                    destPath = f.dest,
                    destArr = destPath.split("/"),
                    srcArr = filepath.split("/");

                destPath = destArr[destArr.length - 1];

                var destPathArr = destPath.split(".");
                destPathArr[0] = srcArr[srcArr.length - 1];

                destPath = destPathArr.join(".");
                destArr[destArr.length - 1] = destPath;

                destPath = destArr.join("/");

                var compiledSource = require("./template").template(destPath, source);

                grunt.file.write(destPath, compiledSource);

                grunt.log.warn('generate file at "' + destPath);

            });

        });
    });

};
