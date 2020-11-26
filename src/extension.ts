// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext, Position, Range, window } from 'vscode';
import { base64Encode, base64Decode } from "./base64";

function checkTaskList() {
	// from https://github.com/yzhang-gh/vscode-markdown/blob/ff79b2e7a69dcbfd04d5c289999c1a09ef784e61/src/listEditing.ts#L409
    // - Look into selections for lines that could be checked/unchecked.
    // - The first matching line dictates the new state for all further lines.
    //   - I.e. if the first line is unchecked, only other unchecked lines will
    //     be considered, and vice versa.
    let editor = window.activeTextEditor;
	const uncheckedRegex = /^(\s*\[) \]/;
    const checkedRegex = /^(\s*\[)x\]/;
    let toBeToggled: Position[] = []; // all spots that have an "[x]" resp. "[ ]" which should be toggled
	let newState: boolean | undefined = undefined; // true = "x", false = " ", undefined = no matching lines
	
	if (!editor)
		{return;}

    // go through all touched lines of all selections.
    for (const selection of editor.selections) {
        for (let i = selection.start.line; i <= selection.end.line; i++) {
            const line = editor.document.lineAt(i);
            const lineStart = line.range.start;

            if (!selection.isSingleLine && (selection.start.isEqual(line.range.end) || selection.end.isEqual(line.range.start))) {
                continue;
            }

			let matches: RegExpExecArray|null;
            if (
                (matches = uncheckedRegex.exec(line.text))
                && newState !== false
            ) {
                toBeToggled.push(lineStart.with({ character: matches[1].length }));
                newState = true;
            } else if (
                (matches = checkedRegex.exec(line.text))
                && newState !== true
            ) {
                toBeToggled.push(lineStart.with({ character: matches[1].length }));
                newState = false;
            }
        }
    }

    if (newState !== undefined) {
        const newChar = newState ? 'x' : ' ';
        return editor.edit(editBuilder => {
            for (const pos of toBeToggled) {
                let range = new Range(pos, pos.with({ character: pos.character + 1 }));
                editBuilder.replace(range, newChar);
            }
        });
    };
}

function reverseWord () {
	// Get the active text editor
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	// Get the word within the selection
	const word = document.getText(selection);
	const reversed = word.split('').reverse().join('');
	editor.edit(editBuilder => {
		editBuilder.replace(selection, reversed);
	});
}

function transformToLowercase () {
	// Get the active text editor
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	// Get the string within the selection
	const theString = document.getText(selection);

	editor.edit(editBuilder => {
		editBuilder.replace(selection, theString.toLowerCase());
	});
}

function transformToUppercase () {
	// Get the active text editor
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	// Get the string within the selection
	const theString = document.getText(selection);

	editor.edit(editBuilder => {
		editBuilder.replace(selection, theString.toUpperCase());
	});
}
 
function transformToTitleCase () {
	// Get the active text editor
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	// Get the string within the selection
	const theString = document.getText(selection);
	let str = theString.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
	}
	const titleString = str.join(' ');

	editor.edit(editBuilder => {
		editBuilder.replace(selection, titleString);
	});
}

function transformToUnorderedList () {
	// Get the active text editor
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	// Get the string within the selection
	const theString = document.getText(selection);
	let theLines = theString.split('\n');
	theLines = theLines.map(theLine => `- ${theLine}`);

	editor.edit(editBuilder => {
		editBuilder.replace(selection, theLines.join('\n'));
	});
}

function transformToOrdededList () {
	// Get the active text editor
	const editor = window.activeTextEditor;

	if (!editor)
		{return;}

	const document = editor.document;
	const selection = editor.selection;

	// Get the string within the selection
	const theString = document.getText(selection);
	let theLines = theString.split('\n');
	for (let i = 0; i < theLines.length; i++) {
		const line = theLines[i];
		theLines[i] = `${i+1}. ${theLines[i]}`;
	}


	editor.edit(editBuilder => {
		editBuilder.replace(selection, theLines.join('\n'));
	});
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "text-utils" is now active!');

    context.subscriptions.push(
		commands.registerCommand('text-utils.extension.checkTaskList', checkTaskList),
		commands.registerCommand('text-utils.extension.reverseWord', reverseWord),
		commands.registerCommand('text-utils.extension.transformToLowercase', transformToLowercase),
		commands.registerCommand('text-utils.extension.transformToUppercase', transformToUppercase),
		commands.registerCommand('text-utils.extension.transformToTitleCase', transformToTitleCase),
		commands.registerCommand('text-utils.extension.transformToUnorderedList', transformToUnorderedList),
		commands.registerCommand('text-utils.extension.transformToOrdededList', transformToOrdededList),
		commands.registerCommand('text-utils.extension.base64Encode', base64Encode),
		commands.registerCommand('text-utils.extension.base64Decode', base64Decode),
    );
}

// this method is called when your extension is deactivated
export function deactivate() {}
