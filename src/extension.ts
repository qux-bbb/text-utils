import { commands, ExtensionContext } from 'vscode';
import { base64Encode, base64Decode } from "./base64";
import { checkTaskList } from './checkTaskList';
import { transformToUnorderedList, transformToOrdededList } from './list';
import { reverseWord, transformToLowercase, transformToTitleCase, transformToUppercase } from './string';

export function activate(context: ExtensionContext) {

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

export function deactivate() {}
