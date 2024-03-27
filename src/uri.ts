import { getSelectionString, setSelectionString } from './utils';


export function uriEncode() {
	let theString = getSelectionString();
	if (!theString) { return; }

	const resultString = encodeURI(theString);

	setSelectionString(resultString);
}


export function uriDecode() {
	let theString = getSelectionString();
	if (!theString) { return; }

	/*
	if you want to decode this:
		'http://undocumented.ntinternals.net/index.html?page=UserMode%2FStructures%2FLDR_MODULE.html'
	you need to use decodeURIComponent instead of decodeURI
	*/
	const resultString = decodeURIComponent(theString);

	setSelectionString(resultString);
}