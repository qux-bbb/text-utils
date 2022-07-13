import { getTheString, setTheString } from './utils';

export function deduplicateByLine () {
	let [theString, selectFlag] = getTheString();
	if (!theString)
		{return;}
	let theLines = [];
	if (theString.indexOf("\r\n") == -1) {
		theLines = theString.split('\n');
	}else{
		theLines = theString.split("\r\n");
	}
	
	let newLines = [];
	for (let i = 0; i < theLines.length; i++) {
		if (newLines.indexOf(theLines[i])==-1) {
			newLines.push(theLines[i]);
		}
	}

    setTheString(newLines.join('\n'), selectFlag);
}

export function deduplicateByChar () {
	let [theString, selectFlag] = getTheString();
	if (!theString)
		{return;}
	let newString = "";
	for (let i = 0; i < theString.length; i++) {
		if ('\r\n'.indexOf(theString[i])==-1 && newString.indexOf(theString[i])==-1) {
			newString = newString + theString[i];
		}
	}

    setTheString(newString, selectFlag);
}