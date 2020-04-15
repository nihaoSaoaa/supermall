# 属性描述对象(attributes object)

概念：js提供的内部数据结构，用来描述对象属性以及控制的行为

        - value : 属性的属性值

        - writable : value是否可写

        - enumerable : 是否可遍历(for...in...)(Object.keys) 

        - configurable : 是否可配置，控制属性描述对象的可写性

        - get : 表示取值函数getter

        - set ： 表示存值函数setter

## 方法

1. 获取属性描述对象  Object.getOwnPropertyDescriptor(obj, propertyName)

```javascript
    var obj = {a : "name"};
    console.log (Object.getOwnPropertyDescriptor(obj,"a")); 
    /*{
        value: name,
        writable: true,
        enumerable: true,
        configurable: true,
        get: undefined,
        set: undefined
    }*/
``` 

2. 通过属性描述对象，定义或修改一个属性  Object.defineProperty(ies)(obj,propertyName,attributesObject)
```javascript     
       var obj = Object.defineProperties({},{
           a1:{value:123,enumerable:true},
           a2:{value:456,enumerable:false},
           a3:{get:function() {return this.a1 + this.a2},enumerable:true,configurable:true}
       })
       //注意，一旦定义get（或set），就不能将writable属性设为true，或者同时定义value属性，否则会报错。
       //Object.defineProperty()和Object.defineProperties()参数里面的属性描述对象
       //writable、configurable、enumerable这三个属性的默认值都为false。
```
3. 返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。
```javascript
    
    Object.getOwnPropertyNames(obj);
    //in运算符不管某个属性是对象自身的还是继承的，都会返回true。
    //一个属性的enumerable为false，下面三个操作不会取到该属性。for..in循环Object.keys方法JSON.stringify方法
```

4. configurable
```javascript
    var obj = {
        name:"Zhang",
            age:"18"
    }; 
    Object.defineProperty(obj,"name",{value:"Ma",enumerable:false});
    //configurable为false时，value、writable、enumerable和configurable都不能被修改了。
    //writable只有在false改为true会报错，true改为false是允许的
    //value，只要writable和configurable有一个为true，就允许改动。
```

## 存取器
```javascript
    //将属性从数据属性变为存取器属性
    var obj = Object.defineProperty({}, 'p', {
            get: function () {
                return 'getter';
            },
            set: function (value) {
                console.log('setter: ' + value);
            }
        });
        //取值函数get不能接受参数，存值函数set只能接受一个参数（即属性的值）。
    var obj ={
            $n : 5,
            get next() { return this.$n++ },
            set next(n) {
                if (n >= this.$n) this.$n = n;
                else throw new Error('新的值必须大于当前值');
            }
        };

        obj.next // 5
        obj.next = 10;
        obj.next // 10
        obj.next = 5;
        // Uncaught Error: 新的值必须大于当前值
```

## 对象的拷贝
    如果遇到存取器定义的属性，会只拷贝值。通过Object.defineProperty方法来拷贝属性。
```javascript
    function extend(to,from) {
        for(var prop in from) {
            if(from.hasOwnProperty(prop)) {
                Object.defineProperty(to,prop,Object.getOwnPropertyDescriptor(from,prop));
            }
        }
        return to;
    }
    var obj =  extend({}, { get a(){ return 1 } });
```

## 控制对象状态

1. Object.preventExtensions() 可以使得一个对象无法再添加新的属性。

2. Object.isExtensible()  检查是否可以为一个对象添加属性。

3. Object.seal()  使得一个对象既无法添加新属性，也无法删除旧属性,并不影响修改某个属性的值。 
   Object.seal实质是把属性描述对象的configurable属性设为false，因此属性描述对象不再能改变了。

4. Object.isSealed() 用于检查一个对象是否使用了Object.seal方法。

5. Object.freeze()  可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量。

6. Object.isFrozen() 用于检查一个对象是否使用了Object.freeze方法。

### 局限性
1. 上面的三个方法锁定对象的可写性有一个漏洞：可以通过改变原型对象，来为对象增加属性。

解决方案是，把obj的原型也冻结住。

2. 另外一个局限是，如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容。
指向无法改变，即无法指向其他值，但是所指向的数组或对象是可以改变的。