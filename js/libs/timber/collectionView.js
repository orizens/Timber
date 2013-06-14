define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	var CollectionView = Backbone.View.extend({
		// 'render' can be overidden to hold any view logic
		// and use methods: renderModel & renderCollection
		render: function(options) {
			return this.renderCollection(options);
		},

		/**
		 * renders a collection of models by a given view
		 * @param  {object} options (optional) - optional flags to expose an "api" for the method
		 *                          - {dom} target (optional) - the target element to render the views
		 *                          - {boolean} dispose - false if you want to keep the rendered views
		 *                          - {object} args - optional args to pass to the views
		 *
		 * @return {Backbone.CollectionView}
		 */
		renderCollection: function(options) {
			options = options || {};
			options.target = options.target || this.$el;
			options.collection = options.collection || this.collection;

			//- reset views
			if (!options || (options && !options.keep)) {
				this.disposeViews();
			}

			this._renderOptions = options;
			//- if there is a collection and a view then render it
			if (options.collection && this.view) {
				// create new stack to collect views
				if (!this._views) {
					this._views = [];
				}
				options.target.append (options.collection.map(this._renderView, this));

			}
			return this;
		},

		_renderView: function(model) {
			return this.createView(model, this._renderOptions.args || {}).render().$el;
		},

		createView: function(model, options) {
			var indexOfNewView = this._views.length;
			this._views.push(new this.view(_.extend({
					model: model
				},
				options
			)));
			return this._views[indexOfNewView];
		},

		// removes views created by the renderCollection method
		disposeViews: function () { 
			_.invoke(this._views, 'destroy');
			this._views && this._views.length = 0;
		},

		destroy: function () {
			this.disposeViews();
			this.dispose();
		}
	});

	return CollectionView;
});
