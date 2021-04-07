# 2020.11.23

## 目标

- 能够说出Web APIs阶段与JavaScript语法阶段的关联性
- 能够说出什么是API
- 能够说出什么是Web APl

## 1.Web APls和JS基础关联性

### 1.1 js的组成

![image-20201117204246682](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201117204246682.png)

### 1.2 js 基础阶段以及web API阶段

![image-20201117204359975](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201117204359975.png)

Js基础学习ECMAScript 基础语法为后面作铺垫，Web APIs是Js 的应用，大量使用Js 基础语法做交互效果

## 2.API和Web API

### 2.1 API
API ( Application Programming Interface,应用程序编程接口)是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。
简单理解︰API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。

### 2.2 Web API
Web API是浏览器提供的一套操作浏览器功能和页面元素的API(BOM和DOM)。现阶段我们主要针对于浏览器讲解常用的API，主要针对浏览器做交互效果。
比如我们想要浏览器弹出一个警示框，直接使用alert(‘弹出’)

MDN详细APl : https://developer.mozilla.org/zh-CN/docs/Web/API

因为Web API很多，所以我们将这个阶段称为Web APls

### 2.3 API和Web API总结

1.API是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现

2.Web API主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。

3.WebAPI一般都有输入和输出（函数的传参和返回值)，WebAPI很多都是方法（函数)

4.学习Web API可以结合前面学习内置对象方法的思路学习

# DOM

## 目标

- 能够说出什么是 DOM
- 能够获取页面元素
- 能够给元素注册事件
- 能够操作 DOM元素的属性
- 能够创建元素
- 能够操作DOM节点

## 1.DOM 简介

文档对象模型(Document Object Model，简称DOM)，是W3C组织推荐的处理可扩展标记语言(HTML或者XML)的标准编程接口。

W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。

![image-20201117205206255](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201117205206255.png)

- 文档:一个页面就是一个文档，DOM中使用document表示
- 元素:页面中的所有标签都是元素，DOM中使用element表示
- 节点∶网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示

DOM把以上内容都可看做对象

## 2.获取元素

### 2.1 如何获取页面元素
DOM在我们实际开发中主要用来操作元素。我们如何来获取页面中的元素呢?
获取页面中的元素可以使用以下几种方式:
根据ID获取
根据标签名获取
通过HTML5新增的方法获取特殊元素获取

## 2.2 根据ID获取

