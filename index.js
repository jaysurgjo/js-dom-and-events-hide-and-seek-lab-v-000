function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('#nested .target');
}

function deepestChild() {
	const grandNodeElements = document.querySelectorAll('div#grand-node div');
	return grandNodeElements[grandNodeElements.length - 1];

}

function increaseRankBy(n) {
	const list = document.querySelectorAll('ul.ranked-list');

	for (let i = 0; i < list.length; i++) {
		list[i].innerHTML = parseInt(i, n);
	}
}
