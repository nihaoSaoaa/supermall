# 在HTML中使用JavaScript

1. 延迟脚本
    
    使用defer ，脚本会延迟到整个页面解析完毕再运行（立即下载，延迟执行）。
    
    多个延迟脚本执行会按照顺序进行，并且在DOMContentLoaded事件之前执行。

    现实中，上述情况不一定，所以最好只包含一个延迟脚本。

2. 异步脚本

    使用async，下载和执行脚本时，异步加载页面内容

    多个异步脚本最好不相互依赖，**不在加载期间操作DOM**。


# 基本概念

## 数据类型：number,String,boolean,undefined,null   object

1. null

    逻辑上讲，表示空对象指针；undefined派生自null，所以 null == undefined；  //true

2. Number

    表示八进制前面加0，严格模式下无效；表示16进制前面加0x，如0x1f

    es最大最小数值保存在Number.Min_VALUE,Number.Max_VALUE中

    isNaN()方法对对象会先调用方法valueOf(),再尝试toString()方法

    Number(null); //0
    Number(undefined); //NaN

3. String
    
    es的字符串不可变，要改变某个变量的字符串，要先销毁原来的字符串，创建一个新的字符串来填充该变量。

    toString()方法，null和undefined没有这个方法；String()方法，都可以调用


## 操作符

可以应用与很多值，对于对于对象会先调用对象的valueOf()或toString()


1. 位操作符 ~  &  |  ^  P39

2. 一元操作符 ++ -- + -  

3. 布尔操作符 && || ！（注：undefined，null，0，NaN," ",false的布尔值为false，其余都为true）

4. 乘性操作符 * / %

```javascript
    Infinity * 0;               // NaN
    Infinity * (非0数);         // Infinity
    Infinity * Infinity;       // Infinity

    Infinity / Infinity;         // NaN;
    0/0;                          // NaN;    
    +-(number not 0)/0;            // +-Infinity
    Infinity /(number not 0);         // Infinity
    Infinity / 0                    // Infinity    
```

5. 加性操作符 + -

```javascript
      //数值相加或字符串连接
    Infinity + Infinity;           //Infinity  
    -Infinity + -Infinity;         // -Infinity
    Infinity + -Infinity;         // NaN
    +0 + +0;                       //+0
    +0 + -0;                       //+0
    -0 + -0;                       //-0

    Infinity - Infinity;           //NaN 
    (-Infinity) - (-Infinity);       // NaN
    Infinity - (-Infinity);         // Infinity
    (-Infinity) - Infinity;         // -Infinity
    +0 - +0;                       //+0
    -0 - +0;                       //-0
    -0 - -0;                       //+0
``` 

6. 关系操作符 > >= < <=

    字符串会比较字符编码

    任何操作数与NaN比较，都返回false

7. 相等操作符 == ===

```javascript
    NaN == NaN;            //false
    undefined == 0         //false
    null == 0              //false
    undefined == null      //true

    undefined === null      //false
```  

8. 条件操作符

    var x = (语句)?a:b;

9. 赋值操作符 (一大堆东西)=

10. 逗号操作符 ,


