import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

const orders = [];



app.get('/', (req,res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`); 
});

app.get('/contact-us', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`); 

});
app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`); 

});
app.get('/admin', (req, res) => {


    res.send(orders);
    // res.sendFile(`${import.meta.dirname}/views/admin.html`); 


});
app.post('/submit-order', (req, res) => {
    // res.sendFile(`${import.meta.dirname}/views/confirmation.html`); 
   
    // console.log(req.body);


   const order = {
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    Email: req.body.Email,
    method: req.body.method,
    toppings: req.body.toppings,
    size: req.body.size,
    comment: req.body.comment
}

// console.log(order)

orders.push(order);
console.log(orders)
});

app.listen(PORT,() =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});