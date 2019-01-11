const {process1 , process2} = require('./processes');

//we have to processes  and we want to run sequentially

async function main(){
    try{
      console.time("total runing time");
      const value1 = await process1();
      const value2 = await process2();

      console.log('process 01 Returned:', value1);
      console.log('process 02 Returned :', value2);

      console.log();

      console.timeEnd("total runing time")
    }
    catch(error){
      console.error("error" , error)
    }
}

main();