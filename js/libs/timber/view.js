define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	var BaseView = Backbone.View.extend({
		_collectionViews: [],

		// 'render' can be overidden to hold any view logic
		// and use methods: renderModel & renderCollection
		render: function(options) {
			return this.renderModel(options);
		},

		/**
		 * renders data to dom by this.model, this.template attributes
		 * @param {object} options (optional) - uses the default attributes if options is null
		 *                 - target - {DOM} (optional) the target the view will be append to
		 *                 - model - (optional) if you want to render other model
		 *                 - template - {string} (optional) if you want to use other template
		 * @return {Backbone.BaseView}
		 */
		renderModel: function(options) {
			var html;

			options = options || {};
			options.target = options.target || this.$el;
			options.model = options.model || this.model;
			options.template = options.template || this.template;

			if (this.template && this.model) {
				html = _.template(options.template, options.model.toJSON());
				if (options.keep) {
					options.target.append(html);
				} else {
					options.target.html(html);
				}
			}
			return this;
		},

		/**
		 * renders a collection of models by a given view
		 * @param  {object} options (optional) - optional flags to expose an "api" for the method
		 *                          - {dom} target (optional) - the target element to render the views
		 *                          - {boolean} dispose - false if you want to keep the rendered views
		 *                          - {object} args - optional args to pass to the views
		 *
		 * @return {Backbone.BaseView}
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

				options.collection.each(this._renderView, this);

			}
			return this;
		},

		_renderView: function(model) {
			this._renderOptions.target.append(
				this.createView(model, this._renderOptions.args || {}).render().$el
			);
		},

		appendViews: function(excludes) {
			// var viewsNames = _.without(_.keys(this.views), excludes);
			_.each( this.views, this._appendView, this );
		},

		_appendView: function(viewName, viewInst) {
			this.$el.append( viewInst.el );
		},

		createView: function(model, options) {
			var indexOfNewView = this._collectionViews.length;
			this._collectionViews.push(new this.view(_.extend({
					model: model
				},
				options
			)));
			return this._collectionViews[indexOfNewView];
		},

		addView: function(viewId, viewReference, options) {
			if (!this.views) {
				this.views = {};
			}
			// if 'el' is a selector - jQuery it
			if (options && options.el && _.isString(options.el)) {
				options.el = this.$(el);
			}
			this.views[viewId] = new viewReference(options || {});
		},
		
		// removes views created by the renderCollection method
		disposeViews: function () { 
			_.invoke(this._collectionViews, 'destroy');
			this._collectionViews = [];
		},

		dispose: function () {
			this.undelegateEvents();
			this.stopListening();
			this.remove();
		},

		destroy: function () {
			this.disposeViews();
			_.invoke(this.views, 'destroy');
			this.views = {};
			this.dispose();
		}
	});

	Backbone.BaseView = BaseView;
	return BaseView;
});