const express = require('express');
		const cors = require('cors');
		const mysql = require('mysql');
		const app = express();
		const port = 5000;

		const SELECT_BOOKLIST_QUERY = "SELECT * FROM books";

		const connection = mysql.createConnection({
			host:'localhost',
			user: 'root',
			password: 'password',
			database: 'book_lib'
		});

		connection.connect( err =>{
			if(err){
				return err;
			}

		});

		app.use(cors());

		//SELECT QUERY

		app.get('/booklist',(req,res)=>{
			connection.query(SELECT_BOOKLIST_QUERY,(err,results)=>{
				if(err){
					return res.send(err)
				}
				else
				{
					return res.json({
						data:results
					})
				}
			});
			
		});


		app.get('/',(req,res)=>{
			res.send('go to /booklist to see booklist')
			// res.json(booklist);
		});

		app.listen(port, ()=>{
			console.log(`Server running on port ${port}`);
		});

