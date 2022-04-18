import express from 'express'

import {
    getIndexPage, createUser, 
    getAllUsers, getUserById, 
    deleteUser, 
} from '../controllers/user.controller'

import { 
    createCarsById,getAllCars, 
    deleteCarById
} from '../controllers/cars.controllers'

const router = express.Router()

router.route('/').get(getIndexPage)

// User
router.route('/create_user').post(createUser)
router.route('/users').get(getAllUsers)
router.route('/get_user/:id').get(getUserById)
router.route('/delete/:id').delete(deleteUser)

// Cars
router.route('/new/:id').post(createCarsById)
router.route('/cars').get(getAllCars)
router.route('/car/:id').delete(deleteCarById)

export default router