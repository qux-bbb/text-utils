import { setSelectionString } from './utils';


export function theDate () {

    let myDate = new Date();
	const resultString = myDate.toLocaleDateString();

	setSelectionString(resultString);
}