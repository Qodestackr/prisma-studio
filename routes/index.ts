import express from 'express'
import {getIndexPage, createUser, getAllUsers, getUserById} from '../controllers/user.controller'

const router = express.Router()

router.route('/').get(getIndexPage)

router.route('/create_user').get(createUser)

router.route('/users').get(getAllUsers)

router.route('/get_user/:id').get(getUserById)

export default router