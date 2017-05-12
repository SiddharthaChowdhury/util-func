// UTIL.js
module.exports = {
	uniqueID: function(){
		const n = length || 15;
		const unixTstamp = Math.round(new Date().getTime()/1000);
		const possible = unixTstamp.toString();
		var text = '';
	    for( var i=0; i<n; i++ )  text += possible.charAt(Math.floor(Math.random() * possible.length));
	    return text+unixTstamp;
	},
	randomString128bit: function(){ // returns 128 bit string
		var md5 = require('js-md5'); // dependency
		const unixTstamp = Math.round(new Date().getTime()/1000);
		const random = Math.random().toString(36).slice(2);
		return md5(randomunixTstamp)
	},
    randomString: function(length){
    	var n = length || 38;
	    if(!n){
	        var min = 8;
	        var max = 12;
	        n = Math.floor(Math.random()*(max-min+1)+min);
	    }
      	var text = "";
    	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    	for( var i=0; i<n; i++ )
        	text += possible.charAt(Math.floor(Math.random() * possible.length));
    	return text;
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