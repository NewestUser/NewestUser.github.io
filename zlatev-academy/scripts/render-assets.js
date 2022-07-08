'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/static/.');
    
    sh.cp('-R', sourcePath, destPath)

    const faviconSrcPath = upath.resolve(upath.dirname(__filename), '../src/favicon.ico');
    const faviconDestPath = upath.resolve(upath.dirname(__filename), '../dist/');
    
    sh.cp('', faviconSrcPath, faviconDestPath)
};