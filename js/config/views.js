define([
	'timber',
	// views
	'../views/Dashboard/DashboardView'
], function (Timber, DashboardView) {

	return {

		'dashboard': {
			view: DashboardView,
			// these are models and collection which timber will fetch
			// after resolving a new route and creating this DashboardView instance
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