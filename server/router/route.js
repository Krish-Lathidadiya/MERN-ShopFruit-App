const express=require('express')
const Router=express.Router()

//controller
const {addProduct,getProducts}=require('../controllers/product.controller')

//validator middleware
const validateSchema =require('../middlware/validateSchema.middleware')

//validator schema
const productSchemaValidate=require('../validator/productSchema.validate')

Router.post('/api/addProduct',validateSchema(productSchemaValidate),(addProduct))
Router.get('/api/getProducts',(getProducts))

module.exports=Router;