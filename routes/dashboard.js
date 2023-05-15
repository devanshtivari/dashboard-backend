const express = require('express');
const router = express.Router();
const dashboardData = require('../controller/category/dashboardData');
const userData = require('../controller/userData');
const addCategory = require('../controller/category/addCategory');
const getCategory = require('../controller/category/getCategory');
const editCategory = require('../controller/category/editCategory');
const deleteCategory = require('../controller/category/deleteCategory');
const getDevice = require('../controller/device/getDevice');

router.get('/', dashboardData);
router.get('/user/profile', userData);
router.post('/category/add', addCategory);
router.get('/category/index',getCategory);
router.post('/category/edit',editCategory);
router.post('/category/delete',deleteCategory);

router.get('/device/index',getDevice)

module.exports = router;