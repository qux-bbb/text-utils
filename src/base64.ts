import { getSelectionString, setSelectionString } from "./utils";

export function base64Encode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}
	const resultString = new Buffer.from(theString).toString('base64');

	setSelectionString(resultString);
}

export function base64Decode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}
	theString = theString + new Array(theString.length % 4).join('=');

	const resultString = new Buffer.from(theString, 'base64').toString();

	setSelectionString(resultString);
}