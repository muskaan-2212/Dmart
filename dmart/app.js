const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    const product={
        id:"p101",
        name:"PEARS FACE WASH",
        cost:760,
        qty:50
    };
     const Customer={
        id:"p101",
        name:"Vikas Bhagat",
        adress:"K R Puram",
        phone:9876543210
    };
     
     const Employee={
        id:"E101",
        name:"Pooja",
        adress:"Jayanagara",
        phone:9876543345
    };
     
     const Payment={
        Billno:"B16701",
        amount:1234,
        date:"12/06/2024"
    };
    res.render('index',
        {product:product,
            Customer,
            Employee,
            Payment
        });
    

});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")});