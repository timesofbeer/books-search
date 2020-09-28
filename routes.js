const express =require('express');
// const api = require('./api');
const axios = require('axios');
const { response } = require('express');
const router=  express.Router();
const instance = axios.create({
    baseURL: process.env.API_HOST
  });
router.get('/book/:name',async function(req,res){
     try {

        if(req.params.name){
        let response =  await instance.get(`https://www.googleapis.com/books/v1/volumes `,{ 
                params: { q: req.params.name }
            });
            res.status(200).send({Books: response.data})
        }else{
           res.send(200).send({message: "No book name specified"});
        }  

     } catch (error) {
      res.send({messages:"error in Fetching Book Details" , error:error})   
     }
    
})
module.exports=router;