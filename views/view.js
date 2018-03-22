const Table = require('cli-table');

class View {
  static printTable(data) {
    let keys;
    if(data.length > 1) {
      keys = Object.keys(data[0])
    } else {
      keys = Object.keys(data)
    }

    var table = new Table({
      head: keys,
      // colWidths: [100, 200]
    });

    let values;
    if(data.length > 1) {
      data.forEach(list => {
        values = Object.values(list)
        table.push(values);
      });
    } else {
      values = Object.values(data)
      table.push(values);
    }

    console.log(table.toString());
    process.exit()
  }

  static printLine(str) {
    console.log(str)
    process.exit()
  }

  static help() {
    var table = new Table({
      head: ["file", "command", "option", "description"],
      // colWidths: [100, 200]
    });
  
    table.push(["node index.js", "contacts:list", "null", "View list contacts"]);
    table.push(["node index.js", "contacts:add", "<name> <email> <phone>", "add new contacts"]);
    table.push(["node index.js", "contacts:update", "<id column> <value>", "update a contacts with new value"]);
    table.push(["node index.js", "contacts:delete", "<id column>", "delete a contacts with id contact"]);

    table.push(["node index.js", "addresses:list", "null", "View list addresses"]);
    table.push(["node index.js", "addresses:add", "<name> <email> <phone>", "add new addresses"]);
    table.push(["node index.js", "addresses:update", "<id column> <value>", "update a addresses with new value"]);
    table.push(["node index.js", "addresses:delete", "<id column>", "delete a addresses with id contact"]);
  
    console.log(table.toString());
  }
}

module.exports = View