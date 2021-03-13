import { getSelectionString, setSelectionString } from './utils';

export function uriEncode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

    const resultString = encodeURI(theString);

	setSelectionString(resultString);
}

export function uriDecode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

	const resultString = decodeURI(theString);

	setSelectionString(resultString);
}