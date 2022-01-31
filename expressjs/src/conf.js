const port = process.env.PORT || 8080;
class Config {
    constructor(port) {
        this.port = port;
        console.log('inside configuration...', this.port);
    }

    getPort() {
        return this.port;
    }
}

module.exports = new Config(port);