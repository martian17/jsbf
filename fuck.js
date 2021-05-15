var process = require("process");
var fs = require('fs');
var executebf = require("./executebf.js");

fs.readFile(process.argv[1], 'utf8', function(err, data) {
    if (err) throw err;
    var program = data.split("/*")[1];
    if(!program){
        console.log("no bf program to execute");
        return false;
    }
    program = program.replace(/#[^\n]*/g,"\n").replace(/[^\<\>\+\-\.\,\[\]]/g,"");
    console.log("executing the bf program: "+program);
    console.log("raw output (in decimal):"+"\u001b[33m");
    var result = executebf(program);
    console.log("\u001b[0"+"mresult (in hex):");
    console.log("\u001b[33m"+result+"\u001b[0m");
});

