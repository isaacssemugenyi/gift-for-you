const express = require('express');
const router = express.Router();

router.get('/create-user', (req, res)=>{
    res.render('add-edit-user');
})

router.get('/user-list', (req, res)=>{
    res.render('user-list')
})

router.get('/user-detail', (req, res)=>{
    res.render('user-detail');
})
module.exports = router;