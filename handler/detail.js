const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Command","Load Status");

module.exports = (client) => {

        const details = readdirSync(`./details/`).filter(f => f.endsWith('.js'));

        for(let file of details) {
            let pull = require(`../details/${file}`);

            if(pull.name){
                client.details.set(pull.name, pull);
                table.addRow(file, `✅`);
            }else {
                table.addRow(file,'❎ -> missing something');
                continue;
            };
        }
        console.log(table.toString());
}