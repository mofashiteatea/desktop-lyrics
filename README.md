# 🎶 仿桌面歌词组件 Desktop Lyric Widget

这是一个轻量级、易嵌入的歌词播放组件，仿桌面歌词效果，适合在个人网页中加入🎧  
支持歌词跟随播放进度滚动、歌词拖动、颜色自定义等功能。

## ✨ 功能亮点

- 🎵 点击右下角音乐图标播放 / 暂停音乐  
- 🎤 歌词随播放进度自动滚动显示  
- 🖱️ 歌词可任意拖动位置，适配不同布局  
- 🎨 支持自定义颜色主题  
- ⚠️ 使用逐句 lrc 实现同步，动画基于时长调整，非逐字精确对齐

## 🪄 使用方法

### 🔧 如何将它嵌入你的网页？

1. 下载解压后，找到 `desktop-lyrics-copy` 文件夹，将其整个复制到你的项目目录中
2. 在你的 HTML 文件中加入以下一行代码，即可一键嵌入桌面歌词效果：
```html
<script src="./desktop-lyrics-copy/js/embed.js"></script>
```

### 🎼 如何更换歌曲？

1. 在 `music/` 文件夹中替换 `.mp3` 音乐文件
2. 打开 `js/data.js` ，修改 `getMusicSrc()` 中的音乐文件路径和 `getLrc()` 中的歌词内容（  LRC 格式）

### 🎨 如何自定义颜色？

打开 `css/music.css` ，修改 `:root` 中的颜色变量：
  ```css
  :root {
    --color: #c6dbb4;
}
  ```

你可以替换成任何你喜欢的颜色，打造你的专属歌词风格✨

## 🛠️ 技术栈

HTML + CSS + JavaScript（原生）

## 📦 项目结构

```
desktop-lyrics/
├── index.html                    🪄 示例页面
├── desktop-lyrics-copy/          📁 主项目文件夹
│   ├── css/
│   │   └── music.css             🎨 样式文件
│   ├── js/
│   │   ├── data.js               🎼 歌曲和歌词数据
│   │   ├── embed.js              🪄 嵌入脚本
│   │   └── music.js              ⚙️ 播放控制逻辑
│   └── music/                    🎧 音乐文件
├── LICENSE                       📄 协议文件
└── README.md                     📖 使用说明
```

## 📜 许可证

MIT License  
（可以自由使用、修改和发布，只需注明原作者即可）

## 🍵 作者

- 魔法师茶茶  
- GitHub: [@mofashiteatea](https://github.com/mofashiteatea)