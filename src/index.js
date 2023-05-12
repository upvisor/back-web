import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import {connectDB} from './db.js'
import http from 'http'
import request from 'request'

import productsRoutes from './routes/products.routes.js'
import addCartRoutes from './routes/addCart.routes.js'
import sellsRoutes from './routes/sells.routes.js'
import contactRoutes from './routes/contact.routes.js'
import informationRoutes from './routes/information.routes.js'
import subscribeRoutes from './routes/subscribe.routes.js'
import viewContentRoutes from './routes/viewContent.routes.js'
import stadisticsRoutes from './routes/stadistics.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import aiDescriptionProductRoutes from './routes/aiDescriptionProduct.routes.js'
import aiDescriptionProductSeo from './routes/aiDescriptionProductSeo.routes.js'
import aiDescriptionCategoryRoutes from './routes/aiDescriptionCategory.routes.js'
import aiDescriptionCategorySeoRoutes from './routes/aiDescriptionCategorySeo.routes.js'
import aiTitleCategorySeoRoutes from './routes/aiTitleCategorySeo.routes.js'
import aiTitleProductSeoRoutes from './routes/aiTitleProductSeo.routes.js'
import promotionalCodeRoutes from './routes/promotionalCode.routes.js'
import clientTagRoutes from './routes/clientTag.routes.js'
import clientsRoutes from './routes/client.routers.js'
import storeDataRoutes from './routes/storeData.routes.js'
import chatRoutes from './routes/chat.routes.js'
import payRoutes from './routes/pay.routes.js'
import tagsRoutes from './routes/tags.routes.js'
import webhookRoutes from './routes/webhook.routes.js'

connectDB()

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(express.urlencoded({extended: false}))

app.use(productsRoutes)
app.use(addCartRoutes)
app.use(sellsRoutes)
app.use(contactRoutes)
app.use(informationRoutes)
app.use(subscribeRoutes)
app.use(viewContentRoutes)
app.use(stadisticsRoutes)
app.use(categoriesRoutes)
app.use(aiDescriptionProductRoutes)
app.use(aiDescriptionProductSeo)
app.use(aiDescriptionCategoryRoutes)
app.use(aiDescriptionCategorySeoRoutes)
app.use(aiTitleProductSeoRoutes)
app.use(aiTitleCategorySeoRoutes)
app.use(promotionalCodeRoutes)
app.use(clientsRoutes)
app.use(clientTagRoutes)
app.use(storeDataRoutes)
app.use(chatRoutes)
app.use(payRoutes)
app.use(tagsRoutes)
app.use(webhookRoutes)

server.listen(process.env.PORT || 3000)
console.log('Server on port', process.env.PORT || 3000)