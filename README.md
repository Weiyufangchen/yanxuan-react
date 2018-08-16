## 第1章：准备

### 1.1 项目描述

1)  此项目为 购物Shopping App（仿照网易严选）

2)  包括 首页，识物，分类，购物车，个人 等多个子模块

3)  使用 react全家桶 + ES6 + Webpack 等前端最新技术

4)  采用 组件化、模块化、工程化 的模式开发

## 第2章: 应用开发详解

### 2.1. 开启项目开发

#### 2.1.1. 使用create-react-app(脚手架)搭建项目

1. create-react-app 是 react 官方提供的用于搭建基于 react + webpack + es6 项目的脚手架
2. 操作：

```
npm install -g create-react-app : 全局下载工具
create-react-app package name : 下载模板项目（设置包名 yanxuan）
cd yanxuan
npm start
访问：localhost：3000
```

#### 2.1.2. 编码测试与打包发布项目

1. 编码测试

```
npm start
访问：http://localhost:3000
编码，自动编译打包刷新（live-reload），查看效果
```

1. 打包发布

```
npm run build
npm install -g serve
serve build
访问：http://localhost:5000
```

### 2.2. 功能需求分析

- 演示项目功能，对功能模块进行分析说明

### 2.3. 项目（前端）源码目录设计

```
src  客户端代码文件夹
	api  ajax请求相关模块文件夹
	assets  共用资源文件夹
	components  UI组件模块文件夹
	containers  容器组件模块文件夹
	redux  redux相关模块文件夹
	utils  工具模块文件夹
	index.js  入口js文件
```

### 2.4. 引入 antd-mobile

#### 2.4.1. 下载组件库包

```
npm install antd-mobile --save
```

#### 2.4.2 页面处理：index.html

> 初始化视口
>
> 解决快速点击（移动端 300ms 点击穿透）的问题

```javascript
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
  if(!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
  }
</script>
```

#### 2.4.3. 实现组件的按需打包

1. 下载依赖模块

```
npm install --save-dev babel-plugin-import react-app-rewired
```

1. 定义加载配置的 js 模块：config-overrides.js

```
const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config);
  return config;
}
```

​	修改配置：package.json

> 这里最好先 npm i， 下载 package 中3个依赖包（react、react-dom、react-scripts），没下，改下面配置，启动会报错

```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test --env=jsdom",
  "eject": "react-scripts eject"
}
```

#### 2.4.4. 应用中使用的组件

#### 2.4.5. 下载 css 编译依赖模块

```
npm i --save-dev less@2.7.3 less-loader
```

### 2. 5. 引入路由

#### 2.5.1 下载路由包： react-router-dom

```
npm i --save react-router-dom
```

#### 2.5.2. 路由组件

- home  首页
- shiwu  识物
- category  分类
- cart   购物车
- profile  个人中心





