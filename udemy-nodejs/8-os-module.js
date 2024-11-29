const os = require('os');

//info about current user
const user = os.userInfo();

//returns system uptime in sec
console.log(`The system uptime is ${os.uptime()/3600}`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);