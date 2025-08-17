const express = require("express"); // import the express package

const calculatorRoutes = require('./routes/calculatorRoutes');

// const friendRoutes = require('./routes/friendRoutes');

// const app = express(); // create a new app
// const port = 3000; // unique 4 digit port

// app.use(express.json())

// app.use('/', express.static('public'))

// // const app2 = express(); // create a new app
// // const port2 = 3001; // unique 4 digit port

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// app.use('/friends', friendRoutes);

// // map the calculator routes to our app
//app.use('/calculator', calculatorRoutes);

// // starts the backend app on the given port
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

// // app2.listen(port2, () => {
// //     console.log(`Example app listening at http://localhost:${port2}`);
// // });

//const app = require('./app')

// import the app
const app = require('./app');
const port = 3000

// start the app to listen on the right port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})