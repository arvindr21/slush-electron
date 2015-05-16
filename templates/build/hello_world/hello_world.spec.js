define(['./hello_world'], function (hello_world) {

    'use strict';

    // Named imports test
    describe("hello world", function () {

        it("greets", function () {
            expect(hello_world.greet()).toBe('Hello World!');
        });

        it("says goodbye", function () {
            expect(hello_world.bye()).toBe('See ya!');
        });

    });

});