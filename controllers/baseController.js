const express = require('express');
const router = express.Router();

/**
 * @params products
 * @GET All products
 * @return All products
*/
router.get('/', (req, res)=>{
    res.render('homepage');
})

/**
 * @params Admin login
 * @GET login
 * @return 
*/
router.get('/login', (req, res, next)=>{
    res.render('user-login')
})

/**
 * @params Admin login
 * @POST login User
 * @return Logged In user
*/

router.post('/admin/login', (req, res)=>{
//Log user in, authenticate user, route user to product-list page
});

module.exports = router;
