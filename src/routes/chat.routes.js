import {Router} from 'express'
import { responseMessage, getMessages, createMessage, getIds, viewAdminMessage } from '../controllers/chat.controllers.js'

const router = Router()

router.post('/chat', responseMessage)

router.get('/chat', getIds)

router.get('/chat/:id', getMessages)

router.post('/chat/create', createMessage)

router.put('/chat/:id', viewAdminMessage)

export default router