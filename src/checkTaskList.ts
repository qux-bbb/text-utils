import { Position, Range, window } from "vscode";

export function checkTaskList() {
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