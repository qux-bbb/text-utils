import { getSelectionString, setSelectionString } from './utils';


export function base64Encode() {
	let theString = getSelectionString();
	if (!theString) { return; }
	const resultString = Buffer.from(theString).toString('base64');

	setSelectionString(resultString);
}


export function base64Decode() {
	let theString = getSelectionString();
	if (!theString) { return; }

	let theLines = theString.split('\n');
	for (let i = 0; i < theLines.length; i++) {
		theLines[i] = theLines[i] + new Array(theLines[i].length % 4).join('=');
		theLines[i] = Buffer.from(theLines[i], 'base64').toString();
	}

	setSelectionString(theLines.join('\n'));
}