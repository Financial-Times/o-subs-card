const oExpander = require('o-expander');

class SubsCard {

	constructor (SubsCard) {
		this.SubsCard = SubsCard;
		const expanders = document.querySelectorAll('.o-subs-card__expander');
		const opts = {
			shrinkTo: 'hidden',
			expandedToggleText: 'Read less',
			collapsedToggleText: 'Read more',
			toggleState: 'all',
			toggleSelector: '.o-subs-card__read-more',
			contentClassName: 'o-subs-card__copy-details',
		};

		expanders.forEach((expander) => {
			expander.setAttribute('data-o-component', 'o-expander');
			oExpander.init(expander, opts);
		});
	}

	static init (rootEl) {
		if (!rootEl) {
			rootEl = document.body;
		}
		if (!(rootEl instanceof HTMLElement)) {
			rootEl = document.querySelector(rootEl);
		}
		if (rootEl instanceof HTMLElement && rootEl.matches('[data-o-component=o-subs-card]')) {
			return new SubsCard(rootEl);
		}
		return Array.from(rootEl.querySelectorAll('[data-o-component="o-subs-card"]'), rootEl => new SubsCard(rootEl));
	}
}

export default SubsCard;
