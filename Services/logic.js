const db=require('./db')


//get all employees

getAllEmployees=()=>{
   return db.Employee.find().then(users=>{
        if(users){
            return {
                status:true,
                statusCode:200,
                message:users
            }
        }
        else{
            return {
                status:false,
                statusCode:400,
                message:'no employees present'
            }

        }
    })
}
module.exports={
    getAllEmployees
}

//single employee

//add new employee

//edit employee

//delete

