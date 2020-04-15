e+f   **下一个**满足条件的兄弟元素节点(相当于jquery的next())

e~f   **下面多个**满足条件的兄弟元素节点  

# 属性选择器

1. e[attr] :属性名为attr的元素

2. e[attr~='a']：属性值是a（可带有其他值）  class = 'a b c d'

3. e[attr|='a']：属性值以a开头或a-开头    class = 'a-test'

4. e[attr^='a']:属性值以a开头   class = 'abcd'
    
5. e[attr$='a']:属性值以a结尾  class = 'bcda'

6. e[attr*='a']:属性值存在a

# 伪元素选择器

1. e::placeholder  只能设置input内部字体颜色，如input

2. e::selection   文字选中后的color,background-color,text-shadow

3. e::not()   否定选择器   e中除了()内选择的e元素

4. 例子：多个表单设置borderBottom，用not(:last-of-type)筛去最后一个

# 伪类选择器 （:后加上被选择元素的状态）

1. :root      根选择器

2. e:empty    无内容的选择器(类似于hasChildNodes())

3. e:target   目标选择器:用来匹配文档的url的某个标志符的目标元素 

- 触发元素的url

- :target匹配id为标志符的元素

(以下常用)

4. e:first-of-type  该类型的第一个

5. e:only-of-type  唯一类型的子元素（不需要唯一一个）

6. e:nth-of-type(n)  该类型的第n个

7. (不常用)e:first-child    e:last-child    e:only-child(唯一一个的子元素，区别于type)    e:nth-child()          e:nth-last-child()  

表单伪类选择器

input:enabled       可用状态下表单设置样式

input:disabled      不可以表单的样式

input:checked       复选框选择时样式，配合其他标签完成自定义样式


:read-only          设置了readonly的元素

:read-write         设置了只读状态的元素

