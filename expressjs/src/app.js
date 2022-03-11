const httpServer = require("http");
const server = require("./server");

// app.listen(conf.getPort());
// console.log(conf.getPort());
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname), '/index.html');
//     // res.sendFile(path.join(__dirname), '/index.html');
// })

// console.log('Server is listening in ', conf.getPort());

// console.log('========= server ==============');
// console.log(server);
// console.log('========= server.getPort() ==============');
// console.log(server.get('port'));

httpServer.createServer(server).listen(server.get("port"), function () {
  console.log("KrishXpress Server running on Port ", server.get("port"));
});
