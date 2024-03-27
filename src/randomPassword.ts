/*
generate random password

It is recommended to provide an initial string (pinyin or any string) separated by a space. If not provided, use 'hello world'

The initial string undergoes some transformations to produce the final password. Only two transformations are performed to avoid overcomplication. Possible transformation logic:
1. Character substitution, similar to 1337 language, such as 0-o, m-nn, w-vv, but not fully compliant
2. Character repetition, simply repeating a character 1~2 times
3. Case conversion
4. Special symbol insertion (excluding backslash to avoid common escape issues): `-=[];',./~!@#$%^&*()_+{}|:"<>?
5. Insertion of numbers (random 1-3 digits): 0123456789
6. Word repetition

*/

import { getSelectionString, setSelectionString } from './utils';


let theMap: { [key: string]: string } = {
    'A': '@',
    'B': '8',
    'C': '(',
    'D': 'd',
    'E': 'e',
    'F': 'f',
    'G': '6',
    'H': 'h',
    'I': '!',
    'J': 'j',
    'K': 'k',
    'L': 'l',
    'M': 'NN',
    'N': 'n',
    'O': '0',
    'P': 'p',
    'Q': 'O.',
    'R': 'r',
    'S': '5',
    'T': 't',
    'U': 'u',
    'V': 'v',
    'W': 'VV',
    'X': '><',
    'Y': 'y',
    'Z': '2',
    'a': '@',
    'b': 'B',
    'c': '(',
    'd': 'D',
    'e': '3',
    'f': 'F',
    'g': '9',
    'h': 'H',
    'i': '!',
    'j': 'J',
    'k': 'K',
    'l': 'L',
    'm': 'nn',
    'n': '^',
    'o': '0',
    'p': 'P',
    'q': '9',
    'r': 'R',
    's': 'S',
    't': 'T',
    'u': 'U',
    'v': 'V',
    'w': 'vv',
    'x': '><',
    'y': 'Y',
    'z': '2',
    '0': 'o',
    '1': '!',
    '2': 'z',
    '3': 'e',
    '4': 'f',
    '5': 's',
    '6': 'G',
    '7': 'T',
    '8': 'B',
    '9': 'g',
};


function replaceChar(theString: string) {
    const theIndex = Math.floor(Math.random() * theString.length);
    let tmpChar = theString[theIndex];
    let resultChar = '*';
    if (tmpChar in theMap) {
        resultChar = theMap[tmpChar];
    }
    let changedString = theString.substring(0, theIndex) + resultChar + theString.substring(theIndex + 1);
    return changedString;
}


function repeatChars(theString: string) {
    const theIndex = Math.floor(Math.random() * theString.length);
    const num = 1 + Math.floor(Math.random() * 2);  // 1~2
    let changedString = theString.substring(0, theIndex) + theString[theIndex].repeat(num) + theString.substring(theIndex);
    return changedString;
}


function reverseCase(theString: string) {
    const theIndex = Math.floor(Math.random() * theString.length);
    let tmpChar = theString[theIndex];
    let resultChar;
    if (tmpChar.toLowerCase() === tmpChar) {
        resultChar = tmpChar.toUpperCase();
    } else {
        resultChar = tmpChar.toLowerCase();
    }
    let changedString = theString.substring(0, theIndex) + resultChar + theString.substring(theIndex + 1);
    return changedString;
}


function insertSpecialChar(theString: string) {
    const theSpecialChars = '`-=[];\',./~!@#$%^&*()_+{}|:"<>?';
    const specialIndex = Math.floor(Math.random() * theSpecialChars.length);
    const theSpecialChar = theSpecialChars[specialIndex];
    let changedString;
    if (Math.random() > 0.5) {
        changedString = theString + theSpecialChar;
    } else {
        changedString = theSpecialChar + theString;
    }
    return changedString;
}


function insertNum(theString: string) {
    const theNumStr = Math.floor(Math.random() * 1000).toString();
    let changedString;
    if (Math.random() > 0.5) {
        changedString = theString + theNumStr;
    } else {
        changedString = theNumStr + theString;
    }
    return changedString;
}


function repeatString(theString: string) {
    return theString + theString;
}


function splitString(theRawString: string) {
    if (theRawString.length < 2) {
        theRawString = theRawString + theRawString[theRawString.length - 1].repeat(2);
    }
    let theIndex = theRawString.length / 2;
    let result = [
        theRawString.substring(0, theIndex),
        theRawString.substring(theIndex)
    ];
    return result;
}


function generatePassword(rawString: string | undefined) {
    let theRawString;
    if (rawString) {
        theRawString = rawString;
    } else {
        theRawString = 'hello world';
    }

    let theList = [];
    if (theRawString.includes(' ')) {
        theList = theRawString.split(' ');
    } else {
        theList = splitString(theRawString);
    }

    let funcList = [replaceChar, repeatChars, reverseCase, insertSpecialChar, insertNum, repeatString];
    const funcIndex1 = Math.floor(Math.random() * funcList.length);
    const func1 = funcList[funcIndex1];
    funcList.splice(funcIndex1, 1);
    const funcIndex2 = Math.floor(Math.random() * funcList.length);
    const func2 = funcList[funcIndex2];

    const randomIndex1 = Math.floor(Math.random() * theList.length);
    let randomIndex2 = randomIndex1;
    while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * theList.length);
    }
    theList[randomIndex1] = func1(theList[randomIndex1]);
    theList[randomIndex2] = func2(theList[randomIndex2]);

    return theRawString + '\n' + theList.join('');
}


export async function randomPassword() {
    const rawString = getSelectionString();
    const resultString = generatePassword(rawString);
    setSelectionString(resultString);
}