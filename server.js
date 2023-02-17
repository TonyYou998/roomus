const express=require('express');
const app=express();
const config=require('config');
const cors=require('cors');
const { sequelize } = require('./models');
const { rootRouter } = require('./src/routes/root.router');
app.use(cors(config.get('cors')));
app.use(rootRouter);
app.listen(3000,async ()=>{
    console.log('running on port 3000');
    try{
        await sequelize.authenticate();
        console.log("connect db success");
    }
    catch(err){
        console.log("connection failed");
        console.log(`error:${err}`);
    }
});
