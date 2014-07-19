var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);


var accelparty = function () {
	accel.on('data', function(xyz){

		console.log(
			'x:', xyz[0].toFixed(2),
			'y:', xyz[1].toFixed(2),
			'z:', xyz[2].toFixed(2));
	});

};

accel.on('error', function(err) {
	console.log('err:', err);
});

accel.on('ready', accelparty);