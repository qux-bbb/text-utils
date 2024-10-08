# text-utils

[简体中文](README-zh_CN.md)  

## Introduce
Text formatting tool, right-click to select the function, the current functions are as follows：  
1. TODO list (shortcut key: Alt + X)
2. string reverse
3. string to lowercase/uppercase/titlecase
4. generate ordered/unordered list
5. base64 encode/decode
6. AES encrypt/decrypt
7. uri encode/decode
8. unicode encode/decode
9. hex encode/decode
10. sort lines
11. deduplicate
12. random password(space separated string required)
13. print today date
14. generate UUID(v4)

You can search for `Text Utils` in settings, choose whether to enable some functions, change date format  

Note: Only suitable for processing small amounts of data, large amounts of data may not be effective  

## Example
```r
# TODO
- [ ] hello world
- [x] good morning

# string
HelloWorld -> helloworld
helloWorld -> HELLOWORLD
hello world -> Hello World

# list
1. hello
2. world

- hello
- world

# base64
hello <-> aGVsbG8=

# AES password: world
hello <-> fa40d8662cfbd6d8ed5348561b81f2a5c7c67be5a6278c31f915759015ee62b7baac7118bd92aa496a1f64681e6c0da9

# uri
https://baike.baidu.com/item/你好/32416 <-> https://baike.baidu.com/item/%E4%BD%A0%E5%A5%BD/32416

# unicode
你好，世界 <-> \u4F60\u597D\uFF0C\u4E16\u754C

# hex
hello <-> 68656c6c6f

# sort lines
hello       good
world   --> hello
good        morning
morning     world

# deduplicate lines
world     word
hello --> hello
world
hello

# random password
hello world -> h3llo*world

# date
2021/6/12

# UUID
2e58dfd9-13eb-4f81-b684-01a3fb5e24e5
```


## How to install
- Search for 'text utils' from vscode extension window and install directly  
- Build by yourself  
   After installing node.js, execute the following commands：
   ```sh
   git clone https://github.com/qux-bbb/text-utils
   cd text-utils
   npm install
   npm install -g @vscode/vsce
   vsce package
   ```
   the vsix package will be generated. In the upper right corner of the vscode extension window, select "install from VSIX", find the generated vsix package and install.  


## How to develop
Preparing the Environment:  
```r
git clone https://github.com/qux-bbb/text-utils
cd text-utils
npm install
```

Create a new .ts file under the src directory to write the functional code. For examples:  
[src/date.ts](src/date.ts)  
[src/hex.ts](src/hex.ts)  

Import functions and add commands in extension.ts  
[src/extension.ts](src/extension.ts)  

Add command names, menu items, submenu items in package.json. If there are configurations, they can be added under the "configuration"(e.g. enable func, choose format)  
[package.json](package.json)  

Add corresponding languages in the nls (National Language Support) files. Currently, English and Simplified Chinese are supported  
[package.nls.json](package.nls.json)  
[package.nls.zh-cn.json](package.nls.zh-cn.json)  

After development is complete, you can use vscode for debugging  

If you want to publish a new version, you generally need to modify the following 5 files:  
`package.json` update the version  
`package-lock.json` update the version  
`CHANGELOG.md` write changes from the previous version to this version  
`README.md` relevant descriptions  
`README-zh_CN.md` relevant descriptions in Simplified Chinese  

Build the vsix package  
```r
cd text-utils
npm install
npm install -g @vscode/vsce
vsce package
```


## Reference
1. https://github.com/yzhang-gh/vscode-markdown  
2. https://github.com/microsoft/vscode-extension-samples/blob/master/document-editing-sample  
3. https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/  
4. https://marketplace.visualstudio.com/items?itemName=RushFrisby.Encryptor  
5. https://nodejs.org/api/crypto.html  
6. https://attacomsian.com/blog/nodejs-encrypt-decrypt-data  
7. https://github.com/adamhartford/vscode-base64  
8. Multiple selection editing: https://github.com/microsoft/vscode/issues/5886  
9. Config Sample: https://github.dev/microsoft/vscode-extension-samples/tree/main/configuration-sample  
