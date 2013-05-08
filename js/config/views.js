define([
	'timber'
], function (Timber) {

	return {

		'dashboard': {
			view: 'Dashboard/DashboardView',
			model: [ 'dashboard' ],
			collection: [],
			disable: [],
			router: {
				routes: {
					'': 'showDashboard'
				},

				handlers: {

					showDashboard: function () {
						
					}
				}
			}
		}
	};
});