const express= require("express");
require("./db/conn");
const User = require("./models/users");
const router= require("./routes/request.route");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(router);

 

app.post("/users", async(req,res)=>{

    try{
    const user = new User(req.body);

    const createUser=await user.save();
    res.status(201).send(createUser);
    }catch(e) {res.status(400).send(e);}
})


// app.get("/users", async (req,res)=>{
//     try{
//         const query = req.query;
//         if (req.query.id) {
//             const data = (await User.find()).filter(e => {
//                 return (e.userdetails.id.toString() === req.query.id)
//             });
//             return res.send( data )
//         }
//         return res.send(await User.find());

//     }catch(e){res.send(e);}
// })


app.get("/users", async (req,res)=>{

    try{
        const usersdata = await User.find();
        res.send(usersdata);
    }catch(e){
        res.send(e)
    }
})

//get the indivisual User data using id

app.get("/users/:id", async (req,res)=>{
 
    try{
 
        const id= req.params.id;
        const userdata= await User.findById(id);

        if(!userdata){
            return res.status(404).send();
        }else{
            res.send(userdata);
        }
        
    }catch(e){
        res.send(e);
    }
})

//Update the Users by it id

app.patch("/users/:id", async(req,res)=>{
    try{
        const id= req.params.id;
        const updateUsers = await User.findByIdAndUpdate(id, req.body,{
            new : true
        });
        res.send(updateUsers);
    }
    catch(e){
        res.status(404).send(e);
    }
})

//delete the users by it id

app.delete("/users/:id", async(req,res)=>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if(!req.params.id){

            return res.status(400).send();
        }
        res.send(deleteUser);
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})