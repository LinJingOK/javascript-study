# 2020.12.28

### 目标

- 能够说出什么是BOM
- 能够知道浏览器的顶级对象window
- 能够写出页面加载事件以及注意事项能够写出两种定时器函数并说出区别
- 能够说出JS执行机制
- 能够使用location对象完成页面之间的跳转
- 能够知晓navigator对象涉及的属性
- 能够使用history提供的方法实现页面刷新

### 1.BOM概述

#### 1.1 什么是BOM

BOM( BrowserObject Model ) 即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window.

BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。

BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C

BOM最初是Netscape浏览器标准的一部分。

![image-20201229203208805](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20201229203208805.png)

#### 1.2 BOM的构成

BOM比DOM更大， 它包含DOM

![image-20201229203352788](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20201229203352788.png)

window对象是浏览器的顶级对象，它具有双重角色。

1．它是JS访问浏览器窗口的一个接口。
2．它是一个全局对象。定义在全局作用域中的变坌、函数都会变成window对象的属性和方法。

在调用的时候可以省略window，前面学习的对话框都属于window对象方法，如alert()、prompt)等.

**注意**: window下的一个特殊属性window.name

### 2.window对象的常见事件

第一种

```js
<body>
  <button>点击</button>
  <script>
      var btn = document.querySelector('button');
      btn.addEventListener('click', function () {
        alert('点击')
      })
  </script>
</body>
```

第二种：

```js
<body>
  <script>
    window.onload = function () {
      var btn = document.querySelector('button');
      btn.addEventListener('click', function () {
        alert('点击')
      })
    }
  </script>
  <button>点击</button>
</body>
```

#### 2.1 窗口加载事件

```js
window.onload = function(){}
或者
window.addEventLiatener("load",function(){})
```

window.onload是窗口(页面）加载事件,当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS文件等),就调用的处理函数。
注意∶

1.有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。

2.window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准。

3.如果使用addEventListener则没有限制

```js
<body>
<script>
  window.onload = function () {
    var btn = document.querySelector('button');
    btn.addEventListener('click', function () {
      alert('点击')
    })
  };
  
  window.onload = function () {
    alert(22); //onload只执行最后一个
  };
  
  window.addEventListener('load', function () {
    alert(33);
  });
  
//ie9以上才支持
  document.addEventListener('DOMContentLoaded', function () {
    alert(44);
  })
  //load是等页面内容全部加载完毕，包含页面dom元素 图片 flash css 等等
  //DOMContent 是DOM加载完毕，不包含图片flash css 等就可以执行，加载速度比load快
</script>
<button>点击</button>
</body>
```

### 3.定时器

#### 3.5 停止setInterval()定时器

```js
window.cleanInterval(intervalID)
```

cleanInterval()方法取消了先前通过调用setInterval()建立的定时器

注意：

1.window可以省略

2.里面的参数就是定时器的标识符

```js
<body>
<button class="begin">开启定时器</button>
<button class="stop">停止定时器</button>
<script>
  var begin = document.querySelector('.begin');
  var stop = document.querySelector('.stop');
  var timer = null; //全局变量  null是一个空对象
  begin.addEventListener('click', function () {
    timer = setInterval(function () {
      console.log('nihao')
    }, 1000)
  })
  stop.addEventListener('click',function () {
    clearInterval(timer);
  })
</script>
</body>
```

**案例:** 发送验证码

```js
<body>
  手机号码： <input type = "number"> <button>发送</button>
  <script>
    //按钮点击之后，会禁用disabled 为true
    //同时按钮里面的内容会变化，注意button里面的内容通过innerHTML修改
    // 里面秒数是有变化的，因此需要用到定时器
    //定义一个变量，在定时器里面，不断递减
    //如果变量为0 说明到了时间，我们需要停止定时器，并且复原按钮初始状态
    var btn = document.querySelector('button');
    var time = 3;
    btn.addEventListener('click', function () {
      btn.disabled = true;
      var timer = setInterval(function () {
        if (time == -1) {
          clearInterval(timer);
          btn.disabled = false;
          btn.innerHTML = '发送';
          time = 3;
        }else {
          btn.innerHTML = '还剩下' + time + '秒';
          time--;
        }
      }, 1000)
    })
  </script>
</body>
```

#### 3.6 this

this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最终指向的是那个调用它的对象

```js
<body>
<button>点击</button>
<script>
  //this指向问题  一般情况下 this的最终执行那个的是哪个调用他的对象
  // 1．全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window)
  console.log(this);//window
  function fn() {
    console.log(this); //window
  }
  window.fn();
  
  window.setTimeout(function () {
    console.log(this);
  }, 1000);
  // 2．方法调用中谁调用this指向谁
  var o = {
    sayHi: function () {
      console.log(this); //this指向的是o这个对象
    }
  }
  o.sayHi();
  
  var btn = document.querySelector('button');
  // btn.onclick = function () {
  //   console.log(this); //this指向的是btn这个按钮对象
  // }
  btn.addEventListener('click', function () {
    console.log(this); //this指向的是fun实例对象
  })
  
  // 3．构造函数中this指向构造函数的实例
  function Fun() {
    console.log(this); //指向fun
  }
  var fun = new Fun(); 

</script>
</body>
```

