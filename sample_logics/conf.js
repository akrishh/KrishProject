exports.config = {
  //   directConnect: true,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
