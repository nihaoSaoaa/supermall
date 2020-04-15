# Object 对象的相关方法

## Object.getPrototypeOf()

获取原型对象的标准方法。

## Object.setPrototypeOf()

参数对象设置原型，返回该参数对象

## Object.create()

接受一个对象作为参数，然后以它为原型，返回一个实例对象。

```javascript
    var obj1 = Object.create({});
    var obj2 = Object.create(Object.prototype);
    var obj3 = new Object();
```

## Object.prototype.isPrototypeOf()

判断该对象是否为参数对象的原型。


## Object.prototype.__proto__

获取原型对象,一般只在浏览器上有。

## Object.getOwnPropertyNames()

返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名,不管是否可以遍历.
只获取那些可以遍历的属性，使用Object.keys方法。


## Object.prototype.hasOwnProperty()

判断某个属性定义在对象自身，还是定义在原型链上。

## in 运算符和 for...in 循环


```javascript
//获得对象的所有可遍历属性（不管是自身的还是继承的）
    function inheritedPropertyNames(obj) {
        var props = {};
        while(obj) {
            Object.getOwnPropertyNames(obj).forEach(function(prop) {
                props[prop] = true;
            });
            obj = Object.getPrototypeOf(obj);
        }
        return Object.getOwnPropertyNames(props);
    }

//对象的拷贝 ：相同的原型和实例属性

    function copyObject(orig) {
        var copy = Object.create(Object.getPrototypeOf(orig));
        copyOwnPropertiesFrom(copy,orig);
        return copy;
    }
    function copyOwnPropertiesFrom(target,source) {
        Object.getOwnPropertyNames(source).forEach(function(propKey) {
            var tec = Object.getOwnPropertyDescriptor(source,propKey);
            Object.defineProperty(target,propKey,tec);
        });
        return target;
    }

```