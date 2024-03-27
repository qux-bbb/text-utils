import { getSelectionString, setSelectionString } from './utils';


export function transformToUnorderedList() {
	let theString = getSelectionString();
	if (!theString) { return; }
	let theLines = theString.split('\n');
	theLines = theLines.map(theLine => theLine.replace(/( *)/, '$1- '));

	setSelectionString(theLines.join('\n'));
}


export function transformToOrderedList() {
	let theString = getSelectionString();
	if (!theString) { return; }

	let theLines = theString.split('\n');
	for (let i = 0; i < theLines.length; i++) {
		const line = theLines[i];
		theLines[i] = theLines[i].replace(/( *)/, `$1${i + 1}. `);
	}

	setSelectionString(theLines.join('\n'));
}