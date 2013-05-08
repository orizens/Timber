define([
	'timber',
	'./TransactionView'
], function ( Timber, TransactionView ) {
	var ReportView = Timber.View.extend({
		
		tagName: 'table',

		className: 'table table-striped table-bordered table-hover',

		view: TransactionView,

		initialize: function() {
			// for mock purposes
			this.collection.reset();
		}
	});
	return ReportView;
});