const { process1, process2} = require('./processes')

async function main(){
    try{
       console.time("total time to end");
       const data = await Promise.all([process1(), process2()]);

       console.log();

       console.log("process 1 retruned:" , data[0]);
       console.log("process 2 returned:", data[1]);

       console.log();

       console.timeEnd("total time to end");
    }
    catch(error){
        console.log(error)
    }
}

main()