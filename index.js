// UTIL.js
module.exports = {
    uniqueID: function() {
        const n = length || 15;
        const unixTstamp = Math.round(new Date().getTime() / 1000);
        const possible = unixTstamp.toString();
        var text = '';
        for (var i = 0; i < n; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text + unixTstamp;
    },
    randomString128bit: function() { // returns 128 bit string
        var md5 = require('js-md5'); // dependency
        const unixTstamp = Math.round(new Date().getTime() / 1000);
        const random = Math.random().toString(36).slice(2);
        return md5(randomunixTstamp)
    },
    randomString: function(flag) {
        var n, min = null,
            max = null;
        if (!flag) {
            min = 8;
            max = 20;
            n = Math.floor(Math.random() * (max - min + 1)) + min
        } else if (typeof flag === "object") {
            min = flag.min;
            max = flag.max;
            n = Math.floor(Math.random() * (max - min + 1)) + min
        } else if (typeof flag === "number" || typeof flag === "string") {
            n = parseInt(flag)
        }
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < n; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },

    getSlug: function(str) {
        if(!str)
            return 'Error! Slug parameter missing.'
        return str.trim().toLowerCase().replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    },
    getDate: function() {
        return new Date().toLocaleDateString();
    },
    getTime: function() {
        return new Date().toLocaleTimeString();
    },
    getDateTime: function() {
        return new Date().toLocaleString();
    },
    getUnixTimeStamp: function() {
        return Date.now();
    },
    // This function is responsible for get "yesterday's" date dynamically if no parameters passed
    // "daysBack" is how many days back of "ofDay"
    // By default it gets date "1" day before "current date" i.e. today - will return yesterday   
    // ~~~~~~~~~~~~~~~ SIGNATURE ~~~~~~~~~~~~~~~~~
    // INPUT = (optional) "daysBack" is how many days back of "ofDay"- format "yyyy-mm-dd"
    // DEPENDENCY = none;
    // RETURN = "date" format: "yyyy-mm-dd", based on input  
    getYesterday: function(daysBack = 1, ofDay = new Date()) {
        var dt, day = "",
            month = "",
            year = "";
        dt = ofDay;

        var yd = new Date(dt);
        yd.setDate(yd.getDate() - daysBack);
        day = yd.getDate().toString();
        day = day.length == 2 ? day : "0" + day;

        month = (yd.getMonth() + 1).toString();
        month = month.length == 2 ? month : "0" + month;

        year = yd.getFullYear()

        // date format: yyyy-mm-dd
        var yesterday = year + "-" + month + "-" + day;
        return yesterday;
    },

    datesBetween: function(frm, to) {
        // "frm", "to" in format 'mm/dd/yyyy'
        var start = new Date(frm);
        var end = new Date(to);
        var newend = end.setDate(end.getDate() + 1);
        var end = new Date(newend);
        var final = [];
        while (start < end) {
            final.push(start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate());
            //console.log(fin); // ISO Date format
            var newDate = start.setDate(start.getDate() + 1);
            start = new Date(newDate);
        }
        return final;
    },
    paginationOffset: function(page, size = 10) {
        var pageSize = size;
        var offset = (page - 1) * (pageSize + 1);
        var frm = offset == 0 ? 0 : (offset - 1);
        var to = frm + pageSize;
        return {
            "from": frm,
            "to": to,
            "size": pageSize
        }
    },
    strip_tags: function(input, allowed) {
        allowed = (((allowed || '') + '')
                .toLowerCase()
                .match(/<[a-z][a-z0-9]*>/g) || [])
            .join('');
        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
        return input.replace(commentsAndPhpTags, '')
            .replace(tags, function($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
        });
    }

}