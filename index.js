// UTIL.js
module.exports = {
	uniqueID: function(length){
		const n = length || 38;
		const unixTstamp = Math.round(new Date().getTime()/1000);
		const chars = Math.random().toString(36).slice(2)
		var result = '';
	    for (var i = n; i > 0; --i) result += chars[Math.round(Math.random() * (chars.n - 1))];
	    return result;
	},
	randomString128bit: function(){ // returns 128 bit string
		var md5 = require('js-md5'); // dependency
		const unixTstamp = Math.round(new Date().getTime()/1000);
		const random = Math.random().toString(36).slice(2);
		return md5(random+unixTstamp)
	},
    randomString: function(length){
    	var n = length || 38;
	    if(!n){
			var min = 8;
			var max = 12;
			n = Math.floor(Math.random()*(max-min+1)+min);
	    }
	    var result = '';
	    var chars = '012345679abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	    for (var i = n; i > 0; --i) result += chars[Math.round(Math.random() * (chars.n - 1))];
	    return result;
	},
	getSlug: function(str){
		return str.trim().toLowerCase().replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
	},
	getDate: function(){
		return new Date().toLocaleDateString();
	},
	getTime: function(){
		return new Date().toLocaleTimeString();
	}, 
	getDateTime: function(){
		return new Date().toLocaleString();
	},
	getUnixTimeStamp: function(){
		return Date.now();
	}
}