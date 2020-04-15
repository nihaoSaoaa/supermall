# 为网页添加样式

##  外部样式表的作用

   - 解决多页面样式重复问题
   - 有利于浏览器缓存，提高响应速度
   - 有利于代码分离

# 常见样式声明

## 伪类选择器的书写顺序

   1）link  > 2）visited  > 3）hover >  4）active
   "爱恨法则"

## 元素选择器

   元素::before（after）

# 层叠

   解决声明冲突（同一个样式，多次应用到同一个元素）的过程
   步骤：比较重要性；特殊性（主要）；源次序  

1. 重要性
   样式后+“！important”

2. 特殊性：计算一个四位数
   千位：内联样式；
   百位：id选择器；
   十位：类选择器，伪类选择器，属性选择器；
   个位：元素选择器，伪元素选择器。

3. 源次序
   靠后的胜出

# 继承

   对没有值的属性，若可继承，则继承父元素的属性。

属性值：
   - inherit：强制继承；
   - initial：初始值；
   - unset：默认属性（该继承继承，不该继承不继承）

# 盒模型

   行盒：      display：inline；
   块盒：      display：block；

## 盒子的组成部分

   content  <  padding  <  border  <  margin

## 盒模型的应用

1. 改变宽高范围
   设置的宽高用的是内容盒（content），而设计稿尺寸是边框盒（border）
   方法：设置box-sizing：border-box；精确计算

2. 改变背景覆盖范围
   background-clip

3. 溢出处理
   overflow
   属性值：hidden（隐藏） scroll（滚动条）

4）空白处理（只能控制单行文本）
   white-space：nowrap；
   <!-- 不换行 -->
   overflow：hidden；
   text-overflow：ellipsis；
   <!-- 隐藏的设置为圆点 -->

## 行盒盒模型

   1. 不能设置宽高，宽高随内容简介调整；
   2. padding，border，margin水平方向有效，垂直方向仅影响背景，不实际占据空间；

## 行块盒

   1）不独占一行；2）可以设置尺寸；

   img，video，audio可以看做行块盒；

# 常规流

   规则：块盒独占一行，行盒水平依次排开；

包含块（父元素内容盒） >> 盒子  
1. 块盒的width == 包含块的总width
   默认：  width：auto  ；margin：auto （width吸收剩余空间，margin默认值为0）
   即width吸收空间能力强于margin   
   
   否则用margin-right吸收（表现为块盒靠左）

   margin：0 auto；
   <!-- 设置块盒在包含块中居中 -->
   margin：0 -？？px；
   <!-- 块盒撑开包含块宽度 -->

2. 块盒的height auto适应内容高度 

3. 百分比取值
   -所有百分比相对于包含块的宽度（取决于父元素）
   -包含块高度不取决于子元素

4. 上下外边距合并

   两常规流块盒，上下外边距相邻，合并去最大值。

   解决方法：设置父元素padding-top；





