# 哈希表

## 认识哈希表

> 哈希表是基于**数组**实现的，数组相对的劣势有：

  * 插入和删除效率低；

  * 基于内容查找效率也不高；

1. 哈希表的优势 :

* 提供快速的**插入-删除-查找**操作

* O(1)的时间级，只需要几个机器指令完成；

* 速度比树还快，编码更容易。

2. 哈希表的劣势：

* 数据是**没有顺序的**，不能用特定顺序的方式遍历元素；
* 哈希表的key**不能重复**。

那么哈希表到底是什么呢?它的结构就是数组，它神奇的地方就在于对**下标值的一种变换**，即**哈希函数**，通过哈希函数得到HashCode。

## 探索字符转换成数字的方案

for example : 

* 所有字母幂相乘 -> 空间太大 

* 所有字母对应数字相加 -> 重复太多

answer ： 

压缩大空间 (巨大的整数范围 -> 可接受的数组范围)

measure :

比如： 0 ~ 199 largeNunber 0 ~ 9 smallNunmber

下标 index =  largeNunber% 10；

question ：

12,32,122他们的下标都是2，出现了重复；

但是假如在0 ~ 199 中取出5个数字，放进0 ~ 9 的数组中，很不容易重复（但重复的概率很小）

## 哈希表的一些重要概念

* 哈希化：将**大数字**转化成**数组范围内下标**的过程，我们就称之为哈希化；

* 哈希函数：将**单词**转成**大数字**，再进行哈希化的代码实现放在函数中，这个函数就是哈希函数

* 哈希表： 最终将数据插入到的数组，对整个结构的封装，就是一个哈希表

> 如何解决下标值重复的问题？

## 冲突的解决方法

冲突：两个单词经哈希函数转化的下标相同的情况

解决方法：1. 链地址法；2. 开放地址法；

1. 链地址法

<img src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570709228171&di=a6947e0e0a1c298e6391426d86868390&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3869469176%2C2576700816%26fm%3D214%26gp%3D0.jpg' width= "200px">

* 每个数组单元中存储的不是**单个数据**，而是一个**链条（可以是数组或链表）**

* 查询时，可根据下标找到位置，取出链条，依次查询数据；

* 数组和链表哪个好？两者效率都差不多，都是**线性查找**，但是要把新插入的数据放在链条前面时，最好用链表；（数组插入需要把数据后移，操作更复杂）

2.  开放地址法


* 寻找**空白位置**来防止冲突的数据

* 探索方式: 线性探测、二次探测、再哈希法

>  线性探测：

<img src = "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2944423392,475306031&fm=15&gp=0.jpg">

* 插入：空的位置就是合适的位置

* 查询：查询到空位置就停止，因为不可能跳到空位置去其他的地方；

* 删除：删除完以后地址上的要使value = -1，若设置为null则无法找到其他下标冲突的数据。

> 二次探测

如果数据是**连续插入**的，那么新插入的数据要探测很长的时间，这里就用优化的二次探测。

* **探测步长**线性探测步长为一个常数，而二次探测是可以将要探测步长优化。

* 比如，下标值从x+ （1,2,3) ->   ( 1^2 , 2^2 , 3^2)

* 但是如果冲突的数据过多，比如12,22,32,112,132那么会造成**步长不一的一种聚焦**

> 再哈希化

* 产生一种**依赖关键字**的探测序列，把关键字用另一个哈希函数，再做一次哈希化，结果作为步长；

* 对于**特定关键字**，虽然再哈希化后的步长不变，但是**不同关键字步长不同**，减小了聚焦发生。

* 第二次哈希化的特点：1.输出不能为0（否则探测原地踏步陷入死循环）；2.与第一次哈希函数不同。

* 解决方案 ：stepSize = constant(质数) - (key % constant)

## 哈希化的效率

* 在没有冲突时，哈希表的效率是非常高的；

* 如果发生冲突，存取时间就依赖于探测长度；

* 平均探测长度以及存取时间，取决于**填装因子**，越大，探测长度越长，效率越低。

> 什么是填装因子？

* 填装因子 = 总数据数 / 哈希表长度 ；

* 开放地址法的填装因子最大等于1；

* 链地址法可以大于1，甚至无限延伸下去；

## 优秀的哈希函数

优点在于
1. 能快速的计算，获得hashCode，所以在函数中要**尽量少的乘法和除法**；
2. 均匀的分布，能将元素映射在不同的位置；

* 快速的计算：霍纳法则（秦九韶算法），将时间复杂度从O(N^2)降到O(N)

* 均匀分布：在使用常量的地方（哈希表的长度和N次幂的底数）使用**质数**

##  封装一个哈希函数

```javascript
    function hashFunc(str,size) {
        var hashCode = 0;
        //霍纳算法，计算hashCode
        for(var i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        //取余
        var index = hashCode % size;
        return index;
    }
```

