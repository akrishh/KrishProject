console.log('loggers loaded....');
const inputJSON = {
    "data": {
        "loggers": [{
            "url": "/",
            "description": "main",
            "parent": "NULL",
        }, {
            "url": "/home",
            "description": "home",
            "parent": "/",
        }, {
            "url": "/aboutus",
            "description": "about us",
            "parent": "/home",
        }, {
            "url": "/aboutusmore",
            "description": "about us more",
            "parent": "/aboutus",
        }, {
            "url": "/contactus",
            "description": "contact us",
            "parent": "/",
        }, {
            "url": "/aboutcompany",
            "description": "about company",
            "parent": "/aboutus",
        }]
    }
}

class Logger {
    constructor() {
        this.dataMap = new Map();

    }

    init(data) {
        this.allChilds = new Array();
        data.loggers.forEach(el => {
            const v = this.getChild(el, data);
            // if (v.length > 0) {
            //     this.getRecursiveChild(v, data);
            // }
            // console.log('allChilds >> ', this.allChilds);
            this.dataMap.set(el.url, {
                child: v,
                hasLink: v.length > 0
            });
        });
        console.log(this.dataMap);
    }

    getRecursiveChild(v, data) {
        v.forEach(vEl => {
            const child = this.getChild(vEl, data);
            if (child.length > 0)
                this.allChilds.push(child);
        });
    }

    getChild(p, data) {
        return data.loggers.filter(e => {
            return p.url === e.parent
        });
    }

    validate(a, b) {
        if (this.dataMap.get(a) === undefined) {
            return "invalid URL";
        }
        return ((this.dataMap.get(a).child.filter(e => e.url === b)).length > 0);
    }
}

const log = new Logger();
log.init(inputJSON.data);
console.log('Result >> ', log.validate('/aboutcompany', '/home'));