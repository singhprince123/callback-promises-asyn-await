const util = require('util');
const wait = util.promisify(setTimeout);

function getRandomNumber( a, b){
    return Math.floor(Math.random() * b ) + a
}

module.exports = {
    async secretAlgorithm(){
        console.time("secretAlgorithm");
        await wait(getRandomNumber(1,7) * 100);
        console.timeEnd("secretAlgorithm")

    }
}