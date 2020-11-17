//1.let 不存在变量提升
//2.let 同一个作用域下不能重复定义同一个名称
  var x = 1;
  let x = 100;
      x = 1000;
      console.log(x);
//3、let有着严格作用域  块级作用域
  function f() {
    var a = 10;
    if (true) {
      var a = 1000;
    }
    ;
    console.log(a);
  };
  f();

  function f2(i) {
  let i = 100;
  console.log(i);
};
  f2(999);
  //相当于以下代码
  function f2(i) {
    var i = 999; //报错   声明过了
    let i = 100;
    console.log(i);
  };
  f2(999);

//块级作用域 let 和 var的区别
  //var
  for (var i = 0; i < 5; i++) {
  }
  console.log(i);
  //let
  for (let i = 0; i < 5; i++) {
  }
  console.log(i);
  //例子
  var arr = [];
  for( let i = 0;i<5;i++){
    arr[i] = function( ){
      console.log(i)
    }
  };
  arr[2]();

