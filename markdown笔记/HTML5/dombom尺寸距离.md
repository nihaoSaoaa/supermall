# 鼠标事件中的位置：

1. pageX    pageY           鼠标距页面的距离

2. offsetX  offsetY         鼠标相对事件源内边距

3. screenX   screenY        相对屏幕

4. clientX   clientY        相对视口

5. movementX movementY      相对于上次鼠标位置便宜距离



# 窗口尺寸及距离

## 尺寸：

1. window.innerWidth/Height     包含滚动条的视口尺寸

2. document.documentElement.Width/Height    视口宽高

3. window.outerWidth/Height     

4. window.screen.Width/Height     

## 距离：

1. window.pageX(Y)offset    视口距离页面顶部距离



# element对象的尺寸和距离

## 尺寸：

1. element.offsetWidth/Height       包含滚动条的尺寸(content+padding+border+滚动条)

2. element.clientWidth/Height       不含滚动条的尺寸(content+padding)

3. element.scrollWidth/Height       元素内所有内容的尺寸

## 距离

1. element.offsetTop/Left           相对父级的定位

2. element.getBoundingClientRect()  相对视口左上角位置

3. element.scrollTop/Left           元素内部滚动条滚动距离

