import { window } from "vscode";

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