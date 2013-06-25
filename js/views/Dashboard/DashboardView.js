define([
	'timber',
	'text!./templates/dashboard-tpl.html'
], function ( Timber, dashboardTpl ) {
	var ReportsView = Timber.View.extend({
		
		template: dashboardTpl,

		initialize: function() {

			// this.addView('report', ReportView, {
			// 	collection: this.model.get('transactions').get('transactions')
			// });

			// this.appendViews();
		},

		render: function() {
			return this;
		}
	});
	return ReportsView;
});