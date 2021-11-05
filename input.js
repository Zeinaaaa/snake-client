const { conn } = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    if (data === '\u0003') {
      process.exit();
    }
    if(data === 'w') {
      conn.write("Move: up")
    }
    if(data === 'a') {
      conn.write('Move: left')
    }
    if(data === 's') {
      conn.write('Move: down')
    }if(data === 'd') {
      conn.write('Move: right')
    }
    
  });
  return stdin;
};



module.exports = {setupInput};