简介
========

这个项目参考了 [react-redux-crud](https://github.com/tb/react-redux-crud)，它具备几个优秀的特性：

* 一个完整的CRUD功能集。
* 简洁的Bootstrap界面。
* 交互式和响应式的用户体验。
* React为基础，可以方便的扩展。

在此基础上，根据设计要求，做了以下改变：

* 去除不必要的模块，并修改命名。
* 一个json-server。
* 数据结构和界面，需要符合给定的形式。
* 添加了一个日期选择构件。
* 添加chart.js模块和coinapi模块，读取数据。
* 添加Jest作为测试框架。
* 文档。

使用
=========

    git clone https://github.com/dannyvi/frontend-CRUD
    npm i
    npm run server-api
    npm start
    open http://localhost:3000    
    