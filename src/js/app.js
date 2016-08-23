'use strict';

//
// app.js is the entry point for the entire client-side
// application. All of the top-level views should be
// instantiated here.

var $ = require('jquery');
var pymChild = require('./pymChild');
var analytics = require('./analytics.js');
var pageconfig = require('../data/pageconfig.json');

require('./recirc.js');



document.getElementById("twitter-sharer").onclick = function() {
  window.open("https://twitter.com/intent/tweet?text=" + trackingConfig.twitterText + "&url=" + trackingConfig.shortUrl, "", "resizable,height=251,width=550");
  return false;
}

document.getElementById("facebook-sharer").onclick = function() {
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + trackingConfig.fullUrl + "%3Fex_cid=story-facebook", "", "resizable,height=354,width=626");
  return false;
}


analytics.pageview();
