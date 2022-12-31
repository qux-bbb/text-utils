# text-utils

[English](README.md)  

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
9. hex编码解码
10. 行排序
11. 去重
12. 输出今日日期

你可以在设置里搜索 `Text Utils`，选择是否启用某些功能，更改日期输出格式  


## 示例
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

# date
2021/6/12
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


## 发布
该步骤仅本人使用  

在手动构建生成vsix包之后，需要发布到 github release 页面、vscode扩展市场、open-vsx。  
- github release  
   打开 https://github.com/qux-bbb/text-utils/releases, `Draft a new release`  
   创建新的版本tag，写release标题和内容(可以根据changelog写)，上传vsix文件即可  
- vscode扩展市场  
   打开 https://marketplace.visualstudio.com/manage/publishers  
   点击旧版本一行的 "..."->"Update", 上传vsix文件即可  
- open-vsx  
   执行命令即可: `npx ovsx publish -p <token>`, token换成自己的  


## 参考链接
1. https://github.com/yzhang-gh/vscode-markdown  
2. https://github.com/microsoft/vscode-extension-samples/blob/master/document-editing-sample  
3. https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/  
4. https://marketplace.visualstudio.com/items?itemName=RushFrisby.Encryptor  
5. https://nodejs.org/api/crypto.html  
6. https://attacomsian.com/blog/nodejs-encrypt-decrypt-data  
7. https://github.com/adamhartford/vscode-base64  
8. 多选区编辑: https://github.com/microsoft/vscode/issues/5886  
9. 配置文件示例: https://github.dev/microsoft/vscode-extension-samples/tree/main/configuration-sample  
