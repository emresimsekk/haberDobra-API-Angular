const express = require('express');
var cors = require('cors')
const router = express.Router();

// Middlewares
const auth = require('./middlewares/auth');

//Controller
const UserController = require('./controllers/User');
const  CategoryController= require('./controllers/Category');
const  NewsController= require('./controllers/News');



// User
router.post('/api/signup' ,  cors(), UserController.create)
router.post('/api/signin',  cors(), UserController.signin)

// Category
router.post('/api/categories',cors(), CategoryController.add)
router.put('/api/categories/:id',cors(), CategoryController.update)
router.delete('/api/categories/:id',cors(), CategoryController.delete)

router.get('/api/categories',cors(), CategoryController.getAll)
router.get('/api/categories/:id',cors(), CategoryController.get)

// News

router.post('/api/news',cors(), NewsController.add)
router.put('/api/news/:id',cors(), NewsController.update)
router.delete('/api/news/:id',cors(), NewsController.delete)

router.get('/api/news', cors(),NewsController.getAll)
router.get('/api/news/:id',cors(), NewsController.get)




module.exports = router;