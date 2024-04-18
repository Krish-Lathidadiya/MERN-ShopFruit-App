require('dotenv').config();
const express=require('express');
const app=express();

const Router=require('./router/route')
const connectionDB=require('./utils/db')
const errorMiddleware=require('./middlware/error.middlware')

app.use(express.json())
app.use(Router)
app.use(errorMiddleware)


const port=process.env.PORT 
connectionDB().then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
