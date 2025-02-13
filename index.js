const express = require('express');
const {users} = require('./data/users.json');
const { message } = require('statuses');
const app = express();
const PORT =8081;

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
        message:"Server is up and running!"
    })
})

/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Parameters: none
 */

app.get("/users", (req, res)=>{
    res.status(200).json({
        successfull:true,
        data:users
    })
})


/**
 * Route: /users/:id
 * Method: GET
 * Description: Get a user by id
 * Access: Public
 * Parameters: id
 */

app.get("/user/:id", (req, res)=>{
    const {id}=req.params;
    const user = users.find((element)=>element.id===id);
    if(!user)
        return res.status(404).json({
    successfull:false,
    message:"The user is not found"
        })

     return res.status(200).json({
        successfull:true,
        data:user
    })
})

app.get("*", (req, res)=>{
    res.status(404).json({
        message:"The Route Does Not Exist."
    })
})



app.listen(PORT, ()=>{
    console.log(`The server is up and running on port: ${PORT}`)
})
