const express = require('express');
const router = express.Router();
router.get('/test', (req, res) => {
res.send('Hello World!')
})
router.get('/test2', (req, res) => {
res.send('Second test')})
router.get('/test3', (req, res) => {
res.send('Third test')
})
module.exports = router;