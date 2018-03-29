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
    randomString: function(Flag){
	    /*
	    Returns random string of specified length
	    ~~~~~~~~~~~~~~~ SIGNATURE ~~~~~~~~~~~~~~~~~
	    INPUT: Optional
	    	randomString({min:4, max:8}).length // Can pass object with min, max value
 			randomString(8).length // Can pass fixed lingth value as Number
			randomString().length // default returns between 8 and 20
		RETURNS: A random string of specified length
		*/
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
	getYesterday: function(daysBack = 1, ofDay = new Date()){
		/*
		This function is responsible for get "yesterday's" date dynamically if no parameters passed
		"daysBack" is how many days back of "ofDay"
		By default it gets date "1" day before "current date" i.e. today - will return yesterday   
		~~~~~~~~~~~~~~~ SIGNATURE ~~~~~~~~~~~~~~~~~
		INPUT = (optional) "daysBack" is how many days back of "ofDay"- format "yyyy-mm-dd"
		RETURN = "date" format: "yyyy-mm-dd", based on input  
		*/
	},
	datesBetween: function(from, to){
		/*
		This function gives output as an ARRAY of all dates between two dates provided as input   
		~~~~~~~~~~~~~~~ SIGNATURE ~~~~~~~~~~~~~~~~~
		INPUT = "from", "to" in format 'mm/dd/yyyy'
		RETURN = ARRAY of dates
		*/
	},
	paginationOffset: function(pageNumber, size = 10){
		/* 
		Useful for pagination
		INPUT: current page number
		RETURN:{
	      		"from": Number, 	// Where to start from
	      		"to": Number,		// Where to stop
	      		"size": pageSize	// Number of records
	  		} 
		*/
	}

