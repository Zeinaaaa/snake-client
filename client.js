const net = require("net");

// establishes a connection with the game server

  const conn = net.createConnection({
    host: "localhost",
    port: 50541
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
});


console.log("Connecting ...");
module.exports = {net, conn, connect}
