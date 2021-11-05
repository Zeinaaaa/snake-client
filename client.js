const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  let connect =
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("server says:", data)
    // code that does something when the connection is first established
  });


conn.on("connect", (connect) => {
  console.log(connect)
  console.log('someone is connected')
  // code that does something when the connection is first established
  conn.write('Name: Zei');
  setTimeout(() => conn.write('Move: up'), 1000);
  //setInterval(() => conn.write('Move: up'), 1000);
  conn.write('Say: Hi')
});

module.exports = {net, conn, connect}
