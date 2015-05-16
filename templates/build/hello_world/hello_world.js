define(['exports'], function (exports) {

    'use strict';

    var greet = function () {
        return 'Hello World!';
    };

    var bye = function () {
        return 'See ya!';
    };

    exports.greet = greet;
    exports.bye = bye;

});