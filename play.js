const net = require('net');
//establish connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
// interpret incoming data as text
  conn.setEncoding("utf8")

  conn.on("data", (data) => {
    console.log(data)
  });
  return conn;
};

console.log("Connecting ...");
connect()