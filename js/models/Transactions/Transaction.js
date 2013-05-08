define([
	'timber'
], function( Timber ) {
	var Transaction = Backbone.Model.extend({
		
		defaults: {
			// type of source: 
			// american express'ae', isracard 'ae' 
			// leumi 'leumi'
			type: 'ae',

			// the date the deal was conducted
			purchaseDate: '29/05/2012',
			purchaseDay: '29',
			purchaseMonth: '05',
			purchaseYear: '2012',

			businessName: 'Toysrus',
			// the price for this purchase
			price: 0,
			// if the deal is on credits, than this is the total of all prices
			totalPrice: 0,

			// the number of payment/credit of this transaction
			part: 0
		},
		
		initialize: function(){
		
		}
	});
	return Transaction;
});
