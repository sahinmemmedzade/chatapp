import express from "express"

import { sendMessage, getMessages } from "../controller/message.controller.js"

import protectRoute from "../middlewares/protectRoute.js"

const router = express.Router()

router.use(protectRoute)

router.get('/:receiverId', getMessages)

router.post('/:receiverId', sendMessage)

export default router