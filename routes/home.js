const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    // res.render('index', {title: 'Vidly', message: 'Hey, welcome to Vidly!'});
    
    res.send('Welcome to Vidly!');
});

module.exports = router;