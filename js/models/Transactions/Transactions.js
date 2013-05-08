define([
	'timber',
	'./Transaction'
], function( Timber, Transaction ) {
	var Transactions = Backbone.Collection.extend({
		model: Transaction
	});
	return Transactions;
});
