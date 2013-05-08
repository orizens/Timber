define([
	'timber'
], function( Timber ) {
	var DashboardModel = Backbone.Model.extend({
		
		defaults: {
			totalSum: 0,
			invitations: 0,
			activeEvents: 0
		},

		url: function() {
			// hopefully - switch between development and production server
			// return timber.restUrl + '/api/dashboard';
			return '../api/dashboard.json';
		},

		initialize: function(){
		
		}
	});
	return DashboardModel;
});
