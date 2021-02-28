import { getSelectionString, setSelectionString } from './utils';

export function reverseString () {
	let theString = getSelectionString();
	if (!theString)
        {return;}
        
    const reversed = theString.split('').reverse().join('');

    setSelectionString(reversed);
}

export function transformToLowercase () {
	let theString = getSelectionString();
	if (!theString)
        {return;}
    
    setSelectionString(theString.toLowerCase());
}

export function transformToUppercase () {
	let theString = getSelectionString();
	if (!theString)
        {return;}
    
    setSelectionString(theString.toUpperCase());
}
 
export function transformToTitleCase () {
	let theString = getSelectionString();
	if (!theString)
        {return;}

	let str = theString.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
	}
    const titleString = str.join(' ');
    
    setSelectionString(titleString);
}