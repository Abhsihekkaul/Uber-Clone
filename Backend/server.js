const http = require('http');
const app = require('./app.js')
const port = process.env.PORT || 3000;
const connecttoDB = require('./db/db.js')


const server = http.createServer(app);


app.listen(()=>{
    console.log(`the server is connected to the ${port}  port `);
})