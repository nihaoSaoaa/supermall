# 概念 
    <canvas>元素用于生成图像。它本身就像一个画布，JavaScript 通过操作它的 API，在上面生成图像。它的底层是一个个像素，基本上<canvas>是一个可以用 JavaScript 操作的位图（bitmap）。
```html
    <div>
        <canvas id="myCanvas" width="400" height="250"></canvas>
    </div>
```

## 绘制图形

### 线型
```javascript
    var canvas = document.getElementById("myCanvas");
    //返回CanvasRenderingContext2D对象,
    var ctx = canvas.getContext('2d'); //另一个参数是webgl，表示生成3d的立体图案，属于webgl api

    ctx.beginPath();//开始绘制路径
    ctx.moveTo(100,100);//移动起始点到坐标(100,100)
    ctx.lineTo(200,200);//直线连接到坐标(200,200)
    ctx.lineTo(100,200);
    ctx.closePath();//结束路径，返回起始点
    
    
    ctx.fillStyle = "red";//填充样式
    ctx.fill();
    
    ctx.strokeStyle = "black";//线条样式
    ctx.lineWidth = "3.0";
    ctx.lineCap = "round";//square butt(def)    
    ctx.lineJoin = "round";//bevel miter(def)
    ctx.setLineDash([15,5]);//设置虚线，传入数组[长度，间隔]
    //若设置miter可以继续设置限制的长度
    ctx.miterLimit = 5;
    ctx.stroke();
```

### 矩形
```javascript
    ctx.rect(10,10,100,100);//x，y，width,height
    ctx.fillStyle = "green";
    ctx.fillRect(10,10,100,100);
    ctx.strokeStyle = "blue";
    ctx.strokeRect(10,10,100,100);
    ctx.clearRect(20,20,80,80);
```
### 弧线

CanvasRenderingContext2D.arc()：通过指定圆心和半径绘制弧形。
例：ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

```javascript
    //画一个圆
    ctx.beginPath();
    ctx.arc(60,60,50,0,Math.PI * 2,true);
    ctx.fill();
    //画一个半圆
    ctx.beginPath();
    ctx.moveTo(50,100);
    ctx.arc(100,100,50,0,Math.PI,true);
    ctx.stroke();
```
CanvasRenderingContext2D.arcTo()方法主要用来绘制圆弧
```javascript
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.arcTo(50,50,100,0,50*1.414);
    ctx.lineTo(100,0);
    ctx.stroke();

    //绘制一个圆角矩形
    ctx.beginPath();
    ctx.moveTo(100, 110);
    ctx.arcTo(100, 200, 200, 200, 10);
    ctx.arcTo(200, 200, 200, 200, 10);
    ctx.arcTo(200, 100, 100, 100, 10);
    ctx.arcTo(100, 100, 100, 200, 10);
    ctx.stroke();

    //贝塞尔曲线绘制一个波浪
     const [width, height] = [500, 300];
    let [offset, num] = [0, 0];
    setInterval(() => {
        ctx.clearRect(0, 0, 500, 300);
        ctx.beginPath();
        ctx.moveTo(0 + offset, height / 2);
        ctx.quadraticCurveTo(width / 4 + offset, height / 4 + Math.sin(num) * 120, width / 2 + offset, height / 2 );
        ctx.quadraticCurveTo(width / 4 * 3 + offset, height / 4 * 3 - Math.sin(num) * 120, width + offset, height / 2);

        ctx.moveTo(0 + offset - 500, height / 2 );
        ctx.quadraticCurveTo(width / 4 - 500 + offset, height / 4 + Math.sin(num) * 120, width / 2 - 500 + offset, height / 2 );
        ctx.quadraticCurveTo(width / 4 * 3 - 500 + offset, height / 4 * 3 - Math.sin(num) * 120, width - 500 + offset, height / 2 );
        ctx.stroke();
        offset += 5;
        offset %= 500;
        num += 0.02;
    }, 20);
```

### 文本

fillText()方法用来在指定位置绘制实心字符。

