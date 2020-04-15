# rotate旋转变换

1. 属性：

transform-origin：()px()px  旋转中心坐标

**补充：transform-origin (px px px)   旋转空间中心，可以让中心离开dom**

transform: rotate(角度)     旋转变换

2. 3D变换

- rotateZ() 默认沿着z轴转动

- rotateX()  

- rotateY()

- rotate3D(x,x,x,度数)      x:三个方向轴的矢量  最后为旋转度数

# scale伸缩变换

scale scaleX scaleY scaleZ scale3D

1. **伸缩的是此元素的变化坐标轴的刻度**

表现上没有改变，但是刻度改变，所以在移动时要根据变换来换算

2. scale具有叠加操作，多个scale值相乘

3. 旋转后scale带着旋转后的轴也变化

4. 保留影响，旋转和伸缩的顺序不同，表现的结果也不同

# skew倾斜变换

skew() skewX()  skewY()

倾斜的是坐标轴，并且长度会被拉伸，所以进行变换时后受到变换坐标的影响

# translate移动变换

translate translateX translateY translateZ translate3D

1. 要先转在移动才能看的到3d移动，因为轴会梗着图片一起移动

## 景深

perspective 视觉点距离screen屏幕的距离

属性：

- perspective-origin  视觉点相对容器的位置


看到的结果基于屏幕上的投影，dom在屏幕的前后会有区别(translateZ()设置的正负值)

perspective可以添加到子元素上，transform:perspective(800px)

- transform-style：3D  使子元素进行3D渲染

## 注意点

1. 设置了perspective或transform-style：3D的元素，其就作为定位参照物元素必须要有高度

2. transform-style：3D只对子元素有效果，每个子元素要进行3d变换时父元素都要设置

3. backface-visibility：hidden(隐藏屏幕背面)

# 案例

1. 旋转照片墙

```css
html {
    width: 100%;
    height: 100%;
}
body {
    margin: 0;
    padding: 0;
    background-color: #000;
    perspective: 2000px;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;

}
.wrapper {
    position: absolute;
    width: 218px;
    height: 328px;
    perspective: 2000px;
    transform-style: preserve-3d;
    border: 1px solid #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: around 5s cubic-bezier(0,0,1,1) infinite;

}
img {
    width:218px;
    position: absolute;
}
img:nth-of-type(1) {
    transform: rotateY(45deg)  translateZ(400px);
}
img:nth-of-type(2) {
    transform: rotateY(90deg)  translateZ(200px);
}
img:nth-of-type(3) {
    transform: rotateY(135deg) translateZ(400px) ;
}
img:nth-of-type(4) {
    transform: rotateY(180deg) translateZ(600px) ;
}
img:nth-of-type(5) {
    transform: rotateY(225deg) translateZ(400px) ;
}
img:nth-of-type(6) {
    transform: rotateY(270deg) translateZ(800px) ;
}
img:nth-of-type(7) {
    transform: rotateY(315deg) translateZ(400px) ;
}
img:nth-of-type(8) {
    transform: rotateY(360deg) translateZ(100px) ;
}
@keyframes around {
    0% {
        transform: translate(-50%, -50%) rotateY(0deg);  
    }
    100% {
        transform: translate(-50%, -50%) rotateY(360deg); 
    }
}
```

# 矩阵
