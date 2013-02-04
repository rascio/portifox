define(['zepto'], function($){

	var $replace = function(string, map){
            if (map){
                    for (var s in map){
                            string = string.replace('{' + s + '}', map[s]);
                    }
            }
            return string;
    }

	var WeatherService = function(){

		var wundergroundUrl = 'http://api.wunderground.com//api/9902c4e721b4a688/conditions/q/{lat},{lon}.json?callback=?';

		this.getCurrentWeather = function(latitude, longitude, callback){
			console.log('calling...');
			$.getJSON($replace(wundergroundUrl, {lat: latitude, lon: longitude}), function(response){
				console.log('DAIIII: ', response['current_observation'])
				callback(response['current_observation']);
			});
		}
	}

	return WeatherService;
});