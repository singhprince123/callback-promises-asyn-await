const now = require("performance-now")
const { secretAlgorithm } = require('./processes')
const Number_of_Runs = 10;

async function main(){

    try{
       let totalTime = 0;

       for(let i=0 ; i< Number_of_Runs; i++){
           const start = now();
           await secretAlgorithm();
           const end = now();
           totalTime += (end - start)
       }

       console.log()

       console.log("total time to Run:" , totalTime);
       console.log("Number of times runs:", Number_of_Runs);
       console.log("average Time:" ,(totalTime/Number_of_Runs).toFixed(3));

    }
    catch(error){
        console.log(error)
    }
}

main()