# grunt-source-wrap

> wap sources

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-source-wrap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-source-wrap');
```

## The "source_wrap" task

    source_wrap: {
        test:{
            files: [{
                expand: true,
                cwd: 'test/1.0',
                src: ['**/*.js','**/*.css','!**/*.cah.js'],
                dest: 'test/1.0',
                ext: '.cah.js',
                funcName : 'window.lib.awp.cache'
            }]
        }
    }

## TODO

1. support user define template
2. support user define wrapper