# util-func

Bunch of widely used functions in most common public projects

##Install 

`npm i -S util-func`

## How to use

    var UTIL = require('util-func');
      
    console.log(UTIL.getSlug('String 124 and & not symbol, bla bla'))

## Utilities

	uniqueID: function( length ){
		// returns unique_ID of length `n` passed as argument || default 38
	},
	getUnixTimeStamp: function(){
		// returns UNIX timestamp in milliseconds
	},
	randomString128bit: function(){ 
		// returns 128 bit string
	},
    randomString: function(length){
	    // get random string of size `n` passed as argument || default 38
	},
	getSlug: function(str){
		// Get string converted to slug
	},
	getDate: function(){
		// Get current local date [ format: dd/mm/yyyy ] 
	},
	getTime: function(){
		// Get current local time [ format: hh:mm:ss ]
	}, 
	getDateTime: function(){
		// Get current local date and time [ format: dd/mm/yyyy, hh:mm:ss ]
	},

