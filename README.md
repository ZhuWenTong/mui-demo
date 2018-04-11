[TOC]
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
### 表格1
| 请求场景 | url | params | data |
|:--------|:----|:-------|:-----|
| 登录     | /login| username | wms |

### HTML生成表格
<table>
  <tr>
    <th>请求场景</th>
    <th>url</th>
    <th>params</th>
    <th colspan="2">data</th>
  </tr>
  <tr>
    <td rowspan="3">登录</td>
    <td rowspan="3">/login</td>
    <td>username</td>
    <td colspan="2">resources</td>
  </tr>
  <tr>
    <td>password</td>
    <td colspan="2">wms</td>
  </tr>
  <tr>
    <td>systemId</td>
    <td colspan="2">sessionId</td>
  </tr>
</table>