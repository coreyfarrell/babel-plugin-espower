/**
 * babel-plugin-espower:
 *   Babel plugin for power-assert
 * 
 * https://github.com/power-assert-js/babel-plugin-espower
 *
 * Copyright (c) 2015-2017 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/power-assert-js/babel-plugin-espower/blob/master/LICENSE
 */
'use strict';

var createEspowerPlugin = require('./create');

module.exports = function (babel, options) {
    return createEspowerPlugin(babel, options);
};
