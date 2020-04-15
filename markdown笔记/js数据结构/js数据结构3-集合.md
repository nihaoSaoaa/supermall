# 集合结构

> 集合是由一组**无序的，不能重复的**元素组成；

* 数学中集合范围更大，允许集合中的元素**重复**；
* 计算机中，集合表示的结构中是**不允许重复的**。

> 特殊的数组

* 元素无顺序，不能重复；
* 不能通过下标值访问，相同的对象只有一份；

## 封装一个集合类

> ES6里面包含了Set类，我们可以直接使用它，这里自己我们封装一个Set类。

```javascript
    function Set() {
        this.items = {};

        //添加元素
        Set.prototype.add = function(value) {
            if(this.has(value)) { //元素已有添加失败
                return false;
            }
            //元素添加进集合
            this.items[value] = value; //让对象的key = value
            return true; //添加成功
        }

        //查看是否含有value元素
        Set.prototype.has = function(value) {
            return this.items.hasOwnProperty(value);
        }

        //删除元素
        Set.prototype.remove = function(value) {
            if(!this.has(value)) {
                return false;
            }
            //删除元素
            delete this.items[value];
            return true;
        }

        //清空集合
        Set.prototype.clear = function() {
            this.items = {};
        }
        
        //查看集合长度
        Set.prototype.size = function() {
            return Object.keys(this.items).length;
        }

        //返回所有元素
        Set.prototype.values = function() {
            return Object.keys(this.items);
        }

        //1.求两个集合的并集
        Set.prototype.unions = function(otherSet) {
            var unionSet = new Set();

            var values = this.values();
            for(var i = 0; i < values.length; i++) {
                unionSet.add(values[i]);
            }

            values = otherSet.values();
            for(var i = 0; i < values.length; i++) {
                unionSet.add(values[i]);
            }

            return unionSet;
        }

        //2.求两个集合的交集
        Set.prototype.intersection = function(otherSet) {
             //this:集合A；  otherset：集合B
            
            //创建新集合
            var intersectionSet = new Set();
            var values = this.values();
            //取出集合A中的元素，判断是否存在于集合B里，若存在则添加到新集合里
            for(var i = 0; i < values.length; i++) {
                var item = values[i];
                if(otherSet.has(item)) {
                    intersectionSet.add(item);
                }
            }
            return intersectionSet;
        }

        //3.求两个集合的差集
        Set.prototype.difference = function(otherSet) {
            //this:集合A；  otherset：集合B
            
            //创建新集合
            var differenceSet = new Set();
            var values = this.values();
            //取出集合A中的元素，判断是否存在于集合B里，若不存在则添加到新集合里
            for(var i = 0; i < values.length; i++) {
                var item = values[i];
                if(!otherSet.has(item)) {
                    differenceSet.add(item);
                }
            }
            return differenceSet;
        }

        //4.查看是否是子集
        Set.prototype.subSet = function(otherSet) {
            var values = this.values();
            for(var i = 0; i < values.length; i++) {
                var item = values[i];
                if(!otherSet.has(item)) {
                    return false;
                }
            }
            return true;

        }
    }



```

# 字典

> **数组，集合，字典**是几乎所有编程语言都默认的数据类型。

## 字典的特点

* 一一对应关系；
* 键值成对，一个key 对应一个value；
* key是不可以重复的，而value可以重复；并且key是无序的

## 字典和数组

* 字典通过key来搜索对应的value，key可以包含特殊含义，而且容易别人记住。

## 字典和对象

* 很多编程语言（java）中对字典和对象区分明显。对象通常是在编译期就确定的结构，不可以动态添加删除属性。
而字典通常会使用类似于哈希表的数据结构来实现动态添加数据的结构。
* JavaScript中对象本身就是一种字典。


