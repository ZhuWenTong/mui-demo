# mui-demo
>mui的一些组件
1. 窗口管理及数据传递
2. 预加载、自定义事件
3. 上拉加载、下拉刷新
4. NativeUI 
5. plus 只在真机中支持 普通浏览器不支持
6. 涉及到html5+的api 写在mui.plusReady(function(){})中
7. 沉浸式状态栏
8. 手势事件
9. 字体图标
10. 面向对象、原型链
11. es6语法

## learn Markdown
1. 表格1

| 请求场景 | url   | params   | data |
|:---------|:------|:---------|:-----|
| 登录     | /login| username | wms  |

* 1. 表格1-1

| 场景/p/d | 地址/参数/值1	| 参数/值2		 | 参数/值3	 |
|----------|----------------|----------------|-----------|
| 登录     | /login			|				 |			 |
| params   | username 		| password 		 | systemId  |
| data 	   | resources 		| wms     		 | sessionId |
| 搜索条件 | /find/resource |				 |			 |
| params   | id				| wmsCode 		 | SESSION	 |
| data	   | url			| propertyShares |			 |

2. 表格2

| 请求场景 | url            | params   | data           |
|----------|----------------|----------|----------------|
| 登录     | /login         | username | resources      |
|          |                | password | wms            |
|          |                | systemId | sessionId      |
| 搜索条件 | /find/resource | id       | url            |
|          |                | wmsCode  | propertyShares |
|          |                | SESSION  |                |

3. HTML生成表格
<table>
  <tr>
    <th>请求场景</th>
    <th>url</th>
    <th>params</th>
    <th>data</th>
  </tr>
  <tr>
    <td>登录</td>
    <td>/login</td>
    <td>username</td>
    <td>resources</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>password</td>
    <td>wms</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>systemId</td>
    <td>sessionId</td>
  </tr>
  <tr>
    <td>搜索条件</td>
    <td>/find/resource</td>
    <td>id</td>
    <td>url</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>wmsCode</td>
    <td>propertyShares</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>SESSION</td>
    <td></td>
  </tr>
</table>