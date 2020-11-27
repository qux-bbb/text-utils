# text-utils README

## 简介

文本格式化工具，右键选择功能，现有如下功能：  
1. TODO列表（快捷键：Alt + C）
2. 字符串逆序
3. 字符串转小写
4. 字符串转大写
5. 词首字母大写
6. 生成无序列表
7. 生成有序列表
8. base64编码解码


## 安装方式
1. 直接从vscode扩展窗口搜索'text-utils'安装  
2. 手动构建
   需要提前安装node.js，然后依次执行如下命令：
   ```sh
   git clone https://github.com/qux-bbb/text-utils
   cd text-utils
   npm install
   vsce package
   ```
   这样可以生成vsix包，在扩展窗口的右上角菜单选择"从 VSIX 安装"，选择生成的vsix包安装即可  

## 参考链接
1. https://github.com/yzhang-gh/vscode-markdown  
2. https://github.com/microsoft/vscode-extension-samples/blob/master/document-editing-sample  
3. https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/  