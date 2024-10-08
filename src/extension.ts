import { commands, ExtensionContext } from 'vscode';
import { base64Encode, base64Decode } from './base64';
import { checkTaskList } from './checkTaskList';
import { transformToUnorderedList, transformToOrderedList } from './list';
import { reverseString, transformToLowercase, transformToTitleCase, transformToUppercase } from './string';
import { aesEncrypt, aesDecrypt } from './aes';
import { uriEncode, uriDecode } from './uri';
import { unicodeEncode, unicodeDecode } from './unicode';
import { hexEncode, hexDecode } from './hex';
import { sortLinesByAlpha, sortLinesByReverseAlpha, sortLinesByNum, sortLinesByReverseNum, reverseLines } from './sort';
import { deduplicateByLine, deduplicateByChar } from './deduplicate';
import { randomPassword } from './randomPassword';
import { theDate } from './date';
import { generateUUID } from './uuid';


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
		commands.registerCommand('text-utils.extension.aesEncrypt', aesEncrypt),
		commands.registerCommand('text-utils.extension.aesDecrypt', aesDecrypt),
		commands.registerCommand('text-utils.extension.uriEncode', uriEncode),
		commands.registerCommand('text-utils.extension.uriDecode', uriDecode),
		commands.registerCommand('text-utils.extension.unicodeEncode', unicodeEncode),
		commands.registerCommand('text-utils.extension.unicodeDecode', unicodeDecode),
		commands.registerCommand('text-utils.extension.hexEncode', hexEncode),
		commands.registerCommand('text-utils.extension.hexDecode', hexDecode),
		commands.registerCommand('text-utils.extension.sortLinesByAlpha', sortLinesByAlpha),
		commands.registerCommand('text-utils.extension.sortLinesByReverseAlpha', sortLinesByReverseAlpha),
		commands.registerCommand('text-utils.extension.sortLinesByNum', sortLinesByNum),
		commands.registerCommand('text-utils.extension.sortLinesByReverseNum', sortLinesByReverseNum),
		commands.registerCommand('text-utils.extension.reverseLines', reverseLines),
		commands.registerCommand('text-utils.extension.deduplicateByLine', deduplicateByLine),
		commands.registerCommand('text-utils.extension.deduplicateByChar', deduplicateByChar),
		commands.registerCommand('text-utils.extension.randomPassword', randomPassword),
		commands.registerCommand('text-utils.extension.theDate', theDate),
		commands.registerCommand('text-utils.extension.generateUUID', generateUUID),
	);
}


export function deactivate() { }