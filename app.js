const express = require('express');
const app = express();

const path = require('path');

const port =  process.env.PORT || 80;

app.use(express.urlencoded({ extended: true }))
app.use('/static' , express.static('static'))

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views')); //set the views directory!

app.get("/" , (req , res)=>{     //GET request
    res.status(200).render('home.pug')
});


app.listen(port , ()=>{
    console.log(`this app started on port ${port}`)
})
