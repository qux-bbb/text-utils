/*
reference:
https://nodejs.org/api/crypto.html
https://attacomsian.com/blog/nodejs-encrypt-decrypt-data
*/
const { randomBytes, scryptSync, createCipheriv, createDecipheriv } = require('crypto');
import { window } from 'vscode';
import { getTheString, setTheString } from './utils';


const algorithm = 'aes-256-cbc';

function encrypt (text:string, password:string) {
    const iv = randomBytes(16);
    const salt = randomBytes(16);
    const secretKey = scryptSync(password, salt, 32);

    const cipher = createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return [iv.toString('hex'), salt.toString('hex'), encrypted.toString('hex')].join('');
};


function decrypt (hex_str:string, password:string) {
    const iv = Buffer.from(hex_str.substring(0, 32), 'hex');
    const salt = Buffer.from(hex_str.substring(32, 64), 'hex');
    const encrypted = Buffer.from(hex_str.substring(64), 'hex');
    const secretKey = scryptSync(password, salt, 32);

    const decipher = createDecipheriv(algorithm, secretKey, iv);
    const decrpyted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

    return decrpyted.toString();
};


async function getPassword () {
    let password = await window.showInputBox({
        password: true,
        prompt: 'Type your password'
    });
    if (password)
        return password;
    else {
        window.showWarningMessage('No password input!');
        return '';
    }
}


async function getConfirmedPassword () {
    let password = await window.showInputBox({
        password: true,
        prompt: 'Type your password'
    });
    if (password) {
        let confirmedPassword = await window.showInputBox({
            password: true,
            prompt: 'Confirm password'
        });
        if (confirmedPassword) {
            if (password === confirmedPassword)
                return password;
            else {
                window.showWarningMessage('The two passwords are not same');
                return '';
            }
        } else {
            window.showWarningMessage('No confirmed password input!');
            return '';
        }
    }else{
        window.showWarningMessage('No password input!');
        return '';
    }
}


export async function aesEncrypt() {
	let [theString, selectFlag] = getTheString();
	if (!theString)
		{return;}
    let password = await getConfirmedPassword();
    if (!password)
        return;
    const resultString = encrypt(theString, password);

	setTheString(resultString, selectFlag);
}


export async function aesDecrypt() {
	let [theString, selectFlag] = getTheString();
	if (!theString)
		{return;}
    let password = await getPassword();
    if (!password)
        return;
    const resultString = decrypt(theString, password);

    setTheString(resultString, selectFlag);
}