## 封装一个哈希类

```javascript
    //基于数组实现的哈希表类，冲突用链地址法
    function HashTable() {
        this.storage = [];
        this.count = 0; // 数组元素个数
        this.limit = 7; // 数组总长度

             //哈希函数
        HashTable.prototype.hashFunc = function(str,size) {
            var hashCode = 0;
            //霍纳算法，计算hashCode
            for(var i = 0; i < str.length; i++) {
                hashCode = 37 * hashCode + str.charCodeAt(i);
            }
            //取余
            var index = hashCode % size;
            return index;
        }

        //在哈希表中添加&修改数据
        HashTable.prototype.put = function(key,value) {
            //1.根据key获取index
            var index = this.hashFunc(key,this.limit);
            //2.根据索引值取出bucket(篮子)
            var bucket = this.storage[index];
            //3.判断bucket是否为空
            if(bucket == null) {
                bucket = [];
                this.storage[index] = bucket;
            }
            //4.遍历bucket看是否修改数据
            for(var i = 0; i < bucket.length; i++) {
                var tuple = bucket[i];
                if(tuple[0] == key) {
                    tuple[1] = value;
                    return;           
                }
            }
            //5.添加数据
            bucket.push([key,value]);
            this.count ++;

            //6.扩容操作:如果数据过多扩大表内存
            // if(this.count > 0.75 * this.limit) {
            //     this.resize(this.limit * 2);
            // }
            if(this.count > 0.75 * this.limit) {
                var newSize = this.limit * 2;
                var newPrime = this.getPrime(newSize);
                this.resize(newPrime);
            }
        }

        //获取数据
        HashTable.prototype.get = function(key) {
            var index = this.hashFunc(key,this.limit);
            var bucket = this.storage[index];
            if(bucket == null) {return null;}
            for(var i = 0; i < bucket.length; i++) {
                var tuple = bucket[i];
                if(tuple[0] == key) {
                    return tuple[1];
                }
            }
            return null;
        }

        //删除数据
        HashTable.prototype.remove = function(key) {
            var index = this.hashFunc(key,this.limit);
            var bucket = this.storage[index];
            if(bucket == null) {return null;}
            for(var i = 0; i < bucket.length; i++) {
                var tuple = bucket[i];
                if(tuple[0] == key) {
                    bucket.splice(i-1,1);
                    this.count --;
                    return bucket[i];

                     //如果数据较少就需要缩容
                    // if(this.count < this.limit * 0.25) {
                    //     this.resize(Math.floor(this.limit / 2));
                    // }
                    if(this.limit > 7 && count < this.limit * 0.25) {
                        var newSize = Math.floor(this.limit / 2);
                        var newPrime = this.getPrime(newSize);
                        this.resize(newPrime);
                    } 
                }
            }
            return null;
        }

        
        //哈希表的扩容操作
        HashTable.prototype.resize = function(newLimit) {
            //1.保存旧表的内容
            var oldStorage = this.storage;
            //2.重置属性
            this.storage = [];
            this.count = 0;
            this.limit = newLimit; //扩大哈希表内存
            //3 遍历oldStorage的每一个bucket
            for(var i = 0 ;i < oldStorage.length ;i++) {
                //3.1 获取bucket
                var bucket = oldStorage[i];
                //3.2 bucket是否为空
                if(bucket == null) {
                    continue;
                }
                //3.3 将数据重新插入哈希表
                for(var j = 0; j < bucket.length; j++) {
                    var tuple = bucket[j];
                    this.put(tuple[0],tuple[1]);
                }
            }
        }

        //判断质数
        HashTable.prototype.isPrime = function(num) {
            var temp = parseInt(Math.sqrt(num));
            for(var i =2; i <= temp; i++) {
                if(num % i == 0) {
                    return false;
                }
            }
            return true;
        }
        //向前获取质数
        HashTable.prototype.getPrime = function(num) {
            while(!this.isPrime(num)){
                num ++;
            }
            return num;
        }
    
    }
```

## 哈希表的扩容

> 当数据过多时，为了提高哈希表的效率，我们要对哈希表的内存进行扩容,这种情况下所有的数据都要进行重组（重新调用哈希函数），这是一个耗时的过程，但是却是很有必要的。

* loadFactor（填装因子）要在0.25 ~ 0.75之间

* 扩容的方法和思路已经在封装的哈希表中

## 实现容量恒为质数

> 我们前面说到要使哈希表的容量为质数，这样哈希表的效率最高，那么怎么使limit恒为质数？

1. 封装一个判断质数的函数；

2. 封装一个获取质数的函数；

3. 使扩容时limit变化的数依然是质数；

具体的方法在封装哈希表中。












