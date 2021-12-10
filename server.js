const express = require("express");
const app = express();

//listen on a port
const port = process.env.PORT || 3000;
const server = app.listen(port, listening);

function listening() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("The server is starting and listening at:" + host + ":" + port);
}

// app.use(express.join({ limit: "1mb" }));
app.use(express.static("public"));
