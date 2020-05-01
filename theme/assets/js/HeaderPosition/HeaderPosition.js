class HeaderPosition {
    constructor() {
        this.header = document.querySelector('.ks-header');
        this.translateYVisible = 'translateY(0)';
        this.translateYHidden = 'translateY(-100%)';
        this.fixedClassname = 'ks-header__fixed';
        this.lastScrollTop = 0;
    }

    headerTranslateHide() {
        this.header.style.transform = this.translateYHidden;
    }

    showHeader() {
        this.header.classList.add(this.fixedClassname)
        this.header.style.transform = this.translateYVisible;
    }

    hideHeader() {
        this.header.classList.remove(this.fixedClassname)
    }

    scrollPage() {
        window.addEventListener("scroll", () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if(window.scrollY > this.header.clientHeight) {
                if (st > this.lastScrollTop){
                    this.hideHeader();
                    this.headerTranslateHide();
                } else {
                    this.showHeader();
                }
                this.lastScrollTop = st <= 0 ? 0 : st;
            }
            else {
                this.hideHeader();
            }
        }, false);
    }
}

export default HeaderPosition;