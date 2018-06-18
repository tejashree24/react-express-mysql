const express = require('express');
		const cors = require('cors');
		const mysql = require('mysql');
		const app = express();
		const port = 5000;

<<<<<<< Updated upstream
		const SELECT_BOOKLIST_QUERY = "SELECT * FROM books";
=======
<<<<<<< Updated upstream
=======
		//SELECT QUERY FOR BOOKS
		const SELECT_BOOKLIST_QUERY = "SELECT * FROM books";
		const SELECT_FICTION_QUERY = "SELECT * FROM fiction";
		const SELECT_NONFICTION_QUERY = 'SELECT * FROM nonfiction';
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream

=======
		app.get('/fiction',(req,res)=>{
			connection.query(SELECT_FICTION_QUERY,(err,results)=>{
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

		app.get('/nonfiction',(req,res)=>{
			connection.query(SELECT_NONFICTION_QUERY,(err,results)=>{
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

>>>>>>> Stashed changes
>>>>>>> Stashed changes
		app.get('/',(req,res)=>{
			res.send('go to /booklist to see booklist')
			// res.json(booklist);
		});

		app.listen(port, ()=>{
			console.log(`Server running on port ${port}`);
		});

