const express = require('express');
const postUsers = require('../controllers/postUsers');
const postProject = require('../controllers/postProject');
const getUsers = require('../controllers/getUsers');
const postReviews = require('../controllers/postReviews');
const getReviews = require('../controllers/getReviews');
const getUserByEmail = require('../controllers/getUserByEmail');
const getProjects = require('../controllers/getProjects');
const getProjectById = require('../controllers/getProjectById');
const putProject = require('../controllers/putProject');
const getProjectByName = require('../controllers/getProjectByName');
const getProjectByCategory = require('../controllers/getProjectByCategory');
const putUser = require('../controllers/putUser');
const getAllProjects = require('../controllers/getAllProjects');
const postPreference = require('../controllers/postPreference');
const getReviewByRating = require('../controllers/getReviewByRating');
const postMercadoPago = require('../controllers/postMercadoPago');
const getPaymentMP = require('../controllers/getPaymentMP');
const getPreferenceByEmailBD = require('../controllers/getPreferenceByEmail');
const chatSocket = require('../controllers/chatSocket');
const getReviewsAll = require('../controllers/getReviewsAll');

const router = express.Router();

router.post("/createpreference",postPreference)
router.get('/projects/category', getProjectByCategory)
router.get('/projects/name', getProjectByName)
router.get('/projects/:id', getProjectById)
router.get('/projects', getProjects)
router.get('/allprojects', getAllProjects)
router.get('/users', getUsers)
router.get('/users/email', getUserByEmail)
router.put('/projects', putProject)
router.post('/login', postUsers)
router.post('/projects', postProject)
router.post('/reviews', postReviews)
router.get('/reviews/rating',getReviewByRating)
router.get('/reviewsall', getReviewsAll)
router.get('/reviews', getReviews)
router.put('/users', putUser)
router.post("/preference",postPreference)
router.post('/success', postMercadoPago);
router.get('/successpayment', getPaymentMP);
router.get('/getpreference', getPreferenceByEmailBD);
router.get('/chat', chatSocket);


module.exports = router
