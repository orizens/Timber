define([
	'underscore',
	'backbone'
], function ( _, Backbone) {
	var BaseModel = Backbone.Model.extend({

		translate: function() {}
	});

	Backbone.BaseModel = BaseModel;
	return BaseModel;
});