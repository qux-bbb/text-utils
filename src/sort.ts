import { getSelectionString, setSelectionString } from './utils';

export function sortLinesByAlpha () {
	let theString = getSelectionString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');
	theLines.sort();

    setSelectionString(theLines.join('\n'));
}

export function sortLinesByReverseAlpha () {
	let theString = getSelectionString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');
	theLines.sort().reverse();

    setSelectionString(theLines.join('\n'));
}

export function sortLinesByNum () {
	let theString = getSelectionString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');
	theLines.sort((a, b) => parseInt(a)-parseInt(b));

    setSelectionString(theLines.join('\n'));
}

export function sortLinesByReverseNum () {
	let theString = getSelectionString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');
	theLines.sort((a, b) => parseInt(b)-parseInt(a));

    setSelectionString(theLines.join('\n'));
}