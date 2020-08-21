# workflow
### 环境管理
###### 安装vuejs并创建项目
```
npm install -g @vue/cli
vue create workflow
cd workflow
```
###### 安装配置vuetify
```
vue add vuetify

为 Vuetify 创建一个包含以下内容的插件文件，src/plugins/vuetify.js
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
```
###### 安装 Font Awesome 5 Icons
```
使用cdn: 主html头部放入

<link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
本地安装：
npm install @fortawesome/fontawesome-free -D

本地安装的设置：
// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.use(Vuetify);

const opts = {}

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
});

```
###### 安装vscode辅助插件

### 功能搭建

