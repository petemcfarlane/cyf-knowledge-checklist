
import pool from '../db';
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");



  router.post("/register", async (req, res) => {
    const { firstName, lastName, userRole, userEmail, userSlack, userPassword, userGithub, userClassId } = req.body;
    try {
      //destructure req.body
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        userEmail
      ]);
       if (user.rows.length !== 0) {
       return res.status(401).json("User already exist!");
      }
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = bcrypt.hash(userPassword,salt);

      const newUser = await pool.query(
        'INSERT INTO users (first_name, last_name, user_role,user_email,user_slack,user_password,user_github,' +
        'class_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ',
        [firstName, lastName, userRole, userEmail, userSlack, bcryptPassword, userGithub, userClassId]
  
      );
      res.json(newUser);
    }
    

    catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
  
});



module.exports= router;