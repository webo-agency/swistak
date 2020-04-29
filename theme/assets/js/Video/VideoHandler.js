class Video {
    constructor() {
        this.activeClassName = 'active';
        this.popupClassName = 'ks-popup';
        this.buttons = document.querySelectorAll('.ks-button__video a');
        this.videoId = document.getElementById('ks-video-popup');
        this.videoIframe = document.querySelector('#ks-video-popup iframe');
        this.allOverlays = document.querySelectorAll('.ks-popup .ks-overlay');
    }
    
    toggleVideo() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.videoId.classList.toggle(this.activeClassName);
                this.videoIframe.setAttribute('autoplay', 'true');
            })
        })
    };

    hideOnOverlayClick() {
        this.allOverlays.forEach(overlay => {
            overlay.addEventListener('click', () => {
                overlay.closest(`.${this.popupClassName}`).classList.remove(this.activeClassName);
            })
        })
    };

    init() {
        this.toggleVideo();
        this.hideOnOverlayClick();
    }
}

export default Video;