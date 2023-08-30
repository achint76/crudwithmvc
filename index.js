const express = require('express');
const app = express();
const Router = require('./routes/userRouter');

app.use(express.json());

app.get('/', (req,res)=>{
    console.log('Get Response'); 
    res.send('API is running......');
})

app.use('/userinfo', Router);
app.listen(3001, () => {
    console.log(`The server is running on 3001`);   
});