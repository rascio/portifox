define(['zepto', 'underscore', './ajax'], function($, _){
	function NaviService(){

		var createObject = function(xml, callback){
			var results = [];

			var itemTags = xml.getElementsByTagName ("item");
			var Nave = {};
			var START = 'banchina';
            var END = 'posizioneAttuale';
            for (i = 0; i < itemTags.length; i++) {
	            console.log(itemTags[i].getElementsByTagName('key').item(0).textContent)
	            var key = itemTags[i].getElementsByTagName('key').item(0).textContent;
	            var value = itemTags[i].getElementsByTagName('value').item(0).textContent;
	            console.log('k: %s v: %s ' , key, value);
	            if (key == START){
	            	if (i != 0) results.push(Nave);
	            	console.log('start');
	            	Nave = {}
	            }
	            
	            Nave[key] = value;
	        }

			callback(results);

		}

		this.getNavi = function(callback){
			var url = "http://127.0.0.1/xss.xml";

			var httpRequest = CreateHTTPRequestObject();
			httpRequest.open ("GET", url, false);    // async
            httpRequest.onreadystatechange = function(){
            	if (httpRequest.readyState == 0 || httpRequest.readyState == 4) {
	                if (IsRequestSuccessful (httpRequest)) {    // defined in ajax.js
	        			createObject(ParseHTTPResponse (httpRequest), callback)            
	                }
	                else {
	                    alert ("Operation failed.");
	                }
            	}
            };
            httpRequest.send (null);
		}

	}

	return NaviService;
})
