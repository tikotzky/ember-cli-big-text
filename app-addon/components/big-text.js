import Ember from 'ember';

export default Ember.Component.extend({
	minFontSize: null,
	maxFontSize: null,
	childSelector: '',
	resize: true,

	runBigText: function(){
		Ember.run.scheduleOnce('afterRender', this, function(){
			this.$().bigtext({
				minfontsize: this.get('minFontSize'),
				maxfontsize: this.get('maxFontSize') || 528,
				childSelector: this.get('childSelector'),
				resize: this.get('resize'),
			});
		});
	}.observes('minFontSize', 'maxFontSize', 'childSelector', 'resize').on('didInsertElement')
});