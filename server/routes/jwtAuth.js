
import pool from '../db';
const express = require('express');
const router = express.Router();

router.get('/register', async (req, res) => {
pool.query(
    'SELECT * from users',
    (error, result) => {
      if (error == undefined) {
        res.json(result.rows);
      } else {
        res.json({err: error});
      }
    }
  );
});

// router.post("/register", async (req, res) => {
// 	try {
// 		//1 destructure the request.body
// 		const { firstName, lastName, userRole, userEmail, userSlack, userPassword, userGithub } = req.body;


// 		//2 check if user exist throw error

// 		const user = await pool.query("select * from users where user_email=$1", [userEmail]);
// 		res.json(user.rows);

// 		//3 enter the user inside the database

// 		//4.generatin jwt our token
		
// 	}
// 	catch (err) {
// 		console.log(err.message);
// 		res.status(500).send("server error");
// 	}
// })


module.exports= router;