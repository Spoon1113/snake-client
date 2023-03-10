let connection;

const handleUserInput = function (key) {
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left")
  }
  if (key === "m") {
    connection.write("Say: Save me please")
  }
  if (key === "\u0003")
    process.exit();
}
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput } ;
