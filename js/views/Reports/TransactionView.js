define([
	'timber',
	'text!./templates/transaction.html'
], function( Timber, template ) {

	var TransactionView = Timber.View.extend({
		tagName: 'tr',
		template: template
	});

	return TransactionView;
});