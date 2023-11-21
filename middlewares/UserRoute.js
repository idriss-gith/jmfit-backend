const express= require("express")

const router = express.Router()
const User = require("../database/User")


router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      // Create a new user
      const newUser = new User({ email, password });
      await newUser.save()
      .then(response=>{
        res.status(201).json({ message: 'Signup successful', data:response._id });

      })
      
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(401).json({ error: "Mot de passe ou nom d'utilisateur invalide" });
      }
  
      res.status(200).json({ message: 'Signin successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  module.exports=router
