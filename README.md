# mui-demo
> ### mui的一些组件
1. 窗口管理及数据传递
2. 预加载、自定义事件
3. 上拉加载、下拉刷新
4. NativeUI 
5. 沉浸式状态栏
6. 手势事件
7. 字体图标
8. 面向对象、原型链
9. es6语法

> ### 注意
1. plus 只在真机中支持 普通浏览器不支持
2. 涉及到html5+的api 写在mui.plusReady(function(){})中

## learn Markdown
1. 表格1

| 请求场景 | url   | params   | data |
|:---------|:------|:---------|:-----|
| 登录     | /login| username | wms  |

* 表格1-1

| 场景/p/d| 地址/参数1/返回值1    								   | 参数2/值2	 	| 参数2/值3	|
|---------|--------------------------------------------------------|----------------|-----------|
| 登录    | /login												   |				|			|
| params  | username 											   | password 		| systemId  |
| data 	  | resources 											   | wms     		| sessionId |
| 收货作业|														   |				|		    |
|		  |														   |				|			|
| 搜索条件| /find/resource 										   |				|           |
| params  | id													   | wmsCode 		| SESSION   |
| data	  | url													   | propertyShares |		    |
|		  |														   |				|			|
| 搜索结果| /takein/find/wmsBillList							   | 				|			|
| params  | query{dateStart,dateEnd,pageNo,pageSize,wmsNo,wmsCode} | SESSION   		|			|
| data	  | data												   |				|			|
|		  |														   |				|			|

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
    <td rowspan="3">登录</td>
    <td rowspan="3">/login</td>
    <td>username</td>
    <td>resources</td>
  </tr>
  <tr>
    <td>password</td>
    <td>wms</td>
  </tr>
  <tr>
    <td>systemId</td>
    <td>sessionId</td>
  </tr>
  <tr>
    <td rowspan="3">搜索条件</td>
    <td rowspan="3">/find/resource</td>
    <td>id</td>
    <td>url</td>
  </tr>
  <tr>
    <td>wmsCode</td>
    <td rowspan="2">propertyShares</td>
  </tr>
  <tr>
    <td>SESSION</td>
  </tr>
</table>

## DEMO
> learn Markdown

> learn Markdown
>> learn1

>> learn2

>> learn3
>>> learn4

1. A
  * a
2. B
  * b
3. C
  * c
  * c