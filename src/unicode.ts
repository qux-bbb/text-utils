import { getSelectionString, setSelectionString } from './utils';

export function unicodeEncode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

    const resultString = escape(theString).replace(/%u/g, "\\u");

	setSelectionString(resultString);
}

export function unicodeDecode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

	const resultString = unescape(theString.replace(/\\u/g, "%u"));

	setSelectionString(resultString);
}