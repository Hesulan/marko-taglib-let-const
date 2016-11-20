'use strict';
var path = require('path');
var fs = require('fs');
var marko = require('marko');
var autotest = require('./autotest');

describe('render', function() {
    var autoTestDir = path.join(__dirname, 'autotests');
    
    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            var templatePath = path.join(dir, 'template.marko');
            var mainPath = path.join(dir, 'test.js');
            
            var main = fs.existsSync(mainPath) ? require(mainPath) : {};

            var actual, e;

            try {
                actual = marko.load(templatePath).renderSync(main.templateData || {});
            } catch(_e) {
                e = _e;
            }

            if (main.checkError) {
                if (!e) {
                    throw new Error('Error expected');
                }

                var errorFile = path.join(dir, 'error.txt');
                fs.writeFileSync(errorFile, e.stack.toString(), { encoding: 'utf8' });
                main.checkError(e);
                return done();
            } else {
                if (e) {
                    throw e;
                }
                helpers.compare(actual, '.html');
                return done();
            }

        }
    );
});
