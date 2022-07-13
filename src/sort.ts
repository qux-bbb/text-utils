import { getTheString, setTheString } from './utils';

export function sortLinesByAlpha () {
	let [theString, selectFlag] = getTheString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');

	theLines.sort();

	let resultString = theLines.join('\n');
	setTheString(resultString, selectFlag);
}

export function sortLinesByReverseAlpha () {
	let [theString, selectFlag] = getTheString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');

	theLines.sort().reverse();

	let resultString = theLines.join('\n');
	setTheString(resultString, selectFlag);
}

export function sortLinesByNum () {
	let [theString, selectFlag] = getTheString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');

	theLines.sort((a, b) => parseInt(a)-parseInt(b));

	let resultString = theLines.join('\n');
	setTheString(resultString, selectFlag);
}

export function sortLinesByReverseNum () {
	let [theString, selectFlag] = getTheString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');

	theLines.sort((a, b) => parseInt(b)-parseInt(a));

	let resultString = theLines.join('\n');
	setTheString(resultString, selectFlag);
}