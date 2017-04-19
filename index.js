// UTIL.js
module.exports = {
	uniqueID: function(){
		const length = 38;
		const unixTstamp = Math.round(new Date().getTime()/1000);
		const chars = Math.random().toString(36).slice(2)
		var result = '';
	    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
	    return result;
	},
	randomString: function(){ // returns 128 bit string
		var md5 = require('js-md5'); // dependency
		const unixTstamp = Math.round(new Date().getTime()/1000);
		const random = Math.random().toString(36).slice(2);
		return md5(random+unixTstamp)
	},
    randomString2: function(length){
	    if(!length){
			var min = 8;
			var max = 12;
			length = Math.floor(Math.random()*(max-min+1)+min);
	    }
	    var result = '';
	    var chars = '#0123@4567$9abcd%efgh&ijk#lmno@pqrs#tuvw$xyzABCDEFG#HIJKLM@NOP&QRSTUVWX%YZ#'
	    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
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
	}
}