CanvasRenderingContext2D.fillText(text, x, y [, maxWidth])
```javascript
    //stroke添加空心字符
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";
    ctx.direction = "ltr";
    
    ctx.strokeText("hello world",100,100); //文字描边
    ctx.fillText("hello world",100,100);    //文字填充
```

### 渐变色，图像填充

1. createLinearGradient()方法按照给定直线，生成线性渐变的样式。
ctx.createLinearGradient(x0, y0, x1, y1)
返回值是一个CanvasGradient对象，该对象只有一个addColorStop()方向。

```javascript
    // 线型渐变
    var gradient = ctx.createLinearGradient(0,0,200,0);//从坐标(0,0)到坐标(200,0);
    gradient.addColorStop(0,"green");
    gradient.addColorStop(0.5,"blue");
    gradient.addColorStop(1,"white");
    ctx.fillStyle = gradient;//样式指定给fillStyle属性
    ctx.fillRect(10,10,200,200);
    //辐射渐变
    var gradient = ctx.createRadialGradient(100, 100, 50, 100, 100, 100);
    //起始圆到末端圆的渐变
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, 'green');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 200, 200);
```
createPattern()方法定义一个图像填充样式，在指定方向上不断重复该图像，填充指定的区域。

```javascript
    var img = new Image();
    img.src = "https://image1.pzhan.com/20191029/0f21bc8cf289fc9bcebdbabd2bda3592.png";
    img.onload = function() {
        //canvas渲染图片都是从原点开始的，translate可以改变渲染的起点
        ctx.translate(100, 100);
        var pattern = ctx.createPattern(img,"no-repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(0,0,200,400);
    }
```

### 阴影

```javascript
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 5;
    
    ctx.fillStyle = "green";
    ctx.fillRect(10,10,100,100);

```

## 图像处理

### drawImage()

<canvas>元素的大小设置成图像的本来大小，就能保证完整展示图像。
由于图像的本来大小，只有图像加载成功以后才能拿到，
因此调整画布的大小，必须放在image.onload这个监听函数里面。

```javascript
    var image = new Image(60, 45);
    image.onload = drawImageActualSize;
    image.src = 'https://image1.pzhan.com/20191029/0f21bc8cf289fc9bcebdbabd2bda3592.png';

    function drawImageActualSize() {
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight);
    }
```
### getImageData(x,y,w,h) setImageData() createImageData()

### save() restore()

保存图像过程，如图像的平移，缩放，旋转，而不影响外面的坐标系变化。

### canvas

### 图像变换

- CanvasRenderingContext2D.rotate()：图像旋转

- CanvasRenderingContext2D.scale()：图像缩放

- CanvasRenderingContext2D.translate()：图像平移

- CanvasRenderingContext2D.transform()：通过一个变换矩阵完成图像变换

- CanvasRenderingContext2D.setTransform()：取消前面的图像变换

```javascript
    //旋转中心点始终是画布左上角的原点。如果要更改中心点，需要使用translate()方法移动画布。
    ctx.rotate(45 * Math.PI / 180);
    ctx.scale(2, 2);
    ctx.fillRect(70, 0, 100, 30);

    ctx.setTransform();
    
    //ctx.scale(-1, 1)为水平翻转，ctx.scale(1, -1)表示垂直翻转。
    //负向缩放本质是坐标翻转，所针对的坐标轴就是画布左上角原点的坐标轴。
    ctx.scale(1, -2);
    ctx.font = "16px serif";
    ctx.fillText('Hello world!', 20, -20);

    ctx.setTransform();

      /*
        a:水平缩放(默认值1，单位倍数)
        b:水平倾斜(默认值0，单位弧度)
        c:垂直倾斜(默认值0，单位弧度)
        d:垂直缩放(默认值1，单位倍数)
        e:水平位移(默认值0，单位像素)
        f:垂直位移(默认值0，单位像素)
    */
    ctx.transform(2, 0, 0, 1, 50, 50);
    ctx.fillRect(0, 0, 100, 100);
  
```

