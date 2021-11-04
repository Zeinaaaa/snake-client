const net = require("net");

// establishes a connection with the game server

  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("server says:", data)
    // code that does something when the connection is first established
  });


conn.on("connect", (connect) => {
  console.log(connect)
  // code that does something when the connection is first established
});

console.log("Connecting ...");
