import { Position, Range, window } from 'vscode';


export function checkTaskList() {
    // Refer to this link: https://github.com/yzhang-gh/vscode-markdown/blob/ff79b2e7a69dcbfd04d5c289999c1a09ef784e61/src/listEditing.ts#L409
    // If a todo line need to be toggle state, then toggle it: unchecked to checked, checked to unchecked.
    // If a common line need to change to a todo line, then change it as unchecked todo line.
    let editor = window.activeTextEditor;
    if (!editor) { return; }

    const uncheckedRegex = /^(\s*- \[) \]/;
    const checkedRegex = /^(\s*- \[)x\]/;
    const whiteSpaceRegex = /^(\s*)\S/;  // \S Ensure at least one non whitespace character.

    let toBeToggled: { position: Position, state: string }[] = []; // All spots that have an "[x]" resp. "[ ]" which should be toggled.
    let needAddTodo: Position[] = [];

    // Go through all touched lines of all selections.
    for (const selection of editor.selections) {
        for (let i = selection.start.line; i <= selection.end.line; i++) {
            const line = editor.document.lineAt(i);
            const lineStart = line.range.start;

            if (!selection.isSingleLine && (selection.start.isEqual(line.range.end) || selection.end.isEqual(line.range.start))) {
                continue;
            }

            let matches: RegExpExecArray | null;
            if (matches = uncheckedRegex.exec(line.text)) {
                toBeToggled.push({
                    position: lineStart.with({ character: matches[1].length }),
                    state: 'x'
                });
            } else if (matches = checkedRegex.exec(line.text)) {
                toBeToggled.push({
                    position: lineStart.with({ character: matches[1].length }),
                    state: ' '
                });
            } else if (matches = whiteSpaceRegex.exec(line.text)) {  // Match the beginning of a non whitespace character. There must be a match.
                needAddTodo.push(lineStart.with({ character: matches[1].length }));
            }
        }
    }

    if (toBeToggled.length || needAddTodo.length) {
        return editor.edit(editBuilder => {
            for (const posState of toBeToggled) {
                const pos = posState.position;
                let range = new Range(pos, pos.with({ character: pos.character + 1 }));
                editBuilder.replace(range, posState.state);
            }

            for (const pos of needAddTodo) {  // It's not clear why the later position hasn't changed, but it works.
                editBuilder.insert(pos, '- [ ] ');
            }
        });
    };
}