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
12. 随机密码(需要提供空格分隔字符串)
13. 输出今日日期
14. 生成UUID(版本4)

你可以在设置里搜索 `Text Utils`，选择是否启用某些功能，更改日期输出格式  

注意：只适合处理少量数据，数据量大可能没效果  


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

# random password
hello world -> h3llo*world

# date
2021/6/12

# UUID
2e58dfd9-13eb-4f81-b684-01a3fb5e24e5
```


## 安装方式
1. 直接从vscode扩展窗口搜索'text-utils'安装  
2. 手动构建
   需要提前安装node.js，然后依次执行如下命令：
   ```sh
   git clone https://github.com/qux-bbb/text-utils
   cd text-utils
   npm install
   npm install -g @vscode/vsce
   vsce package
   ```
   这样可以生成vsix包，在扩展窗口的右上角菜单选择"从 VSIX 安装"，选择生成的vsix包安装即可  


## 开发
准备环境：  
```r
git clone https://github.com/qux-bbb/text-utils
cd text-utils
npm install
```

在src下新建ts文件，写功能代码，参考示例：  
[src/date.ts](src/date.ts)  
[src/hex.ts](src/hex.ts)  

在extension.ts里引用功能函数并添加命令  
[src/extension.ts](src/extension.ts)  

在package.json里添加命令名称、菜单项、子菜单项，如果有配置可以在"configuration"字段下添加(如功能是否启用、有什么格式选择)  
[package.json](package.json)  

在nls(National Language Support)文件里添加相应的语言，当前支持英语、简体中文  
[package.nls.json](package.nls.json)  
[package.nls.zh-cn.json](package.nls.zh-cn.json)  

开发完成后可以使用vscode进行调试  

如果要发布新版本，一般需要修改5个文件：  
package.json 修改版本  
package-lock.json 修改版本  
CHANGELOG.md 记录上个版本到这个版本的改动  
README.md 相关描述  
README-zh_CN.md 相关描述  

生成vsix包  
```r
cd text-utils
npm install
npm install -g @vscode/vsce
vsce package
```


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
