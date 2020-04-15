# iframe元素

   框架页

   在页面中嵌入另一个页面

   iframe元素：可替换元素

   1. 通常行盒
   2. 显示的内容取决于元素的属性
   3. css不能完全控制元素的属性

# 在页面中使用flash

   object

   embed

   他们都是行盒，可替换元素

   MIME(Mutipurpose Internet Mail Extensions)
   多用途互联网邮件类型：

   比如，资源是一个jpg图片  格式：MIME:image/jpeg

```html
<!-- swf是flash后缀名 -->
<object data="example.swf" type="application/x-shockwave-flash">
   <param name="quality" value="high">
</object>

<embed quality="high" src="example.swf" type="application/x-shockwave-flash">

<!-- 兼容写法 -->
<object data="example.swf" type="application/x-shockwave-flash">
   <param name="quality" value="high">
   <embed quality="high" src="example.swf" type="application/x-shockwave-flash">    
</object>
```



# 表单元素

## input元素

   - type属性：输入框类型

      type：text，文本框
            password，密码框
            date，日期输入框，有兼容性问题
            search，搜索框
            number，数字输入框      min,max,step
            radio,单选框      都要给name属性给它含义
            checkbox，复选框
            file，上传文件

   - value属性：输入框的值

   - placeholder：显示提示的文本，没有内容时提示

   input做按钮，可以用type：reset，button，submit

## select元素

下拉列表选择框

和optgroup,option配合使用
(默认选中 checked   多选multiple)

## textarea

多行文本域

## 按钮属性

button

   - type：reset，submit，button，默认submit

## 表单属性

   readonly：是否可读，不改变样式

   disabled：是否禁用，改变样式

## 配合表单元素的其他元素

###  label 
   
   与单选多选框配合
   通过for属性，让label元素与一个表单元素

###  datalist 
   
   与输入框配合使用

### form

   将整个表单元素，包裹进form

### fieldset元素

   表单分组


# 美化表单元素

tabindex 聚焦属性

## 伪类选择器
:focus  聚焦

   设置outline，outline-offset

:checked 选中

   单选多选框的选中的样式
   input:checked + label

textarea css属性

resize:none   多行文本框不能调整大小

# 美化表单

```css
   .languageForm input[type = 'radio']{
      display: none;
   }
   .languageForm input[type = 'radio']+.radio{
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 1px solid #008c8c;
      border-radius: 50%;
   } 
   .languageForm input[type = 'radio']:checked~span{
      color: #008c8c;
   }
   .languageForm input[type = 'radio']:checked+.radio::after{
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      background: #008c8c;
      border-radius: 50%;
      margin-left: 2.5px;
      margin-top: 2.5px;
   }
```

