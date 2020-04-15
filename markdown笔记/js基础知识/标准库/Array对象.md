# 这里是广义对象的知识补充

## Array 对象

### 静态方法
Array.isArray()  方法返回一个布尔值，表示参数是否为数组。它可以弥补typeof运算符的不足。

### 实例方法

1. valueOf() toString() 

valueOf方法是一个所有对象都拥有的方法，表示对该对象求值。数组的valueOf方法返回数组本身。
toString方法返回数组的字符串形式。

2. slice()

slice方法的一个重要应用，是将类似数组的对象转为真正的数组。

```javascript
    Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
    // ['a', 'b']

    Array.prototype.slice.call(document.querySelectorAll("div"));
    Array.prototype.slice.call(arguments);
```

3. splice() 

splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素

```javascript
    //如果只是单纯地插入元素，splice方法的第二个参数可以设为0。
    var a = [1, 1, 1];
    a.splice(1, 0, 2) // []
    a // [1, 2, 1, 1]

    //如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。
    var a = [1, 2, 3, 4];
    a.splice(2) // [3, 4]
    a // [1, 2]
```

4. map()   forEach()

map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。原数组没有变化.

forEach方法与map方法很相似,forEach方法不返回值，只用来操作数据。

```javascript
    var arr = [1,2,3];
    //回调函数的参数分别表示 值，索引，数组本身；
    var newArr = arr.map(function(elem,index,array) {  return elem + index; });
    

    var arr2 = ['a', 'b', 'c'];
    
    //map方法还可以接受第二个参数，用来绑定回调函数内部的this变量
    var newArr2 = [1, 2].map(function (e) {
        return this[e];
    }, arr2)
```

5. filter()

filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。

filter方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。

```javascript
   //1.返回数字大于3的数组
    var arr = [1,3,1,4,5,2,0]; 
    arr.filter(function(e) {
      return e > 3;
    });  //4,5

    //2.接受第二个参数，回调函数内部this就指向它
    var obj = {max:3};
    arr.filter(function(e) {
      return e < this.max;
    },obj);
```

6. some()，every() 

接受一个函数作为参数，所有数组成员依次执行该函数.返回一个布尔值

some()要求所有每次遍历函数返回有一个true，some()就返回true;
some()要求所有每次遍历函数返回都要是true，every()才返回true;

对于空数组，some方法返回false，every方法返回true，回调函数都不会执行。

7. reduce()，reduceRight() 

reduce方法和reduceRight方法的第一个参数都是一个函数,函数的参数有
-  累积变量，默认为数组的第一个成员
- 当前变量，默认为数组的第二个成员
- 当前位置（从0开始）
- 原数组

```javascript
    [1, 2, 3, 4, 5].reduce(function (a, b) {
    return a + b;
    })

    //遍历数组，找到字符长度最长的数组成员
    function findLongest(arr) {
    return arr.reduce(function (longest,entry) {
        return (longest.length > entry.length) ? longest : entry;
    },"");  //第二个参数""防止传入数组为空
    }
    var longest = findLongest(["aaaa","a","aa","aaa"]);
```