使用getElementByld(方法可以获取带有ID的元素对象。

```js
<script>
  //1.因为我们文档页面从上往下加载，所以先的有标签 所以我们script写到标签下面
  //2.get 获得element 元素by 通过 驼峰命名法
  //3.参数id是大小写敏感的字符串
  //4.返回的一个元素对象
  var timer = document.getElementById('time');
  console.log(timer);  //element对象    <div id="time">2019-9-9</div>
  console.log(typeof timer); //object
</script>
```

### 2.3 根据标签名获取

使用getElementsByTagName()方法可以返回带有指定标签名的对象的集合。

```js
document.getElementsByTagName ( '标签名") ;
```

注意︰
1．因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历。
2．得到元素对象是动态的

```js
<script>
  //1.返回的是  获取过来元素对象的集合  以伪数组的形式存储的
  var lis = document.getElementsByTagName('li');
  console.log(lis);
  console.log(lis[0]);
  //2.我们想要一次打印里面的元素对象我们可以采取遍历的方式
  for (var i = 0; i < lis.length; i++) {
    console.log(lis[i]);
  }
  
  //3.element.getElementsByTagName() 可以得到这个元素里面的某些标签
  var nav = document.getElementById('nav'); //这个获取nav元素
  var navlis = nav.getElementsByTagName('li');
  console.log(navlis);
</script>
```

### 2.4 通过HTML5新增的方法获取

```js
1. document.getElementsByClassName( '类名');
//根据类名返回元素对象集合
2. document.qruerySelector ( '选择器');
   //根据指定选择器返回第一个元素对象
3. document.queryselectorAl1("选择器');
   //根据指定选择器返回
```

```js
<script>
  //1.getElmentsByClassName 根据类名获得某些元素集合
  var boxs = document.getElementsByClassName('box');
  console.log(boxs);
  //2.querySelector 返回指定选择器的第一个元素对象  切记  里面的选择器需要加符号 .box #nav
  var firstBox = document.querySelector('.box');
  console.log(firstBox);
  var nav = document.querySelector('#nav');
  console.log(nav);
  var li = document.querySelector('li');
  console.log(li);
  //3.querySelectorAll()返回指定选择器的所有元素对象的集合
  var allBox = document.querySelectorAll('.box');
  console.log(allBox);
  var lis = document.querySelectorAll('li');
  console.log(lis);
</script>
```

### 2.5 获取特殊元素（body, html）

获取body元素

```js
document.body //返回body元素对象
```

获取html元素

```js
document.documentElement  //返回html元素对象
```

```js
<script>
  //1.获取body元素
  var bodyEle = document.body;
  console.log(bodyEle);
  console.dir(bodyEle);
  //2.获取html元素
  //var htmlEle = document.html;
  var htmlEle = document.documentElement;
  console.log(htmlEle);
</script>
```

# 2020.11.24

## 3.事件基础

### 3.1 事件概述

JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript侦测到的行为。简单理解∶触发---响应机制。
网页中的每个元素都可以产生某些可以触发JavaScript的事件，例如，我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作。

```html
<body>
  <button id="btn">唐伯虎</button>
  <script>
    //点击一个按钮  弹出对话框
    // 1.事件是由三部分组成 事件源  事件类型  事件处理程序  我们也称为事件三要素
    //（1） 事件源 事件被触发的对象 按钮
    var btn = document.getElementById('btn');
    //(2)事件类型  如何触发  什么事件  比如鼠标点击（onclick） 还是鼠标经过  还是键盘按下
    // (3) 事件处理程序  通过一个函数赋值的方式完成
    btn.onclick = function() {
      alert('点秋香');
    }
  </script>
</body>
```

### 3.2执行时间的步骤

1.获取事件源

2.注册事件（绑定事件）

3.添加事件处理程序（采取函数赋值形式）

### 3.3 常见的鼠标事件

![image-20201118104358622](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201118104358622.png)

```html
<body>
  <div>123</div>

  <script>
    //点击div  控制台输出  我被选中l
    //1.获取事件源
    //2.绑定事件 注册时间
    //3.添加事件处理程序
    var div = document.querySelector('div');
    div.onclick = function () {
      console.log("我被选中了");
    }

  </script>
</body>
```

## 4.操作元素

js的DOM操作可以改变网页内容、结构和样式，我们可以利用DOM操作元素来改变元素里面的内容、属性等。注意以下都是属性

### 4.1 改变元素内容

```js
element.innerText
```

从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉

```js
element.innerHTML
```

起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

```html
<body>
  <button>按钮</button>
  <div>某个时间</div>
  <p>123</p>
  <script>
    //当我们点击了按钮，div里面的文字会发生变化
    //1.获取元素
    var btn = document.querySelector('button');
    var div = document.querySelector('div');
    //2.注册事件
    btn.onclick = function () {
      div.innerText = getDate();
    }
    //3.执行事件
    function getDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var dates = date.getDate();
      var day = date.getDay();  //第一次运行报错原因是 date命名重复
      arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      return "今天是" + year +"年" + month + "月" + dates + "日 "  + arr[day]; //今天是2020年11月13日 星期五
    }
    
    //也可以不用添加事件
    var p = document.querySelector('p');
    p.innerText = getDate();
    
  </script>
</body>
```

区别

```html
<body>
  <div></div>
  <p>
    我是文字
    <span>123</span>
  </p>
  <script>
    // innerText 与 innerHTML的区别
    //1.innerText不识别html标签 非标准 去除空格和换行
    var div = document.querySelector('div');
    div.innerText = '<strong>今天是：</strong> 2020-11-18'; //<strong>今天是：</strong> 2020-11-18
    //2.innerHTML识别html标签 w3c标准  保留空格和换行
    // div.innerHTML = '<strong>今天是：</strong> 2020-11-18'; //今天是： 2020-11-18
    //这两个属性是可读写的  可以获得元素里面的内容
    var p = document.querySelector('p');
    console.log(p.innerText);  //我是文字 123
    console.log(p.innerHTML); //我是文字  <span>123</span>
  </script>
</body>
```

### 4.2 常用元素的属性操作

1.innerText、innerHTML改变元素内容

2.src、href

3.id、alt、title

```html
<body>
  <button id="ldh">刘德华</button>
  <button id="zxy">张学友</button>
  
  <img src = "images/ldh.jpg" alt = "" >
  <script>
    var ldh = document.getElementById('ldh');
    var zxy = document.getElementById('zxy');
    var img = document.querySelector('img');
    ldh.onclick = function () {
      img.src = 'images/ldh.jpg';
      img.title = '刘德华'
    }
    zxy.onclick = function () {
      img.src = 'images/zxy.jpg';
      img.title = '张学友';
    }
  </script>
</body>
```

**案例：分别显示不同图片，显示不同问候语**

根据不同时间，页面显示不同图片，同时显示不同的问候语。

如果上午时间打开页面，显示上午好，显示上午的图片。

如果下午时间打开页面，显示下午好，显示下午的图片。

如果晚上时间打开页面，显示晚上好，显示晚上的图片。

```js
<body>
<!-- //根据系统不同时间来判断，所以需要用到日期内置对象-->
<!-- //利用多分支语句来设置不同的图片-->
<!-- //需要一个图片，并且根据时间修改图片，就需要用到操作元素src属性-->
<!-- //需要一个div元素，显示不同问候语，修改元素内容即可-->

  <img src = "" alt = "">
  <div></div>
  <script>
    var img = document.querySelector('img');
    var div = document.querySelector('div');
    //1.得到当前的小时数
    var date = new Date();
    var h = date.getHours();
    //3.判断小时数改变图片和文字信息
    if (h < 12) {
      img.src = 'images/morning.gif';
      div.innerHTML = '早上好';
    }else if (h < 18) {
      img.src = 'images/noon.jpg';
      div.innerHTML = '下午好';
    }else {
      img.src = 'images/evening.jpg';
      div.innerHTML = '晚上好';
    }
  </script>
</body>
```

# 2020.11.25

### 4.3 表单元素的属性操作

利用DOM可以操作如下表单元素的属性：

type   value   checked   selected   disabled

```html
<body>
  <button>按钮</button>
  <input type = "text" value="请输入内容">
  <script>
    //1.获取元素
    var btn = document.querySelector('button');
    var input = document.querySelector('input');
    //2.注册事件  处理程序
    btn.onclick = function() {
      //input.innerHTML = '点击了'     innerHTML这个是修改普通盒子的  比如div标签里面的内容
      //表单里面的值  文字内容是通过value来修改的
      input.value = '被点击了';
      //如果想姚某个表单被禁用 不能再点击disabled 我们想要这个按钮button禁用
      btn.disabled = true;
      // 或者
      this.disabled = true;
      //this指向的是事件函数的调用者  btn
    }
  </script>

</body>
```

![image-20201118152845510](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201118152845510.png)

  核心思路︰点击眼睛按钮，把密码框类型改为文本框就可以看见里面的密码一个按钮两个状态，点击一次，切换为文本框，继续点击一次切换为密码框
算法︰利用一个flag变量，来判断flag的值，如果是1就切换为文本框，flag设置为0，如
果是0就切换为密码框，flag设置衣1

```html
<style>
    .box {
      position: relative;
      width: 400px;
      border-bottom: 1px solid #ccc;
      margin: 10px auto;
    }
    .box input {
      width: 370px;
      height: 30px;
      border: 0;
      outline: none;
    }
    .box img {
      position: absolute;
      top: 10px;
      right: 30px;
      width: 24px;
    }
    
    .box img {
      width: 24px;
    }
  </style>
</head>
<body>
  <div class="box">
    <label for = "">
      <img src = "images/close.png" alt = "" id="eye">
    </label>
    <input type = "password" id="pwd">
  </div>
  <script>
    //1.获取元素
    var eye = document.getElementById('eye');
    var pwd = document.getElementById('pwd');
    //2.注册事件  处理程序
    var flag = 0;
    eye.onclick = function () {
      if (flag == 0) {
        pwd.type = 'text';
        eye.src = 'images/open.png';
        flag = 1;
      }else {
        pwd.type = 'password';
        eye.src = 'images/close.png';
        flag = 0;
      }
    }
  </script>
</body>
```

### 4.4 样式属性操作

可以通过js修改元素的大小  颜色 位置等样式

1.element.style   行内样式操作

2.element.className  类名样式操作

注意：

1.js里面的样式采取驼峰命名法  比如 fontsize backgroundColor

2.js修改style 样式操作，产生的是行内样式，css权重比较高

```html
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: pink;
    }
  </style>
</head>
<body>
  <div></div>
  <script>
    //1.获取元素
    var div = document.querySelector('div');
    //2.注册事件  处理程序
    div.onclick = function () {
      // div.style 里面的属性采取驼峰命名法
      this.style.backgroundColor = 'purple';
      this.style.width = '250px';
    }
  </script>
</body>
```

案例：隐藏二维码

```html
  <style>
    .box {
      position: relative;
      width: 74px;
      height: 88px;
      border: 1px solid #cccccc;
      margin: 100px auto;
      font-size: 12px;
      text-align: center;
      color: #ff4400;
    }
    
    .box img {
      width: 60px;
      margin-top: 5px;
    }
    
    .close-btn {
      position: absolute;
      top: -1px;
      left: -16px;
      width: 14px;
      height: 14px;
      border: 1px solid #cccccc;
      line-height: 14px;
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box">
    淘宝二维码
    <img src = "images/taobao.png" alt = "">
    <i class="close-btn">x</i>
  </div>
  <script>
    //1.获取元素
    var btn = document.querySelector('.close-btn');
    var box = document.querySelector('.box');
    //2.注册事件 程序处理
    btn.onclick = function () {
      box.style.display = 'none';
    }
  </script>
</body>
```

显示效果

![image-20201118203404511](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201118203404511.png)

# 2020.11.26

案例：显示隐藏文本框内容

当属标点击文本框时 里面的默认文字隐藏，当属标离开文本框时，里面的文字显示。

```html
  <style>
    input {
      color: #999;
    }
  </style>
</head>
<body>
  <input type = "text" value="手机">
  <script>
    //1.获取元素
    var text = document.querySelector('input');
    //2.注册事件  获得焦点事件  onfocus
    text.onfocus = function () {
      if (this.value === '手机') {
        this.value = '';
      }
      //获得焦点需要吧文本框里面的文字颜色变黑
      this.style.color = '#333';
    }
    text.onblur = function () {
      if (this.value === '') {
        this.value = '手机';
      }
      //失去焦点需要吧文本框里面的文字颜色变浅色
      this.style.color = '#999';
    }
  </script>
  
</body>
```

#### 注意：

1.如果样式修改较多，可以采用操作类名方式更改元素样式

2.class因为是个保留字 ，因此使用className来操作元素类名属性

3.className会直接更改元素的类名，会覆盖原先的类名。

```html
  <style>
    div {
      width: 100px;
      height: 100px;
      background-color: pink;
    }
    
    .change {
      background-color: purple;
      color: #fff;
      font-size: 25px;
      margin-top: 100px;
    }
  </style>
</head>
<body>
  <div class="first">文本</div>
  <script>
    //1.使用element.style获得修改元素样式  如果样式比较少 或者 功能简单的情况下使用
    var test = document.querySelector('div');
    test.onclick = function () {
      //如果使用element。style需要每个都改变
      //修改当前元素的类名，可以一次性修改
      //2.我们可以通过修改元素的className更改元素的样式  适合于样式较多或者功能复杂的情况
      // this.className = 'change';
      //3.如果想保留原先的类名 可以多类名选择器
      this.className = 'first change';
    }
  </script>
</body>
```

案例；密码框格式显示错误信息

用户如果离开密码框，里面输入个数不是6-16.则提示错误信息，否则提示输入正确信息。

首先判断的事件是表单失去焦点onblur
②如果输入正确则提示正确的信息颜色为绿色小图标变化
③如果输入不是6到16位，则提示错误信息颜色为红色小图标变化

```html
  <style>
    div {
      width: 600px;
      margin: 10px auto;
    }
    .message {
      display: inline-block;
      font-size: 12px;
      color: greenyellow;
      background: url(images/message.png) no-repeat left center;
      padding-left: 20px;
    }
    
    .wrong {
      color: red;
      background-image: url("images/error.png");
    }

    .right {
      color: greenyellow;
      background-image: url("images/right.png");
    }
    
  </style>
</head>
<body>
  <div class="register">
    <input type = "password" class="ipt">
    <p class="message">请输入6-16密码</p>
  </div>
  <script>
    //首先判断的事件是表单失去焦点
    //如果输入正确则提示正确的信息颜色为绿色小图标变化
    //如果输入不是6-16位。则提示错误信息颜色为红色 小图标变化
    //因为里面变化样式较多，我们采取className修改样式
    //1.获取元素
    var ipt = document.querySelector('.ipt');
    var message = document.querySelector('.message');
    //2.注册事件  失去焦点
    ipt.onblur = function () {
      //根据表单里面值的长度 ipt.value.length
      if (this.value.length < 6 || this.value.length > 16) {
        message.className = 'message wrong';
        message.innerHTML = '您输入的位数不对要求6-16位';
      }else {
        message.className = 'message right';
        message.innerHTML = '您输入的位数正确'
      }
    }
  </script>
</body>
```

总结

操作元素是Dom核心内容

![image-20201119115301662](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201119115301662.png)



### 4.5 排他思想

![image-20201119115332508](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201119115332508.png)

分析：

这个案例练习的是给一组元素注册事件给4个小图片利用循环注册点击事件
当我们点击了这个图片，让我们页面背景改为当前的图片
④核心算法︰把当前图片的src路径取过来，给body做为背景即可

```html
<body>
<!--点击那个按钮 那个按钮变成分色-->
  <div>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
  </div>
  <script>
    //1.获取所有按钮元素
    var btn = document.querySelectorAll('button');
    //btn 得到的是伪数组 里面的每一个元素 btns[i]
    for (var i = 0; i < btn.length; i++) {
      console.log(i);
      btn[i].onclick = function () {
        // console.log("按钮" + (i + 1) + "被点击");
        //(1)先把所有的按钮的背景颜色去掉
        for (var i = 0; i < btn.length; i++) {
          btn[i].style.backgroundColor = '';
        }
        //(2) 然后再把当前的元素背景颜色设置为pink
        this.style.backgroundColor = 'pink';
      }
    }
    //2.首先先排除其他人  然后才设置自己的样式 这种排除其他人的思想我们称为排他思想
  </script>
</body>
```

显示效果：

![image-20201119152001750](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201119152001750.png)

**案例分析：**

1.这个案例练习的是给一组元素注册事件

2.给4个小图片利用循环注册点击事件

3.当我们点击了这个图片，让我们页面背景改为当前的图片

4.核心算法︰把当前图片的src路径取过来，给body做为背景即可

```js
<script>
  //1.获取元素
  var imgs = document.querySelector('.baidu').querySelectorAll('img');
  //2.循环注册事件
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
      console.log(this.src); //this.src就是我们点击的图片路径
      //讲这个路径给body
      document.body.style.backgroundImage = 'url('+ this.src +')';
    }
  }
</script>
```

显示效果：

![image-20201119164620936](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201119164620936.png)



**案例：表格隔行变色**

- 用到新的鼠标事件鼠标经过onmouseover鼠标离开onmouseout
- 核心思路∶鼠标经过tr行，当前的行变背景颜色，鼠标离开去掉当前的背景颜色
- 注意:第一行( thead里面的行）不需要变换颜色，因此我们获取的是tbody里面的行

```js
<script>
  //1.获取元素 获取的是tbody里面所有的行
  var trs = document.querySelector('tbody').querySelectorAll('tr');
  //2.利用循环绑定注册事件
  for (var i = 0; i < trs.length; i++) {
    //鼠标经过事件 onmouseover
    trs[i].onmouseover = function () {
      this.className = 'bg';
    }
    trs[i].onmouseout = function () {
      this.className = '';
    }
  }
</script>
```

显示效果;

![image-20201119164253923](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201119164253923.png)

**案例**：表单全选取消全选案例

![image-20201119171923652](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201119171923652.png)



```js
<script>
  //1.全选和取消全选的做法：让下面所有复选框checked属性（选中状态） 跟随全选按钮即可
  //获取元素
  var j_cbAll = document.getElementById('j_cbAll');
  var j_tbs = document.getElementById('j_tb').getElementsByTagName('input'); //下面所有的复选框
  //注册事件
  j_cbAll.onclick = function () {
    for (var i = 0; i < j_tbs.length; i++) {
    j_tbs[i].checked = this.checked;
  }
  }
  //2.下面复选框需要全部选中  上面全选才能选中 做法：给下面所有复选框绑定点击事件，每次点击 都要循环查看
 for (var i = 0; i < j_tbs.length; i++) {
   j_tbs[i].onclick = function () {
     //flag控制全选按钮是否选中
      var flag = true;
      //每次点击下面的复选框都要循环检查这4个小按钮是否全被选中
      for (var i = 0; i < j_tbs.length; i++) {
        if (!j_tbs[i].checked) {
          flag = false;
          break; //退出for循环 这样可以提高执行效率  因为只要有一个没有选中  剩下的就无需循环判断了
        }
      }
      j_cbAll.checked = flag;
   }
   
 }
</script>
```

显示详情：

![image-20201119180749121](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201119180749121.png)

# 2020.11.30

### 4.6 自定义属性的操作

#### 1.获取属性值

- element.属性 获取属性值
- element.getAttribute('属性')；

区别

- element.属性 获取内置属性值（元素本身自带的属性值）
- element.getAttribute('属性')； 主要获取自定义的属性（标准） 我们程序员自定义的属性

#### 2.设置属性值

- element.属性=‘值’设置内置属性值。
- element.setAttribute('属性·，"值");

区别:

- element.属性设置内置属性值
- element.setAttribute( '属性');主要设置自定义的属性（标准)

#### 3. 移除属性

- element.removeAttribute('属性')；

```html
<body>
  <div id="demo" index="1" class="nav"></div>
  <script>
    var div = document.querySelector('div');
    //1.获取元素属性值
    // （1）element.属性
    console.log(div.id);
    //(2)element.getAttribute('属性') get得到获取attribute属性的意思  我们程序员自己添加的属性  称为自定义属性 index
    console.log(div.getAttribute('id'));
    console.log(div.getAttribute('index'));
    
    //2.设置元素属性值
    //（1）element.属性 = '值'
    div.id = 'test';
    div.className = 'navs';
    //(2)element.setAttribute('属性','值')；只要针对于自定义属性
    div.setAttribute('index', 2);
    div.setAttribute('class', 'footer'); //class特殊  这里面写的就是class 不是className
  </script>
</body>
```

**案例：tab栏切换**

当鼠标点击上面相应的选项卡（tab），下面内容跟随变换

```js
<script>
  //排他思想
  var lis = document.querySelector('.tab_list').querySelectorAll('li');
  var items = document.querySelectorAll('.item');
  //for循环绑定点击事件
  for (var i = 0; i < lis.length; i++) {
      lis[i].setAttribute('index', i);
      lis[i].onclick = function () {
       
       //1。实现模块选项卡  点击某一个 当前这一个的底色会是红色 其余不变 修改类名的方式
       //干掉所有的  其余的li清楚class这个类
        for (var i = 0; i < lis.length; i++) {
          lis[i].className = '';
        }
        //留下自己
        this.className = 'current';
        
        
        //2.下面的显示内容模块
       var index = this.getAttribute('index');
       console.log(index);
       // 让其与的item div隐藏
       for (var i = 0; i < items.length; i++){
         items[i].style.display = 'none';  //一开始错误  原因是将i写成index
       }
       //留下自己  让对应的item显示出来
       items[index].style.display = 'block';
     }
  }
</script>
```

显示效果：

![image-20201119215124751](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20201119215124751.png)

### 4.7 H5自定义属性

自定义属性目的:是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。
自定义属性获取是通过getAttribute(“属性')获取。
但是有些自定义属性很容易引起岐义,不容易判断是元素的内置属性还是自定义属性。
H5给我们新增了自定义属性:
#### 1.设置H5自定义属性
H5规定自定义属性data开头做为属性名并且赋值。
比如<div data index= "1" > </div>
或者使用JS设置
element.setAttribute( 'data-index' , 2)

#### 2.获取H5自定义属性
1.兼容性获取element.getAttribute( 'data-index' );

2.H5新增 element.dataset.index或者element.dataset[ index' ] ie 11才开始支持

```html
<body>
  <div getTime="20" data-index="2" data-list-name="andy"></div>
  <script>
    var div = document.querySelector('div');
    console.log(div.getAttribute('getTime'));
    div.setAttribute('data-time', 20);
    console.log(div.getAttribute('data-index'));
    console.log(div.getAttribute('data-list-name'));
    //h5新增的获取自定义属性的方法 只能获取data-开头的
    //dataset是一个集合里面存放了所有以data开头的自定义属性
    console.log(div.dataset);
    console.log(div.dataset.index); //data-index 2
    console.log(div.dataset['index']); //2
    //如果自定义属性里面有多个-连接的单词 我们获取的时候采取驼峰命名法 data-list-name
    console.log(div.dataset.listName);
    console.log(div.dataset['listName']);
  </script>
</body>
```



## 5.节点操作

### 5.1为什么学习节点操作

获取元素通常使用两种方式：

#### 1.利用DOM提供的方法获取元素

- document.getElementById()
- document.getElementsByTagName0
- document.querySelector等
- 逻辑性不强、繁琐

#### 2.利用节点层级关系获取元素

- 利用父子兄节点关系获取元素
- 逻辑性强,但是兼容性稍差

这两种方式都可以获取元素节点，后面都会使用 但是节点操作更简单

### 5.2节点概述

网页中的所有内容都是节点(标签、属性、文本.注释等) ,在DOM中,节点使用node来表示。
HTML DOM树中的所有节点均可通过JavaScript进行访问,所有HTML元素(节点)均可被修改,也可以创建或删除。

### 5.3 节点层级

利用DOM树可以把节点划分为不同的层级关系，常见的是父子兄层级关系

![image-20201120113642747](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20201120113642747.png)

**1.父级节点**

```
node.parentNode
```

- parentNode属性可返回某节点的父节点,注意是最近的-个父节点
- 如果指定的节点没有父节点则返回null

```html
<body>
  <div class="demo">
    <div class="box">
      <span class="erweima">x</span>
    </div>
  </div>

  <script>
    //1.父节点 parentNode
    var erweima = document.querySelector('.erweima');
    // var box = document.querySelector('.box');
    //得到的是li元素最近的父级节点（亲爸爸） 如果找不到父节点就返回为null
    console.log(erweima.parentNode);
  </script>
</body>
```

**2.子节点**

```
1.parentNode.childNode(标准)
```

parentNode.childNode返回包含了指定节点的子节点集合，该集合为即时更新的集合。

注意:返回值里面包含了所有的子节点,包括元素节点,文本节点等。

如果只想要获得里面的元素节点,则需要专门处理。所以我们一般不提倡使用childNodes

```
3.parentNode.firstChild
```

firstChild返回第一个子节点,找不到则返回null.同样,也是包含所有的节点。

```
4.parentNode.lastChild
```

```
5.parentNode.firstElementChild
```


firstElementChild返回第一个子元素节点 ,找不到则返回null.

```
6.parentNode.las tElementChild
```

lastElementchild返回最后一个子元素节点 ,找不到则返回null.

注意:这两个方法有兼容性问题，IE9以上才支持。

```html
<body>
<!--    节点的优点-->
  <div>我是div</div>
  <span>我是span</span>
  <ul>
    <li>我是li</li>
    <li>我是li</li>
    <li>我是li</li>
    <li>我是li</li>
  </ul>
<script>
  //DOM提供的方法（API） 获取
  var ul = document.querySelector('ul');
  var lis = document.querySelectorAll('li');
  //1.子节点 childNodes 所有的子节点 包含元素节点 文本节点等
  console.log(ul.childNodes);
  console.log(ul.childNodes[0].nodeType);
  console.log(ul.childNodes[1].nodeType);
  //2.children获取所有的子元素节点 也是我们实际开发常用的
  console.log(ul.children);
</script>
</body>
```

```html
<body>
  <ol>
    <li>我是li</li>
    <li>我是li</li>
    <li>我是li</li>
    <li>我是li</li>
  </ol>
  <script>
    var ol = document.querySelector('ol');
    //1.firstChild 第一个子节点  不管是文本节点还是元素节点
    console.log(ol.firstChild); //#text
    console.log(ol.lastChild); //#text
    //2.firstElementChild 返回第一个子元素节点 ie9才支持
    console.log(ol.firstElementChild);
    console.log(ol.lastElementChild);
    //3.实际开发的写法  既没有兼容性问题又返回第一个子元素
    console.log(ol.children[0]); //伪数组的第一个元素
    console.log(ol.children[ol.children.length - 1]); //伪数组的最后一个元素
  </script>
</body>
```

# 2020.12.1

### 案例：下拉菜单

```html
<body>
  <ul class="nav">
    <li>
      <a href = "#">微博</a>
      <ul>
        <li>
          <a href = "">私信</a>
        </li>
        <li>
          <a href = "">评论</a>
        </li>
        <li>
          <a href = "">@我</a>
        </li>
      </ul>
    </li>
    
  </ul>
  <script>
    //1.获取元素
    var nav = document.querySelector('.nav');
    var lis = nav.children;// 得到四个小li
    //2.循环注册实际
    for (var i = 0; i < lis.length; i++) {
      lis[i].onmouseover = function () {
        this.children[1].style.display = 'block';
      }
      lis[i].onmouseout = function () {
        this.children[1].style.display = 'none';
      }
     }
  </script>
</body>
```

显示效果：

![image-20201125213104819](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20201125213104819.png)![image-20201125213115728](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20201125213115728.png)

**3.兄弟节点**

```
1.node.nextsibling
```


nextsibling返回当前元素的下一个兄弟节点,找不到则返回nu1l.同样,也是包含所有的节点。

```
2.node.previousSibling
```


previoussibling返回当前元素上-个兄弟节点,找不到则返回nu1l。同样,也是包含所有的节点。

```
3.node.nextElementsibling
```


nextElementsibl ing返回当前元素下一个兄弟元素节点,找不到则返回null.

```
4.node.previousElementsibling
```

previousElementsibl ing返回当前元素上一个兄弟节点,找不到则返回null.

注意:这两个方法有兼容性问题，IE9 以上才支持。

问:如何解决兼容性问题?

答:自己封装一个兼容性的函数

```
function getNextElementsibl ing (element) {
var el = element ;
while (el = el.nextSibling) {
if (el.nodeType == 1) {
return el;
}
return null;
}
```

```html
<body>
  <div>我说div</div>
  <span>我是span</span>
  <script>
    var div = document.querySelector('div');
    //1.nextSibling 下一个兄弟节点 包含元素节点和文本节点
    console.log(div.nextSibling);
    console.log(div.previousSibling);

    //2.nextElementSibling 得到下一个兄弟元素节点
    console.log(div.nextElementSibling);
    console.log(div.previousSibling);
  </script>
</body>
```



### 5.4创建节点

```
document.createElement (' tagName ")
```

document. createElement()方法创建由tagName 指定的HTML 元素。

因为这些元素原先不存在。是根据我们的需求动态生成的,所以我们也称为动态

建元素节点。

**添加节点**

```
1.node.appendChild (child)
```


node . appendchild()方法将一个节点添加到指定父节点的子节点列表末尾。类似于css里面的
after伪元素。

```
2.node.insertBefore (child,指定元素)
```

node. insertBefore ()方法将- -个节点添加到父节点的指定子节点前面。类似于css里面的before伪元素。

```html
<body>
  <ul>
    <li>123</li>
  </ul>
  <script>
    //1.创建节点元素节点
    var li = document.createElement('li');
    //2.添加节点 node.appendChild(child) node 父级 child 子级  后面追加元素 类似于数组中的push
    var ul = document.querySelector('ul');
    ul.appendChild(li); //在后面
    //3.添加节点 node.insertBefore(child,指定元素)；
    var lili = document.createElement('li');
    ul.insertBefore(lili, ul.children[0]); //在前面
    //4.我们想要页面添加一个新元素： 1.创建元素  2.添加元素
  </script>
</body>
```



### 5.5 删除节点

```
node.removeChild(child)
```

node.removeChild()方法从DOM中删除一个子节点，返回删除的节点。

案例：简单版发布留言以及删除留言案例

```html
<body>
  <!--核心思路︰点击按钮之后，就动态创建一个li，添加到ul里面。-->
  <!--创建li的同时，把文本域里面的值通过li.innerHTML赋值给li-->
  <!--如果想要新的留言后面显示就用appendChild如果想要前面显示就用insertBefore-->
  <textarea name = "" id = "" cols = "30" rows = "10"></textarea>
  <button>发布</button>
  <ul></ul>
 
  <script>
    //1.获取元素
    var btn = document.querySelector('button');
    var text = document.querySelector('textarea');
    var ul = document.querySelector('ul');
    //2.注册事件
    btn.onclick = function () {
      if (text.value == '') {
        alert('您没有输入内容');
        return false;
      }else {
        //(1) 创建元素
        var li = document.createElement('li');
        //先有li 才能赋值
        li.innerHTML = text.value + '<a href="javascript:;">删除</a>';
        text.value = "";
        //(2) 添加元素
        ul.insertBefore(li, ul.children[0]);
        //(3)删除元素 删除的是当前连接的li 它的父亲
        // 当我们把文本域里面的值赋值给li的时候，多添加一个删除的链接
        // 需要把所有的链接获取过来，当我们点击当前的链接的时候，
        // 删除当前链接所在的li3阻止链接跳转需要添加javascriptvoid(0);或者 javascript;

        var as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
          as[i].onclick = function () {
            //node.removeChild(child)； 删除的是li  当前a的父亲
            ul.removeChild(this.parentNode);
          }
        }
      }
    }
  </script>
</body>
```

显示详情

![image-20201125224629497](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201125224629497.png)

# 2020.12.2

### 5.6 复制节点（克隆节点）

node.cloneNode()

node.cloneNode()方法返回调用该方法的节点的一个副本，称为克隆节点。

注意：

1.如果括号参数为空或者为false，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。

2.如果括号参数为true，则是深度拷贝，会复制节点本身以及里面所有的子节点。

```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
    var ul = document.querySelector('ul');
    //1.node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
    //2.node.cloneNode(true); 括号为true 深拷贝 复制标签以及里面的内容
    var lili = ul.children[0].cloneNode(lili);
    ul.appendChild(lili);
  </script>
</body>
```

### 5.7 案例：动态生成表格

![image-20201125231316446](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201125231316446.png)

```html
<body>
  <table cellspacing="0">
    <thead>
      <tr>
        <th>姓名</th>
        <th>科目</th>
        <th>成绩</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
    
    </tbody>
  </table>
  <script>
    var datas = [{
      name: '张三',
      subject: 'JavaScript',
      score: 100
    },{
      name: '李四',
      subject: 'JavaScript',
      score: 98
    },{
      name: '明玉',
      subject: 'JavaScript',
      score: 99
    },{
      name: '宏利',
      subject: 'JavaScript',
      score: 88
    }];
    //2.往tbody里面创建行： 有几个人（通过数组的长度） 我们就创建几行
    var tbody = document.querySelector('tbody');
    for (var i = 0; i < datas.length; i++) {
      //创建tr行
      var tr = document.createElement('tr');
      tbody.appendChild(tr);
      //行里面创建单元格  td单元格的数量取决于每个对象里面属性个数  for循环遍历对象 datas[i]
      for (var k in datas[i]) {
        //创建单元格
        var td = document.createElement('td');
        //把对象里面的属性值给td
        td.innerHTML = datas[i][k];
        tr.appendChild(td)
      }
      //3.创建由删除2个字的单元格
      var td = document.createElement('td');
      td.innerHTML = '<a href = "javascript:;">删除</a>'
      tr.appendChild(td);

      var as = document.querySelectorAll('a');
      for (var i = 0; i < as.length; i++) {
        as[i].onclick = function () {
          //点击a  删除当前a所在的行（a标签爸爸的爸爸）
          tbody.removeChild(this.parentNode.parentNode)
        }
      }
    }

  </script>
</body>
```

### 5.8 三种状态创建元素区别

- document.write()
- element.innerHTML
- document.createElment()

```html
<body>
  <button>点击</button>
  <p>abc</p>
  <div class="inner"></div>
  <div class="create"></div>
  
  <script>
    //三种创建元素方式区别
    //1.document.write()  创建元素  如果页面文档流加载完毕  再调用这句话会导致页面重绘
    // var btn = document.querySelector('button');
    // btn.onclick = function () {
    //   document.write('<div>123</div>'); //输出没有之前的内容了
    // }
    //2.innerHTML创建元素
    var inner = document.querySelector('.inner');
    inner.innerHTML = '<a href = "">百度</a>';
    //3.document.createElement()创建元素
    var create = document.querySelector('.create');
    var a = document.createElement('a');
    create.appendChild(a);

  </script>
</body>
```

区别

1. document.write是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
2. innerHTMT是将内容写入某个DOM节点，不会导致页面全部重绘
3. innerHTML创建多个元素效率更高(不要拼接字符串，采取数组形式拼接），结构稍微复杂
4. createElement()创建多个元素效率稍低一点点，但是结构更清晰
5. 总结:不同浏览器下，innerHTMm效率要比 creatElement高

```html
<script>
  function fn() {
    var d1 = +new Date();
    var array = [];
    for (var i = 0; i < 1000; i++) {
      array.push('<div style="width: 100px; height: 2px; border: 1px solid blue;"></div>')
    }
    document.body.innerHTML = array.join('');
    var d2 = +new Date();
    console.log(d2 - d1);// 2秒
  }
  fn()
</script>
```

## 6 DOM重点核心

文档对象模型(Document Object Model，简称DOM )，是W3C组织推荐的处理可扩展标记语言(HTML或者XML)的标准编程接口。
W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。
1.对于JavaScript，为了能够使JavaScript操作HTML，JavaScript就有了一套自己的dom编程接口。

2.对于HTML, dom使得html形成一棵dom树.包含文档、元素、节点

>  关于dom操作，我们主要针对于元素的操作。主要有创建、增、删、改、查、属性操作、事件操作。

### 6.1 创建

```
1. document.write
2. innerHTML
3. createElement

```

### 6.2 增

1.appendChild

2.insertBefore

### 6.3 删

1.removeChild

### 6.4改
主要修改dom的光素属性，dom元素的内容、属性,表单的值等
1．修改元素属性: src、href、title等

2．修改普通元素内容: innerHTML、 innerText

3．修改表单元素: value、type、disabled等

4．修改元素样式: style、className

### 6.5查
主要获取查询dom的元素

1.DOM提供的API方法: getElementByld、getElementsByTagName 古老用法不太推荐

2.H5提供的新方法:querySelector、querySelectorAll提倡

3.利用节点操作获取元素:父(parentNode)、子(children)、

兄(previousElementSibling、nextElementSibling)提倡

### 6.6属性操作
主要针对于自定义属性。
1.setAttribute :设置dom的属性值2.getAttribute:得到dom的属性值
3.removeAttribute移除属性

### 6.7事件操作

给元素注册事件，采取事件源.事件类型=事件处理程序

![image-20201126114111810](E:\LJOK\前端学习资料\学习视频以及资料\笔记\js学习笔记\image-20201126114111810.png)