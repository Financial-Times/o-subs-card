let sandboxEl;

function createSandbox() {
	if (document.querySelector('.sandbox')) {
		sandboxEl = document.querySelector('.sandbox');
	} else {
		sandboxEl = document.createElement('div');
		sandboxEl.setAttribute('class', 'sandbox');
		document.body.appendChild(sandboxEl);
	}
}

function reset() {
	sandboxEl.innerHTML = '';
}

function insert(html) {
	createSandbox();
	sandboxEl.innerHTML = html;
}


function htmlCode () {
	const html = `<div>
		<h1>Basic Demo</h1>
		<div class="o-subs-card" data-o-component="o-subs-card">
			<div class="o-subs-card__expander">
				<div class="o-subs-card__read-more"></div>
				<div class="o-subs-card__copy-details">
					Some content
				</div>
			</div>
		</div>
	</div>
	`;
	insert(html);
}

export {
	htmlCode,
	reset
};