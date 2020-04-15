# 语义化

##什么是语义化

1. 每个HTML元素都有一个具体的含义

2. 所以元素与展示效果无关

**重要：选择什么元素，取决于元素的内容，而不是显示的效果**



##为什么需要语义化

1. 搜素引擎优化

2. 为了让浏览器理解网页

#HTML实体

网站：HTML entity MDN
实体字符，
用于在页面表示一些特殊字符；
1. &单词；
2. &#数字；

如：小于符号 &lt； 大于符号 &gt； 空格 &nbsp；版权符号 &copy；

#a元素

超链接

##href属性
hyper reference：通常跳转到地址

1. 普通链接；
2. 锚链接；

id属性：全局属性，表示元素在文档中的唯一编号

3. 功能链接；
点击后，触发某个功能

- 执行js代码 ，JavaScript：代码；
- 发送邮件，mailto：邮箱
(要求用户计算机上安装有邮件发送软件：exchange)
- 拨号，tel：电话号码

## target属性

表示跳转窗口页面

取值：
_self:当前页面打开；
_blank:在新页面打开

# 路径

## 绝对路径

协议名：//主机名：端口号/路径

##相对路径
./开头  表示当前目录的资源
../开头  表示上一目录的资源
./可以省略

# 图片元素

## img元素

## map元素

地图，map的子元素:area
衡量坐标时，为了避免衡量误差，需要专业的衡量工具，如ps

## fugure元素

指代定义，通常用于把图片，图片标题，描述包裹起来
子元素：figcaption将图片标题包起来

# 多媒体元素

## video 视频元素

controls：控制控件的显示，取值只能为controls

（某些属性，只有两种状态：1.不写   2.取值为属性名，叫做布尔属性）

autoplay：布尔属性，自动播放。

muted：静音播放。

loop：循环播放。

##audio 音频元素

1. 旧版本的浏览器不支持这两个元素
2. 不同的浏览器支持的音视频格式可能不一样

为获得更好的兼容性，一般用source引入多个视频
... 
<video>
   <source src="??.mp4">
   <source src="??.webm">
   <p>
       对不起，你的浏览器不支持video元素，请点击这里下载最新版本的浏览器
   </p>
</video>        
...

# 列表元素

## 有序列表/无序列表

ol：ordered list
ul：unordered list
li：list item

ol>li               ul>li  

无序列表常用于 制作菜单 或 新闻列表

css属性：list-style-type：
         list-style-image：

## 定义列表

通常用于一些术语的定义

dl：definition list； dt：definition title； dd;definition description.

dl>dt+dd

多用于文献中

# 容器元素

容器元素：该元素代表一个块区域，内部放置其他元素

## div元素

无语义

## 语义化容器元素（HTML5）

header：页头，或文章的头部

nav：导航栏

footer：页脚，或文章的尾部

article：整篇文章文章，包含header，footer，section

section：文章的章节

aside：侧边栏，或附加信息

main：主要内容

#元素包含关系

以前：块级元素可以包含行级元素，行级元素不可以包含行级元素，a元素除外

现在：元素的包含关系由元素的内容类别决定。

总结：

1. 容器元素可以包含任何元素

2. a元素几乎可以包含任何元素

3. 某些元素有固定的子元素（比如ul>li,dl>dt+dd）

4. 标题元素和段落元素不能相互嵌套，并且不能包含容器元素