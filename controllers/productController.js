const express = require('express');
const router = express.Router();

//require the product model
const Product = require('../models/productModel');

//GET add-edit-product page
router.get('/create-product', (req, res)=>{
    res.render('add-edit-product');
})

//GET product-list page
router.get('/product-list', (req, res)=>{
    res.render('product-list')
})

//GET product-detail page
router.get('/product-detail', (req, res)=>{
    res.render('product-detail');
})

//POST create-product details here
router.post('/create-new-product', (req, res)=>{
    insertRecord(req, res)
})

//create fresh new user
async function insertRecord(req, res) {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save((err, pdt)=>{
            if(!err)
                 res.redirect('product-list');
            else {
                if(err.name === "ValidationError") {
                    console.log(err.errors)
                    handleValidationError(err, req.body);
                    res.render('add-edit-product', {
                        viewTitle: 'add Product',
                        product: req.body

                    });
                }
                    console.log(`Err detected %s ${err}`)
            }
        });
    } catch(err) {
        throw err
    }
}

function handleValidationError(err, body) {
    for(field in err.errors){
        switch (err.errors[field].path) {
            case 'title':
                body['titleError'] = err.errors[field].message;
                break;
            case 'price':
                body['priceError'] = err.errors[field].message;
                break;
            case 'description':
                body['descriptionError'] = err.errors[field].message;
                break;
            case 'supplier':
                body['supplierError'] = err.errors[field].message;
                break;
            case 'phone':
                body['phoneError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

module.exports = router;