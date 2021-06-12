import { getSelectionString, setSelectionString } from './utils';

// 'JKL' -> '4a4b4c'
export function hexEncode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

    let theArrary = Buffer.from(theString, 'ascii');

    let hexArrary: string[] = [];
    theArrary.forEach(value => {
        hexArrary.push(value.toString(16))
    });

    const resultString = hexArrary.join('')
    
	setSelectionString(resultString);
}

// '4a4b4c' -> 'JKL'
export function hexDecode () {
	let theString = getSelectionString();
	if (!theString)
		{return;}

    let theArrary = Buffer.from(theString, 'hex')

    let charArrary: string[] = [];
    theArrary.forEach(value => {
        charArrary.push(String.fromCharCode(value))
    });

    const resultString = charArrary.join('')
    
	setSelectionString(resultString);
}