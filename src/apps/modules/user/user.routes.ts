import express from 'express'
import { userController } from './user.controller'
import auth from '../../middleWares/auth'

const router = express.Router()

router.get('/', auth('user'), userController.getAllUser)

export const userRouter = router
