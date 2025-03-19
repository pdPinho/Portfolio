export function handleAutoplay() {
    const videos = document.querySelectorAll('.contentImage');
    videos.forEach(video => {
        if (window.innerWidth < 640) {
            video.setAttribute('autoplay', '');
            video.setAttribute('loop', '');
        } 
        else {
            video.removeAttribute('autoplay');
            video.removeAttribute('loop');
            video.pause();
            video.currentTime = 0;
        }
    });
}

window.addEventListener('load', handleAutoplay);
window.addEventListener('resize', handleAutoplay);
