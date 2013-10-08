#!/usr/bin/env node

/**
 *
 * @param param.from
 * @parma param.dest
 * @param param.data
 *
 */

var path = require('path');
var util = require('util');
var fs = require('fs');

exports.template = function(filePath,source){

    source = inline(source).replace(/\"/g,"\\\"");

    var arr = filePath.split('/'),
        fileName = arr[arr.length - 1];


    var from = path.join(path.dirname(fs.realpathSync(__filename)), './wrapCache.mus'),

        compiledSource =  execute(
            {
                from: from,
                data: {
                    source: source,
                    fileName: fileName
                }
            }
        );

    return compiledSource;

}

var inline = function (source) {

    source = source.split(/\r?\n/g).map(function(line) {
        return  line.replace(/^\s+|\s+$/g, '');
    }).join(";");

    return source;
};


var execute = function(param){

    var mustache = require('mustache'),
        ENCODING = 'utf-8';

    var source = fs.readFileSync(param.from, ENCODING);

    var tpl = mustache.to_html(source, param.data);

    return tpl;
}