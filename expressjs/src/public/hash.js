class StarMain {
    constructor(totalStarCount) {
        this.propMap = new Map([
            ['star', {
                starCount: totalStarCount,
                defaultOpacity: '0.4',
                fullOpacity: 1,
                dimension: '20',
                element: 'img',
                prefix: 'star_',
                src: './resources/images/star.png',
            }]
        ]);
        this.stars = new Map();
    }

    initStar() {
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
            document.getElementById('container').appendChild(this.img);

            this.img.setAttribute('data-active', 'false');

            this.img.addEventListener('click', this.onStarClick.bind(this));
            this.img.addEventListener('mouseover', this.onStarOver.bind(this));
            this.img.addEventListener('mouseout', this.onStarOut.bind(this));
        }
    }

    onStarClick(e) {
        console.log('this.stars >>> ', this.stars, 'param >>', e.target);
        const clickedStar = e.target.counter;
        const propStar = this.propMap.get('star');
        console.log('clickedStar >>', clickedStar);
        for (const [k, v] of this.stars) {
            console.log('>> ', k, v);
            if (k <= clickedStar) {
                if (v.active === true) {
                    v.active = false;
                    v.img.style.opacity = propStar.fullOpacity;
                } else {
                    v.active = true;
                    v.img.style.opacity = propStar.defaultOpacity;
                }
            }
        }
        console.log(this);
    }

    onStarOver(e) {
        const propStar = this.propMap.get('star');
        for (const [k, v] of this.stars) {
            if (k <= e.target.counter)
                v.img.style.opacity = propStar.fullOpacity;
            else
                v.img.style.opacity = propStar.defaultOpacity;
        }
    }

    onStarOut(e) {
        const propStar = this.propMap.get('star');
        for (const [k, v] of this.stars) {
            if (v.active === true)
                v.img.style.opacity = propStar.fullOpacity;
            else
                v.img.style.opacity = propStar.defaultOpacity;
        }
    }

}

const starMain = new StarMain(5);
starMain.initStar();