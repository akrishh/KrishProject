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
    constructor(data) {
        this.dataMap = new Map();
        this.responses = (a, b, state) => {
            let invalidTxt = 'invalid';
            if (state === invalidTxt)
                return `The given input URL '${a}' or '${b}' is <span class="rc">${this.toUpper(invalidTxt)}</span>.`;
            else {
                let flag = this.dataMap.get(a).ancestors.filter(e => e === b).length > 0;
                return `The LINK between '${a}' and '${b}' is <span class="${flag ? 'gc' : 'rc'}">${this.toUpper(flag)}</span>.`;
            }
        }
        this.toUpper = (param) => param.toString().toUpperCase();
        this.getParent = (p) => this.dataMap.get(p);
        this.getChild = (p, data) => data.loggers.filter(e => p.url === e.parent);
        this.isUndefined = (param) => typeof param === "undefined";
        this.getDoc = (el) => document.getElementById(el);

        data.loggers.forEach(el => {
            let ancestors = new Array();
            this.collectAncestors(el, ancestors, data);
            ancestors = [...new Set(ancestors)];
            // console.log(el.url, ' >> ancestors >> ', ancestors);
            const c = this.getChild(el, data);
            this.dataMap.set(el.url, {
                child: c,
                parent: el.parent,
                ancestors: ancestors,
                hasChild: c.length > 0
            });
        });
        // console.log('dataMap >>>', this.dataMap);
    }

    collectAncestors(el, arr, data) {
        if (!this.isUndefined(el.parent) && el.parent !== "NULL")
            arr.push(el.parent);
        let p = this.getParent(el.parent);
        if (!this.isUndefined(p) && p !== "NULL" && !this.isUndefined(p.parent) && p.parent !== "NULL") {
            arr.push(p.parent);
            this.collectAncestors(p, arr, data);
        }
    }

    validate(a, b) {
        return this.getDoc('loggers').innerHTML = (this.isUndefined(this.dataMap.get(a)) || this.isUndefined(this.dataMap.get(b))) ? this.responses(a, b, 'invalid') : this.responses(a, b, 'validate');
    }
}

const log = new Logger(inputJSON.data);
console.log(log.validate('/aboutcompany', '/aboutus'));