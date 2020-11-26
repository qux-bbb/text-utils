import { window } from "vscode";

export function base64Encode () {
	// Get the active text editor
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	// Get the string within the selection
	const theString = document.getText(selection);
	const resultString = new Buffer.from(theString).toString('base64');

	editor.edit(editBuilder => {
		editBuilder.replace(selection, resultString);
	});
}

export function base64Decode () {
	// Get the active text editor
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	// Get the string within the selection
	let theString = document.getText(selection);
	theString = theString + new Array(theString.length % 4).join('=');

	const resultString = new Buffer.from(theString, 'base64').toString();

	editor.edit(editBuilder => {
		editBuilder.replace(selection, resultString);
	});
}