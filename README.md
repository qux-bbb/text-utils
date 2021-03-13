# text-utils

## Intro

Text formatting tool, right-click to select the function, the existing functions are as follows：  
1. TODO list (shortcut key: Alt + X)
2. string reverse
3. string to lowercase/uppercase/titlecase
4. generate ordered/unordered list
5. base64 encode/decode
6. AES encrypt/decrypt
7. uri encode/decode
8. unicode encode/decode

TODO example:  
```
- [ ] hello world
- [x] good morning
```


## How to install
1. Search for 'text utils' from vscode extension window and installation directly  
2. Build by yourself  
   After installing node.js, execute the following commands：
   ```sh
   git clone https://github.com/qux-bbb/text-utils
   cd text-utils
   npm install
   npm install -g vsce
   vsce package
   ```
   the vsix package will be generated. In the upper right corner of the vscode extension window, select "install from VSIX", find the generated vsix package and install.  

## Reference
1. https://github.com/yzhang-gh/vscode-markdown  
2. https://github.com/microsoft/vscode-extension-samples/blob/master/document-editing-sample  
3. https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/  
4. https://marketplace.visualstudio.com/items?itemName=RushFrisby.Encryptor  
5. https://nodejs.org/api/crypto.html  
6. https://attacomsian.com/blog/nodejs-encrypt-decrypt-data  
7. https://github.com/adamhartford/vscode-base64  