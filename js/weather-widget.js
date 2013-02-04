define(['WeatherService'], function(WeatherService){

	console.log('fino a qui tutto bene')

	var ws = new WeatherService();
	var meteo = $('#meteo');

	var updateWeather = function(lat, lon){
		meteo.html('Loading...')
		ws.getCurrentWeather(lat, lon, function(observation){
			meteo.html(observation.display_location.city + ': ' + '<strong style="color:#039;">' + observation.weather+ '</strong>');
		});
	}

	navigator.geolocation.getCurrentPosition(function(position){
		console.log('meteo current position...');
		updateWeather(position.coords.latitude, position.coords.longitude);
	});

	$('#meteo-cities').on('change', 'select', function(){
		//var val = $(this).find('option[selected]').val().split(); //now are formatted like: value="{lat},{long}""
		var selected = this.options[this.selectedIndex];
		if (selected.value){
			var val = selected.value.split(',')
			updateWeather(val[0], val[1])
		}
	})
})