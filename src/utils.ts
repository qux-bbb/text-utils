import { window, Selection, Position } from 'vscode';


export function getSelectionString () {
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

    return document.getText(selection);
}


export function setSelectionString (theString: string) {
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	editor.edit(editBuilder => {
		editBuilder.replace(selection, theString);
	});
}


export function getFileString () {
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;

    return document.getText();
}


export function setFileString (theString: string) {
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	let lastLine = document.lineCount - 1;
	if(lastLine < 0) {
		lastLine = 0;
	}
	var lastChar = document.lineAt(lastLine).text.length;
	if(lastChar <= 0) {
		lastChar = 1;
	}
	let selection = new Selection(new Position(0,0), new Position(lastLine,lastChar));

	editor.edit(editBuilder => {
		editBuilder.replace(selection, theString);
	});
}