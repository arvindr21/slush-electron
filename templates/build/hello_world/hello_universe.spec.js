define(['./hello_universe'], function (greet) {

    'use strict';

    // Default imports test
    describe("hello universe", function () {

        it("greets better than hello world", function () {
            expect(greet['default']()).toBe('Hello Universe!');
        });

    });

});