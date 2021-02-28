import { commands, ExtensionContext } from 'vscode';
import { base64Encode, base64Decode } from "./base64";
import { checkTaskList } from './checkTaskList';
import { transformToUnorderedList, transformToOrderedList } from './list';
import { reverseString, transformToLowercase, transformToTitleCase, transformToUppercase } from './string';
import { aesEncryptStr, aesDecryptStr, aesEncryptFile, aesDecryptFile } from './aes';

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
		commands.registerCommand('text-utils.extension.checkTaskList', checkTaskList),
		commands.registerCommand('text-utils.extension.reverseString', reverseString),
		commands.registerCommand('text-utils.extension.transformToLowercase', transformToLowercase),
		commands.registerCommand('text-utils.extension.transformToUppercase', transformToUppercase),
		commands.registerCommand('text-utils.extension.transformToTitleCase', transformToTitleCase),
		commands.registerCommand('text-utils.extension.transformToUnorderedList', transformToUnorderedList),
		commands.registerCommand('text-utils.extension.transformToOrderedList', transformToOrderedList),
		commands.registerCommand('text-utils.extension.base64Encode', base64Encode),
		commands.registerCommand('text-utils.extension.base64Decode', base64Decode),
		commands.registerCommand('text-utils.extension.aesEncryptStr', aesEncryptStr),
		commands.registerCommand('text-utils.extension.aesDecryptStr', aesDecryptStr),
		commands.registerCommand('text-utils.extension.aesEncryptFile', aesEncryptFile),
		commands.registerCommand('text-utils.extension.aesDecryptFile', aesDecryptFile),
    );
}

export function deactivate() {}