### 4.js执行机制

#### 4.1 js是单线程

> JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为Javascript这门脚本语言诞生的使命所致——JavaScript是为处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除操作，不能同时进行。应该先进行添加，之后再删除。
>
> 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是∶如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

解决的问题

```js
1.
console. log (1);
setTimeout ( function (){
console. log ( 3);
}, 1000) ;
console . log (2); // 1 2 3
2.
  console. log (1);
  setTimeout ( function (){
    console. log ( 3);
  }, 0) ;
  console . log (2); // 1 2 3
```

#### 4.3 同步和异步

为了解决这个问题，利用多核CPU的计算能力，HTML5提出 Web Worker标准，允许JavaScript脚本创建多个线程。于是，JS中出现了同步和异步。

**同步**

前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法:我们要烧水煮饭，等水开了( 10分钟之后），再去切菜，炒菜。

**异步**
你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。
饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。

本质区别：这条流水线上的各个流程的执行顺序不同。

- 同步任务

同步任务都在主线程上执行，形成一个执行栈

<img src="E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105212753494.png" alt="image-20210105212753494" style="zoom:50%;" />

- 异步任务
  JS的异步是通过回调函数实现的。一般而言，异步任务有以下三种类型:1、普通事件，如click、resize等2、资源加载，如load、error等
  3、定时器，包括setInterval、setTimeout等

#### 4.4js执行机制

1.先执行执行栈中的同步任务。
⒉.异步任务（回调函数)放入任务队列中。
3.一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

<img src="E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105213045284.png" alt="image-20210105213045284" style="zoom:50%;" />



![image-20210105213746672](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105213746672.png)

![image-20210105213819835](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105213819835.png)

由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环( event loop )。

### 5.location对象

#### 5.1 什么是location对象

window对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可以用于解析URL。因为这个属性返回的是一个对象，所以我们将这个属性也称为location对象。

#### 5.2 URL
统一资源定位符(Uniform Resource Locator, URL)是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。
URL的一般语法格式为︰

![image-20210105214100367](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105214100367.png)

#### 5.3 location对象的属性

![image-20210105214326843](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105214326843.png)

```js
<body>
<button>点击</button>
<div></div>
<script>
  var btn = document.querySelector('button');
  var div = document.querySelector('div');
  btn.addEventListener('click', function () {
    // console.log(location.href);
    location.href = 'https://cn.bing.com/';
  });
  
  var time = 5;
  function skip() {
    if (time == 0) {
      location.href = 'https://cn.bing.com/';
    }else {
      div.innerHTML = '等待'+ time +'秒';
      time--;
    }
  }
  skip(); //写称function为了解决刷新后停顿的一秒
  setInterval(function () {
    skip();
  }, 1000)
</script>
</body>
```

**案例：获取url参数**

```js
<body>
<div></div>
<script>
  console.log(location.search);
  
  //1.先去掉问号 substr('起始位置'，截取几个字符串)；
  var params = location.search.substr(1);
  console.log(params);
  //2.利用等号把字符串分隔为数组  split('=')
  var arr = params.split('=');
  console.log(arr);
  console.log(arr[1]);
  //3.把数据写入div
  var div = document.querySelector('div');
  div.innerHTML = arr[1] + '欢迎你';
</script>
</body>
```

#### 5.4 location对象的方法

![image-20210105222001824](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105222001824.png)

```js
<body>
<button>点击</button>
<script>
  var btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    //记录浏览历史，所以可以实现回退功能
    location.assign('https://cn.bing.com/');
    //不记录浏览历史，所以不可以实现回退功能
    location.replace('https://cn.bing.com/');
    location.reload(); //刷新
    location.reload(true) //强制刷新
  })
</script>
</body>
```

### 6.navigator对象

> navigator对象包含有关浏览器的信息，它有很多属性，我们最常用的是userAgent，该属性可以返回由客户机发送服务器的user-agent头部的值。

下面前端代码可以判断用户那个终端打开页面，实现跳转

![image-20210105222518521](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105222518521.png)

### 7.history

window对象给我们提供了一个history对象，与浏览器历史记录进行交互。该对象包含用户(在浏览器窗口中)访问过的URL。

![image-20210105223352187](E:\LJOK\学习资料和笔记\前端\前端学习md笔记\笔记\js学习笔记\image-20210105223352187.png)

history对象一般在实际开发中比较少用，但是会在一些OA办公系统中见到。