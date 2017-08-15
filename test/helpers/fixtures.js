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
		<div class=".o-subs-card__expander" data-o-component="o-subs-card" id="element"></div>
	</div>
	`;
	insert(html);
}

export {
	htmlCode,
	reset
};
