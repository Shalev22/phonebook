var express = require('express');
var app = express();
var path = require('path');
var mysql = require("mysql");

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var listen_port = 8088;
var con = mysql.createConnection({});


var owner_id = 2; //should arrive from client side
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/home', function(req, res){
// 	res.sendFile(path.join(__dirname, 'public/checkup.html'));

// });



// app.post('/api/users', function(req, res) {
//     var user_id = req.body.id;
//     var token = req.body.token;
//     var geo = req.body.geo;

//     res.send(user_id + ' ' + token + ' ' + geo);
// });


// get all user's contacts
app.get('/get_contacts', function(req, res) {

	con.connect(function(err){
	  if(err){
	    console.log('Error connecting to Db');
	    return;
	  }
	  console.log('Connection established');
	});

	con.query('SELECT * FROM phonebook.contacts where owner_id = ' + owner_id,function(err,rows){
	  if(err) throw err;

	  console.log('Data received from Db:\n');
	  console.log(rows);
	  res.send(rows);
	});

	con.end(function(err) {
		console.log('Connection end');
	});

	});


// delete spesific contact


app.post('/delete_contact', function(req, res) {
    var contact_id = req.body.id;
	con.connect(function(err){
	  if(err){
	    console.log('Error connecting to Db');
	    return;
	  }
	  console.log('Connection established');
	});
	con.query(
	  'DELETE FROM phonebook.contacts WHERE contact_id = ' + contact_id,
	  function (err, result) {
	    if (err) throw err;

	    console.log('Deleted ' + result.affectedRows + ' rows of id ' + contact_id);
	    res.send('Deleted ' + result.affectedRows + ' rows of id ' + contact_id);
	  }
	);
	con.end(function(err) {
		console.log('Connection end');
	});	
    
});


// add contact
app.post('/add_contact', function(req, res) {
    var name = req.body.name;
    //var owner = req.body.owner;
    var owner = owner_id;
    var phone1 = req.body.p1;
	var phone2 = req.body.p2;
	var phone3 = req.body.p3;
	var commect = req.body.c;

	var contact = {name:name, owner_id:owner ,phone1:phone1 ,phone2:phone2 ,phone3:phone3 ,comment:commect};
	console.log(contact);

	con.connect(function(err){
	  if(err){
	    console.log('Error connecting to Db');
	    return;
	  }
	  console.log('Connection established');
	});

	con.query(
		'INSERT INTO phonebook.contacts SET ?', contact,
		 function(err,result ){
	  		if(err) throw err;

	  console.log('Last insert ID:' + result.insertId);
	  res.send('Last insert ID:' + result.insertId);
	  
	  });


	con.end(function(err) {
		console.log('Connection end');
	});	

});





app.get('/', function(req, res) {
    res.send('Welcome to my phonebook!')
});


app.listen(listen_port, function() {
    console.log('Example app listening om port ' + listen_port + '!')
});



