class StarMain {
    constructor(totalStarCount) {
        this.propMap = new Map([
            ['star', {
                starCount: totalStarCount,
                defaultOpacity: '0.4',
                fullOpacity: 1,
                dimension: '40',
                element: 'img',
                prefix: 'star_',
                src: './resources/images/star.png',
            }]
        ]);
        this.stars = new Map();
        this.lastActiveStar = -1;

    }

    createEl(el) {
        return document.createElement(el)
    }

    getDoc(el) {
        return document.getElementById(el)
    }

    initStar() {
        let pTag = this.createEl('p');
        pTag.innerHTML = 'Please provide your Stars for KrishXpress';
        this.getDoc('body_container').appendChild(pTag);
        const star = this.propMap.get('star');
        for (let i = 0; i < star.starCount; i++) {
            this.img = document.createElement(star.element);
            this.img.id = star.prefix + i;
            this.img.counter = i;
            this.img.src = star.src;
            this.img.style.opacity = star.defaultOpacity;
            this.img.style.cursor = 'pointer';
            this.img.width = this.img.height = star.dimension;
            this.stars.set(i, {
                img: this.img,
                active: false,
                id: star.prefix + i
            });
            this.getDoc('container').appendChild(this.img);
            this.img.setAttribute('data-active', 'false');
            this.img.setAttribute('alt', 'starimage-' + i);
            this.img.addEventListener('click', this.onStarClick.bind(this));
            this.img.addEventListener('mouseover', this.onStarOver.bind(this));
            this.img.addEventListener('mouseout', this.onStarOut.bind(this));
        }
    }

    onStarClick(e) {
        const clickedStar = e.target.counter,
            propStar = this.propMap.get('star');
        for (const [k, v] of this.stars) {
            v.active = false;
            v.img.style.opacity = propStar.defaultOpacity;
        }
        if (this.lastActiveStar < 0 || this.lastActiveStar !== clickedStar) {
            for (const [k, v] of this.stars) {
                console.log('>> ', k, v);
                if (k <= clickedStar) {
                    if (v.active === false) {
                        v.active = true;
                        v.img.style.opacity = propStar.fullOpacity;
                    }
                }
            }
            this.lastActiveStar = clickedStar;
        } else {
            this.lastActiveStar = -1;
        }
    }

    onStarOver(e) {
        this.mouseOverOut(e, true);
    }

    // mouseOverOut method sets the star to active when mouse is over and inactive when mouse is out
    // params: e - event and isHover - true when mouse is over and false when mouse is out
    mouseOverOut(e, isHover) {
        const propStar = this.propMap.get('star');
        for (const [k, v] of this.stars) {
            v.img.style.opacity = (isHover) ? ((k <= e.target.counter) ? (propStar.fullOpacity) : (propStar.defaultOpacity)) : ((v.active === true) ? (propStar.fullOpacity) : (propStar.defaultOpacity));
        }
    }

    onStarOut(e) {
        this.mouseOverOut(e, false);
    }

}

const starMain = new StarMain(5);
starMain.initStar();