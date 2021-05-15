

var executebf = function(bf){
    var out = "";
    var hexchars = "0123456789ABCDEF";
    var hexs = [];
    for(var i = 0; i < 16; i++){
	for(var j = 0; j < 16; j++){
	    hexs[i*16+j] = hexchars[i]+hexchars[j];
	}
    }

    var stack = [0];//default 0
    var pc = 0;
    var ptr = 0;
    while(true){
        var ins = bf[pc];
        switch(ins){
            case ">":
            ptr++;
            if(ptr === stack.length){
                //add one cell
                stack.push(0);
            }
            break;
            case "<":
            ptr--;
            if(ptr < 0){
                console.log("\u001b[0merror, buffer overflow, check y' code. pointer smaller than 0");
                return false;
            }
            break;
            case "+":
            stack[ptr] = (stack[ptr]+1)&255;
            break;
            case "-":
            stack[ptr] = (stack[ptr]+255)&255;
            break;
            case ".":
            console.log(stack[ptr]+"");
	    out += hexs[stack[ptr]]+" ";
            break;
            case ",":
            console.log(stack,ptr);
	    return false;
            break;
            case "[":
            if(stack[ptr] === 0){
                var openparens = 0;
                while(true){
                    pc++;
                    if(openparens === 0 && bf[pc] === "]")break;
                    if(pc >= bf.length){
                        console.log("\u001b[0mbuffer overflow, program counter larger than the program");
                        return false;
                    }
                    if(bf[pc] === "["){
                        openparens++;
                    }else if(bf[pc] === "]"){
                        openparens--;
                    }
                }
            }
            break;
            case "]":
            if(stack[ptr] !== 0){
                var openparens = 0;
                while(true){
                    pc--;
                    if(openparens === 0 && bf[pc] === "[")break;
                    if(pc < 0){
                        console.log("\u001b[0mbuffer overflow, program counter lower than 0");
                        return false;
                    }
                    if(bf[pc] === "]"){
                        openparens++;
                    }else if(bf[pc] === "["){
                        openparens--;
                    }
                }
            }
            break;
        }
        pc++;
        if(pc >= bf.length){
            console.log("\u001b[0mexecution success, returning");
            break;
        }
    }
    return out;
};

module.exports = executebf;
