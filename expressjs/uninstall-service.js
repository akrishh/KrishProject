const Service = require('node-windows').Service;

// Create a new service object
const svc = new Service({
    name: 'KrishXpress',
    script: 'C:\\Users\\akris\\Documents\\GitHub\\KrishProject\\expressjs\\server.js'
});

// Listen for "uninstall" even to know when it's done
svc.on('uninstall', function () {
    console.log('Uninstall completed...');
    console.log('The service exists: ', svc.exists);
});

// Uninstall a service
svc.uninstall();