import { getSelectionString, setSelectionString } from './utils';

export function unicodeEncode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

    const resultString = unescape(escape(theString).replace(/%u(?=[0-9a-fA-F]{4})/g, "\\u"));

	setSelectionString(resultString);
}

export function unicodeDecode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

	const resultString = unescape(theString.replace(/\\[uU](?=[0-9a-fA-F]{4})/g, "%u"));

	setSelectionString(resultString);
}