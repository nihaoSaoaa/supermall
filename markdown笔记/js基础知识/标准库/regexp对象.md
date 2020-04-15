```javascript
    function execReg(reg,str) {
            var newResult = reg.exec(str);
            console.log(newResult);
            return; 
        }
        function matchStr(reg,str) {
            var newResult = str.match(reg);
            console.log(newResult);
            return;
        }
        var reg1 = /test/;
        var str1 = 'testResult';
        var newResult = reg1.exec(str1);  //返回的是类数组 {0："test",...}} 
        
        // 属性i,g,m
        var reg = /ab/i;              //忽视大小写
        var str = "aB";
        

        var reg = /ab/ig;                 //全局匹配(不只返回一个)
        var str = "ababcabAb";
        var result = str.match(reg);        //返回的是数组


        //  []字符集 , |(或) , ^(非)
        var reg = /[0-9][a-z][A-z]/g;
        var reg = /(a|1|c)/g;
        var reg = /[^a]/g;
        var str = "1bA3112cC";

        // +{1,} *{0,}  ?{0,1}   
        var reg = /\d*/g;
        var reg = /\w*/g;
        var reg = /\w+/g;
        var reg = /\w?/g;
        var reg = /\w+?/g;        //?可以打破贪婪匹配
        var str = "abc123";

        //^ begin     $ end
        var reg = /^abc$/g;
        var str = "abc";
        var str = "abcabc";

        //example  首尾是否含数字&&都是数字
        var str = "1nba2";
        var reg = /^\d[\s\S]*|[\s\S]*\d$/g;        
        var reg = /^\d[\s\S]*\d$/g;

        reg = /^b|c.+/g;
        str='cainiao';


        // \l叫做反向引用，表示第一个括号内的子正则表达式匹配的内容(而不是括号内的内容)
        reg = /(\w)\1/;
        str='bbs.blueIdea.com'; 
        str='basket'; 

        // ()内?:pattern 可以避免保存括号内的匹配结果，同样会导致\1匹配不到()内匹配的内容而失效
        reg = /^(?:b|c).+/;
        reg = /^(?:b|c)\1/;
        str='bbs.blueidea.com';


        //正向预查  (?=pattern) 要求匹配到的字符(串)跟着pattern
        //正向断言  (?!pattern) 不跟着pattern

    
        //replace方法
        var reg = /(\w+)\s(\w+)/;
        var str = 'cainiao gaoshou';
        var newStr = str.replace(reg,'$2$2 $1$1');
        var newStr = str.replace(reg, (match, g1, g2) => {
            return `${g2}${g2} ${g1}${g1}`;
        });
                
        var str = "aabb";
        var reg = /(\w)\1(\w)\2/;
        var newStr = str.replace(reg,'$2$2$1$1');

        /<ul>[\s\S]+?<ul>/i 
        //首先匹配两侧的ul标签，中间的[\s\S]+?可以匹配一个或者多个任意字符，
        //一定要非贪婪，否则会匹配<ul>babel<ul>babel</ul><ul>。

　

        //1.数字每隔三位加点
        var num = "100000000";
        var reg = /(\B)(?=(\d{3})+$)/g;
        var newNum = num.replace(reg,"."); 

        //2.匹配网页标签
        var tagName = /<([^>]+)>[^<]*<\/\1>/;
        tagName.exec("<b>bold</b>")[1];

        var html = '<b class="hello">Hello</b><i>world</i>';
        var tag = /<(\w+)([^>]*)>(.*?)<\/\1>/g;

        //3. 匹配网页(?:)非捕获组
        var url = /(?:http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
        url.exec('http://google.com/');

        //4. 判断密码强度
        var tag = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#_,\.]).{6,12}$/;

```

## 转义字符

\n   换行
\r   回车
\t   制表
。。。

## 

1. test方法： 返回布尔值

在全局匹配时，lastIndex会变化。

2. exec方法：返回数组

如果正则表达式没有设置g，那么exec方法不会对正则表达式有任何的影响，如果设置了g，那么exec执行之后会更新正则表达式
的lastIndex属性，表示本次匹配后.

所匹配字符串的下一个字符的索引，下一次再用这个正则表达式匹配字符串的时候就会从上次的lastIndex属性开始匹配，
也就是上面两个例子结果不同的原因了。

3. match方法：返回数组

设置了g修饰符的正则表达式在完成一次成功匹配后不会停止，而是继续找到所有可以匹配到的字符。不过没有提供input和index这些信息。

4. search方法：返回布尔值

5. split方法：按照参数分割，返回数组