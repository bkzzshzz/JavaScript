const os = require('os');

// for user info
const user = os.userInfo();
console.log((user));

// system uptime
console.log(`The system uptime is ${os.uptime()}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs);
