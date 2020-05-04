class Video {
    constructor() {
        this.activeClassName = 'active';
        this.popupClassName = 'ks-popup';
        this.buttons = document.querySelectorAll('.ks-button__video a');
        this.videoId = document.getElementById('ks-video-popup');
        this.allOverlays = document.querySelectorAll('.ks-popup .ks-overlay');
        this.videoIframe = false;
        this.videoSource = false;
        this.isVideoRunning = false;
    }

    renderVideoSrc() {
      return this.isVideoRunning ? this.videoIframe.src = this.videoSource : this.videoIframe.src = '';
    }
    
    toggleVideo() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.videoId.classList.toggle(this.activeClassName);
                this.isVideoRunning = !this.isVideoRunning;
                this.renderVideoSrc();
            })
        })
    };

    hideOnOverlayClick() {
        this.allOverlays.forEach(overlay => {
            overlay.addEventListener('click', () => {
                overlay.closest(`.${this.popupClassName}`).classList.remove(this.activeClassName);
                this.isVideoRunning = false;
                this.renderVideoSrc();
            })
        })
    };

    init() {
      this.videoIframe = document.querySelector('#ks-video-popup iframe');
      if(this.videoIframe != null) {
        this.videoSource = `${this.videoIframe.src}&amp;autoplay=1`;
        this.toggleVideo();
        this.hideOnOverlayClick();
        this.renderVideoSrc();
      }
      else {
        return;
      }
    }
}

export default Video;