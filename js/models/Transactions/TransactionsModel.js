define([
	'timber',
	'./Transactions'
], function( Timber, Transactions ) {
	var TransactionModel = Backbone.Model.extend({
		
		defaults: {
			transactions: new Transactions()
		},
		
		initialize: function(){
		
		}
	});
	return TransactionModel;
});
