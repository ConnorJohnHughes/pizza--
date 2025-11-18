import express from "express";
import mysql2 from "mysql2";
import dotenv from 'dotenv';





dotenv.config();
const app = express();

const pool = mysql2.createPool({
    // host: '137.184.41.43',
    // user: 'root',
    // password: '51n{HcXg+Fb#L,Dq',
    // database: 'pizza_db',
    // port: 3306
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise();

const PORT = 3000;
app.set('view engine', 'ejs');


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

const orders = [];


//database route
app.get('/db-test', async(req,res) =>{
    try{
        const [orders] = await pool.query('SELECT * FROM orders');
        res.send(orders);
    } catch(err){
        console.error('Database error:', err)
    }
});





app.get('/', (req,res) => {
    res.render('home'); 
});

app.get('/contact-us', (req, res) => {
    res.render('contact'); 

});
app.get('/confirm', (req, res) => {
    res.render('confirmation'); 

});

app.post('/submit-order', (req, res) => {
   
    // console.log(req.body);


   const order = {
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    Email: req.body.Email,
    method: req.body.method,
    toppings: req.body.toppings,
    size: req.body.size,
    comment: req.body.comment,
    timeStamp: new Date()
}

// console.log(order)

orders.push(order);
// console.log(orders)

res.render('confirmation', { order }); 

});
app.get('/admin', async (req, res) => {
    // try{
    //     const [orders] = await pool.query('SELECT * FROM orders');
    //     res.render('admin', {orders});
    // } catch(err){
    //     console.error('Database error:', err)
    // }

    res.render('admin', { orders } ); 
   



});


app.listen(PORT,() =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});