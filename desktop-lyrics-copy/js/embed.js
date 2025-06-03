(function () {
    const container = document.createElement('div');
    container.id = 'desktop-lyrics';
    document.body.appendChild(container);

    const music_css = document.createElement('link');
    music_css.rel = 'stylesheet';
    music_css.href = './desktop-lyrics-copy/css/music.css';
    document.head.appendChild(music_css);

    const data_js = document.createElement('script');
    data_js.src = './desktop-lyrics-copy/js/data.js';
    document.body.appendChild(data_js);

    data_js.onload = function () {
        const music_js = document.createElement('script');
        music_js.src = './desktop-lyrics-copy/js/music.js';
        document.body.appendChild(music_js);
        
        container.innerHTML = `<div class="lyric">
            <p class="shadow"></p>
            <p class="gradient"></p>
        </div>
        <svg class="off active" t="1748607591629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2123" width="48" height="48"><path d="M85.333333 224.853333L139.946667 170.666667 853.333333 884.053333 799.146667 938.666667 384 523.52v223.146667C384 829.013333 317.013333 896 234.666667 896S85.333333 829.013333 85.333333 746.666667 152.32 597.333333 234.666667 597.333333c23.04 0 44.8 5.12 64 14.506667v-173.653333l-213.333334-213.333334M896 128v533.333333c0 42.666667-18.346667 81.92-47.786667 109.226667l-210.773333-210.773333c27.306667-29.44 66.56-47.786667 109.226667-47.786667 23.04 0 44.8 5.12 64 14.506667V276.053333l-376.746667 80.213334-107.093333-107.093334L896 128z" p-id="2124"></path></svg>
        <svg class="on" t="1748607990730" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2281" width="48" height="48"><path d="M896 128v533.333333c0 82.346667-66.986667 149.333333-149.333333 149.333334S597.333333 743.68 597.333333 661.333333s66.986667-149.333333 149.333334-149.333333c23.04 0 44.8 5.12 64 14.506667V276.053333L384 366.933333v379.733334C384 829.013333 317.013333 896 234.666667 896S85.333333 829.013333 85.333333 746.666667 152.32 597.333333 234.666667 597.333333c23.04 0 44.8 5.12 64 14.506667V256l597.333333-128z" fill="" p-id="2282"></path></svg>
        <audio src="${getMusicSrc()}"></audio>`;
    };
})();