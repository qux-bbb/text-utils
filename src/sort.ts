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