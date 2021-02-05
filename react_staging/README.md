# React开发重点记录

## 1. vscode中react快捷模板生成

```text
    ES7 React/Redux/GraphQL
```

## 1.1 生成class组件快捷模板

```text
rcc
```

## 2. react中组件化编码流程 （通用）

+ 拆分组件：拆分页面，抽取组件
+ 实现静态组件：使用组件实现静态页面效果
+ 实现动态组件
    + 动态显示初始化数据
        + 数据类型
        + 数据名称
        + 数据存储位置
    + 交互添加

## 3. todoList案例相关知识点

```text
1. 拆分组件、实现静态组件，注意：className、style的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中?
  -- 某个组件使用：放在其自身的state中
  -- 某些组件使用：放在他们共同的父组件state中（状态提升）
3. 关于父子直接通信：
  1. 【父组件】给【子组件】传递数据：通过props传递
  2. 【子组件】给【父组件】传递数据：通过props传递，需要父组件提供给子组件一个函数
4. 注意defaultChecked和checked的区别，类似操作还有defaultValue和value
5. 状态在哪里，操作状态的方法就在哪里
```

## 4.react配置脚手架代理

### 方法一

> 在package.json中追加如下配置

```json
{
  "proxy": "http://localhost:5000"
}
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## 5. github搜索案例

```text
1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
	2.ES6小知识点：解构赋值+重命名
				let obj = {a:{b:1}}
				const {a} = obj; //传统解构赋值
				const {a:{b}} = obj; //连续解构赋值
				const {a:{b:value}} = obj; //连续解构赋值+重命名
	3.消息订阅与发布机制
				1.先订阅，再发布（理解：有一种隔空对话的感觉）
				2.适用于任意组件间通信
				3.要在组件的componentWillUnmount中取消订阅
	4.fetch发送请求（关注分离的设计思想）
				try {
					const response= await fetch(`/api1/search/users2?q=${keyWord}`)
					const data = await response.json()
					console.log(data);
				} catch (error) {
					console.log('请求出错',error);
				}
```
