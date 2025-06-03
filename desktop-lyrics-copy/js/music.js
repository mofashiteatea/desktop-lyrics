// 点击播放音乐
const off = document.querySelector("#desktop-lyrics .off");
const on = document.querySelector("#desktop-lyrics .on");
const audio = document.querySelector("#desktop-lyrics audio");

off.addEventListener("click", function () {
    off.classList.remove("active");
    on.classList.add("active");
    audio.play();
});
on.addEventListener("click", function () {
    on.classList.remove("active");
    off.classList.add("active");
    audio.pause();
});

// 拖动歌词
const lyric = document.querySelector("#desktop-lyrics .lyric");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

lyric.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - lyric.offsetLeft;
    offsetY = e.clientY - lyric.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        lyric.style.left = (e.clientX - offsetX) + 'px';
        lyric.style.top = (e.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// 处理歌词
let time = [0], lyricArr = [''];
function handleLrc(lrc) {
    const regex = /^\[(\d{2}):(\d{2})\.(\d{1,})\]/;
    lrc = lrc.split('\n');
    for (let i = 0; i < lrc.length; i++) {
        const match = lrc[i].match(regex);
        if (match) {
            const min = Number(match[1]);
            const sec = Number(match[2]);
            const msec = Number(match[3]) / (10 ** match[3].length);
            let content = lrc[i].replace(regex, '');
            if (content != '') {
                time.push(min * 60 + sec + msec);
                lyricArr.push(content);
            }
        }
    }
    time.push(1e9);
}
handleLrc(getLrc());

// 定位当前歌词
const shadowLyric = document.querySelector("#desktop-lyrics .shadow");
const gradientLyric = document.querySelector("#desktop-lyrics .gradient");
let nowLyricIndex = -1;
function locateCurrentLyric() {
    const now = audio.currentTime;
    for (let i = 1; i < lyricArr.length; i++) {
        if (now >= time[i] && now < time[i + 1]) {
            if (nowLyricIndex !== i) {
                nowLyricIndex = i;
                shadowLyric.innerHTML = lyricArr[i];
                gradientLyric.innerHTML = lyricArr[i];
                gradientLyric.classList.remove('active');
                void gradientLyric.offsetWidth;
                gradientLyric.classList.add('active');
                gradientLyric.style.animationDuration = `${time[i + 1] - time[i]}s`;
            }
        }
    }
}
audio.addEventListener('timeupdate', locateCurrentLyric);

// 暂停歌词
audio.addEventListener('pause', () => {
    gradientLyric.style.animationPlayState = 'paused';
});
audio.addEventListener('play', () => {
    gradientLyric.style.animationPlayState = 'running';
});