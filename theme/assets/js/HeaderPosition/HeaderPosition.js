class HeaderPosition {
    constructor() {
        this.header = document.querySelector('.ks-header');
        this.fixedClassname = 'ks-header__fixed';
        this.lastScrollTop = 0;
    }

    showHeader() {
        this.header.classList.add(this.fixedClassname)
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