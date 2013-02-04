define(['zepto', './navi'], function($, NaviService){

	$(function(){
		var naviService = new NaviService();

		naviService.getNavi(function(navi){
			var list = $('.list').get(0);
			for (var i = 0; i < navi.length; i++){
				var nave = navi[i];
				list.add({
					title: nave.nave,
					desc: nave.compagnia
				});
			}

			list.nextView = 'x-view.details';

	        // Detail view
	        var details = $('.details').get(0);
	        details.render = function(item) {
	            $('.title', this).text(item.get('title'));
	        };
		});
	})
})