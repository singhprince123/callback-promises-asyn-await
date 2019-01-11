 
 //callback Hell problem
function  endpointHandler( req, res) {
    User.findById( req.userId, (err, user) => {
        if(err){
            res.send(err)
        }else{
           Task.findById(user.taskId, (err, tasks) => {
               if(err){
                   res.send(err)
               }else{
                   tasks.completed = true;
                   tasks.save( err => {
                       if(err){
                           res.send(err)
                       }else{
                           res.send("Tasks completed")
                       }
                   })
               }
           })
        }
    });
}

// solution by Promises

function endpointHandler(req, res){
    User.findById( req.userID )
        .then(user => {
            return  Tasks.findById(req.taskId )
        })
        .then(tasks =>{
            tasks.completed = true;
            return tasks.save()
        })
        .then(() => {
            res.send('Task completed')
        })
        .catch(err => {
            res.send(err)
        })
}

//solution by Async/await

async function endpointHandler( req, res ){
    try{
        const user = await User.findById(req.userId);
        const task = await Tasks.findById(user.taskId);
        task.completed= true;
        await task.save();
        res.send('task completed')
    }
    catch(error){
        res.send(error)
    }
}