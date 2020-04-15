1. 让div撑满视口

```css
:root,body {
    margin: 0;
    height: 100%;
}
div {
    width: 100%;
    height: 100%;
}
```

2. 使用目标选择器时让所有目标先都不显示

```css
div:not(:target) {
    display: none;
}
```

3. 块盒居中

```css
/* 已知宽高100px 100px */
div {   
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
/* 未知宽高 */
div {   
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* flex布局居中 */
parentDiv {
    align-items：center;
    justify-content: center;
}
```

4. 利用伪元素创建一条竖线

```css
/* div设置relative，在div右边创建一个长30宽1竖线 */
div::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    width: 1px;
    background-color: grey;
}
```

5. 复选框样式自定义

```html
<label for="xxx">选项
    <label for="a">选项A
        <input type="radio" name="xxx" id="a" value="a">
        <span class="radio"></span>
    </label>
    <label for="b">选项B
        <input type="radio" name="xxx" id="b" value="b">
        <span class="radio"></span>
    </label>
</label>
```

```css
input {
    display: none;
}
input+.radio {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid #008c8c;
    border-radius: 50%;
    position: relative;
}
input:checked+.radio::after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    background: #008c8c;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
}
```

6. 当行溢出文本用...表示

```css
p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
```

7. 交错动画

```css
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #222;
}

.loading {
  display: flex;
  animation-delay: 1s;
}
.loading .dot {
  position: relative;
  width: 2em;
  height: 2em;
  margin: 0.8em;
  border-radius: 50%;
}
.loading .dot::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  animation: wave 2s ease-out infinite;
}
.loading .dot:nth-child(1) {
  background: #7ef9ff;
}
.loading .dot:nth-child(1)::before {
  animation-delay: 0.2s;
}
.loading .dot:nth-child(2) {
  background: #89cff0;
}
.loading .dot:nth-child(2)::before {
  animation-delay: 0.4s;
}
.loading .dot:nth-child(3) {
  background: #4682b4;
}
.loading .dot:nth-child(3)::before {
  animation-delay: 0.6s;
}
.loading .dot:nth-child(4) {
  background: #0f52ba;
}
.loading .dot:nth-child(4)::before {
  animation-delay: 0.8s;
}
.loading .dot:nth-child(5) {
  background: #000080;
}
.loading .dot:nth-child(5)::before {
  animation-delay: 1s;
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }
  80%,
  100% {
    opacity: 0;
  }
}
```

8. 文字交错显现

```css
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 2em;
    background-color: #222222;
    color: #69D3E6;
    height: 100vh;
}
.fadeIn {
    display: flex;
    position: relative;
    white-space: pre;
}
.fadeIn::after, .fadeIn::before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    opacity: 0;
    transform: scale(0);
}
.fadeIn::before {
    left: 50%;
    animation:slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
}
.fadeIn::after {
    right: 50%;
    animation:slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
}
.fadeIn>span {
    opacity: 0;
    transform: scale(0);
    animation: fadeIn 1.5s ease-out forwards;
}
@keyframes fadeIn {
    to {
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes slideLeft {
    to {
        left: -6%;
        opacity: 1;
        transform: scale(0.9);
    }
}
@keyframes slideRight {
    to {
        right: -6%;
        opacity: 1;
        transform: scale(0.9);
    }
}
```

```javascript
const fadeInTexts = document.querySelectorAll('.fadeIn');
fadeInTexts.forEach(fadeInText => {
    const words = fadeInText.textContent.split('');
    fadeInText.textContent = '';
    words.forEach((word, i) => {
        const span = document.createElement('span');
        span.textContent = word;
        const middle = Math.ceil(words.length / 2 - 1);
        span.style.animationDelay = `${0.5 + Math.abs(i - middle) * 0.1}s`;
        fadeInText.appendChild(span);
    });
});
```

9. 隐藏障眼法

```css
@import url(https://fonts.googleapis.com/css?family=Lato);
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #222;
}

.btn {
  --hue: 190;
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;
}
.btn:hover {
  background: hsl(var(--hue), 100%, 31%);
}
.btn-primary {
  --hue: 187;
}
.btn-ghost {
  color: hsl(var(--hue), 100%, 41%);
  background-color: transparent;
  border-color: hsl(var(--hue), 100%, 41%);
}
.btn-ghost:hover {
  color: white;
}
.btn-shine {
  color: white;
}
.btn-shine::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, hsla(var(--hue), 100%, 41%, 0.5), transparent);
  transform: translateX(-100%);
  transition: 0.6s;
}
.btn-shine:hover {
  background: transparent;
  box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
}
.btn-shine:hover::before {
  transform: translateX(100%);
}
```

10. box-shadow

```css
body {
    background-color: #222222;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.burger-menu {
    background-color: #222;
    border: 2px solid #000;
    z-index: 2;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    position: relative;
    /* 消除按钮的outline */
    outline: none;  
    cursor: pointer;
    transition: all .5s ease;
}
.burger-menu .line {
    position: absolute;
    height: 3px;
    width: 50%;
    background-color: #000;
    border-radius: 1.5px;
    left: 25%;
    overflow: hidden;
    transition: all .5s ease;
}
.burger-menu .line:nth-of-type(1) {
    top: 30%;
}
.burger-menu .line:nth-of-type(3) {
    top: 70%;
}
.burger-menu .line::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: lightblue;
    top: 0;
    left: 0;
    transition: 0.25s ease;
    transform: translateX(-100%);
}
.burger-menu .line:nth-of-type(2)::after {
    transition-delay: 0.1s;
}
.burger-menu .line:nth-of-type(3)::after {
    transition-delay: 0.2s;
}
.burger-menu:hover .line::after {
    transform: translateX(0);
}
.burger-menu.active .line:nth-of-type(1) {
    top: 50%;
    transform: rotate(45deg);
}
.burger-menu.active .line:nth-of-type(2) {
    transform: scale(0);
}
.burger-menu.active .line:nth-of-type(3) {
    top: 50%;
    transform: rotate(-45deg);
}
.burger-menu.active {
    box-shadow: 0 0 0 1000px lightblue;
}
```

```html
<button class="burger-menu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</button>
<script>
    const btn = document.querySelector('.burger-menu');
    btn.addEventListener('click', function () {
        btn.classList.toggle('active');
    });
</script>
```

