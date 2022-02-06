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
        // const myPromise = new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve('promise captured');
        //     }, 100);
        // });

        // myPromise.then(result => {
        //     console.log('promise: ', result);
        // });
    }

    getDoc(el) {
        return document.getElementById(el)
    }

    experiment() {
        const arr1 = new Array(1, 2, 3, 4);
        const reducer = (a, b) => a * b;
        console.log('arr1 >>', arr1.reduce(reducer));
        let idx = 1;
        console.log(`This is a sample ${arr1.at(idx)}`);
        console.log(arr1);
        console.log(Array.of(1, 2, 3));
        const isBelowThreshold = (value) => value < 2;
        console.log(arr1.every(isBelowThreshold));
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
            this.getDoc('container').appendChild(this.img);
            this.img.setAttribute('data-active', 'false');
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

// starMain.experiment();