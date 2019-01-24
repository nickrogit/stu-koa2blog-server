# koa2+mysql后台

注：此博客项目为koa2+mysql开源项目学习,笔记记录及补充完善。参考地址如下，欢迎大家去学习，感谢作者的开源分享！

> 参考

> 笔记：[koa2-note](https://chenshenhai.github.io/koa2-note/)
> 开源项目：[cykspace-node](https://github.com/chenyinkai/cykspace-node)

# 说明/补充/优化
服务数据库端：https://github.com/nickrogit/stu-koa2blog-server (koa2 + mysql)

后台管理端：https://github.com/nickrogit/stu-koa2blog-client (vue + iview)

多平台C端：计划中，将采用多端开发框架，uniapp或taro
## 现功能
+ 登录
+ 注册
+ 文章列表
+ 文章增、删、改、查
+ 图片上传
## 后续补充功能
+ 用户token机制
+ 富文本
+ 文章分类
+ 等；

## 数据库相关（补充）

+ 数据库安装及关联：https://blog.csdn.net/nickroprak/article/details/85338871
+ 进入安装目录：cd C:\mysql\mysql-8.0.13\bin
+ 初始化数据库：mysqld --initialize --console （初始密码:root@localhost: APWCY5ws&hjQ）
+ 数据库安装：mysqld install
+ 数据库启动：net start mysql
+ 数据库登录：mysql -u root -p
+ 数据库退出：exit 或 quit （mysq>）
+ 数据库停止：net stop mysql

## 相关技术栈

+ vue + vue-router + less + axios
+ node + koa2 + koa-router
+ mysql + sequelize
+ nginx + pm2

## 测试

> clone

```bash
git clone https://github.com/nickrogit/stu-koa2blog-server
```

> install

```bash
cd stu-koa2blog-server

npm install
```

> start

```bash
npm start # 打开 http://localhost:3000/articles
```

注意：

+ 测试前先在 【lib】—> 【config.js】配置数据库基本信息
+ `sql` 文件在 `sql` 目录下
+ 接口请求路径可在 【routes】-> 【index.js】下查看

如果在测试期间遇到什么问题, 可留言给我, 我会及时回复, 感谢～～


