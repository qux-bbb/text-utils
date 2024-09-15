import { workspace } from 'vscode';
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

	let decode_multiline_mode: number | undefined = workspace.getConfiguration().get('text-utils.base64.decode_multiline_mode');
	if (decode_multiline_mode === undefined) {
		console.error('no decode_multiline_mode!');
		return;
	}

	let resultString = '';
	if (decode_multiline_mode === 1) {
		let theLines = theString.split('\n');
		for (let i = 0; i < theLines.length; i++) {
			theLines[i] = theLines[i] + new Array(theLines[i].length % 4).join('=');
			theLines[i] = Buffer.from(theLines[i], 'base64').toString();
		}
		resultString = theLines.join('\n');
	} else if (decode_multiline_mode === 2) {
		theString = theString.replace('\n', '');
		theString = theString + new Array(theString.length % 4).join('=');
		resultString = Buffer.from(theString, 'base64').toString();
	}

	setSelectionString(resultString);
}