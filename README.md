# 轱辘 一个vue ui组件


## 介绍
    这是我在学习vue过程中制作的一个ui框架，希望对你有用
## 开始使用
1.添加 CSS 样式
    使用本框架，请在css中开启border-box
    ````
    *,*::before,*::after{box-sizing: border-box;}
    ````
    IE 8 及以上浏览器支持该样式
    你还需要设置默认颜色等变量（后续会改为less变量）
    ````
    html {
              --botton-height: 32px;
              --font-size: 14px;
              --button-bg: white;
              --button-active-bg: #eee;
              --border-radius: 4px;
              --color: #333;
              --border-color: #999;
              --border-color-hover: #666;
          }
    ````
    IE 15 及以上浏览器支持该样式
2. 安装
    ````
    npm i -S j-gulu
    ````
3. 引入
    ````
    import { Button } from "j-gulu";
    import "j-gulu/dist/index.css";

    export default {
      name: "App",
      components: {
        HelloWorld,
        "g-button": Button
      }
    };
    ````
4. 引入svg symbols
    ````
    <script src="//at.alicdn.com/t/font_1942669_au7z042eqw9.js"></script>
    ````

## 文档

## 提问

## 变更记录
作者：詹杰

