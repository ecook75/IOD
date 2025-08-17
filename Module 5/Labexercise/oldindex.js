





const testRoutes = require('./routes/myTestRoutes');

const calculatorRoute = require('./routes/calculatorRoute');

const userRoutes = require('./routes/userRoutes');

const express = require('express')

const app = express()

const port = 3000

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

app.use('/', express.static('public'))

app.get('/test', (req, res) => {
res.send('Hello World')
})


app.use(express.json());

app.use('/mytest', testRoutes);

app.use('/calculator', calculatorRoute);

app.use('/users', userRoutes);

app.listen(port, () => {
console.log(`Example app listening at
http://localhost:${port}`)
})
