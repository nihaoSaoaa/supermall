# 什么是数据结构？什么是算法？

数据结构：计算机中，存储和组织数据的方式。

算法（Algorithm）：解决问题的办法/逻辑。<u>数据结构的实现，离不开算法。</u>

# 栈结构

## 数组

* 一种**线性结构**，并且可以在数组的任意位置插入和删除数组。

* 有时候为了实现某些功能，要对任意性加以限制。

* 栈和队列就是常见的**受限的数据结构**

## 栈结构
> （stack）受限的线性表，**后进先出（LIFO）**

> 函数调用栈？

> 递归栈溢出？

* 栈结构的实现

基于数组和链表实现，这里先用数组实现

封装一个栈结构

```javascript
    function Stack(){
        //定义栈中的属性
        this.items = [];
        //栈的操作
        //1.元素入栈
        Stack.prototype.push = function (ele) {
            this.items.push(ele);
        }
        //2.取出栈顶元素（并返回）
        Stack.prototype.pop = function () {
            return this.items.pop();
        }
        //3.查看栈顶元素（返回）
        Stack.prototype.peek = function () {
            return this.items[this.items.length - 1];
        }
        //4.判断栈是否为空
        Stack.prototype.isEmpty = function () {
            return this.items.length == 0;
        }
        //5.获取栈中元素的个数
        Stack.prototype.size = function () {
            return this.items.length;
        }
        //6.toString方法
        Stack.prototype.toString = function () {
            var resultString = '';
            for( var i =0; i < this.items.length ; i++){
                resultString += this.items[i] + ' ';
            }
            return resultString;
        }
    }
```

利用栈类封装十进制转二进制函数

```javascript
    //封装函数：十进制转二进制
    function dec2bin (decNunber) {
        //1.定义栈对象
        var stack = new Stack();
        //2.循环操作
        while(decNunber != 0){
            //2.1 将余数入栈
            stack.push(decNunber % 2);
            //2.2 整出后的结果作为下次运行的数
            decNunber = Math.floor(decNunber / 2);
        } 
        //3.从栈中取出0,1
        var binNunmer = '';
        while(!stack.isEmpty()){            
            binNunmer += stack.pop();
        }
        return binNunmer;
    }
```


## 队列

> (Queue)也是受限的线性表，先进先出(FIFO :first in first out)

* 受限在于只允许在表的后端(rear)进行插入操作
* 只允许在表的前端(front)进行删除操作

基于数组封装一个队列类

```javascript
    function Queue () {
        //定义队列中的属性
        this.items = [];
        //队列的操作
        //1.元素加入队列
        Queue.prototype.enqueue = function (ele) {
            this.items.push(ele);
        }
        //2.删除前端元素（并返回）
        Queue.prototype.dequeue = function () {
            return this.items.shift();
        }
        //3.查看前端元素（返回）
        Queue.prototype.front = function () {
            return this.items[0];
        }
        //4.判断队列是否为空
        Queue.prototype.isEmpty = function () {
            return this.items.length == 0;
        }
        //5.获取队列中元素的个数
        Queue.prototype.size = function () {
            return this.items.length;
        }
        //6.toString方法
        Queue.prototype.toString = function () {
            var resultString = '';
            for( var i =0; i < this.items.length ; i++){
                resultString += this.items[i] + ' ';
            }
            return resultString;
        }
    }
```

击鼓传花游戏规则：几个朋友围成一圈，开始数数，数到某个数字自动淘汰；最后剩下的人获胜。

封装函数：

* 参数：参与者姓名，基于的数字；
* 返回:剩下人的姓名。

```javascript
    function passGame(num) {
        var queue = new Queue();
        for(var i = 1; i < arguments.length ; i++) {
            queue.enqueue(arguments[i]);
        }
        while(queue.size() != 1) {
            for (var i = 0 ; i < num - 1 ; i++ ) {
                queue.enqueue(queue.dequeue());
            }
            queue.dequeue();
        }
        var endName = queue.front();
        return '最后剩下的人是:' + endName;
    }
    
```

## 优先级队列

> 特点
* 普通的队列插入一个元素，数据会放在后端。并且需要前面的元素都处理完成后才会处理后面的数据。
* 优先级队列，插入元素时，会考虑该数据的优先级。
* 先比较优先级。
* 比较完后，得出元素在队列中的正确位置。

实现优先级队列（加入元素方法）

```javascript
    function PriorityQueue () {
        //封装属性
        this.items  = [];
        //在priorityQueue中再创建一个类（内部类）
        function QueueElement (element,priority) {
            this.element = element;
            this.priority = priority;
        }
        //插入方法
        PriorityQueue.prototype.enqueue = function (element,priority) {
            //创建对象
            var queueElement = new QueueElement(element,priority);
            //如果队列为空
            if (this.items.length == 0) {
                this.items.push(queueElement);
            }else{
                var add = false;
                for (var i = 0; i < this.items.length ; i++) {
                    //优先级是数字越小优先级越高
                    if (queueElement.priority < this.items[i].priority){
                        this.items.splice(i,0,queueElement);
                        add = true;
                        break;
                    } 
                }
                if (!add) {
                    this.items.push(queueElement);
                }
            }
        }
    }
```





