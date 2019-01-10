# koa+mysql后台

[博客线上地址](http://www.cykspace.com)

博客地址：[cykspace](https://github.com/chenyinkai/cykspace)

博客后台：[cykspace-node](https://github.com/chenyinkai/cykspace-node)

如果觉得还行的话, 欢迎给个 `star` 哈. 感谢～～

> 由于不会设计, 博客主题是模仿 [hexo-theme-next](https://github.com/iissnan/hexo-theme-next) 的布局样式, 感谢作者的开源分享.

## 数据库相关

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

## 未来可能加入

+ 后台管理
+ 评论
+ 网易云音乐
+ 页面数据可视化统计
+ ...

## 测试

> clone

```bash
git clone https://github.com/nickrogit/stu-koa2blog-server
```

> install

```bash
cd koa-mysql-blog

npm install
```

> start

```bash
npm start # 打开 http://localhost:3000/v1/articles
```

注意：

+ 测试前先在 【lib】—> 【config.js】配置数据库基本信息
+ `sql` 文件在 `sql` 目录下
+ 接口请求路径可在 【routes】-> 【index.js】下查看

如果在测试期间遇到什么问题, 可留言给我, 我会及时回复, 感谢～～


