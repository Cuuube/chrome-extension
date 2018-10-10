## 本文件作为开发chrome extension的半成品框架。

## 文件简介
* extension 导出的扩展源码文件夹。可以将该文件夹到chrome上打包
* img 图片素材
* script 开发源代码，main为主文件
* static webpack打包结果
* export.sh 有用的文件导出到extension脚本
* manifest.json chrome插件重要的json设置文件
* index.html popup界面

## 命令
* 启动webpack自动检测更改功能（需再手动export到extension）
```bash
npm run dev
# 或者
webpack --dev
```

* 执行导出到extension
```bash
npm run build
# 或者
sh export.sh
```

* 启动开发服务器（使用的http-server包）
```bash
npm run server
# or
http-server
```

## 参考资料与必要的链接
[【干货】Chrome插件(扩展)开发全攻略 - 小茗同学的博客园](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)
[manifest.json文档](https://developer.chrome.com/extensions/manifest)

[chrome扩展中心(用来本机测试)](chrome://extensions/)
[chrome网上应用店](https://chrome.google.com/webstore/category/extensions)
