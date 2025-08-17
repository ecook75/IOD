// index.js - updated version

const swaggerUi = require('swagger-ui-express');

swaggerDocument = require('./swagger.json');
 

// import the app
const app = require('./app');

// define the port
const port = 3000

// start the app to listen on the right port
app.listen(port, () => {
console.log(`Example app listening at
http://localhost:${port}`)
})

app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);