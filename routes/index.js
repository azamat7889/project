const express = require('express');
const dbProduct = require('../model/Product')
const dbUser = require('../model/User')
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  dbProduct.find({} , (err , data) => {
    try {
      res.render('card', { 
        title: 'Bosh sahifasi',
        db : data ,
        login : req.isAuthenticated()

      });
    } catch (err) {
        console.log(err);
    }
  })
 
});

router.get('/category', function(req, res, next) {
  dbProduct.find({} , (err , data) => {
    try {
      res.render('category' , { 
        title: 'category',
        db : data ,
        login : req.isAuthenticated()
      });
    } catch (err) {
        console.log(err);
    }
  })
 
});

router.get('/category/mi', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"mi" }}] , (err , data) => {
    try {
      res.render('card' , { 
        title: 'mi',
        db : data ,
        login : req.isAuthenticated()
      });
    } catch (err) {
        console.log(err);
    }
  })
 
});
router.get('/category/samsung', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"samsung" }}] , (err , data) => {
    try {
      res.render('card' , { 
        title: 'samsung',
        db : data ,
        login : req.isAuthenticated()
      });
    } catch (err) {
        console.log(err);
    }
  })
 
});
router.get('/category/apple', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"apple" }}] , (err , data) => {
    try {
      res.render('card' , { 
        title: 'apple',
        db : data ,
        login : req.isAuthenticated()
      });
    } catch (err) {
        console.log(err);
    }
  })
 
});
router.get('/category/all', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"boshqalar" }}] , (err , data) => {
    try {
      res.render('card' , { 
        title: 'boshqalar',
        db : data ,
        login : req.isAuthenticated()
      });
    } catch (err) {
        console.log(err);
    }
  })
 
});



module.exports = router;
