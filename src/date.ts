import { workspace } from 'vscode';
import { setSelectionString } from './utils';


export function theDate() {

	let formatStr: string | undefined = workspace.getConfiguration().get('text-utils.theDate.format');
	if (formatStr === undefined) {
		console.error('no formatStr!');
		return;
	}

	const myDate = new Date();
	const year = myDate.getFullYear();
	const month = myDate.getMonth() + 1;
	const dayOfMonth = myDate.getDate();

	let resultString = formatStr.split(':')[0];
	if (resultString.indexOf('mm') === -1) {
		resultString = resultString.replace('yyyy', year.toString());
		resultString = resultString.replace('m', month.toString());
		resultString = resultString.replace('d', dayOfMonth.toString());
	}
	else {
		resultString = resultString.replace('yyyy', year.toString());
		resultString = resultString.replace('mm', month.toString().padStart(2, '0'));
		resultString = resultString.replace('dd', dayOfMonth.toString().padStart(2, '0'));
	}

	setSelectionString(resultString);
}