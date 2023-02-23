const express=require('express');
const app=express();
const config=require('config');
const cors=require('cors');
const { sequelize } = require('./models');
const { rootRouter } = require('./src/routes/root.router');
const path=require('path');

app.use(express.json());
app.use(cors(config.get('cors')));
const swaggerDocument=require("./docs/APIs/swagger.json");
const swaggerUI=require('swagger-ui-express');
const publicPathDir=path.join(__dirname,"./public");
app.use("/api/v1",rootRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/public",express.static(publicPathDir));
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
