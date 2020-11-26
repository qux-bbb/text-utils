import { getSelectionString, setSelectionString } from "./utils";

export function transformToUnorderedList () {
	let theString = getSelectionString();
	if (!theString)
		{return;}
	let theLines = theString.split('\n');
	theLines = theLines.map(theLine => `- ${theLine}`);

    setSelectionString(theLines.join('\n'));
}

export function transformToOrdededList () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

    let theLines = theString.split('\n');
	for (let i = 0; i < theLines.length; i++) {
		const line = theLines[i];
		theLines[i] = `${i+1}. ${theLines[i]}`;
	}

    setSelectionString(theLines.join('\n'));
}