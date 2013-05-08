define([
	'timber',
	'./ReportView',
	'text!../../Reports/templates/reports.html'
], function ( Timber, ReportView, reportsTemplate ) {
	var ReportsView = Timber.View.extend({
		
		template: reportsTemplate,

		initialize: function() {

			this.addView('report', ReportView, {
				collection: this.model.get('transactions').get('transactions')
			});

			// this.appendViews();
		},

		render: function() {
			this.$el.html(this.views.report.renderCollection().el);
			return this;
		}
	});
	return ReportsView;
});