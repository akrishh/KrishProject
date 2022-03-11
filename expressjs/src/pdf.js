var download = require("download-pdf");

var pdf =
  ">>https://ia801807.us.archive.org/2/items/20210405_20210405_0428/%E0%AE%85%E0%AE%9A%E0%AF%81%E0%AE%B0%E0%AE%A9%E0%AF%8D.pdf#page=315&zoom=auto,-150,36";

var options = {
  directory: "./public/pdf/",
  filename: "03-06-2022.pdf",
};

download(pdf, options, function (err) {
  if (err) throw err;
  console.log("pdf download completed...");
});
