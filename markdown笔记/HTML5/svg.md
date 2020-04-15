# 矢量图，需要css配合画图

## 用一个<svg>标签引入

1. <line> 线     x1,y1,x2,y2(两个坐标点)

2. <rect> 矩形   height,width,x,y,rx(宽，高，左上角坐标，圆角)

3. <circle> 圆   r,cx,cy(半径，圆心)

4. <ellipse>椭圆 rx,ry,cx,cy(x轴半边，y轴半边,圆心)

5. <polyline>折线  points='多个点(0 0, 1 1, 2 2)'

- 默认连接和填充，不链接会原点

6. <polygon>多边形  points='多个点(0 0, 1 1, 2 2)'

- 连接回原点

7. <text>文本   x，y

8. <path>路径       

- 折线指令 

d='M 100 100 L 200 100 L 200 200 '

'M 100 100 h 200 v 200 z'

- 圆弧指令



- 大写表示绝对位置，小写表示相对位置(相对上一步操作)

9. <defs> 定义一个界面

```xml
<svg width='300px' height='300px' style="border:1px solid #000">
    <defs>
        <lineargradient id="bg1" x1='0' y1='0' x2='100%' y2='100%'>
            <stop offset='0%' style="stop-color:rgb(255, 255, 0)"></stop>
            <stop offset='100%' style="stop-color:rgb(255, 0, 0)"></stop>
        </lineargradient>
    </defs>
    <rect x='50' y='100' height='100' width='200' style="fill:url(#bg1)"></rect>
</svg>
```

10. <filter>过滤器

```xml
<filter id="Gaussian">
    <feGaussianBlur in='SourceGraphic' stdDeviation='10'></feGaussianBlur>
</filter>
```

## css属性

style引用

1. fill/stroke-width/stroke-opacity

2. stroke/stroke-width/stroke-opacity/stroke-linecap/linejoin/dasharray,dashoffset

3. filter

直接引用

4. 比例尺fillBox 四个参数 

