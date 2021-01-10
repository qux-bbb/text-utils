# text-utils

## Intro

Text formatting tool, right-click to select the function, the existing functions are as follows：  
1. TODO list (shortcut key: Alt + X)
2. string reverse
3. string to lowercase
4. string to uppercase
5. string to titlecase
6. generate unordered list
7. generate ordered list
8. base64 encode/decode

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