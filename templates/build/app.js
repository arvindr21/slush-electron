define(['./hello_world/hello_world'], function (hello_world) {

	'use strict';

	// -----------------------------------------------------
	// Here is the starting point for your own code.
	// All stuff below is just to show you how it works.
	// -----------------------------------------------------

	// Browser modules are imported through new ES6 syntax.
	var os = require('os');

	// window.env contains data from config/env_XXX.json file.
	var envName = window.env.name;

	document.getElementById('greet').innerHTML = hello_world.greet();
	document.getElementById('platform-info').innerHTML = os.platform();
	document.getElementById('env-name').innerHTML = envName;

});