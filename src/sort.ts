import { getTheString, setTheString } from './utils';


function getNewlineSymbol(theString: string) {
	let newlineSymbol = '\n';

	if (theString.includes('\r\n')) {
		newlineSymbol = '\r\n';
	} else if (theString.includes('\r')) {
		newlineSymbol = '\r';
	}

	return newlineSymbol;
}


export function sortLinesByAlpha() {
	let [theString, selectFlag] = getTheString();
	if (!theString) { return; }
	let newlineSymbol = getNewlineSymbol(theString);
	let theLines = theString.split(newlineSymbol);

	theLines.sort();

	let resultString = theLines.join(newlineSymbol);
	setTheString(resultString, selectFlag);
}


export function sortLinesByReverseAlpha() {
	let [theString, selectFlag] = getTheString();
	if (!theString) { return; }
	let newlineSymbol = getNewlineSymbol(theString);
	let theLines = theString.split(newlineSymbol);

	theLines.sort().reverse();

	let resultString = theLines.join(newlineSymbol);
	setTheString(resultString, selectFlag);
}


export function sortLinesByNum() {
	let [theString, selectFlag] = getTheString();
	if (!theString) { return; }
	let newlineSymbol = getNewlineSymbol(theString);
	let theLines = theString.split(newlineSymbol);

	theLines.sort((a, b) => parseInt(a) - parseInt(b));

	let resultString = theLines.join(newlineSymbol);
	setTheString(resultString, selectFlag);
}


export function sortLinesByReverseNum() {
	let [theString, selectFlag] = getTheString();
	if (!theString) { return; }
	let newlineSymbol = getNewlineSymbol(theString);
	let theLines = theString.split(newlineSymbol);

	theLines.sort((a, b) => parseInt(b) - parseInt(a));

	let resultString = theLines.join(newlineSymbol);
	setTheString(resultString, selectFlag);
}