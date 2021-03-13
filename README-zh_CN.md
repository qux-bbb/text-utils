# text-utils

## 简介

文本格式化工具，右键选择功能，现有如下功能：  
1. TODO列表（快捷键：Alt + X）
2. 字符串逆序
3. 字符串转小写/大写/词首大写
4. 生成有序/无序列表
5. base64编码解码
6. AES加解密
7. uri编码解码
8. unicode编码解码

TODO 示例:  
```
- [ ] hello world
- [x] good morning
```

## 安装方式
1. 直接从vscode扩展窗口搜索'text-utils'安装  
2. 手动构建
   需要提前安装node.js，然后依次执行如下命令：
   ```sh
   git clone https://github.com/qux-bbb/text-utils
   cd text-utils
   npm install
   npm install -g vsce
   vsce package
   ```
   这样可以生成vsix包，在扩展窗口的右上角菜单选择"从 VSIX 安装"，选择生成的vsix包安装即可  

## 参考链接
1. https://github.com/yzhang-gh/vscode-markdown  
2. https://github.com/microsoft/vscode-extension-samples/blob/master/document-editing-sample  
3. https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/  
4. https://marketplace.visualstudio.com/items?itemName=RushFrisby.Encryptor  
5. https://nodejs.org/api/crypto.html  
6. https://attacomsian.com/blog/nodejs-encrypt-decrypt-data  
7. https://github.com/adamhartford/vscode-base64  