import { window } from 'vscode';


export function reverseString() {
	const editor = window.activeTextEditor;

	if (!editor) { return; }

	const document = editor.document;
	editor.edit(editBuilder => {
		for (const selection of editor.selections) {
			let theString = document.getText(selection);
			if (!theString) { return; }
			const reversed = theString.split('').reverse().join('').replace(/\n\r/g, '\r\n');
			editBuilder.replace(selection, reversed);
		}
	});
}


export function transformToLowercase() {
	const editor = window.activeTextEditor;

	if (!editor) { return; }

	const document = editor.document;
	editor.edit(editBuilder => {
		for (const selection of editor.selections) {
			let theString = document.getText(selection);
			if (!theString) { return; }
			editBuilder.replace(selection, theString.toLowerCase());
		}
	});
}


export function transformToUppercase() {
	const editor = window.activeTextEditor;

	if (!editor) { return; }

	const document = editor.document;
	editor.edit(editBuilder => {
		for (const selection of editor.selections) {
			let theString = document.getText(selection);
			if (!theString) { return; }
			editBuilder.replace(selection, theString.toUpperCase());
		}
	});
}


export function transformToTitleCase() {
	const editor = window.activeTextEditor;

	if (!editor) { return; }

	const document = editor.document;
	editor.edit(editBuilder => {
		for (const selection of editor.selections) {
			let theString = document.getText(selection);
			if (!theString) { return; }

			let titleString = '';
			if (theString.length === 1) { titleString = theString.toUpperCase(); }
			else {
				theString = theString.toLowerCase();
				const preCharList = [' ', '\r', '\n'];
				titleString = theString[0].toUpperCase();
				for (let i = 0; i < theString.length - 1; i++) {
					if (preCharList.includes(theString[i])) {
						titleString += theString[i + 1].toUpperCase();
					} else {
						titleString += theString[i + 1];
					}
				}
			}

			editBuilder.replace(selection, titleString);
		}
	});
}