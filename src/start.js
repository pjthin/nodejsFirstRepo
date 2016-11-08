var Promise = require('promise');

console.log('Hello world');

var sayHello = function(name) {
	var handler = new Promise(function(succeed, fail) {
		// traitement async...
		setTimeout(function(){
			succeed({req:name,resp:'hello '+name+'!'});
		}, 1000);
	});
	// retourne un handler
	return handler;
};

sayHello('world').then(function(data) {
	console.log(data);
	return data.resp;
})
.then(function(data){
	console.log('resp='+data);
});

