
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Receipt verification (https://github.com/mozilla/receiptverifier)
    require('receiptverifier');

    // Installation button
    require('./install-button');

    // Install the layouts
    require('layouts/layouts');
	require('./weather-widget');
	require('./navi-widget');

    // Write your app here.

    function formatDate(d) {
        return (d.getMonth()+1) + '/' +
            d.getDate() + '/' +
            d.getFullYear();
     }

    // Passing a function into $ delays the execution until the
    // document is ready
    /*$(function() {

        // List view
        var list = $('.list').get(0);
        list.add({ title: 'Grimaldi Lines',
                   desc: 'Nave da crociera',
                   date: new Date() });
        list.add({ title: 'Tirrenia',
                   desc: 'Traghetto',
                   date: new Date(12, 9, 5) });
        list.add({ title: 'Costa Crociere',
                   desc: 'Nave da crociera',
                   date: new Date(12, 10, 1) });


        

        list.nextView = 'x-view.details';

        // Detail view
        var details = $('.details').get(0);
        details.render = function(item) {
            $('.title', this).text(item.get('title'));
        };

    });*/
});