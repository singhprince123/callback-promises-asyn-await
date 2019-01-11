const util = require('util');
const wait = util.promisify(setTimeout);

module.exports= {
    async process1(){
        try{
            console.log("process 1 started");
            await wait(100);
            throw new Error("Process 1 failed");
            console.time("process 1 ended");
            await wait(5000);
            console.timeEnd('process 1 ended');
            console.log();
            return 'process 1 value'
        }
        catch(error){
            console.log(error)
        }
        
    },

    async process2(){
        try{
            console.log("process 2 started");
            console.time("process 2 ended");
            await wait(3000);
            console.timeEnd('process 2 ended');
            console.log();
            return 'process 2 value'
        }
        catch(error){
            console.log(error)
        }
       
    }
}

